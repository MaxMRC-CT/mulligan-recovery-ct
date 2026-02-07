import Link from "next/link";
import { PageHero } from "@/components/page-hero";
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
        <div className="container grid gap-5">
          {posts.map((post) => (
            <article key={post.slug} className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <p className="text-xs uppercase tracking-[0.1em] text-brand-dark">{post.date}</p>
              <h2 className="mt-2 text-2xl font-semibold text-[#18414f]">
                <Link href={`/resources/${post.slug}`} className="focus-ring rounded hover:text-brand-dark">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-[#355666]">{post.description}</p>
              <p className="mt-3 text-sm text-[#5d7985]">By {post.author}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
