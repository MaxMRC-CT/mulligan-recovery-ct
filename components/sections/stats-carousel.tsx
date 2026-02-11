"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { StatItem } from "@/lib/stats";
import { stats } from "@/lib/stats";

function StatCard({ item, animateIn, delayMs }: { item: StatItem; animateIn: boolean; delayMs: number }) {
  return (
    <article
      className={`card h-full transition-all duration-700 ease-out ${animateIn ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      <p className="mt-3 text-3xl font-bold text-neutral-900">{item.value}</p>
      <p className="mt-2 text-base font-semibold text-neutral-900">{item.label}</p>
      <p className="mt-2 text-sm text-neutral-700">{item.subtext}</p>
    </article>
  );
}

export function StatsCarousel() {
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [sourcesOpen, setSourcesOpen] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const sources = useMemo(() => {
    return stats.map((item) => ({ id: item.id, label: item.label, source: item.source }));
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.2 }
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
    <section ref={sectionRef} className="section bg-white">
      <div className="container">
        <h2 className="section-heading">Connecticut &amp; New Haven Overdose Context</h2>
        <p className="section-subheading">
          A simple snapshot to help families and professionals understand local need.
        </p>

        <div className="mt-8 hidden gap-6 md:grid md:grid-cols-3">
          {stats.map((item, index) => (
            <StatCard key={item.id} item={item} animateIn={isInView} delayMs={index * 120} />
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
              <StatCard item={item} animateIn={true} delayMs={0} />
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
              className={
                index === activeIndex
                  ? "h-2.5 w-2.5 rounded-full bg-primary"
                  : "h-2.5 w-2.5 rounded-full bg-neutral-200"
              }
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
          <div className="max-h-[80vh] w-full max-w-2xl overflow-auto rounded-2xl bg-white p-6 shadow-card">
            <div className="flex items-center justify-between gap-3">
              <h3 id="stats-sources-title" className="text-xl font-semibold text-neutral-900">
                Data Sources
              </h3>
              <button type="button" onClick={() => setSourcesOpen(false)} className="focus-ring rounded-lg border border-line px-3 py-1.5 text-sm font-semibold text-neutral-700">
                Close
              </button>
            </div>

            <ul className="mt-5 space-y-4 text-sm text-neutral-700">
              {sources.map((entry) => (
                <li key={entry.id} className="rounded-xl border border-line bg-neutral-50 p-3">
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
