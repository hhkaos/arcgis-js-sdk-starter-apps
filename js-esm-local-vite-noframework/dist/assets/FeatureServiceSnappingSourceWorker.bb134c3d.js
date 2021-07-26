var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(t,s,i)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i,o=(e,t)=>{for(var s in t||(t={}))r.call(t,s)&&a(e,s,t[s]);if(i)for(var s of i(t))n.call(t,s)&&a(e,s,t[s]);return e},l=(e,i)=>t(e,s(i));import{X as u,Y as h,Z as c,U as d,al as p,aj as f,es as g,t as y,et as m,aM as b,n as v,eu as F,aX as S,r as I,ev as w,ew as C,cs as T,bV as P,ex as x,ey as O,bp as j,ez as E,eA as A,eB as z,eC as R,bM as M,eD as B,dq as _,eE as q,eF as k,x as H,eG as N,ai as J,eH as L,eI as Q,aU as V,l as D,cN as G,eJ as U,eK as Z}from"./vendor.d9ce5f39.js";import{e as $,u as X}from"./FeatureStore.8c02db5b.js";import{H as W}from"./QueryEngine.3f4a5e69.js";import"./aaBoundingBox.83e3e0ff.js";import"./PooledRBush.60d20fb8.js";import"./quickselect.c0fda8e0.js";import"./centroid.f7592ee4.js";import"./WhereClause.66c5b421.js";import"./quantizationUtils.9290a852.js";import"./json.df9e51f4.js";import"./QueryEngineCapabilities.54eb86f4.js";import"./utils.85fe30fc.js";import"./spatialQuerySupport.a474d7b9.js";let K=class extends d{constructor(){super(...arguments),this.updating=!1,this.pending=[]}push(e,t){this.pending.push({promise:e,callback:t}),1===this.pending.length&&this.process()}process(){if(!this.pending.length)return void(this.updating=!1);this.updating=!0;const e=this.pending[0];e.promise.then((t=>e.callback(t))).catch((()=>{})).then((()=>{this.pending.shift(),this.process()}))}};u([h()],K.prototype,"updating",void 0),K=u([c("esri.core.AsyncSequence")],K);class Y{constructor(e,t){this.data=e,this.resolution=t,this.state={type:0},this.alive=!0}process(e){switch(this.state.type){case 0:return this.state=this.gotoFetchCount(this.state,e),this.state.task.promise.then(e.resume,e.resume);case 1:break;case 2:return this.state=this.gotoFetchFeatures(this.state,e),this.state.task.promise.then(e.resume,e.resume);case 3:break;case 4:this.state=this.goToDone(this.state,e)}return null}get debugInfo(){return{data:this.data,featureCount:this.featureCount,state:this.stateToString}}get featureCount(){switch(this.state.type){case 0:case 1:return 0;case 2:return this.state.featureCount;case 3:return this.state.previous.featureCount;case 4:return this.state.features.length;case 5:return this.state.previous.features.length}}get stateToString(){switch(this.state.type){case 0:return"created";case 1:return"fetch-count";case 2:return"fetched-count";case 3:return"fetch-features";case 4:return"fetched-features";case 5:return"done"}}gotoFetchCount(e,t){return{type:1,previous:e,task:f((async e=>{const s=await g(t.fetchCount(this,e));1===this.state.type&&(this.state=this.gotoFetchedCount(this.state,s.ok?s.value:1/0))}))}}gotoFetchedCount(e,t){return{type:2,featureCount:t,previous:e}}gotoFetchFeatures(e,t){return{type:3,previous:e,task:f((async s=>{const i=await g(t.fetchFeatures(this,e.featureCount,s));3===this.state.type&&(this.state=this.gotoFetchedFeatures(this.state,i.ok?i.value:[]))}))}}gotoFetchedFeatures(e,t){return{type:4,previous:e,features:t}}goToDone(e,t){return t.finish(this,e.features),{type:5,previous:e}}reset(){const e=this.state;switch(this.state={type:0},e.type){case 0:case 2:case 4:case 5:break;case 1:case 3:e.task.abort()}}intersects(e){return!(!y(e)&&this.data.extent)||(m(e,ee),b(this.data.extent,ee))}}const ee=p(),te=v.getLogger("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher");let se=class extends F{constructor(e){super(e),this.tilesOfInterest=[],this.availability=0,this.pendingTiles=new Map,this.pendingEdits=new K,this.pendingEditsAbortController=S()}get minimumVerticesPerFeature(){var e;switch(null==(e=this.store)?void 0:e.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}set filter(e){const t=this._get("filter"),s=this.filterProperties(e);JSON.stringify(t)!==JSON.stringify(s)&&this._set("filter",s)}set customParameters(e){const t=this._get("customParameters");JSON.stringify(t)!==JSON.stringify(e)&&this._set("customParameters",e)}get configuration(){return{filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}set tileInfo(e){const t=this._get("tileInfo");t!==e&&(I(e)&&I(t)&&JSON.stringify(e)===JSON.stringify(t)||(this._set("tileInfo",e),this.store.tileInfo=e))}set tileSize(e){this._get("tileSize")!==e&&this._set("tileSize",e)}get updating(){return this.updatingHandles.updating||this.pendingEdits.updating}initialize(){this.initializeFetchExtent(),this.updatingHandles.add(this,"configuration",(()=>this.refresh())),this.updatingHandles.add(this,"tilesOfInterest",((e,t)=>{w(e,t,(({id:e},{id:t})=>e===t))||this.process()}),1)}destroy(){this.pendingTiles.forEach((e=>this.deletePendingTile(e))),this.pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this.pendingEditsAbortController.abort(),this.pendingEditsAbortController=null}refresh(){this.store.refresh(),this.pendingTiles.forEach((e=>this.deletePendingTile(e))),this.process()}applyEdits(e){this.pendingEdits.push(e,(async e=>{if(0===e.addedFeatures.length&&0===e.updatedFeatures.length&&0===e.deletedFeatures.length)return;for(const[,s]of this.pendingTiles)s.reset();const t=l(o({},e),{deletedFeatures:e.deletedFeatures.map((({objectId:e,globalId:t})=>e&&-1!==e?e:this.lookupObjectIdByGlobalId(t)))});await this.updatingHandles.addPromise(this.store.processEdits(t,((e,t)=>this.queryFeaturesById(e,t)),this.pendingEditsAbortController.signal)),this.processPendingTiles()}))}initializeFetchExtent(){if(!this.capabilities.query.supportsExtent)return;const e=f((async e=>{try{var t;const s=await C(this.url,new T({where:"1=1",outSpatialReference:this.spatialReference,cacheHint:!!this.capabilities.query.supportsCacheHint||void 0}),{query:this.configuration.customParameters,signal:e});this.store.extent=P.fromJSON(null==(t=s.data)?void 0:t.extent)}catch(s){x(s),te.warn("Failed to fetch data extent",s)}}));this.updatingHandles.addPromise(e.promise.then((()=>this.process()))),this.handles.add(O((()=>e.abort())))}get debugInfo(){return{numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this.pendingTiles.values()).map((e=>e.debugInfo)),storedTiles:this.store.debugInfo}}process(){this.markTilesNotAlive(),this.createPendingTiles(),this.deletePendingTiles(),this.processPendingTiles()}markTilesNotAlive(){for(const[,e]of this.pendingTiles)e.alive=!1}createPendingTiles(){const e=this.collectMissingTilesInfo();if(this.setAvailability(y(e)?1:e.coveredArea/e.fullArea),!y(e))for(const{data:t,resolution:s}of e.missingTiles){const e=this.pendingTiles.get(t.id);e?(e.resolution=s,e.alive=!0):this.createPendingTile(t,s)}}collectMissingTilesInfo(){let e=null;for(let t=this.tilesOfInterest.length-1;t>=0;t--){const s=this.tilesOfInterest[t],i=this.store.process(s,((e,t)=>this.verifyTileComplexity(e,t)));y(e)?e=i:e.prepend(i)}return e}deletePendingTiles(){for(const[,e]of this.pendingTiles)e.alive||this.deletePendingTile(e)}processPendingTiles(){const e={fetchCount:(e,t)=>this.fetchCount(e,t),fetchFeatures:(e,t,s)=>this.fetchFeatures(e,t,s),finish:(e,t)=>this.finishPendingTile(e,t),resume:()=>this.processPendingTiles()};if(this.ensureFetchAllCounts(e))for(const[,t]of this.pendingTiles)this.verifyTileComplexity(this.store.getFeatureCount(t.data),t.resolution)&&this.updatingHandles.addPromise(t.process(e))}verifyTileComplexity(e,t){return this.verifyVertexComplexity(e)&&this.verifyFeatureDensity(e,t)}verifyVertexComplexity(e){return e*this.minimumVerticesPerFeature<ne}verifyFeatureDensity(e,t){if(y(this.tileInfo))return!1;const s=this.tileSize*t;return e*(ae/(s*s))<oe}ensureFetchAllCounts(e){let t=!0;for(const[,s]of this.pendingTiles)s.state.type<2&&this.updatingHandles.addPromise(s.process(e)),s.state.type<=1&&(t=!1);return t}finishPendingTile(e,t){this.store.add(e.data,t),this.deletePendingTile(e),this.updateAvailability()}updateAvailability(){const e=this.collectMissingTilesInfo();this.setAvailability(y(e)?1:e.coveredArea/e.fullArea)}setAvailability(e){this._set("availability",e)}createPendingTile(e,t){const s=new Y(e,t);return this.pendingTiles.set(e.id,s),s}deletePendingTile(e){e.reset(),this.pendingTiles.delete(e.data.id)}async fetchCount(e,t){return this.store.fetchCount(e.data,this.url,this.createCountQuery(e),{query:this.customParameters,timeout:re,signal:t})}async fetchFeatures(e,t,s){let i,r=0,n=0,a=t;for(;;){const o=this.createFeaturesQuery(e),l=this.setPagingParameters(o,r,a),{features:u,exceededTransferLimit:h}=await this.queryFeatures(o,s);if(l&&(r+=j(o.num)),n+=u.length,i=i?i.concat(u):u,a=t-n,!l||!h||a<=0)return i}}filterProperties(e){return y(e)?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:e.where||"1=1",timeExtent:e.timeExtent,gdbVersion:e.gdbVersion}}lookupObjectIdByGlobalId(e){const t=this.globalIdField,s=this.objectIdField;if(y(t))throw new Error("Expected globalIdField to be defined");let i=null;if(this.store.featureStore.forEach((r=>{var n;e===r.attributes[t]&&(i=null!=(n=r.objectId)?n:r.attributes[s])})),y(i))throw new Error(`Expected to find a feature with globalId ${e}`);return i}queryFeaturesById(e,t){const s=this.createFeaturesQuery(null);return s.objectIds=e,this.queryFeatures(s,t)}queryFeatures(e,t){return this.capabilities.query.supportsFormatPBF?this.queryFeaturesPBF(e,t):this.queryFeaturesJSON(e,t)}async queryFeaturesPBF(e,t){const{sourceSpatialReference:s}=this,{data:i}=await E(this.url,e,new A({sourceSpatialReference:s}),{query:this.configuration.customParameters,timeout:re,signal:t});return z(i)}async queryFeaturesJSON(e,t){const{sourceSpatialReference:s}=this,{data:i}=await R(this.url,e,s,{query:this.configuration.customParameters,timeout:re,signal:t});return M(i,this.objectIdField)}createCountQuery(e){const t=this.createBaseQuery(e);return this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0),t}createFeaturesQuery(e){const t=this.createBaseQuery(e);return t.outFields=this.globalIdField?[this.globalIdField,this.objectIdField]:[this.objectIdField],t.returnGeometry=!0,I(e)&&(this.capabilities.query.supportsResultType?t.resultType="tile":this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0)),t}createBaseQuery(e){const t=new T({returnZ:!1,returnM:!1,geometry:I(this.tileInfo)&&I(e)?B(e.data.extent,this.tileInfo.spatialReference):void 0}),s=this.configuration.filter;return I(s)&&(t.where=s.where,t.gdbVersion=s.gdbVersion,t.timeExtent=s.timeExtent),t.outSpatialReference=this.spatialReference,t}setPagingParameters(e,t,s){if(!this.capabilities.query.supportsPagination)return!1;const{supportsMaxRecordCountFactor:i,supportsCacheHint:r,tileMaxRecordCount:n,maxRecordCount:a,supportsResultType:o}=this.capabilities.query,l=i?T.MAX_MAX_RECORD_COUNT_FACTOR:1,u=l*((o||r)&&n?n:a||ie);return e.start=t,i?(e.maxRecordCountFactor=Math.min(l,Math.ceil(s/u)),e.num=Math.min(s,e.maxRecordCountFactor*u)):e.num=Math.min(s,u),!0}};u([h({constructOnly:!0})],se.prototype,"url",void 0),u([h({constructOnly:!0})],se.prototype,"objectIdField",void 0),u([h({constructOnly:!0})],se.prototype,"globalIdField",void 0),u([h({constructOnly:!0})],se.prototype,"capabilities",void 0),u([h({constructOnly:!0})],se.prototype,"sourceSpatialReference",void 0),u([h({constructOnly:!0})],se.prototype,"spatialReference",void 0),u([h({constructOnly:!0})],se.prototype,"store",void 0),u([h({readOnly:!0})],se.prototype,"minimumVerticesPerFeature",null),u([h()],se.prototype,"filter",null),u([h()],se.prototype,"customParameters",null),u([h({readOnly:!0})],se.prototype,"configuration",null),u([h()],se.prototype,"tileInfo",null),u([h()],se.prototype,"tileSize",null),u([h()],se.prototype,"tilesOfInterest",void 0),u([h({readOnly:!0})],se.prototype,"updating",null),u([h({readOnly:!0})],se.prototype,"availability",void 0),se=u([c("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],se);const ie=2e3,re=6e5,ne=1e6,ae=25,oe=1;function le(e,t){return 32+e.length*t}class ue{constructor(){this._store=new Map,this._byteSize=0}set(e,t){this.delete(e),this._store.set(e,t),this._byteSize+=t.byteSize}delete(e){const t=this._store.get(e);return!!this._store.delete(e)&&(this._byteSize-=t.byteSize,!0)}get(e){return this.used(e),this._store.get(e)}has(e){return this.used(e),this._store.has(e)}clear(){this._store.clear()}applyByteSizeLimit(e,t){for(const[s,i]of this._store){if(this._byteSize<=e)break;this.delete(s),t(i)}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}used(e){const t=this._store.get(e);t&&(this._store.delete(e),this._store.set(e,t))}}let he=class extends d{constructor(e){super(e),this.tileInfo=null,this.extent=null,this.maximumByteSize=10485760,this.tileBounds=new $,this.tiles=new ue,this.refCounts=new Map,this.tileFeatureCounts=new Map,this.tmpBoundingRect=p()}add(e,t){const s=[];for(const i of t)0===this.referenceFeature(i.objectId)&&s.push(i);this.addTileStorage(e,new Set(t.map((({objectId:e})=>e))),this.byteSizeOfFeatures(t)),this.featureStore.addMany(s),this.tiles.applyByteSizeLimit(this.maximumByteSize,(e=>this.removeTileStorage(e)))}destroy(){this.clear(),this.tileFeatureCounts.clear()}clear(){this.featureStore.clear(),this.tileBounds.clear(),this.tiles.clear(),this.refCounts.clear()}refresh(){this.clear(),this.tileFeatureCounts.clear()}processEdits(e,t,s){return this.processEditsDelete(e.deletedFeatures.concat(e.updatedFeatures)),this.processEditsRefetch(e.addedFeatures.concat(e.updatedFeatures),t,s)}addTileStorage(e,t,s){this.tiles.set(e.id,new ce(e,t,s)),this.tileBounds.set(e.id,e.extent),this.tileFeatureCounts.set(e.id,t.size)}remove({id:e}){const t=this.tiles.get(e);t&&this.removeTileStorage(t)}removeTileStorage(e){const t=[];for(const i of e.objectIds)1===this.unreferenceFeature(i)&&t.push(i);this.featureStore.removeManyById(t);const s=e.data.id;this.tiles.delete(s),this.tileBounds.delete(s)}processEditsDelete(e){this.featureStore.removeManyById(e);for(const[,t]of this.tiles){for(const s of e)t.objectIds.delete(s);this.tileFeatureCounts.set(t.data.id,t.objectIds.size)}for(const t of e)this.refCounts.delete(t)}async processEditsRefetch(e,t,s){const i=(await t(e,s)).features,{hasZ:r,hasM:n}=this.featureStore;for(const a of i){const e=_(this.tmpBoundingRect,a.geometry,r,n);this.tileBounds.forEachInBounds(e,(e=>{const t=this.tiles.get(e);this.featureStore.add(a),t.objectIds.has(a.objectId)||(t.objectIds.add(a.objectId),this.referenceFeature(a.objectId),this.tileFeatureCounts.set(t.data.id,t.objectIds.size))}))}}process(e,t=(()=>!0)){if(y(this.tileInfo)||!e.extent||I(this.extent)&&!b(m(this.extent,this.tmpBoundingRect),e.extent))return new pe(e);if(this.tiles.has(e.id))return new pe(e);const s=this.createTileTree(e,this.tileInfo);return this.simplify(s,t,null,0,1),this.collectMissingTiles(e,s,this.tileInfo)}get debugInfo(){return Array.from(this.tiles.values()).map((({data:e})=>({data:e,featureCount:this.tileFeatureCounts.get(e.id)||0})))}getFeatureCount(e){const t=this.tileFeatureCounts.get(e.id);return null!=t?t:0}async fetchCount(e,t,s,i){const r=this.tileFeatureCounts.get(e.id);if(null!=r)return r;const n=await q(t,s,i);return this.tileFeatureCounts.set(e.id,n.data.count),n.data.count}createTileTree(e,t){const s=new de(e.level,e.row,e.col);return t.updateTileInfo(s,1),this.tileBounds.forEachInBounds(e.extent,(i=>{const r=this.tiles.get(i).data;this.tilesAreRelated(e,r)&&this.populateChildren(s,r,t,this.tileFeatureCounts.get(r.id)||0)})),s}tilesAreRelated(e,t){if(!e||!t)return!1;if(e.level===t.level)return e.row===t.row&&e.col===t.col;const s=e.level<t.level,i=s?e:t,r=s?t:e,n=1<<r.level-i.level;return Math.floor(r.row/n)===i.row&&Math.floor(r.col/n)===i.col}populateChildren(e,t,s,i){const r=t.level-e.level-1;if(r<0)return void(e.isLeaf=!0);const n=t.row>>r,a=t.col>>r,o=e.row<<1,l=a-(e.col<<1)+(n-o<<1),u=e.children[l];if(I(u))this.populateChildren(u,t,s,i);else{const r=new de(e.level+1,n,a);s.updateTileInfo(r,1),e.children[l]=r,this.populateChildren(r,t,s,i)}}simplify(e,t,s,i,r){const n=r*r;if(e.isLeaf)return t(this.getFeatureCount(e),r)?0:(this.remove(e),I(s)&&(s.children[i]=null),n);const a=r/2,o=a*a;let l=0;for(let u=0;u<e.children.length;u++){const s=e.children[u];l+=I(s)?this.simplify(s,t,e,u,a):o}return 0===l?this.mergeChildren(e):1-l/n<ge&&(this.purge(e),I(s)&&(s.children[i]=null),l=n),l}mergeChildren(e){const t=new Set;let s=0;this.forEachLeaf(e,(e=>{const i=this.tiles.get(e.id);if(i){s+=i.byteSize;for(const e of i.objectIds)t.has(e)||(t.add(e),this.referenceFeature(e));this.remove(e)}})),this.addTileStorage(e,t,s),e.isLeaf=!0,e.children[0]=e.children[1]=e.children[2]=e.children[3]=null,this.tileFeatureCounts.set(e.id,t.size)}forEachLeaf(e,t){for(const s of e.children)y(s)||(s.isLeaf?t(s):this.forEachLeaf(s,t))}purge(e){if(!y(e))if(e.isLeaf)this.remove(e);else for(let t=0;t<e.children.length;t++){const s=e.children[t];this.purge(s),e.children[t]=null}}collectMissingTiles(e,t,s){const i=new fe(s,e,this.extent);return this.collectMissingTilesRecurse(t,i,1),i.info}collectMissingTilesRecurse(e,t,s){if(e.isLeaf)return;if(!e.hasChildren)return void t.addMissing(e.level,e.row,e.col,s);const i=s/2;for(let r=0;r<e.children.length;r++){const s=e.children[r];y(s)?t.addMissing(e.level+1,(e.row<<1)+((2&r)>>1),(e.col<<1)+(1&r),i):this.collectMissingTilesRecurse(s,t,i)}}referenceFeature(e){const t=(this.refCounts.get(e)||0)+1;return this.refCounts.set(e,t),1===t?0:2}unreferenceFeature(e){const t=(this.refCounts.get(e)||0)-1;return 0===t?(this.refCounts.delete(e),1):(t>0&&this.refCounts.set(e,t),2)}byteSizeOfFeatures(e){let t=0;for(const s of e)t+=this.byteSizeOfFeature(s);return t}byteSizeOfFeature(e){return 32+this.byteSizeOfGeometry(e.geometry)+function(e){if(!e)return 0;let t=32;for(const s in e)if(e.hasOwnProperty(s)){const i=e[s];switch(typeof i){case"string":t+=32+i.length;break;case"number":t+=16;break;case"boolean":t+=4}}return t}(e.attributes)}byteSizeOfGeometry(e){if(!e)return 0;const t=le(e.lengths,4);return 32+le(e.coords,8)+t}get test(){return{tiles:Array.from(this.tiles.values()).map((e=>`${e.data.id}:[${Array.from(e.objectIds)}]`)),featureReferences:Array.from(this.refCounts.keys()).map((e=>`${e}:${this.refCounts.get(e)}`))}}};u([h({constructOnly:!0})],he.prototype,"featureStore",void 0),u([h()],he.prototype,"tileInfo",void 0),u([h()],he.prototype,"extent",void 0),u([h()],he.prototype,"maximumByteSize",void 0),he=u([c("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],he);class ce{constructor(e,t,s){this.data=e,this.objectIds=t,this.byteSize=s}}class de{constructor(e,t,s){this.level=e,this.row=t,this.col=s,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null]}get hasChildren(){return!this.isLeaf&&(I(this.children[0])||I(this.children[1])||I(this.children[2])||I(this.children[3]))}}class pe{constructor(e,t=[]){this.missingTiles=t,this.fullArea=0,this.coveredArea=0,this.fullArea=k(e.extent),this.coveredArea=this.fullArea}prepend(e){this.missingTiles=e.missingTiles.concat(this.missingTiles),this.coveredArea+=e.coveredArea,this.fullArea+=e.fullArea}}class fe{constructor(e,t,s){this.tileInfo=e,this.extent=null,this.info=new pe(t),I(s)&&(this.extent=m(s))}addMissing(e,t,s,i){const r={id:null,level:e,row:t,col:s};this.tileInfo.updateTileInfo(r,1),!I(r.extent)||I(this.extent)&&!b(this.extent,r.extent)||(this.info.missingTiles.push({data:r,resolution:i}),this.info.coveredArea-=k(r.extent))}}const ge=.18751;let ye=class extends H.EventedAccessor{constructor(){super(...arguments),this.isInitializing=!0,this.whenSetup=N(),this.handles=new J,this.updatingHandles=new L,this.pendingApplyEdits=new Map}get updating(){return this.featureFetcher.updating||this.isInitializing||this.updatingHandles.updating}destroy(){this.featureFetcher.destroy(),this.queryEngine.destroy(),this.featureStore.clear(),this.handles.destroy()}async setup(e){const{geometryType:t,objectIdField:s,timeInfo:i,fields:r}=e.serviceInfo;return this.featureStore=new X(l(o({},e.serviceInfo),{hasZ:!1,hasM:!1})),this.queryEngine=new W({spatialReference:e.spatialReference,featureStore:this.featureStore,geometryType:t,fields:r,hasZ:!1,hasM:!1,objectIdField:s,timeInfo:i?Q.fromJSON(i):null}),this.featureFetcher=new se({store:new he({featureStore:this.featureStore}),url:e.serviceInfo.url,objectIdField:e.serviceInfo.objectIdField,globalIdField:e.serviceInfo.globalIdField,capabilities:e.serviceInfo.capabilities,spatialReference:V.fromJSON(e.spatialReference),sourceSpatialReference:V.fromJSON(e.serviceInfo.spatialReference)}),this.handles.add([this.featureFetcher.watch("availability",(e=>this.emit("notify-availability",{availability:e})),!0),this.watch("updating",(()=>this.notifyUpdating()))]),this.whenSetup.resolve(),this.isInitializing=!1,this.configure(e.configuration)}async configure(e){return await this.updatingHandles.addPromise(this.whenSetup.promise),this.updateFeatureFetcherConfiguration(e),{result:{}}}async fetchCandidates(e,t){return await this.whenSetup.promise,D(t),{result:await this.queryEngine.executeQueryForSnapping({point:e.point,distance:e.distance,types:e.types,query:I(e.filter)?e.filter:{where:"1=1"}},I(t)?t.signal:null)}}async updateTiles(e,t){return await this.updatingHandles.addPromise(this.whenSetup.promise),D(t),this.featureFetcher.tileSize=e.tileSize,this.featureFetcher.tilesOfInterest=e.tiles,this.featureFetcher.tileInfo=I(e.tileInfo)?G.fromJSON(e.tileInfo):null,{result:{}}}async refresh(e,t){return await this.updatingHandles.addPromise(this.whenSetup.promise),D(t),this.featureFetcher.refresh(),{result:{}}}async whenNotUpdating(e,t){return await this.updatingHandles.addPromise(this.whenSetup.promise),D(t),await U(Z(this,"updating"),t),{result:{}}}async getDebugInfo(e,t){return D(t),{result:this.featureFetcher.debugInfo}}async beginApplyEdits(e,t){this.updatingHandles.addPromise(this.whenSetup.promise),D(t);const s=N();return this.pendingApplyEdits.set(e.id,s),this.featureFetcher.applyEdits(s.promise),this.updatingHandles.addPromise(s.promise),{result:{}}}async endApplyEdits(e,t){const s=this.pendingApplyEdits.get(e.id);return s&&s.resolve(e.edits),D(t),{result:{}}}updateFeatureFetcherConfiguration(e){this.featureFetcher.filter=I(e.filter)?T.fromJSON(e.filter):null,this.featureFetcher.customParameters=e.customParameters}notifyUpdating(){this.emit("notify-updating",{updating:this.updating})}};function me(){return new ye}u([h({readOnly:!0})],ye.prototype,"updating",null),u([h()],ye.prototype,"isInitializing",void 0),ye=u([c("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],ye);export default me;export{ye as FeatureServiceSnappingSourceWorker};
