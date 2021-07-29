# ts-amd-cdn-nobundler-noframework

|Language|Framework|From|Strategy|Bundler|
|---|---|---|---|---|
|TypeScript|None|CDN|AMD<sup>1</sup>|None|

> **Note <sup>1</sup>**: you will use `import` statements (ESM) with the AMD path, and the TypeScript compiler will translate them to AMD.

To better understand the code of the `index.html`, `app/main.ts` and `tsconfig.json` files read this page [TypeScript - Setting up your development environment](https://developers.arcgis.com/javascript/latest/typescript-setup/). Or you watch a pretty similar demo inside [ArcGIS API for JavaScript: Using TypeScript - min 21:30](https://youtu.be/TYxHZb1HPqs?t=1290)

> Note: in the following video "[From Zero to Newbie with ArcGIS API for JS and TypeScript](https://www.youtube.com/watch?v=vkK22tmCeXQ)" (in spanish) there is an explanation on how to use this app.

## Get Started

**Step 1** - First time install the dependencies running: `npm run install`.

**Step 2** - Run the development environment: `npm run dev`.

**Step 3** - Open [index.html](./index.html) using a web server ([Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), [http-server](https://www.npmjs.com/package/http-server), Apache, nginx, IIS, ...).

**Step 4** - Make your edits to [`app/index.ts`](./app/index.ts)

## Configuration files

This project includes two configuration files: NPM's Package (`package.json`) and TypeScript file (`tsconfig.json`).

### NPM's Package (package.json)

In addition to metadata it includes:

* All TypeScript definitions as developer dependencies: 

  * [`@types/arcgis-js-api`](https://www.npmjs.com/package/@types/arcgis-js-api)
  * [`typescript`](https://www.npmjs.com/package/@types/arcgis-js-api)

* The definition of the script `npm run dev`: which runs the TypeScript compiler in watch mode (`tsc -w`).

### TypeScript file (tsconfig.json)

A first introduction to the [tsconfig.json](../tsconfig) can be [found here](https://developers.arcgis.com/javascript/latest/typescript-setup/#first-typescript-file).

You could use this version:

```js
{
  "compilerOptions": {
      "module": "amd",
      "sourceMap": true,
      "target": "es2019",
      "esModuleInterop": true
  }
}
```

Or a more complex version:

```js
{
  "compilerOptions": {
    "module": "amd",
    "noImplicitAny": true,
    "esModuleInterop": true,
    "sourceMap": true,
    "target": "es2019",
    "experimentalDecorators": true,
    "preserveConstEnums": true,
    "suppressImplicitAnyIndexErrors": true,
    "moduleResolution": "node"
  },
  "include": [
    "./app/*"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

There are three properties:

* [`include`](https://www.typescriptlang.org/tsconfig#include): Specifies an array of filenames or patterns to include in the program. These filenames are resolved relative to the directory containing the tsconfig.json file.

* [`exclude`](https://www.typescriptlang.org/tsconfig#exclude): Specifies an array of filenames or patterns that should be skipped when resolving include.

* [`compilerOptions`](https://www.typescriptlang.org/tsconfig): which is an object with all the configuration that the TypeScript compiler (`tsc`) will use.

Below we will explain each of the `compilerOptions` used in detail:

* [`module`](https://www.typescriptlang.org/tsconfig#module): Sets the module system for the program. See the [Modules reference page](https://www.typescriptlang.org/docs/handbook/modules.html) for more information. Allowed values:
`CommonJS` (default if target is ES3 or ES5), `ES6`, `ES2015`, `ES2020`, `None`, `UMD`, `AMD`, `System` and `ESNext`.

* [`noImplicitAny`](https://www.typescriptlang.org/tsconfig#noImplicitAny): In some cases where no type annotations are present, TypeScript will fall back to a type of any for a variable when it cannot infer the type.

* [`esModuleInterop`](https://www.typescriptlang.org/tsconfig#module): When true, allows use of import syntax such as import x from 'xyz'.

* [`sourceMap`](https://www.typescriptlang.org/tsconfig#module): Enables the generation of [sourcemap files](https://developer.mozilla.org/docs/Tools/Debugger/How_to/Use_a_source_map). These files allow debuggers and other tools to display the original TypeScript source code when actually working with the emitted JavaScript files.

* [`target`](https://www.typescriptlang.org/tsconfig#target): Modern browsers support all ES6 features, so ES6 is a good choice. 
Allowed:`ES3` (default), `ES5`, `ES6/ES2015`(synonymous), `ES7/ES2016`, `ES2017`, `ES2018`, `ES2019`, `ES2020`, `ESNext`

* [`experimentalDecorators`](https://www.typescriptlang.org/tsconfig#experimentalDecorators): Enables [experimental support for decorators](https://github.com/tc39/proposal-decorators), which is in stage 2 of the TC39 standardization process.

* [`preserveConstEnums`](https://www.typescriptlang.org/tsconfig#preserveConstEnums): Do not erase `const enum` declarations in generated code. `const enums` provide a way to reduce the overall memory footprint of your application at runtime by emitting the enum value instead of a reference.

* [`suppressImplicitAnyIndexErrors`](https://www.typescriptlang.org/tsconfig#suppressImplicitAnyIndexErrors): Turning `suppressImplicitAnyIndexErrors `on suppresses reporting the error about implicit anys when indexing into objects, as shown in the following example:

* [`moduleResolution`](https://www.typescriptlang.org/tsconfig#moduleResolution): Specify the module resolution strategy: `'node'` (Node.js) or `'classic'` (used in TypeScript before the release of 1.6). You probably won’t need to use `classic` in modern code.

## Acknowledgments

The original code from [github.com/Esri/jsapi-resources/tree/master/4.x/typescript/demo](https://github.com/Esri/jsapi-resources/tree/master/4.x/typescript/demo).

## Starter apps maintenance and support

This starter apps are maintained by the community. If you find something broken or outdated and **the code from the starter app comes from another repository please open the issue there**, if it doesn't feel free to [open an issue on this repo](https://github.com/hhkaos/arcgis-js-api-starter-apps/issues).

Note that frameworks and bundlers are outside of the [scope of support](https://support.esri.com/en/supportscope) from the Esri Technical Support. In any case, you can use the issues repositories related to each starter app to interact with the community for support.