/** Static export: the storefront is one page with no server. */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  poweredByHeader: false,
  outputFileTracingRoot: import.meta.dirname,
};

export default nextConfig;
