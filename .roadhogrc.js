export default {
  "entry": "src/index.js",
  "theme": "./theme.config.js",
  "proxy":{
    "/api/v2": {
      "target": "http://10.18.19.24:10200",
      "changeOrigin": true,
      "pathRewrite": {"^/api/v2": "/api/v2"}
    }
  },
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr",
        "transform-runtime",
        ["import", { "libraryName": "antd", "style": true }]
      ]
    },
    "production": {
      "extraBabelPlugins": [
        "transform-runtime",
        ["import", { "libraryName": "antd", "style": true }]
      ]
    }
  }
}
