/** Static export: the storefront is one page with no server.
 *  NEXT_PUBLIC_BASE_PATH is set when the site lives in a sub-folder (GitHub Pages: "/brim").
 *  Leave it unset for a custom domain. */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  poweredByHeader: false,
  outputFileTracingRoot: import.meta.dirname,
};

export default nextConfig;
