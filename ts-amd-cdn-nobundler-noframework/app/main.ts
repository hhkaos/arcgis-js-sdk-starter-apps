import MapView from "esri/views/MapView";

const view = new MapView({
  map: {
    basemap: "streets-navigation-vector"
  },
  container: "viewDiv",
  center: [-3.760276,39.482580],
  zoom: 4
});

// Workaround to access the window object
// declare global {
//   interface Window { view: MapView; }
// }
// window.view = view;