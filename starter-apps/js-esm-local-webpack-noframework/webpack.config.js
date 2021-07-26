const path = require("path");
const webpack = require("webpack");

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ArcGISPlugin = require("@arcgis/webpack-plugin");

// Webpack devtool for source map generation.
// https://webpack.js.org/configuration/devtool/
const developmentDevtool = "eval";
const productionDevtool = false;

module.exports = (_, args) => {
  const mode = args.mode;

  const config = {
    mode,
    entry: {
      index: ["./src/index.css", "./src/index.js"]
    },
    node: false,
    output: {
      path: path.join(__dirname, "dist"),
      chunkFilename: "chunks/[id].js",
      publicPath: "",
      clean: true
    },
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 3001
    },
    devtool: mode === "development" ? developmentDevtool : productionDevtool,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /nodeModules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"]
        }
      ]
    },
    plugins: [
      new ArcGISPlugin({
        // do not copy assets
        copyAssets: false,
        // exclude 3D modules from build
        features: {
          "3d": false
        },
        userDefinedExcludes: [
          // layers
          "@arcgis/core/layers/AreaMeasurementLayer",
          "@arcgis/core/layers/BuildingSceneLayer",
          "@arcgis/core/layers/BingMapsLayer",
          "@arcgis/core/layers/CSVLayer",
          "@arcgis/core/layers/DirectLineMeasurementLayer",
          "@arcgis/core/layers/GeoRSSLayer",
          "@arcgis/core/layers/GroupLayer",
          "@arcgis/core/layers/ImageryLayer",
          "@arcgis/core/layers/ImageryTileLayer",
          "@arcgis/core/layers/IntegratedMeshLayer",
          "@arcgis/core/layers/KMLLayer",
          "@arcgis/core/layers/MapImageLayer",
          "@arcgis/core/layers/MapNotesLayer",
          "@arcgis/core/layers/OGCFeatureLayer",
          "@arcgis/core/layers/OpenStreetMapLayer",
          "@arcgis/core/layers/StreamLayer",
          "@arcgis/core/layers/SubtypeGroupLayer",
          "@arcgis/core/layers/WFSLayer",
          "@arcgis/core/layers/WMSLayer",
          "@arcgis/core/layers/WMTSLayer",
          "@arcgis/core/layers/WebTileLayer",

          // identity
          "@arcgis/core/identity",
          // widgets - doesn't matter if these are in the excludes
          // "@arcgis/core/widgets/AreaMeasurement2D",
          // "@arcgis/core/widgets/AreaMeasurement3D",
          // "@arcgis/core/widgets/BasemapGallery",
          // "@arcgis/core/widgets/BasemapLayerList",
          // "@arcgis/core/widgets/BasemapToggle",
          // "@arcgis/core/widgets/BuildingExplorer",
          // "@arcgis/core/widgets/CoordinateConversion",
          // "@arcgis/core/widgets/Daylight",
          // "@arcgis/core/widgets/Directions",
          // "@arcgis/core/widgets/DirectLineMeasurement3D",
          // "@arcgis/core/widgets/DistanceMeasurement2D",
          // "@arcgis/core/widgets/Editor",
          // "@arcgis/core/widgets/ElevationProfile",
          // "@arcgis/core/widgets/FeatureForm",
          // "@arcgis/core/widgets/FeatureTemplates",
          // "@arcgis/core/widgets/LayerList",
          // "@arcgis/core/widgets/LineOfSight",
          // "@arcgis/core/widgets/Measurement",
          // "@arcgis/core/widgets/Print",
          // "@arcgis/core/widgets/ShadowAccumulation",
          // "@arcgis/core/widgets/Sketch",
          // "@arcgis/core/widgets/Slice",
          // "@arcgis/core/widgets/Swipe",
          // "@arcgis/core/widgets/TableList",
          // "@arcgis/core/widgets/TimeSlider",
        ]
      }),
      new HtmlWebPackPlugin({
        title: "ArcGIS API  for JavaScript",
        template: "./public/index.html",
        filename: "./index.html",
        chunksSortMode: "none",
        inlineSource: ".(css)$"
      }),
      new MiniCssExtractPlugin({
        filename: "[name].[chunkhash].css",
        chunkFilename: "[id].css"
      })
    ]
  };

  return config;
};
