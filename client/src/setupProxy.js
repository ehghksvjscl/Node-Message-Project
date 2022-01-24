const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://52.141.57.37:5000',
            changeOrigin: true,
        })
    );
};