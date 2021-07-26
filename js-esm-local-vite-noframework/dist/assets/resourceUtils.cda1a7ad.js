import{g9 as e,f1 as t,a,r,t as s,ga as o,L as n}from"./vendor.d9ce5f39.js";async function c(a,r={},s){await a.load(s);const o=e(a.itemUrl,"resources"),{start:n=1,num:c=10,sortOrder:i="asc",sortField:l="created"}=r,u={query:{start:n,num:c,sortOrder:i,sortField:l,token:a.apiKey},signal:t(s,"signal")},p=await a.portal._request(o,u);return{total:p.total,nextStart:p.nextStart,resources:p.resources.map((({created:e,size:t,resource:r})=>({created:new Date(e),size:t,resource:a.resourceFromPath(r)})))}}async function i(s,o,n,c){if(!s.hasPath())throw new a(`portal-item-resource-${o}:invalid-path`,"Resource does not have a valid path");const i=s.portalItem;await i.load(c);const l=e(i.userItemUrl,"add"===o?"addResources":"updateResources"),[u,d]=p(s.path),h=await m(n),f=new FormData;return u&&"."!==u&&f.append("resourcesPrefix",u),f.append("fileName",d),f.append("file",h,d),f.append("f","json"),r(c)&&c.access&&f.append("access",c.access),await i.portal._request(l,{method:"post",body:f,signal:t(c,"signal")}),s}async function l(r,s,o){if(!s.hasPath())throw new a("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await r.load(o);const n=e(r.userItemUrl,"removeResources");await r.portal._request(n,{method:"post",query:{resource:s.path},signal:t(o,"signal")}),s.portalItem=null}async function u(a,r){await a.load(r);const s=e(a.userItemUrl,"removeResources");return a.portal._request(s,{method:"post",query:{deleteAll:!0},signal:t(r,"signal")})}function p(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function d(e){const[t,a]=function(e){const t=o(e);return s(t)?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[r,n]=p(t);return[r,n,a]}async function m(e){return e instanceof Blob?e:(await n(e.url,{responseType:"blob"})).data}function h(t,a){if(!t.hasPath())return null;const[r,,s]=d(t.path);return t.portalItem.resourceFromPath(e(r,a+s))}function f(t,a){if(!t.hasPath())return null;const[r,,s]=d(t.path);return t.portalItem.resourceFromPath(e(r,a+s))}export{i as addOrUpdateResource,m as contentToBlob,c as fetchResources,h as getSiblingOfSameType,f as getSiblingOfSameTypeI,u as removeAllResources,l as removeResource,d as splitPrefixFileNameAndExtension};
