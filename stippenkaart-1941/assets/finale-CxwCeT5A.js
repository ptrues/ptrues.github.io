import{Y as M,B as s,an as _,ap as z,a1 as N,aq as B}from"./index-SolS5mRr.js";const G=6e4,m=1140,a=2*m,P=.1,R=.55;function T({scene:S,quality:c,makeGlowTexture:F}){const n=G,u=new Float32Array(n*3),A=new Float32Array(n),g=new Float32Array(n),w=new Float32Array(n),f=new Float32Array(n),r=e=>B(e>>>0)/4294967295,d=new Float32Array(a);for(let e=0;e<a;e+=1){const t=(e===0?0:r(e*2+1)*2-1)*.96,o=e===0?0:r(e*2+2)*2-1;d[e]=Math.hypot(t,o)}const v=new Float32Array(a);{const e=Array.from({length:a},(t,o)=>o).sort((t,o)=>d[t]-d[o]);for(let t=0;t<a;t+=1)v[e[t]]=t}let h=0;for(let e=0;e<n;e+=1){let t,o,p;if(e<a)t=(e===0?0:r(e*2+1)*2-1)*.96,o=e===0?0:r(e*2+2)*2-1,p=P*(v[e]/Math.max(1,a-1)),f[e]=1;else{t=(r(e*2+1)*2-1)*.96;const E=(e-a)/(n-a);h+=(1-R*E)/m;const I=(r(e*7+3)-.5)/m;o=-1-h+I,p=0,f[e]=1}u[e*3]=t,u[e*3+1]=o,u[e*3+2]=0,A[e]=p,g[e]=.62+.38*r(e*3+5),w[e]=Math.pow(r(e*5+11),.7)}const b=h,l=new M;l.setAttribute("position",new s(u,3)),l.setAttribute("aBirth",new s(A,1)),l.setAttribute("aGlow",new s(g,1)),l.setAttribute("aDepth",new s(w,1)),l.setAttribute("aSizeMul",new s(f,1));const y=new _({uniforms:{uFp:{value:0},uScroll:{value:0},uOpacity:{value:0},uIntensity:{value:c.low?.4:.32},uSize:{value:c.low?13:20},uPixelRatio:{value:c.pixelRatio||1},uGlow:{value:F()}},vertexShader:`
      uniform float uFp, uScroll, uOpacity, uSize, uPixelRatio;
      attribute float aBirth, aGlow, aDepth, aSizeMul;
      varying float vA;
      void main() {
        float screenY = position.y + uScroll;
        float born = smoothstep(aBirth, aBirth + 0.012, uFp);   // gentle fade-in (movement 1)
        float edge = smoothstep(1.15, 0.9, abs(screenY));       // soft fade at the screen edges
        // Depth cue: far souls (aDepth→1) are dimmer AND smaller, so the field recedes.
        float depthDim  = mix(1.0, 0.42, aDepth);
        float depthSize = mix(1.18, 0.34, aDepth);
        vA = born * edge * uOpacity * aGlow * depthDim;
        gl_Position = vec4(position.x, screenY, 0.0, 1.0);
        gl_PointSize = uSize * depthSize * aSizeMul * uPixelRatio * step(0.003, vA);
      }
    `,fragmentShader:`
      uniform sampler2D uGlow;
      uniform float uIntensity;
      varying float vA;
      void main() {
        vec4 g = texture2D(uGlow, gl_PointCoord);               // warm candlelight + soft halo
        gl_FragColor = vec4(g.rgb, g.a * vA * uIntensity);
      }
    `,transparent:!0,depthTest:!1,depthWrite:!1,blending:z}),i=new N(l,y);i.frustumCulled=!1,i.renderOrder=20,i.visible=!1,S.add(i);const x=document.querySelector("#finale-memorial"),D=document.querySelector("#info-toggle");return{finalePoints:i,finaleMaterial:y,finaleMemorialEl:x,finaleScrollMax:b,infoToggleEl:D}}export{P as FINALE_GATHER_END,T as buildFinale};
//# sourceMappingURL=finale-CxwCeT5A.js.map
