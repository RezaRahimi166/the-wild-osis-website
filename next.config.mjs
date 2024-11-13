/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nizahsepnpbmhdijufdp.supabase.co",
      },
    ],
  },
};

export default nextConfig;
