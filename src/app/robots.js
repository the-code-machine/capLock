export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '*',
      // Add any disallow rules as needed
    },
    sitemap: 'https://caplock.in/robots.txt', // Update with your actual domain
  };
}