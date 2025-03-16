export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '*',
      // Add any disallow rules as needed
    },
    sitemap: 'https://your-domain.com/sitemap.xml', // Update with your actual domain
  };
}