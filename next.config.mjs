/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
  server: {
    port: 4000, // Change this to the port you want to use
    host: '0.0.0.0', // Bind to all network interfaces
  },
};

export default nextConfig;