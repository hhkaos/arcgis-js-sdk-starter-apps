import"./VertexArrayObject.7996ec24.js";import"./vendor.d9ce5f39.js";import{r as e}from"./Texture.dc80c2a5.js";import{r as t}from"./WGLContainer.4311c483.js";import"./definitions.8ca8ae21.js";import"./Utils.da6d3650.js";import"./ShaderCompiler.f286663b.js";import"./config.042ea55e.js";import"./GeometryUtils.c1792d3b.js";import"./MaterialKey.57c8719e.js";import"./Container.bf5ca5d5.js";import"./mat4f32.9c1247c6.js";import"./earcut.b5c0cad1.js";class r{constructor(){this._size=[0,0],this._programDesc={vsPath:"post-processing/pp",fsPath:"post-processing/filterEffect",attributes:new Map([["a_position",0]])}}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)}draw(e,t,r){const{width:s,height:i}=t;this._createOrResizeResources(e,s,i);const{context:a,painter:o}=e,{materialManager:n}=o,c=this._programDesc,p=this._quad,d=r.colorMatrix;p.bind();const l=this._layerFBOTexture;a.bindFramebuffer(t),t.copyToTexture(0,0,s,i,0,0,l),a.setBlendingEnabled(!1),a.setStencilTestEnabled(!1);const m=n.getProgram(e,c);a.useProgram(m),a.bindTexture(l,2),m.setUniformMatrix4fv("u_coefficients",d),m.setUniform1i("u_colorTexture",2),p.draw(),a.setBlendingEnabled(!0),a.setBlendFunction(1,771),a.setStencilTestEnabled(!0),p.unbind()}_createOrResizeResources(r,s,i){const{context:a}=r;this._layerFBOTexture&&this._size[0]===s&&this._size[1]===i||(this._size[0]=s,this._size[1]=i,this._layerFBOTexture?this._layerFBOTexture.resize(s,i):this._layerFBOTexture=new e(a,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:s,height:i}),this._quad||(this._quad=new t(a,[-1,-1,1,-1,-1,1,1,1])))}}export{r as Colorize};