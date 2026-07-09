import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    // The Algolia integration on Vercel injects ALGOLIA_APP_ID and
    // ALGOLIA_SEARCH_API_KEY. The search key is search-only and safe to expose
    // to the browser. ALGOLIA_WRITE_API_KEY must NEVER be mapped here.
    NEXT_PUBLIC_ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
    NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY: process.env.ALGOLIA_SEARCH_API_KEY,
  },
};

export default nextConfig;
