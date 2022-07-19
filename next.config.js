/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com',"openweathermap.org","www.tailwindtoolbox.com"],
  },
  env:{
    url:process.env.NEXT_PUBLIC_url,
  },

}
