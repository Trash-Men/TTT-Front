const withImages = require("next-images");

module.exports = withImages({
  basePath: "/TTT-Front",
  assetPrefix: "",
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
      "/statistics": { page: "/statistics" },
      "/rank": { page: "/rank" },
    };
  },
  webpack(config) {
    return config;
  },
});
