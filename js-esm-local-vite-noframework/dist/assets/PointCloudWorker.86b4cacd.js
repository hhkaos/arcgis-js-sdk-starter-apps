var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,a=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,s=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&a(e,r,t[r]);if(n)for(var r of n(t))i.call(t,r)&&a(e,r,t[r]);return e},c=(e,n)=>t(e,r(n));import{a as l,n as u,b5 as f,r as d,t as b,f7 as y,aU as p,ea as g,f8 as w}from"./vendor.d9ce5f39.js";import{w as h}from"./quat.b9d69b87.js";import{t as m,n as v}from"./vec3f32.26dc4040.js";import{a as U,b as C,d as A}from"./PointCloudUniqueValueRenderer.09e1c022.js";import"./vec4.d028c393.js";function I(){const e=new Float32Array(4);return e[3]=1,e}Object.freeze({__proto__:null,create:I,clone:function(e){const t=new Float32Array(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},fromValues:function(e,t,r,n){const o=new Float32Array(4);return o[0]=e,o[1]=t,o[2]=r,o[3]=n,o},createView:function(e,t){return new Float32Array(e,t,4)}});const O=!0,M=0,F=10,B=10,S=12,T=16;function z(e,t,r){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,r+M,F)),version:t.getUint16(r+B,O),checksum:t.getUint32(r+S,O)}}const D=0,x=4,P=8,L=16,V=24,E=32,k=40,j=48,R=56,_=64,Y=72,X=80,Z=84,N=88;function q(e){const t=new DataView(e,0);let r=0;const{identifier:n,version:o}=z(e,t,r);if(r+=T,"LEPCC     "!==n)throw new l("lepcc-decode-error","Bad identifier");if(o>1)throw new l("lepcc-decode-error","Unknown version");const i=(s=r,{sizeLo:(a=t).getUint32(s+D,O),sizeHi:a.getUint32(s+x,O),minX:a.getFloat64(s+P,O),minY:a.getFloat64(s+L,O),minZ:a.getFloat64(s+V,O),maxX:a.getFloat64(s+E,O),maxY:a.getFloat64(s+k,O),maxZ:a.getFloat64(s+j,O),errorX:a.getFloat64(s+R,O),errorY:a.getFloat64(s+_,O),errorZ:a.getFloat64(s+Y,O),count:a.getUint32(s+X,O),reserved:a.getUint32(s+Z,O)});var a,s;if(r+=N,i.sizeHi*2**32+i.sizeLo!==e.byteLength)throw new l("lepcc-decode-error","Bad size");const c=new Float64Array(3*i.count),u=[],f=[],d=[],b=[];if(r=J(e,r,u),r=J(e,r,f),r=J(e,r,d),r=J(e,r,b),r!==e.byteLength)throw new l("lepcc-decode-error","Bad length");let y=0,p=0;for(let l=0;l<u.length;l++){p+=u[l];let e=0;for(let t=0;t<f[l];t++){e+=d[y];const t=b[y];c[3*y]=Math.min(i.maxX,i.minX+2*i.errorX*e),c[3*y+1]=Math.min(i.maxY,i.minY+2*i.errorY*p),c[3*y+2]=Math.min(i.maxZ,i.minZ+2*i.errorZ*t),y++}}return{errorX:i.errorX,errorY:i.errorY,errorZ:i.errorZ,result:c}}function J(e,t,r){const n=[];t=H(e,t,n);const o=[];for(let i=0;i<n.length;i++){o.length=0,t=H(e,t,o);for(let e=0;e<o.length;e++)r.push(o[e]+n[i])}return t}function H(e,t,r){const n=new DataView(e,t),o=n.getUint8(0),i=31&o,a=!!(32&o),s=(192&o)>>6;let c=0;if(0===s)c=n.getUint32(1,O),t+=5;else if(1===s)c=n.getUint16(1,O),t+=3;else{if(2!==s)throw new l("lepcc-decode-error","Bad count type");c=n.getUint8(1),t+=2}if(a)throw new l("lepcc-decode-error","LUT not implemented");const u=Math.ceil(c*i/8),f=new Uint8Array(e,t,u);let d=0,b=0,y=0;const p=-1>>>32-i;for(let l=0;l<c;l++){for(;b<i;)d|=f[y]<<b,b+=8,y+=1;r[l]=d&p,d>>>=i,b-=i,b+i>32&&(d|=f[y-1]>>8-b)}return t+y}const $=0,G=4,W=8,K=12,Q=14,ee=15,te=16;function re(e){const t=new DataView(e,0);let r=0;const{identifier:n,version:o}=z(e,t,r);if(r+=T,"ClusterRGB"!==n)throw new l("lepcc-decode-error","Bad identifier");if(o>1)throw new l("lepcc-decode-error","Unknown version");const i=(s=r,{sizeLo:(a=t).getUint32(s+$,O),sizeHi:a.getUint32(s+G,O),count:a.getUint32(s+W,O),colorMapCount:a.getUint16(s+K,O),lookupMethod:a.getUint8(s+Q),compressionMethod:a.getUint8(s+ee)});var a,s;if(r+=te,i.sizeHi*2**32+i.sizeLo!==e.byteLength)throw new l("lepcc-decode-error","Bad size");if((2===i.lookupMethod||1===i.lookupMethod)&&0===i.compressionMethod){if(3*i.colorMapCount+i.count+r!==e.byteLength||i.colorMapCount>256)throw new l("lepcc-decode-error","Bad count");const t=new Uint8Array(e,r,3*i.colorMapCount),n=new Uint8Array(e,r+3*i.colorMapCount,i.count),o=new Uint8Array(3*i.count);for(let e=0;e<i.count;e++){const r=n[e];o[3*e]=t[3*r],o[3*e+1]=t[3*r+1],o[3*e+2]=t[3*r+2]}return o}if(0===i.lookupMethod&&0===i.compressionMethod){if(3*i.count+r!==e.byteLength||0!==i.colorMapCount)throw new l("lepcc-decode-error","Bad count");return new Uint8Array(e,r).slice()}if(i.lookupMethod<=2&&1===i.compressionMethod){if(r+3!==e.byteLength||1!==i.colorMapCount)throw new l("lepcc-decode-error","Bad count");const n=t.getUint8(r),o=t.getUint8(r+1),a=t.getUint8(r+2),s=new Uint8Array(3*i.count);for(let e=0;e<i.count;e++)s[3*e]=n,s[3*e+1]=o,s[3*e+2]=a;return s}throw new l("lepcc-decode-error","Bad method "+i.lookupMethod+","+i.compressionMethod)}const ne=0,oe=4,ie=8,ae=12,se=14,ce=15,le=16;function ue(e){const t=new DataView(e,0);let r=0;const{identifier:n,version:o}=z(e,t,r);if(r+=T,"Intensity "!==n)throw new l("lepcc-decode-error","Bad identifier");if(o>1)throw new l("lepcc-decode-error","Unknown version");const i=(s=r,{sizeLo:(a=t).getUint32(s+ne,O),sizeHi:a.getUint32(s+oe,O),count:a.getUint32(s+ie,O),scaleFactor:a.getUint16(s+ae,O),bitsPerPoint:a.getUint8(s+se),reserved:a.getUint8(s+ce)});var a,s;if(r+=le,i.sizeHi*2**32+i.sizeLo!==e.byteLength)throw new l("lepcc-decode-error","Bad size");const c=new Uint16Array(i.count);if(8===i.bitsPerPoint){if(i.count+r!==e.byteLength)throw new l("lepcc-decode-error","Bad size");const t=new Uint8Array(e,r,i.count);for(let e=0;e<i.count;e++)c[e]=t[e]*i.scaleFactor}else if(16===i.bitsPerPoint){if(2*i.count+r!==e.byteLength)throw new l("lepcc-decode-error","Bad size");const t=new Uint16Array(e,r,i.count);for(let e=0;e<i.count;e++)c[e]=t[e]*i.scaleFactor}else{const t=[];if(H(e,r,t)!==e.byteLength)throw new l("lepcc-decode-error","Bad size");for(let e=0;e<i.count;e++)c[e]=t[e]*i.scaleFactor}return c}const fe=u.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function de(e,t,r){let n="",o=0;for(;o<r;){const i=e[t+o];if(i<128)n+=String.fromCharCode(i),o++;else if(i>=192&&i<224){if(o+1>=r)throw new l("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const a=(31&i)<<6|63&e[t+o+1];n+=String.fromCharCode(a),o+=2}else if(i>=224&&i<240){if(o+2>=r)throw new l("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(15&i)<<12|(63&e[t+o+1])<<6|63&e[t+o+2];n+=String.fromCharCode(a),o+=3}else{if(!(i>=240&&i<248))throw new l("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(o+3>=r)throw new l("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(7&i)<<18|(63&e[t+o+1])<<12|(63&e[t+o+2])<<6|63&e[t+o+3];if(a>=65536){const e=55296+(a-65536>>10),t=56320+(1023&a);n+=String.fromCharCode(e,t)}else n+=String.fromCharCode(a);o+=4}}}return n}function be(e,t){const r={byteOffset:0,byteCount:0,fields:Object.create(null)};let n=0;for(let o=0;o<t.length;o++){const i=t[o],a=i.valueType||i.type,s=me[a];r.fields[i.property]=s(e,n),n+=he[a].BYTES_PER_ELEMENT}return r.byteCount=n,r}function ye(e,t){return new he[t.valueType](e,t.byteOffset,t.count*t.valuesPerElement)}function pe(e,t,r){if(t!==e&&fe.error(`Invalid ${r} buffer size\n expected: ${e}, actual: ${t})`),t<e)throw new l("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}const ge={position:"position",normal:"normal",color:"color",uv0:"uv0",region:"uvRegion"};function we(e,t,r){if("lepcc-rgb"===e.encoding)return re(t);if("lepcc-intensity"===e.encoding)return ue(t);if(null!=e.encoding&&""!==e.encoding)throw new l("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(fe.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(fe.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");const n=function(e,t,r){const n=null!=t.header?be(e,t.header):{byteOffset:0,byteCount:0,fields:{count:r}},o={header:n,byteOffset:n.byteCount,byteCount:0,entries:Object.create(null)};let i=n.byteCount;for(let a=0;a<t.ordering.length;a++){const e=t.ordering[a],r=f(t[e]);if(r.count=n.fields.count,"String"===r.valueType){if(r.byteOffset=i,r.byteCount=n.fields[e+"ByteCount"],"UTF-8"!==r.encoding)throw new l("unsupported-encoding","Unsupported String encoding.",{encoding:r.encoding})}else{if(!ve(r.valueType))throw new l("unsupported-value-type","Unsupported binary valueType",{valueType:r.valueType});{const e=Ue(r.valueType);i+=i%e!=0?e-i%e:0,r.byteOffset=i,r.byteCount=e*r.valuesPerElement*r.count}}i+=r.byteCount,o.entries[e]=r}return o.byteCount=i-o.byteOffset,o}(t,e,r);pe(n.byteOffset+n.byteCount,t.byteLength,"attribute");const o=n.entries.attributeValues||n.entries.objectIds;if(o){if("String"===o.valueType){const e=n.entries.attributeByteCounts,r=ye(t,e),i=function(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(t,o);return function(e,t,r){const n=[];let o,i,a=0;for(i=0;i<e;i+=1){if(o=t[i],o>0){if(n.push(de(r,a,o-1)),0!==r[a+o-1])throw new l("string-array-error","Invalid string array: missing null termination.")}else n.push(null);a+=o}return n}(e.count,r,i)}return ye(t,o)}throw new l("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const he={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},me={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function ve(e){return he.hasOwnProperty(e)}function Ue(e){return ve(e)?he[e].BYTES_PER_ELEMENT:0}function Ce(e,t){if(null==e.encoding||""===e.encoding){const r=function(e,t){const r=be(e,t&&t.header);let n=r.byteCount;const o={isDraco:!1,header:r,byteOffset:r.byteCount,byteCount:0,vertexAttributes:{}},i=r.fields,a=null!=i.vertexCount?i.vertexCount:i.count;for(const f of t.ordering){if(!t.vertexAttributes[f])continue;const e=c(s({},t.vertexAttributes[f]),{byteOffset:n,count:a}),r=ge[f]?ge[f]:"_"+f;o.vertexAttributes[r]=e,n+=Ue(e.valueType)*e.valuesPerElement*a}const l=i.faceCount;if(t.faces&&l){o.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const r=c(s({},t.faces[e]),{byteOffset:n,count:l});o.faces[e]=r,n+=Ue(r.valueType)*r.valuesPerElement*l}}const u=i.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&u){o.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const r=c(s({},t.featureAttributes[e]),{byteOffset:n,count:u});o.featureAttributes[e]=r,n+=("UInt64"===r.valueType?8:Ue(r.valueType))*r.valuesPerElement*u}}return pe(n,e.byteLength,"geometry"),o.byteCount=n-o.byteOffset,o}(t,e);if(b(r.vertexAttributes.position))return;const n=ye(t,r.vertexAttributes.position),o=r.header.fields,i=[o.offsetX,o.offsetY,o.offsetZ],a=[o.scaleX,o.scaleY,o.scaleZ],l=n.length/3,u=new Float64Array(3*l);for(let e=0;e<l;e++)u[3*e]=n[3*e]*a[0]+i[0],u[3*e+1]=n[3*e+1]*a[1]+i[1],u[3*e+2]=n[3*e+2]*a[2]+i[2];return u}if("lepcc-xyz"===e.encoding)return q(t).result}function Ae(e,t,r){return d(e)&&e.attributeInfo.useElevation?function(e,t){const r=new Float64Array(t);for(let n=0;n<t;n++)r[n]=e[3*n+2];return r}(t,r):d(e)?we(e.attributeInfo.storageInfo,e.buffer,r):null}function Ie(e){return null==e||"none"===e?null:"low-four-bit"===e?e=>15&e:"high-four-bit"===e?e=>(240&e)>>4:"absolute-value"===e?e=>Math.abs(e):"modulo-ten"===e?e=>e%10:null}function Oe(e){let t=0;for(const r of e||[])t|=1<<r;return t}class Me{transform(e){const t=this._transform(e),r=[t.points.buffer,t.rgb.buffer];d(t.pointIdFilterMap)&&r.push(t.pointIdFilterMap.buffer);for(const n of t.attributes)"buffer"in n.values&&y(n.values.buffer)&&n.values.buffer!==t.rgb.buffer&&r.push(n.values.buffer);return Promise.resolve({result:t,transferList:r})}_transform(e){const t=Ce(e.schema,e.geometryBuffer);let r=t.length/3,n=null;const o=[],i=Ae(e.primaryAttributeData,t,r);d(e.primaryAttributeData)&&i&&o.push({attributeInfo:e.primaryAttributeData.attributeInfo,values:i});const a=Ae(e.modulationAttributeData,t,r);d(e.modulationAttributeData)&&a&&o.push({attributeInfo:e.modulationAttributeData.attributeInfo,values:a});let s=function(e,t,r,n){const{rendererJSON:o,isRGBRenderer:i}=e;let a=null,s=null;if(t&&i)a=t;else if(t&&"pointCloudUniqueValueRenderer"===o.type){s=U.fromJSON(o);const e=s.colorUniqueValueInfos;a=new Uint8Array(3*n);const r=Ie(s.fieldTransformType);for(let o=0;o<n;o++){const n=(r?r(t[o]):t[o])+"";for(let t=0;t<e.length;t++)if(e[t].values.indexOf(n)>=0){a[3*o]=e[t].color.r,a[3*o+1]=e[t].color.g,a[3*o+2]=e[t].color.b;break}}}else if(t&&"pointCloudStretchRenderer"===o.type){s=C.fromJSON(o);const e=s.stops;a=new Uint8Array(3*n);const r=Ie(s.fieldTransformType);for(let o=0;o<n;o++){const n=r?r(t[o]):t[o],i=e.length-1;if(n<e[0].value)a[3*o]=e[0].color.r,a[3*o+1]=e[0].color.g,a[3*o+2]=e[0].color.b;else if(n>=e[i].value)a[3*o]=e[i].color.r,a[3*o+1]=e[i].color.g,a[3*o+2]=e[i].color.b;else for(let t=1;t<e.length;t++)if(n<e[t].value){const r=(n-e[t-1].value)/(e[t].value-e[t-1].value);a[3*o]=e[t].color.r*r+e[t-1].color.r*(1-r),a[3*o+1]=e[t].color.g*r+e[t-1].color.g*(1-r),a[3*o+2]=e[t].color.b*r+e[t-1].color.b*(1-r);break}}}else if(t&&"pointCloudClassBreaksRenderer"===o.type){s=A.fromJSON(o);const e=s.colorClassBreakInfos;a=new Uint8Array(3*n);const r=Ie(s.fieldTransformType);for(let o=0;o<n;o++){const n=r?r(t[o]):t[o];for(let t=0;t<e.length;t++)if(n>=e[t].minValue&&n<=e[t].maxValue){a[3*o]=e[t].color.r,a[3*o+1]=e[t].color.g,a[3*o+2]=e[t].color.b;break}}}else{a=new Uint8Array(3*n);for(let e=0;e<a.length;e++)a[e]=255}if(r&&s&&s.colorModulation){const e=s.colorModulation.minValue,t=s.colorModulation.maxValue,o=.3;for(let i=0;i<n;i++){const n=r[i],s=n>=t?1:n<=e?o:o+(1-o)*(n-e)/(t-e);a[3*i]=s*a[3*i],a[3*i+1]=s*a[3*i+1],a[3*i+2]=s*a[3*i+2]}}return a}(e.rendererInfo,i,a,r);if(e.filterInfo&&e.filterInfo.length>0&&d(e.filterAttributesData)){const i=e.filterAttributesData.map((e=>{const n=Ae(e,t,r),i={attributeInfo:e.attributeInfo,values:n};return o.push(i),i}));n=new Uint32Array(r),r=function(e,t,r,n,o){const i=e.length/3;let a=0;for(let s=0;s<i;s++){let i=!0;for(let e=0;e<n.length&&i;e++){const{filterJSON:t}=n[e],r=o[e].values[s];switch(t.type){case"pointCloudValueFilter":{const e="exclude"===t.mode;-1!==t.values.indexOf(r)===e&&(i=!1);break}case"pointCloudBitfieldFilter":{const e=Oe(t.requiredSetBits),n=Oe(t.requiredClearBits);(r&e)===e&&0==(r&n)||(i=!1);break}case"pointCloudReturnFilter":{const e=15&r,n=r>>>4&15,o=n>1,a=1===e,s=e===n;let c=!1;for(const r of t.includedReturns)if("last"===r&&s||"firstOfMany"===r&&a&&o||"lastOfMany"===r&&s&&o||"single"===r&&!o){c=!0;break}c||(i=!1);break}}}i&&(r[a]=s,e[3*a]=e[3*s],e[3*a+1]=e[3*s+1],e[3*a+2]=e[3*s+2],t[3*a]=t[3*s],t[3*a+1]=t[3*s+1],t[3*a+2]=t[3*s+2],a++)}return a}(t,s,n,e.filterInfo,i)}for(const l of e.userAttributesData){const e=Ae(l,t,r);o.push({attributeInfo:l.attributeInfo,values:e})}3*r<s.length&&(s=new Uint8Array(s.buffer.slice(0,3*r))),this._applyElevationOffsetInPlace(t,r,e.elevationOffset);const c=this._transformCoordinates(t,r,e.obb,p.fromJSON(e.inSR),p.fromJSON(e.outSR));return{obb:e.obb,points:c,rgb:s,attributes:o,pointIdFilterMap:n}}_transformCoordinates(e,t,r,n,o){if(!g(e,n,0,e,o,0,t))throw Error("Can't reproject");const i=m(r.center[0],r.center[1],r.center[2]),a=v(),s=v();h(Fe,r.quaternion);const c=new Float32Array(3*t);for(let l=0;l<t;l++)a[0]=e[3*l]-i[0],a[1]=e[3*l+1]-i[1],a[2]=e[3*l+2]-i[2],w(s,a,Fe),r.halfSize[0]=Math.max(r.halfSize[0],Math.abs(s[0])),r.halfSize[1]=Math.max(r.halfSize[1],Math.abs(s[1])),r.halfSize[2]=Math.max(r.halfSize[2],Math.abs(s[2])),c[3*l]=a[0],c[3*l+1]=a[1],c[3*l+2]=a[2];return c}_applyElevationOffsetInPlace(e,t,r){if(0!==r)for(let n=0;n<t;n++)e[3*n+2]+=r}}const Fe=I();function Be(){return new Me}export default Be;
