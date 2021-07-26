var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o;import{n as a}from"./deduplicate.3ee84454.js";import{y as c,u as l,i as f,c as u,l as d,p as g,o as p,m,T as h,h as w,a as y,b as v,d as A,A as b,O as I,x as S,g as V,w as L,E as N,L as E,B as O,F as j,I as x,U as P,j as W,V as D,M as U,S as B,k as F,q as k,v as M,z as T,C as z,D as C,G as H,H as R}from"./BufferView.77b40d9f.js";import{dO as $,dP as q,a1 as G,b$ as Q,dQ as X,dR as Y,dS as Z,a2 as _,dT as J,dU as K,dV as ee,dW as te,dX as ne,dY as oe,dZ as re}from"./vendor.d9ce5f39.js";import{A as se}from"./InterleavedLayout.72296a36.js";import"./vec4.d028c393.js";import"./types.8df037c8.js";function ie(e,t,n){const o=t/3,r=new Uint32Array(n+1),s=new Uint32Array(n+1),i=(e,t)=>{e<t?r[e+1]++:s[t+1]++};for(let w=0;w<o;w++){const t=e[3*w],n=e[3*w+1],o=e[3*w+2];i(t,n),i(n,o),i(o,t)}let a=0,c=0;for(let w=0;w<n;w++){const e=r[w+1],t=s[w+1];r[w+1]=a,s[w+1]=c,a+=e,c+=t}const l=new Uint32Array(6*o),f=r[n],u=(e,t,n)=>{if(e<t){const o=r[e+1]++;l[2*o]=t,l[2*o+1]=n}else{const o=s[t+1]++;l[2*f+2*o]=e,l[2*f+2*o+1]=n}};for(let w=0;w<o;w++){const t=e[3*w],n=e[3*w+1],o=e[3*w+2];u(t,n,w),u(n,o,w),u(o,t,w)}const d=(e,t)=>{const n=2*e,o=t-e;for(let r=1;r<o;r++){const e=l[n+2*r],t=l[n+2*r+1];let o=r-1;for(;o>=0&&l[n+2*o]>e;o--)l[n+2*o+2]=l[n+2*o],l[n+2*o+3]=l[n+2*o+1];l[n+2*o+2]=e,l[n+2*o+3]=t}};for(let w=0;w<n;w++)d(r[w],r[w+1]),d(f+s[w],f+s[w+1]);const g=new Int32Array(3*o),p=(t,n)=>t===e[3*n]?0:t===e[3*n+1]?1:t===e[3*n+2]?2:-1,m=(e,t)=>{const n=p(e,t);g[3*t+n]=-1},h=(e,t,n,o)=>{const r=p(e,t);g[3*t+r]=o;const s=p(n,o);g[3*o+s]=t};for(let w=0;w<n;w++){let e=r[w];const t=r[w+1];let n=s[w];const o=s[w+1];for(;e<t&&n<o;){const t=l[2*e],o=l[2*f+2*n];t===o?(h(w,l[2*e+1],o,l[2*f+2*n+1]),e++,n++):t<o?(m(w,l[2*e+1]),e++):(m(o,l[2*f+2*n+1]),n++)}for(;e<t;)m(w,l[2*e+1]),e++;for(;n<o;)m(l[2*f+2*n],l[2*f+2*n+1]),n++}return g}function ae(e,t){return t.push(e.buffer),{buffer:e.buffer,layout:ce(e.layout)}}function ce(e){const a=new Array;return e.fields.forEach(((e,c)=>{const l=(f=((e,t)=>{for(var n in t||(t={}))r.call(t,n)&&i(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&i(e,n,t[n]);return e})({},e),u={constructor:fe(e.constructor)},t(f,n(u)));var f,u;a.push([c,l])})),{stride:e.stride,fields:a,fieldNames:e.fieldNames}}const le=[c,l,f,u,d,g,p,m,h,w,y,v,A,b,I,S,V,L,N,E,O,j,x,P,W,D,U,B,F,k,M,T,z,C,H,R];function fe(e){return`${e.ElementType}_${e.ElementCount}`}const ue=new Map;function de(e,t=0){const n=e.stride;return e.fieldNames.filter((t=>{const n=e.fields.get(t).optional;return!(n&&n.glPadding)})).map((o=>{const r=e.fields.get(o),s=r.constructor.ElementCount,i=function(e){const t=ge[e];if(t)return t;throw new Error("BufferType not supported in WebGL")}(r.constructor.ElementType),a=r.offset,c=!(!r.optional||!r.optional.glNormalized);return{name:o,stride:n,count:s,type:i,offset:a,normalized:c,divisor:t}}))}le.forEach((e=>ue.set(fe(e),e)));const ge={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126},pe=se().vec3f("position").u16("componentIndex").u16("u16padding");de(se().vec2u8("sideness"));const me=se().vec3f("position0").vec3f("position1").u16("componentIndex").u8("variantOffset",{glNormalized:!0}).u8("variantStroke").u8("variantExtension",{glNormalized:!0}).u8("u8padding",{glPadding:!0}).u16("u16padding",{glPadding:!0}),he=me.clone().vec3f("normal"),we=me.clone().vec3f("normalA").vec3f("normalB");class ye{updateSettings(e){this.settings=e,this.edgeHashFunction=e.reducedPrecision?Se:Ie}write(e,t,n){const o=this.edgeHashFunction(n);Oe.seed=o;const r=Oe.getIntRange(0,255),s=Oe.getIntRange(0,this.settings.variants-1),i=Oe.getFloat(),a=255*(.5*function(e,t){const n=e<0?-1:1;return Math.abs(e)**t*n}(-(1-Math.min(i/.7,1))+Math.max(0,i-.7)/(1-.7),1.2)+.5);e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1),e.componentIndex.set(t,n.componentIndex),e.variantOffset.set(t,r),e.variantStroke.set(t,s),e.variantExtension.set(t,a)}trim(e,t){return e.slice(0,t)}}const ve=new Float32Array(6),Ae=new Uint32Array(ve.buffer),be=new Uint32Array(1);function Ie(e){const t=ve;t[0]=e.position0[0],t[1]=e.position0[1],t[2]=e.position0[2],t[3]=e.position1[0],t[4]=e.position1[1],t[5]=e.position1[2],be[0]=5381;for(let n=0;n<Ae.length;n++)be[0]=31*be[0]+Ae[n];return be[0]}function Se(e){const t=ve;t[0]=Ve(e.position0[0]),t[1]=Ve(e.position0[1]),t[2]=Ve(e.position0[2]),t[3]=Ve(e.position1[0]),t[4]=Ve(e.position1[1]),t[5]=Ve(e.position1[2]),be[0]=5381;for(let n=0;n<Ae.length;n++)be[0]=31*be[0]+Ae[n];return be[0]}function Ve(e){return Math.round(1e4*e)/1e4}class Le{constructor(){this.commonWriter=new ye}updateSettings(e){this.commonWriter.updateSettings(e)}allocate(e){return he.createBuffer(e)}write(e,t,n){this.commonWriter.write(e,t,n),$(Ee,n.faceNormal0,n.faceNormal1),q(Ee,Ee),e.normal.setVec(t,Ee)}trim(e,t){return this.commonWriter.trim(e,t)}}Le.Layout=he,Le.glLayout=de(he,1);class Ne{constructor(){this.commonWriter=new ye}updateSettings(e){this.commonWriter.updateSettings(e)}allocate(e){return we.createBuffer(e)}write(e,t,n){this.commonWriter.write(e,t,n),e.normalA.setVec(t,n.faceNormal0),e.normalB.setVec(t,n.faceNormal1)}trim(e,t){return this.commonWriter.trim(e,t)}}Ne.Layout=we,Ne.glLayout=de(we,1);const Ee=G(),Oe=new Q,je=-1;function xe(e,t,n,o=Fe){const r=e.vertices.position,s=e.vertices.componentIndex,i=X(o.anglePlanar),a=X(o.angleSignificantEdge),c=Math.cos(a),l=Math.cos(i),f=Ue.edge,u=f.position0,d=f.position1,g=f.faceNormal0,p=f.faceNormal1,m=function(e){const t=e.faces.length/3,n=e.vertices.position,o=e.faces,r=Be.v0,s=Be.v1,i=Be.v2,a=new Float32Array(3*t);for(let c=0;c<t;c++){const e=o[3*c+0],t=o[3*c+1],l=o[3*c+2];n.getVec(e,r),n.getVec(t,s),n.getVec(l,i),oe(s,s,r),oe(i,i,r),ee(r,s,i),q(r,r),a[3*c+0]=r[0],a[3*c+1]=r[1],a[3*c+2]=r[2]}return a}(e),h=function(e){const t=e.faces.length/3,n=e.faces,o=e.neighbors;let r=0;for(let a=0;a<t;a++){const e=o[3*a+0],t=o[3*a+1],s=o[3*a+2],i=n[3*a+0],c=n[3*a+1],l=n[3*a+2];r+=e===je||i<c?1:0,r+=t===je||c<l?1:0,r+=s===je||l<i?1:0}const s=new Int32Array(4*r);let i=0;for(let a=0;a<t;a++){const e=o[3*a+0],t=o[3*a+1],r=o[3*a+2],c=n[3*a+0],l=n[3*a+1],f=n[3*a+2];(e===je||c<l)&&(s[i++]=c,s[i++]=l,s[i++]=a,s[i++]=e),(t===je||l<f)&&(s[i++]=l,s[i++]=f,s[i++]=a,s[i++]=t),(r===je||f<c)&&(s[i++]=f,s[i++]=c,s[i++]=a,s[i++]=r)}return s}(e),w=h.length/4,y=t.allocate(w);let v=0;const A=w,b=n.allocate(A);let I=0,S=0,V=0;const L=Y(0,w),N=new Float32Array(w);Z(N,((e,t,n)=>{r.getVec(h[4*t+0],u),r.getVec(h[4*t+1],d),n[t]=re(u,d)})),L.sort(((e,t)=>N[t]-N[e]));const E=new Array,O=new Array;for(let P=0;P<w;P++){const e=L[P],o=N[e],a=h[4*e+0],w=h[4*e+1],A=h[4*e+2],j=h[4*e+3],x=j===je;if(r.getVec(a,u),r.getVec(w,d),x)_(g,m[3*A+0],m[3*A+1],m[3*A+2]),J(p,g),f.componentIndex=s.get(a),f.cosAngle=K(g,p);else{if(_(g,m[3*A+0],m[3*A+1],m[3*A+2]),_(p,m[3*j+0],m[3*j+1],m[3*j+2]),f.componentIndex=s.get(a),f.cosAngle=K(g,p),We(f,l))continue;f.cosAngle<-.9999&&J(p,g)}S+=o,V++,x||Pe(f,c)?(t.write(y,v++,f),E.push(o)):De(f,i)&&(n.write(b,I++,f),O.push(o))}const j=new Float32Array(E.reverse()),x=new Float32Array(O.reverse());return{regular:{instancesData:t.trim(y,v),lodInfo:{lengths:j}},silhouette:{instancesData:n.trim(b,I),lodInfo:{lengths:x}},averageEdgeLength:S/V}}function Pe(e,t){return e.cosAngle<t}function We(e,t){return e.cosAngle>t}function De(e,t){const n=te(e.cosAngle),o=Ue.fwd,r=Ue.ortho;return ne(o,e.position1,e.position0),n*(K(ee(r,e.faceNormal0,e.faceNormal1),o)>0?-1:1)>t}const Ue={edge:{position0:G(),position1:G(),faceNormal0:G(),faceNormal1:G(),componentIndex:0,cosAngle:0},ortho:G(),fwd:G()},Be={v0:G(),v1:G(),v2:G()},Fe={anglePlanar:4,angleSignificantEdge:35};async function ke(e){const t=(r=e,{data:pe.createView(r.dataBuffer),indices:"Uint32Array"===r.indicesType?new Uint32Array(r.indicesBuffer):"Uint16Array"===r.indicesType?new Uint16Array(r.indicesBuffer):void 0,indicesLength:r.indicesLength,writerSettings:r.writerSettings,skipDeduplicate:r.skipDeduplicate}),n=Me(t),o=[t.data.buffer];var r;return{result:Te(n,o),transferList:o}}function Me(e){const t=function(e,t,n,o){if(t)return{faces:n,facesLength:o,neighbors:ie(n,o,e.count),vertices:e};const r=a(e.buffer,e.stride/4,{originalIndices:n,originalIndicesLength:o}),s=ie(r.indices,o,r.uniqueCount);return{faces:r.indices,facesLength:r.indices.length,neighbors:s,vertices:pe.createView(r.buffer)}}(e.data,e.skipDeduplicate,e.indices,e.indicesLength);return ze.updateSettings(e.writerSettings),Ce.updateSettings(e.writerSettings),xe(t,ze,Ce)}function Te(e,t){return t.push(e.regular.lodInfo.lengths.buffer),t.push(e.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:ae(e.regular.instancesData,t),lodInfo:{lengths:e.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:ae(e.silhouette.instancesData,t),lodInfo:{lengths:e.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:e.averageEdgeLength}}const ze=new Le,Ce=new Ne;export{Me as work,ke as wrappedWork};
