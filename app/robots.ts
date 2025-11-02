export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://blue-futures.vercel.app/sitemap.xml'
  };
}
