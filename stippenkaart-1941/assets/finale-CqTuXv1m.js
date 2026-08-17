import{b as N,Y as R,B as r,an as B,ap as P,C as O,a1 as Y,aq as G}from"./index-DvQolJgf.js";const z=6e4,A=950,U="#ffffff",h=.05,k=2.2,F=.011,q=d=>.5-Math.sin(Math.asin(1-2*d)/3);function $({scene:d,quality:p}){const t=z,o=new Float32Array(t*3),a=new Float32Array(t),s=new Float32Array(t),w=new Float32Array(t),m=new Float32Array(t),i=e=>G(e>>>0)/4294967295;let v=0;for(let e=0;e<t;e+=1){const L=(i(e*3+1)*2-1)*.96;v=e/A;const E=(i(e*3+2)-.5)/A;o[e*3]=L,o[e*3+1]=1-v+E,o[e*3+2]=0,a[e]=(1-h)*i(e*7+5)**(1/k),s[e]=(1-h)*q(i(e*13+7)),w[e]=.7+.3*i(e*11+3);const I=i(e*17+11)*2-1;m[e]=Math.sign(I)*Math.abs(I)**2}const y=Math.min(t,2*A);let c=1/0,f=0;for(let e=0;e<y;e+=1)a[e]<c&&(c=a[e],f=e);o[f*3]=0,o[f*3+1]=0,m[f]=0;const M=(1-F)/(1-c);for(let e=0;e<t;e+=1)a[e]=Math.max(0,F+(a[e]-c)*M);const b=[];for(let e=Math.max(0,t-y);e<t;e+=1)b.push(e);let u=1/0,g=-1/0;for(const e of b)u=Math.min(u,s[e]),g=Math.max(g,s[e]);const x=1-h,D=Math.max(1e-6,g-u);for(let e=0;e<t;e+=1)s[e]=N.clamp((s[e]-u)/D*x,0,x);const C=Math.max(0,v-2),n=new R;n.setAttribute("position",new r(o,3)),n.setAttribute("aBirth",new r(a,1)),n.setAttribute("aDeath",new r(s,1)),n.setAttribute("aGlow",new r(w,1)),n.setAttribute("aDepth",new r(m,1));const S=new B({uniforms:{uAppear:{value:0},uScroll:{value:0},uClose:{value:0},uIntensity:{value:p.low?.62:.5},uSize:{value:p.low?15:22},uPixelRatio:{value:p.pixelRatio||1},uColor:{value:new O(U)}},vertexShader:`
      uniform float uAppear, uScroll, uSize, uPixelRatio, uClose;
      attribute float aBirth, aDeath, aGlow, aDepth;
      varying float vA, vDefocus;
      void main() {
        float screenY = position.y + uScroll;
        // A light catches SOFTLY as the fill passes its threshold — a candle catching, not a
        // switch. Orderless: no synchronised pulse, no wave. Once caught it stays.
        float appear = smoothstep(aBirth, aBirth + ${h.toFixed(3)}, uAppear);
        // And it goes out the same way, on its own, when the close passes ITS threshold. The field
        // is never dimmed as a whole — every light leaves individually, as it arrived.
        float gone = smoothstep(aDeath, aDeath + ${h.toFixed(3)}, uClose);
        // Soft entry/exit at the very screen edges — a clean reveal boundary, not motion.
        float edge = smoothstep(1.12, 0.94, abs(screenY));
        vA = appear * (1.0 - gone) * edge * aGlow;
        // Static, shallow optical depth. Most lights remain close to the focal plane; only the
        // outer portion of the deterministic distribution receives visible softness.
        vDefocus = 0.65 * smoothstep(0.35, 1.0, abs(aDepth));
        gl_Position = vec4(position.x, screenY, 0.0, 1.0);
        // Defocus never enlarges a light. Additive sprites that grow read as bloom and give the
        // softest lights undue emphasis, so every soul retains the same fixed footprint.
        gl_PointSize = uSize * uPixelRatio * step(0.002, vA);
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uIntensity;
      varying float vA, vDefocus;
      void main() {
        // A bright core with a soft halo — the stippenkaart soul look, in white.
        vec2 p = gl_PointCoord - 0.5;
        float d = length(p);
        if (d > 0.5 || vA <= 0.001) discard;
        float coreRadius = mix(0.19, 0.14, vDefocus);
        float core = smoothstep(coreRadius, 0.0, d) * mix(1.0, 0.55, vDefocus);
        // The halo is unchanged from the original light. Static depth is expressed only by a
        // quieter, softer core — never by a larger or brighter bloom.
        float halo = smoothstep(0.5, 0.04, d) * 0.34;
        float alpha = (core + halo) * vA * uIntensity;
        gl_FragColor = vec4(uColor * (0.75 + core * 0.42), alpha);
      }
    `,transparent:!0,depthTest:!1,depthWrite:!1,blending:P,toneMapped:!1}),l=new Y(n,S);l.frustumCulled=!1,l.renderOrder=20,l.visible=!1,d.add(l);const T=document.querySelector("#finale-memorial"),_=document.querySelector("#info-toggle");return{finalePoints:l,finaleMaterial:S,finaleMemorialEl:T,finaleScrollMax:C,infoToggleEl:_}}export{$ as buildFinale};
//# sourceMappingURL=finale-CqTuXv1m.js.map
