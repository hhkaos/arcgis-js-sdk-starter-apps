# ts-esm-local-webpack-noframework

|Language|Framework|From|Strategy|Bundler|
|---|---|---|---|---|
|TypeScript|None|Local|ESM|Webpack|

How lo load assets from the CDN instead of local: [ArcGIS API for JavaScript: Building Apps with ES Modules (hax) - min 34:21](https://youtu.be/ojrGonjJI2k?t=2061)

## Usage

This application is written in [TypeScript](http://www.typescriptlang.org/) and utilizes the [`@arcgis/webpack-plugin`](https://github.com/Esri/arcgis-webpack-plugin).

You can develop, test, and build the application using various commands.

Run the application in development mode with a local development server.
```sh
npm start
```

Run the unit tests for the application. Unit tests are written with [Jest](https://jestjs.io/).
```sh
npm test
```

Build the application for deployment.
```sh
npm run build
```

## Acknowledgments

The original code from [arcgis-js-cli](https://github.com/Esri/arcgis-js-cli).

## Starter apps maintenance and support

This starter apps are maintained by the community. If you find something broken or outdated and **the code from the starter app comes from another repository please open the issue there**, if it doesn't feel free to [open an issue on this repo](https://github.com/hhkaos/arcgis-js-api-starter-apps/issues).

Note that frameworks and bundlers are outside of the [scope of support](https://support.esri.com/en/supportscope) from the Esri Technical Support. In any case, you can use the issues repositories related to each starter app to interact with the community for support.