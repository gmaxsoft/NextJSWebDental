const { join } = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [join(__dirname, 'styles')],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    //unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-bootstrap'],
  },
  //output: 'export',
  webpack: (config) => {
    // Bootstrap (i podobne) mają sourceMappingURL → 404 na /_next/static/css/.../*.map
    config.module.rules.push({
      test: /node_modules[\\/](bootstrap|animate\.css)[\\/].*\.css$/,
      enforce: 'pre',
      use: [join(__dirname, 'deploy', 'strip-source-map-loader.js')],
    });
    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);