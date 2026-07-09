"use client";

import Search from "@/components/search";

const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const searchApiKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY;

const INDEX_NAME = "starter_products";

export default function Home() {
  const isConfigured = Boolean(appId && searchApiKey);

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-10 px-6 py-24">
      <div className="flex max-w-xl flex-col items-center gap-4 text-center">
        <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
          Algolia × Vercel
        </span>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Search, ready out of the box
        </h1>
        <p className="text-balance text-muted-foreground">
          A Next.js starter wired to Algolia through the Vercel Marketplace
          integration. Seed the sample products, then search them — try{" "}
          <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-xs">
            ⌘K
          </kbd>
          .
        </p>
      </div>

      {isConfigured ? (
        <Search
          applicationId={appId!}
          apiKey={searchApiKey!}
          indexName={INDEX_NAME}
          placeholder="Search products…"
          buttonText="Search products…"
          attributes={{
            primaryText: "name",
            secondaryText: "brand",
            tertiaryText: "category",
          }}
        />
      ) : (
        <div className="w-full max-w-md rounded-lg border border-border bg-muted/40 p-6 text-sm">
          <p className="mb-3 font-medium">Almost there — connect Algolia:</p>
          <ol className="list-inside list-decimal space-y-2 text-muted-foreground">
            <li>
              Install the{" "}
              <a
                href="https://vercel.com/marketplace/algolia-production"
                className="underline underline-offset-4"
              >
                Algolia integration
              </a>{" "}
              on your Vercel project
            </li>
            <li>
              Run <code className="font-mono">vercel env pull .env.local</code>
            </li>
            <li>
              Run <code className="font-mono">npm run seed</code>
            </li>
            <li>Restart the dev server</li>
          </ol>
        </div>
      )}

      <footer className="flex gap-6 text-sm text-muted-foreground">
        <a
          href="https://www.algolia.com/doc/"
          className="hover:text-foreground"
        >
          Algolia docs
        </a>
        <a
          href="https://vercel.com/marketplace/algolia-production"
          className="hover:text-foreground"
        >
          Marketplace listing
        </a>
        <a
          href="https://github.com/algolia/algolia-vercel-starter"
          className="hover:text-foreground"
        >
          GitHub
        </a>
      </footer>
    </main>
  );
}
