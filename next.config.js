/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/products/scheidt-bachmann",
        destination: "/products/get-my-parking",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.imgur.com" },
      { protocol: "https", hostname: "source.unsplash.com" },
    ],
  },
};

module.exports = nextConfig;
