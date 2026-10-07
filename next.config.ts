import type { NextConfig } from "next"

// Static export: the site and the registry JSON are plain files served by nginx.
const nextConfig: NextConfig = {
  output: "export",
}

export default nextConfig
