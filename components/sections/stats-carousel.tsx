"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { StatItem } from "@/lib/stats";
import { stats } from "@/lib/stats";

type ParsedValue = {
  hasNumber: boolean;
  prefix: string;
  suffix: string;
  target: number;
  decimals: number;
};

function parseStatValue(raw: string): ParsedValue {
  const match = raw.match(/-?\d[\d,]*(?:\.\d+)?/);
  if (!match || match.index === undefined) {
    return { hasNumber: false, prefix: "", suffix: "", target: 0, decimals: 0 };
  }

  const numberChunk = match[0];
  const target = Number(numberChunk.replace(/,/g, ""));
  const decimalPart = numberChunk.split(".")[1];

  return {
    hasNumber: true,
    prefix: raw.slice(0, match.index),
    suffix: raw.slice(match.index + numberChunk.length),
    target,
    decimals: decimalPart ? decimalPart.length : 0
  };
}

function formatValue(value: number, decimals: number) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(value);
}

function CountUpValue({ rawValue, triggerKey }: { rawValue: string; triggerKey: number }) {
  const parsed = useMemo(() => parseStatValue(rawValue), [rawValue]);
  const [displayValue, setDisplayValue] = useState(rawValue);

  useEffect(() => {
    if (!parsed.hasNumber) {
      setDisplayValue(rawValue);
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setDisplayValue(`${parsed.prefix}${formatValue(parsed.target, parsed.decimals)}${parsed.suffix}`);
      return;
    }

    const duration = 1300;
    const start = performance.now();
    let frame = 0;

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = parsed.target * eased;

      setDisplayValue(`${parsed.prefix}${formatValue(current, parsed.decimals)}${parsed.suffix}`);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [parsed, rawValue, triggerKey]);

  return <>{displayValue}</>;
}

function DesktopStatCard({ item, index, triggerKey }: { item: StatItem; index: number; triggerKey: number }) {
  return (
    <article
      data-stat-card
      data-index={index}
      className="group relative h-full overflow-hidden rounded-[10px] border border-[#e8e3dc] bg-white p-7 shadow-[0_16px_36px_rgba(17,17,17,0.09)] opacity-0 transition-transform duration-500 hover:-translate-y-1"
      style={{ transform: "translateY(36px) scale(0.96)", filter: "blur(4px)" }}
    >
      <span className="absolute right-4 top-4 h-2.5 w-2.5 rounded-full bg-primary/70" aria-hidden="true" />
      <div className="absolute inset-x-7 bottom-0 h-1 rounded-full bg-primary/80" aria-hidden="true" />
      <p className="text-4xl font-bold tracking-tight text-neutral-900">
        <CountUpValue rawValue={item.value} triggerKey={triggerKey} />
      </p>
      <p className="mt-3 text-[1.35rem] font-semibold leading-tight text-neutral-900">{item.label}</p>
      <p className="mt-3 pr-2 text-sm leading-relaxed text-neutral-700">{item.subtext}</p>
    </article>
  );
}

function MobileStatCard({ item, triggerKey }: { item: StatItem; triggerKey: number }) {
  return (
    <article className="relative h-full overflow-hidden rounded-[10px] border border-[#e8e3dc] bg-white p-6 shadow-[0_16px_34px_rgba(17,17,17,0.08)]">
      <span className="absolute right-4 top-4 h-2.5 w-2.5 rounded-full bg-primary/70" aria-hidden="true" />
      <div className="absolute inset-x-6 bottom-0 h-1 rounded-full bg-primary/80" aria-hidden="true" />
      <p className="text-4xl font-bold tracking-tight text-neutral-900">
        <CountUpValue rawValue={item.value} triggerKey={triggerKey} />
      </p>
      <p className="mt-3 text-[1.3rem] font-semibold leading-tight text-neutral-900">{item.label}</p>
      <p className="mt-3 text-sm leading-relaxed text-neutral-700">{item.subtext}</p>
    </article>
  );
}

export function StatsCarousel() {
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [sourcesOpen, setSourcesOpen] = useState(false);
  const [animationCycle, setAnimationCycle] = useState(0);

  const sources = useMemo(() => {
    return stats.map((item) => ({ id: item.id, label: item.label, source: item.source }));
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const desktopCards = Array.from(section.querySelectorAll<HTMLElement>("[data-stat-card]"));
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function resetCards() {
      if (prefersReducedMotion) {
        desktopCards.forEach((card) => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0) scale(1)";
          card.style.filter = "none";
        });
        return;
      }

      desktopCards.forEach((card) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(36px) scale(0.96)";
        card.style.filter = "blur(4px)";
      });
    }

    resetCards();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setAnimationCycle((prev) => prev + 1);

            desktopCards.forEach((card, index) => {
              if (prefersReducedMotion) {
                card.style.opacity = "1";
                card.style.transform = "translateY(0) scale(1)";
                card.style.filter = "none";
                return;
              }

              card.animate(
                [
                  { opacity: 0, transform: "translateY(36px) scale(0.96)", filter: "blur(4px)" },
                  { opacity: 1, transform: "translateY(0) scale(1)", filter: "blur(0px)" }
                ],
                {
                  duration: 900,
                  delay: index * 140,
                  easing: "cubic-bezier(0.16, 1, 0.3, 1)",
                  fill: "forwards"
                }
              );
            });
          } else {
            resetCards();
          }
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  function scrollToStat(index: number) {
    const element = cardRefs.current[index];
    if (!element) {
      return;
    }

    element.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    setActiveIndex(index);
  }

  function handleMobileScroll() {
    const container = mobileContainerRef.current;
    if (!container) {
      return;
    }

    const width = container.clientWidth;
    const nextIndex = Math.round(container.scrollLeft / width);
    setActiveIndex(Math.max(0, Math.min(nextIndex, stats.length - 1)));
  }

  return (
    <section ref={sectionRef} className="section relative overflow-hidden bg-[#f7f6f3]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40 [background:linear-gradient(to_right,transparent_95%,rgba(214,124,45,0.12)_100%),repeating-linear-gradient(0deg,transparent,transparent_18px,rgba(17,17,17,0.02)_19px)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 top-8 hidden h-52 w-52 rounded-full border border-primary/30 md:block" />
      <div className="container relative">
        <h2 className="section-heading">Connecticut &amp; New Haven Overdose Context</h2>
        <p className="section-subheading">A simple snapshot to help families and professionals understand local need.</p>
        <div aria-hidden="true" className="mt-3 h-1.5 w-28 rounded-full bg-primary/80" />

        <div className="mt-8 hidden gap-6 md:grid md:grid-cols-3">
          {stats.map((item, index) => (
            <DesktopStatCard key={item.id} item={item} index={index} triggerKey={animationCycle} />
          ))}
        </div>

        <div
          ref={mobileContainerRef}
          onScroll={handleMobileScroll}
          className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:hidden"
          aria-label="Overdose trend statistics"
        >
          {stats.map((item, index) => (
            <div
              key={item.id}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              className="w-[85%] shrink-0 snap-center"
            >
              <MobileStatCard item={item} triggerKey={animationCycle} />
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-center gap-2 md:hidden">
          {stats.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Go to stat ${index + 1}`}
              onClick={() => scrollToStat(index)}
              className={index === activeIndex ? "h-2.5 w-2.5 rounded-full bg-primary" : "h-2.5 w-2.5 rounded-full bg-neutral-200"}
            />
          ))}
        </div>

        <div className="mt-4">
          <button type="button" onClick={() => setSourcesOpen(true)} className="focus-ring rounded text-sm font-semibold text-primary-dark underline">
            Sources
          </button>
        </div>
      </div>

      {sourcesOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4" role="dialog" aria-modal="true" aria-labelledby="stats-sources-title">
          <div className="max-h-[80vh] w-full max-w-2xl overflow-auto rounded-md bg-white p-6 shadow-[0_12px_28px_rgba(17,17,17,0.08)]">
            <div className="flex items-center justify-between gap-3">
              <h3 id="stats-sources-title" className="text-xl font-semibold text-neutral-900">
                Data Sources
              </h3>
              <button type="button" onClick={() => setSourcesOpen(false)} className="focus-ring rounded-md border border-line px-3 py-1.5 text-sm font-semibold text-neutral-700">
                Close
              </button>
            </div>

            <ul className="mt-5 space-y-4 text-sm text-neutral-700">
              {sources.map((entry) => (
                <li key={entry.id} className="rounded-md border border-line bg-neutral-50 p-3">
                  <p className="font-semibold text-neutral-900">{entry.label}</p>
                  <a href={entry.source.link} target="_blank" rel="noreferrer" className="focus-ring mt-1 inline-block rounded text-primary-dark underline">
                    {entry.source.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </section>
  );
}
