# ArcGIS JavaScript API 4.x

This is a collection of sample apps that aims to help you getting started with the ArcGIS API for JS, no matter what technologies / architecture you prefer to use:

* **Language**: JavaScript (\*.js) or Typescript (\*.ts)
* **Environment**: client-side (browser) vs server-side (Node.js)
* **Framework**: None (Vanilla JS) or any framework (Vue, React, Angular, Ember, Ionic, React Native, Flutter...)
* **Loading from**: CDN or Local (@arcgis/core)
* **Loading strategy**: AMD (require) or ESM (import)
* **Web bundler**: Without using a bundler or using one (ViteJS, Rollup.js, Webpack, Parcel, Snowpack, ...)

## Starter apps

|Language|Framework|From|Strategy|Bundler|Code|
|---|---|---|---|---|---|
|JavaScript|None|CDN|AMD|None|[Code](./starter-apps/js-amd-cdn-nobundler-noframework)
|JavaScript|None|CDN|ESM|None|[Code](./starter-apps/js-esm-cdn-nobundler-noframework)
|JavaScript|Ember.js|Local|ESM|None|[Code](./starter-apps/js-esm-local-nobundler-ember)
|JavaScript|React|Local|ESM|None|[Code](./starter-apps/js-esm-local-nobundler-react)
|JavaScript|Vue.js|Local|ESM|None|[Code](./starter-apps/js-esm-local-nobundler-vue)
|JavaScript|None|Local|ESM|Rollup.js|[Code](./starter-apps/js-esm-local-rollup-noframework)
|JS / NodeJS|None|Local|ESM|Rollup.js|[Code](./starter-apps/js-esm-local-rollup-nodejs)
|JavaScript|None|Local|ESM|Snowpack|[Code](./starter-apps/js-esm-local-snowpack-noframework)
|JavaScript|None|Local|ESM|Vite|[Code](./starter-apps/js-esm-local-vite-noframework/README.md)
|JavaScript|None|Local|ESM|Webpack|[Code](./starter-apps/js-esm-local-webpack-noframework/README.md)
|JavaScript|None|Local|ESM|Webpack|[Code (alt)](./starter-apps/js-esm-local-webpack-noframework-2/README.md)
|TypeScript|None|CDN|AMD<sup>1</sup>|None|[Code](./starter-apps/ts-amd-cdn-nobundler-noframework/README.md)
|TypeScript|AngularJS|Local|ESM|None|[Code](./starter-apps/ts-esm-local-nobundler-angular)
|TypeScript|None|Local|ESM|Rollup.js|[Code](./starter-apps/ts-esm-local-rollup-noframework)
|TypeScript|None|Local|ESM|Webpack|[Code](./starter-apps/ts-esm-local-webpack-noframework)

If you don't find a starter app that fits your needs, do not hesitate and [open an issue](https://github.com/hhkaos/arcgis-js-api-starter-apps/issues).

> **Note <sup>1</sup>**: you will use `import` statements (ESM) with the AMD path, and the TypeScript compiler will translate them to AMD.

## Getting started training

**Videos:**

* [ArcGIS API for JavaScript: Getting Started with Web Development](https://www.youtube.com/watch?v=z9kIZjUjsZ4&list=PLahIW2YFPQd6Uu9u3kRTgGo-HxONKDTi1&index=30)
* [ArcGIS API for JavaScript: Options for Consuming the API](https://www.youtube.com/watch?v=UL0m0EXW8Es&list=PLahIW2YFPQd6Uu9u3kRTgGo-HxONKDTi1&index=38)
* [ArcGIS API for JavaScript: Programming Patterns and API Fundamentals](https://www.youtube.com/watch?v=mA8uLu4-IcU&list=PLahIW2YFPQd6Uu9u3kRTgGo-HxONKDTi1&index=27)
* [ArcGIS API for JavaScript: Using TypeScript](https://www.youtube.com/watch?v=TYxHZb1HPqs&list=PLahIW2YFPQd6Uu9u3kRTgGo-HxONKDTi1&index=18)
* [Introduction to GIS for Developers](https://www.pluralsight.com/courses/gis-introduction-developers)

**Guides:**

* [ArcGIS API for JavaScript > Get started](https://www.youtube.com/watch?v=TYxHZb1HPqs&list=PLahIW2YFPQd6Uu9u3kRTgGo-HxONKDTi1&index=18)
* [ArcGIS API for JavaScript > Install and set up](https://developers.arcgis.com/javascript/latest/install-and-set-up/) (Accessing the API form AMD vs CDN, ESM, ...)
* [ArcGIS API for JavaScript > Programming patterns](https://developers.arcgis.com/javascript/latest/programming-patterns/)
* [ArcGIS API for JavaScript > Introduction to tooling](https://developers.arcgis.com/javascript/latest/tooling-intro/)
* [ArcGIS API for JavaScript > Build with ES modules](https://developers.arcgis.com/javascript/latest/es-modules/)
* [ArcGIS API for JavaScript > TypeScript - Setting up your development environment](https://developers.arcgis.com/javascript/latest/typescript-setup/)
* [ArcGIS API for JavaScript > Migrating from Google Maps JavaScript API to ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/latest/migrating-from-google-maps-to-arcgis-javascript-api/)

## Other resources

* [arcgis-js-vscode-snippets](https://github.com/Esri/arcgis-js-vscode-snippets): Collection of Visual Studio Code snippets for common code patterns.
* [esri-vscode-snippets](https://github.com/hhkaos/esri-vscode-snippets): more user snippets to add to your custom User snippets
* [snippets cheatsheet](https://cheatography.com/hhkaos/cheat-sheets/vscode-arcgis-js-api-4-x-snippets-cheat-sheet/): cheat sheet to help you getting familiar with the VS Code extension.

## Acknowledgments

Above you will find some of the resources used to compile this samples apps:

* [https://github.com/Esri/jsapi-resources/tree/master/esm-samples/*](https://github.com/Esri/jsapi-resources/tree/master/esm-samples): ts-esm-local-nobundler-angular, js-esm-local-nobundler-ember, js-esm-local-nobundler-react, js-esm-cdn-nobundler-noframework, js-esm-local-rollup-nodejs, js-esm-local-nobundler-vue, js-esm-local-webpack-noframework-2, js-esm-local-rollup-noframework
* [https://github.com/Esri/arcgis-js-cli](https://github.com/Esri/arcgis-js-cli): ts-esm-local-rollup-noframework, ts-esm-local-webpack-noframework
* [https://github.com/Esri/jsapi-resources/tree/master/4.x/typescript/demo](https://github.com/Esri/jsapi-resources/tree/master/4.x/typescript/demo): ts-amd-cdn-nobundler-noframework
* [http://js.arcgis.com/](http://js.arcgis.com/): js-amd-cdn-nobundler-noframework
* [Quick look at custom builds with ArcGIS JSAPI](https://www.youtube.com/watch?v=VmzjaGfBRyo): js-esm-local-vite-noframework, js-esm-local-webpack-noframework
* [https://github.com/odoe/snowpack-jsapi](https://github.com/odoe/snowpack-jsapi): js-esm-local-snowpack-noframework

## License

This project is licensed under the [CC0 1.0 Universal](LICENSE.md)
Creative Commons License - see the [LICENSE.md](LICENSE.md) file for
details


