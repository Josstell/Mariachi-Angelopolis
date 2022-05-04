import * as fs from 'fs'

const Sitemap = () => null

export const getServerSideProps = async ({ res }) => {
  const BASE_URL = process.env.DOMAIN_URL || 'http://localhost:3000'

  const staticPaths = fs
    .readdirSync('./src/pages')
    .filter((staticPage) => ![
        'api',
        '_app.js',
        '_document.js',
        '404.js',
        'index.js',
        'sitemap.xml.js',
      ].includes(staticPage))
    .map((staticPagePath) => `${BASE_URL}/${staticPagePath}`)

  const allPaths = [`${BASE_URL}/`, ...staticPaths]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url) => `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `)
        .join('')}
    </urlset>
`

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default Sitemap
