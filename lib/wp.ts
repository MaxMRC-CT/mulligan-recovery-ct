type WPGraphQLError = { message: string };

export async function fetchWP<TData>(
  query: string,
  variables: Record<string, any> = {}
): Promise<TData> {
  const url = process.env.WORDPRESS_API_URL;

  if (!url) {
    throw new Error("WORDPRESS_API_URL is not set. Check .env.local.");
  }

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    // cache control (safe default). You can tweak later.
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`WPGraphQL HTTP error: ${res.status}`);
  }

  const json: { data?: TData; errors?: WPGraphQLError[] } = await res.json();

  if (json.errors?.length) {
    const msg = json.errors.map((e) => e.message).join("; ");
    throw new Error(`WPGraphQL error: ${msg}`);
  }

  if (!json.data) {
    throw new Error("WPGraphQL returned no data.");
  }

  return json.data;
}

