"use client";

import Search from "@/components/search";
import { ThemeToggle } from "@/components/theme-toggle";

const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const searchApiKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY;

const INDEX_NAME = "starter_products";
const REPO_URL = "https://github.com/algolia/algolia-vercel-starter";
const DEPLOY_URL =
  "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Falgolia%2Falgolia-vercel-starter&project-name=algolia-starter&repository-name=algolia-vercel-starter&stores=%5B%7B%22type%22%3A%22integration%22%2C%22integrationSlug%22%3A%22algolia-production%22%2C%22productSlug%22%3A%22application%22%7D%5D";

export default function Home() {
  const isConfigured = Boolean(appId && searchApiKey);

  return (
    <div className="relative isolate flex flex-1 flex-col">
      <ThemeToggle className="fixed top-4 right-4 z-50" />

      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 dark:from-indigo-500 dark:to-sky-500 dark:opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>

      {/* Hero — everything above the fold */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <h1 className="font-sora max-w-3xl text-3xl font-bold tracking-tight text-balance text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
          <span className="text-[#003dff] dark:text-indigo-400">
            Instant search
          </span>{" "}
          for your Vercel app
        </h1>
        <p className="font-sora mt-4 max-w-2xl text-base leading-7 text-balance text-gray-600 sm:text-lg dark:text-gray-400">
          A Next.js starter powered by the{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            Algolia native integration
          </span>
          . Deploy, seed the sample index, and you&apos;re{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            searching in seconds
          </span>
          .
        </p>

        {/* Search — front and center */}
        <div className="mt-8">
          {isConfigured ? (
            <Search
              applicationId={appId!}
              apiKey={searchApiKey!}
              indexName={INDEX_NAME}
              placeholder="Try 'headphones'…"
              attributes={{
                primaryText: "name",
                secondaryText: "brand",
                tertiaryText: "category",
              }}
            />
          ) : (
            <div className="max-w-md rounded-xl border border-gray-200 bg-gray-50 p-5 text-left text-sm dark:border-gray-800 dark:bg-gray-900">
              <p className="mb-2 font-medium text-gray-900 dark:text-white">
                Almost there — connect Algolia:
              </p>
              <ol className="list-inside list-decimal space-y-1 text-gray-600 dark:text-gray-400">
                <li>
                  Install the{" "}
                  <a
                    href="https://vercel.com/marketplace/algolia-production"
                    className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    Algolia integration
                  </a>{" "}
                  on your Vercel project
                </li>
                <li>
                  Run{" "}
                  <code className="font-mono">vercel env pull</code>
                </li>
                <li>
                  Run <code className="font-mono">npm run seed</code>
                </li>
                <li>Restart the dev server</li>
              </ol>
            </div>
          )}
        </div>
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-500">
          Real-time results, highlighting, keyboard navigation, and so much more.
        </p>

        {/* How it works */}
        <div className="mt-10 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              step: "1",
              title: "Deploy",
              description:
                "One click installs the Algolia integration from the Vercel Marketplace.",
            },
            {
              step: "2",
              title: "Zero config",
              description:
                "An Algolia app is provisioned and your API keys land as environment variables.",
            },
            {
              step: "3",
              title: "Seed & search",
              description: (
                <>
                  <code className="font-mono text-xs">npm run seed</code> pushes
                  the sample products. Your search is live.
                </>
              ),
            },
          ].map(({ step, title, description }) => (
            <div key={step} className="flex flex-col items-center gap-1.5">
              <div className="flex items-center gap-2">
                <span className="flex size-6 items-center justify-center rounded-full bg-indigo-100 text-xs font-semibold text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                  {step}
                </span>
                <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {title}
                </h2>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-x-4">
          <a
            href={DEPLOY_URL}
            className="rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400"
          >
            Deploy with Vercel
          </a>
          <a
            href={REPO_URL}
            className="rounded-lg px-5 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 transition-colors ring-inset hover:bg-gray-50 dark:text-gray-100 dark:ring-gray-700 dark:hover:bg-gray-800"
          >
            View on GitHub
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-wrap items-center justify-center gap-4 border-t border-gray-200 py-4 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-500">
        <span>Built with 💙 by Algolia.</span>
        <a
          href="https://www.algolia.com/doc/"
          className="hover:text-gray-900 dark:hover:text-gray-100"
        >
          Algolia docs
        </a>
        <a
          href="https://vercel.com/marketplace/algolia-production"
          className="hover:text-gray-900 dark:hover:text-gray-100"
        >
          Marketplace listing
        </a>
        <a
          href="https://sitesearch.algolia.com"
          className="hover:text-gray-900 dark:hover:text-gray-100"
        >
          SiteSearch
        </a>
      </footer>
    </div>
  );
}
