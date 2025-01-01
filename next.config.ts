/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs-io.com',
      },
    ],
  },
};

module.exports ={
  images: {
    domains:['utfs.io', 'subdomain.utfs.io'],
  }
}

export default nextConfig;
