var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(r,t,i)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i,n=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&o(e,t,r[t]);if(i)for(var t of i(r))a.call(r,t)&&o(e,t,r[t]);return e};import{X as l,Y as p,a6 as u,ft as c,fk as y,aV as d,cm as f,Z as m,cd as B,cG as v,aU as b,r as g,d3 as h,dv as P,L as O,fu as j}from"./vendor.d9ce5f39.js";import{c as R,i as S,u as k,d as A,a as N,p as C,o as w}from"./networkService.d7de2db2.js";import"./GPMessage.aa365137.js";function F(e){return v.fromJSON(e).features.map((e=>e.geometry))}let J=class extends B{constructor(e){super(e),this.directions=null,this.facilities=null,this.incidents=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routes=null}readFacilities(e){return F(e)}readIncidents(e){return F(e)}readPointBarriers(e,r){return F(r.barriers)}readPolylineBarriers(e){return F(e)}readPolygonBarriers(e){return F(e)}readRoutes(e){return(r=e).features.map((e=>{const t=b.fromJSON(r.spatialReference),i=f.fromJSON(e);return g(i.geometry)&&(i.geometry.spatialReference=t),i}));var r}};l([p({type:[R]})],J.prototype,"directions",void 0),l([p({type:[u]})],J.prototype,"facilities",void 0),l([c("facilities")],J.prototype,"readFacilities",null),l([p({type:[u]})],J.prototype,"incidents",void 0),l([c("incidents")],J.prototype,"readIncidents",null),l([p({type:[S]})],J.prototype,"messages",void 0),l([p({type:[u]})],J.prototype,"pointBarriers",void 0),l([c("pointBarriers",["barriers"])],J.prototype,"readPointBarriers",null),l([p({type:[y]})],J.prototype,"polylineBarriers",void 0),l([c("polylineBarriers")],J.prototype,"readPolylineBarriers",null),l([p({type:[d]})],J.prototype,"polygonBarriers",void 0),l([c("polygonBarriers")],J.prototype,"readPolygonBarriers",null),l([p({type:[f]})],J.prototype,"routes",void 0),l([c("routes")],J.prototype,"readRoutes",null),J=l([m("esri.rest.support.ClosestFacilitySolveResult")],J);var x=J;const I=w({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});let T=class extends j{constructor(e){super(e),this.url=null}solve(e,i){return async function(e,i,s){const a=[],o=[],l={},p={},u=h(e);return i.incidents&&i.incidents.features&&k(i.incidents.features,o,"incidents.features",l),i.facilities&&i.facilities.features&&k(i.facilities.features,o,"facilities.features",l),i.pointBarriers&&i.pointBarriers.features&&k(i.pointBarriers.features,o,"pointBarriers.features",l),i.polylineBarriers&&i.polylineBarriers.features&&k(i.polylineBarriers.features,o,"polylineBarriers.features",l),i.polygonBarriers&&i.polygonBarriers.features&&k(i.polygonBarriers.features,o,"polygonBarriers.features",l),P(o).then((e=>{for(const r in l){const t=l[r];a.push(r),p[r]=e.slice(t[0],t[1])}return A(p,a)?N(u.path):Promise.resolve({dontCheck:!0})})).then((e=>{("dontCheck"in e?e.dontCheck:e.hasZ)||C(p,a);for(const r in p)p[r].forEach(((e,t)=>{i.get(r)[t].geometry=e}));let o={query:n((l=n({},u.query),c={f:"json"},r(l,t(c))),I.toQueryParams(i))};var l,c;return s&&(o=n(n({},s),o)),O(`${u.path}/solveClosestFacility`,o)})).then((e=>x.fromJSON(e.data)))}(this.url,e,i)}};l([p()],T.prototype,"url",void 0),T=l([m("esri.tasks.ClosestFacilityTask")],T);var q=T;export default q;
