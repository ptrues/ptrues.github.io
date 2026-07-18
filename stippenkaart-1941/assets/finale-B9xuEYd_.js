import{Y as b,B as u,an as x,ap as F,C,a1 as _,aq as B}from"./index-BtA3snkP.js";const E=6e4,v=950,I="#ffffff",r=12/1900,f=1/16;function O({scene:m,quality:i}){const o=E,a=new Float32Array(o*3),p=new Float32Array(o),d=new Float32Array(o),n=e=>B(e>>>0)/4294967295;let s=0;for(let e=0;e<o;e+=1){const y=(n(e*3+1)*2-1)*.96;s=e/v;const S=(n(e*3+2)-.5)/v;a[e*3]=y,a[e*3+1]=1-s+S,a[e*3+2]=0;const c=n(e*7+5);p[e]=.98*(c<r?c/r*f:f+(c-r)/(1-r)*(1-f)),d[e]=.7+.3*n(e*11+3)}const g=Math.max(0,s-2),l=new b;l.setAttribute("position",new u(a,3)),l.setAttribute("aBirth",new u(p,1)),l.setAttribute("aGlow",new u(d,1));const h=new x({uniforms:{uAppear:{value:0},uScroll:{value:0},uOpacity:{value:0},uIntensity:{value:i.low?.62:.5},uSize:{value:i.low?15:22},uPixelRatio:{value:i.pixelRatio||1},uColor:{value:new C(I)}},vertexShader:`
      uniform float uAppear, uScroll, uSize, uPixelRatio, uOpacity;
      attribute float aBirth, aGlow;
      varying float vA;
      void main() {
        float screenY = position.y + uScroll;
        // Each light catches SOFTLY over ~300ms (0.019 of the ~16s clock) when the appear clock
        // passes its cue — a candle catching, not a mechanical switch (owner 2026-07-18,
        // contemplative revision), orderless. No synchronized pulse, no wave.
        float appear = smoothstep(aBirth, aBirth + 0.019, uAppear);
        // Soft entry/exit only at the very screen edges — a clean reveal boundary, not motion.
        float edge = smoothstep(1.12, 0.94, abs(screenY));
        vA = appear * edge * uOpacity * aGlow;
        gl_Position = vec4(position.x, screenY, 0.0, 1.0);
        gl_PointSize = uSize * uPixelRatio * step(0.002, vA);
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uIntensity;
      varying float vA;
      void main() {
        // The stippenkaart soul look, in white: a bright core with a soft halo (identical falloff).
        vec2 p = gl_PointCoord - 0.5;
        float d = length(p);
        if (d > 0.5 || vA <= 0.001) discard;
        float core = smoothstep(0.19, 0.0, d);
        float halo = smoothstep(0.5, 0.04, d) * 0.34;
        float alpha = (core + halo) * vA * uIntensity;
        gl_FragColor = vec4(uColor * (0.75 + core * 0.42), alpha);
      }
    `,transparent:!0,depthTest:!1,depthWrite:!1,blending:F,toneMapped:!1}),t=new _(l,h);t.frustumCulled=!1,t.renderOrder=20,t.visible=!1,m.add(t);const A=document.querySelector("#finale-memorial"),w=document.querySelector("#info-toggle");return{finalePoints:t,finaleMaterial:h,finaleMemorialEl:A,finaleScrollMax:g,infoToggleEl:w}}export{O as buildFinale};
//# sourceMappingURL=finale-B9xuEYd_.js.map
