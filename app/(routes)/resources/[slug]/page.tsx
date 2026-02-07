import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type Params = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  try {
    const post = getPostBySlug(params.slug);
    return {
      title: post.title,
      description: post.description
    };
  } catch {
    return {
      title: "Resource"
    };
  }
}

export default function ResourcePostPage({ params }: Params) {
  let post;

  try {
    post = getPostBySlug(params.slug);
  } catch {
    notFound();
  }

  return (
    <section className="section pt-16">
      <article className="container rounded-2xl border border-line bg-white p-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.1em] text-primary-dark">{post.date}</p>
        <h1 className="mt-2 text-3xl font-bold text-neutral-900 md:text-4xl">{post.title}</h1>
        <p className="mt-2 text-sm text-neutral-700">By {post.author}</p>
        <div className="prose-md mt-8">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>
      </article>
    </section>
  );
}
