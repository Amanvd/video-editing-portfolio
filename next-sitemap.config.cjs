const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://amanedits.vercel.app';

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 5000,
  outDir: 'public',
  exclude: [
    '/api/*',
    '/icon.svg',
    '/googleaa26902bff1a263d.html',
    '/opengraph-image',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [`${siteUrl}/sitemap.xml`],
  },
};