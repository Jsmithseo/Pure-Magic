/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/",
        destination: "/smp",
        permanent: false, // set to true if you want a permanent 308 redirect
      },
    ];
  },
};

export default nextConfig;