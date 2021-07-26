import{eO as e,dr as t,eP as n,eQ as i,eR as r,aG as s}from"./vendor.d9ce5f39.js";class o{constructor(){this.code=null,this.description=null}}class a{constructor(e){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function l(e){return new a(e)}class u{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function c(e){return new u(e)}const f=new Set;function d(e,t,n,s,o=!1,a){f.clear();for(const u in n){const s=e.get(u);if(!s)continue;const c=n[u],d=h(s,c);if(d!==c&&a&&a.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:s,originalValue:c,sanitizedValue:d}}),f.add(s.name),s&&(o||s.editable)){const e=i(s,d);if(e)return l(r(e,s,d));t[s.name]=d}}if(s)for(const i of s)if(!f.has(i.name))return l(`missing required field "${i.name}"`);return null}function h(i,r){let s=r;return"string"==typeof r&&e(i)?s=parseFloat(r):null!=r&&t(i)&&"string"!=typeof r&&(s=String(r)),n(s)}let m;function g(e,t){if(!e||!s(t))return e;if("rings"in e||"paths"in e){if(!m)throw new TypeError("geometry engine not loaded");return m.simplify(t,e)}return e}async function p(e,t){!s(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return m||(m=await import("./geometryEngineJSON.2d3f87ef.js"),m)}()}export{c,d,g as h,l as u,p as y};
