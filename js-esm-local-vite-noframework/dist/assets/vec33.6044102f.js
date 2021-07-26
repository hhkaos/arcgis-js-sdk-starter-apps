import{n as e}from"./vendor.d9ce5f39.js";function t(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function r(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function n(e,t){return new Float64Array(e,t,16)}const f=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze({__proto__:null,create:t,clone:r,fromValues:function(e,t,r,n,f,o,u,d,c,s,i,a,p,l,y,B){return[e,t,r,n,f,o,u,d,c,s,i,a,p,l,y,B]},createView:n,IDENTITY:f});const o=e.getLogger("esri.views.3d.support.buffer.math");function u(e,t,r){if(e.count!==t.count)return void o.error("source and destination buffers need to have the same number of elements");const n=e.count,f=r[0],u=r[1],d=r[2],c=r[4],s=r[5],i=r[6],a=r[8],p=r[9],l=r[10],y=r[12],B=r[13],m=r[14],S=e.typedBuffer,h=e.typedBufferStride,_=t.typedBuffer,b=t.typedBufferStride;for(let o=0;o<n;o++){const e=o*h,t=o*b,r=_[t],n=_[t+1],v=_[t+2];S[e]=f*r+c*n+a*v+y,S[e+1]=u*r+s*n+p*v+B,S[e+2]=d*r+i*n+l*v+m}}function d(e,t,r){if(e.count!==t.count)return void o.error("source and destination buffers need to have the same number of elements");const n=e.count,f=r[0],u=r[1],d=r[2],c=r[3],s=r[4],i=r[5],a=r[6],p=r[7],l=r[8],y=e.typedBuffer,B=e.typedBufferStride,m=t.typedBuffer,S=t.typedBufferStride;for(let o=0;o<n;o++){const e=o*B,t=o*S,r=m[t],n=m[t+1],h=m[t+2];y[e]=f*r+c*n+a*h,y[e+1]=u*r+s*n+p*h,y[e+2]=d*r+i*n+l*h}}function c(e,t,r){const n=Math.min(e.count,t.count),f=e.typedBuffer,o=e.typedBufferStride,u=t.typedBuffer,d=t.typedBufferStride;for(let c=0;c<n;c++){const e=c*o,t=c*d;f[e]=r*u[t],f[e+1]=r*u[t+1],f[e+2]=r*u[t+2]}}function s(e,t){const r=Math.min(e.count,t.count),n=e.typedBuffer,f=e.typedBufferStride,o=t.typedBuffer,u=t.typedBufferStride;for(let d=0;d<r;d++){const e=d*f,t=d*u,r=o[t],c=o[t+1],s=o[t+2],i=Math.sqrt(r*r+c*c+s*s);if(i>0){const t=1/i;n[e]=t*r,n[e+1]=t*c,n[e+2]=t*s}}}function i(e,t,r){const n=Math.min(e.count,t.count),f=e.typedBuffer,o=e.typedBufferStride,u=t.typedBuffer,d=t.typedBufferStride;for(let c=0;c<n;c++){const e=c*o,t=c*d;f[e]=u[t]>>r,f[e+1]=u[t+1]>>r,f[e+2]=u[t+2]>>r}}function a(e,t,r){const n=e.typedBuffer,f=e.typedBufferStride,o=t.typedBuffer,u=t.typedBufferStride,d=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*f,s=(r&&r.srcIndex?r.srcIndex:0)*u;for(let i=0;i<d;++i)n[c]=o[s],n[c+1]=o[s+1],n[c+2]=o[s+2],c+=f,s+=u}function p(e,t,r,n,f){var o,u;const d=e.typedBuffer,c=e.typedBufferStride,s=null!=(o=null==f?void 0:f.count)?o:e.count;let i=(null!=(u=null==f?void 0:f.dstIndex)?u:0)*c;for(let a=0;a<s;++a)d[i]=t,d[i+1]=r,d[i+2]=n,i+=c}Object.freeze({__proto__:null,transformMat4:u,transformMat3:d,scale:c,normalize:s,shiftRight:i}),Object.freeze({__proto__:null,copy:a,fill:p});export{u as a,f as b,a as c,o as d,t as e,d as f,r as g,p as h,i as n,s as o,c as r,n as t};
