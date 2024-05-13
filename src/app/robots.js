export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ["/terms-of-service","/pricavy-policy","/cookie-policy","/refund-policy","/enquiry","/free-demo"],
      },
      sitemap: 'https://trafyai.com/sitemap.xml',
    }
  }