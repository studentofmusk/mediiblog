/** @type {import('next').NextConfig} */
const nextConfig = {
    // async rewrites() {
    //     return [
    //       {
    //         source: '/api/:path*',
    //         destination: 'http://localhost:4000/api/:path*' // Proxy to Backend
    //       }
    //     ]
    //   },
    output:'export'
}

module.exports = nextConfig