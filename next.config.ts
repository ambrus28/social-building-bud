import type { NextConfig } from "next";
import { REMOVED_CLUBS } from "./src/lib/removedClubs";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
      },
      {
        protocol: "https",
        hostname: "aimeetup.hu",
      },
    ],
  },
  async redirects() {
    return REMOVED_CLUBS.flatMap((club) => [
      { source: `/klub/${club.id}`, destination: club.hu, permanent: true },
      { source: `/en/club/${club.id}`, destination: club.en, permanent: true },
    ]);
  },
};

export default nextConfig;
