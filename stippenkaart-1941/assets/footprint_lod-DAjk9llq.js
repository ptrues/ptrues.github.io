import{T as A,N as G,d as $,R as T,L as W,e as I,V as s,f as q,C as M,M as K,F as O,a as H,h as J,b as u}from"./index-BtA3snkP.js";import{DEMOLISHED_BUILDING_COLOR as Q,BUILDING_FIELD_COLOR as X}from"./buildings-BF8J7-4O.js";import"./BufferGeometryUtils-BXYIcLRx.js";const L=38,w=32,v=(L+w)*.5;async function eo({scene:x,renderer:e,worldW:h,worldH:g,wipeDirection:F,distanceLod:y=null}){const c=O==="r8",l=!!y,[o,t,C]=await Promise.all([new A().loadAsync(c?"./data/basemap/mobile-footprints-mask.png":"./data/basemap/mobile-footprints.png"),new A().loadAsync("./data/basemap/mobile-demolished-footprints.png"),fetch("./data/basemap/mobile-footprints.json").then(n=>n.json())]);o.colorSpace=c?G:$,c&&(o.format=T,o.internalFormat="R8"),o.minFilter=W,o.magFilter=I,o.generateMipmaps=!0,o.anisotropy=Math.min(e.capabilities.getMaxAnisotropy(),8),t.colorSpace=G,t.format=T,t.internalFormat="R8",t.minFilter=W,t.magFilter=I,t.generateMipmaps=!0,t.anisotropy=Math.min(e.capabilities.getMaxAnisotropy(),8);const r=new s(F.x*h,-F.y*g).normalize(),[b,D,R,U]=C.ghostUvBounds,[E,N,_,P]=C.demolishedUvRect,S=[r.dot(new s(b,D)),r.dot(new s(b,U)),r.dot(new s(R,D)),r.dot(new s(R,U))],a={uBaseMap:{value:o},uBaseCoverageFromRed:{value:c?1:0},uGhostMap:{value:t},uFootprintOpacity:{value:0},uDistanceLodEnabled:{value:l?1:0},uLodCenter:{value:new s},uLodWorldSize:{value:new s(h,g)},uLodNear:{value:y?.nearRadius??8},uLodMid:{value:y?.midpointRadius??11},uBuildingOpacity:{value:0},uDemolishedOpacity:{value:0},uWarmth:{value:0},uDissolve:{value:0},uBuildingColor:{value:new M(X)},uGhostCool:{value:new M(Q)},uGhostSepia:{value:new M(.64,.47,.29)},uWipeDirection:{value:r},uWipeRange:{value:new s(Math.min(...S),Math.max(...S))},uGhostUvRect:{value:new q(E,N,_,P)}},d=new K({map:o,color:"#ffffff",roughness:.92,metalness:0,transparent:!0,opacity:1,depthWrite:!1,depthTest:!1});d.onBeforeCompile=n=>{Object.assign(n.uniforms,a),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
      uniform sampler2D uBaseMap;
      uniform sampler2D uGhostMap;
      uniform float uBaseCoverageFromRed;
      uniform float uFootprintOpacity;
      uniform float uDistanceLodEnabled;
      uniform vec2 uLodCenter;
      uniform vec2 uLodWorldSize;
      uniform float uLodNear;
      uniform float uLodMid;
      uniform float uBuildingOpacity;
      uniform float uDemolishedOpacity;
      uniform float uWarmth;
      uniform float uDissolve;
      uniform vec3 uBuildingColor;
      uniform vec3 uGhostCool;
      uniform vec3 uGhostSepia;
      uniform vec2 uWipeDirection;
      uniform vec2 uWipeRange;
      uniform vec4 uGhostUvRect;`).replace("#include <map_fragment>",`
        vec4 layer = texture2D(uBaseMap, vMapUv);
        vec2 cropUv = (vMapUv - uGhostUvRect.xy) / max(vec2(0.0001), uGhostUvRect.zw - uGhostUvRect.xy);
        bool insideCrop = all(greaterThanEqual(cropUv, vec2(0.0))) && all(lessThanEqual(cropUv, vec2(1.0)));
        float ghostMask = insideCrop ? texture2D(uGhostMap, cropUv).r : 0.0;
        float wipePosition = (dot(vMapUv, uWipeDirection) - uWipeRange.x)
          / max(0.0001, uWipeRange.y - uWipeRange.x);
        float intact = uDissolve <= 0.001
          ? 1.0
          : smoothstep(uDissolve - 0.05, uDissolve + 0.05, wipePosition);
        if (uDissolve >= 0.999) intact = 0.0;
        float baseCoverage = mix(layer.a, layer.r, uBaseCoverageFromRed);
        float baseAlpha = baseCoverage * uBuildingOpacity;
        float ghostAlpha = ghostMask * intact * uDemolishedOpacity * (190.0 / 255.0);
        float combinedAlpha = ghostAlpha + baseAlpha * (1.0 - ghostAlpha);
        vec3 ghostColor = mix(uGhostCool, uGhostSepia, uWarmth);
        vec3 combinedColor = (ghostColor * ghostAlpha + uBuildingColor * baseAlpha * (1.0 - ghostAlpha))
          / max(combinedAlpha, 0.0001);
        vec2 footprintWorld = vec2(
          (vMapUv.x - 0.5) * uLodWorldSize.x,
          (0.5 - vMapUv.y) * uLodWorldSize.y
        );
        float distanceFootprintOpacity = smoothstep(
          uLodNear,
          uLodMid,
          distance(footprintWorld, uLodCenter)
        );
        float effectiveFootprintOpacity = mix(
          uFootprintOpacity,
          max(uFootprintOpacity, distanceFootprintOpacity),
          uDistanceLodEnabled
        );
        diffuseColor = vec4(combinedColor, combinedAlpha * effectiveFootprintOpacity);
        if (diffuseColor.a < 0.001) discard;
      `)},d.customProgramCacheKey=()=>`high-tier-footprint-lod-standard-v3-${O}-${l?"distance":"altitude"}`;const i=new H(new J(h,g),d);return i.name="high-tier-footprint-lod",i.rotation.x=-Math.PI/2,i.position.y=-.04,i.renderOrder=2,i.visible=!1,x.add(i),e.domElement.dataset.footprintMaskFormat=O,{update({cameraHeight:n=null,lodCenter:p=null,buildingOpacity:V=0,demolishedOpacity:z=0,demolishedWarmth:j=0,demolishedDissolve:k=0}){const f=n??L,B=f>=v?1-u.smoothstep(f,v,L):1,m=f<=v?u.smoothstep(f,w,v):1;return a.uFootprintOpacity.value=m,l&&p&&a.uLodCenter.value.copy(p),a.uBuildingOpacity.value=u.clamp(V,0,1),a.uDemolishedOpacity.value=u.clamp(z,0,1),a.uWarmth.value=u.clamp(j,0,1),a.uDissolve.value=u.clamp(k,0,1),i.visible=(l||m>.001)&&(a.uBuildingOpacity.value>.001||a.uDemolishedOpacity.value>.001),e.domElement.dataset.footprintLodActive=String(l||m>.001),e.domElement.dataset.footprintLodCameraHeight=n?.toFixed(3)??"",e.domElement.dataset.footprintLodOpacity=m.toFixed(3),e.domElement.dataset.footprintLodBuildingOpacity=B.toFixed(3),e.domElement.dataset.footprintLodDistanceMode=String(l),e.domElement.dataset.footprintLodCenter=p?`${p.x.toFixed(3)},${p.y.toFixed(3)}`:"",{footprintOpacity:m,buildingOpacity:B}},dispose(){x.remove(i),i.geometry.dispose(),d.dispose(),o.dispose(),t.dispose()}}}export{eo as createFootprintLodLayer};
//# sourceMappingURL=footprint_lod-DAjk9llq.js.map
