# ts-esm-local-nobundler-angular

|Language|Framework|From|Strategy|Bundler|
|---|---|---|---|---|
|TypeScript|Angular|Local|ESM|None|

This repo demonstrates how to use [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) ES modules with Angular 12. 

How lo load assets from the CDN instead of local: [ArcGIS API for JavaScript: Building Apps with ES Modules (hax) - min 34:21](https://youtu.be/ojrGonjJI2k?t=2061)

---
## Known issues

* To prevent `Unhandled Promise Rejection` errors when using Angular with Zone.js, upgrade to Angular `11.2.5` or greater, Zone.js `0.11.4`or greater, and switch the `tsconfig.target` to `es2017` or greater.

* if you are seeing CommonJS or AMD dependency warnings you can supress them in your build output thought a property setting in `angular.json`. Suppressing won't affect functionality. Also, consider upgrading by running `npm i @arcgis/core@latest`.

*angular.json*

```json
  "allowedCommonJsDependencies": [
    "moment"
  ],
```
---

## Get Started

**Step 1** - Run `npm install` and then start adding modules.

**Step 2** Configure CSS.

*styles.css*

```css
  @import 'https://js.arcgis.com/4.20/@arcgis/core/assets/esri/themes/light/main.css';
```

For additional information, see the [Build with ES modules](https://developers.arcgis.com/javascript/latest/es-modules/) Guide topic in the SDK.

## Requirements

* If you are using Zone.js, the minimum version is `0.11.4 (February 10, 2021)` or greater.

## TypeScript

Currently, due to limitations in TypeScript, the APIs [autocasting](https://developers.arcgis.com/javascript/latest/programming-patterns/#autocasting) functionality works best in non-TypeScript applications. No changes are required if you are already using the API without any TypeScript build errors.

Required version is `~4.2.3`.

## Commands

For a list of all available `npm` commands see the scripts in `package.json`. 

### Development server

Run `ng serve --open` for a dev server that will automatically open a browser window. The app will automatically reload if you change any of the source files. You need to install [Angular CLI](https://cli.angular.io/) before you can compile the app. 

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. 

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Acknowledgments

The original code from [github.com/Esri/jsapi-resources/tree/master/esm-samples/jsapi-angular-cli](https://github.com/Esri/jsapi-resources/tree/master/esm-samples/jsapi-angular-cli).

## Starter apps maintenance and support

This starter apps are maintained by the community. If you find something broken or outdated and **the code from the starter app comes from another repository please open the issue there**, if it doesn't feel free to [open an issue on this repo](https://github.com/hhkaos/arcgis-js-api-starter-apps/issues).

Note that frameworks and bundlers are outside of the [scope of support](https://support.esri.com/en/supportscope) from the Esri Technical Support. In any case, you can use the issues repositories related to each starter app to interact with the community for support.