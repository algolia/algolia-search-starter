import { readFileSync } from "node:fs";
import { algoliasearch } from "algoliasearch";

// Load .env.local if present (created by `vercel env pull .env.local`).
// In CI/Vercel the variables are already in the environment.
try {
  process.loadEnvFile(".env.local");
} catch {}

const appId = process.env.ALGOLIA_APP_ID;
const writeKey = process.env.ALGOLIA_WRITE_API_KEY;

if (!appId || !writeKey) {
  console.error(
    [
      "Missing ALGOLIA_APP_ID and/or ALGOLIA_WRITE_API_KEY.",
      "",
      "These are injected by the Algolia integration on Vercel. To get them locally:",
      "  1. vercel link",
      "  2. vercel env pull .env.local",
      "then run `npm run seed` again.",
    ].join("\n"),
  );
  process.exit(1);
}

const INDEX_NAME = "starter_products";
const products = JSON.parse(
  readFileSync(new URL("../data/products.json", import.meta.url), "utf8"),
);

const client = algoliasearch(appId, writeKey);

console.log(`Seeding ${products.length} products into "${INDEX_NAME}" on app ${appId}…`);

// Objects have stable objectIDs, so re-running replaces them in place.
await client.saveObjects({
  indexName: INDEX_NAME,
  objects: products,
  waitForTasks: true,
});

console.log(`Done — "${INDEX_NAME}" is ready to search.`);
