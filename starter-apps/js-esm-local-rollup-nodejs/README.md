# js-esm-local-rollup-nodejs

|Language|Framework|From|Strategy|Bundler|
|---|---|---|---|---|
|JavaScript/NodeJS|None|Local|ESM|Rollup.js|

Integrating Node.js with [`@arcgis/core`](https://www.npmjs.com/package/@arcgis/core) can be done by building the app with [native ES modules in a supported Node version](https://nodejs.org/dist/latest-v14.x/docs/api/esm.html) or by transpiling to CommonJS. This sample contains examples of both approaches.

You can find a couple of videos about NodeJS + ArcGIS API JS API:

* [NodeJS with the ArcGIS JSAPI](https://www.youtube.com/watch?v=f3kfswbNf9Y)

How lo load assets from the CDN instead of local: [ArcGIS API for JavaScript: Building Apps with ES Modules (hax) - min 34:21](https://youtu.be/ojrGonjJI2k?t=2061)

## Working with assets

For most local builds, the API's assets are pulled from the ArcGIS CDN at runtime and there is no need for additional configuration. However, when working with certain modules, Node.js may require configuring the API to manage the assets locally. The assets include images, web workers, web assembly and localization files. Be sure to set [`config.assetsPath`](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#assetsPath) so that the assets are correctly resolved, for example:

```js
import esriConfig from '@arcgis/core/config.js';
esriConfig.assetsPath = "node_modules/@arcgis/core/assets"; // relative to when running in root
```

An example can be found in [`projection.js`](https://github.com/Esri/jsapi-resources/blob/master/esm-samples/jsapi-node/src/projection.js#L6).

## Polyfills

Because Node does not have a native `fetch` or `abort-controller`, you will need to load polyfills:

```js
require("cross-fetch/polyfill");
require("abort-controller/polyfill");
```

An example can be found in the [webmap.js](https://github.com/Esri/jsapi-resources/blob/master/esm-samples/jsapi-node/webmap.js#L4-L5) file.

## Native ESM samples

You can find native ESM samples in the [/native-esm](./native-esm) folder.

## IdentityManager

You will also want to disable the [`IdentityManager`](https://developers.arcgis.com/javascript/latest/api-reference/esri-identity-IdentityManager.html) using [`config.request`](https://developers.arcgis.com/javascript/latest/api-reference/esri-config.html#request) so it doesn't attempt to load DOM-related JavaScript.

```js
import esriConfig from "@arcgis/core/config.js";
esriConfig.request.useIdentity = false;
```

## Commands

For a list of all available `npm` commands see the scripts in `package.json`. 

To run a test app, execute these commands in a terminal window:
1. `npm i` - install the modules
2. `npm run build` - run the build script
3. `node test-projection.js` - run the app and the output will be written to the terminal window.

## Acknowledgments

The original code from [github.com/Esri/jsapi-resources/tree/master/esm-samples/jsapi-node](https://github.com/Esri/jsapi-resources/tree/master/esm-samples/jsapi-node).

## Starter apps maintenance and support

This starter apps are maintained by the community. If you find something broken or outdated and **the code from the starter app comes from another repository please open the issue there**, if it doesn't feel free to [open an issue on this repo](https://github.com/hhkaos/arcgis-js-api-starter-apps/issues).

Note that frameworks and bundlers are outside of the [scope of support](https://support.esri.com/en/supportscope) from the Esri Technical Support. In any case, you can use the issues repositories related to each starter app to interact with the community for support.