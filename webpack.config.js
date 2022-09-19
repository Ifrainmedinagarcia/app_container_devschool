const { HotModuleReplacementPlugin } = require('webpack');
const { MFLiveReloadPlugin } = require("@module-federation/fmr");
const deps = require("./package.json").dependencies;
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

const rulesForTs = {
  test: /\.(ts|tsx)$/,
  loader: "babel-loader",
  exclude: /node_modules/
};

const rulesForCss = {
  test: /\.(css|s[ac]ss)$/i,
  use: ["style-loader", "css-loader", "postcss-loader"],
};

const rulesForFiles = {
  test: /\.(eot|ttf|woff|woff2|png|jpe?g|gif|svg)$/i,
  use: [
    {
      loader: "file-loader",
    },
  ],
};

const rulesFoJsAuto = {
  test: /\.m?js/,
  type: "javascript/auto",
  resolve: {
    fullySpecified: false,
  },
}

const rules = [rulesForTs, rulesFoJsAuto, rulesForCss, rulesForFiles];


module.exports = (env, arg) => {
  const { mode } = arg;
  const isProduction = mode === "production";
  return {
    output: {
      filename: isProduction ? "[name].[contenthash].js" : "index.js",
      path: path.resolve(__dirname, "build"),
    },

    devtool: "source-map",

    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },

    devServer: {
      port: 3000,
      open: true,
      historyApiFallback: {
        index: '/index.html'
      }
    },

    module: { rules },
 

    plugins: [
/*       new HotModuleReplacementPlugin(),
      new MFLiveReloadPlugin({
        port: 3000,
        container: "app_container",
        standalone: false,
      }), */
      new ModuleFederationPlugin({
        name: "app_container",
        filename: "remoteEntry.js",
        remotes: {
          "clothes": "clothes@https://ifrainmedinagarcia.github.io/MFE1_devschool/"
        },
        exposes: {
          "./Header": "./src/shared/components/Header/Header",
        },
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
        },
      }),
      new HtmlWebPackPlugin({
        template: "./public/index.html",
      }),
    ],

  }
};