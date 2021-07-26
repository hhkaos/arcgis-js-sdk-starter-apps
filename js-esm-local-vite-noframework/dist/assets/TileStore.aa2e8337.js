import{bL as t,bM as e,bN as s,bO as i,bP as r,r as n,bQ as a,t as o,n as h,s as u,aX as l,bR as c,a$ as d,h as m,a as _,bS as f,bT as p,bU as g,A as x,bp as y,R as b,bm as I,al as S,bV as M,bW as z,bX as T,x as w,bY as v}from"./vendor.d9ce5f39.js";import{h as B,t as F}from"./FeatureSetReader.d4cae64c.js";import{N as X,O as Y,K as A,c as C,J as k}from"./definitions.8ca8ae21.js";import{H as D}from"./Utils.da6d3650.js";import{n as E,l as R,r as O}from"./visualVariablesUtils.66f69d02.js";import{a as U}from"./quickselect.c0fda8e0.js";function P(t,e){if(!(this instanceof P))return new P(t,e);this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this.toBBox=e:this._initFormat(e)),this.clear()}function N(t,e,s){if(!s)return e.indexOf(t);for(var i=0;i<e.length;i++)if(s(t,e[i]))return i;return-1}function G(t,e){L(t,0,t.children.length,e,t)}function L(t,e,s,i,r){r||(r=W(null)),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(var n,a=e;a<s;a++)n=t.children[a],j(r,t.leaf?i(n):n);return r}function j(t,e){return t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY),t}function H(t,e){return t.minX-e.minX}function V(t,e){return t.minY-e.minY}function Q(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function Z(t){return t.maxX-t.minX+(t.maxY-t.minY)}function q(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function J(t,e){var s=Math.max(t.minX,e.minX),i=Math.max(t.minY,e.minY),r=Math.min(t.maxX,e.maxX),n=Math.min(t.maxY,e.maxY);return Math.max(0,r-s)*Math.max(0,n-i)}function $(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function K(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function W(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function tt(t,e,s,i,r){for(var n,a=[e,s];a.length;)(s=a.pop())-(e=a.pop())<=i||(n=e+Math.ceil((s-e)/i/2)*i,U(t,n,e,s,r),a.push(e,n,n,s))}P.prototype={all:function(){return this._all(this.data,[])},search:function(t){var e=this.data,s=[],i=this.toBBox;if(!K(t,e))return s;for(var r,n,a,o,h=[];e;){for(r=0,n=e.children.length;r<n;r++)a=e.children[r],K(t,o=e.leaf?i(a):a)&&(e.leaf?s.push(a):$(t,o)?this._all(a,s):h.push(a));e=h.pop()}return s},collides:function(t){var e=this.data,s=this.toBBox;if(!K(t,e))return!1;for(var i,r,n,a,o=[];e;){for(i=0,r=e.children.length;i<r;i++)if(n=e.children[i],K(t,a=e.leaf?s(n):n)){if(e.leaf||$(t,a))return!0;o.push(n)}e=o.pop()}return!1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var e=0,s=t.length;e<s;e++)this.insert(t[e]);return this}var i=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===i.height)this._splitRoot(this.data,i);else{if(this.data.height<i.height){var r=this.data;this.data=i,i=r}this._insert(i,this.data.height-i.height-1,!0)}else this.data=i;return this},insert:function(t){return t&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=W([]),this},remove:function(t,e){if(!t)return this;for(var s,i,r,n,a=this.data,o=this.toBBox(t),h=[],u=[];a||h.length;){if(a||(a=h.pop(),i=h[h.length-1],s=u.pop(),n=!0),a.leaf&&-1!==(r=N(t,a.children,e)))return a.children.splice(r,1),h.push(a),this._condense(h),this;n||a.leaf||!$(a,o)?i?(s++,a=i.children[s],n=!1):a=null:(h.push(a),u.push(s),s=0,i=a,a=a.children[0])}return this},toBBox:function(t){return t},compareMinX:H,compareMinY:V,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,e){for(var s=[];t;)t.leaf?e.push.apply(e,t.children):s.push.apply(s,t.children),t=s.pop();return e},_build:function(t,e,s,i){var r,n=s-e+1,a=this._maxEntries;if(n<=a)return G(r=W(t.slice(e,s+1)),this.toBBox),r;i||(i=Math.ceil(Math.log(n)/Math.log(a)),a=Math.ceil(n/Math.pow(a,i-1))),(r=W([])).leaf=!1,r.height=i;var o,h,u,l,c=Math.ceil(n/a),d=c*Math.ceil(Math.sqrt(a));for(tt(t,e,s,d,this.compareMinX),o=e;o<=s;o+=d)for(tt(t,o,u=Math.min(o+d-1,s),c,this.compareMinY),h=o;h<=u;h+=c)l=Math.min(h+c-1,u),r.children.push(this._build(t,h,l,i-1));return G(r,this.toBBox),r},_chooseSubtree:function(t,e,s,i){for(var r,n,a,o,h,u,l,c;i.push(e),!e.leaf&&i.length-1!==s;){for(l=c=1/0,r=0,n=e.children.length;r<n;r++)h=Q(a=e.children[r]),(u=q(t,a)-h)<c?(c=u,l=h<l?h:l,o=a):u===c&&h<l&&(l=h,o=a);e=o||e.children[0]}return e},_insert:function(t,e,s){var i=this.toBBox,r=s?t:i(t),n=[],a=this._chooseSubtree(r,this.data,e,n);for(a.children.push(t),j(a,r);e>=0&&n[e].children.length>this._maxEntries;)this._split(n,e),e--;this._adjustParentBBoxes(r,n,e)},_split:function(t,e){var s=t[e],i=s.children.length,r=this._minEntries;this._chooseSplitAxis(s,r,i);var n=this._chooseSplitIndex(s,r,i),a=W(s.children.splice(n,s.children.length-n));a.height=s.height,a.leaf=s.leaf,G(s,this.toBBox),G(a,this.toBBox),e?t[e-1].children.push(a):this._splitRoot(s,a)},_splitRoot:function(t,e){this.data=W([t,e]),this.data.height=t.height+1,this.data.leaf=!1,G(this.data,this.toBBox)},_chooseSplitIndex:function(t,e,s){var i,r,n,a,o,h,u,l;for(h=u=1/0,i=e;i<=s-e;i++)a=J(r=L(t,0,i,this.toBBox),n=L(t,i,s,this.toBBox)),o=Q(r)+Q(n),a<h?(h=a,l=i,u=o<u?o:u):a===h&&o<u&&(u=o,l=i);return l},_chooseSplitAxis:function(t,e,s){var i=t.leaf?this.compareMinX:H,r=t.leaf?this.compareMinY:V;this._allDistMargin(t,e,s,i)<this._allDistMargin(t,e,s,r)&&t.children.sort(i)},_allDistMargin:function(t,e,s,i){t.children.sort(i);var r,n,a=this.toBBox,o=L(t,0,e,a),h=L(t,s-e,s,a),u=Z(o)+Z(h);for(r=e;r<s-e;r++)n=t.children[r],j(o,t.leaf?a(n):n),u+=Z(o);for(r=s-e-1;r>=e;r--)n=t.children[r],j(h,t.leaf?a(n):n),u+=Z(h);return u},_adjustParentBBoxes:function(t,e,s){for(var i=s;i>=0;i--)j(e[i],t)},_condense:function(t){for(var e,s=t.length-1;s>=0;s--)0===t[s].children.length?s>0?(e=t[s-1].children).splice(e.indexOf(t[s]),1):this.clear():G(t[s],this.toBBox)},_initFormat:function(t){var e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}};class et extends B{constructor(t,e,s){super(t),this._featureIndex=-1,this._dateFields=new Set,this._geometryType=s,this._features=e}static fromFeatures(e,s,i){const r=t([],e,s,!1,!1,i);for(let t=0;t<r.length;t++)r[t].displayId=e[t].displayId;return et.fromOptimizedFeatures(r,s)}static fromFeatureSet(t,s){const i=e(t,s);return et.fromOptimizedFeatureSet(i)}static fromOptimizedFeatureSet(t){const{features:e,geometryType:s}=t,i=et.fromOptimizedFeatures(e,s);i._exceededTransferLimit=t.exceededTransferLimit,i._transform=t.transform;for(const r of t.fields)"esriFieldTypeDate"===r.type&&i._dateFields.add(r.name);return i}static fromOptimizedFeatures(t,e,s){const i=B.createInstance(),r=new et(i,t,e);return r._transform=s,r}get _current(){return this._features[this._featureIndex]}get geometryType(){return this._geometryType}get hasFeatures(){return!!this._features.length}get hasNext(){return this._featureIndex+1<this._features.length}get exceededTransferLimit(){return this._exceededTransferLimit}get hasZ(){return!1}get hasM(){return!1}removeIds(t){const e=new Set(t);this._features=this._features.filter((t=>!e.has(t.objectId)))}append(t){for(const e of t)this._features.push(e)}getSize(){return this._features.length}getCursor(){return this.copy()}getQuantizationTransform(){return this._transform}getAttributeHash(){let t="";for(const e in this._current.attributes)t+=this._current.attributes[e];return t}getIndex(){return this._featureIndex}setIndex(t){this._featureIndex=t}getObjectId(){return this._current.objectId}getDisplayId(){return this._current.displayId}setDisplayId(t){this._current.displayId=t}getGroupId(){return this._current.groupId}setGroupId(t){this._current.groupId=t}copy(){const t=new et(this.instance,this._features,this.geometryType);return this.copyInto(t),t}next(){for(;++this._featureIndex<this._features.length&&!this._getExists(););return this._featureIndex<this._features.length}readLegacyFeature(){return s(this._current,this.geometryType,this.hasZ,this.hasM)}readOptimizedFeature(){return this._current}readLegacyPointGeometry(){return this.readGeometry()?{x:this.getX(),y:this.getY()}:null}readLegacyGeometry(){const t=this.readGeometry();return i(t,this.geometryType,this.hasZ,this.hasM)}readLegacyCentroid(){const t=this.readCentroid();return t?{x:t.coords[0]*this._sx+this._tx,y:t.coords[1]*this._sy+this._ty}:null}readGeometryArea(){return r(this._current.geometry,2)}readUnquantizedGeometry(){const t=this.readGeometry();if("esriGeometryPoint"===this.geometryType||!t)return t;const e=t.clone();return function({coords:t,lengths:e}){let s=0;for(const i of e){for(let e=1;e<i;e++)t[2*(s+e)]+=t[2*(s+e)-2],t[2*(s+e)+1]+=t[2*(s+e)-1];s+=i}}(e),e}readHydratedGeometry(){const t=this._current.geometry;if(!t)return null;const e=t.clone();return n(this._transform)&&a(e,e,this.hasZ,this.hasM,this._transform),e}getXHydrate(){const t=this._current.geometry.coords[0],e=this.getQuantizationTransform();return o(e)?t:t*e.scale[0]+e.translate[0]}getYHydrate(){const t=this._current.geometry.coords[1],e=this.getQuantizationTransform();return o(e)?t:e.translate[1]-t*e.scale[1]}getX(){return this._current.geometry.coords[0]*this._sx+this._tx}getY(){return this._current.geometry.coords[1]*this._sy+this._ty}readGeometry(){if(!this._current.hasGeometry)return null;const t=this._current.geometry.clone();if(t.isPoint)return t.coords[0]=t.coords[0]*this._sx+this._tx,t.coords[1]=t.coords[1]*this._sy+this._ty,t;let e=0;for(const s of t.lengths)t.coords[2*e]=t.coords[2*e]*this._sx+this._tx,t.coords[2*e+1]=t.coords[2*e+1]*this._sy+this._ty,e+=s;return t}readCentroid(){if(!this._current.hasGeometry)return null;if(!this._current.centroid){const t=this._computeCentroid();if(!t)return null;t.coords[0]=(t.coords[0]-this._tx)/this._sx,t.coords[1]=(t.coords[1]-this._ty)/this._sy,this._current.centroid=t}const t=this._current.centroid.clone();return t.coords[0]=t.coords[0]*this._sx+this._tx,t.coords[1]=t.coords[1]*this._sx+this._ty,t}_readAttribute(t,e){const s=this._current.attributes[t];if(void 0!==s)return null!=s&&e&&this._dateFields.has(t)?new Date(s):s;const i=this.readAttributes(),r=t.toLocaleLowerCase().trim();for(const n in i)if(n.toLocaleLowerCase().trim()===r){const t=this._current.attributes[n];return null!=t&&e&&this._dateFields.has(n)?new Date(t):t}}copyInto(t){super.copyInto(t),t._featureIndex=this._featureIndex,t._transform=this._transform,t._dateFields=this._dateFields}_readAttributes(){return this._current.attributes}}const st=h.getLogger("esri.views.layers.2d.features.support.AttributeStore"),it=E(R,st),rt=t=>(2147483648&t)>>>31,nt=t=>2147483647&t;function at(t){return 1===rt(t)}const ot={sharedArrayBuffer:u("esri-shared-array-buffer"),atomics:u("esri-atomics")};function ht(t,e){return s=>e(t(s))}class ut{constructor(t,e,s,i){this.size=0,this.texelSize=4;const{pixelType:r,layout:n,textureOnly:a}=i;this.textureOnly=a||!1,this.pixelType=r,this._ctype=e,this.layout=n,this._resetRange(),this._shared=t,this.size=s,a||(this.data=this._initData(r,s,t,e))}get buffer(){return x(this.data,(t=>t.buffer))}unsetComponentAllTexels(t,e){const s=y(this.data);for(let i=0;i<this.size*this.size;i++)s[i*this.texelSize+t]&=~e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponentAllTexels(t,e){const s=y(this.data);for(let i=0;i<this.size*this.size;i++)s[i*this.texelSize+t]|=255&e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponent(t,e,s){const i=y(this.data);for(const r of s)i[r*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r)}setComponentTexel(t,e,s){y(this.data)[s*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)}unsetComponentTexel(t,e,s){y(this.data)[s*this.texelSize+t]&=~e,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)}getData(t,e){const s=nt(t);return y(this.data)[s*this.texelSize+e]}setData(t,e,s){const i=nt(t),r=1<<e;0!=(this.layout&r)?(this.data[i*this.texelSize+e]=s,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i)):st.error("mapview-attributes-store","Tried to set a value for a texel's readonly component")}lock(){5121===this.pixelType&&this._shared&&ot.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,1)}unlock(){5121===this.pixelType&&this._shared&&ot.atomics&&"local"!==this._ctype&&Atomics.store(this.data,0,0)}expand(t){if(this.size=t,!this.textureOnly){const e=this._initData(this.pixelType,t,this._shared,this._ctype),s=y(this.data);e.set(s),this.data=e}}toMessage(){const t=this.dirtyStart,e=this.dirtyEnd,s=this.texelSize;if(t>e)return null;this._resetRange();const i=!(this._shared||"local"===this._ctype),r=this.pixelType,n=this.layout,a=y(this.data);return{start:t,end:e,data:i&&a.slice(t*s,(e+1)*s)||null,pixelType:r,layout:n}}_initData(t,e,s,i){const r=s&&"local"!==i?SharedArrayBuffer:ArrayBuffer,n=D(t),a=new n(new r(e*e*4*n.BYTES_PER_ELEMENT));for(let o=0;o<a.length;o+=4)a[o+1]=255;return a}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}}class lt{constructor(t,e){this._client=t,this.config=e,this._attributeComputeMap=new Map,this._blocks=new Array,this._filters=new Array(X),this._targetType=0,this._abortController=l(),this._hasScaleExpr=!1,this._size=32,this._idsToHighlight=new Set;const s=e.supportsTextureFloat?5126:5121;it(`Creating AttributeStore ${ot.sharedArrayBuffer?"with":"without"} shared memory`),this._blockDescriptors=[{pixelType:5121,layout:1},{pixelType:5121,layout:15,textureOnly:!0},{pixelType:s,layout:15},{pixelType:s,layout:15}],this._blocks=this._blockDescriptors.map((()=>null))}destroy(){this._abortController.abort()}get hasScaleExpr(){return this._hasScaleExpr}get _signal(){return this._abortController.signal}update(t,e){this.config=e;const s=e.schema.processors[0].storage,i=c(this._schema,s);if((t.targets.feature||t.targets.aggregate)&&(t.storage.data=!0),i&&(u("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:",i),t.storage.data=!0,this._schema=s,this._attributeComputeMap.clear(),!o(s))){switch(s.target){case"feature":this._targetType=0;break;case"aggregate":this._targetType=1}if("subtype"===s.type)for(const t in s.mapping){const e=s.mapping[t];if(n(e))for(const t of e.mapping)this._bindAttribute(t)}else for(const t of s.mapping)this._bindAttribute(t)}}onTileData(t,e){if(o(e.addOrUpdate))return;const s=e.addOrUpdate.getCursor();for(;s.next();){const t=s.getDisplayId();this.setAttributeData(t,s)}}invalidateResources(){this._createResourcesPromise=null,this._abortController.abort(),this._abortController=l()}async setHighlight(t,e){const s=this._getBlock(0),i=e.map((t=>nt(t)));s.lock(),s.unsetComponentAllTexels(0,1),s.setComponent(0,1,i),s.unlock(),this._idsToHighlight.clear();for(const r of t)this._idsToHighlight.add(r);await this.sendUpdates()}async updateFilters(t,e){const{config:s,service:i,spatialReference:r}=e,{filters:n}=s,a=n.map(((t,e)=>this._updateFilter(t,e,i,r)));(await Promise.all(a)).some((t=>t))&&(t.storage.filters=!0,u("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:","Filters changed"))}setData(t,e,s,i){const r=nt(t);this._ensureSizeForTexel(r),this._getBlock(e).setData(t,s,i)}getData(t,e,s){return this._getBlock(e).getData(t,s)}getHighlightFlag(t){return this._idsToHighlight.has(t)?Y:0}unsetAttributeData(t){const e=nt(t);this._getBlock(0).setData(e,0,0)}setAttributeData(t,e){const s=nt(t);if(this._ensureSizeForTexel(s),this._getBlock(0).setData(s,0,this.getFilterFlags(e)),this._targetType!==rt(t))return;const i=this._attributeComputeMap,r=this.config.supportsTextureFloat?1:2;i.size&&i.forEach(((t,i)=>{const n=i*r%4,a=Math.floor(i*r/4),o=this._getBlock(a+A),h=t(e);if(this.config.supportsTextureFloat)o.setData(s,n,h);else if(h===C)o.setData(s,n,255),o.setData(s,n+1,255);else{const t=b(Math.round(h),-32767,32766)+32768,e=255&t,i=(65280&t)>>8;o.setData(s,n,e),o.setData(s,n+1,i)}}))}sendUpdates(){if(this._nextUpdate)return this._nextUpdate.promise;if(this._currUpdate)return this._nextUpdate=d(),this._nextUpdate.promise;const t={blocks:this._blocks.map((t=>n(t)?t.toMessage():null))};return this._currUpdate=this._createResources().then((()=>{const e=()=>{if(this._currUpdate=null,this._nextUpdate){const t=this._nextUpdate;this._nextUpdate=null,this.sendUpdates().then((()=>t.resolve()))}},s=this._client.update(t,this._signal).then(e).catch(e);return this._client.render(this._signal),s})).catch((t=>m(t)?(this._createResourcesPromise=null,this._createResources()):(st.error(new _("mapview-attribute-store","Encountered an error during client update",t)),Promise.resolve()))),this._currUpdate}_ensureSizeForTexel(t){for(;t>=this._size*this._size;)if(this._expand())return}_bindAttribute(t){let e;if(null!=t.fieldIndex)t.normalizationField&&st.warn("mapview-arcade","Ignoring normalizationField specified with an arcade expression which is not supported."),e=e=>e.getComputedNumericAtIndex(t.fieldIndex);else{if(!t.field)return;e=t.normalizationField?e=>{const s=e.readAttribute(t.normalizationField);return s?e.readAttribute(t.field)/s:null}:e=>e.readAttribute(t.field)}t.valueRepresentation&&(e=ht(e,(e=>O(e,t.valueRepresentation))));this._attributeComputeMap.set(t.binding,ht(e,(t=>null===t||isNaN(t)||t===1/0?C:t)))}_createResources(){if(n(this._createResourcesPromise))return this._createResourcesPromise;this._getBlock(k),it("Initializing AttributeStore");const t={shared:ot.sharedArrayBuffer&&!("local"===this._client.type),size:this._size,blocks:f(this._blocks,(t=>({textureOnly:t.textureOnly,buffer:t.buffer,pixelType:t.pixelType})))},e=this._client.initialize(t,this._signal).catch((t=>{m(t)?this._createResourcesPromise=null:st.error(new _("mapview-attribute-store","Encountered an error during client initialization",t))}));return this._createResourcesPromise=e,e.then((()=>o(this._createResourcesPromise)?this._createResources():void 0)),e}_getBlock(t){const e=this._blocks[t];if(n(e))return e;it(`Initializing AttributeBlock at index ${t}`);const s=ot.sharedArrayBuffer,i=this._client.type,r=new ut(s,i,this._size,this._blockDescriptors[t]);return this._blocks[t]=r,this._createResourcesPromise=null,r}_expand(){if(this._size<this.config.maxTextureSize){const t=this._size<<=1;return it("Expanding block size to",t,this._blocks),p(this._blocks,(e=>e.expand(t))),this._createResourcesPromise=null,this._size=t,0}return st.error(new _("mapview-limitations","Maximum number of onscreen features exceeded.")),-1}async _updateFilter(t,e,s,i){const r=this._filters[e],a=n(r)&&r.hash;if(!r&&!t)return!1;if(a===JSON.stringify(t))return!1;if(o(t)){if(!r)return!1;const t=1<<e+1,s=this._getBlock(0);return this._filters[e]=null,s.setComponentAllTexels(0,t),this.sendUpdates(),!0}const h=await this._getFilter(e,s);return await h.update(t,i),!0}async _getFilter(t,e){const s=this._filters[t];if(n(s))return s;const{default:i}=await import("./FeatureFilter.35fd6ec1.js"),r=new i({geometryType:e.geometryType,hasM:!1,hasZ:!1,timeInfo:e.timeInfo,fieldsIndex:new g(e.fields)});return this._filters[t]=r,r}isVisible(t){return!!(2&this._getBlock(0).getData(t,0))}getFilterFlags(t){let e=0;const s=(t=>1===rt(t)?254:255)(t.getDisplayId());for(let r=0;r<this._filters.length;r++){const i=!!(s&1<<r),n=this._filters[r];e|=(!i||o(n)||n.check(t)?1:0)<<r}let i=0;if(this._idsToHighlight.size){const e=t.getObjectId();i=this.getHighlightFlag(e)}return e<<1|i}}class ct{constructor(){this._freeIds=[],this._idCounter=1}createId(t=!1){return function(t,e){return((e?2147483648:0)|t)>>>0}(this._getFreeId(),t)}releaseId(t){this._freeIds.push(t)}_getFreeId(){return this._freeIds.length?this._freeIds.pop():this._idCounter++}}function dt(t,e,s){if(!(t.length>e))for(;t.length<=e;)t.push(s)}const mt=2147483647;class _t{constructor(){this._numerics=[],this._strings=[],this._idGenerator=new ct,this._allocatedSize=256,this._bitsets=[],this._instanceIds=[],this._bounds=[]}createBitset(){const t=this._bitsets.length;return this._bitsets.push(F.create(this._allocatedSize,mt)),t+1}getBitset(t){return this._bitsets[t-1]}_expand(){this._allocatedSize<<=1;for(const t of this._bitsets)t.resize(this._allocatedSize)}_ensureNumeric(t,e){this._numerics[t]||(this._numerics[t]=[]),dt(this._numerics[t],e,0)}_ensureInstanceId(t){dt(this._instanceIds,t,0)}_ensureString(t,e){this._strings[t]||(this._strings[t]=[]),dt(this._strings[t],e,null)}createDisplayId(t=!1){const e=this._idGenerator.createId();return e>this._allocatedSize&&this._expand(),((t,e)=>((e?2147483648:0)|t)>>>0)(e,t)}releaseDisplayId(t){for(const e of this._bitsets)e.unset(t);return this._idGenerator.releaseId(t&mt)}getComputedNumeric(t,e){return this.getComputedNumericAtIndex(t&mt,0)}setComputedNumeric(t,e,s){return this.setComputedNumericAtIndex(t&mt,s,0)}getComputedString(t,e){return this.getComputedStringAtIndex(t&mt,0)}setComputedString(t,e,s){return this.setComputedStringAtIndex(t&mt,0,s)}getComputedNumericAtIndex(t,e){const s=t&mt;return this._ensureNumeric(e,s),this._numerics[e][s]}setComputedNumericAtIndex(t,e,s){const i=t&mt;this._ensureNumeric(e,i),this._numerics[e][i]=s}getInstanceId(t){const e=t&mt;return this._ensureInstanceId(e),this._instanceIds[e]}setInstanceId(t,e){const s=t&mt;this._ensureInstanceId(s),this._instanceIds[s]=e}getComputedStringAtIndex(t,e){const s=t&mt;return this._ensureString(e,s),this._strings[e][s]}setComputedStringAtIndex(t,e,s){const i=t&mt;this._ensureString(e,i),this._strings[e][i]=s}getXMin(t){return this._bounds[4*(t&mt)]}getYMin(t){return this._bounds[4*(t&mt)+1]}getXMax(t){return this._bounds[4*(t&mt)+2]}getYMax(t){return this._bounds[4*(t&mt)+3]}setBounds(t,e){const s=e.readHydratedGeometry();if(!s||!s.coords.length)return!1;let i=1/0,r=1/0,n=-1/0,a=-1/0;s.forEachVertex(((t,e)=>{i=Math.min(i,t),r=Math.min(r,e),n=Math.max(n,t),a=Math.max(a,e)}));const o=t&mt;return dt(this._bounds,4*o+4,0),this._bounds[4*o]=i,this._bounds[4*o+1]=r,this._bounds[4*o+2]=n,this._bounds[4*o+3]=a,!0}}class ft{constructor(t,e){this.key=new I(0,0,0,0),this.bounds=S(),this.objectIds=new Set,this.key.set(e);const s=t.getLODInfoAt(this.key);this.tileInfoView=t,this.tileInfoView.getTileBounds(this.bounds,this.key,!0),this.resolution=s.resolution,this.scale=s.scale,this.level=s.level,this.needsClear=!0}get id(){return this.key.id}get extent(){return M.fromBounds(this.bounds,this.tileInfoView.tileInfo.spatialReference)}get transform(){return{originPosition:"upperLeft",scale:[this.resolution,this.resolution],translate:[this.bounds[0],this.bounds[3]]}}get bbox(){const t=this.bounds;return{minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]}}clone(){return new ft(this.tileInfoView,this.key)}createChildTiles(){const t=this.key.getChildKeys(),e=z.acquire();for(let s=0;s<t.length;s++)e[s]=new ft(this.tileInfoView,t[s]);return e}getQuantizationParameters(){return T.fromJSON({mode:"view",originPosition:"upperLeft",tolerance:this.resolution,extent:{xmin:this.bounds[0],ymin:this.bounds[1],xmax:this.bounds[2],ymax:this.bounds[3],spatialReference:this.tileInfoView.tileInfo.spatialReference}})}}const pt={added:[],removed:[]},gt=new Set,xt=new I(0,0,0,0);class yt extends w{constructor(t){super(),this._tiles=new Map,this._index=P(9,u("csp-restrictions")?t=>({minX:t.bounds[0],minY:t.bounds[1],maxX:t.bounds[2],maxY:t.bounds[3]}):[".bounds[0]",".bounds[1]",".bounds[2]",".bounds[3]"]),this.tiles=[],this.tileScheme=t}destroy(){this.clear()}clear(){this.tiles.length=0,this._tiles.clear(),this._index.clear()}has(t){return this._tiles.has(t)}get(t){return this._tiles.get(t)}boundsIntersections(t){return this._index.search({minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]})}updateTiles(t){const e={added:[],removed:[]};for(const s of t.added)if(!this.has(s)){const t=new ft(this.tileScheme,s);this._tiles.set(s,t),this._index.insert(t),e.added.push(t)}for(const s of t.removed)if(this.has(s)){const t=this.get(s);this._tiles.delete(s),this._index.remove(t),e.removed.push(t)}this.tiles.length=0,this._tiles.forEach((t=>this.tiles.push(t))),(e.added.length||e.removed.length)&&this.emit("update",e)}setViewState(t){const e=this.tileScheme.getTileCoverage(t,0);if(!e)return;const{spans:s,lodInfo:i}=e,{level:r}=i;if(s.length>0)for(const{row:n,colFrom:a,colTo:o}of s)for(let t=a;t<=o;t++){const e=xt.set(r,n,i.normalizeCol(t),i.getWorldForColumn(t)).id;if(gt.add(e),!this.has(e)){const t=new ft(this.tileScheme,e);this._tiles.set(e,t),this._index.insert(t),this.tiles.push(t),pt.added.push(t)}}for(let n=this.tiles.length-1;n>=0;n--){const t=this.tiles[n];gt.has(t.id)||(this._tiles.delete(t.id),this.tiles.splice(n,1),this._index.remove(t),pt.removed.push(t))}(pt.added.length||pt.removed.length)&&this.emit("update",pt),v.pool.release(e),gt.clear(),pt.added.length=0,pt.removed.length=0}}export{nt as M,lt as O,et as c,P as i,yt as l,_t as u,at as v};
