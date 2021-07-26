var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(t,r,i)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,n=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&o(e,r,t[r]);if(i)for(var r of i(t))a.call(t,r)&&o(e,r,t[r]);return e},l=(e,i)=>t(e,r(i));import{n as h,cp as c,ey as d,fy as p,r as u,l as y,bp as m,fz as v,fA as f,fB as g,fC as _,fD as w,a as b,ex as S,aX as T,L as j,d4 as L,X as x,Y as I,fE as O,fF as E,ft as k,Z as D,fG as P}from"./vendor.d9ce5f39.js";import{s as V}from"./ArcGISCachedService.c66faf0f.js";import"./serviceTileInfoProperty.ed327cea.js";import"./TilemapCache.7e415763.js";const $=h.getLogger("esri.core.workers.WorkerHandle");class C extends class{constructor(e,t,r,i={}){this._mainMethod=t,this._listeners=[],this._promise=c(e,l(n({},i),{schedule:r})).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,i.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>$.error(`Failed to initialize ${e} worker: ${t}`)))}on(e,t){const r={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(r),this._connectListener(r),d((()=>{r.removed=!0,p(this._listeners,r),this._thread&&u(r.threadHandle)&&r.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,r){if(this._thread){const i=this.getTransferList(t,e);return this._thread.invoke(e,t,{transferList:i,signal:r})}return this._promise?this._promise.then((()=>(y(r),this.invokeMethod(e,t,r)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}{constructor(e=null){super("LercWorker","_decode",e,{strategy:"dedicated"}),this.schedule=e,this.ref=0}decode(e,t,r){return e&&0!==e.byteLength?this.invoke({buffer:e,options:t},r):Promise.resolve(null)}getTransferList(e){return[e.buffer]}release(){--this.ref<=0&&(M.forEach(((e,t)=>{e===this&&M.delete(t)})),this.destroy())}}const M=new Map;const A=h.getLogger("esri.layers.ElevationLayer");let N=class extends(V(v(f(g(_(P)))))){constructor(...e){super(...e),this.copyright=null,this.heightModelInfo=null,this.path=null,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=function(e=null){let t=M.get(m(e));return t||(u(e)?(t=new C((t=>e.schedule(t))),M.set(e,t)):(t=new C,M.set(null,t))),++t.ref,t}()}normalizeCtorArgs(e,t){return"string"==typeof e?n({url:e},t):e}destroy(){this._lercDecoder=w(this._lercDecoder)}set minScale(e){this.constructed&&A.warn(`${this.declaredClass}.minScale support has been removed (since 4.5)`)}get minScale(){}set maxScale(e){this.constructed&&A.warn(`${this.declaredClass}.maxScale support has been removed (since 4.5)`)}get maxScale(){}readVersion(e,t){let r=t.currentVersion;return r||(r=9.3),r}load(e){const t=u(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{for(let t=0;t<e.typeKeywords.length;t++)if("elevation 3d layer"===e.typeKeywords[t].toLowerCase())return!0;throw new b("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(S).then((()=>this._fetchImageService(t)))),Promise.resolve(this)}fetchTile(e,t,r,i){const s=u((i=i||{signal:null}).signal)?i.signal:i.signal=T().signal,a={responseType:"array-buffer",signal:s},o={noDataValue:i.noDataValue,returnFileInfo:!0};return this.load().then((()=>this._fetchTileAvailability(e,t,r,i))).then((()=>j(this.getTileUrl(e,t,r),a))).then((e=>this._lercDecoder.decode(e.data,o,s))).then((e=>({values:e.pixelData,width:e.width,height:e.height,maxZError:e.fileInfo.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue})))}getTileUrl(e,t,r){const i=!this.tilemapCache&&this.supportsBlankTile,s=L(l(n({},this.parsedUrl.query),{blankTile:!i&&null}));return`${this.parsedUrl.path}/tile/${e}/${t}/${r}${s?"?"+s:""}`}async queryElevation(e,t){const{ElevationQuery:r}=await import("./ElevationQuery.9a492eac.js");return y(t),(new r).query(this,e,t)}async createElevationSampler(e,t){const{ElevationQuery:r}=await import("./ElevationQuery.9a492eac.js");return y(t),(new r).createSampler(this,e,t)}_fetchTileAvailability(e,t,r,i){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,t,r,i):Promise.resolve("unknown")}async _fetchImageService(e){if(this.sourceJSON)return this.sourceJSON;const t={query:n({f:"json"},this.parsedUrl.query),responseType:"json",signal:e},r=await j(this.parsedUrl.path,t);r.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};x([I({json:{read:{source:"copyrightText"}}})],N.prototype,"copyright",void 0),x([I({readOnly:!0,type:O})],N.prototype,"heightModelInfo",void 0),x([I({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],N.prototype,"path",void 0),x([I({type:["show","hide"]})],N.prototype,"listMode",void 0),x([I({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],N.prototype,"minScale",null),x([I({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],N.prototype,"maxScale",null),x([I({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],N.prototype,"opacity",void 0),x([I({type:["ArcGISTiledElevationServiceLayer"]})],N.prototype,"operationalLayerType",void 0),x([I()],N.prototype,"sourceJSON",void 0),x([I({json:{read:!1},value:"elevation",readOnly:!0})],N.prototype,"type",void 0),x([I(E)],N.prototype,"url",void 0),x([I()],N.prototype,"version",void 0),x([k("version",["currentVersion"])],N.prototype,"readVersion",null),N=x([D("esri.layers.ElevationLayer")],N),N.prototype.fetchTile.__isDefault__=!0;var U=N;export default U;