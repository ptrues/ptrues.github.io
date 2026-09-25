import{aq as C,ar as P,Y as x,B as r,an as B,ap as E,C as M,as as T,at as _,a1 as R,au as I,av as O,aw as k,ax as z,ay as A,az as G}from"./index-D2w7tmtd.js";const L="#ffffff",N=1900;function D({scene:y,quality:c}){const a=I,s=t=>O(t>>>0)/4294967295,o=2048,h=new Float32Array(o+1);let f=0;for(let t=0;t<=o;t+=1){const e=t/o*A;f=Math.max(f,Math.min(1,C(e)/P(e))),h[t]=t===o?1:f}const F=t=>{let e=0,n=o;for(;e<n;){const d=e+n>>1;h[d]>=t?n=d:e=d+1}return e/o*A},u=new Float32Array(a*3),p=new Float32Array(a),m=new Float32Array(a),v=new Float32Array(a),w=new Float32Array(a);for(let t=0;t<a;t+=1){const e=t===0?1:Math.log(1+s(t*3+2)*(k-1))/z;u[t*3]=t===0?0:(s(t*3+1)*2-1)*.96,u[t*3+1]=1-e,u[t*3+2]=0,p[t]=t===0?-2:F(s(t*7+5)),m[t]=.7+.3*s(t*11+3);const n=Math.min(1,N/(2*G(e)));v[t]=Math.max(.45,Math.sqrt(n)),w[t]=Math.pow(n,.3)}const i=new x;i.setAttribute("position",new r(u,3)),i.setAttribute("aBirth",new r(p,1)),i.setAttribute("aGlow",new r(m,1)),i.setAttribute("aScale",new r(v,1)),i.setAttribute("aBright",new r(w,1));const g=new B({uniforms:{uP:{value:0},uWalk:{value:0},uFade:{value:0},uIntensity:{value:c.low?.62:.5},uSize:{value:c.low?15:22},uPixelRatio:{value:c.pixelRatio||1},uColor:{value:new M(L)}},vertexShader:`
      uniform float uP, uWalk, uFade, uSize, uPixelRatio;
      attribute float aBirth, aGlow, aScale, aBright;
      varying float vA;
      void main() {
        float appear = aBirth < -1.5 ? smoothstep(0.0, ${T.toFixed(3)}, uP)
                     : smoothstep(aBirth, aBirth + ${_.toFixed(3)}, uP);
        // One shared translation — every light moves identically (no zoom, no parallax).
        vec2 ndc = vec2(position.x, position.y + uWalk);
        float edge = smoothstep(1.12, 0.94, abs(ndc.y));
        vA = appear * (1.0 - uFade) * edge * aGlow * aBright;
        gl_Position = vec4(ndc, 0.0, 1.0);
        gl_PointSize = uSize * uPixelRatio * aScale * step(0.002, vA);
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uIntensity;
      varying float vA;
      void main() {
        // A bright core with a soft halo — the stippenkaart soul look, in white.
        vec2 p = gl_PointCoord - 0.5;
        float d = length(p);
        if (d > 0.5 || vA <= 0.001) discard;
        float core = smoothstep(0.19, 0.0, d);
        float halo = smoothstep(0.5, 0.04, d) * 0.34;
        gl_FragColor = vec4(uColor * (0.75 + core * 0.42), (core + halo) * vA * uIntensity);
      }
    `,transparent:!0,depthTest:!1,depthWrite:!1,blending:E,toneMapped:!1}),l=new R(i,g);l.frustumCulled=!1,l.renderOrder=20,l.visible=!1,y.add(l);const b=document.querySelector("#finale-memorial"),S=document.querySelector("#info-toggle");return{finalePoints:l,finaleMaterial:g,finaleMemorialEl:b,infoToggleEl:S}}export{D as buildFinale};
//# sourceMappingURL=finale-DIhdqOUT.js.map
