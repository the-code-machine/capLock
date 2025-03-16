import { MetadataRoute } from 'next';

// Mock function to simulate fetching product data from a database
async function fetchProducts() {
  // Replace this with your actual data fetching logic
  return [
    { id: '3DPRINT001', lastModified: new Date('2025-03-16T04:23:00+00:00') },
    { id: '3DPRINT002', lastModified: new Date('2025-03-16T04:23:00+00:00') },
    { id: '3DPRINT003', lastModified: new Date('2025-03-16T04:23:00+00:00') },
    { id: '3DPRINT004', lastModified: new Date('2025-03-16T04:23:00+00:00') },
    { id: '3DPRINT005', lastModified: new Date('2025-03-16T04:23:00+00:00') },
    { id: 'IOT001', lastModified: new Date('2025-03-16T04:23:00+00:00') },
    { id: 'IOT002', lastModified: new Date('2025-03-16T04:23:00+00:00') },
    { id: 'IOT003', lastModified: new Date('2025-03-16T04:23:00+00:00') },
    { id: 'IOT004', lastModified: new Date('2025-03-16T04:23:00+00:00') },
    { id: 'IOT005', lastModified: new Date('2025-03-16T04:23:00+00:00') },
    { id: 'GIFT002', lastModified: new Date('2025-03-16T04:23:00+00:00') },
    { id: 'GIFT003', lastModified: new Date('2025-03-16T04:23:00+00:00') },
    { id: 'GIFT004', lastModified: new Date('2025-03-16T04:23:00+00:00') },
    { id: 'GIFT005', lastModified: new Date('2025-03-16T04:23:00+00:00') },
    { id: 'PROTO001', lastModified: new Date('2025-03-16T04:23:00+00:00') },
    { id: 'PROTO002', lastModified: new Date('2025-03-16T04:23:00+00:00') },
    { id: 'PROTO003', lastModified: new Date('2025-03-16T04:23:00+00:00') },
    { id: 'PROTO004', lastModified: new Date('2025-03-16T04:23:00+00:00') },
    { id: 'PROTO005', lastModified: new Date('2025-03-16T04:23:00+00:00') },
    // Add more products as needed
  ];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://caplock.in'; // Your domain

  // Define your static pages
  const staticPages = [
    { path: '/', lastModified: new Date('2025-03-16T04:23:00+00:00'), changefreq: 'daily', priority: 1.00 },
    { path: '/products', lastModified: new Date('2025-03-16T04:23:00+00:00'), changefreq: 'weekly', priority: 0.80 },
    { path: '/about', lastModified: new Date('2025-03-16T04:23:00+00:00'), changefreq: 'monthly', priority: 0.80 },
    { path: '/contact', lastModified: new Date('2025-03-16T04:23:00+00:00'), changefreq: 'monthly', priority: 0.80 },
    { path: '/faq', lastModified: new Date('2025-03-16T04:23:00+00:00'), changefreq: 'monthly', priority: 0.80 },
    { path: '/policy', lastModified: new Date('2025-03-16T04:23:00+00:00'), changefreq: 'yearly', priority: 0.80 },
    ];
  
    // Fetch dynamic product data
    const products = await fetchProducts();
  
    // Generate the sitemap structure
    const sitemap = [
      ...staticPages.map(page => ({
        url: `${baseUrl}${page.path}`,
        lastModified: page.lastModified,
        changefreq: page.changefreq,
        priority: page.priority,
      })),
      ...products.map(product => ({
        url: `${baseUrl}/products/${product.id}`,
        lastModified: product.lastModified,
        changefreq: 'weekly', // You can adjust this based on your needs
        priority: 0.64, // You can adjust this based on your needs
      })),
    ];
  
    // Return the sitemap in the expected format
    return sitemap; // This should be an array of URL objects
  }