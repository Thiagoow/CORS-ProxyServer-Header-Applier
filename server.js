const corsProxy = require('cors-anywhere');

// Listen on a specific host via the HOST environment variable.
const host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable.
const port = process.env.PORT || 8080;

corsProxy
  .createServer({
    originWhitelist: [
      'http://localhost:3000',
      'http://127.0.0.1:3000',
      'http://localhost:19006',
      'https://uber-clone-thiagoow.vercel.app',
      'https://vuex-acme-store.vercel.app'
    ],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
  })
  .listen(port, host, () => {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
  });
