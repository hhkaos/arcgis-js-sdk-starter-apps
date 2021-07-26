var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "esri/views/MapView"], function (require, exports, MapView_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    MapView_1 = __importDefault(MapView_1);
    const view = new MapView_1.default({
        map: {
            basemap: "streets-navigation-vector"
        },
        container: "viewDiv",
        center: [-3.760276, 39.482580],
        zoom: 4
    });
});
// Workaround to access the window object
// declare global {
//   interface Window { view: MapView; }
// }
// window.view = view;
//# sourceMappingURL=main.js.map