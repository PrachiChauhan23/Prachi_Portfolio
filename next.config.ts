import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config opti
  ons here */
  images: {
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    
  },
  output:"export"
};

export default nextConfig;
