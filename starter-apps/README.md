# ArcGIS API for JavaScript 4.x starter apps

|Language|Framework|From|Strategy|Bundler|Code|
|---|---|---|---|---|---|
|JavaScript|None|CDN|AMD|None|[Code](./js-amd-cdn-nobundler-noframework)
|JavaScript|None|CDN|ESM|None|[Code](./js-esm-cdn-nobundler-noframework)
|JavaScript|Ember.js|Local|ESM|None|[Code](./js-esm-local-nobundler-ember)
|JavaScript|React|Local|ESM|None|[Code](./js-esm-local-nobundler-react)
|JavaScript|Vue.js|Local|ESM|None|[Code](./js-esm-local-nobundler-vue)
|JavaScript|None|Local|ESM|Rollup.js|[Code](./js-esm-local-rollup-noframework)
|JS / NodeJS|None|Local|ESM|Rollup.js|[Code](./js-esm-local-rollup-nodejs)
|JavaScript|None|Local|ESM|Snowpack|[Code](./js-esm-local-snowpack-noframework)
|JavaScript|None|Local|ESM|Vite|[Code](./js-esm-local-vite-noframework/README.md)
|JavaScript|None|Local|ESM|Webpack|[Code](./js-esm-local-webpack-noframework/README.md)
|JavaScript|None|Local|ESM|Webpack|[Code (alt)](./js-esm-local-webpack-noframework-2/README.md)
|TypeScript|None|CDN|AMD<sup>1</sup>|None|[Code](./ts-amd-cdn-nobundler-noframework/README.md)
|TypeScript|AngularJS|Local|ESM|None|[Code](./ts-esm-local-nobundler-angular)
|TypeScript|None|Local|ESM|Rollup.js|[Code](./ts-esm-local-rollup-noframework)
|TypeScript|None|Local|ESM|Webpack|[Code](./ts-esm-local-webpack-noframework)

If you don't find a starter app that fits your needs, do not hesitate and [open an issue](https://github.com/hhkaos/arcgis-js-api-starter-apps/issues).

> **Note <sup>1</sup>**: you will use `import` statements (ESM) with the AMD path, and the TypeScript compiler will translate them to AMD.

## Acknowledgments

Bellow you will find some of the resources used to compile this samples apps:

* [https://github.com/Esri/jsapi-resources/tree/master/esm-samples/*](https://github.com/Esri/jsapi-resources/tree/master/esm-samples): ts-esm-local-nobundler-angular, js-esm-local-nobundler-ember, js-esm-local-nobundler-react, js-esm-cdn-nobundler-noframework, js-esm-local-rollup-nodejs, js-esm-local-nobundler-vue, js-esm-local-webpack-noframework-2, js-esm-local-rollup-noframework
* [https://github.com/Esri/arcgis-js-cli](https://github.com/Esri/arcgis-js-cli): ts-esm-local-rollup-noframework, ts-esm-local-webpack-noframework
* [https://github.com/Esri/jsapi-resources/tree/master/4.x/typescript/demo](https://github.com/Esri/jsapi-resources/tree/master/4.x/typescript/demo): ts-amd-cdn-nobundler-noframework
* [http://js.arcgis.com/](http://js.arcgis.com/): js-amd-cdn-nobundler-noframework
* [Quick look at custom builds with ArcGIS JSAPI](https://www.youtube.com/watch?v=VmzjaGfBRyo): js-esm-local-vite-noframework, js-esm-local-webpack-noframework
* [https://github.com/odoe/snowpack-jsapi](https://github.com/odoe/snowpack-jsapi): js-esm-local-snowpack-noframework