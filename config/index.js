const path = require("path");

const config = {
  projectName: "myapp",
  date: "2024-1-20",
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: "src",
  outputRoot: "dist",
  plugins: [],
  defineConstants: {},
  copy: {
    patterns: [
      {
        from: "src/assets",
        to: "dist/assets",
      },
    ],
    options: {
      ignore: [".*"],
    },
  },
  framework: "react",
  compiler: "webpack5",
  mini: {
    framework: "react",
    compiler: "webpack5",
    compile: {
      include: [path.resolve(__dirname, "..", "node_modules/@vant/weapp")],
    },
    npm: {
      dir: "npm",
      include: ["@vant/weapp"],
    },
    copy: {
      patterns: [
        {
          from: path.resolve(__dirname, "..", "node_modules/@vant/weapp"),
          to: path.resolve(__dirname, "..", "dist/npm/@vant/weapp"),
          ignore: ["**/*.d.ts", "**/*.md", "**/README.md", "**/package.json"],
        },
        {
          from: path.resolve(__dirname, "..", "src/assets"),
          to: path.resolve(__dirname, "..", "dist/assets"),
        },
      ],
    },
    imageUrlLoaderOption: {
      limit: 10240,
      name: "assets/images/[name].[hash:8].[ext]"  // 修改输出路径
    },
    // 移除 resourcesUrl 配置
    resourcesUrl: {
      from: path.resolve(__dirname, "..", "src/static"),
      to: "static",
    },
    webpackChain(chain) {
      chain.merge({
        resolve: {
          alias: {
            "@vant/weapp": path.resolve(
              __dirname,
              "..",
              "node_modules/@vant/weapp"
            ),
          },
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              include: [/[\\/]node_modules[\\/]@vant[\\/]weapp/],
              use: [
                {
                  loader: "babel-loader",
                  options: {
                    presets: [["@babel/preset-env", { modules: false }]],
                  },
                },
              ],
            },
          ],
        },
      });
    },
  },
  postcss: {
    pxtransform: {
      enable: true,
      config: {
        selectorBlackList: [/van-/],
      },
    },
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false,
        config: {
          namingPattern: "module",
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
};
