const withTM = require('next-transpile-modules')(['three']);
module.exports = withTM({

  // reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "cdn.sanity.io",
        // port: '*',
        pathname: '/**',
      },
    ],
    domains: ['cdn.sanity.io'],
  },
});


