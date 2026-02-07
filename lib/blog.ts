import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content/resources");

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

export function getAllPosts(): BlogPostMeta[] {
  const filenames = fs.readdirSync(contentDirectory).filter((file) => file.endsWith(".md"));

  return filenames
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const filePath = path.join(contentDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: String(data.title),
        description: String(data.description),
        date: String(data.date),
        author: String(data.author)
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): BlogPost {
  const filePath = path.join(contentDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: String(data.title),
    description: String(data.description),
    date: String(data.date),
    author: String(data.author),
    content
  };
}
