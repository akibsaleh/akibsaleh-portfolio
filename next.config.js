/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/v0/b/general-authentication-f7699.appspot.com/o/Akib_Saleh_Dev_PP.webp',
      },
    ],
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
