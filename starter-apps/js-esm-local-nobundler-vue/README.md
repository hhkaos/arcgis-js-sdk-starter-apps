# js-esm-local-nobundler-vue

|Language|Framework|From|Strategy|Bundler|
|---|---|---|---|---|
|JavaScript|Vue.js|ESM|Local|None|

This repo demonstrates how to use [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) ES modules with Vue.js. 

You can find a couple of videos about Vue.js + ArcGIS API JS API:

* [ArcGIS JSAPI and Vue](https://www.youtube.com/watch?v=4GnJYcoLf2E)
* [Vue, Calciite, ArcGIS, and Sass](https://www.youtube.com/watch?v=os1BvdRo6Hk)

How lo load assets from the CDN instead of local: [ArcGIS API for JavaScript: Building Apps with ES Modules (hax) - min 34:21](https://youtu.be/ojrGonjJI2k?t=2061)

## Get Started

**Step 1** - Run `npm install` and then start adding modules

**Step 2** Configure CSS. Here's a Vue example:

*App.vue*

```css
<style>
  @import 'https://js.arcgis.com/4.20/@arcgis/core/assets/esri/themes/light/main.css';
</style>
```

For additional information, see the [Build with ES modules](https://developers.arcgis.com/javascript/latest/es-modules/) Guide topic in the SDK.

## Commands

For a list of all available `npm` commands see the scripts in `package.json`. 

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Acknowledgments

The original code from [https://github.com/Esri/jsapi-resources/tree/master/esm-samples/jsapi-vue-cli](https://github.com/Esri/jsapi-resources/tree/master/esm-samples/jsapi-vue-cli).

## Starter apps maintenance and support

This starter apps are maintained by the community. If you find something broken or outdated and **the code from the starter app comes from another repository please open the issue there**, if it doesn't feel free to [open an issue on this repo](https://github.com/hhkaos/arcgis-js-api-starter-apps/issues).

Note that frameworks and bundlers are outside of the [scope of support](https://support.esri.com/en/supportscope) from the Esri Technical Support. In any case, you can use the issues repositories related to each starter app to interact with the community for support.