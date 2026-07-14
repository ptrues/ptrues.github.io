import{T as G,N as S,R as V,L as C,e as F,V as i,an as B,f as L,C as U,a as P,h as j,b as s}from"./index-BkFdMciF.js";async function A({scene:v,renderer:D,worldW:n,worldH:r,wipeDirection:d}){const[e,h]=await Promise.all([new G().loadAsync("./data/basemap/mobile-demolished-footprints.png"),fetch("./data/basemap/mobile-footprints.json").then(c=>c.json())]);e.colorSpace=S,e.format=V,e.internalFormat="R8",e.minFilter=C,e.magFilter=F,e.generateMipmaps=!0,e.anisotropy=Math.min(D.capabilities.getMaxAnisotropy(),8);const t=new i(d.x*n,-d.y*r).normalize(),[f,g,x,M]=h.ghostUvBounds,[l,u,m,p]=h.demolishedUvRect,y=[t.dot(new i(f,g)),t.dot(new i(f,M)),t.dot(new i(x,g)),t.dot(new i(x,M))],a=new B({uniforms:{uMap:{value:e},uBasemapOpacity:{value:0},uDemolishedOpacity:{value:0},uWarmth:{value:0},uDissolve:{value:0},uGhostCool:{value:new U("#46515b")},uGhostSepia:{value:new U(.64,.47,.29)},uWipeDirection:{value:t},uWipeRange:{value:new i(Math.min(...y),Math.max(...y))},uUvRect:{value:new L(l,u,m,p)}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform sampler2D uMap;
      uniform float uBasemapOpacity;
      uniform float uDemolishedOpacity;
      uniform float uWarmth;
      uniform float uDissolve;
      uniform vec3 uGhostCool;
      uniform vec3 uGhostSepia;
      uniform vec2 uWipeDirection;
      uniform vec2 uWipeRange;
      uniform vec4 uUvRect;
      varying vec2 vUv;
      void main() {
        float mask = texture2D(uMap, vUv).r;
        if (mask < 0.01) discard;
        vec2 globalUv = mix(uUvRect.xy, uUvRect.zw, vUv);
        float wipePosition = (dot(globalUv, uWipeDirection) - uWipeRange.x) / max(0.0001, uWipeRange.y - uWipeRange.x);
        // Match the original demolition logic: a deterministic, smooth directional
        // front. No procedural grain or stochastic creative treatment is applied.
        float intact = uDissolve <= 0.001
          ? 1.0
          : smoothstep(uDissolve - 0.05, uDissolve + 0.05, wipePosition);
        // Authored completion is exact: the selected footprints leave no residual
        // antialiased edge pixels at the end of the wipe.
        if (uDissolve >= 0.999) discard;
        vec3 color = mix(uGhostCool, uGhostSepia, uWarmth * uDemolishedOpacity);
        gl_FragColor = vec4(color, mask * intact * uBasemapOpacity * (190.0 / 255.0));
      }
    `,transparent:!0,depthWrite:!1,depthTest:!1,toneMapped:!1}),w=(m-l)*n,R=(p-u)*r,o=new P(new j(w,R),a);return o.rotation.x=-Math.PI/2,o.position.set(((l+m)*.5-.5)*n,-.02,(.5-(u+p)*.5)*r),o.renderOrder=2,v.add(o),{update({basemapOpacity:c=0,demolishedOpacity:W=0,demolishedWarmth:b=0,demolishedDissolve:O=0}){a.uniforms.uBasemapOpacity.value=s.clamp(c,0,1),a.uniforms.uDemolishedOpacity.value=s.clamp(W,0,1),a.uniforms.uWarmth.value=s.clamp(b,0,1),a.uniforms.uDissolve.value=s.clamp(O,0,1),o.visible=a.uniforms.uBasemapOpacity.value>.001},dispose(){v.remove(o),o.geometry.dispose(),a.dispose(),e.dispose()}}}export{A as createMobileGhostLayer};
//# sourceMappingURL=mobile_footprints-BthR-_cv.js.map
