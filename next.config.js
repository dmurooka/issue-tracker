/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "referrer-polocy", value: "no-referrer" }],
      },
    ];
  },
};

module.exports = nextConfig;
