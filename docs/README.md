# Getting started with TypeScript and ArcGIS JS API

These docs aims to help you getting started with TypeScript to be able to use it in combination with the ArcGIS JS API:

0. [TypeScript grammar](./0.ts-grammar.md)
1. [How to run TypeScript](./1.how-to-run-js.md)
2. [Issues migrating from JavaScript to TypeScript](./2.issues-migrating-to-ts.md)

> **Warning**: currently, due to limitations in TypeScript, the [ArcGIS API for JavaScript autocasting](https://developers.arcgis.com/javascript/latest/programming-patterns/#autocasting) doesn't work when using TypeScript. 

# Configuration files

This project includes two configuration files: `package.json` and `tsconfig.json`.

## NPM's Package (package.json)

In addition to metadata it includes:

* All TypeScript definitions as developer dependencies: [`@types/arcgis-js-api`](https://www.npmjs.com/package/@types/arcgis-js-api), [`typescript`](https://www.npmjs.com/package/@types/arcgis-js-api), [`@types/chai`](https://www.npmjs.com/package/@types/chai) (optional?) and [`dojo-typings`](https://www.npmjs.com/package/dojo-typings) (optional?).

* The definition of the script `npm run dev`: which runs the TypeScript compiler in watch mode (`tsc -w`).

## TypeScript file (tsconfig.json)

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



