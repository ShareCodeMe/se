/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.pexels.com" }],
    domains: ["res.cloudinary.com", "example.com", "another-domain.com"],
  },
  productionBrowserSourceMaps: true,
};

export default nextConfig;
