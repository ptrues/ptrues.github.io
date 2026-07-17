import{Y as I,B as i,an as N,ap as _,a1 as z,aq as B}from"./index-CX1TIs3N.js";const G=6e4,A=1140,n=2*A,P=.1,T=.55;function R({scene:y,quality:s,makeGlowTexture:F}){const t=G,r=new Float32Array(t*3),g=new Float32Array(t),w=new Float32Array(t),v=new Float32Array(t),u=new Float32Array(t),o=e=>B(e>>>0)/4294967295,c=Math.floor(n*.6),b=n-Math.floor(c/2);let f=0;for(let e=0;e<t;e+=1){let d,h,p;if(e<n){d=(e===0?0:o(e*2+1)*2-1)*.96,h=e===0?0:o(e*2+2)*2-1;const m=e<c?e/2:e-Math.floor(c/2);p=P*(m/Math.max(1,b-1)),u[e]=1}else{d=(o(e*2+1)*2-1)*.96;const m=(e-n)/(t-n);f+=(1-T*m)/A;const E=(o(e*7+3)-.5)/A;h=-1-f+E,p=0,u[e]=1}r[e*3]=d,r[e*3+1]=h,r[e*3+2]=0,g[e]=p,w[e]=.62+.38*o(e*3+5),v[e]=Math.pow(o(e*5+11),.7)}const x=f,a=new I;a.setAttribute("position",new i(r,3)),a.setAttribute("aBirth",new i(g,1)),a.setAttribute("aGlow",new i(w,1)),a.setAttribute("aDepth",new i(v,1)),a.setAttribute("aSizeMul",new i(u,1));const S=new N({uniforms:{uFp:{value:0},uScroll:{value:0},uOpacity:{value:0},uIntensity:{value:s.low?.4:.32},uSize:{value:s.low?13:20},uPixelRatio:{value:s.pixelRatio||1},uGlow:{value:F()}},vertexShader:`
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
    `,transparent:!0,depthTest:!1,depthWrite:!1,blending:_}),l=new z(a,S);l.frustumCulled=!1,l.renderOrder=20,l.visible=!1,y.add(l);const D=document.querySelector("#finale-memorial"),M=document.querySelector("#info-toggle");return{finalePoints:l,finaleMaterial:S,finaleMemorialEl:D,finaleScrollMax:x,infoToggleEl:M}}export{P as FINALE_GATHER_END,R as buildFinale};
//# sourceMappingURL=finale-DdW8h1Cd.js.map
