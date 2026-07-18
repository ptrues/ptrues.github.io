import{Y as y,B as s,an as S,ap as x,C as b,a1 as C,aq as E}from"./index-CZ7_Bfg9.js";const I=6e4,p=950,P="#ffffff",d=6;function N({scene:h,quality:r}){const o=I,a=new Float32Array(o*3),u=new Float32Array(o),f=new Float32Array(o),n=e=>E(e>>>0)/4294967295;let i=0;for(let e=0;e<o;e+=1){const A=(n(e*3+1)*2-1)*.96;i=e/p;const w=(n(e*3+2)-.5)/p;a[e*3]=A,a[e*3+1]=1-i+w,a[e*3+2]=0,u[e]=Math.log(1+n(e*7+5)*(Math.exp(d)-1))/d,f[e]=.7+.3*n(e*11+3)}const v=Math.max(0,i-2),l=new y;l.setAttribute("position",new s(a,3)),l.setAttribute("aBirth",new s(u,1)),l.setAttribute("aGlow",new s(f,1));const c=new S({uniforms:{uAppear:{value:0},uScroll:{value:0},uOpacity:{value:0},uIntensity:{value:r.low?.62:.5},uSize:{value:r.low?15:22},uPixelRatio:{value:r.pixelRatio||1},uColor:{value:new b(P)}},vertexShader:`
      uniform float uAppear, uScroll, uSize, uPixelRatio, uOpacity;
      attribute float aBirth, aGlow;
      varying float vA;
      void main() {
        float screenY = position.y + uScroll;
        // Each light SWITCHES ON in a single frame when the appear clock passes its cue — an
        // instant pop that reads as a light turning on (owner 2026-07-18), orderless. No fade-in,
        // no synchronized pulse, no wave.
        float appear = step(aBirth, uAppear);
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
    `,transparent:!0,depthTest:!1,depthWrite:!1,blending:x,toneMapped:!1}),t=new C(l,c);t.frustumCulled=!1,t.renderOrder=20,t.visible=!1,h.add(t);const g=document.querySelector("#finale-memorial"),m=document.querySelector("#info-toggle");return{finalePoints:t,finaleMaterial:c,finaleMemorialEl:g,finaleScrollMax:v,infoToggleEl:m}}export{N as buildFinale};
//# sourceMappingURL=finale-C9LV1WQu.js.map
