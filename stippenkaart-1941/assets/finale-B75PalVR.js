import{Y as _,B as r,an as z,ap as B,a1 as G,aq as L}from"./index-ChLhsnIS.js";const P=6e4,g=1140,n=2*g,T=.1,R=.55;function O({scene:F,quality:u,makeGlowTexture:x}){const t=P,s=new Float32Array(t*3),w=new Float32Array(t),v=new Float32Array(t),S=new Float32Array(t),c=new Float32Array(t),o=e=>L(e>>>0)/4294967295,y=Math.floor(n*.6),D=e=>e>0&&e%2===1&&e<y,I=n-Math.floor(Math.min(y,n)/2);let f=0,d=0;for(let e=0;e<t;e+=1){let h,p,m;if(e<n){const l=D(e);h=(e===0?0:o(e*2+1)*2-1)*.96,p=e===0?0:o(e*2+2)*2-1;const A=l?d-1:d;l||(d+=1),m=T*(A/Math.max(1,I-1)),c[e]=l?.78:1}else{h=(o(e*2+1)*2-1)*.96;const l=(e-n)/(t-n);f+=(1-R*l)/g;const A=(o(e*7+3)-.5)/g;p=-1-f+A,m=0,c[e]=1}s[e*3]=h,s[e*3+1]=p,s[e*3+2]=0,w[e]=m,v[e]=.62+.38*o(e*3+5),S[e]=Math.pow(o(e*5+11),.7)}const M=f,a=new _;a.setAttribute("position",new r(s,3)),a.setAttribute("aBirth",new r(w,1)),a.setAttribute("aGlow",new r(v,1)),a.setAttribute("aDepth",new r(S,1)),a.setAttribute("aSizeMul",new r(c,1));const b=new z({uniforms:{uFp:{value:0},uScroll:{value:0},uOpacity:{value:0},uIntensity:{value:u.low?.3:.24},uSize:{value:u.low?13:20},uPixelRatio:{value:u.pixelRatio||1},uGlow:{value:x()}},vertexShader:`
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
    `,transparent:!0,depthTest:!1,depthWrite:!1,blending:B}),i=new G(a,b);i.frustumCulled=!1,i.renderOrder=20,i.visible=!1,F.add(i);const E=document.querySelector("#finale-memorial"),N=document.querySelector("#info-toggle");return{finalePoints:i,finaleMaterial:b,finaleMemorialEl:E,finaleScrollMax:M,infoToggleEl:N}}export{T as FINALE_GATHER_END,O as buildFinale};
//# sourceMappingURL=finale-B75PalVR.js.map
