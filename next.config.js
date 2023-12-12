/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        domains: ['firebasestorage.googleapis.com'],
        formats: ['image/webp'],
    }
}

module.exports = nextConfig
