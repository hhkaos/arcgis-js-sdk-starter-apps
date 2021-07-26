var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "esri/views/MapView", "esri/layers/FeatureLayer", "esri/symbols/SimpleFillSymbol", "esri/renderers/SimpleRenderer", "esri/geometry/Point", "esri/rest/support/Query"], function (require, exports, MapView_1, FeatureLayer_1, SimpleFillSymbol_1, SimpleRenderer_1, Point_1, Query_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    MapView_1 = __importDefault(MapView_1);
    FeatureLayer_1 = __importDefault(FeatureLayer_1);
    SimpleFillSymbol_1 = __importDefault(SimpleFillSymbol_1);
    SimpleRenderer_1 = __importDefault(SimpleRenderer_1);
    Point_1 = __importDefault(Point_1);
    Query_1 = __importDefault(Query_1);
    // Center for the map
    let center = new Point_1.default({
        x: 0,
        y: 0,
        spatialReference: {
            wkid: 4326 // WGS 1984
        }
    });
    ;
    const dataUrl = "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/World_Countries_(Generalized)/FeatureServer";
    const countriesGeneralized = new FeatureLayer_1.default({
        url: dataUrl,
        renderer: new SimpleRenderer_1.default({
            symbol: new SimpleFillSymbol_1.default({
                color: [255, 255, 255, 1],
                outline: {
                    width: 0.5,
                    color: [100, 70, 170, .75]
                }
            })
        })
    });
    const diagonalFillSymbol = new SimpleFillSymbol_1.default({
        color: [150, 130, 220, 0.85],
        style: "diagonal-cross",
        outline: { color: [100, 70, 170, 1] }
    });
    const view = new MapView_1.default({
        container: "viewDiv",
        map: {
            layers: [countriesGeneralized] // Autocast the map object
        },
        center,
        scale: 200000000,
        constraints: {
            minScale: 200000000
        }
    });
    const infoDiv = document.getElementById("infoDiv");
    view.on("click", (event) => {
        infoDiv.innerHTML = `
    Select a country on the map.<br>
    Projection request sent ...
  `;
        const countryQuery = new Query_1.default({
            spatialRelationship: "intersects",
            geometry: event.mapPoint,
            outFields: ["*"],
            outSpatialReference: {
                wkid: 54010
            },
            returnGeometry: true
        });
        countriesGeneralized.queryFeatures(countryQuery)
            .then((results) => {
            if (results.features.length > 0) {
                view.graphics.removeAll();
                const selectedCountry = results.features[0];
                selectedCountry.symbol = diagonalFillSymbol;
                view.graphics.add(selectedCountry);
                infoDiv.innerHTML = `
        Select a country on the map.<br><br>
        <b>Country</b>: ${selectedCountry.attributes.COUNTRY}<br>
        <b><a href="${dataUrl}/0/query?where=1=1&outFields=*&f=pjson">Incoming data</a> WKID</b>: ${countriesGeneralized.spatialReference.wkid}<br>
        <b>Displayed data WKID</b>: ${view.spatialReference.wkid}<br><br>
        <b>Projected geometry WKID</b>: ${selectedCountry.geometry.spatialReference.wkid}<br>
        <code><pre>${JSON.stringify(selectedCountry.geometry.toJSON(), null, 2)}</pre></code>
      `;
            }
            else {
                infoDiv.innerHTML = `
        Select a country on the map.<br>
        No country selected. Try again.
      `;
            }
        }).catch((error) => {
            console.log(error);
        });
    });
});
//# sourceMappingURL=projection.js.map