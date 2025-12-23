import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://blue-futures.vercel.app';
  return [
    { url: `${base}/about`, priority: 1 },
    { url: `${base}/speakers` },
    { url: `${base}/agenda` },
    { url: `${base}/partners` },
    { url: `${base}/sponsorship` },
    { url: `${base}/tickets` },
    { url: `${base}/team` },
    { url: `${base}/news` },
    { url: `${base}/search` },
    { url: `${base}/contact` }
  ];
}
