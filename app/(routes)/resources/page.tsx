import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { ContentImage } from "@/components/ui/content-image";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Resources"
};

export default function ResourcesPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero
        title="Resources"
        subtitle="Practical education for residents, families, and referral partners navigating treatment and recovery planning."
      />
      <section className="section pt-0">
        <div className="container">
          <ContentImage
            src="/images/resources/hero.jpg"
            alt="A quiet reading and counseling space with soft natural light"
            ratio="hero"
            caption="Clear information helps people make calmer decisions."
          />
        </div>
      </section>
      <section className="section pt-0">
        <div className="container grid gap-5 md:grid-cols-3">
          <ContentImage
            src="/images/resources/families.jpg"
            alt="Family members having a supportive conversation in a living room"
            caption="Guidance for families during uncertain moments."
          />
          <ContentImage
            src="/images/resources/professionals.jpg"
            alt="A case manager and clinician reviewing referral notes together"
            caption="Direct resources for referral partners."
          />
          <ContentImage
            src="/images/resources/blog.jpg"
            alt="A notebook and laptop on a table in a calm workspace"
            caption="Plain-language articles for real-world recovery planning."
          />
        </div>
      </section>
      <section className="section pt-0">
        <div className="container grid gap-5">
          {posts.map((post) => (
            <article key={post.slug} className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <p className="text-xs uppercase tracking-[0.1em] text-primary-dark">{post.date}</p>
              <h2 className="mt-2 text-2xl font-semibold text-neutral-900">
                <Link href={`/resources/${post.slug}`} className="focus-ring rounded hover:text-primary-dark">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-neutral-700">{post.description}</p>
              <p className="mt-3 text-sm text-neutral-700">By {post.author}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
