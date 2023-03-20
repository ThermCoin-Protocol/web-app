const withTM = require('next-transpile-modules')(['three']);
module.exports = {
  withTM: withTM(),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "cdn.sanity.io",
        port: '',
        pathname: '/**',
      },
    ],
  },
};


