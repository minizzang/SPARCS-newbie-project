const createProxyMiddleware = require("http-proxy-middleware");

// Frontend API -> Backend로 전달 (proxy)

module.exports = function(app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/api": ""
      },
    })
  );
};