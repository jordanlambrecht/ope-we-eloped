module.exports = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.chec.io',
      },
      {
        protocol: 'https',
        hostname: 'pixelbakery.co',
      },
      {
        protocol: 'https',
        hostname: 'media.pixelbakery.com',
      },
      {
        protocol: 'https',
        hostname: 'pixelbakery.com',
      },
      {
        protocol: 'https',
        hostname: 'placeimg.com',
      },
      {
        protocol: 'https',
        hostname: 'scontent.cdninstagram.com',
      },
      {
        protocol: 'https',
        hostname: 'scontent-ort2-2.cdninstagram.com',
      },
      {
        protocol: 'https',
        hostname: '*.cdninstagram.com',
      },
      {
        protocol: 'https',
        hostname: 'scontent-akl1-1.cdninstagram.com',
      },
      {
        protocol: 'https',
        hostname: '*.spotifycdn.com',
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
      },
      {
        protocol: 'https',
        hostname: '*.scdn.co',
      },
      {
        protocol: 'https',
        hostname: 'scdn.co',
      },
      {
        protocol: 'https',
        hostname: 'mosaic.scdn.co',
      },
      {
        protocol: 'https',
        hostname: 'images234-focus-opensocial.googleusercontent.com',
      },
    ],
  },
}
