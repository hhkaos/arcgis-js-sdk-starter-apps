import MapView from "esri/views/MapView";
import FeatureLayer from "esri/layers/FeatureLayer";
import SimpleFillSymbol from "esri/symbols/SimpleFillSymbol";
import SimpleRenderer from "esri/renderers/SimpleRenderer";
import Point from "esri/geometry/Point";
import Query from "esri/rest/support/Query";

// Center for the map
let center = new Point({
  x: 0,
  y: 0,
  spatialReference: {
    wkid: 4326 // WGS 1984
  }
});;

const dataUrl = "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/World_Countries_(Generalized)/FeatureServer";
const countriesGeneralized = new FeatureLayer({
  url: dataUrl,
  renderer: new SimpleRenderer({
    symbol: new SimpleFillSymbol({
      color: [255, 255, 255, 1],
      outline: {
        width: 0.5,
        color: [100, 70, 170, .75]
      }
    })
  }) 
});

const diagonalFillSymbol = new SimpleFillSymbol({
  color: [150, 130, 220, 0.85],
  style: "diagonal-cross",
  outline: { color: [100, 70, 170, 1] }
});

const view = new MapView({
  container: "viewDiv",
  map: {
    layers: [countriesGeneralized] // Autocast the map object
  },
  center,
  scale: 200000000,
  constraints:{
    minScale: 200000000
  }
});

const infoDiv = document.getElementById("infoDiv");

view.on("click", (event) => {
  infoDiv.innerHTML = `
    Select a country on the map.<br>
    Projection request sent ...
  `;
  
  const countryQuery = new Query({
    spatialRelationship: "intersects", // Relationship operation to apply
    geometry: event.mapPoint,  // The sketch feature geometry
    outFields: ["*"], // Attributes to return
    outSpatialReference: {
      wkid: 54010
    },
    returnGeometry: true
  });
  
  countriesGeneralized.queryFeatures(countryQuery)
  .then((results) => {
    if(results.features.length > 0){
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
    }else{
      infoDiv.innerHTML = `
        Select a country on the map.<br>
        No country selected. Try again.
      `;
    }
  }).catch((error) => {
    console.log(error);
  });
});