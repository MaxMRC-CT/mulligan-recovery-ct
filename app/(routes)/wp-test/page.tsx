import { fetchWP } from "@/lib/wp";

type PageQuery = {
  page: {
    title: string;
    content: string;
    uri: string;
  } | null;
};

export default async function WPTestPage() {
  const data = await fetchWP<PageQuery>(
    `
    query WPTestPage($uri: ID!) {
      page(id: $uri, idType: URI) {
        title
        content
        uri
      }
    }
    `,
    { uri: "/resources/" }
  );

  if (!data.page) {
    return (
      <main className="mx-auto max-w-3xl p-6">
        <h1 className="text-2xl font-semibold">WP Test</h1>
        <p className="mt-4">
          Could not find a WordPress page at <code>/resources/</code>.
          Confirm it exists and is published in WordPress.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl p-6">
      <p className="text-sm opacity-70">Pulled from WordPress: {data.page.uri}</p>
      <h1 className="mt-2 text-3xl font-semibold">{data.page.title}</h1>

      {/* WordPress content is HTML. This is okay for a test. We'll sanitize/structure later. */}
      <div
        className="prose prose-neutral mt-6 max-w-none"
        dangerouslySetInnerHTML={{ __html: data.page.content }}
      />
    </main>
  );
}

