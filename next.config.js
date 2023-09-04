/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 't1.gstatic.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'i.pinimg.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'i.kym-cdn.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
    async redirects(){
      return [{
        source: "/messages",
        destination: "/",
        permanent: true
      }]
    }
}

module.exports = nextConfig
