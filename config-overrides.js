const path = require("path");

module.exports = function override(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    "@core": path.resolve(__dirname, "src/core"),
    "@components": path.resolve(__dirname, "src/core/components"),
    "@constants": path.resolve(__dirname, "src/core/constants"),
    "@global": path.resolve(__dirname, "src/core/global"),
    "@services": path.resolve(__dirname, "src/core/services"),
    "@store": path.resolve(__dirname, "src/core/store"),
    "@themes": path.resolve(__dirname, "src/core/themes"),
    "@pages": path.resolve(__dirname, "src/pages"),
    "@utils": path.resolve(__dirname, "src/utils"),
    "@layout": path.resolve(__dirname, "src/layout"),
    "@": path.resolve(__dirname, "src"),
  };

  return config;
};
