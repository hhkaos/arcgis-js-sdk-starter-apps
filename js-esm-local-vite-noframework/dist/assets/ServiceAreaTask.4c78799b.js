var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(r,t,a)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a,n=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&i(e,t,r[t]);if(a)for(var t of a(r))o.call(r,t)&&i(e,t,r[t]);return e};import{X as l,Y as p,a6 as u,ft as c,fk as y,aV as f,cm as d,Z as v,cd as B,c5 as m,aU as g,bp as P,d3 as h,dv as b,L as A,fu as S}from"./vendor.d9ce5f39.js";import{i as O,u as j,d as k,a as R,p as w,o as N}from"./networkService.d7de2db2.js";import"./GPMessage.aa365137.js";function C(e){return e.features.map((r=>{const t=g.fromJSON(e.spatialReference),a=d.fromJSON(r);return P(a.geometry).spatialReference=t,a}))}function x(e){return e.features.map((r=>(r.geometry.spatialReference=e.spatialReference,m(r.geometry))))}let I=class extends B{constructor(e){super(e),this.facilities=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.serviceAreaPolylines=null,this.serviceAreaPolygons=null}readFacilities(e){return x(e)}readPointBarriers(e,r){return x(r.barriers)}readPolylineBarriers(e){return x(e)}readPolygonBarriers(e){return x(e)}readIncidents(e,r){return C(r.saPolylines)}readServiceAreaPolygons(e,r){return C(r.saPolygons)}};l([p({type:[u]})],I.prototype,"facilities",void 0),l([c("facilities")],I.prototype,"readFacilities",null),l([p({type:[O]})],I.prototype,"messages",void 0),l([p({type:[u]})],I.prototype,"pointBarriers",void 0),l([c("pointBarriers",["barriers"])],I.prototype,"readPointBarriers",null),l([p({type:[y]})],I.prototype,"polylineBarriers",void 0),l([c("polylineBarriers")],I.prototype,"readPolylineBarriers",null),l([p({type:[f]})],I.prototype,"polygonBarriers",void 0),l([c("polygonBarriers")],I.prototype,"readPolygonBarriers",null),l([p({type:[d]})],I.prototype,"serviceAreaPolylines",void 0),l([c("serviceAreaPolylines",["saPolylines"])],I.prototype,"readIncidents",null),l([p({type:[d]})],I.prototype,"serviceAreaPolygons",void 0),l([c("serviceAreaPolygons",["saPolygons"])],I.prototype,"readServiceAreaPolygons",null),I=l([v("esri.rest.support.ServiceAreaSolveResult")],I);var J=I;const q=N({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});let E=class extends S{constructor(e){super(e),this.url=null}solve(e,a){return async function(e,a,s){const o=[],i=[],l={},p={},u=h(e);return a.facilities&&a.facilities.features&&j(a.facilities.features,i,"facilities.features",l),a.pointBarriers&&a.pointBarriers.features&&j(a.pointBarriers.features,i,"pointBarriers.features",l),a.polylineBarriers&&a.polylineBarriers.features&&j(a.polylineBarriers.features,i,"polylineBarriers.features",l),a.polygonBarriers&&a.polygonBarriers.features&&j(a.polygonBarriers.features,i,"polygonBarriers.features",l),b(i).then((e=>{for(const r in l){const t=l[r];o.push(r),p[r]=e.slice(t[0],t[1])}return k(p,o)?R(u.path).catch((()=>({dontCheck:!0}))):Promise.resolve({dontCheck:!0})})).then((e=>{("dontCheck"in e?e.dontCheck:e.hasZ)||w(p,o);for(const r in p)p[r].forEach(((e,t)=>{a.get(r)[t].geometry=e}));let i={query:n((l=n({},u.query),c={f:"json"},r(l,t(c))),q.toQueryParams(a))};var l,c;return s&&(i=n(n({},s),i)),A(`${u.path}/solveServiceArea`,i)})).then((e=>J.fromJSON(e.data)))}(this.url,e,a)}};l([p()],E.prototype,"url",void 0),E=l([v("esri.tasks.ServiceAreaTask")],E);var F=E;export default F;