/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  i18n: {
    // The locales you want to support in your app
    locales: ["ar", "en", "fr", "nl-NL", 'ru'],
    // The default locale you want to be used when visiting a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en",
  }
}

module.exports = nextConfig