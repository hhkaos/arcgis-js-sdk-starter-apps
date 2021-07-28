# ts-amd-cdn-nobundler-noframework

|Language|Framework|From|Strategy|Bundler|
|---|---|---|---|---|
|TypeScript|None|CDN|AMD<sup>1</sup>|None|

> **Note <sup>1</sup>**: you will use `import` statements (ESM) with the AMD path, and the TypeScript compiler will translate them to AMD.

To better understand the code of the `index.html`, `app/main.ts` and `tsconfig.json` files read this page [TypeScript - Setting up your development environment](https://developers.arcgis.com/javascript/latest/typescript-setup/). Or you watch a pretty similar demo inside [ArcGIS API for JavaScript: Using TypeScript - min 21:30](https://youtu.be/TYxHZb1HPqs?t=1290)

## Development

* First time install the dependencies running: `npm run install`.
* Run the development environment: `npm run dev`.
* Open [index.html](index.html) - **recomendation**: use [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
* Edit [app/main.ts](app/main.ts) and enjoy the IntelliSense & code snippets.

## Acknowledgments

The original code from [github.com/Esri/jsapi-resources/tree/master/4.x/typescript/demo](https://github.com/Esri/jsapi-resources/tree/master/4.x/typescript/demo).

## Starter apps maintenance and support

This starter apps are maintained by the community. If you find something broken or outdated and **the code from the starter app comes from another repository please open the issue there**, if it doesn't feel free to [open an issue on this repo](https://github.com/hhkaos/arcgis-js-api-starter-apps/issues).

Note that frameworks and bundlers are outside of the [scope of support](https://support.esri.com/en/supportscope) from the Esri Technical Support. In any case, you can use the issues repositories related to each starter app to interact with the community for support.