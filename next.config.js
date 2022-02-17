const React = require('react')

module.exports = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'cdn.chec.io',
      'pixelbakery.co',
      'media.pixelbakery.com',
      'pixelbakery.com',
      'placeimg.com',
      'scontent.cdninstagram.com',
      'scontent-ort2-2.cdninstagram.com',
      '*.cdninstagram.com',
      'scontent-akl1-1.cdninstagram.com',
      'i.scdn.co',
      '*.scdn.co',
      'scdn.co',
      'mosaic.scdn.co',
      'images234-focus-opensocial.googleusercontent.com',
      'scontent.cdninstagram.com',
      'scontent-akl1-1.cdninstagram.com',
    ],
  },
}
