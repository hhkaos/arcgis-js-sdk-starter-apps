import{r as e,cM as d,cv as p}from"./vendor.d9ce5f39.js";async function l(l,t=l.popupTemplate){if(!e(t))return[];const n=await t.getRequiredFields(l.fieldsIndex),{lastEditInfoEnabled:a}=t,{objectIdField:i,typeIdField:s,globalIdField:u,relationships:o}=l;if(n.includes("*"))return["*"];const f=a?await d(l):[],r=p(l.fieldsIndex,[...n,...f]);return s&&r.push(s),r&&i&&l.fieldsIndex.has(i)&&-1===r.indexOf(i)&&r.push(i),r&&u&&l.fieldsIndex.has(u)&&-1===r.indexOf(u)&&r.push(u),o&&o.forEach((e=>{const{keyField:d}=e;r&&d&&l.fieldsIndex.has(d)&&-1===r.indexOf(d)&&r.push(d)})),r}function t(d,p){return d.popupTemplate?d.popupTemplate:e(p)&&p.defaultPopupTemplateEnabled&&e(d.defaultPopupTemplate)?d.defaultPopupTemplate:null}export{t as d,l as t};
