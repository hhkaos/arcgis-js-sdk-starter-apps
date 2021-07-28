# js-esm-local-nobundler-react

|Language|Framework|From|Strategy|Bundler|
|---|---|---|---|---|
|JavaScript|React|Local|ESM|None|

This repo demonstrates how to use [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) ES modules with `create-react-app`. 

You can find a couple of videos about React + ArcGIS API JS API:

* [Esri events - Videos about React](https://www.youtube.com/c/EsriEvents/search?query=react)
  * [Developer Primer: React](https://www.youtube.com/watch?v=Gs3UQccHmto)
  * [ArcGIS JSAPI ESM with create-react-app](https://www.youtube.com/watch?v=dhyMamfjvcQ)

How lo load assets from the CDN instead of local: [ArcGIS API for JavaScript: Building Apps with ES Modules (hax) - min 34:21](https://youtu.be/ojrGonjJI2k?t=2061)

## Get Started

**Step 1** - Run `npm install` and then start adding modules.

**Step 2** Configure CSS. Here's a React example:

*index.css*

```css
@import 'https://js.arcgis.com/4.20/@arcgis/core/assets/esri/themes/light/main.css';
```

For additional information, see the [Build with ES modules](https://developers.arcgis.com/javascript/latest/es-modules/) Guide topic in the SDK.

## Commands

For a list of all available `npm` commands see the scripts in `package.json`. 

## Misc.

There were recent versions of `create-react-app` that would attempt to inject babel helpers into ArcGIS API for JavaScript code during the build, but would not copy the helper files. We were able to prevent this by letting the build only build for modern browsers.

```json
// package.json
{
  "browserslist": {
    "production": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
}
```

If you run in to issues with this method, you can use [react-app-rewired](https://www.npmjs.com/package/react-app-rewired).

```js
// config-overrides.js
module.exports = function override(config, env) {
  // Tell create-react-app not to run node_modules through babel.
  // May vary based on version of create-react-app being used.
  config.module.rules[2].oneOf[2].exclude = /(@babel(?:\/|\\{1,2})runtime|node_modules)/;
  return config;
} 
```

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Acknowledgments

The original code from [github.com/Esri/jsapi-resources/tree/master/esm-samples/jsapi-create-react-app/](https://github.com/Esri/jsapi-resources/tree/master/esm-samples/jsapi-create-react-app/).

## Starter apps maintenance and support

This starter apps are maintained by the community. If you find something broken or outdated and **the code from the starter app comes from another repository please open the issue there**, if it doesn't feel free to [open an issue on this repo](https://github.com/hhkaos/arcgis-js-api-starter-apps/issues).

Note that frameworks and bundlers are outside of the [scope of support](https://support.esri.com/en/supportscope) from the Esri Technical Support. In any case, you can use the issues repositories related to each starter app to interact with the community for support.