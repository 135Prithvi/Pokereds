/** @type {import('next').NextConfig} */
// module.exports = {
//   reactStrictMode: true,
//   images: {
//     domains: ['raw.githubusercontent.com',"openweathermap.org","www.tailwindtoolbox.com"],
//   },
//   env:{
//     url:process.env.NEXT_PUBLIC_url,
//   },

// }
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  experimental: {
    images: {
        allowFutureImage: true,
    },
},
  images: {
    domains: ['raw.githubusercontent.com',"openweathermap.org","www.tailwindtoolbox.com"],
  },
  env:{
    url:process.env.NEXT_PUBLIC_url,
  },
})
