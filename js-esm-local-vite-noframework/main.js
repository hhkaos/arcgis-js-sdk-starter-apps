import MapView from '@arcgis/core/views/MapView';
import "./style.css";

const view = new MapView({
  container: "viewDiv",
  map: {
    basemap: "streets"
  },
  zoom:  4,
  center: [15,65]
});