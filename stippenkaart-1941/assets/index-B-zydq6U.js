const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./city_legacy-Ecqh5Vqh.js","./BufferGeometryUtils-BSdKwFmx.js","./buildings-CMRsSAra.js","./footprint_lod-CBaCktgL.js"])))=>i.map(i=>d[i]);
var yv=Object.defineProperty;var Mv=(r,e,t)=>e in r?yv(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var ze=(r,e,t)=>Mv(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Sv="modulepreload",Tv=function(r,e){return new URL(r,e).href},jd={},es=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let c=function(u){return Promise.all(u.map(h=>Promise.resolve(h).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");i=c(t.map(u=>{if(u=Tv(u,n),u in jd)return;jd[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(n)for(let g=o.length-1;g>=0;g--){const _=o[g];if(_.href===u&&(!h||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":Sv,h||(d.as="script"),d.crossOrigin="",d.href=u,l&&d.setAttribute("nonce",l),document.head.appendChild(d),h)return new Promise((g,_)=>{d.addEventListener("load",g),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};const Zf="178",bv=0,qd=1,Ev=2,qg=1,Zg=2,dr=3,Xr=0,Vn=1,Fi=2,kr=0,Mo=1,Ps=2,Zd=3,$d=4,wv=5,_s=100,Av=101,Cv=102,Rv=103,Pv=104,Dv=200,Nv=201,Iv=202,Lv=203,Sh=204,Th=205,Ov=206,Uv=207,Fv=208,zv=209,Bv=210,kv=211,Vv=212,Hv=213,Gv=214,bh=0,Eh=1,wh=2,Io=3,Ah=4,Ch=5,Rh=6,Ph=7,$g=0,Wv=1,Xv=2,Vr=0,Yv=1,jv=2,qv=3,Jg=4,Zv=5,$v=6,Jv=7,Jd="attached",Kv="detached",Kg=300,Lo=301,Oo=302,Dh=303,Nh=304,iu=306,Ih=1e3,xs=1001,Lh=1002,ui=1003,Qv=1004,vl=1005,kn=1006,_u=1007,ys=1008,nr=1009,Qg=1010,e_=1011,qa=1012,$f=1013,Ds=1014,Bi=1015,pl=1016,Jf=1017,Kf=1018,Za=1020,t_=35902,n_=1021,i_=1022,bi=1023,$a=1026,Ja=1027,Qf=1028,ed=1029,r_=1030,td=1031,nd=1033,mc=33776,gc=33777,_c=33778,vc=33779,Oh=35840,Uh=35841,Fh=35842,zh=35843,Bh=36196,kh=37492,Vh=37496,Hh=37808,Gh=37809,Wh=37810,Xh=37811,Yh=37812,jh=37813,qh=37814,Zh=37815,$h=37816,Jh=37817,Kh=37818,Qh=37819,ef=37820,tf=37821,xc=36492,nf=36494,rf=36495,s_=36283,sf=36284,of=36285,af=36286,Nc=2300,lf=2301,vu=2302,Kd=2400,Qd=2401,ep=2402,ex=2500,bC=0,EC=1,wC=2,tx=3200,nx=3201,o_=0,ix=1,Ir="",Mn="srgb",Uo="srgb-linear",Ic="linear",wt="srgb",ks=7680,tp=519,rx=512,sx=513,ox=514,a_=515,ax=516,lx=517,cx=518,ux=519,cf=35044,np="300 es",_r=2e3,Lc=2001;class jo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ip=1234567;const wa=Math.PI/180,Fo=180/Math.PI;function Ai(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[r&255]+_n[r>>8&255]+_n[r>>16&255]+_n[r>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}function ot(r,e,t){return Math.max(e,Math.min(t,r))}function id(r,e){return(r%e+e)%e}function hx(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function fx(r,e,t){return r!==e?(t-r)/(e-r):0}function Aa(r,e,t){return(1-t)*r+t*e}function dx(r,e,t,n){return Aa(r,e,1-Math.exp(-t*n))}function px(r,e=1){return e-Math.abs(id(r,e*2)-e)}function mx(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function gx(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function _x(r,e){return r+Math.floor(Math.random()*(e-r+1))}function vx(r,e){return r+Math.random()*(e-r)}function xx(r){return r*(.5-Math.random())}function yx(r){r!==void 0&&(ip=r);let e=ip+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Mx(r){return r*wa}function Sx(r){return r*Fo}function Tx(r){return(r&r-1)===0&&r!==0}function bx(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ex(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function wx(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function zi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function bt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const mt={DEG2RAD:wa,RAD2DEG:Fo,generateUUID:Ai,clamp:ot,euclideanModulo:id,mapLinear:hx,inverseLerp:fx,lerp:Aa,damp:dx,pingpong:px,smoothstep:mx,smootherstep:gx,randInt:_x,randFloat:vx,randFloatSpread:xx,seededRandom:yx,degToRad:Mx,radToDeg:Sx,isPowerOfTwo:Tx,ceilPowerOfTwo:bx,floorPowerOfTwo:Ex,setQuaternionFromProperEuler:wx,normalize:bt,denormalize:zi};class he{constructor(e=0,t=0){he.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qo{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*_,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const A=Math.sqrt(y),E=Math.atan2(A,p*S);m=Math.sin(m*E)/A,a=Math.sin(a*E)/A}const x=a*S;if(l=l*m+f*x,c=c*m+d*x,u=u*m+g*x,h=h*m+_*x,m===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xu.copy(this).projectOnVector(e),this.sub(xu)}reflect(e){return this.sub(xu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xu=new U,rp=new qo;class it{constructor(e,t,n,i,s,o,a,l,c){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],S=i[1],y=i[4],x=i[7],A=i[2],E=i[5],T=i[8];return s[0]=o*_+a*S+l*A,s[3]=o*m+a*y+l*E,s[6]=o*p+a*x+l*T,s[1]=c*_+u*S+h*A,s[4]=c*m+u*y+h*E,s[7]=c*p+u*x+h*T,s[2]=f*_+d*S+g*A,s[5]=f*m+d*y+g*E,s[8]=f*p+d*x+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(yu.makeScale(e,t)),this}rotate(e){return this.premultiply(yu.makeRotation(-e)),this}translate(e,t){return this.premultiply(yu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yu=new it;function l_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ka(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ax(){const r=Ka("canvas");return r.style.display="block",r}const sp={};function So(r){r in sp||(sp[r]=!0,console.warn(r))}function Cx(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Rx(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Px(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const op=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ap=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dx(){const r={enabled:!0,workingColorSpace:Uo,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===wt&&(i.r=yr(i.r),i.g=yr(i.g),i.b=yr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===wt&&(i.r=To(i.r),i.g=To(i.g),i.b=To(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ir?Ic:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return So("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return So("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Uo]:{primaries:e,whitePoint:n,transfer:Ic,toXYZ:op,fromXYZ:ap,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:e,whitePoint:n,transfer:wt,toXYZ:op,fromXYZ:ap,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),r}const dt=Dx();function yr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function To(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Vs;class Nx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vs===void 0&&(Vs=Ka("canvas")),Vs.width=e.width,Vs.height=e.height;const i=Vs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Vs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ka("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=yr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yr(t[n]/255)*255):t[n]=yr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ix=0;class rd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=Ai(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Mu(i[o].image)):s.push(Mu(i[o]))}else s=Mu(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Mu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Nx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lx=0;const Su=new U;class mn extends jo{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,n=xs,i=xs,s=kn,o=ys,a=bi,l=nr,c=mn.DEFAULT_ANISOTROPY,u=Ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=Ai(),this.name="",this.source=new rd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Su).x}get height(){return this.source.getSize(Su).y}get depth(){return this.source.getSize(Su).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ih:e.x=e.x-Math.floor(e.x);break;case xs:e.x=e.x<0?0:1;break;case Lh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ih:e.y=e.y-Math.floor(e.y);break;case xs:e.y=e.y<0?0:1;break;case Lh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Kg;mn.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,i=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(d+1)/2,A=(p+1)/2,E=(u+f)/4,T=(h+_)/4,C=(g+m)/4;return y>x&&y>A?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=E/n,s=T/n):x>A?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=E/i,s=C/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=T/s,i=C/s),this.set(n,i,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-_)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ox extends jo{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new mn(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new rd(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ns extends Ox{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class c_ extends mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ui,this.minFilter=ui,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ux extends mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ui,this.minFilter=ui,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $r{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pi):Pi.fromBufferAttribute(s,o),Pi.applyMatrix4(e.matrixWorld),this.expandByPoint(Pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xl.copy(n.boundingBox)),xl.applyMatrix4(e.matrixWorld),this.union(xl)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qo),yl.subVectors(this.max,Qo),Hs.subVectors(e.a,Qo),Gs.subVectors(e.b,Qo),Ws.subVectors(e.c,Qo),Er.subVectors(Gs,Hs),wr.subVectors(Ws,Gs),ts.subVectors(Hs,Ws);let t=[0,-Er.z,Er.y,0,-wr.z,wr.y,0,-ts.z,ts.y,Er.z,0,-Er.x,wr.z,0,-wr.x,ts.z,0,-ts.x,-Er.y,Er.x,0,-wr.y,wr.x,0,-ts.y,ts.x,0];return!Tu(t,Hs,Gs,Ws,yl)||(t=[1,0,0,0,1,0,0,0,1],!Tu(t,Hs,Gs,Ws,yl))?!1:(Ml.crossVectors(Er,wr),t=[Ml.x,Ml.y,Ml.z],Tu(t,Hs,Gs,Ws,yl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(or),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const or=[new U,new U,new U,new U,new U,new U,new U,new U],Pi=new U,xl=new $r,Hs=new U,Gs=new U,Ws=new U,Er=new U,wr=new U,ts=new U,Qo=new U,yl=new U,Ml=new U,ns=new U;function Tu(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ns.fromArray(r,s);const a=i.x*Math.abs(ns.x)+i.y*Math.abs(ns.y)+i.z*Math.abs(ns.z),l=e.dot(ns),c=t.dot(ns),u=n.dot(ns);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Fx=new $r,ea=new U,bu=new U;class br{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Fx.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ea.subVectors(e,this.center);const t=ea.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ea,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ea.copy(e.center).add(bu)),this.expandByPoint(ea.copy(e.center).sub(bu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ar=new U,Eu=new U,Sl=new U,Ar=new U,wu=new U,Tl=new U,Au=new U;class ru{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ar.copy(this.origin).addScaledVector(this.direction,t),ar.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Eu.copy(e).add(t).multiplyScalar(.5),Sl.copy(t).sub(e).normalize(),Ar.copy(this.origin).sub(Eu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Sl),a=Ar.dot(this.direction),l=-Ar.dot(Sl),c=Ar.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Eu).addScaledVector(Sl,f),d}intersectSphere(e,t){ar.subVectors(e.center,this.origin);const n=ar.dot(this.direction),i=ar.dot(ar)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ar)!==null}intersectTriangle(e,t,n,i,s){wu.subVectors(t,e),Tl.subVectors(n,e),Au.crossVectors(wu,Tl);let o=this.direction.dot(Au),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ar.subVectors(this.origin,e);const l=a*this.direction.dot(Tl.crossVectors(Ar,Tl));if(l<0)return null;const c=a*this.direction.dot(wu.cross(Ar));if(c<0||l+c>o)return null;const u=-a*Ar.dot(Au);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Xs.setFromMatrixColumn(e,0).length(),s=1/Xs.setFromMatrixColumn(e,1).length(),o=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zx,e,Bx)}lookAt(e,t,n){const i=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Cr.crossVectors(n,Jn),Cr.lengthSq()===0&&(Math.abs(n.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Cr.crossVectors(n,Jn)),Cr.normalize(),bl.crossVectors(Jn,Cr),i[0]=Cr.x,i[4]=bl.x,i[8]=Jn.x,i[1]=Cr.y,i[5]=bl.y,i[9]=Jn.y,i[2]=Cr.z,i[6]=bl.z,i[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],y=n[7],x=n[11],A=n[15],E=i[0],T=i[4],C=i[8],M=i[12],v=i[1],D=i[5],L=i[9],F=i[13],k=i[2],Y=i[6],V=i[10],W=i[14],z=i[3],Q=i[7],N=i[11],ce=i[15];return s[0]=o*E+a*v+l*k+c*z,s[4]=o*T+a*D+l*Y+c*Q,s[8]=o*C+a*L+l*V+c*N,s[12]=o*M+a*F+l*W+c*ce,s[1]=u*E+h*v+f*k+d*z,s[5]=u*T+h*D+f*Y+d*Q,s[9]=u*C+h*L+f*V+d*N,s[13]=u*M+h*F+f*W+d*ce,s[2]=g*E+_*v+m*k+p*z,s[6]=g*T+_*D+m*Y+p*Q,s[10]=g*C+_*L+m*V+p*N,s[14]=g*M+_*F+m*W+p*ce,s[3]=S*E+y*v+x*k+A*z,s[7]=S*T+y*D+x*Y+A*Q,s[11]=S*C+y*L+x*V+A*N,s[15]=S*M+y*F+x*W+A*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+_*(+t*l*d-t*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+m*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,y=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,x=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,A=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,E=t*S+n*y+i*x+s*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=S*T,e[1]=(_*f*s-h*m*s-_*i*d+n*m*d+h*i*p-n*f*p)*T,e[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*T,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*T,e[4]=y*T,e[5]=(u*m*s-g*f*s+g*i*d-t*m*d-u*i*p+t*f*p)*T,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*p-t*l*p)*T,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*d+t*l*d)*T,e[8]=x*T,e[9]=(g*h*s-u*_*s-g*n*d+t*_*d+u*n*p-t*h*p)*T,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*T,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*T,e[12]=A*T,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*m+t*h*m)*T,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*T,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,_=o*u,m=o*h,p=a*h,S=l*c,y=l*u,x=l*h,A=n.x,E=n.y,T=n.z;return i[0]=(1-(_+p))*A,i[1]=(d+x)*A,i[2]=(g-y)*A,i[3]=0,i[4]=(d-x)*E,i[5]=(1-(f+p))*E,i[6]=(m+S)*E,i[7]=0,i[8]=(g+y)*T,i[9]=(m-S)*T,i[10]=(1-(f+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Xs.set(i[0],i[1],i[2]).length();const o=Xs.set(i[4],i[5],i[6]).length(),a=Xs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Di.copy(this);const c=1/s,u=1/o,h=1/a;return Di.elements[0]*=c,Di.elements[1]*=c,Di.elements[2]*=c,Di.elements[4]*=u,Di.elements[5]*=u,Di.elements[6]*=u,Di.elements[8]*=h,Di.elements[9]*=h,Di.elements[10]*=h,t.setFromRotationMatrix(Di),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=_r){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,g;if(a===_r)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Lc)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=_r){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),f=(t+e)*c,d=(n+i)*u;let g,_;if(a===_r)g=(o+s)*h,_=-2*h;else if(a===Lc)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Xs=new U,Di=new at,zx=new U(0,0,0),Bx=new U(1,1,1),Cr=new U,bl=new U,Jn=new U,lp=new at,cp=new qo;class ir{constructor(e=0,t=0,n=0,i=ir.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cp.setFromEuler(this),this.setFromQuaternion(cp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ir.DEFAULT_ORDER="XYZ";class u_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kx=0;const up=new U,Ys=new qo,lr=new at,El=new U,ta=new U,Vx=new U,Hx=new qo,hp=new U(1,0,0),fp=new U(0,1,0),dp=new U(0,0,1),pp={type:"added"},Gx={type:"removed"},js={type:"childadded",child:null},Cu={type:"childremoved",child:null};class Gt extends jo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new U,t=new ir,n=new qo,i=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new it}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new u_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(hp,e)}rotateY(e){return this.rotateOnAxis(fp,e)}rotateZ(e){return this.rotateOnAxis(dp,e)}translateOnAxis(e,t){return up.copy(e).applyQuaternion(this.quaternion),this.position.add(up.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hp,e)}translateY(e){return this.translateOnAxis(fp,e)}translateZ(e){return this.translateOnAxis(dp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(lr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?El.copy(e):El.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?lr.lookAt(ta,El,this.up):lr.lookAt(El,ta,this.up),this.quaternion.setFromRotationMatrix(lr),i&&(lr.extractRotation(i.matrixWorld),Ys.setFromRotationMatrix(lr),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pp),js.child=e,this.dispatchEvent(js),js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gx),Cu.child=e,this.dispatchEvent(Cu),Cu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),lr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),lr.multiply(e.parent.matrixWorld)),e.applyMatrix4(lr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pp),js.child=e,this.dispatchEvent(js),js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,e,Vx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,Hx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Gt.DEFAULT_UP=new U(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ni=new U,cr=new U,Ru=new U,ur=new U,qs=new U,Zs=new U,mp=new U,Pu=new U,Du=new U,Nu=new U,Iu=new pt,Lu=new pt,Ou=new pt;class Ti{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ni.subVectors(e,t),i.cross(Ni);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ni.subVectors(i,t),cr.subVectors(n,t),Ru.subVectors(e,t);const o=Ni.dot(Ni),a=Ni.dot(cr),l=Ni.dot(Ru),c=cr.dot(cr),u=cr.dot(Ru),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ur)===null?!1:ur.x>=0&&ur.y>=0&&ur.x+ur.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,ur)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ur.x),l.addScaledVector(o,ur.y),l.addScaledVector(a,ur.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Iu.setScalar(0),Lu.setScalar(0),Ou.setScalar(0),Iu.fromBufferAttribute(e,t),Lu.fromBufferAttribute(e,n),Ou.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Iu,s.x),o.addScaledVector(Lu,s.y),o.addScaledVector(Ou,s.z),o}static isFrontFacing(e,t,n,i){return Ni.subVectors(n,t),cr.subVectors(e,t),Ni.cross(cr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),cr.subVectors(this.a,this.b),Ni.cross(cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Ti.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;qs.subVectors(i,n),Zs.subVectors(s,n),Pu.subVectors(e,n);const l=qs.dot(Pu),c=Zs.dot(Pu);if(l<=0&&c<=0)return t.copy(n);Du.subVectors(e,i);const u=qs.dot(Du),h=Zs.dot(Du);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(qs,o);Nu.subVectors(e,s);const d=qs.dot(Nu),g=Zs.dot(Nu);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Zs,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return mp.subVectors(s,i),a=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(mp,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(qs,o).addScaledVector(Zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const h_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rr={h:0,s:0,l:0},wl={h:0,s:0,l:0};function Uu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=id(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Uu(o,s,e+1/3),this.g=Uu(o,s,e),this.b=Uu(o,s,e-1/3)}return dt.colorSpaceToWorking(this,i),this}setStyle(e,t=Mn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mn){const n=h_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}copyLinearToSRGB(e){return this.r=To(e.r),this.g=To(e.g),this.b=To(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return dt.workingToColorSpace(vn.copy(this),e),Math.round(ot(vn.r*255,0,255))*65536+Math.round(ot(vn.g*255,0,255))*256+Math.round(ot(vn.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(vn.copy(this),t);const n=vn.r,i=vn.g,s=vn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Mn){dt.workingToColorSpace(vn.copy(this),e);const t=vn.r,n=vn.g,i=vn.b;return e!==Mn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Rr),this.setHSL(Rr.h+e,Rr.s+t,Rr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rr),e.getHSL(wl);const n=Aa(Rr.h,wl.h,t),i=Aa(Rr.s,wl.s,t),s=Aa(Rr.l,wl.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new et;et.NAMES=h_;let Wx=0;class Jr extends jo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=Mo,this.side=Xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sh,this.blendDst=Th,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mo&&(n.blending=this.blending),this.side!==Xr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sh&&(n.blendSrc=this.blendSrc),this.blendDst!==Th&&(n.blendDst=this.blendDst),this.blendEquation!==_s&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Io&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class su extends Jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ir,this.combine=$g,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new U,Al=new he;let Xx=0;class Qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=cf,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Al.fromBufferAttribute(this,t),Al.applyMatrix3(e),this.setXY(t,Al.x,Al.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cf&&(e.usage=this.usage),e}}class f_ extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class d_ extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Hn extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Yx=0;const vi=new at,Fu=new Gt,$s=new U,Kn=new $r,na=new $r,cn=new U;class pi extends jo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yx++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(l_(e)?d_:f_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new it().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,t,n){return vi.makeTranslation(e,t,n),this.applyMatrix4(vi),this}scale(e,t,n){return vi.makeScale(e,t,n),this.applyMatrix4(vi),this}lookAt(e){return Fu.lookAt(e),Fu.updateMatrix(),this.applyMatrix4(Fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Hn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $r);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Kn.setFromBufferAttribute(s),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];na.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(Kn.min,na.min),Kn.expandByPoint(cn),cn.addVectors(Kn.max,na.max),Kn.expandByPoint(cn)):(Kn.expandByPoint(na.min),Kn.expandByPoint(na.max))}Kn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)cn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(cn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)cn.fromBufferAttribute(a,c),l&&($s.fromBufferAttribute(e,c),cn.add($s)),i=Math.max(i,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new U,l[C]=new U;const c=new U,u=new U,h=new U,f=new he,d=new he,g=new he,_=new U,m=new U;function p(C,M,v){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,v),f.fromBufferAttribute(s,C),d.fromBufferAttribute(s,M),g.fromBufferAttribute(s,v),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(D),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),a[C].add(_),a[M].add(_),a[v].add(_),l[C].add(m),l[M].add(m),l[v].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let C=0,M=S.length;C<M;++C){const v=S[C],D=v.start,L=v.count;for(let F=D,k=D+L;F<k;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const y=new U,x=new U,A=new U,E=new U;function T(C){A.fromBufferAttribute(i,C),E.copy(A);const M=a[C];y.copy(M),y.sub(A.multiplyScalar(A.dot(M))).normalize(),x.crossVectors(E,M);const D=x.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,D)}for(let C=0,M=S.length;C<M;++C){const v=S[C],D=v.start,L=v.count;for(let F=D,k=D+L;F<k;F+=3)T(e.getX(F+0)),T(e.getX(F+1)),T(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new U,s=new U,o=new U,a=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Qt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pi,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gp=new at,is=new ru,Cl=new br,_p=new U,Rl=new U,Pl=new U,Dl=new U,zu=new U,Nl=new U,vp=new U,Il=new U;class bn extends Gt{constructor(e=new pi,t=new su){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Nl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(zu.fromBufferAttribute(h,e),o?Nl.addScaledVector(zu,u):Nl.addScaledVector(zu.sub(t),u))}t.add(Nl)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cl.copy(n.boundingSphere),Cl.applyMatrix4(s),is.copy(e.ray).recast(e.near),!(Cl.containsPoint(is.origin)===!1&&(is.intersectSphere(Cl,_p)===null||is.origin.distanceToSquared(_p)>(e.far-e.near)**2))&&(gp.copy(s).invert(),is.copy(e.ray).applyMatrix4(gp),!(n.boundingBox!==null&&is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=S,A=y;x<A;x+=3){const E=a.getX(x),T=a.getX(x+1),C=a.getX(x+2);i=Ll(this,p,e,n,c,u,h,E,T,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);i=Ll(this,o,e,n,c,u,h,S,y,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=S,A=y;x<A;x+=3){const E=x,T=x+1,C=x+2;i=Ll(this,p,e,n,c,u,h,E,T,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=m,y=m+1,x=m+2;i=Ll(this,o,e,n,c,u,h,S,y,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function jx(r,e,t,n,i,s,o,a){let l;if(e.side===Vn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Xr,a),l===null)return null;Il.copy(a),Il.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Il);return c<t.near||c>t.far?null:{distance:c,point:Il.clone(),object:r}}function Ll(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Rl),r.getVertexPosition(l,Pl),r.getVertexPosition(c,Dl);const u=jx(r,e,t,n,Rl,Pl,Dl,vp);if(u){const h=new U;Ti.getBarycoord(vp,Rl,Pl,Dl,h),i&&(u.uv=Ti.getInterpolatedAttribute(i,a,l,c,h,new he)),s&&(u.uv1=Ti.getInterpolatedAttribute(s,a,l,c,h,new he)),o&&(u.normal=Ti.getInterpolatedAttribute(o,a,l,c,h,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new U,materialIndex:0};Ti.getNormal(Rl,Pl,Dl,f.normal),u.face=f,u.barycoord=h}return u}class ml extends pi{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Hn(c,3)),this.setAttribute("normal",new Hn(u,3)),this.setAttribute("uv",new Hn(h,2));function g(_,m,p,S,y,x,A,E,T,C,M){const v=x/T,D=A/C,L=x/2,F=A/2,k=E/2,Y=T+1,V=C+1;let W=0,z=0;const Q=new U;for(let N=0;N<V;N++){const ce=N*D-F;for(let Pe=0;Pe<Y;Pe++){const Re=Pe*v-L;Q[_]=Re*S,Q[m]=ce*y,Q[p]=k,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[p]=E>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(Pe/T),h.push(1-N/C),W+=1}}for(let N=0;N<C;N++)for(let ce=0;ce<T;ce++){const Pe=f+ce+Y*N,Re=f+ce+Y*(N+1),q=f+(ce+1)+Y*(N+1),re=f+(ce+1)+Y*N;l.push(Pe,Re,re),l.push(Re,q,re),z+=6}a.addGroup(d,z,M),d+=z,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zo(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Dn(r){const e={};for(let t=0;t<r.length;t++){const n=zo(r[t]);for(const i in n)e[i]=n[i]}return e}function qx(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function p_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const Zx={clone:zo,merge:Dn};var $x=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends Jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$x,this.fragmentShader=Jx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zo(e.uniforms),this.uniformsGroups=qx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class m_ extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=_r}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pr=new U,xp=new he,yp=new he;class zn extends m_{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fo*2*Math.atan(Math.tan(wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z),Pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z)}getViewSize(e,t){return this.getViewBounds(e,xp,yp),t.subVectors(yp,xp)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Js=-90,Ks=1;class Kx extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new zn(Js,Ks,e,t);i.layers=this.layers,this.add(i);const s=new zn(Js,Ks,e,t);s.layers=this.layers,this.add(s);const o=new zn(Js,Ks,e,t);o.layers=this.layers,this.add(o);const a=new zn(Js,Ks,e,t);a.layers=this.layers,this.add(a);const l=new zn(Js,Ks,e,t);l.layers=this.layers,this.add(l);const c=new zn(Js,Ks,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===_r)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class g_ extends mn{constructor(e=[],t=Lo,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qx extends Ns{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new g_(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ml(5,5,5),s=new ki({name:"CubemapFromEquirect",uniforms:zo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vn,blending:kr});s.uniforms.tEquirect.value=t;const o=new bn(i,s),a=t.minFilter;return t.minFilter===ys&&(t.minFilter=kn),new Kx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class Ol extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ey={type:"move"};class Bu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ol,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ol,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ol,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ey)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ol;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class sd{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new et(e),this.density=t}clone(){return new sd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ty extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ir,this.environmentIntensity=1,this.environmentRotation=new ir,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ny{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=cf,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Cn=new U;class Oc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=zi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Oc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class od extends Jr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Qs;const ia=new U,eo=new U,to=new U,no=new he,ra=new he,__=new at,Ul=new U,sa=new U,Fl=new U,Mp=new he,ku=new he,Sp=new he;class v_ extends Gt{constructor(e=new od){if(super(),this.isSprite=!0,this.type="Sprite",Qs===void 0){Qs=new pi;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ny(t,5);Qs.setIndex([0,1,2,0,2,3]),Qs.setAttribute("position",new Oc(n,3,0,!1)),Qs.setAttribute("uv",new Oc(n,2,3,!1))}this.geometry=Qs,this.material=e,this.center=new he(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),eo.setFromMatrixScale(this.matrixWorld),__.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),to.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&eo.multiplyScalar(-to.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;zl(Ul.set(-.5,-.5,0),to,o,eo,i,s),zl(sa.set(.5,-.5,0),to,o,eo,i,s),zl(Fl.set(.5,.5,0),to,o,eo,i,s),Mp.set(0,0),ku.set(1,0),Sp.set(1,1);let a=e.ray.intersectTriangle(Ul,sa,Fl,!1,ia);if(a===null&&(zl(sa.set(-.5,.5,0),to,o,eo,i,s),ku.set(0,1),a=e.ray.intersectTriangle(Ul,Fl,sa,!1,ia),a===null))return;const l=e.ray.origin.distanceTo(ia);l<e.near||l>e.far||t.push({distance:l,point:ia.clone(),uv:Ti.getInterpolation(ia,Ul,sa,Fl,Mp,ku,Sp,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function zl(r,e,t,n,i,s){no.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(ra.x=s*no.x-i*no.y,ra.y=i*no.x+s*no.y):ra.copy(no),r.copy(e),r.x+=ra.x,r.y+=ra.y,r.applyMatrix4(__)}const Tp=new U,bp=new pt,Ep=new pt,iy=new U,wp=new at,Bl=new U,Vu=new br,Ap=new at,Hu=new ru;class AC extends bn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Jd,this.bindMatrix=new at,this.bindMatrixInverse=new at,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $r),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Bl),this.boundingBox.expandByPoint(Bl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new br),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Bl),this.boundingSphere.expandByPoint(Bl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vu.copy(this.boundingSphere),Vu.applyMatrix4(i),e.ray.intersectsSphere(Vu)!==!1&&(Ap.copy(i).invert(),Hu.copy(e.ray).applyMatrix4(Ap),!(this.boundingBox!==null&&Hu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Hu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Jd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Kv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;bp.fromBufferAttribute(i.attributes.skinIndex,e),Ep.fromBufferAttribute(i.attributes.skinWeight,e),Tp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Ep.getComponent(s);if(o!==0){const a=bp.getComponent(s);wp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(iy.copy(Tp).applyMatrix4(wp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class ry extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class x_ extends mn{constructor(e=null,t=1,n=1,i,s,o,a,l,c=ui,u=ui,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cp=new at,sy=new at;class y_{constructor(e=[],t=[]){this.uuid=Ai(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new at)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new at;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:sy;Cp.multiplyMatrices(a,t[s]),Cp.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new y_(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new x_(t,e,e,bi,Bi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new ry),this.bones.push(o),this.boneInverses.push(new at().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Rp extends Qt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const io=new at,Pp=new at,kl=[],Dp=new $r,oy=new at,oa=new bn,aa=new br;class CC extends bn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rp(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,oy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $r),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,io),Dp.copy(e.boundingBox).applyMatrix4(io),this.boundingBox.union(Dp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new br),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,io),aa.copy(e.boundingSphere).applyMatrix4(io),this.boundingSphere.union(aa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(oa.geometry=this.geometry,oa.material=this.material,oa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),aa.copy(this.boundingSphere),aa.applyMatrix4(n),e.ray.intersectsSphere(aa)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,io),Pp.multiplyMatrices(n,io),oa.matrixWorld=Pp,oa.raycast(e,kl);for(let o=0,a=kl.length;o<a;o++){const l=kl[o];l.instanceId=s,l.object=this,t.push(l)}kl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rp(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new x_(new Float32Array(i*this.count),i,this.count,Qf,Bi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Gu=new U,ay=new U,ly=new it;class cs{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Gu.subVectors(n,t).cross(ay.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Gu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ly.getNormalMatrix(e),i=this.coplanarPoint(Gu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new br,cy=new he(.5,.5),Vl=new U;class ad{constructor(e=new cs,t=new cs,n=new cs,i=new cs,s=new cs,o=new cs){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_r){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],S=i[13],y=i[14],x=i[15];if(n[0].setComponents(l-s,f-c,m-d,x-p).normalize(),n[1].setComponents(l+s,f+c,m+d,x+p).normalize(),n[2].setComponents(l+o,f+u,m+g,x+S).normalize(),n[3].setComponents(l-o,f-u,m-g,x-S).normalize(),n[4].setComponents(l-a,f-h,m-_,x-y).normalize(),t===_r)n[5].setComponents(l+a,f+h,m+_,x+y).normalize();else if(t===Lc)n[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){rs.center.set(0,0,0);const t=cy.distanceTo(e.center);return rs.radius=.7071067811865476+t,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Vl.x=i.normal.x>0?e.max.x:e.min.x,Vl.y=i.normal.y>0?e.max.y:e.min.y,Vl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Vl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uy extends Jr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Uc=new U,Fc=new U,Np=new at,la=new ru,Hl=new br,Wu=new U,Ip=new U;class M_ extends Gt{constructor(e=new pi,t=new uy){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Uc.fromBufferAttribute(t,i-1),Fc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Uc.distanceTo(Fc);e.setAttribute("lineDistance",new Hn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hl.copy(n.boundingSphere),Hl.applyMatrix4(i),Hl.radius+=s,e.ray.intersectsSphere(Hl)===!1)return;Np.copy(i).invert(),la.copy(e.ray).applyMatrix4(Np);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),S=u.getX(_+1),y=Gl(this,e,la,l,p,S,_);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=Gl(this,e,la,l,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=Gl(this,e,la,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Gl(this,e,la,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Gl(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Uc.fromBufferAttribute(a,i),Fc.fromBufferAttribute(a,s),t.distanceSqToSegment(Uc,Fc,Wu,Ip)>n)return;Wu.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Wu);if(!(c<e.near||c>e.far))return{distance:c,point:Ip.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Lp=new U,Op=new U;class RC extends M_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Lp.fromBufferAttribute(t,i),Op.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Lp.distanceTo(Op);e.setAttribute("lineDistance",new Hn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class PC extends M_{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class hy extends Jr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Up=new at,uf=new ru,Wl=new br,Xl=new U;class fy extends Gt{constructor(e=new pi,t=new hy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wl.copy(n.boundingSphere),Wl.applyMatrix4(i),Wl.radius+=s,e.ray.intersectsSphere(Wl)===!1)return;Up.copy(i).invert(),uf.copy(e.ray).applyMatrix4(Up);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);Xl.fromBufferAttribute(h,m),Fp(Xl,m,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Xl.fromBufferAttribute(h,g),Fp(Xl,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Fp(r,e,t,n,i,s,o){const a=uf.distanceSqToPoint(r);if(a<t){const l=new U;uf.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ou extends mn{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class S_ extends mn{constructor(e,t,n=Ds,i,s,o,a=ui,l=ui,c,u=$a,h=1){if(u!==$a&&u!==Ja)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class sr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new he:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new U,i=[],s=[],o=[],a=new U,l=new at;for(let d=0;d<=e;d++){const g=d/e;i[d]=this.getTangentAt(g,new U)}s[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ot(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(ot(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ld extends sr{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new he){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class dy extends ld{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function cd(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const Yl=new U,Xu=new cd,Yu=new cd,ju=new cd;class py extends sr{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new U){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(Yl.subVectors(i[0],i[1]).add(i[0]),c=Yl);const h=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(Yl.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Yl),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Xu.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,m),Yu.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,m),ju.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Xu.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Yu.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),ju.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Xu.calc(l),Yu.calc(l),ju.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new U().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function zp(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function my(r,e){const t=1-r;return t*t*e}function gy(r,e){return 2*(1-r)*r*e}function _y(r,e){return r*r*e}function Ca(r,e,t,n){return my(r,e)+gy(r,t)+_y(r,n)}function vy(r,e){const t=1-r;return t*t*t*e}function xy(r,e){const t=1-r;return 3*t*t*r*e}function yy(r,e){return 3*(1-r)*r*r*e}function My(r,e){return r*r*r*e}function Ra(r,e,t,n,i){return vy(r,e)+xy(r,t)+yy(r,n)+My(r,i)}class T_ extends sr{constructor(e=new he,t=new he,n=new he,i=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new he){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ra(e,i.x,s.x,o.x,a.x),Ra(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Sy extends sr{constructor(e=new U,t=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new U){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ra(e,i.x,s.x,o.x,a.x),Ra(e,i.y,s.y,o.y,a.y),Ra(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class b_ extends sr{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ty extends sr{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class E_ extends sr{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Ca(e,i.x,s.x,o.x),Ca(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class by extends sr{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Ca(e,i.x,s.x,o.x),Ca(e,i.y,s.y,o.y),Ca(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class w_ extends sr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(zp(a,l.x,c.x,u.x,h.x),zp(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new he().fromArray(i))}return this}}var hf=Object.freeze({__proto__:null,ArcCurve:dy,CatmullRomCurve3:py,CubicBezierCurve:T_,CubicBezierCurve3:Sy,EllipseCurve:ld,LineCurve:b_,LineCurve3:Ty,QuadraticBezierCurve:E_,QuadraticBezierCurve3:by,SplineCurve:w_});class Ey extends sr{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hf[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new hf[i.type]().fromJSON(i))}return this}}class Bp extends Ey{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new b_(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new E_(this.currentPoint.clone(),new he(e,t),new he(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new T_(this.currentPoint.clone(),new he(e,t),new he(n,i),new he(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new w_(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new ld(e,t,n,i,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class wy extends Bp{constructor(e){super(e),this.uuid=Ai(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Bp().fromJSON(i))}return this}}function Ay(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=A_(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=Ny(r,e,s,t)),r.length>80*t){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let f=t;f<i;f+=t){const d=r[f],g=r[f+1];d<a&&(a=d),g<l&&(l=g),d>u&&(u=d),g>h&&(h=g)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Qa(s,o,t,a,l,c,0),o}function A_(r,e,t,n,i){let s;if(i===Gy(r,e,t,n)>0)for(let o=e;o<t;o+=n)s=kp(o/n|0,r[o],r[o+1],s);else for(let o=t-n;o>=e;o-=n)s=kp(o/n|0,r[o],r[o+1],s);return s&&Bo(s,s.next)&&(tl(s),s=s.next),s}function Is(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Bo(t,t.next)||Vt(t.prev,t,t.next)===0)){if(tl(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Qa(r,e,t,n,i,s,o){if(!r)return;!o&&s&&Fy(r,n,i,s);let a=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?Ry(r,n,i,s):Cy(r)){e.push(l.i,r.i,c.i),tl(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=Py(Is(r),e),Qa(r,e,t,n,i,s,2)):o===2&&Dy(r,e,t,n,i,s):Qa(Is(r),e,t,n,i,s,1);break}}}function Cy(r){const e=r.prev,t=r,n=r.next;if(Vt(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(i,s,o),h=Math.min(a,l,c),f=Math.max(i,s,o),d=Math.max(a,l,c);let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&ma(i,a,s,l,o,c,g.x,g.y)&&Vt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ry(r,e,t,n){const i=r.prev,s=r,o=r.next;if(Vt(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,u=i.y,h=s.y,f=o.y,d=Math.min(a,l,c),g=Math.min(u,h,f),_=Math.max(a,l,c),m=Math.max(u,h,f),p=ff(d,g,e,t,n),S=ff(_,m,e,t,n);let y=r.prevZ,x=r.nextZ;for(;y&&y.z>=p&&x&&x.z<=S;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&ma(a,u,l,h,c,f,y.x,y.y)&&Vt(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&ma(a,u,l,h,c,f,x.x,x.y)&&Vt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&ma(a,u,l,h,c,f,y.x,y.y)&&Vt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=S;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&ma(a,u,l,h,c,f,x.x,x.y)&&Vt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Py(r,e){let t=r;do{const n=t.prev,i=t.next.next;!Bo(n,i)&&R_(n,t,t.next,i)&&el(n,i)&&el(i,n)&&(e.push(n.i,t.i,i.i),tl(t),tl(t.next),t=r=i),t=t.next}while(t!==r);return Is(t)}function Dy(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ky(o,a)){let l=P_(o,a);o=Is(o,o.next),l=Is(l,l.next),Qa(o,e,t,n,i,s,0),Qa(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function Ny(r,e,t,n){const i=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=A_(r,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(By(c))}i.sort(Iy);for(let s=0;s<i.length;s++)t=Ly(i[s],t);return t}function Iy(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Ly(r,e){const t=Oy(r,e);if(!t)return e;const n=P_(t,r);return Is(n,n.next),Is(t,t.next)}function Oy(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,o;if(Bo(r,t))return t;do{if(Bo(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const h=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>s&&(s=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&C_(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){const h=Math.abs(i-t.y)/(n-t.x);el(t,r)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Uy(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function Uy(r,e){return Vt(r.prev,r,e.prev)<0&&Vt(e.next,r,r.next)<0}function Fy(r,e,t,n){let i=r;do i.z===0&&(i.z=ff(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,zy(i)}function zy(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,t*=2}while(e>1);return r}function ff(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function By(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function C_(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function ma(r,e,t,n,i,s,o,a){return!(r===o&&e===a)&&C_(r,e,t,n,i,s,o,a)}function ky(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Vy(r,e)&&(el(r,e)&&el(e,r)&&Hy(r,e)&&(Vt(r.prev,r,e.prev)||Vt(r,e.prev,e))||Bo(r,e)&&Vt(r.prev,r,r.next)>0&&Vt(e.prev,e,e.next)>0)}function Vt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Bo(r,e){return r.x===e.x&&r.y===e.y}function R_(r,e,t,n){const i=ql(Vt(r,e,t)),s=ql(Vt(r,e,n)),o=ql(Vt(t,n,r)),a=ql(Vt(t,n,e));return!!(i!==s&&o!==a||i===0&&jl(r,t,e)||s===0&&jl(r,n,e)||o===0&&jl(t,r,n)||a===0&&jl(t,e,n))}function jl(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function ql(r){return r>0?1:r<0?-1:0}function Vy(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&R_(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function el(r,e){return Vt(r.prev,r,r.next)<0?Vt(r,e,r.next)>=0&&Vt(r,r.prev,e)>=0:Vt(r,e,r.prev)<0||Vt(r,r.next,e)<0}function Hy(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function P_(r,e){const t=df(r.i,r.x,r.y),n=df(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function kp(r,e,t,n){const i=df(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function tl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function df(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Gy(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Wy{static triangulate(e,t,n=2){return Ay(e,t,n)}}class mo{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return mo.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Vp(e),Hp(n,e);let o=e.length;t.forEach(Vp);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Hp(n,t[l]);const a=Wy.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Vp(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Hp(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class D_ extends pi{constructor(e=new wy([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Hn(i,3)),this.setAttribute("uv",new Hn(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:Xy;let y,x=!1,A,E,T,C;p&&(y=p.getSpacedPoints(u),x=!0,f=!1,A=p.computeFrenetFrames(u,!1),E=new U,T=new U,C=new U),f||(m=0,d=0,g=0,_=0);const M=a.extractPoints(c);let v=M.shape;const D=M.holes;if(!mo.isClockWise(v)){v=v.reverse();for(let R=0,le=D.length;R<le;R++){const te=D[R];mo.isClockWise(te)&&(D[R]=te.reverse())}}function F(R){const te=10000000000000001e-36;let O=R[0];for(let J=1;J<=R.length;J++){const Me=J%R.length,ae=R[Me],fe=ae.x-O.x,We=ae.y-O.y,P=fe*fe+We*We,b=Math.max(Math.abs(ae.x),Math.abs(ae.y),Math.abs(O.x),Math.abs(O.y)),G=te*b*b;if(P<=G){R.splice(Me,1),J--;continue}O=ae}}F(v),D.forEach(F);const k=D.length,Y=v;for(let R=0;R<k;R++){const le=D[R];v=v.concat(le)}function V(R,le,te){return le||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(le,te)}const W=v.length;function z(R,le,te){let O,J,Me;const ae=R.x-le.x,fe=R.y-le.y,We=te.x-R.x,P=te.y-R.y,b=ae*ae+fe*fe,G=ae*P-fe*We;if(Math.abs(G)>Number.EPSILON){const Z=Math.sqrt(b),K=Math.sqrt(We*We+P*P),$=le.x-fe/Z,we=le.y+ae/Z,de=te.x-P/K,Ne=te.y+We/K,me=((de-$)*P-(Ne-we)*We)/(ae*P-fe*We);O=$+ae*me-R.x,J=we+fe*me-R.y;const ie=O*O+J*J;if(ie<=2)return new he(O,J);Me=Math.sqrt(ie/2)}else{let Z=!1;ae>Number.EPSILON?We>Number.EPSILON&&(Z=!0):ae<-Number.EPSILON?We<-Number.EPSILON&&(Z=!0):Math.sign(fe)===Math.sign(P)&&(Z=!0),Z?(O=-fe,J=ae,Me=Math.sqrt(b)):(O=ae,J=fe,Me=Math.sqrt(b/2))}return new he(O/Me,J/Me)}const Q=[];for(let R=0,le=Y.length,te=le-1,O=R+1;R<le;R++,te++,O++)te===le&&(te=0),O===le&&(O=0),Q[R]=z(Y[R],Y[te],Y[O]);const N=[];let ce,Pe=Q.concat();for(let R=0,le=k;R<le;R++){const te=D[R];ce=[];for(let O=0,J=te.length,Me=J-1,ae=O+1;O<J;O++,Me++,ae++)Me===J&&(Me=0),ae===J&&(ae=0),ce[O]=z(te[O],te[Me],te[ae]);N.push(ce),Pe=Pe.concat(ce)}let Re;if(m===0)Re=mo.triangulateShape(Y,D);else{const R=[],le=[];for(let te=0;te<m;te++){const O=te/m,J=d*Math.cos(O*Math.PI/2),Me=g*Math.sin(O*Math.PI/2)+_;for(let ae=0,fe=Y.length;ae<fe;ae++){const We=V(Y[ae],Q[ae],Me);Be(We.x,We.y,-J),O===0&&R.push(We)}for(let ae=0,fe=k;ae<fe;ae++){const We=D[ae];ce=N[ae];const P=[];for(let b=0,G=We.length;b<G;b++){const Z=V(We[b],ce[b],Me);Be(Z.x,Z.y,-J),O===0&&P.push(Z)}O===0&&le.push(P)}}Re=mo.triangulateShape(R,le)}const q=Re.length,re=g+_;for(let R=0;R<W;R++){const le=f?V(v[R],Pe[R],re):v[R];x?(T.copy(A.normals[0]).multiplyScalar(le.x),E.copy(A.binormals[0]).multiplyScalar(le.y),C.copy(y[0]).add(T).add(E),Be(C.x,C.y,C.z)):Be(le.x,le.y,0)}for(let R=1;R<=u;R++)for(let le=0;le<W;le++){const te=f?V(v[le],Pe[le],re):v[le];x?(T.copy(A.normals[R]).multiplyScalar(te.x),E.copy(A.binormals[R]).multiplyScalar(te.y),C.copy(y[R]).add(T).add(E),Be(C.x,C.y,C.z)):Be(te.x,te.y,h/u*R)}for(let R=m-1;R>=0;R--){const le=R/m,te=d*Math.cos(le*Math.PI/2),O=g*Math.sin(le*Math.PI/2)+_;for(let J=0,Me=Y.length;J<Me;J++){const ae=V(Y[J],Q[J],O);Be(ae.x,ae.y,h+te)}for(let J=0,Me=D.length;J<Me;J++){const ae=D[J];ce=N[J];for(let fe=0,We=ae.length;fe<We;fe++){const P=V(ae[fe],ce[fe],O);x?Be(P.x,P.y+y[u-1].y,y[u-1].x+te):Be(P.x,P.y,h+te)}}}_e(),ue();function _e(){const R=i.length/3;if(f){let le=0,te=W*le;for(let O=0;O<q;O++){const J=Re[O];Oe(J[2]+te,J[1]+te,J[0]+te)}le=u+m*2,te=W*le;for(let O=0;O<q;O++){const J=Re[O];Oe(J[0]+te,J[1]+te,J[2]+te)}}else{for(let le=0;le<q;le++){const te=Re[le];Oe(te[2],te[1],te[0])}for(let le=0;le<q;le++){const te=Re[le];Oe(te[0]+W*u,te[1]+W*u,te[2]+W*u)}}n.addGroup(R,i.length/3-R,0)}function ue(){const R=i.length/3;let le=0;Ee(Y,le),le+=Y.length;for(let te=0,O=D.length;te<O;te++){const J=D[te];Ee(J,le),le+=J.length}n.addGroup(R,i.length/3-R,1)}function Ee(R,le){let te=R.length;for(;--te>=0;){const O=te;let J=te-1;J<0&&(J=R.length-1);for(let Me=0,ae=u+m*2;Me<ae;Me++){const fe=W*Me,We=W*(Me+1),P=le+O+fe,b=le+J+fe,G=le+J+We,Z=le+O+We;tt(P,b,G,Z)}}}function Be(R,le,te){l.push(R),l.push(le),l.push(te)}function Oe(R,le,te){Ze(R),Ze(le),Ze(te);const O=i.length/3,J=S.generateTopUV(n,i,O-3,O-2,O-1);ye(J[0]),ye(J[1]),ye(J[2])}function tt(R,le,te,O){Ze(R),Ze(le),Ze(O),Ze(le),Ze(te),Ze(O);const J=i.length/3,Me=S.generateSideWallUV(n,i,J-6,J-3,J-2,J-1);ye(Me[0]),ye(Me[1]),ye(Me[3]),ye(Me[1]),ye(Me[2]),ye(Me[3])}function Ze(R){i.push(l[R*3+0]),i.push(l[R*3+1]),i.push(l[R*3+2])}function ye(R){s.push(R.x),s.push(R.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Yy(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new hf[i.type]().fromJSON(i)),new D_(n,e.options)}}const Xy={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new he(s,o),new he(a,l),new he(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],d=e[i*3+1],g=e[i*3+2],_=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new he(o,1-l),new he(c,1-h),new he(f,1-g),new he(_,1-p)]:[new he(a,1-l),new he(u,1-h),new he(d,1-g),new he(m,1-p)]}};function Yy(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ls extends pi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const S=p*f-o;for(let y=0;y<c;y++){const x=y*h-s;g.push(x,-S,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const y=S+c*p,x=S+c*(p+1),A=S+1+c*(p+1),E=S+1+c*p;d.push(y,x,E),d.push(x,A,E)}this.setIndex(d),this.setAttribute("position",new Hn(g,3)),this.setAttribute("normal",new Hn(_,3)),this.setAttribute("uv",new Hn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.width,e.height,e.widthSegments,e.heightSegments)}}class jy extends Jr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=o_,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ir,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class DC extends jy{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class qy extends Jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zy extends Jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Zl(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function $y(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Jy(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Gp(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function N_(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class au{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ky extends au{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kd,endingEnd:Kd}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Qd:s=e,a=2*t-n;break;case ep:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Qd:o=e,l=2*n-t;break;case ep:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,S=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*_+.5*g,x=d*m-d*_;for(let A=0;A!==a;++A)s[A]=p*o[u+A]+S*o[c+A]+y*o[l+A]+x*o[h+A];return s}}class Qy extends au{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class eM extends au{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Vi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zl(t,this.TimeBufferType),this.values=Zl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zl(e.times,Array),values:Zl(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new eM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ky(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Nc:t=this.InterpolantFactoryMethodDiscrete;break;case lf:t=this.InterpolantFactoryMethodLinear;break;case vu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nc;case this.InterpolantFactoryMethodLinear:return lf;case this.InterpolantFactoryMethodSmooth:return vu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&$y(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===vu,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Vi.prototype.ValueTypeName="";Vi.prototype.TimeBufferType=Float32Array;Vi.prototype.ValueBufferType=Float32Array;Vi.prototype.DefaultInterpolation=lf;class Zo extends Vi{constructor(e,t,n){super(e,t,n)}}Zo.prototype.ValueTypeName="bool";Zo.prototype.ValueBufferType=Array;Zo.prototype.DefaultInterpolation=Nc;Zo.prototype.InterpolantFactoryMethodLinear=void 0;Zo.prototype.InterpolantFactoryMethodSmooth=void 0;class I_ extends Vi{constructor(e,t,n,i){super(e,t,n,i)}}I_.prototype.ValueTypeName="color";class zc extends Vi{constructor(e,t,n,i){super(e,t,n,i)}}zc.prototype.ValueTypeName="number";class tM extends au{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)qo.slerpFlat(s,0,o,c-a,o,c,l);return s}}class lu extends Vi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new tM(this.times,this.values,this.getValueSize(),e)}}lu.prototype.ValueTypeName="quaternion";lu.prototype.InterpolantFactoryMethodSmooth=void 0;class $o extends Vi{constructor(e,t,n){super(e,t,n)}}$o.prototype.ValueTypeName="string";$o.prototype.ValueBufferType=Array;$o.prototype.DefaultInterpolation=Nc;$o.prototype.InterpolantFactoryMethodLinear=void 0;$o.prototype.InterpolantFactoryMethodSmooth=void 0;class Bc extends Vi{constructor(e,t,n,i){super(e,t,n,i)}}Bc.prototype.ValueTypeName="vector";class NC{constructor(e="",t=-1,n=[],i=ex){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ai(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(iM(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Vi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=Jy(l);l=Gp(l,1,u),c=Gp(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new zc(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];N_(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let S=0;S!==f[g].morphTargets.length;++S){const y=f[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}i.push(new zc(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(Bc,d+".position",f,"pos",i),n(lu,d+".quaternion",f,"rot",i),n(Bc,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function nM(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return zc;case"vector":case"vector2":case"vector3":case"vector4":return Bc;case"color":return I_;case"quaternion":return lu;case"bool":case"boolean":return Zo;case"string":return $o}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function iM(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=nM(r.type);if(r.times===void 0){const t=[],n=[];N_(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const vr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class rM{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const sM=new rM;class gl{constructor(e){this.manager=e!==void 0?e:sM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}gl.DEFAULT_MATERIAL_NAME="__DEFAULT";const hr={};class oM extends Error{constructor(e,t){super(e),this.response=t}}class IC extends gl{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=vr.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(hr[e]!==void 0){hr[e].push({onLoad:t,onProgress:n,onError:i});return}hr[e]=[],hr[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=hr[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){S();function S(){h.read().then(({done:y,value:x})=>{if(y)p.close();else{_+=x.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let E=0,T=u.length;E<T;E++){const C=u[E];C.onProgress&&C.onProgress(A)}p.enqueue(x),S()}},y=>{p.error(y)})}}});return new Response(m)}else throw new oM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{vr.add(`file:${e}`,c);const u=hr[e];delete hr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=hr[e];if(u===void 0)throw this.manager.itemError(e),c;delete hr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}const ro=new WeakMap;class aM extends gl{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=vr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=ro.get(o);h===void 0&&(h=[],ro.set(o,h)),h.push({onLoad:t,onError:i})}return o}const a=Ka("img");function l(){u(),t&&t(this);const h=ro.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}ro.delete(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),vr.remove(`image:${e}`);const f=ro.get(this)||[];for(let d=0;d<f.length;d++){const g=f[d];g.onError&&g.onError(h)}ro.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),vr.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class lM extends gl{constructor(e){super(e)}load(e,t,n,i){const s=new mn,o=new aM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class cu extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class cM extends cu{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const qu=new at,Wp=new U,Xp=new U;class ud{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=nr,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ad,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wp),Xp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xp),t.updateMatrixWorld(),qu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class uM extends ud{constructor(){super(new zn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Fo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class LC extends cu{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new uM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Yp=new at,ca=new U,Zu=new U;class hM extends ud{constructor(){super(new zn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ca.setFromMatrixPosition(e.matrixWorld),n.position.copy(ca),Zu.copy(n.position),Zu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Zu),n.updateMatrixWorld(),i.makeTranslation(-ca.x,-ca.y,-ca.z),Yp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yp)}}class OC extends cu{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new hM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class L_ extends m_{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class fM extends ud{constructor(){super(new L_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dM extends cu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new fM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class UC{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const $u=new WeakMap;class FC extends gl{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=vr.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{if($u.has(o)===!0)i&&i($u.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return vr.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),$u.set(l,c),vr.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});vr.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}}class pM extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const hd="\\[\\]\\.:\\/",mM=new RegExp("["+hd+"]","g"),fd="[^"+hd+"]",gM="[^"+hd.replace("\\.","")+"]",_M=/((?:WC+[\/:])*)/.source.replace("WC",fd),vM=/(WCOD+)?/.source.replace("WCOD",gM),xM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fd),yM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fd),MM=new RegExp("^"+_M+vM+xM+yM+"$"),SM=["material","materials","bones","map"];class TM{constructor(e,t,n){const i=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class At{constructor(e,t,n){this.path=t,this.parsedPath=n||At.parseTrackName(t),this.node=At.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new At.Composite(e,t,n):new At(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mM,"")}static parseTrackName(e){const t=MM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);SM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=At.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}At.Composite=TM;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function jp(r,e,t,n){const i=bM(n);switch(t){case n_:return r*e;case Qf:return r*e/i.components*i.byteLength;case ed:return r*e/i.components*i.byteLength;case r_:return r*e*2/i.components*i.byteLength;case td:return r*e*2/i.components*i.byteLength;case i_:return r*e*3/i.components*i.byteLength;case bi:return r*e*4/i.components*i.byteLength;case nd:return r*e*4/i.components*i.byteLength;case mc:case gc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case _c:case vc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Uh:case zh:return Math.max(r,16)*Math.max(e,8)/4;case Oh:case Fh:return Math.max(r,8)*Math.max(e,8)/2;case Bh:case kh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Vh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Wh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case jh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case qh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case $h:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Kh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Qh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ef:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case tf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case xc:case nf:case rf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case s_:case sf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case of:case af:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bM(r){switch(r){case nr:case Qg:return{byteLength:1,components:1};case qa:case e_:case pl:return{byteLength:2,components:1};case Jf:case Kf:return{byteLength:2,components:4};case Ds:case $f:case Bi:return{byteLength:4,components:1};case t_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zf);function O_(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function EM(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var wM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,CM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,DM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,IM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,OM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,UM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,BM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ZM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$M=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,JM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,KM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nS="gl_FragColor = linearToOutputTexel( gl_FragColor );",iS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,aS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_S=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ES=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,AS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,NS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,IS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,OS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,US=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,BS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,HS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,WS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,XS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ZS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$S=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,tT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,lT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,uT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_T=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,MT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ST=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ET=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,NT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,IT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,LT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,OT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,WT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,YT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$T=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,eb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ib=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:wM,alphahash_pars_fragment:AM,alphamap_fragment:CM,alphamap_pars_fragment:RM,alphatest_fragment:PM,alphatest_pars_fragment:DM,aomap_fragment:NM,aomap_pars_fragment:IM,batching_pars_vertex:LM,batching_vertex:OM,begin_vertex:UM,beginnormal_vertex:FM,bsdfs:zM,iridescence_fragment:BM,bumpmap_pars_fragment:kM,clipping_planes_fragment:VM,clipping_planes_pars_fragment:HM,clipping_planes_pars_vertex:GM,clipping_planes_vertex:WM,color_fragment:XM,color_pars_fragment:YM,color_pars_vertex:jM,color_vertex:qM,common:ZM,cube_uv_reflection_fragment:$M,defaultnormal_vertex:JM,displacementmap_pars_vertex:KM,displacementmap_vertex:QM,emissivemap_fragment:eS,emissivemap_pars_fragment:tS,colorspace_fragment:nS,colorspace_pars_fragment:iS,envmap_fragment:rS,envmap_common_pars_fragment:sS,envmap_pars_fragment:oS,envmap_pars_vertex:aS,envmap_physical_pars_fragment:vS,envmap_vertex:lS,fog_vertex:cS,fog_pars_vertex:uS,fog_fragment:hS,fog_pars_fragment:fS,gradientmap_pars_fragment:dS,lightmap_pars_fragment:pS,lights_lambert_fragment:mS,lights_lambert_pars_fragment:gS,lights_pars_begin:_S,lights_toon_fragment:xS,lights_toon_pars_fragment:yS,lights_phong_fragment:MS,lights_phong_pars_fragment:SS,lights_physical_fragment:TS,lights_physical_pars_fragment:bS,lights_fragment_begin:ES,lights_fragment_maps:wS,lights_fragment_end:AS,logdepthbuf_fragment:CS,logdepthbuf_pars_fragment:RS,logdepthbuf_pars_vertex:PS,logdepthbuf_vertex:DS,map_fragment:NS,map_pars_fragment:IS,map_particle_fragment:LS,map_particle_pars_fragment:OS,metalnessmap_fragment:US,metalnessmap_pars_fragment:FS,morphinstance_vertex:zS,morphcolor_vertex:BS,morphnormal_vertex:kS,morphtarget_pars_vertex:VS,morphtarget_vertex:HS,normal_fragment_begin:GS,normal_fragment_maps:WS,normal_pars_fragment:XS,normal_pars_vertex:YS,normal_vertex:jS,normalmap_pars_fragment:qS,clearcoat_normal_fragment_begin:ZS,clearcoat_normal_fragment_maps:$S,clearcoat_pars_fragment:JS,iridescence_pars_fragment:KS,opaque_fragment:QS,packing:eT,premultiplied_alpha_fragment:tT,project_vertex:nT,dithering_fragment:iT,dithering_pars_fragment:rT,roughnessmap_fragment:sT,roughnessmap_pars_fragment:oT,shadowmap_pars_fragment:aT,shadowmap_pars_vertex:lT,shadowmap_vertex:cT,shadowmask_pars_fragment:uT,skinbase_vertex:hT,skinning_pars_vertex:fT,skinning_vertex:dT,skinnormal_vertex:pT,specularmap_fragment:mT,specularmap_pars_fragment:gT,tonemapping_fragment:_T,tonemapping_pars_fragment:vT,transmission_fragment:xT,transmission_pars_fragment:yT,uv_pars_fragment:MT,uv_pars_vertex:ST,uv_vertex:TT,worldpos_vertex:bT,background_vert:ET,background_frag:wT,backgroundCube_vert:AT,backgroundCube_frag:CT,cube_vert:RT,cube_frag:PT,depth_vert:DT,depth_frag:NT,distanceRGBA_vert:IT,distanceRGBA_frag:LT,equirect_vert:OT,equirect_frag:UT,linedashed_vert:FT,linedashed_frag:zT,meshbasic_vert:BT,meshbasic_frag:kT,meshlambert_vert:VT,meshlambert_frag:HT,meshmatcap_vert:GT,meshmatcap_frag:WT,meshnormal_vert:XT,meshnormal_frag:YT,meshphong_vert:jT,meshphong_frag:qT,meshphysical_vert:ZT,meshphysical_frag:$T,meshtoon_vert:JT,meshtoon_frag:KT,points_vert:QT,points_frag:eb,shadow_vert:tb,shadow_frag:nb,sprite_vert:ib,sprite_frag:rb},be={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},$i={basic:{uniforms:Dn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Dn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new et(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Dn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Dn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Dn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new et(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Dn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Dn([be.points,be.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Dn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Dn([be.common,be.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Dn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Dn([be.sprite,be.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:Dn([be.common,be.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:Dn([be.lights,be.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};$i.physical={uniforms:Dn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const $l={r:0,b:0,g:0},ss=new ir,sb=new at;function ob(r,e,t,n,i,s,o){const a=new et(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function _(y){let x=!1;const A=g(y);A===null?p(a,l):A&&A.isColor&&(p(A,1),x=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,x){const A=g(x);A&&(A.isCubeTexture||A.mapping===iu)?(u===void 0&&(u=new bn(new ml(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:zo($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ss.copy(x.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(sb.makeRotationFromEuler(ss)),u.material.toneMapped=dt.getTransfer(A.colorSpace)!==wt,(h!==A||f!==A.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=A,f=A.version,d=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new bn(new Ls(2,2),new ki({name:"BackgroundMaterial",uniforms:zo($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:Xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=dt.getTransfer(A.colorSpace)!==wt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=A,f=A.version,d=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,x){y.getRGB($l,p_(r)),n.buffers.color.setClear($l.r,$l.g,$l.b,x,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:m,dispose:S}}function ab(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(v,D,L,F,k){let Y=!1;const V=h(F,L,D);s!==V&&(s=V,c(s.object)),Y=d(v,F,L,k),Y&&g(v,F,L,k),k!==null&&e.update(k,r.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,x(v,D,L,F),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function h(v,D,L){const F=L.wireframe===!0;let k=n[v.id];k===void 0&&(k={},n[v.id]=k);let Y=k[D.id];Y===void 0&&(Y={},k[D.id]=Y);let V=Y[F];return V===void 0&&(V=f(l()),Y[F]=V),V}function f(v){const D=[],L=[],F=[];for(let k=0;k<t;k++)D[k]=0,L[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:L,attributeDivisors:F,object:v,attributes:{},index:null}}function d(v,D,L,F){const k=s.attributes,Y=D.attributes;let V=0;const W=L.getAttributes();for(const z in W)if(W[z].location>=0){const N=k[z];let ce=Y[z];if(ce===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(ce=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(ce=v.instanceColor)),N===void 0||N.attribute!==ce||ce&&N.data!==ce.data)return!0;V++}return s.attributesNum!==V||s.index!==F}function g(v,D,L,F){const k={},Y=D.attributes;let V=0;const W=L.getAttributes();for(const z in W)if(W[z].location>=0){let N=Y[z];N===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(N=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(N=v.instanceColor));const ce={};ce.attribute=N,N&&N.data&&(ce.data=N.data),k[z]=ce,V++}s.attributes=k,s.attributesNum=V,s.index=F}function _(){const v=s.newAttributes;for(let D=0,L=v.length;D<L;D++)v[D]=0}function m(v){p(v,0)}function p(v,D){const L=s.newAttributes,F=s.enabledAttributes,k=s.attributeDivisors;L[v]=1,F[v]===0&&(r.enableVertexAttribArray(v),F[v]=1),k[v]!==D&&(r.vertexAttribDivisor(v,D),k[v]=D)}function S(){const v=s.newAttributes,D=s.enabledAttributes;for(let L=0,F=D.length;L<F;L++)D[L]!==v[L]&&(r.disableVertexAttribArray(L),D[L]=0)}function y(v,D,L,F,k,Y,V){V===!0?r.vertexAttribIPointer(v,D,L,k,Y):r.vertexAttribPointer(v,D,L,F,k,Y)}function x(v,D,L,F){_();const k=F.attributes,Y=L.getAttributes(),V=D.defaultAttributeValues;for(const W in Y){const z=Y[W];if(z.location>=0){let Q=k[W];if(Q===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(Q=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(Q=v.instanceColor)),Q!==void 0){const N=Q.normalized,ce=Q.itemSize,Pe=e.get(Q);if(Pe===void 0)continue;const Re=Pe.buffer,q=Pe.type,re=Pe.bytesPerElement,_e=q===r.INT||q===r.UNSIGNED_INT||Q.gpuType===$f;if(Q.isInterleavedBufferAttribute){const ue=Q.data,Ee=ue.stride,Be=Q.offset;if(ue.isInstancedInterleavedBuffer){for(let Oe=0;Oe<z.locationSize;Oe++)p(z.location+Oe,ue.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Oe=0;Oe<z.locationSize;Oe++)m(z.location+Oe);r.bindBuffer(r.ARRAY_BUFFER,Re);for(let Oe=0;Oe<z.locationSize;Oe++)y(z.location+Oe,ce/z.locationSize,q,N,Ee*re,(Be+ce/z.locationSize*Oe)*re,_e)}else{if(Q.isInstancedBufferAttribute){for(let ue=0;ue<z.locationSize;ue++)p(z.location+ue,Q.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ue=0;ue<z.locationSize;ue++)m(z.location+ue);r.bindBuffer(r.ARRAY_BUFFER,Re);for(let ue=0;ue<z.locationSize;ue++)y(z.location+ue,ce/z.locationSize,q,N,ce*re,ce/z.locationSize*ue*re,_e)}}else if(V!==void 0){const N=V[W];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(z.location,N);break;case 3:r.vertexAttrib3fv(z.location,N);break;case 4:r.vertexAttrib4fv(z.location,N);break;default:r.vertexAttrib1fv(z.location,N)}}}}S()}function A(){C();for(const v in n){const D=n[v];for(const L in D){const F=D[L];for(const k in F)u(F[k].object),delete F[k];delete D[L]}delete n[v]}}function E(v){if(n[v.id]===void 0)return;const D=n[v.id];for(const L in D){const F=D[L];for(const k in F)u(F[k].object),delete F[k];delete D[L]}delete n[v.id]}function T(v){for(const D in n){const L=n[D];if(L[v.id]===void 0)continue;const F=L[v.id];for(const k in F)u(F[k].object),delete F[k];delete L[v.id]}}function C(){M(),o=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function lb(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function cb(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==bi&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const C=T===pl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==nr&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Bi&&!C)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,E=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:A,maxSamples:E}}function ub(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new cs,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const S=s?0:n,y=S*4;let x=p.clippingState||null;l.value=x,x=u(g,f,y,d);for(let A=0;A!==y;++A)x[A]=t[A];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=d;y!==_;++y,x+=4)o.copy(h[y]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function hb(r){let e=new WeakMap;function t(o,a){return a===Dh?o.mapping=Lo:a===Nh&&(o.mapping=Oo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Dh||a===Nh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Qx(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const go=4,qp=[.125,.215,.35,.446,.526,.582],vs=20,Ju=new L_,Zp=new et;let Ku=null,Qu=0,eh=0,th=!1;const us=(1+Math.sqrt(5))/2,so=1/us,$p=[new U(-us,so,0),new U(us,so,0),new U(-so,0,us),new U(so,0,us),new U(0,us,-so),new U(0,us,so),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],fb=new U;class Jp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=fb}=s;Ku=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=em(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ku,Qu,eh),this._renderer.xr.enabled=th,e.scissorTest=!1,Jl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Lo||e.mapping===Oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ku=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:pl,format:bi,colorSpace:Uo,depthBuffer:!1},i=Kp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kp(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=db(s)),this._blurMaterial=pb(s,e,t)}return i}_compileMaterial(e){const t=new bn(this._lodPlanes[0],e);this._renderer.compile(t,Ju)}_sceneToCubeUV(e,t,n,i,s){const l=new zn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Zp),h.toneMapping=Vr,h.autoClear=!1;const g=new su({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),_=new bn(new ml,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(Zp),m=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const x=this._cubeSize;Jl(i,y*x,S>2?x:0,x,x),h.setRenderTarget(i),m&&h.render(_,l),h.render(e,l)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Lo||e.mapping===Oo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=em()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qp());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new bn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Jl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ju)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=$p[(i-s-1)%$p.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new bn(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*vs-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):vs;m>vs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vs}`);const p=[];let S=0;for(let T=0;T<vs;++T){const C=T/_,M=Math.exp(-C*C/2);p.push(M),T===0?S+=M:T<m&&(S+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const x=this._sizeLods[i],A=3*x*(i>y-go?i-y+go:0),E=4*(this._cubeSize-x);Jl(t,A,E,3*x,2*x),l.setRenderTarget(t),l.render(h,Ju)}}function db(r){const e=[],t=[],n=[];let i=r;const s=r-go+1+qp.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-go?l=qp[o-r+go-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*d),y=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let E=0;E<d;E++){const T=E%3*2/3-1,C=E>2?0:-1,M=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];S.set(M,_*g*E),y.set(f,m*g*E);const v=[E,E,E,E,E,E];x.set(v,p*g*E)}const A=new pi;A.setAttribute("position",new Qt(S,_)),A.setAttribute("uv",new Qt(y,m)),A.setAttribute("faceIndex",new Qt(x,p)),e.push(A),i>go&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Kp(r,e,t){const n=new Ns(r,e,t);return n.texture.mapping=iu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jl(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function pb(r,e,t){const n=new Float32Array(vs),i=new U(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function Qp(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function em(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function dd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mb(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Dh||l===Nh,u=l===Lo||l===Oo;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Jp(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Jp(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function gb(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&So("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _b(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],r.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let y=0,x=S.length;y<x;y+=3){const A=S[y+0],E=S[y+1],T=S[y+2];f.push(A,E,E,T,T,A)}}else if(g!==void 0){const S=g.array;_=g.version;for(let y=0,x=S.length/3-1;y<x;y+=3){const A=y+0,E=y+1,T=y+2;f.push(A,E,E,T,T,A)}}else return;const m=new(l_(f)?d_:f_)(f,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function vb(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*o,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*_[S];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function xb(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function yb(r,e,t){const n=new WeakMap,i=new pt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let M=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let y=0;d===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,A=1;x>e.maxTextureSize&&(A=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const E=new Float32Array(x*A*4*h),T=new c_(E,x,A,h);T.type=Bi,T.needsUpdate=!0;const C=y*4;for(let v=0;v<h;v++){const D=m[v],L=p[v],F=S[v],k=x*A*4*v;for(let Y=0;Y<D.count;Y++){const V=Y*C;d===!0&&(i.fromBufferAttribute(D,Y),E[k+V+0]=i.x,E[k+V+1]=i.y,E[k+V+2]=i.z,E[k+V+3]=0),g===!0&&(i.fromBufferAttribute(L,Y),E[k+V+4]=i.x,E[k+V+5]=i.y,E[k+V+6]=i.z,E[k+V+7]=0),_===!0&&(i.fromBufferAttribute(F,Y),E[k+V+8]=i.x,E[k+V+9]=i.y,E[k+V+10]=i.z,E[k+V+11]=F.itemSize===4?i.w:1)}}f={count:h,texture:T,size:new he(x,A)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Mb(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const U_=new mn,tm=new S_(1,1),F_=new c_,z_=new Ux,B_=new g_,nm=[],im=[],rm=new Float32Array(16),sm=new Float32Array(9),om=new Float32Array(4);function Jo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=nm[i];if(s===void 0&&(s=new Float32Array(i),nm[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function an(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ln(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function uu(r,e){let t=im[e];t===void 0&&(t=new Int32Array(e),im[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Sb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Tb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2fv(this.addr,e),ln(t,e)}}function bb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;r.uniform3fv(this.addr,e),ln(t,e)}}function Eb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4fv(this.addr,e),ln(t,e)}}function wb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;om.set(n),r.uniformMatrix2fv(this.addr,!1,om),ln(t,n)}}function Ab(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;sm.set(n),r.uniformMatrix3fv(this.addr,!1,sm),ln(t,n)}}function Cb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;rm.set(n),r.uniformMatrix4fv(this.addr,!1,rm),ln(t,n)}}function Rb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Pb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2iv(this.addr,e),ln(t,e)}}function Db(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3iv(this.addr,e),ln(t,e)}}function Nb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4iv(this.addr,e),ln(t,e)}}function Ib(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Lb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2uiv(this.addr,e),ln(t,e)}}function Ob(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3uiv(this.addr,e),ln(t,e)}}function Ub(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4uiv(this.addr,e),ln(t,e)}}function Fb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(tm.compareFunction=a_,s=tm):s=U_,t.setTexture2D(e||s,i)}function zb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||z_,i)}function Bb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||B_,i)}function kb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||F_,i)}function Vb(r){switch(r){case 5126:return Sb;case 35664:return Tb;case 35665:return bb;case 35666:return Eb;case 35674:return wb;case 35675:return Ab;case 35676:return Cb;case 5124:case 35670:return Rb;case 35667:case 35671:return Pb;case 35668:case 35672:return Db;case 35669:case 35673:return Nb;case 5125:return Ib;case 36294:return Lb;case 36295:return Ob;case 36296:return Ub;case 35678:case 36198:case 36298:case 36306:case 35682:return Fb;case 35679:case 36299:case 36307:return zb;case 35680:case 36300:case 36308:case 36293:return Bb;case 36289:case 36303:case 36311:case 36292:return kb}}function Hb(r,e){r.uniform1fv(this.addr,e)}function Gb(r,e){const t=Jo(e,this.size,2);r.uniform2fv(this.addr,t)}function Wb(r,e){const t=Jo(e,this.size,3);r.uniform3fv(this.addr,t)}function Xb(r,e){const t=Jo(e,this.size,4);r.uniform4fv(this.addr,t)}function Yb(r,e){const t=Jo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function jb(r,e){const t=Jo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function qb(r,e){const t=Jo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Zb(r,e){r.uniform1iv(this.addr,e)}function $b(r,e){r.uniform2iv(this.addr,e)}function Jb(r,e){r.uniform3iv(this.addr,e)}function Kb(r,e){r.uniform4iv(this.addr,e)}function Qb(r,e){r.uniform1uiv(this.addr,e)}function eE(r,e){r.uniform2uiv(this.addr,e)}function tE(r,e){r.uniform3uiv(this.addr,e)}function nE(r,e){r.uniform4uiv(this.addr,e)}function iE(r,e,t){const n=this.cache,i=e.length,s=uu(t,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||U_,s[o])}function rE(r,e,t){const n=this.cache,i=e.length,s=uu(t,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||z_,s[o])}function sE(r,e,t){const n=this.cache,i=e.length,s=uu(t,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||B_,s[o])}function oE(r,e,t){const n=this.cache,i=e.length,s=uu(t,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||F_,s[o])}function aE(r){switch(r){case 5126:return Hb;case 35664:return Gb;case 35665:return Wb;case 35666:return Xb;case 35674:return Yb;case 35675:return jb;case 35676:return qb;case 5124:case 35670:return Zb;case 35667:case 35671:return $b;case 35668:case 35672:return Jb;case 35669:case 35673:return Kb;case 5125:return Qb;case 36294:return eE;case 36295:return tE;case 36296:return nE;case 35678:case 36198:case 36298:case 36306:case 35682:return iE;case 35679:case 36299:case 36307:return rE;case 35680:case 36300:case 36308:case 36293:return sE;case 36289:case 36303:case 36311:case 36292:return oE}}class lE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Vb(t.type)}}class cE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=aE(t.type)}}class uE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const nh=/(\w+)(\])?(\[|\.)?/g;function am(r,e){r.seq.push(e),r.map[e.id]=e}function hE(r,e,t){const n=r.name,i=n.length;for(nh.lastIndex=0;;){const s=nh.exec(n),o=nh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){am(t,c===void 0?new lE(a,r,e):new cE(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new uE(a),am(t,h)),t=h}}}class yc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);hE(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function lm(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const fE=37297;let dE=0;function pE(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const cm=new it;function mE(r){dt._getMatrix(cm,dt.workingColorSpace,r);const e=`mat3( ${cm.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(r)){case Ic:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function um(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+pE(r.getShaderSource(e),o)}else return i}function gE(r,e){const t=mE(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function _E(r,e){let t;switch(e){case Yv:t="Linear";break;case jv:t="Reinhard";break;case qv:t="Cineon";break;case Jg:t="ACESFilmic";break;case $v:t="AgX";break;case Jv:t="Neutral";break;case Zv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Kl=new U;function vE(){dt.getLuminanceCoefficients(Kl);const r=Kl.x.toFixed(4),e=Kl.y.toFixed(4),t=Kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xE(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function yE(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ME(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function ga(r){return r!==""}function hm(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SE=/^[ \t]*#include +<([\w\d./]+)>/gm;function pf(r){return r.replace(SE,bE)}const TE=new Map;function bE(r,e){let t=rt[e];if(t===void 0){const n=TE.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return pf(t)}const EE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dm(r){return r.replace(EE,wE)}function wE(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function pm(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function AE(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===qg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Zg?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===dr&&(e="SHADOWMAP_TYPE_VSM"),e}function CE(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Lo:case Oo:e="ENVMAP_TYPE_CUBE";break;case iu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function RE(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Oo&&(e="ENVMAP_MODE_REFRACTION"),e}function PE(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case $g:e="ENVMAP_BLENDING_MULTIPLY";break;case Wv:e="ENVMAP_BLENDING_MIX";break;case Xv:e="ENVMAP_BLENDING_ADD";break}return e}function DE(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function NE(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=AE(t),c=CE(t),u=RE(t),h=PE(t),f=DE(t),d=xE(t),g=yE(s),_=i.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ga).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ga).join(`
`),p.length>0&&(p+=`
`)):(m=[pm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),p=[pm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vr?"#define TONE_MAPPING":"",t.toneMapping!==Vr?rt.tonemapping_pars_fragment:"",t.toneMapping!==Vr?_E("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,gE("linearToOutputTexel",t.outputColorSpace),vE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ga).join(`
`)),o=pf(o),o=hm(o,t),o=fm(o,t),a=pf(a),a=hm(a,t),a=fm(a,t),o=dm(o),a=dm(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===np?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===np?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=S+m+o,x=S+p+a,A=lm(i,i.VERTEX_SHADER,y),E=lm(i,i.FRAGMENT_SHADER,x);i.attachShader(_,A),i.attachShader(_,E),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(D){if(r.debug.checkShaderErrors){const L=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(A).trim(),k=i.getShaderInfoLog(E).trim();let Y=!0,V=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,E);else{const W=um(i,A,"vertex"),z=um(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+L+`
`+W+`
`+z)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(F===""||k==="")&&(V=!1);V&&(D.diagnostics={runnable:Y,programLog:L,vertexShader:{log:F,prefix:m},fragmentShader:{log:k,prefix:p}})}i.deleteShader(A),i.deleteShader(E),C=new yc(i,_),M=ME(i,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,fE)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dE++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=E,this}let IE=0;class LE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new OE(e),t.set(e,n)),n}}class OE{constructor(e){this.id=IE++,this.code=e,this.usedTimes=0}}function UE(r,e,t,n,i,s,o){const a=new u_,l=new LE,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,v,D,L,F){const k=L.fog,Y=F.geometry,V=M.isMeshStandardMaterial?L.environment:null,W=(M.isMeshStandardMaterial?t:e).get(M.envMap||V),z=W&&W.mapping===iu?W.image.height:null,Q=g[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const N=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ce=N!==void 0?N.length:0;let Pe=0;Y.morphAttributes.position!==void 0&&(Pe=1),Y.morphAttributes.normal!==void 0&&(Pe=2),Y.morphAttributes.color!==void 0&&(Pe=3);let Re,q,re,_e;if(Q){const Ae=$i[Q];Re=Ae.vertexShader,q=Ae.fragmentShader}else Re=M.vertexShader,q=M.fragmentShader,l.update(M),re=l.getVertexShaderID(M),_e=l.getFragmentShaderID(M);const ue=r.getRenderTarget(),Ee=r.state.buffers.depth.getReversed(),Be=F.isInstancedMesh===!0,Oe=F.isBatchedMesh===!0,tt=!!M.map,Ze=!!M.matcap,ye=!!W,R=!!M.aoMap,le=!!M.lightMap,te=!!M.bumpMap,O=!!M.normalMap,J=!!M.displacementMap,Me=!!M.emissiveMap,ae=!!M.metalnessMap,fe=!!M.roughnessMap,We=M.anisotropy>0,P=M.clearcoat>0,b=M.dispersion>0,G=M.iridescence>0,Z=M.sheen>0,K=M.transmission>0,$=We&&!!M.anisotropyMap,we=P&&!!M.clearcoatMap,de=P&&!!M.clearcoatNormalMap,Ne=P&&!!M.clearcoatRoughnessMap,me=G&&!!M.iridescenceMap,ie=G&&!!M.iridescenceThicknessMap,Se=Z&&!!M.sheenColorMap,Ge=Z&&!!M.sheenRoughnessMap,Ve=!!M.specularMap,pe=!!M.specularColorMap,Ye=!!M.specularIntensityMap,I=K&&!!M.transmissionMap,ge=K&&!!M.thicknessMap,ne=!!M.gradientMap,Te=!!M.alphaMap,se=M.alphaTest>0,ee=!!M.alphaHash,De=!!M.extensions;let Xe=Vr;M.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Xe=r.toneMapping);const gt={shaderID:Q,shaderType:M.type,shaderName:M.name,vertexShader:Re,fragmentShader:q,defines:M.defines,customVertexShaderID:re,customFragmentShaderID:_e,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Oe,batchingColor:Oe&&F._colorsTexture!==null,instancing:Be,instancingColor:Be&&F.instanceColor!==null,instancingMorph:Be&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ue===null?r.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Uo,alphaToCoverage:!!M.alphaToCoverage,map:tt,matcap:Ze,envMap:ye,envMapMode:ye&&W.mapping,envMapCubeUVHeight:z,aoMap:R,lightMap:le,bumpMap:te,normalMap:O,displacementMap:f&&J,emissiveMap:Me,normalMapObjectSpace:O&&M.normalMapType===ix,normalMapTangentSpace:O&&M.normalMapType===o_,metalnessMap:ae,roughnessMap:fe,anisotropy:We,anisotropyMap:$,clearcoat:P,clearcoatMap:we,clearcoatNormalMap:de,clearcoatRoughnessMap:Ne,dispersion:b,iridescence:G,iridescenceMap:me,iridescenceThicknessMap:ie,sheen:Z,sheenColorMap:Se,sheenRoughnessMap:Ge,specularMap:Ve,specularColorMap:pe,specularIntensityMap:Ye,transmission:K,transmissionMap:I,thicknessMap:ge,gradientMap:ne,opaque:M.transparent===!1&&M.blending===Mo&&M.alphaToCoverage===!1,alphaMap:Te,alphaTest:se,alphaHash:ee,combine:M.combine,mapUv:tt&&_(M.map.channel),aoMapUv:R&&_(M.aoMap.channel),lightMapUv:le&&_(M.lightMap.channel),bumpMapUv:te&&_(M.bumpMap.channel),normalMapUv:O&&_(M.normalMap.channel),displacementMapUv:J&&_(M.displacementMap.channel),emissiveMapUv:Me&&_(M.emissiveMap.channel),metalnessMapUv:ae&&_(M.metalnessMap.channel),roughnessMapUv:fe&&_(M.roughnessMap.channel),anisotropyMapUv:$&&_(M.anisotropyMap.channel),clearcoatMapUv:we&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:de&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&_(M.sheenRoughnessMap.channel),specularMapUv:Ve&&_(M.specularMap.channel),specularColorMapUv:pe&&_(M.specularColorMap.channel),specularIntensityMapUv:Ye&&_(M.specularIntensityMap.channel),transmissionMapUv:I&&_(M.transmissionMap.channel),thicknessMapUv:ge&&_(M.thicknessMap.channel),alphaMapUv:Te&&_(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(O||We),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&(tt||Te),fog:!!k,useFog:M.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ee,skinning:F.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Pe,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:Xe,decodeVideoTexture:tt&&M.map.isVideoTexture===!0&&dt.getTransfer(M.map.colorSpace)===wt,decodeVideoTextureEmissive:Me&&M.emissiveMap.isVideoTexture===!0&&dt.getTransfer(M.emissiveMap.colorSpace)===wt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Fi,flipSided:M.side===Vn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:De&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&M.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return gt.vertexUv1s=c.has(1),gt.vertexUv2s=c.has(2),gt.vertexUv3s=c.has(3),c.clear(),gt}function p(M){const v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)v.push(D),v.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(S(v,M),y(v,M),v.push(r.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function S(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function y(M,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){const v=g[M.type];let D;if(v){const L=$i[v];D=Zx.clone(L.uniforms)}else D=M.uniforms;return D}function A(M,v){let D;for(let L=0,F=u.length;L<F;L++){const k=u[L];if(k.cacheKey===v){D=k,++D.usedTimes;break}}return D===void 0&&(D=new NE(r,v,M,s),u.push(D)),D}function E(M){if(--M.usedTimes===0){const v=u.indexOf(M);u[v]=u[u.length-1],u.pop(),M.destroy()}}function T(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:A,releaseProgram:E,releaseShaderCache:T,programs:u,dispose:C}}function FE(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function zE(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function mm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function gm(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,g,_,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||zE),n.length>1&&n.sort(f||mm),i.length>1&&i.sort(f||mm)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function BE(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new gm,r.set(n,[o])):i>=s.length?(o=new gm,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function kE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new et};break;case"SpotLight":t={position:new U,direction:new U,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new U,halfWidth:new U,halfHeight:new U};break}return r[e.id]=t,t}}}function VE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let HE=0;function GE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function WE(r){const e=new kE,t=VE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const i=new U,s=new at,o=new at;function a(c){let u=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,S=0,y=0,x=0,A=0,E=0,T=0;c.sort(GE);for(let M=0,v=c.length;M<v;M++){const D=c[M],L=D.color,F=D.intensity,k=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=L.r*F,h+=L.g*F,f+=L.b*F;else if(D.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(D.sh.coefficients[V],F);T++}else if(D.isDirectionalLight){const V=e.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const W=D.shadow,z=t.get(D);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,n.directionalShadow[d]=z,n.directionalShadowMap[d]=Y,n.directionalShadowMatrix[d]=D.shadow.matrix,S++}n.directional[d]=V,d++}else if(D.isSpotLight){const V=e.get(D);V.position.setFromMatrixPosition(D.matrixWorld),V.color.copy(L).multiplyScalar(F),V.distance=k,V.coneCos=Math.cos(D.angle),V.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),V.decay=D.decay,n.spot[_]=V;const W=D.shadow;if(D.map&&(n.spotLightMap[A]=D.map,A++,W.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[_]=W.matrix,D.castShadow){const z=t.get(D);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=Y,x++}_++}else if(D.isRectAreaLight){const V=e.get(D);V.color.copy(L).multiplyScalar(F),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=V,m++}else if(D.isPointLight){const V=e.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),V.distance=D.distance,V.decay=D.decay,D.castShadow){const W=D.shadow,z=t.get(D);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,z.shadowCameraNear=W.camera.near,z.shadowCameraFar=W.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=D.shadow.matrix,y++}n.point[g]=V,g++}else if(D.isHemisphereLight){const V=e.get(D);V.skyColor.copy(D.color).multiplyScalar(F),V.groundColor.copy(D.groundColor).multiplyScalar(F),n.hemi[p]=V,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==S||C.numPointShadows!==y||C.numSpotShadows!==x||C.numSpotMaps!==A||C.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=S,C.numPointShadows=y,C.numSpotShadows=x,C.numSpotMaps=A,C.numLightProbes=T,n.version=HE++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const y=c[p];if(y.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),h++}else if(y.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function _m(r){const e=new WE(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function XE(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new _m(r),e.set(i,[a])):s>=o.length?(a=new _m(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const YE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qE(r,e,t){let n=new ad;const i=new he,s=new he,o=new pt,a=new qy({depthPacking:nx}),l=new Zy,c={},u=t.maxTextureSize,h={[Xr]:Vn,[Vn]:Xr,[Fi]:Fi},f=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:YE,fragmentShader:jE}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new pi;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new bn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qg;let p=this.type;this.render=function(E,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const M=r.getRenderTarget(),v=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),L=r.state;L.setBlending(kr),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const F=p!==dr&&this.type===dr,k=p===dr&&this.type!==dr;for(let Y=0,V=E.length;Y<V;Y++){const W=E[Y],z=W.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const Q=z.getFrameExtents();if(i.multiply(Q),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Q.x),i.x=s.x*Q.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Q.y),i.y=s.y*Q.y,z.mapSize.y=s.y)),z.map===null||F===!0||k===!0){const ce=this.type!==dr?{minFilter:ui,magFilter:ui}:{};z.map!==null&&z.map.dispose(),z.map=new Ns(i.x,i.y,ce),z.map.texture.name=W.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const N=z.getViewportCount();for(let ce=0;ce<N;ce++){const Pe=z.getViewport(ce);o.set(s.x*Pe.x,s.y*Pe.y,s.x*Pe.z,s.y*Pe.w),L.viewport(o),z.updateMatrices(W,ce),n=z.getFrustum(),x(T,C,z.camera,W,this.type)}z.isPointLightShadow!==!0&&this.type===dr&&S(z,C),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,v,D)};function S(E,T){const C=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ns(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(T,null,C,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(T,null,C,d,_,null)}function y(E,T,C,M){let v=null;const D=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)v=D;else if(v=C.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const L=v.uuid,F=T.uuid;let k=c[L];k===void 0&&(k={},c[L]=k);let Y=k[F];Y===void 0&&(Y=v.clone(),k[F]=Y,T.addEventListener("dispose",A)),v=Y}if(v.visible=T.visible,v.wireframe=T.wireframe,M===dr?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:h[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const L=r.properties.get(v);L.light=C}return v}function x(E,T,C,M,v){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===dr)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const F=e.update(E),k=E.material;if(Array.isArray(k)){const Y=F.groups;for(let V=0,W=Y.length;V<W;V++){const z=Y[V],Q=k[z.materialIndex];if(Q&&Q.visible){const N=y(E,Q,M,v);E.onBeforeShadow(r,E,T,C,F,N,z),r.renderBufferDirect(C,null,F,N,E,z),E.onAfterShadow(r,E,T,C,F,N,z)}}}else if(k.visible){const Y=y(E,k,M,v);E.onBeforeShadow(r,E,T,C,F,Y,null),r.renderBufferDirect(C,null,F,Y,E,null),E.onAfterShadow(r,E,T,C,F,Y,null)}}const L=E.children;for(let F=0,k=L.length;F<k;F++)x(L[F],T,C,M,v)}function A(E){E.target.removeEventListener("dispose",A);for(const C in c){const M=c[C],v=E.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}const ZE={[bh]:Eh,[wh]:Rh,[Ah]:Ph,[Io]:Ch,[Eh]:bh,[Rh]:wh,[Ph]:Ah,[Ch]:Io};function $E(r,e){function t(){let I=!1;const ge=new pt;let ne=null;const Te=new pt(0,0,0,0);return{setMask:function(se){ne!==se&&!I&&(r.colorMask(se,se,se,se),ne=se)},setLocked:function(se){I=se},setClear:function(se,ee,De,Xe,gt){gt===!0&&(se*=Xe,ee*=Xe,De*=Xe),ge.set(se,ee,De,Xe),Te.equals(ge)===!1&&(r.clearColor(se,ee,De,Xe),Te.copy(ge))},reset:function(){I=!1,ne=null,Te.set(-1,0,0,0)}}}function n(){let I=!1,ge=!1,ne=null,Te=null,se=null;return{setReversed:function(ee){if(ge!==ee){const De=e.get("EXT_clip_control");ee?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),ge=ee;const Xe=se;se=null,this.setClear(Xe)}},getReversed:function(){return ge},setTest:function(ee){ee?ue(r.DEPTH_TEST):Ee(r.DEPTH_TEST)},setMask:function(ee){ne!==ee&&!I&&(r.depthMask(ee),ne=ee)},setFunc:function(ee){if(ge&&(ee=ZE[ee]),Te!==ee){switch(ee){case bh:r.depthFunc(r.NEVER);break;case Eh:r.depthFunc(r.ALWAYS);break;case wh:r.depthFunc(r.LESS);break;case Io:r.depthFunc(r.LEQUAL);break;case Ah:r.depthFunc(r.EQUAL);break;case Ch:r.depthFunc(r.GEQUAL);break;case Rh:r.depthFunc(r.GREATER);break;case Ph:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Te=ee}},setLocked:function(ee){I=ee},setClear:function(ee){se!==ee&&(ge&&(ee=1-ee),r.clearDepth(ee),se=ee)},reset:function(){I=!1,ne=null,Te=null,se=null,ge=!1}}}function i(){let I=!1,ge=null,ne=null,Te=null,se=null,ee=null,De=null,Xe=null,gt=null;return{setTest:function(Ae){I||(Ae?ue(r.STENCIL_TEST):Ee(r.STENCIL_TEST))},setMask:function(Ae){ge!==Ae&&!I&&(r.stencilMask(Ae),ge=Ae)},setFunc:function(Ae,Ue,nt){(ne!==Ae||Te!==Ue||se!==nt)&&(r.stencilFunc(Ae,Ue,nt),ne=Ae,Te=Ue,se=nt)},setOp:function(Ae,Ue,nt){(ee!==Ae||De!==Ue||Xe!==nt)&&(r.stencilOp(Ae,Ue,nt),ee=Ae,De=Ue,Xe=nt)},setLocked:function(Ae){I=Ae},setClear:function(Ae){gt!==Ae&&(r.clearStencil(Ae),gt=Ae)},reset:function(){I=!1,ge=null,ne=null,Te=null,se=null,ee=null,De=null,Xe=null,gt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,y=null,x=null,A=null,E=null,T=new et(0,0,0),C=0,M=!1,v=null,D=null,L=null,F=null,k=null;const Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,W=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(z)[1]),V=W>=1):z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),V=W>=2);let Q=null,N={};const ce=r.getParameter(r.SCISSOR_BOX),Pe=r.getParameter(r.VIEWPORT),Re=new pt().fromArray(ce),q=new pt().fromArray(Pe);function re(I,ge,ne,Te){const se=new Uint8Array(4),ee=r.createTexture();r.bindTexture(I,ee),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let De=0;De<ne;De++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(ge,0,r.RGBA,1,1,Te,0,r.RGBA,r.UNSIGNED_BYTE,se):r.texImage2D(ge+De,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,se);return ee}const _e={};_e[r.TEXTURE_2D]=re(r.TEXTURE_2D,r.TEXTURE_2D,1),_e[r.TEXTURE_CUBE_MAP]=re(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[r.TEXTURE_2D_ARRAY]=re(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_e[r.TEXTURE_3D]=re(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(r.DEPTH_TEST),o.setFunc(Io),te(!1),O(qd),ue(r.CULL_FACE),R(kr);function ue(I){u[I]!==!0&&(r.enable(I),u[I]=!0)}function Ee(I){u[I]!==!1&&(r.disable(I),u[I]=!1)}function Be(I,ge){return h[I]!==ge?(r.bindFramebuffer(I,ge),h[I]=ge,I===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ge),I===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ge),!0):!1}function Oe(I,ge){let ne=d,Te=!1;if(I){ne=f.get(ge),ne===void 0&&(ne=[],f.set(ge,ne));const se=I.textures;if(ne.length!==se.length||ne[0]!==r.COLOR_ATTACHMENT0){for(let ee=0,De=se.length;ee<De;ee++)ne[ee]=r.COLOR_ATTACHMENT0+ee;ne.length=se.length,Te=!0}}else ne[0]!==r.BACK&&(ne[0]=r.BACK,Te=!0);Te&&r.drawBuffers(ne)}function tt(I){return g!==I?(r.useProgram(I),g=I,!0):!1}const Ze={[_s]:r.FUNC_ADD,[Av]:r.FUNC_SUBTRACT,[Cv]:r.FUNC_REVERSE_SUBTRACT};Ze[Rv]=r.MIN,Ze[Pv]=r.MAX;const ye={[Dv]:r.ZERO,[Nv]:r.ONE,[Iv]:r.SRC_COLOR,[Sh]:r.SRC_ALPHA,[Bv]:r.SRC_ALPHA_SATURATE,[Fv]:r.DST_COLOR,[Ov]:r.DST_ALPHA,[Lv]:r.ONE_MINUS_SRC_COLOR,[Th]:r.ONE_MINUS_SRC_ALPHA,[zv]:r.ONE_MINUS_DST_COLOR,[Uv]:r.ONE_MINUS_DST_ALPHA,[kv]:r.CONSTANT_COLOR,[Vv]:r.ONE_MINUS_CONSTANT_COLOR,[Hv]:r.CONSTANT_ALPHA,[Gv]:r.ONE_MINUS_CONSTANT_ALPHA};function R(I,ge,ne,Te,se,ee,De,Xe,gt,Ae){if(I===kr){_===!0&&(Ee(r.BLEND),_=!1);return}if(_===!1&&(ue(r.BLEND),_=!0),I!==wv){if(I!==m||Ae!==M){if((p!==_s||x!==_s)&&(r.blendEquation(r.FUNC_ADD),p=_s,x=_s),Ae)switch(I){case Mo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ps:r.blendFunc(r.ONE,r.ONE);break;case Zd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case $d:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Mo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ps:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Zd:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $d:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,y=null,A=null,E=null,T.set(0,0,0),C=0,m=I,M=Ae}return}se=se||ge,ee=ee||ne,De=De||Te,(ge!==p||se!==x)&&(r.blendEquationSeparate(Ze[ge],Ze[se]),p=ge,x=se),(ne!==S||Te!==y||ee!==A||De!==E)&&(r.blendFuncSeparate(ye[ne],ye[Te],ye[ee],ye[De]),S=ne,y=Te,A=ee,E=De),(Xe.equals(T)===!1||gt!==C)&&(r.blendColor(Xe.r,Xe.g,Xe.b,gt),T.copy(Xe),C=gt),m=I,M=!1}function le(I,ge){I.side===Fi?Ee(r.CULL_FACE):ue(r.CULL_FACE);let ne=I.side===Vn;ge&&(ne=!ne),te(ne),I.blending===Mo&&I.transparent===!1?R(kr):R(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const Te=I.stencilWrite;a.setTest(Te),Te&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Me(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ue(r.SAMPLE_ALPHA_TO_COVERAGE):Ee(r.SAMPLE_ALPHA_TO_COVERAGE)}function te(I){v!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),v=I)}function O(I){I!==bv?(ue(r.CULL_FACE),I!==D&&(I===qd?r.cullFace(r.BACK):I===Ev?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ee(r.CULL_FACE),D=I}function J(I){I!==L&&(V&&r.lineWidth(I),L=I)}function Me(I,ge,ne){I?(ue(r.POLYGON_OFFSET_FILL),(F!==ge||k!==ne)&&(r.polygonOffset(ge,ne),F=ge,k=ne)):Ee(r.POLYGON_OFFSET_FILL)}function ae(I){I?ue(r.SCISSOR_TEST):Ee(r.SCISSOR_TEST)}function fe(I){I===void 0&&(I=r.TEXTURE0+Y-1),Q!==I&&(r.activeTexture(I),Q=I)}function We(I,ge,ne){ne===void 0&&(Q===null?ne=r.TEXTURE0+Y-1:ne=Q);let Te=N[ne];Te===void 0&&(Te={type:void 0,texture:void 0},N[ne]=Te),(Te.type!==I||Te.texture!==ge)&&(Q!==ne&&(r.activeTexture(ne),Q=ne),r.bindTexture(I,ge||_e[I]),Te.type=I,Te.texture=ge)}function P(){const I=N[Q];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function G(){try{r.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{r.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{r.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{r.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{r.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{r.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ne(){try{r.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{r.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{r.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(I){Re.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Re.copy(I))}function Ge(I){q.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),q.copy(I))}function Ve(I,ge){let ne=c.get(ge);ne===void 0&&(ne=new WeakMap,c.set(ge,ne));let Te=ne.get(I);Te===void 0&&(Te=r.getUniformBlockIndex(ge,I.name),ne.set(I,Te))}function pe(I,ge){const Te=c.get(ge).get(I);l.get(ge)!==Te&&(r.uniformBlockBinding(ge,Te,I.__bindingPointIndex),l.set(ge,Te))}function Ye(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},Q=null,N={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,y=null,x=null,A=null,E=null,T=new et(0,0,0),C=0,M=!1,v=null,D=null,L=null,F=null,k=null,Re.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ue,disable:Ee,bindFramebuffer:Be,drawBuffers:Oe,useProgram:tt,setBlending:R,setMaterial:le,setFlipSided:te,setCullFace:O,setLineWidth:J,setPolygonOffset:Me,setScissorTest:ae,activeTexture:fe,bindTexture:We,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:G,texImage2D:me,texImage3D:ie,updateUBOMapping:Ve,uniformBlockBinding:pe,texStorage2D:de,texStorage3D:Ne,texSubImage2D:Z,texSubImage3D:K,compressedTexSubImage2D:$,compressedTexSubImage3D:we,scissor:Se,viewport:Ge,reset:Ye}}function JE(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,b){return d?new OffscreenCanvas(P,b):Ka("canvas")}function _(P,b,G){let Z=1;const K=We(P);if((K.width>G||K.height>G)&&(Z=G/Math.max(K.width,K.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const $=Math.floor(Z*K.width),we=Math.floor(Z*K.height);h===void 0&&(h=g($,we));const de=b?g($,we):h;return de.width=$,de.height=we,de.getContext("2d").drawImage(P,0,0,$,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+$+"x"+we+")."),de}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){r.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(P,b,G,Z,K=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let $=b;if(b===r.RED&&(G===r.FLOAT&&($=r.R32F),G===r.HALF_FLOAT&&($=r.R16F),G===r.UNSIGNED_BYTE&&($=r.R8)),b===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&($=r.R8UI),G===r.UNSIGNED_SHORT&&($=r.R16UI),G===r.UNSIGNED_INT&&($=r.R32UI),G===r.BYTE&&($=r.R8I),G===r.SHORT&&($=r.R16I),G===r.INT&&($=r.R32I)),b===r.RG&&(G===r.FLOAT&&($=r.RG32F),G===r.HALF_FLOAT&&($=r.RG16F),G===r.UNSIGNED_BYTE&&($=r.RG8)),b===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&($=r.RG8UI),G===r.UNSIGNED_SHORT&&($=r.RG16UI),G===r.UNSIGNED_INT&&($=r.RG32UI),G===r.BYTE&&($=r.RG8I),G===r.SHORT&&($=r.RG16I),G===r.INT&&($=r.RG32I)),b===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&($=r.RGB8UI),G===r.UNSIGNED_SHORT&&($=r.RGB16UI),G===r.UNSIGNED_INT&&($=r.RGB32UI),G===r.BYTE&&($=r.RGB8I),G===r.SHORT&&($=r.RGB16I),G===r.INT&&($=r.RGB32I)),b===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&($=r.RGBA8UI),G===r.UNSIGNED_SHORT&&($=r.RGBA16UI),G===r.UNSIGNED_INT&&($=r.RGBA32UI),G===r.BYTE&&($=r.RGBA8I),G===r.SHORT&&($=r.RGBA16I),G===r.INT&&($=r.RGBA32I)),b===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),b===r.RGBA){const we=K?Ic:dt.getTransfer(Z);G===r.FLOAT&&($=r.RGBA32F),G===r.HALF_FLOAT&&($=r.RGBA16F),G===r.UNSIGNED_BYTE&&($=we===wt?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(P,b){let G;return P?b===null||b===Ds||b===Za?G=r.DEPTH24_STENCIL8:b===Bi?G=r.DEPTH32F_STENCIL8:b===qa&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ds||b===Za?G=r.DEPTH_COMPONENT24:b===Bi?G=r.DEPTH_COMPONENT32F:b===qa&&(G=r.DEPTH_COMPONENT16),G}function A(P,b){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==ui&&P.minFilter!==kn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function E(P){const b=P.target;b.removeEventListener("dispose",E),C(b),b.isVideoTexture&&u.delete(b)}function T(P){const b=P.target;b.removeEventListener("dispose",T),v(b)}function C(P){const b=n.get(P);if(b.__webglInit===void 0)return;const G=P.source,Z=f.get(G);if(Z){const K=Z[b.__cacheKey];K.usedTimes--,K.usedTimes===0&&M(P),Object.keys(Z).length===0&&f.delete(G)}n.remove(P)}function M(P){const b=n.get(P);r.deleteTexture(b.__webglTexture);const G=P.source,Z=f.get(G);delete Z[b.__cacheKey],o.memory.textures--}function v(P){const b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let K=0;K<b.__webglFramebuffer[Z].length;K++)r.deleteFramebuffer(b.__webglFramebuffer[Z][K]);else r.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)r.deleteFramebuffer(b.__webglFramebuffer[Z]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=P.textures;for(let Z=0,K=G.length;Z<K;Z++){const $=n.get(G[Z]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(G[Z])}n.remove(P)}let D=0;function L(){D=0}function F(){const P=D;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),D+=1,P}function k(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function Y(P,b){const G=n.get(P);if(P.isVideoTexture&&ae(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){const Z=P.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(G,P,b);return}}t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+b)}function V(P,b){const G=n.get(P);if(P.version>0&&G.__version!==P.version){_e(G,P,b);return}t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+b)}function W(P,b){const G=n.get(P);if(P.version>0&&G.__version!==P.version){_e(G,P,b);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+b)}function z(P,b){const G=n.get(P);if(P.version>0&&G.__version!==P.version){ue(G,P,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+b)}const Q={[Ih]:r.REPEAT,[xs]:r.CLAMP_TO_EDGE,[Lh]:r.MIRRORED_REPEAT},N={[ui]:r.NEAREST,[Qv]:r.NEAREST_MIPMAP_NEAREST,[vl]:r.NEAREST_MIPMAP_LINEAR,[kn]:r.LINEAR,[_u]:r.LINEAR_MIPMAP_NEAREST,[ys]:r.LINEAR_MIPMAP_LINEAR},ce={[rx]:r.NEVER,[ux]:r.ALWAYS,[sx]:r.LESS,[a_]:r.LEQUAL,[ox]:r.EQUAL,[cx]:r.GEQUAL,[ax]:r.GREATER,[lx]:r.NOTEQUAL};function Pe(P,b){if(b.type===Bi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===kn||b.magFilter===_u||b.magFilter===vl||b.magFilter===ys||b.minFilter===kn||b.minFilter===_u||b.minFilter===vl||b.minFilter===ys)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,Q[b.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Q[b.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Q[b.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,N[b.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,N[b.minFilter]),b.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,ce[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ui||b.minFilter!==vl&&b.minFilter!==ys||b.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Re(P,b){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",E));const Z=b.source;let K=f.get(Z);K===void 0&&(K={},f.set(Z,K));const $=k(b);if($!==P.__cacheKey){K[$]===void 0&&(K[$]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),K[$].usedTimes++;const we=K[P.__cacheKey];we!==void 0&&(K[P.__cacheKey].usedTimes--,we.usedTimes===0&&M(b)),P.__cacheKey=$,P.__webglTexture=K[$].texture}return G}function q(P,b,G){return Math.floor(Math.floor(P/G)/b)}function re(P,b,G,Z){const $=P.updateRanges;if($.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,G,Z,b.data);else{$.sort((ie,Se)=>ie.start-Se.start);let we=0;for(let ie=1;ie<$.length;ie++){const Se=$[we],Ge=$[ie],Ve=Se.start+Se.count,pe=q(Ge.start,b.width,4),Ye=q(Se.start,b.width,4);Ge.start<=Ve+1&&pe===Ye&&q(Ge.start+Ge.count-1,b.width,4)===pe?Se.count=Math.max(Se.count,Ge.start+Ge.count-Se.start):(++we,$[we]=Ge)}$.length=we+1;const de=r.getParameter(r.UNPACK_ROW_LENGTH),Ne=r.getParameter(r.UNPACK_SKIP_PIXELS),me=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let ie=0,Se=$.length;ie<Se;ie++){const Ge=$[ie],Ve=Math.floor(Ge.start/4),pe=Math.ceil(Ge.count/4),Ye=Ve%b.width,I=Math.floor(Ve/b.width),ge=pe,ne=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ye),r.pixelStorei(r.UNPACK_SKIP_ROWS,I),t.texSubImage2D(r.TEXTURE_2D,0,Ye,I,ge,ne,G,Z,b.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,de),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ne),r.pixelStorei(r.UNPACK_SKIP_ROWS,me)}}function _e(P,b,G){let Z=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=r.TEXTURE_3D);const K=Re(P,b),$=b.source;t.bindTexture(Z,P.__webglTexture,r.TEXTURE0+G);const we=n.get($);if($.version!==we.__version||K===!0){t.activeTexture(r.TEXTURE0+G);const de=dt.getPrimaries(dt.workingColorSpace),Ne=b.colorSpace===Ir?null:dt.getPrimaries(b.colorSpace),me=b.colorSpace===Ir||de===Ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let ie=_(b.image,!1,i.maxTextureSize);ie=fe(b,ie);const Se=s.convert(b.format,b.colorSpace),Ge=s.convert(b.type);let Ve=y(b.internalFormat,Se,Ge,b.colorSpace,b.isVideoTexture);Pe(Z,b);let pe;const Ye=b.mipmaps,I=b.isVideoTexture!==!0,ge=we.__version===void 0||K===!0,ne=$.dataReady,Te=A(b,ie);if(b.isDepthTexture)Ve=x(b.format===Ja,b.type),ge&&(I?t.texStorage2D(r.TEXTURE_2D,1,Ve,ie.width,ie.height):t.texImage2D(r.TEXTURE_2D,0,Ve,ie.width,ie.height,0,Se,Ge,null));else if(b.isDataTexture)if(Ye.length>0){I&&ge&&t.texStorage2D(r.TEXTURE_2D,Te,Ve,Ye[0].width,Ye[0].height);for(let se=0,ee=Ye.length;se<ee;se++)pe=Ye[se],I?ne&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,pe.width,pe.height,Se,Ge,pe.data):t.texImage2D(r.TEXTURE_2D,se,Ve,pe.width,pe.height,0,Se,Ge,pe.data);b.generateMipmaps=!1}else I?(ge&&t.texStorage2D(r.TEXTURE_2D,Te,Ve,ie.width,ie.height),ne&&re(b,ie,Se,Ge)):t.texImage2D(r.TEXTURE_2D,0,Ve,ie.width,ie.height,0,Se,Ge,ie.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){I&&ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Te,Ve,Ye[0].width,Ye[0].height,ie.depth);for(let se=0,ee=Ye.length;se<ee;se++)if(pe=Ye[se],b.format!==bi)if(Se!==null)if(I){if(ne)if(b.layerUpdates.size>0){const De=jp(pe.width,pe.height,b.format,b.type);for(const Xe of b.layerUpdates){const gt=pe.data.subarray(Xe*De/pe.data.BYTES_PER_ELEMENT,(Xe+1)*De/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,Xe,pe.width,pe.height,1,Se,gt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,pe.width,pe.height,ie.depth,Se,pe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,se,Ve,pe.width,pe.height,ie.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ne&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,pe.width,pe.height,ie.depth,Se,Ge,pe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,se,Ve,pe.width,pe.height,ie.depth,0,Se,Ge,pe.data)}else{I&&ge&&t.texStorage2D(r.TEXTURE_2D,Te,Ve,Ye[0].width,Ye[0].height);for(let se=0,ee=Ye.length;se<ee;se++)pe=Ye[se],b.format!==bi?Se!==null?I?ne&&t.compressedTexSubImage2D(r.TEXTURE_2D,se,0,0,pe.width,pe.height,Se,pe.data):t.compressedTexImage2D(r.TEXTURE_2D,se,Ve,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ne&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,pe.width,pe.height,Se,Ge,pe.data):t.texImage2D(r.TEXTURE_2D,se,Ve,pe.width,pe.height,0,Se,Ge,pe.data)}else if(b.isDataArrayTexture)if(I){if(ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Te,Ve,ie.width,ie.height,ie.depth),ne)if(b.layerUpdates.size>0){const se=jp(ie.width,ie.height,b.format,b.type);for(const ee of b.layerUpdates){const De=ie.data.subarray(ee*se/ie.data.BYTES_PER_ELEMENT,(ee+1)*se/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ee,ie.width,ie.height,1,Se,Ge,De)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Se,Ge,ie.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ve,ie.width,ie.height,ie.depth,0,Se,Ge,ie.data);else if(b.isData3DTexture)I?(ge&&t.texStorage3D(r.TEXTURE_3D,Te,Ve,ie.width,ie.height,ie.depth),ne&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Se,Ge,ie.data)):t.texImage3D(r.TEXTURE_3D,0,Ve,ie.width,ie.height,ie.depth,0,Se,Ge,ie.data);else if(b.isFramebufferTexture){if(ge)if(I)t.texStorage2D(r.TEXTURE_2D,Te,Ve,ie.width,ie.height);else{let se=ie.width,ee=ie.height;for(let De=0;De<Te;De++)t.texImage2D(r.TEXTURE_2D,De,Ve,se,ee,0,Se,Ge,null),se>>=1,ee>>=1}}else if(Ye.length>0){if(I&&ge){const se=We(Ye[0]);t.texStorage2D(r.TEXTURE_2D,Te,Ve,se.width,se.height)}for(let se=0,ee=Ye.length;se<ee;se++)pe=Ye[se],I?ne&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,Se,Ge,pe):t.texImage2D(r.TEXTURE_2D,se,Ve,Se,Ge,pe);b.generateMipmaps=!1}else if(I){if(ge){const se=We(ie);t.texStorage2D(r.TEXTURE_2D,Te,Ve,se.width,se.height)}ne&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Se,Ge,ie)}else t.texImage2D(r.TEXTURE_2D,0,Ve,Se,Ge,ie);m(b)&&p(Z),we.__version=$.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function ue(P,b,G){if(b.image.length!==6)return;const Z=Re(P,b),K=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+G);const $=n.get(K);if(K.version!==$.__version||Z===!0){t.activeTexture(r.TEXTURE0+G);const we=dt.getPrimaries(dt.workingColorSpace),de=b.colorSpace===Ir?null:dt.getPrimaries(b.colorSpace),Ne=b.colorSpace===Ir||we===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const me=b.isCompressedTexture||b.image[0].isCompressedTexture,ie=b.image[0]&&b.image[0].isDataTexture,Se=[];for(let ee=0;ee<6;ee++)!me&&!ie?Se[ee]=_(b.image[ee],!0,i.maxCubemapSize):Se[ee]=ie?b.image[ee].image:b.image[ee],Se[ee]=fe(b,Se[ee]);const Ge=Se[0],Ve=s.convert(b.format,b.colorSpace),pe=s.convert(b.type),Ye=y(b.internalFormat,Ve,pe,b.colorSpace),I=b.isVideoTexture!==!0,ge=$.__version===void 0||Z===!0,ne=K.dataReady;let Te=A(b,Ge);Pe(r.TEXTURE_CUBE_MAP,b);let se;if(me){I&&ge&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Te,Ye,Ge.width,Ge.height);for(let ee=0;ee<6;ee++){se=Se[ee].mipmaps;for(let De=0;De<se.length;De++){const Xe=se[De];b.format!==bi?Ve!==null?I?ne&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De,0,0,Xe.width,Xe.height,Ve,Xe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De,Ye,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De,0,0,Xe.width,Xe.height,Ve,pe,Xe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De,Ye,Xe.width,Xe.height,0,Ve,pe,Xe.data)}}}else{if(se=b.mipmaps,I&&ge){se.length>0&&Te++;const ee=We(Se[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Te,Ye,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ie){I?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Se[ee].width,Se[ee].height,Ve,pe,Se[ee].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ye,Se[ee].width,Se[ee].height,0,Ve,pe,Se[ee].data);for(let De=0;De<se.length;De++){const gt=se[De].image[ee].image;I?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De+1,0,0,gt.width,gt.height,Ve,pe,gt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De+1,Ye,gt.width,gt.height,0,Ve,pe,gt.data)}}else{I?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ve,pe,Se[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ye,Ve,pe,Se[ee]);for(let De=0;De<se.length;De++){const Xe=se[De];I?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De+1,0,0,Ve,pe,Xe.image[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De+1,Ye,Ve,pe,Xe.image[ee])}}}m(b)&&p(r.TEXTURE_CUBE_MAP),$.__version=K.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Ee(P,b,G,Z,K,$){const we=s.convert(G.format,G.colorSpace),de=s.convert(G.type),Ne=y(G.internalFormat,we,de,G.colorSpace),me=n.get(b),ie=n.get(G);if(ie.__renderTarget=b,!me.__hasExternalTextures){const Se=Math.max(1,b.width>>$),Ge=Math.max(1,b.height>>$);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?t.texImage3D(K,$,Ne,Se,Ge,b.depth,0,we,de,null):t.texImage2D(K,$,Ne,Se,Ge,0,we,de,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),Me(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,K,ie.__webglTexture,0,J(b)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,K,ie.__webglTexture,$),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Be(P,b,G){if(r.bindRenderbuffer(r.RENDERBUFFER,P),b.depthBuffer){const Z=b.depthTexture,K=Z&&Z.isDepthTexture?Z.type:null,$=x(b.stencilBuffer,K),we=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=J(b);Me(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,de,$,b.width,b.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,de,$,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,$,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,we,r.RENDERBUFFER,P)}else{const Z=b.textures;for(let K=0;K<Z.length;K++){const $=Z[K],we=s.convert($.format,$.colorSpace),de=s.convert($.type),Ne=y($.internalFormat,we,de,$.colorSpace),me=J(b);G&&Me(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,me,Ne,b.width,b.height):Me(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,me,Ne,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Ne,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Oe(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(b.depthTexture);Z.__renderTarget=b,(!Z.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y(b.depthTexture,0);const K=Z.__webglTexture,$=J(b);if(b.depthTexture.format===$a)Me(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0);else if(b.depthTexture.format===Ja)Me(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function tt(P){const b=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const Z=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){const K=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",K)};Z.addEventListener("dispose",K),b.__depthDisposeCallback=K}b.__boundDepthTexture=Z}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const Z=P.texture.mipmaps;Z&&Z.length>0?Oe(b.__webglFramebuffer[0],P):Oe(b.__webglFramebuffer,P)}else if(G){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=r.createRenderbuffer(),Be(b.__webglDepthbuffer[Z],P,!1);else{const K=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,$)}}else{const Z=P.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Be(b.__webglDepthbuffer,P,!1);else{const K=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,$)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ze(P,b,G){const Z=n.get(P);b!==void 0&&Ee(Z.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&tt(P)}function ye(P){const b=P.texture,G=n.get(P),Z=n.get(b);P.addEventListener("dispose",T);const K=P.textures,$=P.isWebGLCubeRenderTarget===!0,we=K.length>1;if(we||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=b.version,o.memory.textures++),$){G.__webglFramebuffer=[];for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[de]=[];for(let Ne=0;Ne<b.mipmaps.length;Ne++)G.__webglFramebuffer[de][Ne]=r.createFramebuffer()}else G.__webglFramebuffer[de]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let de=0;de<b.mipmaps.length;de++)G.__webglFramebuffer[de]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(we)for(let de=0,Ne=K.length;de<Ne;de++){const me=n.get(K[de]);me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&Me(P)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let de=0;de<K.length;de++){const Ne=K[de];G.__webglColorRenderbuffer[de]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[de]);const me=s.convert(Ne.format,Ne.colorSpace),ie=s.convert(Ne.type),Se=y(Ne.internalFormat,me,ie,Ne.colorSpace,P.isXRRenderTarget===!0),Ge=J(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ge,Se,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,G.__webglColorRenderbuffer[de])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),Be(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),Pe(r.TEXTURE_CUBE_MAP,b);for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ne=0;Ne<b.mipmaps.length;Ne++)Ee(G.__webglFramebuffer[de][Ne],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne);else Ee(G.__webglFramebuffer[de],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(b)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let de=0,Ne=K.length;de<Ne;de++){const me=K[de],ie=n.get(me);t.bindTexture(r.TEXTURE_2D,ie.__webglTexture),Pe(r.TEXTURE_2D,me),Ee(G.__webglFramebuffer,P,me,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,0),m(me)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let de=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(de=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(de,Z.__webglTexture),Pe(de,b),b.mipmaps&&b.mipmaps.length>0)for(let Ne=0;Ne<b.mipmaps.length;Ne++)Ee(G.__webglFramebuffer[Ne],P,b,r.COLOR_ATTACHMENT0,de,Ne);else Ee(G.__webglFramebuffer,P,b,r.COLOR_ATTACHMENT0,de,0);m(b)&&p(de),t.unbindTexture()}P.depthBuffer&&tt(P)}function R(P){const b=P.textures;for(let G=0,Z=b.length;G<Z;G++){const K=b[G];if(m(K)){const $=S(P),we=n.get(K).__webglTexture;t.bindTexture($,we),p($),t.unbindTexture()}}}const le=[],te=[];function O(P){if(P.samples>0){if(Me(P)===!1){const b=P.textures,G=P.width,Z=P.height;let K=r.COLOR_BUFFER_BIT;const $=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=n.get(P),de=b.length>1;if(de)for(let me=0;me<b.length;me++)t.bindFramebuffer(r.FRAMEBUFFER,we.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,we.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const Ne=P.texture.mipmaps;Ne&&Ne.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let me=0;me<b.length;me++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),de){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,we.__webglColorRenderbuffer[me]);const ie=n.get(b[me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ie,0)}r.blitFramebuffer(0,0,G,Z,0,0,G,Z,K,r.NEAREST),l===!0&&(le.length=0,te.length=0,le.push(r.COLOR_ATTACHMENT0+me),P.depthBuffer&&P.resolveDepthBuffer===!1&&(le.push($),te.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,te)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,le))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),de)for(let me=0;me<b.length;me++){t.bindFramebuffer(r.FRAMEBUFFER,we.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.RENDERBUFFER,we.__webglColorRenderbuffer[me]);const ie=n.get(b[me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,we.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+me,r.TEXTURE_2D,ie,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const b=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function J(P){return Math.min(i.maxSamples,P.samples)}function Me(P){const b=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ae(P){const b=o.render.frame;u.get(P)!==b&&(u.set(P,b),P.update())}function fe(P,b){const G=P.colorSpace,Z=P.format,K=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Uo&&G!==Ir&&(dt.getTransfer(G)===wt?(Z!==bi||K!==nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function We(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.setTexture2D=Y,this.setTexture2DArray=V,this.setTexture3D=W,this.setTextureCube=z,this.rebindTextures=Ze,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Me}function KE(r,e){function t(n,i=Ir){let s;const o=dt.getTransfer(i);if(n===nr)return r.UNSIGNED_BYTE;if(n===Jf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Kf)return r.UNSIGNED_SHORT_5_5_5_1;if(n===t_)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Qg)return r.BYTE;if(n===e_)return r.SHORT;if(n===qa)return r.UNSIGNED_SHORT;if(n===$f)return r.INT;if(n===Ds)return r.UNSIGNED_INT;if(n===Bi)return r.FLOAT;if(n===pl)return r.HALF_FLOAT;if(n===n_)return r.ALPHA;if(n===i_)return r.RGB;if(n===bi)return r.RGBA;if(n===$a)return r.DEPTH_COMPONENT;if(n===Ja)return r.DEPTH_STENCIL;if(n===Qf)return r.RED;if(n===ed)return r.RED_INTEGER;if(n===r_)return r.RG;if(n===td)return r.RG_INTEGER;if(n===nd)return r.RGBA_INTEGER;if(n===mc||n===gc||n===_c||n===vc)if(o===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===mc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_c)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===mc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_c)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oh||n===Uh||n===Fh||n===zh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Oh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bh||n===kh||n===Vh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Bh||n===kh)return o===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Vh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Hh||n===Gh||n===Wh||n===Xh||n===Yh||n===jh||n===qh||n===Zh||n===$h||n===Jh||n===Kh||n===Qh||n===ef||n===tf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Hh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$h)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qh)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ef)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tf)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xc||n===nf||n===rf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===xc)return o===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===s_||n===sf||n===of||n===af)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===xc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===sf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===of)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===af)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Za?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const QE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ew=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new mn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ki({vertexShader:QE,fragmentShader:ew,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bn(new Ls(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nw extends jo{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new tw,m=t.getContextAttributes();let p=null,S=null;const y=[],x=[],A=new he;let E=null;const T=new zn;T.viewport=new pt;const C=new zn;C.viewport=new pt;const M=[T,C],v=new pM;let D=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let re=y[q];return re===void 0&&(re=new Bu,y[q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(q){let re=y[q];return re===void 0&&(re=new Bu,y[q]=re),re.getGripSpace()},this.getHand=function(q){let re=y[q];return re===void 0&&(re=new Bu,y[q]=re),re.getHandSpace()};function F(q){const re=x.indexOf(q.inputSource);if(re===-1)return;const _e=y[re];_e!==void 0&&(_e.update(q.inputSource,q.frame,c||o),_e.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",Y);for(let q=0;q<y.length;q++){const re=x[q];re!==null&&(x[q]=null,y[q].disconnect(re))}D=null,L=null,_.reset(),e.setRenderTarget(p),d=null,f=null,h=null,i=null,S=null,Re.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",k),i.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,ue=null,Ee=null;m.depth&&(Ee=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=m.stencil?Ja:$a,ue=m.stencil?Za:Ds);const Be={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Be),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Ns(f.textureWidth,f.textureHeight,{format:bi,type:nr,depthTexture:new S_(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const _e={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Ns(d.framebufferWidth,d.framebufferHeight,{format:bi,type:nr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Re.setContext(i),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(q){for(let re=0;re<q.removed.length;re++){const _e=q.removed[re],ue=x.indexOf(_e);ue>=0&&(x[ue]=null,y[ue].disconnect(_e))}for(let re=0;re<q.added.length;re++){const _e=q.added[re];let ue=x.indexOf(_e);if(ue===-1){for(let Be=0;Be<y.length;Be++)if(Be>=x.length){x.push(_e),ue=Be;break}else if(x[Be]===null){x[Be]=_e,ue=Be;break}if(ue===-1)break}const Ee=y[ue];Ee&&Ee.connect(_e)}}const V=new U,W=new U;function z(q,re,_e){V.setFromMatrixPosition(re.matrixWorld),W.setFromMatrixPosition(_e.matrixWorld);const ue=V.distanceTo(W),Ee=re.projectionMatrix.elements,Be=_e.projectionMatrix.elements,Oe=Ee[14]/(Ee[10]-1),tt=Ee[14]/(Ee[10]+1),Ze=(Ee[9]+1)/Ee[5],ye=(Ee[9]-1)/Ee[5],R=(Ee[8]-1)/Ee[0],le=(Be[8]+1)/Be[0],te=Oe*R,O=Oe*le,J=ue/(-R+le),Me=J*-R;if(re.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Me),q.translateZ(J),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ee[10]===-1)q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const ae=Oe+J,fe=tt+J,We=te-Me,P=O+(ue-Me),b=Ze*tt/fe*ae,G=ye*tt/fe*ae;q.projectionMatrix.makePerspective(We,P,b,G,ae,fe),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Q(q,re){re===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(re.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let re=q.near,_e=q.far;_.texture!==null&&(_.depthNear>0&&(re=_.depthNear),_.depthFar>0&&(_e=_.depthFar)),v.near=C.near=T.near=re,v.far=C.far=T.far=_e,(D!==v.near||L!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),D=v.near,L=v.far),T.layers.mask=q.layers.mask|2,C.layers.mask=q.layers.mask|4,v.layers.mask=T.layers.mask|C.layers.mask;const ue=q.parent,Ee=v.cameras;Q(v,ue);for(let Be=0;Be<Ee.length;Be++)Q(Ee[Be],ue);Ee.length===2?z(v,T,C):v.projectionMatrix.copy(T.projectionMatrix),N(q,v,ue)};function N(q,re,_e){_e===null?q.matrix.copy(re.matrixWorld):(q.matrix.copy(_e.matrixWorld),q.matrix.invert(),q.matrix.multiply(re.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Fo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let ce=null;function Pe(q,re){if(u=re.getViewerPose(c||o),g=re,u!==null){const _e=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let ue=!1;_e.length!==v.cameras.length&&(v.cameras.length=0,ue=!0);for(let Oe=0;Oe<_e.length;Oe++){const tt=_e[Oe];let Ze=null;if(d!==null)Ze=d.getViewport(tt);else{const R=h.getViewSubImage(f,tt);Ze=R.viewport,Oe===0&&(e.setRenderTargetTextures(S,R.colorTexture,R.depthStencilTexture),e.setRenderTarget(S))}let ye=M[Oe];ye===void 0&&(ye=new zn,ye.layers.enable(Oe),ye.viewport=new pt,M[Oe]=ye),ye.matrix.fromArray(tt.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(tt.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Oe===0&&(v.matrix.copy(ye.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ue===!0&&v.cameras.push(ye)}const Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const Oe=h.getDepthInformation(_e[0]);Oe&&Oe.isValid&&Oe.texture&&_.init(e,Oe,i.renderState)}}for(let _e=0;_e<y.length;_e++){const ue=x[_e],Ee=y[_e];ue!==null&&Ee!==void 0&&Ee.update(ue,re,c||o)}ce&&ce(q,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),g=null}const Re=new O_;Re.setAnimationLoop(Pe),this.setAnimationLoop=function(q){ce=q},this.dispose=function(){}}}const os=new ir,iw=new at;function rw(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,p_(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Vn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Vn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),y=S.envMap,x=S.envMapRotation;y&&(m.envMap.value=y,os.copy(x),os.x*=-1,os.y*=-1,os.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),m.envMapRotation.value.setFromMatrix4(iw.makeRotationFromEuler(os)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function sw(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const x=y.program;n.uniformBlockBinding(S,x)}function c(S,y){let x=i[S.id];x===void 0&&(g(S),x=u(S),i[S.id]=x,S.addEventListener("dispose",m));const A=y.program;n.updateUBOMapping(S,A);const E=e.render.frame;s[S.id]!==E&&(f(S),s[S.id]=E)}function u(S){const y=h();S.__bindingPointIndex=y;const x=r.createBuffer(),A=S.__size,E=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,A,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,x),x}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const y=i[S.id],x=S.uniforms,A=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let E=0,T=x.length;E<T;E++){const C=Array.isArray(x[E])?x[E]:[x[E]];for(let M=0,v=C.length;M<v;M++){const D=C[M];if(d(D,E,M,A)===!0){const L=D.__offset,F=Array.isArray(D.value)?D.value:[D.value];let k=0;for(let Y=0;Y<F.length;Y++){const V=F[Y],W=_(V);typeof V=="number"||typeof V=="boolean"?(D.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,L+k,D.__data)):V.isMatrix3?(D.__data[0]=V.elements[0],D.__data[1]=V.elements[1],D.__data[2]=V.elements[2],D.__data[3]=0,D.__data[4]=V.elements[3],D.__data[5]=V.elements[4],D.__data[6]=V.elements[5],D.__data[7]=0,D.__data[8]=V.elements[6],D.__data[9]=V.elements[7],D.__data[10]=V.elements[8],D.__data[11]=0):(V.toArray(D.__data,k),k+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,L,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(S,y,x,A){const E=S.value,T=y+"_"+x;if(A[T]===void 0)return typeof E=="number"||typeof E=="boolean"?A[T]=E:A[T]=E.clone(),!0;{const C=A[T];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return A[T]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(S){const y=S.uniforms;let x=0;const A=16;for(let T=0,C=y.length;T<C;T++){const M=Array.isArray(y[T])?y[T]:[y[T]];for(let v=0,D=M.length;v<D;v++){const L=M[v],F=Array.isArray(L.value)?L.value:[L.value];for(let k=0,Y=F.length;k<Y;k++){const V=F[k],W=_(V),z=x%A,Q=z%W.boundary,N=z+Q;x+=Q,N!==0&&A-N<W.storage&&(x+=A-N),L.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=W.storage}}}const E=x%A;return E>0&&(x+=A-E),S.__size=x,S.__cache={},this}function _(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class ow{constructor(e={}){const{canvas:t=Ax(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const S=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let A=!1;this._outputColorSpace=Mn;let E=0,T=0,C=null,M=-1,v=null;const D=new pt,L=new pt;let F=null;const k=new et(0);let Y=0,V=t.width,W=t.height,z=1,Q=null,N=null;const ce=new pt(0,0,V,W),Pe=new pt(0,0,V,W);let Re=!1;const q=new ad;let re=!1,_e=!1;const ue=new at,Ee=new at,Be=new U,Oe=new pt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function ye(){return C===null?z:1}let R=n;function le(w,H){return t.getContext(w,H)}try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zf}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",ee,!1),R===null){const H="webgl2";if(R=le(H,w),R===null)throw le(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let te,O,J,Me,ae,fe,We,P,b,G,Z,K,$,we,de,Ne,me,ie,Se,Ge,Ve,pe,Ye,I;function ge(){te=new gb(R),te.init(),pe=new KE(R,te),O=new cb(R,te,e,pe),J=new $E(R,te),O.reverseDepthBuffer&&f&&J.buffers.depth.setReversed(!0),Me=new xb(R),ae=new FE,fe=new JE(R,te,J,ae,O,pe,Me),We=new hb(x),P=new mb(x),b=new EM(R),Ye=new ab(R,b),G=new _b(R,b,Me,Ye),Z=new Mb(R,G,b,Me),Se=new yb(R,O,fe),Ne=new ub(ae),K=new UE(x,We,P,te,O,Ye,Ne),$=new rw(x,ae),we=new BE,de=new XE(te),ie=new ob(x,We,P,J,Z,d,l),me=new qE(x,Z,O),I=new sw(R,Me,O,J),Ge=new lb(R,te,Me),Ve=new vb(R,te,Me),Me.programs=K.programs,x.capabilities=O,x.extensions=te,x.properties=ae,x.renderLists=we,x.shadowMap=me,x.state=J,x.info=Me}ge();const ne=new nw(x,R);this.xr=ne,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const w=te.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=te.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(w){w!==void 0&&(z=w,this.setSize(V,W,!1))},this.getSize=function(w){return w.set(V,W)},this.setSize=function(w,H,j=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=w,W=H,t.width=Math.floor(w*z),t.height=Math.floor(H*z),j===!0&&(t.style.width=w+"px",t.style.height=H+"px"),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(V*z,W*z).floor()},this.setDrawingBufferSize=function(w,H,j){V=w,W=H,z=j,t.width=Math.floor(w*j),t.height=Math.floor(H*j),this.setViewport(0,0,w,H)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(ce)},this.setViewport=function(w,H,j,X){w.isVector4?ce.set(w.x,w.y,w.z,w.w):ce.set(w,H,j,X),J.viewport(D.copy(ce).multiplyScalar(z).round())},this.getScissor=function(w){return w.copy(Pe)},this.setScissor=function(w,H,j,X){w.isVector4?Pe.set(w.x,w.y,w.z,w.w):Pe.set(w,H,j,X),J.scissor(L.copy(Pe).multiplyScalar(z).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(w){J.setScissorTest(Re=w)},this.setOpaqueSort=function(w){Q=w},this.setTransparentSort=function(w){N=w},this.getClearColor=function(w){return w.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(w=!0,H=!0,j=!0){let X=0;if(w){let B=!1;if(C!==null){const oe=C.texture.format;B=oe===nd||oe===td||oe===ed}if(B){const oe=C.texture.type,xe=oe===nr||oe===Ds||oe===qa||oe===Za||oe===Jf||oe===Kf,Le=ie.getClearColor(),Ce=ie.getClearAlpha(),He=Le.r,je=Le.g,ke=Le.b;xe?(g[0]=He,g[1]=je,g[2]=ke,g[3]=Ce,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=He,_[1]=je,_[2]=ke,_[3]=Ce,R.clearBufferiv(R.COLOR,0,_))}else X|=R.COLOR_BUFFER_BIT}H&&(X|=R.DEPTH_BUFFER_BIT),j&&(X|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),ie.dispose(),we.dispose(),de.dispose(),ae.dispose(),We.dispose(),P.dispose(),Z.dispose(),Ye.dispose(),I.dispose(),K.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",ve),ne.removeEventListener("sessionend",Ke),Fe.stop()};function Te(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const w=Me.autoReset,H=me.enabled,j=me.autoUpdate,X=me.needsUpdate,B=me.type;ge(),Me.autoReset=w,me.enabled=H,me.autoUpdate=j,me.needsUpdate=X,me.type=B}function ee(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function De(w){const H=w.target;H.removeEventListener("dispose",De),Xe(H)}function Xe(w){gt(w),ae.remove(w)}function gt(w){const H=ae.get(w).programs;H!==void 0&&(H.forEach(function(j){K.releaseProgram(j)}),w.isShaderMaterial&&K.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,j,X,B,oe){H===null&&(H=tt);const xe=B.isMesh&&B.matrixWorld.determinant()<0,Le=qn(w,H,j,X,B);J.setMaterial(X,xe);let Ce=j.index,He=1;if(X.wireframe===!0){if(Ce=G.getWireframeAttribute(j),Ce===void 0)return;He=2}const je=j.drawRange,ke=j.attributes.position;let Qe=je.start*He,Et=(je.start+je.count)*He;oe!==null&&(Qe=Math.max(Qe,oe.start*He),Et=Math.min(Et,(oe.start+oe.count)*He)),Ce!==null?(Qe=Math.max(Qe,0),Et=Math.min(Et,Ce.count)):ke!=null&&(Qe=Math.max(Qe,0),Et=Math.min(Et,ke.count));const Wt=Et-Qe;if(Wt<0||Wt===1/0)return;Ye.setup(B,X,Le,j,Ce);let Ot,Pt=Ge;if(Ce!==null&&(Ot=b.get(Ce),Pt=Ve,Pt.setIndex(Ot)),B.isMesh)X.wireframe===!0?(J.setLineWidth(X.wireframeLinewidth*ye()),Pt.setMode(R.LINES)):Pt.setMode(R.TRIANGLES);else if(B.isLine){let qe=X.linewidth;qe===void 0&&(qe=1),J.setLineWidth(qe*ye()),B.isLineSegments?Pt.setMode(R.LINES):B.isLineLoop?Pt.setMode(R.LINE_LOOP):Pt.setMode(R.LINE_STRIP)}else B.isPoints?Pt.setMode(R.POINTS):B.isSprite&&Pt.setMode(R.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)So("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))Pt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const qe=B._multiDrawStarts,zt=B._multiDrawCounts,ft=B._multiDrawCount,Zn=Ce?b.get(Ce).bytesPerElement:1,Bs=ae.get(X).currentProgram.getUniforms();for(let $n=0;$n<ft;$n++)Bs.setValue(R,"_gl_DrawID",$n),Pt.render(qe[$n]/Zn,zt[$n])}else if(B.isInstancedMesh)Pt.renderInstances(Qe,Wt,B.count);else if(j.isInstancedBufferGeometry){const qe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,zt=Math.min(j.instanceCount,qe);Pt.renderInstances(Qe,Wt,zt)}else Pt.render(Qe,Wt)};function Ae(w,H,j){w.transparent===!0&&w.side===Fi&&w.forceSinglePass===!1?(w.side=Vn,w.needsUpdate=!0,Ct(w,H,j),w.side=Xr,w.needsUpdate=!0,Ct(w,H,j),w.side=Fi):Ct(w,H,j)}this.compile=function(w,H,j=null){j===null&&(j=w),p=de.get(j),p.init(H),y.push(p),j.traverseVisible(function(B){B.isLight&&B.layers.test(H.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),w!==j&&w.traverseVisible(function(B){B.isLight&&B.layers.test(H.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const X=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const oe=B.material;if(oe)if(Array.isArray(oe))for(let xe=0;xe<oe.length;xe++){const Le=oe[xe];Ae(Le,j,B),X.add(Le)}else Ae(oe,j,B),X.add(oe)}),p=y.pop(),X},this.compileAsync=function(w,H,j=null){const X=this.compile(w,H,j);return new Promise(B=>{function oe(){if(X.forEach(function(xe){ae.get(xe).currentProgram.isReady()&&X.delete(xe)}),X.size===0){B(w);return}setTimeout(oe,10)}te.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Ue=null;function nt(w){Ue&&Ue(w)}function ve(){Fe.stop()}function Ke(){Fe.start()}const Fe=new O_;Fe.setAnimationLoop(nt),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(w){Ue=w,ne.setAnimationLoop(w),w===null?Fe.stop():Fe.start()},ne.addEventListener("sessionstart",ve),ne.addEventListener("sessionend",Ke),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(H),H=ne.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,H,C),p=de.get(w,y.length),p.init(H),y.push(p),Ee.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),q.setFromProjectionMatrix(Ee),_e=this.localClippingEnabled,re=Ne.init(this.clippingPlanes,_e),m=we.get(w,S.length),m.init(),S.push(m),ne.enabled===!0&&ne.isPresenting===!0){const oe=x.xr.getDepthSensingMesh();oe!==null&&Je(oe,H,-1/0,x.sortObjects)}Je(w,H,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(Q,N),Ze=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Ze&&ie.addToRenderList(m,w),this.info.render.frame++,re===!0&&Ne.beginShadows();const j=p.state.shadowsArray;me.render(j,w,H),re===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,B=m.transmissive;if(p.setupLights(),H.isArrayCamera){const oe=H.cameras;if(B.length>0)for(let xe=0,Le=oe.length;xe<Le;xe++){const Ce=oe[xe];lt(X,B,w,Ce)}Ze&&ie.render(w);for(let xe=0,Le=oe.length;xe<Le;xe++){const Ce=oe[xe];Yt(m,w,Ce,Ce.viewport)}}else B.length>0&&lt(X,B,w,H),Ze&&ie.render(w),Yt(m,w,H);C!==null&&T===0&&(fe.updateMultisampleRenderTarget(C),fe.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(x,w,H),Ye.resetDefaultState(),M=-1,v=null,y.pop(),y.length>0?(p=y[y.length-1],re===!0&&Ne.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Je(w,H,j,X){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){X&&Oe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ee);const xe=Z.update(w),Le=w.material;Le.visible&&m.push(w,xe,Le,j,Oe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){const xe=Z.update(w),Le=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Oe.copy(w.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Oe.copy(xe.boundingSphere.center)),Oe.applyMatrix4(w.matrixWorld).applyMatrix4(Ee)),Array.isArray(Le)){const Ce=xe.groups;for(let He=0,je=Ce.length;He<je;He++){const ke=Ce[He],Qe=Le[ke.materialIndex];Qe&&Qe.visible&&m.push(w,xe,Qe,j,Oe.z,ke)}}else Le.visible&&m.push(w,xe,Le,j,Oe.z,null)}}const oe=w.children;for(let xe=0,Le=oe.length;xe<Le;xe++)Je(oe[xe],H,j,X)}function Yt(w,H,j,X){const B=w.opaque,oe=w.transmissive,xe=w.transparent;p.setupLightsView(j),re===!0&&Ne.setGlobalState(x.clippingPlanes,j),X&&J.viewport(D.copy(X)),B.length>0&&It(B,H,j),oe.length>0&&It(oe,H,j),xe.length>0&&It(xe,H,j),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function lt(w,H,j,X){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Ns(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?pl:nr,minFilter:ys,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const oe=p.state.transmissionRenderTarget[X.id],xe=X.viewport||D;oe.setSize(xe.z*x.transmissionResolutionScale,xe.w*x.transmissionResolutionScale);const Le=x.getRenderTarget(),Ce=x.getActiveCubeFace(),He=x.getActiveMipmapLevel();x.setRenderTarget(oe),x.getClearColor(k),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),Ze&&ie.render(j);const je=x.toneMapping;x.toneMapping=Vr;const ke=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),re===!0&&Ne.setGlobalState(x.clippingPlanes,X),It(w,j,X),fe.updateMultisampleRenderTarget(oe),fe.updateRenderTargetMipmap(oe),te.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Et=0,Wt=H.length;Et<Wt;Et++){const Ot=H[Et],Pt=Ot.object,qe=Ot.geometry,zt=Ot.material,ft=Ot.group;if(zt.side===Fi&&Pt.layers.test(X.layers)){const Zn=zt.side;zt.side=Vn,zt.needsUpdate=!0,tn(Pt,j,X,qe,zt,ft),zt.side=Zn,zt.needsUpdate=!0,Qe=!0}}Qe===!0&&(fe.updateMultisampleRenderTarget(oe),fe.updateRenderTargetMipmap(oe))}x.setRenderTarget(Le,Ce,He),x.setClearColor(k,Y),ke!==void 0&&(X.viewport=ke),x.toneMapping=je}function It(w,H,j){const X=H.isScene===!0?H.overrideMaterial:null;for(let B=0,oe=w.length;B<oe;B++){const xe=w[B],Le=xe.object,Ce=xe.geometry,He=xe.group;let je=xe.material;je.allowOverride===!0&&X!==null&&(je=X),Le.layers.test(j.layers)&&tn(Le,H,j,Ce,je,He)}}function tn(w,H,j,X,B,oe){w.onBeforeRender(x,H,j,X,B,oe),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(x,H,j,X,w,oe),B.transparent===!0&&B.side===Fi&&B.forceSinglePass===!1?(B.side=Vn,B.needsUpdate=!0,x.renderBufferDirect(j,H,X,B,w,oe),B.side=Xr,B.needsUpdate=!0,x.renderBufferDirect(j,H,X,B,w,oe),B.side=Fi):x.renderBufferDirect(j,H,X,B,w,oe),w.onAfterRender(x,H,j,X,B,oe)}function Ct(w,H,j){H.isScene!==!0&&(H=tt);const X=ae.get(w),B=p.state.lights,oe=p.state.shadowsArray,xe=B.state.version,Le=K.getParameters(w,B.state,oe,H,j),Ce=K.getProgramCacheKey(Le);let He=X.programs;X.environment=w.isMeshStandardMaterial?H.environment:null,X.fog=H.fog,X.envMap=(w.isMeshStandardMaterial?P:We).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,He===void 0&&(w.addEventListener("dispose",De),He=new Map,X.programs=He);let je=He.get(Ce);if(je!==void 0){if(X.currentProgram===je&&X.lightsStateVersion===xe)return vt(w,Le),je}else Le.uniforms=K.getUniforms(w),w.onBeforeCompile(Le,x),je=K.acquireProgram(Le,Ce),He.set(Ce,je),X.uniforms=Le.uniforms;const ke=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ke.clippingPlanes=Ne.uniform),vt(w,Le),X.needsLights=wn(w),X.lightsStateVersion=xe,X.needsLights&&(ke.ambientLightColor.value=B.state.ambient,ke.lightProbe.value=B.state.probe,ke.directionalLights.value=B.state.directional,ke.directionalLightShadows.value=B.state.directionalShadow,ke.spotLights.value=B.state.spot,ke.spotLightShadows.value=B.state.spotShadow,ke.rectAreaLights.value=B.state.rectArea,ke.ltc_1.value=B.state.rectAreaLTC1,ke.ltc_2.value=B.state.rectAreaLTC2,ke.pointLights.value=B.state.point,ke.pointLightShadows.value=B.state.pointShadow,ke.hemisphereLights.value=B.state.hemi,ke.directionalShadowMap.value=B.state.directionalShadowMap,ke.directionalShadowMatrix.value=B.state.directionalShadowMatrix,ke.spotShadowMap.value=B.state.spotShadowMap,ke.spotLightMatrix.value=B.state.spotLightMatrix,ke.spotLightMap.value=B.state.spotLightMap,ke.pointShadowMap.value=B.state.pointShadowMap,ke.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=je,X.uniformsList=null,je}function Rt(w){if(w.uniformsList===null){const H=w.currentProgram.getUniforms();w.uniformsList=yc.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function vt(w,H){const j=ae.get(w);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.batchingColor=H.batchingColor,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.instancingMorph=H.instancingMorph,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function qn(w,H,j,X,B){H.isScene!==!0&&(H=tt),fe.resetTextureUnits();const oe=H.fog,xe=X.isMeshStandardMaterial?H.environment:null,Le=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Uo,Ce=(X.isMeshStandardMaterial?P:We).get(X.envMap||xe),He=X.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,je=!!j.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),ke=!!j.morphAttributes.position,Qe=!!j.morphAttributes.normal,Et=!!j.morphAttributes.color;let Wt=Vr;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Wt=x.toneMapping);const Ot=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Pt=Ot!==void 0?Ot.length:0,qe=ae.get(X),zt=p.state.lights;if(re===!0&&(_e===!0||w!==v)){const An=w===v&&X.id===M;Ne.setState(X,w,An)}let ft=!1;X.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==zt.state.version||qe.outputColorSpace!==Le||B.isBatchedMesh&&qe.batching===!1||!B.isBatchedMesh&&qe.batching===!0||B.isBatchedMesh&&qe.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&qe.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&qe.instancing===!1||!B.isInstancedMesh&&qe.instancing===!0||B.isSkinnedMesh&&qe.skinning===!1||!B.isSkinnedMesh&&qe.skinning===!0||B.isInstancedMesh&&qe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&qe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&qe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&qe.instancingMorph===!1&&B.morphTexture!==null||qe.envMap!==Ce||X.fog===!0&&qe.fog!==oe||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ne.numPlanes||qe.numIntersection!==Ne.numIntersection)||qe.vertexAlphas!==He||qe.vertexTangents!==je||qe.morphTargets!==ke||qe.morphNormals!==Qe||qe.morphColors!==Et||qe.toneMapping!==Wt||qe.morphTargetsCount!==Pt)&&(ft=!0):(ft=!0,qe.__version=X.version);let Zn=qe.currentProgram;ft===!0&&(Zn=Ct(X,H,B));let Bs=!1,$n=!1,Ko=!1;const Ut=Zn.getUniforms(),gi=qe.uniforms;if(J.useProgram(Zn.program)&&(Bs=!0,$n=!0,Ko=!0),X.id!==M&&(M=X.id,$n=!0),Bs||v!==w){J.buffers.depth.getReversed()?(ue.copy(w.projectionMatrix),Rx(ue),Px(ue),Ut.setValue(R,"projectionMatrix",ue)):Ut.setValue(R,"projectionMatrix",w.projectionMatrix),Ut.setValue(R,"viewMatrix",w.matrixWorldInverse);const Un=Ut.map.cameraPosition;Un!==void 0&&Un.setValue(R,Be.setFromMatrixPosition(w.matrixWorld)),O.logarithmicDepthBuffer&&Ut.setValue(R,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ut.setValue(R,"isOrthographic",w.isOrthographicCamera===!0),v!==w&&(v=w,$n=!0,Ko=!0)}if(B.isSkinnedMesh){Ut.setOptional(R,B,"bindMatrix"),Ut.setOptional(R,B,"bindMatrixInverse");const An=B.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Ut.setValue(R,"boneTexture",An.boneTexture,fe))}B.isBatchedMesh&&(Ut.setOptional(R,B,"batchingTexture"),Ut.setValue(R,"batchingTexture",B._matricesTexture,fe),Ut.setOptional(R,B,"batchingIdTexture"),Ut.setValue(R,"batchingIdTexture",B._indirectTexture,fe),Ut.setOptional(R,B,"batchingColorTexture"),B._colorsTexture!==null&&Ut.setValue(R,"batchingColorTexture",B._colorsTexture,fe));const _i=j.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&Se.update(B,j,Zn),($n||qe.receiveShadow!==B.receiveShadow)&&(qe.receiveShadow=B.receiveShadow,Ut.setValue(R,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(gi.envMap.value=Ce,gi.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&H.environment!==null&&(gi.envMapIntensity.value=H.environmentIntensity),$n&&(Ut.setValue(R,"toneMappingExposure",x.toneMappingExposure),qe.needsLights&&Lt(gi,Ko),oe&&X.fog===!0&&$.refreshFogUniforms(gi,oe),$.refreshMaterialUniforms(gi,X,z,W,p.state.transmissionRenderTarget[w.id]),yc.upload(R,Rt(qe),gi,fe)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(yc.upload(R,Rt(qe),gi,fe),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ut.setValue(R,"center",B.center),Ut.setValue(R,"modelViewMatrix",B.modelViewMatrix),Ut.setValue(R,"normalMatrix",B.normalMatrix),Ut.setValue(R,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const An=X.uniformsGroups;for(let Un=0,gu=An.length;Un<gu;Un++){const Qr=An[Un];I.update(Qr,Zn),I.bind(Qr,Zn)}}return Zn}function Lt(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function wn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,H,j){const X=ae.get(w);X.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),ae.get(w.texture).__webglTexture=H,ae.get(w.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:j,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,H){const j=ae.get(w);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0};const mi=R.createFramebuffer();this.setRenderTarget=function(w,H=0,j=0){C=w,E=H,T=j;let X=!0,B=null,oe=!1,xe=!1;if(w){const Ce=ae.get(w);if(Ce.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(R.FRAMEBUFFER,null),X=!1;else if(Ce.__webglFramebuffer===void 0)fe.setupRenderTarget(w);else if(Ce.__hasExternalTextures)fe.rebindTextures(w,ae.get(w.texture).__webglTexture,ae.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ke=w.depthTexture;if(Ce.__boundDepthTexture!==ke){if(ke!==null&&ae.has(ke)&&(w.width!==ke.image.width||w.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(w)}}const He=w.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(xe=!0);const je=ae.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(je[H])?B=je[H][j]:B=je[H],oe=!0):w.samples>0&&fe.useMultisampledRTT(w)===!1?B=ae.get(w).__webglMultisampledFramebuffer:Array.isArray(je)?B=je[j]:B=je,D.copy(w.viewport),L.copy(w.scissor),F=w.scissorTest}else D.copy(ce).multiplyScalar(z).floor(),L.copy(Pe).multiplyScalar(z).floor(),F=Re;if(j!==0&&(B=mi),J.bindFramebuffer(R.FRAMEBUFFER,B)&&X&&J.drawBuffers(w,B),J.viewport(D),J.scissor(L),J.setScissorTest(F),oe){const Ce=ae.get(w.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ce.__webglTexture,j)}else if(xe){const Ce=ae.get(w.texture),He=H;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ce.__webglTexture,j,He)}else if(w!==null&&j!==0){const Ce=ae.get(w.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ce.__webglTexture,j)}M=-1},this.readRenderTargetPixels=function(w,H,j,X,B,oe,xe,Le=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ae.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(Ce=Ce[xe]),Ce){J.bindFramebuffer(R.FRAMEBUFFER,Ce);try{const He=w.textures[Le],je=He.format,ke=He.type;if(!O.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!O.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-X&&j>=0&&j<=w.height-B&&(w.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Le),R.readPixels(H,j,X,B,pe.convert(je),pe.convert(ke),oe))}finally{const He=C!==null?ae.get(C).__webglFramebuffer:null;J.bindFramebuffer(R.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(w,H,j,X,B,oe,xe,Le=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=ae.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(Ce=Ce[xe]),Ce)if(H>=0&&H<=w.width-X&&j>=0&&j<=w.height-B){J.bindFramebuffer(R.FRAMEBUFFER,Ce);const He=w.textures[Le],je=He.format,ke=He.type;if(!O.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Qe),R.bufferData(R.PIXEL_PACK_BUFFER,oe.byteLength,R.STREAM_READ),w.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Le),R.readPixels(H,j,X,B,pe.convert(je),pe.convert(ke),0);const Et=C!==null?ae.get(C).__webglFramebuffer:null;J.bindFramebuffer(R.FRAMEBUFFER,Et);const Wt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Cx(R,Wt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Qe),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,oe),R.deleteBuffer(Qe),R.deleteSync(Wt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,H=null,j=0){const X=Math.pow(2,-j),B=Math.floor(w.image.width*X),oe=Math.floor(w.image.height*X),xe=H!==null?H.x:0,Le=H!==null?H.y:0;fe.setTexture2D(w,0),R.copyTexSubImage2D(R.TEXTURE_2D,j,0,0,xe,Le,B,oe),J.unbindTexture()};const nn=R.createFramebuffer(),rn=R.createFramebuffer();this.copyTextureToTexture=function(w,H,j=null,X=null,B=0,oe=null){oe===null&&(B!==0?(So("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=B,B=0):oe=0);let xe,Le,Ce,He,je,ke,Qe,Et,Wt;const Ot=w.isCompressedTexture?w.mipmaps[oe]:w.image;if(j!==null)xe=j.max.x-j.min.x,Le=j.max.y-j.min.y,Ce=j.isBox3?j.max.z-j.min.z:1,He=j.min.x,je=j.min.y,ke=j.isBox3?j.min.z:0;else{const _i=Math.pow(2,-B);xe=Math.floor(Ot.width*_i),Le=Math.floor(Ot.height*_i),w.isDataArrayTexture?Ce=Ot.depth:w.isData3DTexture?Ce=Math.floor(Ot.depth*_i):Ce=1,He=0,je=0,ke=0}X!==null?(Qe=X.x,Et=X.y,Wt=X.z):(Qe=0,Et=0,Wt=0);const Pt=pe.convert(H.format),qe=pe.convert(H.type);let zt;H.isData3DTexture?(fe.setTexture3D(H,0),zt=R.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(fe.setTexture2DArray(H,0),zt=R.TEXTURE_2D_ARRAY):(fe.setTexture2D(H,0),zt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,H.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,H.unpackAlignment);const ft=R.getParameter(R.UNPACK_ROW_LENGTH),Zn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Bs=R.getParameter(R.UNPACK_SKIP_PIXELS),$n=R.getParameter(R.UNPACK_SKIP_ROWS),Ko=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ot.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ot.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,He),R.pixelStorei(R.UNPACK_SKIP_ROWS,je),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ke);const Ut=w.isDataArrayTexture||w.isData3DTexture,gi=H.isDataArrayTexture||H.isData3DTexture;if(w.isDepthTexture){const _i=ae.get(w),An=ae.get(H),Un=ae.get(_i.__renderTarget),gu=ae.get(An.__renderTarget);J.bindFramebuffer(R.READ_FRAMEBUFFER,Un.__webglFramebuffer),J.bindFramebuffer(R.DRAW_FRAMEBUFFER,gu.__webglFramebuffer);for(let Qr=0;Qr<Ce;Qr++)Ut&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ae.get(w).__webglTexture,B,ke+Qr),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ae.get(H).__webglTexture,oe,Wt+Qr)),R.blitFramebuffer(He,je,xe,Le,Qe,Et,xe,Le,R.DEPTH_BUFFER_BIT,R.NEAREST);J.bindFramebuffer(R.READ_FRAMEBUFFER,null),J.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(B!==0||w.isRenderTargetTexture||ae.has(w)){const _i=ae.get(w),An=ae.get(H);J.bindFramebuffer(R.READ_FRAMEBUFFER,nn),J.bindFramebuffer(R.DRAW_FRAMEBUFFER,rn);for(let Un=0;Un<Ce;Un++)Ut?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_i.__webglTexture,B,ke+Un):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,_i.__webglTexture,B),gi?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,An.__webglTexture,oe,Wt+Un):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,An.__webglTexture,oe),B!==0?R.blitFramebuffer(He,je,xe,Le,Qe,Et,xe,Le,R.COLOR_BUFFER_BIT,R.NEAREST):gi?R.copyTexSubImage3D(zt,oe,Qe,Et,Wt+Un,He,je,xe,Le):R.copyTexSubImage2D(zt,oe,Qe,Et,He,je,xe,Le);J.bindFramebuffer(R.READ_FRAMEBUFFER,null),J.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else gi?w.isDataTexture||w.isData3DTexture?R.texSubImage3D(zt,oe,Qe,Et,Wt,xe,Le,Ce,Pt,qe,Ot.data):H.isCompressedArrayTexture?R.compressedTexSubImage3D(zt,oe,Qe,Et,Wt,xe,Le,Ce,Pt,Ot.data):R.texSubImage3D(zt,oe,Qe,Et,Wt,xe,Le,Ce,Pt,qe,Ot):w.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,oe,Qe,Et,xe,Le,Pt,qe,Ot.data):w.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,oe,Qe,Et,Ot.width,Ot.height,Pt,Ot.data):R.texSubImage2D(R.TEXTURE_2D,oe,Qe,Et,xe,Le,Pt,qe,Ot);R.pixelStorei(R.UNPACK_ROW_LENGTH,ft),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Zn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Bs),R.pixelStorei(R.UNPACK_SKIP_ROWS,$n),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ko),oe===0&&H.generateMipmaps&&R.generateMipmap(zt),J.unbindTexture()},this.copyTextureToTexture3D=function(w,H,j=null,X=null,B=0){return So('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,H,j,X,B)},this.initRenderTarget=function(w){ae.get(w).__webglFramebuffer===void 0&&fe.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?fe.setTextureCube(w,0):w.isData3DTexture?fe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?fe.setTexture2DArray(w,0):fe.setTexture2D(w,0),J.unbindTexture()},this.resetState=function(){E=0,T=0,C=null,J.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _r}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}function pr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function k_(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var hi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},nl={duration:.5,overwrite:!1,delay:0},pd,gn,Ft,Ei=1e8,Nt=1/Ei,mf=Math.PI*2,aw=mf/4,lw=0,V_=Math.sqrt,cw=Math.cos,uw=Math.sin,fn=function(e){return typeof e=="string"},Xt=function(e){return typeof e=="function"},Sr=function(e){return typeof e=="number"},md=function(e){return typeof e>"u"},rr=function(e){return typeof e=="object"},Gn=function(e){return e!==!1},gd=function(){return typeof window<"u"},Ql=function(e){return Xt(e)||fn(e)},H_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},En=Array.isArray,hw=/random\([^)]+\)/g,fw=/,\s*/g,vm=/(?:-?\.?\d|\.)+/gi,G_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,_o=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ih=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,W_=/[+-]=-?[.\d]+/,dw=/[^,'"\[\]\s]+/gi,pw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,kt,qi,gf,_d,fi={},kc={},X_,Y_=function(e){return(kc=ko(e,fi))&&jn},vd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},il=function(e,t){return!t&&console.warn(e)},j_=function(e,t){return e&&(fi[e]=t)&&kc&&(kc[e]=t)||fi},rl=function(){return 0},mw={suppressEvents:!0,isStart:!0,kill:!1},Mc={suppressEvents:!0,kill:!1},gw={suppressEvents:!0},xd={},Hr=[],_f={},q_,ii={},rh={},xm=30,Sc=[],yd="",Md=function(e){var t=e[0],n,i;if(rr(t)||Xt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Sc.length;i--&&!Sc[i].targetTest(t););n=Sc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new g0(e[i],n)))||e.splice(i,1);return e},Ts=function(e){return e._gsap||Md(wi(e))[0]._gsap},Z_=function(e,t,n){return(n=e[t])&&Xt(n)?e[t]():md(n)&&e.getAttribute&&e.getAttribute(t)||n},Wn=function(e,t){return(e=e.split(",")).forEach(t)||e},jt=function(e){return Math.round(e*1e5)/1e5||0},Bt=function(e){return Math.round(e*1e7)/1e7||0},bo=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},_w=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Vc=function(){var e=Hr.length,t=Hr.slice(0),n,i;for(_f={},Hr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Sd=function(e){return!!(e._initted||e._startAt||e.add)},$_=function(e,t,n,i){Hr.length&&!gn&&Vc(),e.render(t,n,!!(gn&&t<0&&Sd(e))),Hr.length&&!gn&&Vc()},J_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(dw).length<2?t:fn(e)?e.trim():e},K_=function(e){return e},di=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},vw=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ko=function(e,t){for(var n in t)e[n]=t[n];return e},ym=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=rr(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Hc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Pa=function(e){var t=e.parent||kt,n=e.keyframes?vw(En(e.keyframes)):di;if(Gn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},xw=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Q_=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},hu=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Yr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},bs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},yw=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},vf=function(e,t,n,i){return e._startAt&&(gn?e._startAt.revert(Mc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Mw=function r(e){return!e||e._ts&&r(e.parent)},Mm=function(e){return e._repeat?Vo(e._tTime,e=e.duration()+e._rDelay)*e:0},Vo=function(e,t){var n=Math.floor(e=Bt(e/t));return e&&n===e?n-1:n},Gc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},fu=function(e){return e._end=Bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Nt)||0))},du=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Bt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),fu(e),n._dirty||bs(n,e)),e},e0=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Gc(e.rawTime(),t),(!t._dur||_l(0,t.totalDuration(),n)-t._tTime>Nt)&&t.render(n,!0)),bs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Nt}},Ji=function(e,t,n,i){return t.parent&&Yr(t),t._start=Bt((Sr(n)?n:n||e!==kt?xi(e,n,t):e._time)+t._delay),t._end=Bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Q_(e,t,"_first","_last",e._sort?"_start":0),xf(t)||(e._recent=t),i||e0(e,t),e._ts<0&&du(e,e._tTime),e},t0=function(e,t){return(fi.ScrollTrigger||vd("scrollTrigger",t))&&fi.ScrollTrigger.create(t,e)},n0=function(e,t,n,i,s){if(bd(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!gn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&q_!==si.frame)return Hr.push(e),e._lazy=[s,i],1},Sw=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},xf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Tw=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Sw(e)&&!(!e._initted&&xf(e))||(e._ts<0||e._dp._ts<0)&&!xf(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=_l(0,e._tDur,t),u=Vo(l,a),e._yoyo&&u&1&&(o=1-o),u!==Vo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||gn||i||e._zTime===Nt||!t&&e._zTime){if(!e._initted&&n0(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Nt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&vf(e,t,n,!0),e._onUpdate&&!n&&li(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&li(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Yr(e,1),!n&&!gn&&(li(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},bw=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ho=function(e,t,n,i){var s=e._repeat,o=Bt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Bt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&du(e,e._tTime=e._tDur*a),e.parent&&fu(e),n||bs(e.parent,e),e},Sm=function(e){return e instanceof Bn?bs(e):Ho(e,e._dur)},Ew={_start:0,endTime:rl,totalDuration:rl},xi=function r(e,t,n){var i=e.labels,s=e._recent||Ew,o=e.duration()>=Ei?s.endTime(!1):e._dur,a,l,c;return fn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(En(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Da=function(e,t,n){var i=Sr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Gn(l.vars.inherit)&&l.parent;o.immediateRender=Gn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Kt(t[0],o,t[s+1])},Kr=function(e,t){return e||e===0?t(e):t},_l=function(e,t,n){return n<e?e:n>t?t:n},Sn=function(e,t){return!fn(e)||!(t=pw.exec(e))?"":t[1]},ww=function(e,t,n){return Kr(n,function(i){return _l(e,t,i)})},yf=[].slice,i0=function(e,t){return e&&rr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&rr(e[0]))&&!e.nodeType&&e!==qi},Aw=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return fn(i)&&!t||i0(i,1)?(s=n).push.apply(s,wi(i)):n.push(i)})||n},wi=function(e,t,n){return Ft&&!t&&Ft.selector?Ft.selector(e):fn(e)&&!n&&(gf||!Go())?yf.call((t||_d).querySelectorAll(e),0):En(e)?Aw(e,n):i0(e)?yf.call(e,0):e?[e]:[]},Mf=function(e){return e=wi(e)[0]||il("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return wi(t,n.querySelectorAll?n:n===e?il("Invalid scope")||_d.createElement("div"):e)}},r0=function(e){return e.sort(function(){return .5-Math.random()})},s0=function(e){if(Xt(e))return e;var t=rr(e)?e:{each:e},n=Es(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return fn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||t).length,m=o[_],p,S,y,x,A,E,T,C,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,Ei])[1],!M){for(T=-Ei;T<(T=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=o[_]=[],p=l?Math.min(M,_)*u-.5:i%M,S=M===Ei?0:l?_*h/M-.5:i/M|0,T=0,C=Ei,E=0;E<_;E++)y=E%M-p,x=S-(E/M|0),m[E]=A=c?Math.abs(c==="y"?x:y):V_(y*y+x*x),A>T&&(T=A),A<C&&(C=A);i==="random"&&r0(m),m.max=T-C,m.min=C,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Sn(t.amount||t.each)||0,n=n&&_<0?kw(n):n}return _=(m[f]-m.min)/m.max||0,Bt(m.b+(n?n(_):_)*m.v)+m.u}},Sf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Bt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Sr(n)?0:Sn(n))}},o0=function(e,t){var n=En(e),i,s;return!n&&rr(e)&&(i=n=e.radius||Ei,e.values?(e=wi(e.values),(s=!Sr(e[0]))&&(i*=i)):e=Sf(e.increment)),Kr(t,n?Xt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Ei,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||Sr(o)?u:u+Sn(o)}:Sf(e))},a0=function(e,t,n,i){return Kr(En(e)?!t:n===!0?!!(n=0):!i,function(){return En(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Cw=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Rw=function(e,t){return function(n){return e(parseFloat(n))+(t||Sn(n))}},Pw=function(e,t,n){return c0(e,t,0,1,n)},l0=function(e,t,n){return Kr(n,function(i){return e[~~t(i)]})},Dw=function r(e,t,n){var i=t-e;return En(e)?l0(e,r(0,e.length),t):Kr(n,function(s){return(i+(s-e)%i)%i+e})},Nw=function r(e,t,n){var i=t-e,s=i*2;return En(e)?l0(e,r(0,e.length-1),t):Kr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},sl=function(e){return e.replace(hw,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(fw);return a0(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},c0=function(e,t,n,i,s){var o=t-e,a=i-n;return Kr(s,function(l){return n+((l-e)/o*a||0)})},Iw=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=fn(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(En(e)&&!En(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=ko(En(e)?[]:{},e));if(!u){for(l in t)Td.call(a,e,l,"get",t[l]);s=function(g){return Ad(g,a)||(o?e.p:e)}}}return Kr(n,s)},Tm=function(e,t,n){var i=e.labels,s=Ei,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},li=function(e,t,n){var i=e.vars,s=i[t],o=Ft,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Hr.length&&Vc(),a&&(Ft=a),u=l?s.apply(c,l):s.call(c),Ft=o,u},_a=function(e){return Yr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!gn),e.progress()<1&&li(e,"onInterrupt"),e},vo,u0=[],h0=function(e){if(e)if(e=!e.name&&e.default||e,gd()||e.headless){var t=e.name,n=Xt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:rl,render:Ad,add:Td,kill:$w,modifier:Zw,rawVars:0},o={targetTest:0,get:0,getSetter:wd,aliases:{},register:0};if(Go(),e!==i){if(ii[t])return;di(i,di(Hc(e,s),o)),ko(i.prototype,ko(s,Hc(e,o))),ii[i.prop=t]=i,e.targetTest&&(Sc.push(i),xd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}j_(t,i),e.register&&e.register(jn,i,Xn)}else u0.push(e)},Dt=255,va={aqua:[0,Dt,Dt],lime:[0,Dt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Dt],navy:[0,0,128],white:[Dt,Dt,Dt],olive:[128,128,0],yellow:[Dt,Dt,0],orange:[Dt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Dt,0,0],pink:[Dt,192,203],cyan:[0,Dt,Dt],transparent:[Dt,Dt,Dt,0]},sh=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Dt+.5|0},f0=function(e,t,n){var i=e?Sr(e)?[e>>16,e>>8&Dt,e&Dt]:0:va.black,s,o,a,l,c,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),va[e])i=va[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Dt,i&Dt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Dt,e&Dt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(vm),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=sh(l+1/3,s,o),i[1]=sh(l,s,o),i[2]=sh(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(G_),n&&i.length<4&&(i[3]=1),i}else i=e.match(vm)||va.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Dt,o=i[1]/Dt,a=i[2]/Dt,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},d0=function(e){var t=[],n=[],i=-1;return e.split(Gr).forEach(function(s){var o=s.match(_o)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},bm=function(e,t,n){var i="",s=(e+i).match(Gr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=f0(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=d0(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Gr,"1").split(_o),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Gr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},Gr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in va)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),Lw=/hsl[a]?\(/,p0=function(e){var t=e.join(" "),n;if(Gr.lastIndex=0,Gr.test(t))return n=Lw.test(t),e[1]=bm(e[1],n),e[0]=bm(e[0],n,d0(e[1])),!0},ol,si=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,g=function _(m){var p=r()-i,S=m===!0,y,x,A,E;if((p>e||p<0)&&(n+=p-t),i+=p,A=i-n,y=A-o,(y>0||S)&&(E=++h.frame,f=A-h.time*1e3,h.time=A=A/1e3,o+=y+(y>=s?4:s-y),x=1),S||(l=c(_)),x)for(d=0;d<a.length;d++)a[d](A,f,E,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){X_&&(!gf&&gd()&&(qi=gf=window,_d=qi.document||{},fi.gsap=jn,(qi.gsapVersions||(qi.gsapVersions=[])).push(jn.version),Y_(kc||qi.GreenSockGlobals||!qi.gsap&&qi||{}),u0.forEach(h0)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},ol=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ol=0,c=rl},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,S){var y=p?function(x,A,E,T){m(x,A,E,T),h.remove(y)}:m;return h.remove(m),a[S?"unshift":"push"](y),Go(),y},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h})(),Go=function(){return!ol&&si.wake()},ht={},Ow=/^[\d.\-M][\d.\-,\s]/,Uw=/["']/g,Fw=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(Uw,"").trim():+c,i=l.substr(a+1).trim();return t},zw=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Bw=function(e){var t=(e+"").split("("),n=ht[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Fw(t[1])]:zw(e).split(",").map(J_)):ht._CE&&Ow.test(e)?ht._CE("",e):n},kw=function(e){return function(t){return 1-e(1-t)}},Es=function(e,t){return e&&(Xt(e)?e:ht[e]||Bw(e))||t},zs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Wn(e,function(a){ht[a]=fi[a]=s,ht[o=a.toLowerCase()]=n;for(var l in s)ht[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ht[a+"."+l]=s[l]}),s},m0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},oh=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/mf*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*uw((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:m0(a);return s=mf/s,l.config=function(c,u){return r(e,c,u)},l},ah=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:m0(n);return i.config=function(s){return r(e,s)},i};Wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;zs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ht.Linear.easeNone=ht.none=ht.Linear.easeIn;zs("Elastic",oh("in"),oh("out"),oh());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};zs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);zs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});zs("Circ",function(r){return-(V_(1-r*r)-1)});zs("Sine",function(r){return r===1?1:-cw(r*aw)+1});zs("Back",ah("in"),ah("out"),ah());ht.SteppedEase=ht.steps=fi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Nt;return function(a){return((i*_l(0,o,a)|0)+s)*n}}};nl.ease=ht["quad.out"];Wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return yd+=r+","+r+"Params,"});var g0=function(e,t){this.id=lw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Z_,this.set=t?t.getSetter:wd},al=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ho(this,+t.duration,1,1),this.data=t.data,Ft&&(this._ctx=Ft,Ft.data.push(this)),ol||si.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ho(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Go(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(du(this,n),!s._dp||s.parent||e0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ji(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Nt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),$_(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Mm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Mm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Vo(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Nt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Gc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Nt?0:this._rts,this.totalTime(_l(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),fu(this),yw(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Go(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Nt&&(this._tTime-=Nt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Bt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ji(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Gn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Gc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=gw);var i=gn;return gn=n,Sd(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),gn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Sm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Sm(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(xi(this,n),Gn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Gn(i)),this._dur||(this._zTime=-Nt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Nt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Nt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Nt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Xt(n)?n:K_,l=function(){var u=i.then;i.then=null,s&&s(),Xt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){_a(this)},r})();di(al.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Nt,_prom:0,_ps:!1,_rts:1});var Bn=(function(r){k_(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Gn(n.sortChildren),kt&&Ji(n.parent||kt,pr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&t0(pr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Da(0,arguments,this),this},t.from=function(i,s,o){return Da(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Da(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Pa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Kt(i,s,xi(this,o),1),this},t.call=function(i,s,o){return Ji(this,Kt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Kt(i,o,xi(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Pa(o).immediateRender=Gn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,Pa(a).immediateRender=Gn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Bt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,S,y,x,A,E,T;if(this!==kt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,x=this._start,y=this._ts,p=!y,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=Bt(u%m),u===l?(_=this._repeat,f=c):(A=Bt(u/m),_=~~A,_&&_===A&&(f=c,_--),f>c&&(f=c)),A=Vo(this._tTime,m),!a&&this._tTime&&A!==_&&this._tTime-A*m-this._dur<=0&&(A=_),E&&_&1&&(f=c-f,T=1),_!==A&&!this._lock){var C=E&&A&1,M=C===(E&&_&1);if(_<A&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(T?0:Bt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&li(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,A=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=bw(this,Bt(a),Bt(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!A&&(li(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=-Nt);break}}d=g}else{d=this._last;for(var v=i<0?i:f;d;){if(g=d._prev,(d._act||v<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,o||gn&&Sd(d)),f!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=v?-Nt:Nt);break}}d=g}}if(S&&!s&&(this.pause(),S.render(f>=a?0:-Nt)._zTime=f>=a?1:-1,this._ts))return this._start=x,fu(this),this.render(i,s,o);this._onUpdate&&!s&&li(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Yr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(li(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Sr(s)||(s=xi(this,s,i)),!(i instanceof al)){if(En(i))return i.forEach(function(a){return o.add(a,s)}),this;if(fn(i))return this.addLabel(i,s);if(Xt(i))i=Kt.delayedCall(0,i);else return this}return this!==i?Ji(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ei);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Kt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return fn(i)?this.removeLabel(i):Xt(i)?this.killTweensOf(i):(i.parent===this&&hu(this,i),i===this._recent&&(this._recent=this._last),bs(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Bt(si.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=xi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Kt.delayedCall(0,s||rl,o);return a.data="isPause",this._hasPause=1,Ji(this,a,xi(this,i))},t.removePause=function(i){var s=this._first;for(i=xi(this,i);s;)s._start===i&&s.data==="isPause"&&Yr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Or!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=wi(i),l=this._first,c=Sr(s),u;l;)l instanceof Kt?_w(l._targets,a)&&(c?(!Or||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=xi(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=Kt.to(o,di({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Nt,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Ho(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,di({startAt:{time:xi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Tm(this,xi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Tm(this,xi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Nt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Bt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return bs(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),bs(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=Ei,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ji(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Bt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ho(o,o===kt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(kt._ts&&($_(kt,Gc(i,kt)),q_=si.frame),si.frame>=xm){xm+=hi.autoSleep||120;var s=kt._first;if((!s||!s._ts)&&hi.autoSleep&&si._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||si.sleep()}}},e})(al);di(Bn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Vw=function(e,t,n,i,s,o,a){var l=new Xn(this._pt,e,t,0,1,S0,null,s),c=0,u=0,h,f,d,g,_,m,p,S;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=sl(i)),o&&(S=[n,i],o(S,e,t),n=S[0],i=S[1]),f=n.match(ih)||[];h=ih.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?bo(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=ih.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(W_.test(i)||p)&&(l.e=0),this._pt=l,l},Td=function(e,t,n,i,s,o,a,l,c,u){Xt(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:Xt(h)?c?e[t.indexOf("set")||!Xt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Xt(h)?c?Yw:y0:Ed,g;if(fn(i)&&(~i.indexOf("random(")&&(i=sl(i)),i.charAt(1)==="="&&(g=bo(f,i)+(Sn(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Tf)return!isNaN(f*i)&&i!==""?(g=new Xn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?qw:M0,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&vd(t,i),Vw.call(this,e,t,f,i,d,l||hi.stringFilter,c))},Hw=function(e,t,n,i,s){if(Xt(e)&&(e=Na(e,s,t,n,i)),!rr(e)||e.style&&e.nodeType||En(e)||H_(e))return fn(e)?Na(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Na(e[a],s,t,n,i);return o},_0=function(e,t,n,i,s,o){var a,l,c,u;if(ii[e]&&(a=new ii[e]).init(s,a.rawVars?t[e]:Hw(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Xn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==vo))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Or,Tf,bd=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,S=p&&p.data==="nested"?p.vars.targets:m,y=e._overwrite==="auto"&&!pd,x=e.timeline,A=i.easeReverse||h,E,T,C,M,v,D,L,F,k,Y,V,W,z;if(x&&(!f||!s)&&(s="none"),e._ease=Es(s,nl.ease),e._rEase=A&&(Es(A)||e._ease),e._from=!x&&!!i.runBackwards,e._from&&(e.ratio=1),!x||f&&!i.stagger){if(F=m[0]?Ts(m[0]).harness:0,W=F&&i[F.prop],E=Hc(i,xd),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?Mc:mw),_._lazy=0),o){if(Yr(e._startAt=Kt.set(m,di({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Gn(l),startAt:null,delay:0,onUpdate:c&&function(){return li(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn||!a&&!d)&&e._startAt.revert(Mc),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),C=di({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Gn(l),immediateRender:a,stagger:0,parent:p},E),W&&(C[F.prop]=W),Yr(e._startAt=Kt.set(m,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn?e._startAt.revert(Mc):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Nt,Nt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Gn(l)||l&&!g,T=0;T<m.length;T++){if(v=m[T],L=v._gsap||Md(m)[T]._gsap,e._ptLookup[T]=Y={},_f[L.id]&&Hr.length&&Vc(),V=S===m?T:S.indexOf(v),F&&(k=new F).init(v,W||E,e,V,S)!==!1&&(e._pt=M=new Xn(e._pt,v,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(Q){Y[Q]=M}),k.priority&&(D=1)),!F||W)for(C in E)ii[C]&&(k=_0(C,E,e,V,v,S))?k.priority&&(D=1):Y[C]=M=Td.call(e,v,C,"get",E[C],V,S,0,i.stringFilter);e._op&&e._op[T]&&e.kill(v,e._op[T]),y&&e._pt&&(Or=e,kt.killTweensOf(v,Y,e.globalTime(t)),z=!e.parent,Or=0),e._pt&&l&&(_f[L.id]=1)}D&&T0(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!z,f&&t<=0&&x.render(Ei,!0,!0)},Gw=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Tf=1,e.vars[t]="+=0",bd(e,a),Tf=0,l?il(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=jt(n)+Sn(h.e)),h.b&&(h.b=u.s+Sn(h.b))},Ww=function(e,t){var n=e[0]?Ts(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=ko({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Xw=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(En(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Na=function(e,t,n,i,s){return Xt(e)?e.call(t,n,i,s):fn(e)&&~e.indexOf("random(")?sl(e):e},v0=yd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",x0={};Wn(v0+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return x0[r]=1});var Kt=(function(r){k_(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Pa(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=i.parent||kt,S=(En(n)||H_(n)?Sr(n[0]):"length"in i)?[n]:wi(n),y,x,A,E,T,C,M,v;if(a._targets=S.length?Md(S):il("GSAP target "+n+" not found. https://gsap.com",!hi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||Ql(c)||Ql(u)){i=a.vars;var D=i.easeReverse||i.yoyoEase;if(y=a.timeline=new Bn({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:S}),y.kill(),y.parent=y._dp=pr(a),y._start=0,f||Ql(c)||Ql(u)){if(E=S.length,M=f&&s0(f),rr(f))for(T in f)~v0.indexOf(T)&&(v||(v={}),v[T]=f[T]);for(x=0;x<E;x++)A=Hc(i,x0),A.stagger=0,D&&(A.easeReverse=D),v&&ko(A,v),C=S[x],A.duration=+Na(c,pr(a),x,C,S),A.delay=(+Na(u,pr(a),x,C,S)||0)-a._delay,!f&&E===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),y.to(C,A,M?M(x,C,S):0),y._ease=ht.none;y.duration()?c=u=0:a.timeline=0}else if(g){Pa(di(y.vars.defaults,{ease:"none"})),y._ease=Es(g.ease||i.ease||"none");var L=0,F,k,Y;if(En(g))g.forEach(function(V){return y.to(S,V,">")}),y.duration();else{A={};for(T in g)T==="ease"||T==="easeEach"||Xw(T,g[T],A,g.easeEach);for(T in A)for(F=A[T].sort(function(V,W){return V.t-W.t}),L=0,x=0;x<F.length;x++)k=F[x],Y={ease:k.e,duration:(k.t-(x?F[x-1].t:0))/100*c},Y[T]=k.v,y.to(S,Y,L),L+=Y.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return d===!0&&!pd&&(Or=pr(a),kt.killTweensOf(S),Or=0),Ji(p,pr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===Bt(p._time)&&Gn(h)&&Mw(pr(a))&&p.data!=="nested")&&(a._tTime=-Nt,a.render(Math.max(0,-u)||0)),m&&t0(pr(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Nt&&!u?l:i<Nt?0:i,f,d,g,_,m,p,S,y;if(!c)Tw(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(f=Bt(h%_),h===l?(g=this._repeat,f=c):(m=Bt(h/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),p=this._yoyo&&g&1,p&&(f=c-f),m=Vo(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Bt(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(n0(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var x=f<a;if(x!==this._inv){var A=x?a:c-a;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=A?(x?-1:1)/A:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(f/c);if(this._from&&(this.ratio=S=1-S),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!m&&(li(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;y&&y.render(i<0?i:y._dur*y._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&vf(this,i,s,o),li(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&li(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&vf(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Yr(this,1),!s&&!(u&&!a)&&(h||a||p)&&(li(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){ol||si.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||bd(this,c),u=this._ease(c/this._dur),Gw(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(du(this,0),this.parent||Q_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?_a(this):this.scrollTrigger&&this.scrollTrigger.kill(!!gn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Or&&Or.vars.overwrite!==!0)._first||_a(this),this.parent&&o!==this.timeline.totalDuration()&&Ho(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?wi(i):a,c=this._ptLookup,u=this._pt,h,f,d,g,_,m,p;if((!s||s==="all")&&xw(a,l))return s==="all"&&(this._pt=0),_a(this);for(h=this._op=this._op||[],s!=="all"&&(fn(s)&&(_={},Wn(s,function(S){return _[S]=1}),s=_),s=Ww(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(h[p]=s,g=f,d={}):(d=h[p]=h[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&hu(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&_a(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Da(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Da(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return kt.killTweensOf(i,s,o)},e})(al);di(Kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Wn("staggerTo,staggerFrom,staggerFromTo",function(r){Kt[r]=function(){var e=new Bn,t=yf.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Ed=function(e,t,n){return e[t]=n},y0=function(e,t,n){return e[t](n)},Yw=function(e,t,n,i){return e[t](i.fp,n)},jw=function(e,t,n){return e.setAttribute(t,n)},wd=function(e,t){return Xt(e[t])?y0:md(e[t])&&e.setAttribute?jw:Ed},M0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},qw=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},S0=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ad=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Zw=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},$w=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?hu(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Jw=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},T0=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Xn=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||M0,this.d=l||this,this.set=c||Ed,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Jw,this.m=n,this.mt=s,this.tween=i},r})();Wn(yd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return xd[r]=1});fi.TweenMax=fi.TweenLite=Kt;fi.TimelineLite=fi.TimelineMax=Bn;kt=new Bn({sortChildren:!1,defaults:nl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});hi.stringFilter=p0;var ws=[],Tc={},Kw=[],Em=0,Qw=0,lh=function(e){return(Tc[e]||Kw).map(function(t){return t()})},bf=function(){var e=Date.now(),t=[];e-Em>2&&(lh("matchMediaInit"),ws.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=qi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),lh("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Em=e,lh("matchMedia"))},b0=(function(){function r(t,n){this.selector=n&&Mf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Qw++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Xt(n)&&(s=i,i=n,n=Xt);var o=this,a=function(){var c=Ft,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Mf(s)),Ft=o,h=i.apply(o,arguments),Xt(h)&&o._r.push(h),Ft=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Xt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Ft;Ft=null,n(this),Ft=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Kt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Bn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Kt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=ws.length;o--;)ws[o].id===this.id&&ws.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),e1=(function(){function r(t){this.contexts=[],this.scope=t,Ft&&Ft.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){rr(n)||(n={matches:n});var o=new b0(0,s||this.scope),a=o.conditions={},l,c,u;Ft&&!o.selector&&(o.selector=Ft.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=qi.matchMedia(n[c]),l&&(ws.indexOf(o)<0&&ws.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(bf):l.addEventListener("change",bf)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Wc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return h0(i)})},timeline:function(e){return new Bn(e)},getTweensOf:function(e,t){return kt.getTweensOf(e,t)},getProperty:function(e,t,n,i){fn(e)&&(e=wi(e)[0]);var s=Ts(e||{}).get,o=n?K_:J_;return n==="native"&&(n=""),e&&(t?o((ii[t]&&ii[t].get||s)(e,t,n,i)):function(a,l,c){return o((ii[a]&&ii[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=wi(e),e.length>1){var i=e.map(function(u){return jn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=ii[t],a=Ts(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;vo._pt=0,h.init(e,n?u+n:u,vo,0,[e]),h.render(1,h),vo._pt&&Ad(1,vo)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=jn.to(e,di((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return kt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Es(e.ease,nl.ease)),ym(nl,e||{})},config:function(e){return ym(hi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!ii[a]&&!fi[a]&&il(t+" effect requires "+a+" plugin.")}),rh[t]=function(a,l,c){return n(wi(a),di(l||{},s),c)},o&&(Bn.prototype[t]=function(a,l,c){return this.add(rh[t](a,rr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ht[e]=Es(t)},parseEase:function(e,t){return arguments.length?Es(e,t):ht},getById:function(e){return kt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Bn(e),i,s;for(n.smoothChildTiming=Gn(e.smoothChildTiming),kt.remove(n),n._dp=0,n._time=n._tTime=kt._time,i=kt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Kt&&i.vars.onComplete===i._targets[0]))&&Ji(n,i,i._start-i._delay),i=s;return Ji(kt,n,0),n},context:function(e,t){return e?new b0(e,t):Ft},matchMedia:function(e){return new e1(e)},matchMediaRefresh:function(){return ws.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||bf()},addEventListener:function(e,t){var n=Tc[e]||(Tc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Tc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Dw,wrapYoyo:Nw,distribute:s0,random:a0,snap:o0,normalize:Pw,getUnit:Sn,clamp:ww,splitColor:f0,toArray:wi,selector:Mf,mapRange:c0,pipe:Cw,unitize:Rw,interpolate:Iw,shuffle:r0},install:Y_,effects:rh,ticker:si,updateRoot:Bn.updateRoot,plugins:ii,globalTimeline:kt,core:{PropTween:Xn,globals:j_,Tween:Kt,Timeline:Bn,Animation:al,getCache:Ts,_removeLinkedListItem:hu,reverting:function(){return gn},context:function(e){return e&&Ft&&(Ft.data.push(e),e._ctx=Ft),Ft},suppressOverwrites:function(e){return pd=e}}};Wn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Wc[r]=Kt[r]});si.add(Bn.updateRoot);vo=Wc.to({},{duration:0});var t1=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},n1=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=t1(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},ch=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(fn(s)&&(l={},Wn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}n1(a,s)}}}},jn=Wc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)gn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ch("roundProps",Sf),ch("modifiers"),ch("snap",o0))||Wc;Kt.version=Bn.version=jn.version="3.15.0";X_=1;gd()&&Go();ht.Power0;ht.Power1;ht.Power2;ht.Power3;ht.Power4;ht.Linear;ht.Quad;ht.Cubic;ht.Quart;ht.Quint;ht.Strong;ht.Elastic;ht.Back;ht.SteppedEase;ht.Bounce;ht.Sine;ht.Expo;ht.Circ;var wm,Ur,Eo,Cd,Ms,Am,Rd,i1=function(){return typeof window<"u"},Tr={},hs=180/Math.PI,wo=Math.PI/180,oo=Math.atan2,Cm=1e8,Pd=/([A-Z])/g,r1=/(left|right|width|margin|padding|x)/i,s1=/[\s,\(]\S/,Ki={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ef=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},o1=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},a1=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},l1=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},c1=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},E0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},w0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},u1=function(e,t,n){return e.style[t]=n},h1=function(e,t,n){return e.style.setProperty(t,n)},f1=function(e,t,n){return e._gsap[t]=n},d1=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},p1=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},m1=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ht="transform",Yn=Ht+"Origin",g1=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Tr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ki[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=mr(i,a)}):this.tfm[e]=o.x?o[e]:mr(i,e),e===Yn&&(this.tfm.zOrigin=o.zOrigin);else return Ki.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Ht)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Yn,t,"")),e=Ht}(s||t)&&this.props.push(e,t,s[e])},A0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},_1=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Pd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Rd(),(!s||!s.isStart)&&!n[Ht]&&(A0(n),i.zOrigin&&n[Yn]&&(n[Yn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},C0=function(e,t){var n={target:e,props:[],revert:_1,save:g1};return e._gsap||jn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},R0,wf=function(e,t){var n=Ur.createElementNS?Ur.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ur.createElement(e);return n&&n.style?n:Ur.createElement(e)},ci=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Pd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Wo(t)||t,1)||""},Rm="O,Moz,ms,Ms,Webkit".split(","),Wo=function(e,t,n){var i=t||Ms,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Rm[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Rm[o]:"")+e},Af=function(){i1()&&window.document&&(wm=window,Ur=wm.document,Eo=Ur.documentElement,Ms=wf("div")||{style:{}},wf("div"),Ht=Wo(Ht),Yn=Ht+"Origin",Ms.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",R0=!!Wo("perspective"),Rd=jn.core.reverting,Cd=1)},Pm=function(e){var t=e.ownerSVGElement,n=wf("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Eo.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Eo.removeChild(n),s},Dm=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},P0=function(e){var t,n;try{t=e.getBBox()}catch{t=Pm(e),n=1}return t&&(t.width||t.height)||n||(t=Pm(e)),t&&!t.width&&!t.x&&!t.y?{x:+Dm(e,["x","cx","x1"])||0,y:+Dm(e,["y","cy","y1"])||0,width:0,height:0}:t},D0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&P0(e))},jr=function(e,t){if(t){var n=e.style,i;t in Tr&&t!==Yn&&(t=Ht),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Pd,"-$1").toLowerCase())):n.removeAttribute(t)}},Fr=function(e,t,n,i,s,o){var a=new Xn(e._pt,t,n,0,1,o?w0:E0);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Nm={deg:1,rad:1,turn:1},v1={grid:1,flex:1},qr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Ms.style,l=r1.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,m,p;if(i===o||!s||Nm[i]||Nm[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&D0(e),(d||o==="%")&&(Tr[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],jt(d?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(f?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ur||!_.appendChild)&&(_=Ur.body),m=_._gsap,m&&d&&m.width&&l&&m.time===si.time&&!m.uncache)return jt(s/m.width*h);if(d&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=h+i,g=e[u],S?e.style[t]=S:jr(e,t)}else(d||o==="%")&&!v1[ci(_,"display")]&&(a.position=ci(e,"position")),_===e&&(a.position="static"),_.appendChild(Ms),g=Ms[u],_.removeChild(Ms),a.position="absolute";return l&&d&&(m=Ts(_),m.time=si.time,m.width=_[u]),jt(f?g*s/h:g&&s?h/g*s:0)},mr=function(e,t,n,i){var s;return Cd||Af(),t in Ki&&t!=="transform"&&(t=Ki[t],~t.indexOf(",")&&(t=t.split(",")[0])),Tr[t]&&t!=="transform"?(s=cl(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Yc(ci(e,Yn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Xc[t]&&Xc[t](e,t,n)||ci(e,t)||Z_(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?qr(e,t,s,n)+n:s},x1=function(e,t,n,i){if(!n||n==="none"){var s=Wo(t,e,1),o=s&&ci(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=ci(e,"borderTopColor"))}var a=new Xn(this._pt,e.style,t,0,1,S0),l=0,c=0,u,h,f,d,g,_,m,p,S,y,x,A;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ci(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=ci(e,t)||i,_?e.style[t]=_:jr(e,t)),u=[n,i],p0(u),n=u[0],i=u[1],f=n.match(_o)||[],A=i.match(_o)||[],A.length){for(;h=_o.exec(i);)m=h[0],S=i.substring(l,h.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,x=_.substr((d+"").length),m.charAt(1)==="="&&(m=bo(d,m)+x),p=parseFloat(m),y=m.substr((p+"").length),l=_o.lastIndex-y.length,y||(y=y||hi.units[t]||x,l===i.length&&(i+=y,a.e+=y)),x!==y&&(d=qr(e,t,_,y)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?w0:E0;return W_.test(i)&&(a.e=0),this._pt=a,a},Im={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},y1=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Im[n]||n,t[1]=Im[i]||i,t.join(" ")},M1=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Tr[a]&&(l=1,a=a==="transformOrigin"?Yn:Ht),jr(n,a);l&&(jr(n,Ht),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",cl(n,1),o.uncache=1,A0(i)))}},Xc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Xn(e._pt,t,n,0,0,M1);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},ll=[1,0,0,1,0,0],N0={},I0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Lm=function(e){var t=ci(e,Ht);return I0(t)?ll:t.substr(7).match(G_).map(jt)},Dd=function(e,t){var n=e._gsap||Ts(e),i=e.style,s=Lm(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ll:s):(s===ll&&!e.offsetParent&&e!==Eo&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Eo.appendChild(e)),s=Lm(e),l?i.display=l:jr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Eo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Cf=function(e,t,n,i,s,o){var a=e._gsap,l=s||Dd(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],S=l[5],y=t.split(" "),x=parseFloat(y[0])||0,A=parseFloat(y[1])||0,E,T,C,M;n?l!==ll&&(T=d*m-g*_)&&(C=x*(m/T)+A*(-_/T)+(_*S-m*p)/T,M=x*(-g/T)+A*(d/T)-(d*S-g*p)/T,x=C,A=M):(E=P0(e),x=E.x+(~y[0].indexOf("%")?x/100*E.width:x),A=E.y+(~(y[1]||y[0]).indexOf("%")?A/100*E.height:A)),i||i!==!1&&a.smooth?(p=x-c,S=A-u,a.xOffset=h+(p*d+S*_)-p,a.yOffset=f+(p*g+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=A,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Yn]="0px 0px",o&&(Fr(o,a,"xOrigin",c,x),Fr(o,a,"yOrigin",u,A),Fr(o,a,"xOffset",h,a.xOffset),Fr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+A)},cl=function(e,t){var n=e._gsap||new g0(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=ci(e,Yn)||"0",u,h,f,d,g,_,m,p,S,y,x,A,E,T,C,M,v,D,L,F,k,Y,V,W,z,Q,N,ce,Pe,Re,q,re;return u=h=f=_=m=p=S=y=x=0,d=g=1,n.svg=!!(e.getCTM&&D0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ht]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ht]!=="none"?l[Ht]:"")),i.scale=i.rotate=i.translate="none"),T=Dd(e,n.svg),n.svg&&(n.uncache?(z=e.getBBox(),c=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),Cf(e,W||c,!!W||n.originIsAbsolute,n.smooth!==!1,T)),A=n.xOrigin||0,E=n.yOrigin||0,T!==ll&&(D=T[0],L=T[1],F=T[2],k=T[3],u=Y=T[4],h=V=T[5],T.length===6?(d=Math.sqrt(D*D+L*L),g=Math.sqrt(k*k+F*F),_=D||L?oo(L,D)*hs:0,S=F||k?oo(F,k)*hs+_:0,S&&(g*=Math.abs(Math.cos(S*wo))),n.svg&&(u-=A-(A*D+E*F),h-=E-(A*L+E*k))):(re=T[6],Re=T[7],N=T[8],ce=T[9],Pe=T[10],q=T[11],u=T[12],h=T[13],f=T[14],C=oo(re,Pe),m=C*hs,C&&(M=Math.cos(-C),v=Math.sin(-C),W=Y*M+N*v,z=V*M+ce*v,Q=re*M+Pe*v,N=Y*-v+N*M,ce=V*-v+ce*M,Pe=re*-v+Pe*M,q=Re*-v+q*M,Y=W,V=z,re=Q),C=oo(-F,Pe),p=C*hs,C&&(M=Math.cos(-C),v=Math.sin(-C),W=D*M-N*v,z=L*M-ce*v,Q=F*M-Pe*v,q=k*v+q*M,D=W,L=z,F=Q),C=oo(L,D),_=C*hs,C&&(M=Math.cos(C),v=Math.sin(C),W=D*M+L*v,z=Y*M+V*v,L=L*M-D*v,V=V*M-Y*v,D=W,Y=z),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=jt(Math.sqrt(D*D+L*L+F*F)),g=jt(Math.sqrt(V*V+re*re)),C=oo(Y,V),S=Math.abs(C)>2e-4?C*hs:0,x=q?1/(q<0?-q:q):0),n.svg&&(W=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!I0(ci(e,Ht)),W&&e.setAttribute("transform",W))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=jt(d),n.scaleY=jt(g),n.rotation=jt(_)+a,n.rotationX=jt(m)+a,n.rotationY=jt(p)+a,n.skewX=S+a,n.skewY=y+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Yn]=Yc(c)),n.xOffset=n.yOffset=0,n.force3D=hi.force3D,n.renderTransform=n.svg?T1:R0?L0:S1,n.uncache=0,n},Yc=function(e){return(e=e.split(" "))[0]+" "+e[1]},uh=function(e,t,n){var i=Sn(t);return jt(parseFloat(t)+parseFloat(qr(e,"x",n+"px",i)))+i},S1=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,L0(e,t)},as="0deg",ua="0px",ls=") ",L0=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,y=n.zOrigin,x="",A=p==="auto"&&e&&e!==1||p===!0;if(y&&(h!==as||u!==as)){var E=parseFloat(u)*wo,T=Math.sin(E),C=Math.cos(E),M;E=parseFloat(h)*wo,M=Math.cos(E),o=uh(S,o,T*M*-y),a=uh(S,a,-Math.sin(E)*-y),l=uh(S,l,C*M*-y+y)}m!==ua&&(x+="perspective("+m+ls),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(A||o!==ua||a!==ua||l!==ua)&&(x+=l!==ua||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ls),c!==as&&(x+="rotate("+c+ls),u!==as&&(x+="rotateY("+u+ls),h!==as&&(x+="rotateX("+h+ls),(f!==as||d!==as)&&(x+="skew("+f+", "+d+ls),(g!==1||_!==1)&&(x+="scale("+g+", "+_+ls),S.style[Ht]=x||"translate(0, 0)"},T1=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,y=parseFloat(o),x=parseFloat(a),A,E,T,C,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=wo,c*=wo,A=Math.cos(l)*h,E=Math.sin(l)*h,T=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(u*=wo,M=Math.tan(c-u),M=Math.sqrt(1+M*M),T*=M,C*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),A*=M,E*=M)),A=jt(A),E=jt(E),T=jt(T),C=jt(C)):(A=h,C=f,E=T=0),(y&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(y=qr(d,"x",o,"px"),x=qr(d,"y",a,"px")),(g||_||m||p)&&(y=jt(y+g-(g*A+_*T)+m),x=jt(x+_-(g*E+_*C)+p)),(i||s)&&(M=d.getBBox(),y=jt(y+i/100*M.width),x=jt(x+s/100*M.height)),M="matrix("+A+","+E+","+T+","+C+","+y+","+x+")",d.setAttribute("transform",M),S&&(d.style[Ht]=M)},b1=function(e,t,n,i,s){var o=360,a=fn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?hs:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Cm)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Cm)%o-~~(c/o)*o)),e._pt=f=new Xn(e._pt,t,n,i,c,o1),f.e=u,f.u="deg",e._props.push(n),f},Om=function(e,t){for(var n in t)e[n]=t[n];return e},E1=function(e,t,n){var i=Om({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ht]=t,a=cl(n,1),jr(n,Ht),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ht],o[Ht]=t,a=cl(n,1),o[Ht]=c);for(l in Tr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Sn(c),g=Sn(u),h=d!==g?qr(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Xn(e._pt,a,l,h,f-h,Ef),e._pt.u=g||0,e._props.push(l));Om(a,i)};Wn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Xc[e>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return mr(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var O0={name:"css",register:Af,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,g,_,m,p,S,y,x,A,E,T,C,M;Cd||Af(),this.styles=this.styles||C0(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(ii[_]&&_0(_,t,n,i,e,s)))){if(d=typeof u,g=Xc[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=sl(u)),g)g(this,e,_,u,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Gr.lastIndex=0,Gr.test(c)||(m=Sn(c),p=Sn(u),p?m!==p&&(c=qr(e,_,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),C.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],fn(c)&&~c.indexOf("random(")&&(c=sl(c)),Sn(c+"")||c==="auto"||(c+=hi.units[_]||Sn(mr(e,_))||""),(c+"").charAt(1)==="="&&(c=mr(e,_))):c=mr(e,_),f=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),_ in Ki&&(_==="autoAlpha"&&(f===1&&mr(e,"visibility")==="hidden"&&h&&(f=0),C.push("visibility",0,a.visibility),Fr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Ki[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in Tr,y){if(this.styles.save(_),M=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=ci(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var v=e.style.perspective;e.style.perspective=u,u=ci(e,"perspective"),v?e.style.perspective=v:jr(e,"perspective")}h=parseFloat(u)}if(x||(A=e._gsap,A.renderTransform&&!t.parseTransform||cl(e,t.parseTransform),E=t.smoothOrigin!==!1&&A.smooth,x=this._pt=new Xn(this._pt,a,Ht,0,1,A.renderTransform,A,0,-1),x.dep=1),_==="scale")this._pt=new Xn(this._pt,A,"scaleY",A.scaleY,(S?bo(A.scaleY,S+h):h)-A.scaleY||0,Ef),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(Yn,0,a[Yn]),u=y1(u),A.svg?Cf(e,u,0,E,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==A.zOrigin&&Fr(this,A,"zOrigin",A.zOrigin,p),Fr(this,a,_,Yc(c),Yc(u)));continue}else if(_==="svgOrigin"){Cf(e,u,1,E,0,this);continue}else if(_ in N0){b1(this,A,_,f,S?bo(f,S+u):u);continue}else if(_==="smoothOrigin"){Fr(this,A,"smooth",A.smooth,u);continue}else if(_==="force3D"){A[_]=u;continue}else if(_==="transform"){E1(this,u,e);continue}}else _ in a||(_=Wo(_)||_);if(y||(h||h===0)&&(f||f===0)&&!s1.test(u)&&_ in a)m=(c+"").substr((f+"").length),h||(h=0),p=Sn(u)||(_ in hi.units?hi.units[_]:m),m!==p&&(f=qr(e,_,c,p)),this._pt=new Xn(this._pt,y?A:a,_,f,(S?bo(f,S+h):h)-f,!y&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?c1:Ef),this._pt.u=p||0,y&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=l1):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=a1);else if(_ in a)x1.call(this,e,_,c,S?S+u:u);else if(_ in e)this.add(e,_,c||e[_],S?S+u:u,i,s);else if(_!=="parseTransform"){vd(_,u);continue}y||(_ in a?C.push(_,0,a[_]):typeof e[_]=="function"?C.push(_,2,e[_]()):C.push(_,1,c||e[_])),o.push(_)}}T&&T0(this)},render:function(e,t){if(t.tween._time||!Rd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:mr,aliases:Ki,getSetter:function(e,t,n){var i=Ki[t];return i&&i.indexOf(",")<0&&(t=i),t in Tr&&t!==Yn&&(e._gsap.x||mr(e,"x"))?n&&Am===n?t==="scale"?d1:f1:(Am=n||{})&&(t==="scale"?p1:m1):e.style&&!md(e.style[t])?u1:~t.indexOf("-")?h1:wd(e,t)},core:{_removeProperty:jr,_getMatrix:Dd}};jn.utils.checkPrefix=Wo;jn.core.getStyleSaver=C0;(function(r,e,t,n){var i=Wn(r+","+e+","+t,function(s){Tr[s]=1});Wn(e,function(s){hi.units[s]="deg",N0[s]=1}),Ki[i[13]]=r+","+e,Wn(n,function(s){var o=s.split(":");Ki[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){hi.units[r]="px"});jn.registerPlugin(O0);var Xo=jn.registerPlugin(O0)||jn;Xo.core.Tween;function w1(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function A1(r,e,t){return e&&w1(r.prototype,e),r}var pn,bc,oi,zr,Br,Ao,U0,fs,Co,F0,xr,Ii,z0,B0=function(){return pn||typeof window<"u"&&(pn=window.gsap)&&pn.registerPlugin&&pn},k0=1,xo=[],ut=[],tr=[],Ia=Date.now,Rf=function(e,t){return t},C1=function(){var e=Co.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ut),i.push.apply(i,tr),ut=n,tr=i,Rf=function(o,a){return t[o](a)}},Wr=function(e,t){return~tr.indexOf(e)&&tr[tr.indexOf(e)+1][t]},La=function(e){return!!~F0.indexOf(e)},Pn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Rn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ec="scrollLeft",tc="scrollTop",Pf=function(){return xr&&xr.isPressed||ut.cache++},jc=function(e,t){var n=function i(s){if(s||s===0){k0&&(oi.history.scrollRestoration="manual");var o=xr&&xr.isPressed;s=i.v=Math.round(s)||(xr&&xr.iOS?1:0),e(s),i.cacheID=ut.cache,o&&Rf("ss",s)}else(t||ut.cache!==i.cacheID||Rf("ref"))&&(i.cacheID=ut.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},On={s:ec,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:jc(function(r){return arguments.length?oi.scrollTo(r,on.sc()):oi.pageXOffset||zr[ec]||Br[ec]||Ao[ec]||0})},on={s:tc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:On,sc:jc(function(r){return arguments.length?oi.scrollTo(On.sc(),r):oi.pageYOffset||zr[tc]||Br[tc]||Ao[tc]||0})},Fn=function(e,t){return(t&&t._ctx&&t._ctx.selector||pn.utils.toArray)(e)[0]||(typeof e=="string"&&pn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},R1=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Zr=function(e,t){var n=t.s,i=t.sc;La(e)&&(e=zr.scrollingElement||Br);var s=ut.indexOf(e),o=i===on.sc?1:2;!~s&&(s=ut.push(e)-1),ut[s+o]||Pn(e,"scroll",Pf);var a=ut[s+o],l=a||(ut[s+o]=jc(Wr(e,n),!0)||(La(e)?i:jc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=pn.getProperty(e,"scrollBehavior")==="smooth"),l},Df=function(e,t,n){var i=e,s=e,o=Ia(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=Ia();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(g){var _=a,m=s,p=Ia();return(g||g===0)&&g!==i&&u(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},ha=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Um=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},V0=function(){Co=pn.core.globals().ScrollTrigger,Co&&Co.core&&C1()},H0=function(e){return pn=e||B0(),!bc&&pn&&typeof document<"u"&&document.body&&(oi=window,zr=document,Br=zr.documentElement,Ao=zr.body,F0=[oi,zr,Br,Ao],pn.utils.clamp,z0=pn.core.context||function(){},fs="onpointerenter"in Ao?"pointer":"mouse",U0=qt.isTouch=oi.matchMedia&&oi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in oi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ii=qt.eventTypes=("ontouchstart"in Br?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Br?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return k0=0},500),bc=1),Co||V0(),bc};On.op=on;ut.cache=0;var qt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){bc||H0(pn)||console.warn("Please gsap.registerPlugin(Observer)"),Co||V0();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,S=n.onDrag,y=n.onPress,x=n.onRelease,A=n.onRight,E=n.onLeft,T=n.onUp,C=n.onDown,M=n.onChangeX,v=n.onChangeY,D=n.onChange,L=n.onToggleX,F=n.onToggleY,k=n.onHover,Y=n.onHoverEnd,V=n.onMove,W=n.ignoreCheck,z=n.isNormalizer,Q=n.onGestureStart,N=n.onGestureEnd,ce=n.onWheel,Pe=n.onEnable,Re=n.onDisable,q=n.onClick,re=n.scrollSpeed,_e=n.capture,ue=n.allowClicks,Ee=n.lockAxis,Be=n.onLockAxis;this.target=a=Fn(a)||Br,this.vars=n,d&&(d=pn.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,re=re||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(oi.getComputedStyle(Ao).lineHeight)||22);var Oe,tt,Ze,ye,R,le,te,O=this,J=0,Me=0,ae=n.passive||!u&&n.passive!==!1,fe=Zr(a,On),We=Zr(a,on),P=fe(),b=We(),G=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ii[0]==="pointerdown",Z=La(a),K=a.ownerDocument||zr,$=[0,0,0],we=[0,0,0],de=0,Ne=function(){return de=Ia()},me=function(Ue,nt){return(O.event=Ue)&&d&&R1(Ue.target,d)||nt&&G&&Ue.pointerType!=="touch"||W&&W(Ue,nt)},ie=function(){O._vx.reset(),O._vy.reset(),tt.pause(),h&&h(O)},Se=function(){var Ue=O.deltaX=Um($),nt=O.deltaY=Um(we),ve=Math.abs(Ue)>=i,Ke=Math.abs(nt)>=i;D&&(ve||Ke)&&D(O,Ue,nt,$,we),ve&&(A&&O.deltaX>0&&A(O),E&&O.deltaX<0&&E(O),M&&M(O),L&&O.deltaX<0!=J<0&&L(O),J=O.deltaX,$[0]=$[1]=$[2]=0),Ke&&(C&&O.deltaY>0&&C(O),T&&O.deltaY<0&&T(O),v&&v(O),F&&O.deltaY<0!=Me<0&&F(O),Me=O.deltaY,we[0]=we[1]=we[2]=0),(ye||Ze)&&(V&&V(O),Ze&&(m&&Ze===1&&m(O),S&&S(O),Ze=0),ye=!1),le&&!(le=!1)&&Be&&Be(O),R&&(ce(O),R=!1),Oe=0},Ge=function(Ue,nt,ve){$[ve]+=Ue,we[ve]+=nt,O._vx.update(Ue),O._vy.update(nt),c?Oe||(Oe=requestAnimationFrame(Se)):Se()},Ve=function(Ue,nt){Ee&&!te&&(O.axis=te=Math.abs(Ue)>Math.abs(nt)?"x":"y",le=!0),te!=="y"&&($[2]+=Ue,O._vx.update(Ue,!0)),te!=="x"&&(we[2]+=nt,O._vy.update(nt,!0)),c?Oe||(Oe=requestAnimationFrame(Se)):Se()},pe=function(Ue){if(!me(Ue,1)){Ue=ha(Ue,u);var nt=Ue.clientX,ve=Ue.clientY,Ke=nt-O.x,Fe=ve-O.y,Je=O.isDragging;O.x=nt,O.y=ve,(Je||(Ke||Fe)&&(Math.abs(O.startX-nt)>=s||Math.abs(O.startY-ve)>=s))&&(Ze||(Ze=Je?2:1),Je||(O.isDragging=!0),Ve(Ke,Fe))}},Ye=O.onPress=function(Ae){me(Ae,1)||Ae&&Ae.button||(O.axis=te=null,tt.pause(),O.isPressed=!0,Ae=ha(Ae),J=Me=0,O.startX=O.x=Ae.clientX,O.startY=O.y=Ae.clientY,O._vx.reset(),O._vy.reset(),Pn(z?a:K,Ii[1],pe,ae,!0),O.deltaX=O.deltaY=0,y&&y(O))},I=O.onRelease=function(Ae){if(!me(Ae,1)){Rn(z?a:K,Ii[1],pe,!0);var Ue=!isNaN(O.y-O.startY),nt=O.isDragging,ve=nt&&(Math.abs(O.x-O.startX)>3||Math.abs(O.y-O.startY)>3),Ke=ha(Ae);!ve&&Ue&&(O._vx.reset(),O._vy.reset(),u&&ue&&pn.delayedCall(.08,function(){if(Ia()-de>300&&!Ae.defaultPrevented){if(Ae.target.click)Ae.target.click();else if(K.createEvent){var Fe=K.createEvent("MouseEvents");Fe.initMouseEvent("click",!0,!0,oi,1,Ke.screenX,Ke.screenY,Ke.clientX,Ke.clientY,!1,!1,!1,!1,0,null),Ae.target.dispatchEvent(Fe)}}})),O.isDragging=O.isGesturing=O.isPressed=!1,h&&nt&&!z&&tt.restart(!0),Ze&&Se(),p&&nt&&p(O),x&&x(O,ve)}},ge=function(Ue){return Ue.touches&&Ue.touches.length>1&&(O.isGesturing=!0)&&Q(Ue,O.isDragging)},ne=function(){return(O.isGesturing=!1)||N(O)},Te=function(Ue){if(!me(Ue)){var nt=fe(),ve=We();Ge((nt-P)*re,(ve-b)*re,1),P=nt,b=ve,h&&tt.restart(!0)}},se=function(Ue){if(!me(Ue)){Ue=ha(Ue,u),ce&&(R=!0);var nt=(Ue.deltaMode===1?l:Ue.deltaMode===2?oi.innerHeight:1)*g;Ge(Ue.deltaX*nt,Ue.deltaY*nt,0),h&&!z&&tt.restart(!0)}},ee=function(Ue){if(!me(Ue)){var nt=Ue.clientX,ve=Ue.clientY,Ke=nt-O.x,Fe=ve-O.y;O.x=nt,O.y=ve,ye=!0,h&&tt.restart(!0),(Ke||Fe)&&Ve(Ke,Fe)}},De=function(Ue){O.event=Ue,k(O)},Xe=function(Ue){O.event=Ue,Y(O)},gt=function(Ue){return me(Ue)||ha(Ue,u)&&q(O)};tt=O._dc=pn.delayedCall(f||.25,ie).pause(),O.deltaX=O.deltaY=0,O._vx=Df(0,50,!0),O._vy=Df(0,50,!0),O.scrollX=fe,O.scrollY=We,O.isDragging=O.isGesturing=O.isPressed=!1,z0(this),O.enable=function(Ae){return O.isEnabled||(Pn(Z?K:a,"scroll",Pf),o.indexOf("scroll")>=0&&Pn(Z?K:a,"scroll",Te,ae,_e),o.indexOf("wheel")>=0&&Pn(a,"wheel",se,ae,_e),(o.indexOf("touch")>=0&&U0||o.indexOf("pointer")>=0)&&(Pn(a,Ii[0],Ye,ae,_e),Pn(K,Ii[2],I),Pn(K,Ii[3],I),ue&&Pn(a,"click",Ne,!0,!0),q&&Pn(a,"click",gt),Q&&Pn(K,"gesturestart",ge),N&&Pn(K,"gestureend",ne),k&&Pn(a,fs+"enter",De),Y&&Pn(a,fs+"leave",Xe),V&&Pn(a,fs+"move",ee)),O.isEnabled=!0,O.isDragging=O.isGesturing=O.isPressed=ye=Ze=!1,O._vx.reset(),O._vy.reset(),P=fe(),b=We(),Ae&&Ae.type&&Ye(Ae),Pe&&Pe(O)),O},O.disable=function(){O.isEnabled&&(xo.filter(function(Ae){return Ae!==O&&La(Ae.target)}).length||Rn(Z?K:a,"scroll",Pf),O.isPressed&&(O._vx.reset(),O._vy.reset(),Rn(z?a:K,Ii[1],pe,!0)),Rn(Z?K:a,"scroll",Te,_e),Rn(a,"wheel",se,_e),Rn(a,Ii[0],Ye,_e),Rn(K,Ii[2],I),Rn(K,Ii[3],I),Rn(a,"click",Ne,!0),Rn(a,"click",gt),Rn(K,"gesturestart",ge),Rn(K,"gestureend",ne),Rn(a,fs+"enter",De),Rn(a,fs+"leave",Xe),Rn(a,fs+"move",ee),O.isEnabled=O.isPressed=O.isDragging=!1,Re&&Re(O))},O.kill=O.revert=function(){O.disable();var Ae=xo.indexOf(O);Ae>=0&&xo.splice(Ae,1),xr===O&&(xr=0)},xo.push(O),z&&La(a)&&(xr=O),O.enable(_)},A1(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();qt.version="3.15.0";qt.create=function(r){return new qt(r)};qt.register=H0;qt.getAll=function(){return xo.slice()};qt.getById=function(r){return xo.filter(function(e){return e.vars.id===r})[0]};B0()&&pn.registerPlugin(qt);var Ie,fo,ct,Tt,ri,yt,Nd,qc,ul,Oa,xa,nc,xn,pu,Nf,In,Fm,zm,po,G0,hh,W0,Nn,If,X0,Y0,Nr,Lf,Id,Ro,Ld,Ua,Of,fh,ic=1,yn=Date.now,dh=yn(),Ci=0,ya=0,Bm=function(e,t,n){var i=ti(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},km=function(e,t){return t&&(!ti(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},P1=function r(){return ya&&requestAnimationFrame(r)},Vm=function(){return pu=1},Hm=function(){return pu=0},Zi=function(e){return e},Ma=function(e){return Math.round(e*1e5)/1e5||0},j0=function(){return typeof window<"u"},q0=function(){return Ie||j0()&&(Ie=window.gsap)&&Ie.registerPlugin&&Ie},Os=function(e){return!!~Nd.indexOf(e)},Z0=function(e){return(e==="Height"?Ld:ct["inner"+e])||ri["client"+e]||yt["client"+e]},$0=function(e){return Wr(e,"getBoundingClientRect")||(Os(e)?function(){return Rc.width=ct.innerWidth,Rc.height=Ld,Rc}:function(){return gr(e)})},D1=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Wr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Z0(s):e["client"+s])||0}},N1=function(e,t){return!t||~tr.indexOf(e)?$0(e):function(){return Rc}},Qi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Wr(e,n))?o()-$0(e)()[s]:Os(e)?(ri[n]||yt[n])-Z0(i):e[n]-e["offset"+i])},rc=function(e,t){for(var n=0;n<po.length;n+=3)(!t||~t.indexOf(po[n+1]))&&e(po[n],po[n+1],po[n+2])},ti=function(e){return typeof e=="string"},Tn=function(e){return typeof e=="function"},Sa=function(e){return typeof e=="number"},ds=function(e){return typeof e=="object"},fa=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},ao=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},lo=Math.abs,J0="left",K0="top",Od="right",Ud="bottom",As="width",Cs="height",Fa="Right",za="Left",Ba="Top",ka="Bottom",$t="padding",Mi="margin",Yo="Width",Fd="Height",sn="px",Si=function(e){return ct.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},I1=function(e){var t=Si(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Gm=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},gr=function(e,t){var n=t&&Si(e)[Nf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ie.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Zc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Q0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},L1=function(e){return function(t){return Ie.utils.snap(Q0(e),t)}},zd=function(e){var t=Ie.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},O1=function(e){return function(t,n){return zd(Q0(e))(t,n.direction)}},sc=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},hn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},un=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},oc=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Wm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ac={toggleActions:"play",anticipatePin:0},$c={top:0,left:0,center:.5,bottom:1,right:1},Ec=function(e,t){if(ti(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in $c?$c[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},lc=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,g=Tt.createElement("div"),_=Os(n)||Wr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?yt:n.tagName==="IFRAME"?n.contentDocument.body:n,S=e.indexOf("start")!==-1,y=S?c:u,x="border-color:"+y+";font-size:"+h+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(x+=(i===on?Od:Ud)+":"+(o+parseFloat(f))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=S,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=x,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],wc(g,0,i,S),g},wc=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Yo]=1,s["border"+a+Yo]=0,s[n.p]=t+"px",Ie.set(e,s)},st=[],Uf={},hl,Xm=function(){return yn()-Ci>34&&(hl||(hl=requestAnimationFrame(Mr)))},co=function(){(!Nn||!Nn.isPressed||Nn.startX>yt.clientWidth)&&(ut.cache++,Nn?hl||(hl=requestAnimationFrame(Mr)):Mr(),Ci||Fs("scrollStart"),Ci=yn())},ph=function(){Y0=ct.innerWidth,X0=ct.innerHeight},Ta=function(e){ut.cache++,(e===!0||!xn&&!W0&&!Tt.fullscreenElement&&!Tt.webkitFullscreenElement&&(!If||Y0!==ct.innerWidth||Math.abs(ct.innerHeight-X0)>ct.innerHeight*.25))&&qc.restart(!0)},Us={},U1=[],ev=function r(){return un($e,"scrollEnd",r)||Ss(!0)},Fs=function(e){return Us[e]&&Us[e].map(function(t){return t()})||U1},ei=[],tv=function(e){for(var t=0;t<ei.length;t+=5)(!e||ei[t+4]&&ei[t+4].query===e)&&(ei[t].style.cssText=ei[t+1],ei[t].getBBox&&ei[t].setAttribute("transform",ei[t+2]||""),ei[t+3].uncache=1)},nv=function(){return ut.forEach(function(e){return Tn(e)&&++e.cacheID&&(e.rec=e())})},Bd=function(e,t){var n;for(In=0;In<st.length;In++)n=st[In],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Ua=!0,t&&tv(t),t||Fs("revert")},iv=function(e,t){ut.cache++,(t||!Ln)&&ut.forEach(function(n){return Tn(n)&&n.cacheID++&&(n.rec=0)}),ti(e)&&(ct.history.scrollRestoration=Id=e)},Ln,Rs=0,Ym,F1=function(){if(Ym!==Rs){var e=Ym=Rs;requestAnimationFrame(function(){return e===Rs&&Ss(!0)})}},rv=function(){yt.appendChild(Ro),Ld=!Nn&&Ro.offsetHeight||ct.innerHeight,yt.removeChild(Ro)},jm=function(e){return ul(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ss=function(e,t){if(ri=Tt.documentElement,yt=Tt.body,Nd=[ct,Tt,ri,yt],Ci&&!e&&!Ua){hn($e,"scrollEnd",ev);return}rv(),Ln=$e.isRefreshing=!0,Ua||nv();var n=Fs("refreshInit");G0&&$e.sort(),t||Bd(),ut.forEach(function(i){Tn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),st.slice(0).forEach(function(i){return i.refresh()}),Ua=!1,st.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Of=1,jm(!0),st.forEach(function(i){var s=Qi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),jm(!1),Of=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ut.forEach(function(i){Tn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),iv(Id,1),qc.pause(),Rs++,Ln=2,Mr(2),st.forEach(function(i){return Tn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Ln=$e.isRefreshing=!1,Fs("refresh")},Ff=0,Ac=1,Va,Mr=function(e){if(e===2||!Ln&&!Ua){$e.isUpdating=!0,Va&&Va.update(0);var t=st.length,n=yn(),i=n-dh>=50,s=t&&st[0].scroll();if(Ac=Ff>s?-1:1,Ln||(Ff=s),i&&(Ci&&!pu&&n-Ci>200&&(Ci=0,Fs("scrollEnd")),xa=dh,dh=n),Ac<0){for(In=t;In-- >0;)st[In]&&st[In].update(0,i);Ac=1}else for(In=0;In<t;In++)st[In]&&st[In].update(0,i);$e.isUpdating=!1}hl=0},zf=[J0,K0,Ud,Od,Mi+ka,Mi+Fa,Mi+Ba,Mi+za,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Cc=zf.concat([As,Cs,"boxSizing","max"+Yo,"max"+Fd,"position",Mi,$t,$t+Ba,$t+Fa,$t+ka,$t+za]),z1=function(e,t,n){Po(n);var i=e._gsap;if(i.spacerIsNative)Po(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},mh=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=zf.length,o=t.style,a=e.style,l;s--;)l=zf[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Ud]=a[Od]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[As]=Zc(e,On)+sn,o[Cs]=Zc(e,on)+sn,o[$t]=a[Mi]=a[K0]=a[J0]="0",Po(i),a[As]=a["max"+Yo]=n[As],a[Cs]=a["max"+Fd]=n[Cs],a[$t]=n[$t],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},B1=/([A-Z])/g,Po=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Ie.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(B1,"-$1").toLowerCase())}},cc=function(e){for(var t=Cc.length,n=e.style,i=[],s=0;s<t;s++)i.push(Cc[s],n[Cc[s]]);return i.t=e,i},k1=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Rc={left:0,top:0},qm=function(e,t,n,i,s,o,a,l,c,u,h,f,d,g){Tn(e)&&(e=e(l)),ti(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Ec("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,S;if(d&&d.seek(0),isNaN(e)||(e=+e),Sa(e))d&&(e=Ie.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&wc(a,n,i,!0);else{Tn(t)&&(t=t(l));var y=(e||"0").split(" "),x,A,E,T;S=Fn(t,l)||yt,x=gr(S)||{},(!x||!x.left&&!x.top)&&Si(S).display==="none"&&(T=S.style.display,S.style.display="block",x=gr(S),T?S.style.display=T:S.style.removeProperty("display")),A=Ec(y[0],x[i.d]),E=Ec(y[1]||"0",n),e=x[i.p]-c[i.p]-u+A+s-E,a&&wc(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var C=e+n,M=o._isStart;m="scroll"+i.d2,wc(o,C,i,M&&C>20||!M&&(h?Math.max(yt[m],ri[m]):o.parentNode[m])<=C+1),h&&(c=gr(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+sn))}return d&&S&&(m=gr(S),d.seek(f),p=gr(S),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},V1=/(webkit|moz|length|cssText|inset)/i,Zm=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===yt){e._stOrig=s.cssText,a=Si(e);for(o in a)!+o&&!V1.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ie.core.getCache(e).uncache=1,t.appendChild(e)}},sv=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},uc=function(e,t,n){var i={};i[t.p]="+="+n,Ie.set(e,i)},$m=function(e,t){var n=Zr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,g={};c=c||n();var _=sv(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){ut.cache++,o.tween&&Mr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Ie.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},hn(e,"wheel",n.wheelHandler),$e.isTouch&&hn(e,"touchmove",n.wheelHandler),s},$e=(function(){function r(t,n){fo||r.register(Ie)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Lf(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ya){this.update=this.refresh=this.kill=Zi;return}n=Gm(ti(n)||Sa(n)||n.nodeType?{trigger:n}:n,ac);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,S=s.onSnapComplete,y=s.once,x=s.snap,A=s.pinReparent,E=s.pinSpacer,T=s.containerAnimation,C=s.fastScrollEnd,M=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?On:on,D=!h&&h!==0,L=Fn(n.scroller||ct),F=Ie.core.getCache(L),k=Os(L),Y=("pinType"in n?n.pinType:Wr(L,"pinType")||k&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],W=D&&n.toggleActions.split(" "),z="markers"in n?n.markers:ac.markers,Q=k?0:parseFloat(Si(L)["border"+v.p2+Yo])||0,N=this,ce=n.onRefreshInit&&function(){return n.onRefreshInit(N)},Pe=D1(L,k,v),Re=N1(L,k),q=0,re=0,_e=0,ue=Zr(L,v),Ee,Be,Oe,tt,Ze,ye,R,le,te,O,J,Me,ae,fe,We,P,b,G,Z,K,$,we,de,Ne,me,ie,Se,Ge,Ve,pe,Ye,I,ge,ne,Te,se,ee,De,Xe;if(N._startClamp=N._endClamp=!1,N._dir=v,m*=45,N.scroller=L,N.scroll=T?T.time.bind(T):ue,tt=ue(),N.vars=n,i=i||n.animation,"refreshPriority"in n&&(G0=1,n.refreshPriority===-9999&&(Va=N)),F.tweenScroll=F.tweenScroll||{top:$m(L,on),left:$m(L,On)},N.tweenTo=Ee=F.tweenScroll[v.p],N.scrubDuration=function(ve){ge=Sa(ve)&&ve,ge?I?I.duration(ve):I=Ie.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ge,paused:!0,onComplete:function(){return p&&p(N)}}):(I&&I.progress(1).kill(),I=0)},i&&(i.vars.lazy=!1,i._initted&&!N.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),N.animation=i.pause(),i.scrollTrigger=N,N.scrubDuration(h),pe=0,l||(l=i.vars.id)),x&&((!ds(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in yt.style&&Ie.set(k?[yt,ri]:L,{scrollBehavior:"auto"}),ut.forEach(function(ve){return Tn(ve)&&ve.target===(k?Tt.scrollingElement||ri:L)&&(ve.smooth=!1)}),Oe=Tn(x.snapTo)?x.snapTo:x.snapTo==="labels"?L1(i):x.snapTo==="labelsDirectional"?O1(i):x.directional!==!1?function(ve,Ke){return zd(x.snapTo)(ve,yn()-re<500?0:Ke.direction)}:Ie.utils.snap(x.snapTo),ne=x.duration||{min:.1,max:2},ne=ds(ne)?Oa(ne.min,ne.max):Oa(ne,ne),Te=Ie.delayedCall(x.delay||ge/2||.1,function(){var ve=ue(),Ke=yn()-re<500,Fe=Ee.tween;if((Ke||Math.abs(N.getVelocity())<10)&&!Fe&&!pu&&q!==ve){var Je=(ve-ye)/fe,Yt=i&&!D?i.totalProgress():Je,lt=Ke?0:(Yt-Ye)/(yn()-xa)*1e3||0,It=Ie.utils.clamp(-Je,1-Je,lo(lt/2)*lt/.185),tn=Je+(x.inertia===!1?0:It),Ct,Rt,vt=x,qn=vt.onStart,Lt=vt.onInterrupt,wn=vt.onComplete;if(Ct=Oe(tn,N),Sa(Ct)||(Ct=tn),Rt=Math.max(0,Math.round(ye+Ct*fe)),ve<=R&&ve>=ye&&Rt!==ve){if(Fe&&!Fe._initted&&Fe.data<=lo(Rt-ve))return;x.inertia===!1&&(It=Ct-Je),Ee(Rt,{duration:ne(lo(Math.max(lo(tn-Yt),lo(Ct-Yt))*.185/lt/.05||0)),ease:x.ease||"power3",data:lo(Rt-ve),onInterrupt:function(){return Te.restart(!0)&&Lt&&ao(N,Lt)},onComplete:function(){N.update(),q=ue(),i&&!D&&(I?I.resetTo("totalProgress",Ct,i._tTime/i._tDur):i.progress(Ct)),pe=Ye=i&&!D?i.totalProgress():N.progress,S&&S(N),wn&&ao(N,wn)}},ve,It*fe,Rt-ve-It*fe),qn&&ao(N,qn,Ee.tween)}}else N.isActive&&q!==ve&&Te.restart(!0)}).pause()),l&&(Uf[l]=N),f=N.trigger=Fn(f||d!==!0&&d),Xe=f&&f._gsap&&f._gsap.stRevert,Xe&&(Xe=Xe(N)),d=d===!0?f:Fn(d),ti(a)&&(a={targets:f,className:a}),d&&(g===!1||g===Mi||(g=!g&&d.parentNode&&d.parentNode.style&&Si(d.parentNode).display==="flex"?!1:$t),N.pin=d,Be=Ie.core.getCache(d),Be.spacer?We=Be.pinState:(E&&(E=Fn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Be.spacerIsNative=!!E,E&&(Be.spacerState=cc(E))),Be.spacer=G=E||Tt.createElement("div"),G.classList.add("pin-spacer"),l&&G.classList.add("pin-spacer-"+l),Be.pinState=We=cc(d)),n.force3D!==!1&&Ie.set(d,{force3D:!0}),N.spacer=G=Be.spacer,Ve=Si(d),Ne=Ve[g+v.os2],K=Ie.getProperty(d),$=Ie.quickSetter(d,v.a,sn),mh(d,G,Ve),b=cc(d)),z){Me=ds(z)?Gm(z,Wm):Wm,O=lc("scroller-start",l,L,v,Me,0),J=lc("scroller-end",l,L,v,Me,0,O),Z=O["offset"+v.op.d2];var gt=Fn(Wr(L,"content")||L);le=this.markerStart=lc("start",l,gt,v,Me,Z,0,T),te=this.markerEnd=lc("end",l,gt,v,Me,Z,0,T),T&&(De=Ie.quickSetter([le,te],v.a,sn)),!Y&&!(tr.length&&Wr(L,"fixedMarkers")===!0)&&(I1(k?yt:L),Ie.set([O,J],{force3D:!0}),ie=Ie.quickSetter(O,v.a,sn),Ge=Ie.quickSetter(J,v.a,sn))}if(T){var Ae=T.vars.onUpdate,Ue=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){N.update(0,0,1),Ae&&Ae.apply(T,Ue||[])})}if(N.previous=function(){return st[st.indexOf(N)-1]},N.next=function(){return st[st.indexOf(N)+1]},N.revert=function(ve,Ke){if(!Ke)return N.kill(!0);var Fe=ve!==!1||!N.enabled,Je=xn;Fe!==N.isReverted&&(Fe&&(se=Math.max(ue(),N.scroll.rec||0),_e=N.progress,ee=i&&i.progress()),le&&[le,te,O,J].forEach(function(Yt){return Yt.style.display=Fe?"none":"block"}),Fe&&(xn=N,N.update(Fe)),d&&(!A||!N.isActive)&&(Fe?z1(d,G,We):mh(d,G,Si(d),me)),Fe||N.update(Fe),xn=Je,N.isReverted=Fe)},N.refresh=function(ve,Ke,Fe,Je){if(!((xn||!N.enabled)&&!Ke)){if(d&&ve&&Ci){hn(r,"scrollEnd",ev);return}!Ln&&ce&&ce(N),xn=N,Ee.tween&&!Fe&&(Ee.tween.kill(),Ee.tween=0),I&&I.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Qe){return Qe.vars.immediateRender&&Qe.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),N.isReverted||N.revert(!0,!0),N._subPinOffset=!1;var Yt=Pe(),lt=Re(),It=T?T.duration():Qi(L,v),tn=fe<=.01||!fe,Ct=0,Rt=Je||0,vt=ds(Fe)?Fe.end:n.end,qn=n.endTrigger||f,Lt=ds(Fe)?Fe.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),wn=N.pinnedContainer=n.pinnedContainer&&Fn(n.pinnedContainer,N),mi=f&&Math.max(0,st.indexOf(N))||0,nn=mi,rn,w,H,j,X,B,oe,xe,Le,Ce,He,je,ke;for(z&&ds(Fe)&&(je=Ie.getProperty(O,v.p),ke=Ie.getProperty(J,v.p));nn-- >0;)B=st[nn],B.end||B.refresh(0,1)||(xn=N),oe=B.pin,oe&&(oe===f||oe===d||oe===wn)&&!B.isReverted&&(Ce||(Ce=[]),Ce.unshift(B),B.revert(!0,!0)),B!==st[nn]&&(mi--,nn--);for(Tn(Lt)&&(Lt=Lt(N)),Lt=Bm(Lt,"start",N),ye=qm(Lt,f,Yt,v,ue(),le,O,N,lt,Q,Y,It,T,N._startClamp&&"_startClamp")||(d?-.001:0),Tn(vt)&&(vt=vt(N)),ti(vt)&&!vt.indexOf("+=")&&(~vt.indexOf(" ")?vt=(ti(Lt)?Lt.split(" ")[0]:"")+vt:(Ct=Ec(vt.substr(2),Yt),vt=ti(Lt)?Lt:(T?Ie.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,ye):ye)+Ct,qn=f)),vt=Bm(vt,"end",N),R=Math.max(ye,qm(vt||(qn?"100% 0":It),qn,Yt,v,ue()+Ct,te,J,N,lt,Q,Y,It,T,N._endClamp&&"_endClamp"))||-.001,Ct=0,nn=mi;nn--;)B=st[nn]||{},oe=B.pin,oe&&B.start-B._pinPush<=ye&&!T&&B.end>0&&(rn=B.end-(N._startClamp?Math.max(0,B.start):B.start),(oe===f&&B.start-B._pinPush<ye||oe===wn)&&isNaN(Lt)&&(Ct+=rn*(1-B.progress)),oe===d&&(Rt+=rn));if(ye+=Ct,R+=Ct,N._startClamp&&(N._startClamp+=Ct),N._endClamp&&!Ln&&(N._endClamp=R||-.001,R=Math.min(R,Qi(L,v))),fe=R-ye||(ye-=.01)&&.001,tn&&(_e=Ie.utils.clamp(0,1,Ie.utils.normalize(ye,R,se))),N._pinPush=Rt,le&&Ct&&(rn={},rn[v.a]="+="+Ct,wn&&(rn[v.p]="-="+ue()),Ie.set([le,te],rn)),d&&!(Of&&N.end>=Qi(L,v)))rn=Si(d),j=v===on,H=ue(),we=parseFloat(K(v.a))+Rt,!It&&R>1&&(He=(k?Tt.scrollingElement||ri:L).style,He={style:He,value:He["overflow"+v.a.toUpperCase()]},k&&Si(yt)["overflow"+v.a.toUpperCase()]!=="scroll"&&(He.style["overflow"+v.a.toUpperCase()]="scroll")),mh(d,G,rn),b=cc(d),w=gr(d,!0),xe=Y&&Zr(L,j?On:on)(),g?(me=[g+v.os2,fe+Rt+sn],me.t=G,nn=g===$t?Zc(d,v)+fe+Rt:0,nn&&(me.push(v.d,nn+sn),G.style.flexBasis!=="auto"&&(G.style.flexBasis=nn+sn)),Po(me),wn&&st.forEach(function(Qe){Qe.pin===wn&&Qe.vars.pinSpacing!==!1&&(Qe._subPinOffset=!0)}),Y&&ue(se)):(nn=Zc(d,v),nn&&G.style.flexBasis!=="auto"&&(G.style.flexBasis=nn+sn)),Y&&(X={top:w.top+(j?H-ye:xe)+sn,left:w.left+(j?xe:H-ye)+sn,boxSizing:"border-box",position:"fixed"},X[As]=X["max"+Yo]=Math.ceil(w.width)+sn,X[Cs]=X["max"+Fd]=Math.ceil(w.height)+sn,X[Mi]=X[Mi+Ba]=X[Mi+Fa]=X[Mi+ka]=X[Mi+za]="0",X[$t]=rn[$t],X[$t+Ba]=rn[$t+Ba],X[$t+Fa]=rn[$t+Fa],X[$t+ka]=rn[$t+ka],X[$t+za]=rn[$t+za],P=k1(We,X,A),Ln&&ue(0)),i?(Le=i._initted,hh(1),i.render(i.duration(),!0,!0),de=K(v.a)-we+fe+Rt,Se=Math.abs(fe-de)>1,Y&&Se&&P.splice(P.length-2,2),i.render(0,!0,!0),Le||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),hh(0)):de=fe,He&&(He.value?He.style["overflow"+v.a.toUpperCase()]=He.value:He.style.removeProperty("overflow-"+v.a));else if(f&&ue()&&!T)for(w=f.parentNode;w&&w!==yt;)w._pinOffset&&(ye-=w._pinOffset,R-=w._pinOffset),w=w.parentNode;Ce&&Ce.forEach(function(Qe){return Qe.revert(!1,!0)}),N.start=ye,N.end=R,tt=Ze=Ln?se:ue(),!T&&!Ln&&(tt<se&&ue(se),N.scroll.rec=0),N.revert(!1,!0),re=yn(),Te&&(q=-1,Te.restart(!0)),xn=0,i&&D&&(i._initted||ee)&&i.progress()!==ee&&i.progress(ee||0,!0).render(i.time(),!0,!0),(tn||_e!==N.progress||T||_||i&&!i._initted)&&(i&&!D&&(i._initted||_e||i.vars.immediateRender!==!1)&&i.totalProgress(T&&ye<-.001&&!_e?Ie.utils.normalize(ye,R,0):_e,!0),N.progress=tn||(tt-ye)/fe===_e?0:_e),d&&g&&(G._pinOffset=Math.round(N.progress*de)),I&&I.invalidate(),isNaN(je)||(je-=Ie.getProperty(O,v.p),ke-=Ie.getProperty(J,v.p),uc(O,v,je),uc(le,v,je-(Je||0)),uc(J,v,ke),uc(te,v,ke-(Je||0))),tn&&!Ln&&N.update(),u&&!Ln&&!ae&&(ae=!0,u(N),ae=!1)}},N.getVelocity=function(){return(ue()-Ze)/(yn()-xa)*1e3||0},N.endAnimation=function(){fa(N.callbackAnimation),i&&(I?I.progress(1):i.paused()?D||fa(i,N.direction<0,1):fa(i,i.reversed()))},N.labelToScroll=function(ve){return i&&i.labels&&(ye||N.refresh()||ye)+i.labels[ve]/i.duration()*fe||0},N.getTrailing=function(ve){var Ke=st.indexOf(N),Fe=N.direction>0?st.slice(0,Ke).reverse():st.slice(Ke+1);return(ti(ve)?Fe.filter(function(Je){return Je.vars.preventOverlaps===ve}):Fe).filter(function(Je){return N.direction>0?Je.end<=ye:Je.start>=R})},N.update=function(ve,Ke,Fe){if(!(T&&!Fe&&!ve)){var Je=Ln===!0?se:N.scroll(),Yt=ve?0:(Je-ye)/fe,lt=Yt<0?0:Yt>1?1:Yt||0,It=N.progress,tn,Ct,Rt,vt,qn,Lt,wn,mi;if(Ke&&(Ze=tt,tt=T?ue():Je,x&&(Ye=pe,pe=i&&!D?i.totalProgress():lt)),m&&d&&!xn&&!ic&&Ci&&(!lt&&ye<Je+(Je-Ze)/(yn()-xa)*m?lt=1e-4:lt===1&&R>Je+(Je-Ze)/(yn()-xa)*m&&(lt=.9999)),lt!==It&&N.enabled){if(tn=N.isActive=!!lt&&lt<1,Ct=!!It&&It<1,Lt=tn!==Ct,qn=Lt||!!lt!=!!It,N.direction=lt>It?1:-1,N.progress=lt,qn&&!xn&&(Rt=lt&&!It?0:lt===1?1:It===1?2:3,D&&(vt=!Lt&&W[Rt+1]!=="none"&&W[Rt+1]||W[Rt],mi=i&&(vt==="complete"||vt==="reset"||vt in i))),M&&(Lt||mi)&&(mi||h||!i)&&(Tn(M)?M(N):N.getTrailing(M).forEach(function(H){return H.endAnimation()})),D||(I&&!xn&&!ic?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",lt,i._tTime/i._tDur):(I.vars.totalProgress=lt,I.invalidate().restart())):i&&i.totalProgress(lt,!!(xn&&(re||ve)))),d){if(ve&&g&&(G.style[g+v.os2]=Ne),!Y)$(Ma(we+de*lt));else if(qn){if(wn=!ve&&lt>It&&R+1>Je&&Je+1>=Qi(L,v),A)if(!ve&&(tn||wn)){var nn=gr(d,!0),rn=Je-ye;Zm(d,yt,nn.top+(v===on?rn:0)+sn,nn.left+(v===on?0:rn)+sn)}else Zm(d,G);Po(tn||wn?P:b),Se&&lt<1&&tn||$(we+(lt===1&&!wn?de:0))}}x&&!Ee.tween&&!xn&&!ic&&Te.restart(!0),a&&(Lt||y&&lt&&(lt<1||!fh))&&ul(a.targets).forEach(function(H){return H.classList[tn||y?"add":"remove"](a.className)}),o&&!D&&!ve&&o(N),qn&&!xn?(D&&(mi&&(vt==="complete"?i.pause().totalProgress(1):vt==="reset"?i.restart(!0).pause():vt==="restart"?i.restart(!0):i[vt]()),o&&o(N)),(Lt||!fh)&&(c&&Lt&&ao(N,c),V[Rt]&&ao(N,V[Rt]),y&&(lt===1?N.kill(!1,1):V[Rt]=0),Lt||(Rt=lt===1?1:3,V[Rt]&&ao(N,V[Rt]))),C&&!tn&&Math.abs(N.getVelocity())>(Sa(C)?C:2500)&&(fa(N.callbackAnimation),I?I.progress(1):fa(i,vt==="reverse"?1:!lt,1))):D&&o&&!xn&&o(N)}if(Ge){var w=T?Je/T.duration()*(T._caScrollDist||0):Je;ie(w+(O._isFlipped?1:0)),Ge(w)}De&&De(-Je/T.duration()*(T._caScrollDist||0))}},N.enable=function(ve,Ke){N.enabled||(N.enabled=!0,hn(L,"resize",Ta),k||hn(L,"scroll",co),ce&&hn(r,"refreshInit",ce),ve!==!1&&(N.progress=_e=0,tt=Ze=q=ue()),Ke!==!1&&N.refresh())},N.getTween=function(ve){return ve&&Ee?Ee.tween:I},N.setPositions=function(ve,Ke,Fe,Je){if(T){var Yt=T.scrollTrigger,lt=T.duration(),It=Yt.end-Yt.start;ve=Yt.start+It*ve/lt,Ke=Yt.start+It*Ke/lt}N.refresh(!1,!1,{start:km(ve,Fe&&!!N._startClamp),end:km(Ke,Fe&&!!N._endClamp)},Je),N.update()},N.adjustPinSpacing=function(ve){if(me&&ve){var Ke=me.indexOf(v.d)+1;me[Ke]=parseFloat(me[Ke])+ve+sn,me[1]=parseFloat(me[1])+ve+sn,Po(me)}},N.disable=function(ve,Ke){if(ve!==!1&&N.revert(!0,!0),N.enabled&&(N.enabled=N.isActive=!1,Ke||I&&I.pause(),se=0,Be&&(Be.uncache=1),ce&&un(r,"refreshInit",ce),Te&&(Te.pause(),Ee.tween&&Ee.tween.kill()&&(Ee.tween=0)),!k)){for(var Fe=st.length;Fe--;)if(st[Fe].scroller===L&&st[Fe]!==N)return;un(L,"resize",Ta),k||un(L,"scroll",co)}},N.kill=function(ve,Ke){N.disable(ve,Ke),I&&!Ke&&I.kill(),l&&delete Uf[l];var Fe=st.indexOf(N);Fe>=0&&st.splice(Fe,1),Fe===In&&Ac>0&&In--,Fe=0,st.forEach(function(Je){return Je.scroller===N.scroller&&(Fe=1)}),Fe||Ln||(N.scroll.rec=0),i&&(i.scrollTrigger=null,ve&&i.revert({kill:!1}),Ke||i.kill()),le&&[le,te,O,J].forEach(function(Je){return Je.parentNode&&Je.parentNode.removeChild(Je)}),Va===N&&(Va=0),d&&(Be&&(Be.uncache=1),Fe=0,st.forEach(function(Je){return Je.pin===d&&Fe++}),Fe||(Be.spacer=0)),n.onKill&&n.onKill(N)},st.push(N),N.enable(!1,!1),Xe&&Xe(N),i&&i.add&&!fe){var nt=N.update;N.update=function(){N.update=nt,ut.cache++,ye||R||N.refresh()},Ie.delayedCall(.01,N.update),fe=.01,ye=R=0}else N.refresh();d&&F1()},r.register=function(n){return fo||(Ie=n||q0(),j0()&&window.document&&r.enable(),fo=ya),fo},r.defaults=function(n){if(n)for(var i in n)ac[i]=n[i];return ac},r.disable=function(n,i){ya=0,st.forEach(function(o){return o[i?"kill":"disable"](n)}),un(ct,"wheel",co),un(Tt,"scroll",co),clearInterval(nc),un(Tt,"touchcancel",Zi),un(yt,"touchstart",Zi),sc(un,Tt,"pointerdown,touchstart,mousedown",Vm),sc(un,Tt,"pointerup,touchend,mouseup",Hm),qc.kill(),rc(un);for(var s=0;s<ut.length;s+=3)oc(un,ut[s],ut[s+1]),oc(un,ut[s],ut[s+2])},r.enable=function(){if(ct=window,Tt=document,ri=Tt.documentElement,yt=Tt.body,Ie){if(ul=Ie.utils.toArray,Oa=Ie.utils.clamp,Lf=Ie.core.context||Zi,hh=Ie.core.suppressOverwrites||Zi,Id=ct.history.scrollRestoration||"auto",Ff=ct.pageYOffset||0,Ie.core.globals("ScrollTrigger",r),yt){ya=1,Ro=document.createElement("div"),Ro.style.height="100vh",Ro.style.position="absolute",rv(),P1(),qt.register(Ie),r.isTouch=qt.isTouch,Nr=qt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),If=qt.isTouch===1,hn(ct,"wheel",co),Nd=[ct,Tt,ri,yt],Ie.matchMedia?(r.matchMedia=function(u){var h=Ie.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},Ie.addEventListener("matchMediaInit",function(){nv(),Bd()}),Ie.addEventListener("matchMediaRevert",function(){return tv()}),Ie.addEventListener("matchMedia",function(){Ss(0,1),Fs("matchMedia")}),Ie.matchMedia().add("(orientation: portrait)",function(){return ph(),ph})):console.warn("Requires GSAP 3.11.0 or later"),ph(),hn(Tt,"scroll",co);var n=yt.hasAttribute("style"),i=yt.style,s=i.borderTopStyle,o=Ie.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=gr(yt),on.m=Math.round(a.top+on.sc())||0,On.m=Math.round(a.left+On.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(yt.setAttribute("style",""),yt.removeAttribute("style")),nc=setInterval(Xm,250),Ie.delayedCall(.5,function(){return ic=0}),hn(Tt,"touchcancel",Zi),hn(yt,"touchstart",Zi),sc(hn,Tt,"pointerdown,touchstart,mousedown",Vm),sc(hn,Tt,"pointerup,touchend,mouseup",Hm),Nf=Ie.utils.checkPrefix("transform"),Cc.push(Nf),fo=yn(),qc=Ie.delayedCall(.2,Ss).pause(),po=[Tt,"visibilitychange",function(){var u=ct.innerWidth,h=ct.innerHeight;Tt.hidden?(Fm=u,zm=h):(Fm!==u||zm!==h)&&Ta()},Tt,"DOMContentLoaded",Ss,ct,"load",Ss,ct,"resize",Ta],rc(hn),st.forEach(function(u){return u.enable(0,1)}),l=0;l<ut.length;l+=3)oc(un,ut[l],ut[l+1]),oc(un,ut[l],ut[l+2])}else if(Tt){var c=function u(){r.enable(),Tt.removeEventListener("DOMContentLoaded",u)};Tt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(fh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(nc)||(nc=i)&&setInterval(Xm,i),"ignoreMobileResize"in n&&(If=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(rc(un)||rc(hn,n.autoRefreshEvents||"none"),W0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Fn(n),o=ut.indexOf(s),a=Os(s);~o&&ut.splice(o,a?6:2),i&&(a?tr.unshift(ct,i,yt,i,ri,i):tr.unshift(s,i))},r.clearMatchMedia=function(n){st.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(ti(n)?Fn(n):n).getBoundingClientRect(),a=o[s?As:Cs]*i||0;return s?o.right-a>0&&o.left+a<ct.innerWidth:o.bottom-a>0&&o.top+a<ct.innerHeight},r.positionInViewport=function(n,i,s){ti(n)&&(n=Fn(n));var o=n.getBoundingClientRect(),a=o[s?As:Cs],l=i==null?a/2:i in $c?$c[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ct.innerWidth:(o.top+l)/ct.innerHeight},r.killAll=function(n){if(st.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Us.killAll||[];Us={},i.forEach(function(s){return s()})}},r})();$e.version="3.15.0";$e.saveStyles=function(r){return r?ul(r).forEach(function(e){if(e&&e.style){var t=ei.indexOf(e);t>=0&&ei.splice(t,5),ei.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ie.core.getCache(e),Lf())}}):ei};$e.revert=function(r,e){return Bd(!r,e)};$e.create=function(r,e){return new $e(r,e)};$e.refresh=function(r){return r?Ta(!0):(fo||$e.register())&&Ss(!0)};$e.update=function(r){return++ut.cache&&Mr(r===!0?2:0)};$e.clearScrollMemory=iv;$e.maxScroll=function(r,e){return Qi(r,e?On:on)};$e.getScrollFunc=function(r,e){return Zr(Fn(r),e?On:on)};$e.getById=function(r){return Uf[r]};$e.getAll=function(){return st.filter(function(r){return r.vars.id!=="ScrollSmoother"})};$e.isScrolling=function(){return!!Ci};$e.snapDirectional=zd;$e.addEventListener=function(r,e){var t=Us[r]||(Us[r]=[]);~t.indexOf(e)||t.push(e)};$e.removeEventListener=function(r,e){var t=Us[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};$e.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Ie.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Tn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Tn(s)&&(s=s(),hn($e,"refresh",function(){return s=e.batchMax()})),ul(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push($e.create(c))}),t};var Jm=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},gh=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(qt.isTouch?" pinch-zoom":""):"none",e===ri&&r(yt,t)},hc={auto:1,scroll:1},H1=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ie.core.getCache(s),a=yn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==yt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(hc[(l=Si(s)).overflowY]||hc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Os(s)&&(hc[(l=Si(s)).overflowY]||hc[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},ov=function(e,t,n,i){return qt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&H1,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&hn(Tt,qt.eventTypes[0],Qm,!1,!0)},onDisable:function(){return un(Tt,qt.eventTypes[0],Qm,!0)}})},G1=/(input|label|select|textarea)/i,Km,Qm=function(e){var t=G1.test(e.target.tagName);(t||Km)&&(e._gsapAllow=!0,Km=t)},W1=function(e){ds(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Fn(e.target)||ri,u=Ie.core.globals().ScrollSmoother,h=u&&u.get(),f=Nr&&(e.content&&Fn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Zr(c,on),g=Zr(c,On),_=1,m=(qt.isTouch&&ct.visualViewport?ct.visualViewport.scale*ct.visualViewport.width:ct.outerWidth)/ct.innerWidth,p=0,S=Tn(i)?function(){return i(a)}:function(){return i||2.8},y,x,A=ov(c,e.type,!0,s),E=function(){return x=!1},T=Zi,C=Zi,M=function(){l=Qi(c,on),C=Oa(Nr?1:0,l),n&&(T=Oa(0,Qi(c,On))),y=Rs},v=function(){f._gsap.y=Ma(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},D=function(){if(x){requestAnimationFrame(E);var z=Ma(a.deltaY/2),Q=C(d.v-z);if(f&&Q!==d.v+d.offset){d.offset=Q-d.v;var N=Ma((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+N+", 0, 1)",f._gsap.y=N+"px",d.cacheID=ut.cache,Mr()}return!0}d.offset&&v(),x=!0},L,F,k,Y,V=function(){M(),L.isActive()&&L.vars.scrollY>l&&(d()>l?L.progress(1)&&d(l):L.resetTo("scrollY",l))};return f&&Ie.set(f,{y:"+=0"}),e.ignoreCheck=function(W){return Nr&&W.type==="touchmove"&&D()||_>1.05&&W.type!=="touchstart"||a.isGesturing||W.touches&&W.touches.length>1},e.onPress=function(){x=!1;var W=_;_=Ma((ct.visualViewport&&ct.visualViewport.scale||1)/m),L.pause(),W!==_&&gh(c,_>1.01?!0:n?!1:"x"),F=g(),k=d(),M(),y=Rs},e.onRelease=e.onGestureStart=function(W,z){if(d.offset&&v(),!z)Y.restart(!0);else{ut.cache++;var Q=S(),N,ce;n&&(N=g(),ce=N+Q*.05*-W.velocityX/.227,Q*=Jm(g,N,ce,Qi(c,On)),L.vars.scrollX=T(ce)),N=d(),ce=N+Q*.05*-W.velocityY/.227,Q*=Jm(d,N,ce,Qi(c,on)),L.vars.scrollY=C(ce),L.invalidate().duration(Q).play(.01),(Nr&&L.vars.scrollY>=l||N>=l-1)&&Ie.to({},{onUpdate:V,duration:Q})}o&&o(W)},e.onWheel=function(){L._ts&&L.pause(),yn()-p>1e3&&(y=0,p=yn())},e.onChange=function(W,z,Q,N,ce){if(Rs!==y&&M(),z&&n&&g(T(N[2]===z?F+(W.startX-W.x):g()+z-N[1])),Q){d.offset&&v();var Pe=ce[2]===Q,Re=Pe?k+W.startY-W.y:d()+Q-ce[1],q=C(Re);Pe&&Re!==q&&(k+=q-Re),d(q)}(Q||z)&&Mr()},e.onEnable=function(){gh(c,n?!1:"x"),$e.addEventListener("refresh",V),hn(ct,"resize",V),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),A.enable()},e.onDisable=function(){gh(c,!0),un(ct,"resize",V),$e.removeEventListener("refresh",V),A.kill()},e.lockAxis=e.lockAxis!==!1,a=new qt(e),a.iOS=Nr,Nr&&!d()&&d(1),Nr&&Ie.ticker.add(Zi),Y=a._dc,L=Ie.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:sv(d,d(),function(){return L.pause()})},onUpdate:Mr,onComplete:Y.vars.onComplete}),a};$e.sort=function(r){if(Tn(r))return st.sort(r);var e=ct.pageYOffset||0;return $e.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ct.innerHeight}),st.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};$e.observe=function(r){return new qt(r)};$e.normalizeScroll=function(r){if(typeof r>"u")return Nn;if(r===!0&&Nn)return Nn.enable();if(r===!1){Nn&&Nn.kill(),Nn=r;return}var e=r instanceof qt?r:W1(r);return Nn&&Nn.target===e.target&&Nn.kill(),Os(e.target)&&(Nn=e),e};$e.core={_getVelocityProp:Df,_inputObserver:ov,_scrollers:ut,_proxies:tr,bridge:{ss:function(){Ci||Fs("scrollStart"),Ci=yn()},ref:function(){return xn}}};q0()&&Ie.registerPlugin($e);const X1={jodenbuurt:new URL("data:application/geo+json;base64,ewoidHlwZSI6ICJGZWF0dXJlQ29sbGVjdGlvbiIsCiJuYW1lIjogImpvZGVuYnV1cnQiLAoiY3JzIjogeyAidHlwZSI6ICJuYW1lIiwgInByb3BlcnRpZXMiOiB7ICJuYW1lIjogInVybjpvZ2M6ZGVmOmNyczpFUFNHOjozODU3IiB9IH0sCiJmZWF0dXJlcyI6IFsKeyAidHlwZSI6ICJGZWF0dXJlIiwgInByb3BlcnRpZXMiOiB7IH0sICJnZW9tZXRyeSI6IHsgInR5cGUiOiAiUG9seWdvbiIsICJjb29yZGluYXRlcyI6IFsgWyBbIDU0NTcwMy4zOTc0NzE0MjQ4OTA2ODIsIDY4NjczNTQuNDgzNjQ0NTM2Njk2Mzc0IF0sIFsgNTQ2MTg2Ljg5NDE4MjAwMzY4NTI3MywgNjg2NzY3OC43MTcxMDYxMjUzMTc1MTQgXSwgWyA1NDY0ODkuNDExNTMzNjU2MTgwODM2LCA2ODY3Mzk5LjgwNDkzMDIwODI1MDg4IF0sIFsgNTQ2MDAyLjE2MDQwMjg0Njg3MTg3NSwgNjg2NzA5Ny42NzQ2Mjk4NjA1NTc2MTYgXSwgWyA1NDYxMDEuOTA1NDY4ODA0Mjk2MTA2LCA2ODY2OTgwLjY2Nzg3NTU1OTA2OTIxNiBdLCBbIDU0NjExNC40NTE0MDczOTE5MjcyMDUsIDY4NjY4OTIuMTEyNzEwODMxNjg2ODU0IF0sIFsgNTQ2MjI0LjcyNjg4MTIxMTg1NjM4LCA2ODY2ODI5LjAzMjI3NTQyNzEzMjg0NSBdLCBbIDU0NjE1MS4yMTM4NTA1NjAwMTU5OTksIDY4NjY3NDkuMTU0NzYxNjAxMjM5NDQzIF0sIFsgNTQ1NjcxLjM4MjE0NTkwOTQ3NjA5NCwgNjg2NjU3Ni40MTAxODEyMjE1NTIxOTMgXSwgWyA1NDU2MDIuMTc3NTU5NzEyMjAzMjIsIDY4NjY3MDEuMzc3Nzg4NDM2NTk5MDc2IF0sIFsgNTQ1MzI1LjI3NzQ1NzE0OTAwMDgzOCwgNjg2Njg4MC4wODg2ODY3ODY1OTIwMDcgXSwgWyA1NDU1OTQuMDY2NTMwNTA0NjEzMTgzLCA2ODY3MjI5LjE0MTU4MzQ4NzM5MTQ3MiBdLCBbIDU0NTcwMy4zOTc0NzE0MjQ4OTA2ODIsIDY4NjczNTQuNDgzNjQ0NTM2Njk2Mzc0IF0gXSBdIH0gfQpdCn0K",import.meta.url),transvaalbuurt:new URL(""+new URL("transvaalbuurt-6zR-8gfP.geojson",import.meta.url).href,import.meta.url),rivierenbuurt:new URL("data:application/geo+json;base64,ewoidHlwZSI6ICJGZWF0dXJlQ29sbGVjdGlvbiIsCiJuYW1lIjogInJpdmllcmVuYnV1cnQiLAoiY3JzIjogeyAidHlwZSI6ICJuYW1lIiwgInByb3BlcnRpZXMiOiB7ICJuYW1lIjogInVybjpvZ2M6ZGVmOmNyczpFUFNHOjozODU3IiB9IH0sCiJmZWF0dXJlcyI6IFsKeyAidHlwZSI6ICJGZWF0dXJlIiwgInByb3BlcnRpZXMiOiB7ICJuYWFtIjogIlJpdmllcmVuYnV1cnQiLCAic291cmNlIjogIkdlbWVlbnRlIEFtc3RlcmRhbSBHZWJpZWRlbiBBUEkiLCAic291cmNlX2xldmVsIjogImRpc3NvbHZlZCB3aWprZW4iLCAic291cmNlX25hbWVzIjogWyAiU2NoZWxkZWJ1dXJ0IiwgIlJpam5idXVydCIsICJJSnNlbGJ1dXJ0IiBdLCAic291cmNlX2NvZGVzIjogWyAiS0siLCAiS00iLCAiS0wiIF0sICJzb3VyY2VfY2JzQ29kZXMiOiBbICJXSzAzNjNLSyIsICJXSzAzNjNLTSIsICJXSzAzNjNLTCIgXSwgInNvdXJjZV9pZGVudGlmaWNhdGllcyI6IFsgIjAzNjMwOTcwMDAwMDY0IiwgIjAzNjMwOTcwMDAwMDY2IiwgIjAzNjMwOTcwMDAwMDY1IiBdLCAic291cmNlX3VybHMiOiBbICJodHRwczovL2FwaS5kYXRhLmFtc3RlcmRhbS5ubC92MS9nZWJpZWRlbi93aWprZW4/bmFhbT1TY2hlbGRlYnV1cnQmX2Zvcm1hdD1nZW9qc29uIiwgImh0dHBzOi8vYXBpLmRhdGEuYW1zdGVyZGFtLm5sL3YxL2dlYmllZGVuL3dpamtlbj9uYWFtPVJpam5idXVydCZfZm9ybWF0PWdlb2pzb24iLCAiaHR0cHM6Ly9hcGkuZGF0YS5hbXN0ZXJkYW0ubmwvdjEvZ2ViaWVkZW4vd2lqa2VuP25hYW09SUpzZWxidXVydCZfZm9ybWF0PWdlb2pzb24iIF0gfSwgImdlb21ldHJ5IjogeyAidHlwZSI6ICJQb2x5Z29uIiwgImNvb3JkaW5hdGVzIjogWyBbIFsgNTQ3MTIwLjA4NzAyMDQzNTQ4NjkyLCA2ODYyMTI4LjI0Nzk4MzA4NDA2MDI1MiBdLCBbIDU0NzA5NS4yMTE0MDQ0MTUwODAzMjQsIDY4NjIwOTUuOTY5MjI4NTM0OTU5MjU3IF0sIFsgNTQ2OTk0LjU1NjkwNjI3Njk2NDU4MywgNjg2MjAyNy4wODk2MDMyNzA0MDQwNDEgXSwgWyA1NDY2MTIuMjgxMzMzNDc2NTM3ODM5LCA2ODYxOTU1LjUzOTczMzk4MjY0NDk3NSBdLCBbIDU0NjIwNy43MzE4ODQ1NDc5NzQ5MTQsIDY4NjE5MTcuNzI1MTc2OTM5NzQwNzc3IF0sIFsgNTQ2MTIyLjUwNzA1ODc2MTc4MTA4MiwgNjg2MTkxNC43NDEwNDMzODA0NjE2MzMgXSwgWyA1NDU3ODMuMDc1NDkxODU5MzQ0NzY2LCA2ODYxOTA2LjA4MjQ5NzA4NDUxMzMwNyBdLCBbIDU0NTY4OS43MjYwNzUwOTY0MDUxMTEsIDY4NjE5NTcuNTkyMDQ1Nzc2NTQ2MDAxIF0sIFsgNTQ0OTA4LjQ3MzQwNTM4NDEwOTM1NiwgNjg2MjAwOC41MzUwNDQxNDIwNDUwODEgXSwgWyA1NDQ3NDEuODQ0MjMyNTE5MTU3MjMxLCA2ODYyMDIxLjIzNjUwNjQ3ODg2MDk3NCBdLCBbIDU0NDQyNi44Mzg0ODQxMTc1Mjg0MjQsIDY4NjI2MjAuNjE0ODM3NDcwNDY0NDA4IF0sIFsgNTQzODc3Ljg0MjQ2NzY2OTM5NzU5MywgNjg2MjY1Ny41ODI3NDA5NTIyNjA3OTIgXSwgWyA1NDM5MzcuNzk3MjIwODAyMjgzODQ2LCA2ODYzMzgwLjU0NzM4MzcyNjU3NDQ4MSBdLCBbIDU0NDQ5NC4zMzUwMjIwNzk3NTgzNDYsIDY4NjMzMzUuODU1MzU5OTE5MzY5MjIxIF0sIFsgNTQ0OTM3LjYwNDAyMjQ1Mzc3MTkwNCwgNjg2MzI5Ni41OTIyMDgyOTA0NzI2MjcgXSwgWyA1NDUwNDQuOTI4NzgxNjM4NTA0MDA2LCA2ODYzMjg4LjExNTMwODI0MTkxODY4MyBdLCBbIDU0NTQ0My4yMzA5MzkxNjIxOTY1OTEsIDY4NjMzNzguNzg2ODM2NDQyNTM3NjA2IF0sIFsgNTQ1OTMxLjg3OTk4MzAzMjEyMjI1NCwgNjg2MzQ5MC4yMTI3OTI0OTM0MDI5NTggXSwgWyA1NDYwNTkuMzA1Mzk0NTA0MTAyODc4LCA2ODYzNTE4LjE1NzI3OTEwNDkyNTY5MiBdLCBbIDU0NjY5Ni42NzcxNTA3NDM3ODA2NTgsIDY4NjM2NjQuMTcxNTg4NTgwMTI0MDggXSwgWyA1NDY4MjYuNzgwMjM0MTE3NDEwMTQ2LCA2ODYzMzE1LjI3OTY5NDQ1MDA4Nzg0NSBdLCBbIDU0Njg3OS42NTk3MTA5NDQ2MzAyMDYsIDY4NjMxNzMuNDcxMTg1NjQ5NzQ1MTY2IF0sIFsgNTQ2OTMwLjE2NDI2MDM0NzM3Mzc4NCwgNjg2Mjg4NS4zMDU3ODE2NzM2NDAwMTMgXSwgWyA1NDY5MzMuNTYzMDI0ODQ1MzIzNTI1LCA2ODYyODU3Ljg5NTMwNTI5NTQ3NDgyNyBdLCBbIDU0Njk0My45Mjk4NzQ5NjI1NDUsIDY4NjI3NzQuMjg5ODI0NzUzMDY4Mzg4IF0sIFsgNTQ2OTYxLjQ1NjczOTc2ODYxODcxOCwgNjg2MjY5Mi45MzY1MDg3NjE3MTg4NjkgXSwgWyA1NDcwMDcuNTk4MTYyNDAwNjUyNjU0LCA2ODYyNTQyLjc4OTA2MDY1MzE4NzMzNSBdLCBbIDU0NzAzOC43OTU0MDY2NTE3OTk1NjcsIDY4NjI0NzkuOTk4OTUyMTY4OTcxMyBdLCBbIDU0NzExOS42NDI0Mjg4MTAxMjYxNDgsIDY4NjIzMTcuMjgxODAyMTE4NzU1ODc3IF0sIFsgNTQ3MTI4LjcxNzIzOTE5Njk5NDM0MiwgNjg2MjI3OS4wMTE2MjUzMzY0ODMxMjEgXSwgWyA1NDcxMzMuNTQ0NDI2Mjg5NjE5ODc4LCA2ODYyMjI3LjcyMDc3OTc1Nzk0NjczIF0sIFsgNTQ3MTMxLjMxMjM0MjcxMjg4ODQ5NCwgNjg2MjE3NS43ODk2OTEyMjc0ODgyMiBdLCBbIDU0NzEyMC4wODcwMjA0MzU0ODY5MiwgNjg2MjEyOC4yNDc5ODMwODQwNjAyNTIgXSBdIF0gfSB9Cl0KfQo=",import.meta.url),markets:new URL("data:application/geo+json;base64,ewoidHlwZSI6ICJGZWF0dXJlQ29sbGVjdGlvbiIsCiJuYW1lIjogIm1hcmtldHMiLAoiY3JzIjogeyAidHlwZSI6ICJuYW1lIiwgInByb3BlcnRpZXMiOiB7ICJuYW1lIjogInVybjpvZ2M6ZGVmOmNyczpFUFNHOjozODU3IiB9IH0sCiJmZWF0dXJlcyI6IFsKeyAidHlwZSI6ICJGZWF0dXJlIiwgInByb3BlcnRpZXMiOiB7ICJuYW1lIjogIndhdGVybG9vcGxlaW4iIH0sICJnZW9tZXRyeSI6IHsgInR5cGUiOiAiUG9seWdvbiIsICJjb29yZGluYXRlcyI6IFsgWyBbIDU0NTUzNy42MTQxOTM3OTEwNTc5MTQsIDY4NjcxNTEuMzMzMjMzMjI5ODE1OTYgXSwgWyA1NDU4MzAuNzE5OTg1MTY1NDAwNDMxLCA2ODY2OTU0LjEyMzkwNjgzNTkxMzY1OCBdLCBbIDU0NTg0My44NjUxODU5NDAxNzI1MjMsIDY4NjY5NDQuNDA5MTM5NDI0NTYyNDU0IF0sIFsgNTQ1ODQ4LjA0MjY1OTYzNzI4NTM5NiwgNjg2NjkzNy44OTIyODA0NTc1NDEzNDcgXSwgWyA1NDU4NDkuNTQ2NTUwMTY4MTkwMTUxLCA2ODY2OTMwLjg3NDEyNDY0NjE4NjgyOSBdLCBbIDU0NTg0Ny41NDEzNjI3OTM2NTA0NzgsIDY4NjY5MjIuNTE5MTc3MjUyNDI2NzQ0IF0sIFsgNTQ1ODQxLjg1OTk5ODU2NTUxNjQzNSwgNjg2NjkxMy4zMjg3MzUxMTg3MzE4NTYgXSwgWyA1NDU3MDUuODQxNDU0OTg3NTMwNTk3LCA2ODY2NzM2LjUzODA0ODI1NjE4ODYzMSBdLCBbIDU0NTY0NS42ODU4MzM3NDkwMTIwOSwgNjg2Njc3Ni42NDE3OTU3NDg4NDQ3NDMgXSwgWyA1NDU3NDcuNDQ5MDkzMDEyMTM5MjAxLCA2ODY2OTI2LjE5NTM1NDEwNDk3MzM3NiBdLCBbIDU0NTQ5OC42Mzg3NTk2MTA3MDg4MDMsIDY4NjcwODkuOTUyMzIzMDMyNTQzMDYzIF0sIFsgNTQ1NTM3LjYxNDE5Mzc5MTA1NzkxNCwgNjg2NzE1MS4zMzMyMzMyMjk4MTU5NiBdIF0gXSB9IH0sCnsgInR5cGUiOiAiRmVhdHVyZSIsICJwcm9wZXJ0aWVzIjogeyAibmFtZSI6ICJ1aWxlbmJ1cmciIH0sICJnZW9tZXRyeSI6IHsgInR5cGUiOiAiUG9seWdvbiIsICJjb29yZGluYXRlcyI6IFsgWyBbIDU0NTgwMy40NjMwNDg4NTE2OTk1NjgsIDY4NjcyNjEuNTIyMjU2Njc1MTc2MzIyIF0sIFsgNTQ2MjM3LjUwMDQyOTg4OTA3MDgwMSwgNjg2NzU2MS4xMTc5MzQ2ODE0NzUxNjMgXSwgWyA1NDYyNTIuODk2NTI5NjYzMjM3NzQzLCA2ODY3NTM4LjgxMjkzMDU4ODYxMDQ3IF0sIFsgNTQ1ODE4Ljg1OTE0ODYyNTg2NjUxLCA2ODY3MjM5LjIxNzI1MjU4MjMxMTYzIF0sIFsgNTQ1ODAzLjQ2MzA0ODg1MTY5OTU2OCwgNjg2NzI2MS41MjIyNTY2NzUxNzYzMjIgXSBdIF0gfSB9LAp7ICJ0eXBlIjogIkZlYXR1cmUiLCAicHJvcGVydGllcyI6IHsgIm5hbWUiOiAibmlldXdtYXJrdCIgfSwgImdlb21ldHJ5IjogeyAidHlwZSI6ICJQb2x5Z29uIiwgImNvb3JkaW5hdGVzIjogWyBbIFsgNTQ1NTk1LjYxMjQ1MTMwODYzOTcyLCA2ODY3ODgwLjMyMzI3MTMzNDE3MTI5NSBdLCBbIDU0NTUyMC4yNzI2NDEwNDc2MDI1MTksIDY4Njc2NjkuOTg2NTEwMjU0NDQyNjkyIF0sIFsgNTQ1NDA4LjUwMjgwNjQ4MDk3Mzk1OSwgNjg2NzcxMC42MzcxODg1NzcwOTMxODQgXSwgWyA1NDU0NjUuODA4MTY2MTI3MzAyNjg0LCA2ODY3ODUxLjYwNzY4Mzk5MDE1MDY5IF0sIFsgNTQ1NTA3LjU5ODgwMzk0MjA5MTc2MywgNjg2Nzg2NS43NzExOTI1MDAzNjc3NjEgXSwgWyA1NDU1MTguODczOTE2NTQ1OTk5MjM2LCA2ODY3OTA0LjYwNjI4MzEzOTQzNzQzNyBdLCBbIDU0NTU5NS42MTI0NTEzMDg2Mzk3MiwgNjg2Nzg4MC4zMjMyNzEzMzQxNzEyOTUgXSBdIF0gfSB9Cl0KfQo=",import.meta.url)},eg=.38,Y1=.95,fc=640;async function j1(){const r=await Promise.all(Object.entries(X1).map(async([e,t])=>{const n=await fetch(t);if(!n.ok)throw new Error(`Could not load neighborhood: ${e}`);return[e,await n.json()]}));return Object.fromEntries(r)}function q1(r,e,t,n,i,s){const o={},a=s?.low?1.7:1;for(const[l,c]of Object.entries(r||{})){const u=kd(c).map(L=>L.map(F=>F.map(k=>Vd(k,e,t,n)))),h=u.flat(2);if(!h.length)continue;const f=u.reduce((L,F)=>L+Q1(F[0]),0)/u.length,d=Math.sqrt(Math.max(f,1e-6)),g=Math.min(eg,d*.3),_=Math.min(Y1,d*.75),m=Math.min(2,Math.max(1,eg/g)),p=Math.min(...h.map(L=>L.x))-_*3,S=Math.max(...h.map(L=>L.x))+_*3,y=Math.min(...h.map(L=>L.z))-_*3,x=Math.max(...h.map(L=>L.z))+_*3,A=S-p,E=x-y,T=A>=E?fc:Math.max(160,Math.round(fc*A/E)),C=E>=A?fc:Math.max(160,Math.round(fc*E/A)),M=Hd(u,p,y,A,E,T,C),v=Math.min(T/A,C/E),D=l==="markets"?[{mode:"fill",blur:1.5,color:"#ddb278",opacity:.34*Math.min(a,1.4)}]:[{mode:"inner",blur:Math.max(5,g*v),color:"#ddb278",opacity:.13*m*a},{mode:"outer",blur:Math.max(12,_*v),color:"#b97838",opacity:.09*m*a}];o[l]=D.map((L,F)=>{const k=tA(M,T,C,L.blur,L.mode),Y=new su({color:L.color,alphaMap:k,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Ps,side:Fi,toneMapped:!1}),V=new bn(new Ls(A,E),Y);return V.rotation.x=-Math.PI/2,V.position.set((p+S)/2,.09+F*.002,(y+x)/2),V.renderOrder=5,V.userData.neighborhoodOpacity=L.opacity,V.userData.warmFrames=12,i.add(V),V})}return o}function Z1(r,e){for(const[t,n]of Object.entries(r||{})){const i=mt.clamp(e[t]||0,0,1);for(const s of n){if(s.userData.warmFrames>0){s.userData.warmFrames-=1,s.material.opacity=0,s.visible=!0;continue}s.material.opacity=i*s.userData.neighborhoodOpacity,s.visible=i>.001}}}const $1=["jodenbuurt","transvaalbuurt","rivierenbuurt","markets"];function J1(r,e,t,n){const i=$1.map(y=>{const x=r?.[y];return x?kd(x).map(A=>A.map(E=>E.map(T=>Vd(T,e,t,n)))):null}),s=i.flat(4).filter(Boolean);if(!s.length)return null;const o=1.4,a=Math.min(...s.map(y=>y.x))-o,l=Math.max(...s.map(y=>y.x))+o,c=Math.min(...s.map(y=>y.z))-o,u=Math.max(...s.map(y=>y.z))+o,h=l-a,f=u-c,d=768,g=h>=f?d:Math.max(192,Math.round(d*h/f)),_=f>=h?d:Math.max(192,Math.round(d*f/h)),p=.5*Math.min(g/h,_/f),S=i.map(y=>{if(!y||!y.length)return null;const x=Hd(y,a,c,h,f,g,_),A=document.createElement("canvas");A.width=g,A.height=_;const E=A.getContext("2d",{willReadFrequently:!0});return E.fillStyle="#000000",E.fillRect(0,0,g,_),E.filter=`blur(${p.toFixed(2)}px)`,E.drawImage(x,0,0),E.filter="none",E.getImageData(0,0,g,_).data});return(y,x)=>{const A=Math.min(g-1,Math.max(0,Math.round((y-a)/h*(g-1)))),T=(Math.min(_-1,Math.max(0,Math.round((x-c)/f*(_-1))))*g+A)*4;return S.map(C=>C?C[T]:0)}}function K1(r,e,t,n){const i=[];for(const x of r||[])for(const A of kd(x))i.push(A.map(E=>E.map(T=>Vd(T,e,t,n))));const s=i.flat(2);if(!s.length)return null;const o=1.2,a=Math.min(...s.map(x=>x.x))-o,l=Math.max(...s.map(x=>x.x))+o,c=Math.min(...s.map(x=>x.z))-o,u=Math.max(...s.map(x=>x.z))+o,h=l-a,f=u-c,d=1024,g=h>=f?d:Math.max(256,Math.round(d*h/f)),_=f>=h?d:Math.max(256,Math.round(d*f/h)),m=Hd(i,a,c,h,f,g,_),p=document.createElement("canvas");p.width=g,p.height=_;const S=p.getContext("2d",{willReadFrequently:!0});S.fillStyle="#000000",S.fillRect(0,0,g,_),S.filter=`blur(${(.35*Math.min(g/h,_/f)).toFixed(2)}px)`,S.drawImage(m,0,0),S.filter="none";const y=new ou(p);return y.flipY=!1,y.minFilter=kn,y.magFilter=kn,y.generateMipmaps=!1,{texture:y,rect:{minX:a,minZ:c,width:h,depth:f}}}function Q1(r){let e=0;for(let t=0;t<r.length;t+=1){const n=r[t],i=r[(t+1)%r.length];e+=n.x*i.z-i.x*n.z}return Math.abs(e)/2}function kd(r){const e=[];for(const t of r?.features||[]){const n=t?.geometry;n?.type==="Polygon"&&e.push(n.coordinates),n?.type==="MultiPolygon"&&e.push(...n.coordinates)}return e}function Vd(r,e,t,n){const[i,s]=Math.abs(r[0])<=180&&Math.abs(r[1])<=90?eA(r):r,o=(i-e.minX)/(e.maxX-e.minX||1),a=(s-e.minY)/(e.maxY-e.minY||1);return{x:(o-.5)*t,z:(.5-a)*n}}function eA([r,e]){const t=Math.max(-85.05112878,Math.min(85.05112878,e)),n=r*20037508342789244e-9/180,i=Math.log(Math.tan((90+t)*Math.PI/360))/(Math.PI/180);return[n,i*20037508342789244e-9/180]}function Hd(r,e,t,n,i,s,o){const a=document.createElement("canvas");a.width=s,a.height=o;const l=a.getContext("2d",{willReadFrequently:!0});l.fillStyle="#000000",l.fillRect(0,0,s,o),l.fillStyle="#ffffff",l.beginPath();for(const c of r)for(const u of c)u.forEach((h,f)=>{const d=(h.x-e)/n*s,g=(h.z-t)/i*o;f===0?l.moveTo(d,g):l.lineTo(d,g)}),l.closePath();return l.fill("evenodd"),a}function tA(r,e,t,n,i){const s=document.createElement("canvas");s.width=e,s.height=t;const o=s.getContext("2d",{willReadFrequently:!0});o.fillStyle="#000000",o.fillRect(0,0,e,t),o.filter=`blur(${n.toFixed(2)}px)`,o.drawImage(r,0,0),o.filter="none";const a=o.getImageData(0,0,e,t),l=r.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,e,t);for(let u=0;u<a.data.length;u+=4){const h=l.data[u]>127,f=a.data[u]/255,d=i==="fill"?f:i==="inner"?h?mt.clamp((f-.5)*2,0,1):0:h?0:mt.clamp(f*1.85,0,1),g=Math.round(d*255);a.data[u]=g,a.data[u+1]=g,a.data[u+2]=g,a.data[u+3]=255}o.putImageData(a,0,0);const c=new ou(s);return c.minFilter=kn,c.magFilter=kn,c.generateMipmaps=!1,c}function nA(r,e){const t=r.length,n=new Array(t).fill(0);if(t<2)return n;const i=new Array(t-1),s=new Array(t-1);for(let o=0;o<t-1;o+=1)i[o]=r[o+1]-r[o],s[o]=(e[o+1]-e[o])/i[o];n[0]=s[0],n[t-1]=s[t-2];for(let o=1;o<t-1;o+=1){if(s[o-1]*s[o]<=0){n[o]=0;continue}const a=2*i[o]+i[o-1],l=i[o]+2*i[o-1];n[o]=(a+l)/(a/s[o-1]+l/s[o])}return n}function ps(r,e){const t=nA(r,e),n=r.length;return i=>{if(i<=r[0])return e[0];if(i>=r[n-1])return e[n-1];let s=0,o=n-1;for(;o-s>1;){const h=s+o>>1;r[h]<=i?s=h:o=h}const a=r[s+1]-r[s],l=(i-r[s])/a,c=l*l,u=c*l;return(2*u-3*c+1)*e[s]+(u-2*c+l)*a*t[s]+(-2*u+3*c)*e[s+1]+(u-c)*a*t[s+1]}}function av([r,e]){const t=mt.clamp(e,-85.05112878,85.05112878),n=r*20037508342789244e-9/180,i=Math.log(Math.tan((90+t)*Math.PI/360))/(Math.PI/180);return[n,i*20037508342789244e-9/180]}function yo(r){const e=[];for(const n of r.features||[])iA(n.geometry,e);const t=e.flat();return{minX:Math.min(...t.map(n=>n[0])),maxX:Math.max(...t.map(n=>n[0])),minY:Math.min(...t.map(n=>n[1])),maxY:Math.max(...t.map(n=>n[1]))}}function iA(r,e){if(r){if(r.type==="Polygon")for(const t of r.coordinates)e.push(t);else if(r.type==="MultiPolygon")for(const t of r.coordinates)for(const n of t)e.push(n)}}function zC(r,e,t){const n=Math.min(t-1,Math.max(0,Math.floor(r*t))),i=Math.min(t-1,Math.max(0,Math.floor(e*t)));return n+i*t}function rA(r){let e=r+1>>>0;return e=Math.imul(e^e>>>16,2146121005),e=Math.imul(e^e>>>15,2221713035),(e^e>>>16)>>>0}function dc(r){return new Qt(Float32Array.from(r),1)}function ni(r,e,t){const n=mt.clamp((t-r)/Math.max(1e-5,e-r),0,1);return n*n*(3-2*n)}function _h(r,e,t){const n=mt.clamp((t-r)/Math.max(1e-5,e-r),0,1);return n*n*n*(n*(n*6-15)+10)}async function sA(r){const e=r==="1to10"?["1to10","1to1"]:["1to1"];for(const t of e){const n=await fetch(`./data/scene.${t}.bin`).then(s=>s.ok?s.arrayBuffer():null).then(s=>s?aA(s):null).catch(()=>null);if(n)return{scene:n,unit:t};const i=await fetch(`./data/scene.${t}.json`);if(i.ok)return{scene:await i.json(),unit:t}}throw new Error("No soul schedule is available.")}const oA="SOULBIN1",tg=["x","y","t_start","rise_duration","peak_height","peak_intensity","base_height"];function aA(r){if(r.byteLength<16)return null;const e=new DataView(r),t=new TextDecoder().decode(new Uint8Array(r,0,8)),n=e.getUint32(8,!0),i=e.getFloat32(12,!0),s=16+n*tg.length*4;if(t!==oA||!n||r.byteLength!==s)return null;const o={};return tg.forEach((a,l)=>{o[a]=new Float32Array(r,16+l*n*4,n)}),{params:{duration:i,coordinate_frame:"amsterdam-boundaries-3857-v1"},n,lights:o}}function lA(r){return new Promise((e,t)=>{new lM().load("./data/stippenkaart-1941-georef.jpg",n=>{n.colorSpace=Mn,n.anisotropy=Math.min(r.capabilities.getMaxAnisotropy(),8),e(n)},void 0,t)})}async function cA(){const r=await fetch("./data/boundaries.geojson");if(!r.ok)return null;const e=await r.arrayBuffer(),t=JSON.parse(new TextDecoder().decode(e)),n=await crypto.subtle.digest("SHA-256",e);return Object.defineProperty(t,"_sha256",{value:[...new Uint8Array(n)].map(i=>i.toString(16).padStart(2,"0")).join(""),enumerable:!1}),t}async function uA(){const r=await fetch("./data/footprints_scene.geojson");return r.ok?r.json():null}async function hA(){const r=new URL("data:application/geo+json;base64,ewoidHlwZSI6ICJGZWF0dXJlQ29sbGVjdGlvbiIsCiJuYW1lIjogImJhcnJpY2FkZSIsCiJjcnMiOiB7ICJ0eXBlIjogIm5hbWUiLCAicHJvcGVydGllcyI6IHsgIm5hbWUiOiAidXJuOm9nYzpkZWY6Y3JzOkVQU0c6OjM4NTciIH0gfSwKImZlYXR1cmVzIjogWwp7ICJ0eXBlIjogIkZlYXR1cmUiLCAicHJvcGVydGllcyI6IHsgfSwgImdlb21ldHJ5IjogeyAidHlwZSI6ICJQb2x5Z29uIiwgImNvb3JkaW5hdGVzIjogWyBbIFsgNTQ1NzAzLjM5NzQ3MTQyNDg5MDY4MiwgNjg2NzM1NC40ODM2NDQ1MzY2OTYzNzQgXSwgWyA1NDYxODYuODk0MTgyMDAzNjg1MjczLCA2ODY3Njc4LjcxNzEwNjEyNTMxNzUxNCBdLCBbIDU0NjQ4OS40MTE1MzM2NTYxODA4MzYsIDY4NjczOTkuODA0OTMwMjA4MjUwODggXSwgWyA1NDYwMDIuMTYwNDAyODQ2ODcxODc1LCA2ODY3MDk3LjY3NDYyOTg2MDU1NzYxNiBdLCBbIDU0NjEwMS45MDU0Njg4MDQyOTYxMDYsIDY4NjY5ODAuNjY3ODc1NTU5MDY5MjE2IF0sIFsgNTQ2MTE0LjQ1MTQwNzM5MTkyNzIwNSwgNjg2Njg5Mi4xMTI3MTA4MzE2ODY4NTQgXSwgWyA1NDYyMjQuNzI2ODgxMjExODU2MzgsIDY4NjY4MjkuMDMyMjc1NDI3MTMyODQ1IF0sIFsgNTQ2MTUxLjIxMzg1MDU2MDAxNTk5OSwgNjg2Njc0OS4xNTQ3NjE2MDEyMzk0NDMgXSwgWyA1NDU2NzEuMzgyMTQ1OTA5NDc2MDk0LCA2ODY2NTc2LjQxMDE4MTIyMTU1MjE5MyBdLCBbIDU0NTYwMi4xNzc1NTk3MTIyMDMyMiwgNjg2NjcwMS4zNzc3ODg0MzY1OTkwNzYgXSwgWyA1NDUzMjUuMjc3NDU3MTQ5MDAwODM4LCA2ODY2ODgwLjA4ODY4Njc4NjU5MjAwNyBdLCBbIDU0NTU5NC4wNjY1MzA1MDQ2MTMxODMsIDY4NjcyMjkuMTQxNTgzNDg3MzkxNDcyIF0sIFsgNTQ1NzAzLjM5NzQ3MTQyNDg5MDY4MiwgNjg2NzM1NC40ODM2NDQ1MzY2OTYzNzQgXSBdIF0gfSB9Cl0KfQo=",import.meta.url),e=await fetch(r);return e.ok?e.json():null}async function fA(r,e,t){if(!r?.features?.length)return null;const n=yo(r),i=13,s=256,o=s*2**i,a=E=>(E+20037508342789244e-9)/4007501668557849e-8*o,l=E=>(20037508342789244e-9-E)/4007501668557849e-8*o,c=a(n.minX),u=a(n.maxX),h=l(n.maxY),f=l(n.minY),d=Math.floor(c/s),g=Math.floor((u-.001)/s),_=Math.floor(h/s),m=Math.floor((f-.001)/s),p=document.createElement("canvas");p.width=2048,p.height=Math.round(p.width*(f-h)/(u-c));const S=p.getContext("2d",{alpha:!1});S.fillStyle="#0c1013",S.fillRect(0,0,p.width,p.height),S.filter="brightness(1.7) contrast(1.08)";const y=[];let x=0;for(let E=_;E<=m;E+=1)for(let T=d;T<=g;T+=1)y.push(pA(i,T,E).then(C=>{if(!C)return;x+=1;const M=(T*s-c)/(u-c)*p.width,v=(E*s-h)/(f-h)*p.height,D=s/(u-c)*p.width,L=s/(f-h)*p.height;S.drawImage(C,M,v,D+.5,L+.5)}));if(await Promise.all(y),t?.low){const E=await dA("./data/basemap/mobile-footprints.png");E&&(S.filter="none",S.drawImage(E,0,0,p.width,p.height))}if(e.domElement.dataset.cartoTiles=String(x),!x)return null;const A=new ou(p);return A.colorSpace=Mn,A.anisotropy=Math.min(e.capabilities.getMaxAnisotropy(),8),A}function dA(r){return new Promise(e=>{const t=new Image;t.onload=()=>e(t),t.onerror=()=>e(null),t.src=r})}function pA(r,e,t){return new Promise(n=>{const i=new Image;i.crossOrigin="anonymous";let s=!1;i.onload=()=>n(i),i.onerror=()=>{if(s)n(null);else{s=!0;const o=["a","b","c","d"][(e+t)%4];i.src=`https://${o}.basemaps.cartocdn.com/dark_nolabels/${r}/${e}/${t}@2x.png`}},i.src=`./data/basemap/${r}/${e}/${t}@2x.png`})}function mA({scene:r,worldW:e,worldH:t,mapTexture:n,basemapTexture:i}){const s=new su({map:i,color:i?"#ffffff":"#141b1f",transparent:!0,opacity:0,depthWrite:!1}),o=new bn(new Ls(e,t),s);o.rotation.x=-Math.PI/2,o.position.y=-.08,r.add(o);const a=new ki({uniforms:{uMap:{value:n},uDesaturate:{value:0},uOpacity:{value:1}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform sampler2D uMap;
      uniform float uDesaturate;
      uniform float uOpacity;
      varying vec2 vUv;
      void main() {
        vec4 texel = texture2D(uMap, vUv);
        float grey = dot(texel.rgb, vec3(0.299, 0.587, 0.114));
        vec3 drained = mix(texel.rgb, vec3(grey) * vec3(0.82, 0.84, 0.86), uDesaturate);
        drained = mix(drained, drained * vec3(0.25, 0.29, 0.31), uDesaturate * 0.58);
        gl_FragColor = vec4(drained, texel.a * uOpacity);
      }
    `,transparent:!0,depthWrite:!1}),l=new bn(new Ls(e,t),a);return l.rotation.x=-Math.PI/2,l.position.y=0,l.renderOrder=1,r.add(l),{mapMaterial:a,basemapMaterial:s}}const St=new URLSearchParams(location.search),ng=St.get("flatten")==="0"?0:mt.degToRad(-1.7),gA=St.get("regrade")!=="0",uo={CAP:1,FLOOR:.1,FLOOR_LOW:.05,DWELL_KEEP:.4,SAMPLES:2048,PASSES:3},mu=St.get("finale")!=="0",Gd=St.get("chase")!=="0",ms={VMAX:parseFloat(St.get("chasev"))||.06,AMAX:.25,MAX_LAG:.25},Wd=St.get("paging")!=="0",_A=Wd&&St.get("snap")!=="0",Ri=matchMedia("(prefers-reduced-motion: reduce)").matches||St.get("reducedMotion")==="1",Ha=St.get("buildings"),er=["legacy","tiles","off"].includes(Ha)?Ha:"tiles";Ha&&Ha!==er&&console.warn(`Unknown buildings mode "${Ha}"; using tiles.`);const ig=1,vA=St.get("footprintlod")!=="0",BC=St.get("footprintmask")==="rgba"?"rgba":"r8",yi=St.get("idlesleep")!=="0",rg=St.get("buildingstream"),sg=["all","distance","objectdistance"].includes(rg)?rg:"objectdistance";function xA(){const r=/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent),e=navigator.deviceMemory??8,t=navigator.hardwareConcurrency??8,n=!r&&e>=6&&t>=6,i=St.get("tier"),s=["high","low"].includes(i)?i:n?"high":"low",o=St.get("quality"),a=["1to10","1to1"].includes(o)?o:s==="low"?"1to10":"1to1";return{unit:a,strong:n,mobile:r,tier:s,low:s==="low",maxFps:(()=>{const l=parseFloat(St.get("fpscap"));return Number.isFinite(l)?l:60})(),idleFps:(()=>{const l=parseFloat(St.get("idlefps"));return Number.isFinite(l)?l:30})(),pixelRatio:(()=>{const l=parseFloat(St.get("dpr"));return Number.isFinite(l)?mt.clamp(l,.5,3):s==="high"?Math.min(devicePixelRatio,1.65):Math.min(devicePixelRatio,1.25)})(),pointSize:lv(a,r)}}function lv(r,e){return r==="1to10"?1.05:e?.85:.68}const cv=.85;function yA({data:r,heightField:e,boundaries:t,scene:n,quality:i,worldX:s,worldZ:o,footprintHeightAt:a}){const l=r.lights,c=l.x.length,u=new Float32Array(c*3),h=new Float32Array(c),f=new Float32Array(c),d=er==="tiles"&&l.base_height?.length===c?l.base_height:null;er==="tiles"&&!d&&console.warn("Baked soul heights are unavailable or incomplete; using guarded ground-level heights.");const g=TA(l,.5,.5),_=new U;for(let E=0;E<c;E+=1)u[E*3]=s(l.x[E]),u[E*3+1]=0,u[E*3+2]=o(l.y[E]),h[E]=er==="legacy"?a(l.x[E],l.y[E],e):d?.[E]??0,E===g&&(f[E]=1);MA(_,g,u,h,l);const m=new pi;m.setAttribute("position",new Qt(u,3)),m.setAttribute("aBaseHeight",new Qt(h,1)),m.setAttribute("aTStart",dc(l.t_start)),m.setAttribute("aRiseDuration",dc(l.rise_duration)),m.setAttribute("aPeakHeight",dc(l.peak_height)),m.setAttribute("aPeakIntensity",dc(l.peak_intensity)),m.setAttribute("aFocus",new Qt(f,1)),m.setAttribute("aWalker",new Qt(new Float32Array(c),1)),m.setAttribute("aAura",new Qt(new Uint8Array(c*4),4,!0));const p=SA(l,c,g,i.unit);m.setAttribute("aPostwar",new Qt(p.postwar,1)),m.setAttribute("aFadeOrder",new Qt(p.fadeOrder,1));const S=new ki({uniforms:{uRise:{value:0},uScheduleDuration:{value:r.params.duration},uBuildings:{value:0},uPointSize:{value:i.pointSize},uPixelRatio:{value:i.pixelRatio},uOpacity:{value:1},uPopulationFade:{value:0},uIsolate:{value:0},uColor:{value:new et("#fff0d3")},uCloseness:{value:0},uAuraTint:{value:new pt(0,0,0,0)},uWalkerFade:{value:0}},vertexShader:`
      uniform float uRise;
      uniform float uScheduleDuration;
      uniform float uBuildings;
      uniform float uPointSize;
      uniform float uPixelRatio;
      uniform float uPopulationFade;
      uniform float uIsolate;
      uniform float uCloseness;
      uniform float uWalkerFade;
      uniform vec4 uAuraTint;
      attribute float aBaseHeight;
      attribute float aWalker;
      attribute vec4 aAura;
      attribute float aTStart;
      attribute float aRiseDuration;
      attribute float aPeakHeight;
      attribute float aPeakIntensity;
      attribute float aFocus;
      attribute float aPostwar;
      attribute float aFadeOrder;
      varying float vIntensity;
      varying float vFade;
      varying float vFocus;
      varying float vAura;

      void main() {
        // Amber warmth for souls inside the currently-lit neighborhood (soft mask edge).
        vAura = clamp(dot(aAura, uAuraTint), 0.0, 1.0);
        float riseTime = uRise * uScheduleDuration;
        float dt = riseTime - aTStart;
        float u = clamp(dt / max(aRiseDuration, 0.0001), 0.0, 1.0);
        float easedHeight = 1.0 - pow(1.0 - u, 3.0);
        float igniteU = clamp(u * 1.3, 0.0, 1.0);
        float intensity = aPeakIntensity * (1.0 - pow(1.0 - igniteU, 2.0));
        if (dt <= 0.0) intensity = 0.0;
        if (dt >= aRiseDuration) {
          // Breathing removed (owner decision: a memorial field should hold still). Its additive
          // ±% intensity pulse was also the source of the bloom-halo "disco glitter" — in dense/
          // bright clusters it tipped souls in and out of the bloom threshold every frame. Risen
          // souls now hold a steady peak intensity.
          intensity = aPeakIntensity;
        }

        vec3 transformed = position;
        // At rooftop level (uCloseness→1) ALL soul altitude — baked building height AND
        // the rise float — blends to zero, so every light sits at street level during the
        // close beats. Above that altitude nothing changes.
        float groundBlend = 1.0 - uCloseness;
        transformed.y += (aBaseHeight * uBuildings + aPeakHeight * easedHeight * ${cv.toFixed(1)}) * groundBlend;
        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
        ${i.low?`
        // Distance thinning (low tier, owner decision 2026-07-10): fewer lights spawn
        // farther away. Per-soul stable hash vs a density target that falls from 1.0
        // (nearer than 40 world units) to 0.35 (130+); the smoothstep edge fades a
        // soul out just before its cut so the threshold never pops as range changes.
        // The focus/memorial soul is exempt (aFocus).
        float thinRand = fract(sin(dot(position.xz, vec2(12.9898, 78.233))) * 43758.5453);
        float thinDensity = mix(1.0, 0.35, clamp((-mvPosition.z - 40.0) / 90.0, 0.0, 1.0));
        float thinKeep = max(1.0 - smoothstep(thinDensity - 0.08, thinDensity, thinRand), aFocus);`:""}
        float focusScale = mix(1.0, 4.4, aFocus * uIsolate);
        // Souls shrink to ~half size at close range (halo widens in the fragment shader).
        float closeScale = mix(1.0, 0.65, uCloseness);
        gl_PointSize = clamp(uPointSize * uPixelRatio * focusScale * closeScale * (180.0 / max(8.0, -mvPosition.z)), ${i.low?"1.4":"1.0"}, ${i.low?"mix(7.0, 5.5, uCloseness)":"mix(10.0, 6.5, uCloseness)"});
        gl_Position = projectionMatrix * mvPosition;
        vIntensity = intensity * mix(1.0, 1.8, aFocus * uIsolate);
        float lossFade = 1.0 - smoothstep(aFadeOrder * 0.72, aFadeOrder * 0.72 + 0.28, uPopulationFade);
        float postwarFade = mix(lossFade, 1.0, aPostwar);
        vFade = postwarFade * mix(1.0, aFocus, uIsolate);
        // Souls that walk (walkers.js) hand their light over to the walker layer.
        vFade *= 1.0 - aWalker * uWalkerFade;
        ${i.low?`
        vFade *= thinKeep;
        // Fully-thinned souls skip rasterization entirely (fill rate is the budget).
        if (thinKeep <= 0.001) gl_PointSize = 0.0;`:""}
        vFocus = aFocus * uIsolate;
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uOpacity;
      uniform float uCloseness;
      varying float vIntensity;
      varying float vFade;
      varying float vFocus;
      varying float vAura;
      void main() {
        vec2 p = gl_PointCoord - 0.5;
        float d = length(p);
        if (d > 0.5 || vIntensity <= 0.001) discard;
        // Close-up look: softer, slightly translucent core with a wider, stronger halo.
        float core = smoothstep(mix(0.19, 0.24, uCloseness), 0.0, d) * mix(1.0, 0.62, uCloseness);
        float halo = smoothstep(0.5, mix(0.04, 0.12, uCloseness), d) * mix(0.34, 0.6, uCloseness);
        // The static field dims ~40% at street level so the built forms and the moving
        // walkers carry the close-up.
        float alpha = (core + halo) * clamp(vIntensity, 0.0, 1.18) * vFade * uOpacity * mix(1.0, 0.6, uCloseness);
        // Owner decision 2026-07-14: souls hold their normal color and luminosity through
        // every illumination beat (all four sources) — the footprint aura alone carries
        // the highlight. The former vAura amber warm/brighten term is retired; its
        // plumbing (uAuraTint, aAura, the sampler bake) stays inert pending separate
        // cleanup approval.
        vec3 tinted = uColor;
        vec3 focusColor = mix(tinted, vec3(1.0, 0.78, 0.45), vFocus);
        gl_FragColor = vec4(focusColor * (0.75 + core * 0.42), alpha);
      }
    `,transparent:!0,depthWrite:!1,depthTest:!1,blending:Ps,toneMapped:!1}),y=new fy(m,S);y.frustumCulled=!1,y.renderOrder=6,n.add(y);const x=new od({map:Bf(),color:"#ffd18a",transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Ps,toneMapped:!1}),A=new v_(x);return A.position.copy(_),A.scale.setScalar(1.5),A.renderOrder=7,n.add(A),{soulPoints:y,focusGlow:A}}function MA(r,e,t,n,i){r.set(t[e*3],n[e]+i.peak_height[e]*cv,t[e*3+2])}function SA(r,e,t,n){const s=Math.min(e,Math.max(1,Math.round(15e3/(n==="1to10"?10:1)))),o=32,a=new Float32Array(o*o),l=p=>{const S=Math.min(o-1,Math.max(0,Math.floor(r.x[p]*o))),y=Math.min(o-1,Math.max(0,Math.floor(r.y[p]*o)));return S+y*o};for(let p=0;p<e;p+=1)a[l(p)]+=1;const c=new Float32Array(e);for(let p=0;p<e;p+=1)c[p]=a[l(p)];const u=new Float64Array(e);for(let p=0;p<e;p+=1)u[p]=rA(p)/4294967295*c[p];const f=Float64Array.from(u).sort()[mt.clamp(s-1,0,e-1)],d=new Float32Array(e);for(let p=0;p<e;p+=1)d[p]=u[p]<=f?1:0;if(!d[t]){let p=-1;for(let S=0;S<e;S+=1)d[S]&&S!==t&&(p<0||u[S]>u[p])&&(p=S);p>=0&&(d[p]=0),d[t]=1}const g=[];for(let p=0;p<e;p+=1)d[p]||g.push(p);g.sort((p,S)=>u[S]-u[p]);const _=new Float32Array(e),m=g.length;for(let p=0;p<m;p+=1)_[g[p]]=m>1?p/(m-1):0;return{postwar:d,fadeOrder:_}}function TA(r,e,t){let n=0,i=1/0;for(let s=0;s<r.x.length;s+=1){const o=(r.x[s]-e)**2+(r.y[s]-t)**2;o<i&&(n=s,i=o)}return n}function Bf(){const r=document.createElement("canvas");r.width=64,r.height=64;const e=r.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.12,"rgba(255,226,174,0.92)"),t.addColorStop(.42,"rgba(255,190,100,0.26)"),t.addColorStop(1,"rgba(255,175,70,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=new ou(r);return n.colorSpace=Mn,n}let Yi=null;function bA({scene:r,geojson:e,boundaries:t,normalizeGeoPoint:n,makeGlowTexture:i}){if(!e?.features?.length||!t?.features?.length)return null;const o=e.features.find(_=>_.geometry?.type==="Polygon")?.geometry?.coordinates?.[0];if(!o?.length)return null;const a=yo(t),l=o.map(_=>{const m=n(_,a);return new U(m.x,.16,m.z)});if(l.length>2&&l[0].distanceToSquared(l.at(-1))<1e-10&&l.pop(),l.length<3)return null;const c=[...l,l[0].clone()],u=[0];for(let _=1;_<c.length;_+=1)u.push(u.at(-1)+c[_-1].distanceTo(c[_]));Yi={points:c,lengths:u,total:u.at(-1)};const h=(_,m)=>new ki({uniforms:{uColor:{value:new et(_)},uProgress:{value:0},uOpacity:{value:m}},vertexShader:`
      attribute float aProgress;
      attribute float aEdge;
      varying float vProgress;
      varying float vEdge;
      void main() {
        vProgress = aProgress;
        vEdge = aEdge;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uProgress;
      uniform float uOpacity;
      varying float vProgress;
      varying float vEdge;
      void main() {
        float drawn = 1.0 - smoothstep(uProgress - 0.008, uProgress + 0.002, vProgress);
        float lateral = 1.0 - smoothstep(0.18, 1.0, abs(vEdge));
        float alpha = drawn * lateral * uOpacity;
        if (alpha <= 0.001) discard;
        gl_FragColor = vec4(uColor * 1.35, alpha);
      }
    `,transparent:!0,depthWrite:!1,depthTest:!1,blending:Ps,side:Fi,toneMapped:!1}),d=[{width:.42,color:"#ff2500",opacity:.18,order:7},{width:.13,color:"#ff6a22",opacity:1,order:8}].map(({width:_,color:m,opacity:p,order:S})=>{const y=new bn(EA(l,_),h(m,p));return y.renderOrder=S,r.add(y),y}),g=new v_(new od({map:i(),color:"#ff3b0a",transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Ps,toneMapped:!1}));return g.position.copy(l[0]),g.scale.setScalar(1.15),g.renderOrder=9,r.add(g),{barricadeMeshes:d,barricadeHead:g}}function EA(r,e){const t=[],n=[],i=[],s=[],o=r.length,a=r.map((h,f)=>h.distanceTo(r[(f+1)%o])),l=a.reduce((h,f)=>h+f,0);let c=0;for(let h=0;h<=o;h+=1){const f=h%o,d=r[(f-1+o)%o],g=r[f],_=r[(f+1)%o],m=new he(g.x-d.x,g.z-d.z).normalize(),p=new he(_.x-g.x,_.z-g.z).normalize(),S=new he(-m.y,m.x),y=new he(-p.y,p.x),x=S.add(y).normalize(),A=Math.max(.35,Math.abs(x.dot(y))),E=Math.min(e*.9,e*.5/A),T=h===o?1:c/Math.max(l,1e-4);t.push(g.x+x.x*E,g.y,g.z+x.y*E,g.x-x.x*E,g.y,g.z-x.y*E),n.push(T,T),i.push(1,-1),h<o&&(c+=a[h])}for(let h=0;h<o;h+=1){const f=h*2,d=f+1,g=f+2,_=f+3;s.push(f,d,g,d,_,g)}const u=new pi;return u.setAttribute("position",new Hn(t,3)),u.setAttribute("aProgress",new Hn(n,1)),u.setAttribute("aEdge",new Hn(i,1)),u.setIndex(s),u.computeBoundingSphere(),u}function wA(r){if(!Yi)return null;const e=mt.clamp(r,0,1)*Yi.total;let t=1;for(;t<Yi.lengths.length&&Yi.lengths[t]<e;)t+=1;const n=Yi.lengths[t-1],i=Yi.lengths[t]??Yi.total,s=(e-n)/Math.max(1e-4,i-n);return Yi.points[t-1].clone().lerp(Yi.points[t],s)}function AA({cameraCueKnots:r,state:e,quality:t}){const n=Xo.timeline({paused:!0,defaults:{ease:"none"}}),i=r||{},s=(d,g=0)=>mt.clamp((i[d]??0)*100+g,0,100),o=(d,g)=>Math.max(1.5,((i[g]??0)-(i[d]??0))*100),a=(d,g,_)=>mt.clamp(((i[d]??0)*(1-_)+(i[g]??0)*_)*100,0,100),l=a("ink","transform",.2),c=Math.max(2.5,o("ink","transform")*.7),u=a("rivieren","fenced",.83),h=s("fenced"),f=(d,g,_,m)=>{const p=a(g,_,.5),S=s(_),y=a(_,m,.5);n.to(e,{[d]:1,duration:Math.max(.5,S-p),ease:"sine.inOut"},p).to(e,{[d]:0,duration:Math.max(.5,y-S),ease:"sine.inOut"},S)};return n.to(e,{desaturate:1,duration:c},l).to(e,{mapOpacity:0,duration:c},l).to(e,{basemapOpacity:1,duration:c+1},l).to(e,{rise:1,duration:c+1},l).to(e,{buildings:1,duration:c+1,ease:"power2.out"},l).to(e,{cityOpacity:1,duration:c+1},l).to(e,{synagogueGlow:1,duration:o("jodenbuurt","synagogues")*.6},s("synagogues",-2)).to(e,{synagogueGlow:0,duration:o("synagogues","markets")*.7},s("synagogues",1)).to(e,{buildingsOpacity:1,duration:Math.max(.8,o("jodenbuurt","synagogues")*.6),ease:"power2.out"},s("jodenbuurt",-1)).to(e,{buildingsOpacity:0,duration:Math.max(.8,o("markets","transvaal")*.6),ease:"power2.in"},s("markets",1)).to(e,{soulCloseness:1,duration:Math.max(.8,o("jodenbuurt","synagogues")*.6),ease:"power2.out"},s("jodenbuurt",-1)).to(e,{soulCloseness:0,duration:Math.max(.8,o("markets","transvaal")*.6),ease:"power2.in"},s("markets",1)).to(e,{crowdLife:1,duration:Math.max(.8,o("jodenbuurt","synagogues")*.6),ease:"power2.out"},s("jodenbuurt",.5)).to(e,{crowdLife:0,duration:Math.max(.8,o("markets","transvaal")*.6),ease:"power2.in"},s("markets",1)).to(e,{demolishedOpacity:t.low?0:1,duration:Math.max(1.2,o("jodenbuurt","synagogues")),ease:"sine.inOut"},s("jodenbuurt",-1)).to(e,{demolishedOpacity:0,duration:Math.max(.8,o("markets","transvaal")*.6),ease:"power2.in"},s("markets",1)).to(e,{buildingsOpacity:1,duration:Math.max(1.2,o("rivieren","fenced")*.35),ease:"power2.out"},a("rivieren","fenced",.55)).to(e,{demolishedOpacity:1,duration:Math.max(1.2,o("rivieren","fenced")*.35),ease:"sine.inOut"},t.low?s("fenced",.5):a("rivieren","fenced",.55)).to(e,{soulCloseness:1,duration:Math.max(1.2,o("rivieren","fenced")*.35),ease:"power2.out"},a("rivieren","fenced",.55)).to(e,{soulOpacity:0,duration:Math.max(1.2,o("rivieren","fenced")*.35),ease:"power2.out"},a("rivieren","fenced",.55)).to(e,{soulOpacity:1,duration:o("demolished","deported")*.4,ease:"power2.out"},a("demolished","deported",.35)).to(e,{soulCloseness:0,duration:o("demolished","deported")*.4},a("demolished","deported",.35)).to(e,{buildingsOpacity:0,duration:o("demolished","deported")*.4},a("demolished","deported",.35)).to(e,{demolishedOpacity:0,duration:o("demolished","deported")*.4},a("demolished","deported",.35)).to(e,{demolishedWarmth:1,duration:Math.max(.8,o("dismantled","demolished")*.6)},s("demolished",-2)).to(e,{demolishedDissolve:1,duration:Math.max(.9,o("demolished","deported")*.14),ease:"none"},s("demolished",.6)).to(e,{barricadeOpacity:1,duration:.35},u).to(e,{barricadeProgress:1,duration:Math.max(.8,h-u),ease:"power1.inOut"},u).to(e,{barricadeOpacity:0,duration:.8},s("dismantled",-.4)).to(e,{cityOpacity:0,duration:o("demolished","deported")*.28},a("demolished","deported",.7)).to(e,{basemapOpacity:0,duration:o("demolished","deported")*.28},a("demolished","deported",.7)).to(e,{mapOpacity:.4,duration:o("demolished","deported")*.3+o("deported","reckoning")*.4},a("demolished","deported",.7)).to(e,{mapOpacity:.03,duration:o("reckoning","remained")*.7},s("reckoning")).to(e,{populationFade:1,duration:o("reckoning","remained")*.78},a("reckoning","remained",.18)),mu?n.to(e,{isolate:1,duration:o("remained","memorial")*.86},a("remained","memorial",.12)).to(e,{fade:.42,soulOpacity:.94,duration:o("remained","memorial")*.5},a("remained","memorial",.3)):n.to(e,{fade:1,duration:o("remained","memorial")*.6},a("remained","memorial",.35)),f("jodenbuurtIllumination","collab","jodenbuurt","synagogues"),f("marketsIllumination","synagogues","markets","transvaal"),f("transvaalbuurtIllumination","markets","transvaal","rivieren"),f("rivierenbuurtIllumination","transvaal","rivieren","fenced"),n.duration(100),n}var og="1.3.25";function uv(r,e,t){return Math.max(r,Math.min(e,t))}function CA(r,e,t){return(1-t)*r+t*e}function RA(r,e,t,n){return CA(r,e,1-Math.exp(-t*n))}function PA(r,e){return(r%e+e)%e}var DA=class{constructor(){ze(this,"isRunning",!1);ze(this,"value",0);ze(this,"from",0);ze(this,"to",0);ze(this,"currentTime",0);ze(this,"lerp");ze(this,"duration");ze(this,"easing");ze(this,"onUpdate")}advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=uv(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=RA(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function NA(r,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(this,n)},e)}}var IA=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){ze(this,"width",0);ze(this,"height",0);ze(this,"scrollHeight",0);ze(this,"scrollWidth",0);ze(this,"debouncedResize");ze(this,"wrapperResizeObserver");ze(this,"contentResizeObserver");ze(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});ze(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});ze(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=e,t&&(this.debouncedResize=NA(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},hv=class{constructor(){ze(this,"events",{})}emit(r,...e){const t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?this.events[r].push(e):this.events[r]=[e],()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}};const LA=100/6,Dr={passive:!1};function ag(r,e){return r===1?LA:r===2?e:1}var OA=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){ze(this,"touchStart",{x:0,y:0});ze(this,"lastDelta",{x:0,y:0});ze(this,"window",{width:0,height:0});ze(this,"emitter",new hv);ze(this,"onTouchStart",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});ze(this,"onTouchMove",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});ze(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});ze(this,"onWheel",r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=ag(n,this.window.width),s=ag(n,this.window.height);e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})});ze(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Dr),this.element.addEventListener("touchstart",this.onTouchStart,Dr),this.element.addEventListener("touchmove",this.onTouchMove,Dr),this.element.addEventListener("touchend",this.onTouchEnd,Dr)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Dr),this.element.removeEventListener("touchstart",this.onTouchStart,Dr),this.element.removeEventListener("touchmove",this.onTouchMove,Dr),this.element.removeEventListener("touchend",this.onTouchEnd,Dr)}};const lg=r=>Math.min(1,1.001-2**(-10*r));var UA=class{constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f=h==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:S=!0,autoRaf:y=!1,anchors:x=!1,autoToggle:A=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:T=!1,naiveDimensions:C=T,stopInertiaOnNavigate:M=!1}={}){ze(this,"_isScrolling",!1);ze(this,"_isStopped",!1);ze(this,"_isLocked",!1);ze(this,"_preventNextNativeScrollEvent",!1);ze(this,"_resetVelocityTimeout",null);ze(this,"_rafId",null);ze(this,"_isDraggingSelection",!1);ze(this,"isTouching");ze(this,"isIos");ze(this,"time",0);ze(this,"userData",{});ze(this,"lastVelocity",0);ze(this,"velocity",0);ze(this,"direction",0);ze(this,"options");ze(this,"targetScroll");ze(this,"animatedScroll");ze(this,"animate",new DA);ze(this,"emitter",new hv);ze(this,"dimensions");ze(this,"virtualScroll");ze(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});ze(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});ze(this,"onTransitionEnd",r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});ze(this,"onClick",r=>{const e=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(i=>t.host===i.host&&t.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});ze(this,"onPointerDown",r=>{r.button===1&&this.reset()});ze(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(g=>g instanceof HTMLElement&&(typeof c=="function"&&c?.(g)||g.hasAttribute?.("data-lenis-prevent")||u==="vertical"&&g.hasAttribute?.("data-lenis-prevent-vertical")||u==="horizontal"&&g.hasAttribute?.("data-lenis-prevent-horizontal")||i&&g.hasAttribute?.("data-lenis-prevent-touch")||s&&g.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let h=t;this.options.gestureOrientation==="both"?h=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(h=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const f=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(h=Math.sign(h)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+h,{programmatic:!1,...f?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});ze(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});ze(this,"raf",r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=og,window.lenis||(window.lenis={}),window.lenis.version=og,h==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=lg:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:d,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:S,autoRaf:y,anchors:x,autoToggle:A,allowNestedScroll:E,naiveDimensions:C,stopInertiaOnNavigate:M},this.dimensions=new IA(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new OA(t,{touchMultiplier:d,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=r.targetTouches[0]??r.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],o=40,a=Math.hypot(t.clientX-i.left,t.clientY-i.top)<=o,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:h}={}){if((this.isStopped||this.isLocked)&&!u)return;let f=r,d=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let g=null;if(typeof f=="string"?(g=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),g||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof HTMLElement&&f?.nodeType&&(g=f),g){if(this.options.wrapper!==window){const x=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?x.left:x.top}const _=g.getBoundingClientRect(),m=getComputedStyle(g),p=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),S=getComputedStyle(this.rootElement),y=this.isHorizontal?Number.parseFloat(S.scrollPaddingLeft):Number.parseFloat(S.scrollPaddingTop);f=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(y)?0:y)}}if(typeof f=="number"){if(f+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const g=f-this.animatedScroll;g>this.limit/2?f-=this.limit:g<-this.limit/2&&(f+=this.limit)}}else f=uv(0,f,this.limit);if(f===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=lg:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(g,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),i&&(this.targetScroll=g),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,o,a,l,c,u,h,f,d,g;if(n-(i.time??0)>2e3){i.time=Date.now();const E=window.getComputedStyle(r);if(i.computedStyle=E,s=["auto","overlay","scroll"].includes(E.overflowX),o=["auto","overlay","scroll"].includes(E.overflowY),c=["auto"].includes(E.overscrollBehaviorX),u=["auto"].includes(E.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;h=r.scrollWidth,f=r.scrollHeight,d=r.clientWidth,g=r.clientHeight,a=h>d,l=f>g,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=h,i.scrollHeight=f,i.clientWidth=d,i.clientHeight=g,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,h=i.scrollWidth,f=i.scrollHeight,d=i.clientWidth,g=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const _=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let m,p,S,y,x,A;if(_==="horizontal")m=Math.round(r.scrollLeft),p=h-d,S=e,y=s,x=a,A=c;else if(_==="vertical")m=Math.round(r.scrollTop),p=f-g,S=t,y=o,x=l,A=u;else return!1;return!A&&(m>=p||m<=0)?!0:(S>0?m<p:m>0)&&y&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?PA(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};function kf(r,e){if(r.clock=e,r.masterTimeline?.progress(r.clock,!1),r.buildingLayer&&r.cameraCueKnots){const n=r.quality.low?r.cameraCueKnots.transvaal??.55:r.cameraCueKnots.transform??.3;r.clock>=n-.04&&(r.preloadBuildingSet("jodenbuurt",!0),r.preloadBuildingSet("core"),!r.quality.low&&!r.buildingPreloads.has("__all")&&(r.buildingPreloads.add("__all"),r.buildingLayer.preloadAll()))}}function FA(r,e){if(r.chasedClock===null){r.chasedClock=r.target,r.chaseVel=0,kf(r,r.chasedClock);return}let t=r.target-r.chasedClock;if(t===0&&r.chaseVel===0)return;const n=Math.sign(t)||1;Math.abs(t)>ms.MAX_LAG&&(r.chasedClock=r.target-n*ms.MAX_LAG,t=n*ms.MAX_LAG);const i=n*Math.min(Math.abs(t)/Math.max(e,1e-4),Math.sqrt(2*ms.AMAX*Math.abs(t)),ms.VMAX);r.chaseVel+=mt.clamp(i-r.chaseVel,-.25*e,ms.AMAX*e);let s=r.chasedClock+r.chaseVel*e;(r.target-s)*n<=0&&(s=r.target,r.chaseVel=0),r.chasedClock=s,s!==r.clock&&kf(r,s)}const zA={royalpalace:[4.8909,52.3731],canalring:[4.8905,52.3685],hinge:[4.8905,52.3685],quarter:[4.9041,52.3676],synagogues:[4.905,52.3672],community:[4.912486,52.357199],markets:[4.9018,52.37],transvaal:[4.9215,52.3537],merwede:[4.901847,52.34568],amstel:[4.904,52.3545],cityhall:[4.8967,52.369],aftermath:[4.916842,52.361]},cg={...zA},BA={royalpalace:[.43,.63],canalring:[.44,.6],hinge:[.44,.6],markets:[.59,.59],quarter:[.6,.58],synagogues:[.61,.58],transvaal:[.74,.44],community:[.58,.29],merwede:[.59,.33],cityhall:[.46,.6],amstel:[.6,.47]},vh=180,ji={radius:37.5,height:39,lookRadius:0,lookHeight:0,lookLead:0,rampFraction:.3,tiltAmount:0,tiltPeakDeg:315,amstelPull:.2},kA=.13,VA=46,HA=110,ug=[{subject:"mapcenter",elevation:90,distance:140,distanceOut:124,orbit:0,hold:3.5,travel:0,cue:"drew"},{subject:"mapcenter",elevation:90,distance:100,orbit:0,hold:0,travel:2.8,continue:!0,cue:"counted"},{subject:"cityhall",elevation:90,distance:68,orbit:0,hold:0,travel:2.8,continue:!0,cue:"stippen"},{subject:"cityhall",elevation:89,distance:42,orbit:0,hold:0,travel:2.8,continue:!0,cue:"eachdot"},{subject:"cityhall",elevation:88,distance:22,orbit:0,hold:2.5,travel:2.4,continue:!0,cue:"ink"},{subject:"transvaal",elevation:46,distance:50,orbit:45,hold:3,travel:4.5,continue:!0,cue:"transvaal"},{subject:"merwede",elevation:46,distance:56,orbit:0,hold:2.6,travel:4.5,continue:!0,cue:"rivieren"},{subject:"quarter",elevation:46,distance:48,orbit:0,hold:2.4,travel:8.5,lift:!0,cue:"fenced"},{subject:"quarter",elevation:46,distance:32,orbit:0,hold:5,travel:1.5,continue:!0,cue:"dismantled"},{subject:"quarter",elevation:46,distance:26,orbit:0,hold:5,travel:2,continue:!0,cue:"demolished"},{subject:"mapcenter",elevation:90,distance:126,orbit:0,hold:.6,travel:7.5,cue:"deported"},{subject:"mapcenter",elevation:90,distance:126,distanceOut:118,orbit:0,hold:4,travel:2,continue:!0,cue:"reckoning"},{subject:"mapcenter",elevation:90,distance:110,distanceOut:100,orbit:0,hold:4.5,travel:2.5,continue:!0,cue:"remained"},{subject:"mapcenter",elevation:90,distance:100,distanceOut:88,orbit:0,hold:6,travel:2.5,continue:!0,cue:"memorial"}],hg=[...ug.slice(0,5),{subject:"hinge",elevation:46,distance:54,orbit:0,hold:2.5,travel:7.5,continue:!0,cue:"transform"},{subject:"canalring",elevation:46,distance:54,orbit:135,hold:8.5,travel:1,continue:!0,cue:"weaponized"},{subject:"community",elevation:46,distance:58,orbit:180,hold:6.5,travel:8.5,continue:!0,cue:"collab"},{subject:"quarter",elevation:46,distance:40,orbit:25,hold:5,travel:3.5,continue:!0,cue:"jodenbuurt"},{subject:"synagogues",elevation:46,distance:11,orbit:20,hold:7,travel:5.5,continue:!0,cue:"synagogues"},{subject:"markets",elevation:46,distance:30,orbit:0,hold:5,travel:4.5,continue:!0,cue:"markets"},...ug.slice(5)],fg={deported:{subject:"aftermath",distance:58},reckoning:{subject:"aftermath",distance:58,distanceOut:55},remained:{subject:"aftermath",distance:51,distanceOut:46},memorial:{subject:"aftermath",distance:46,distanceOut:41}},Xd={drew:"drew",counted:"counted",stippen:"stippen",eachdot:"eachdot",ink:"ink",weaponized:"weaponized",collab:"collab",jodenbuurt:"jodenbuurt",synagogues:"synagogues",markets:"markets",transvaal:"transvaal",rivieren:"rivieren",fenced:"fenced",dismantled:"dismantled",demolished:"demolished",deported:"deported",reckoning:"reckoning",remained:"remained",memorial:"memorial"},GA=2800,WA=150,XA={jodenbuurt:1.5,synagogues:1.2,fenced:1.3},dg={center:50,upper:30,threeq:18,lower:62};function fv(r,e){const t=dg[r.getAttribute("data-anchor")]??dg.center,n=r.getBoundingClientRect().top+window.scrollY,i=r.querySelector(".copy"),s=i?i.getBoundingClientRect().top+window.scrollY-n:e*.72;return Math.max(0,n+s-t/100*e)}const YA={transform:4.5,wipe:3.5},jA={weaponized:64,collab:64,reckoning:40};let en=[],Do=!1,Hi=null;function pg(r,e){if(!r.captionMap)return null;const t=Math.max(1,$e.maxScroll(window));let n=0,i=1;for(let s=0;s<44;s+=1){const o=(n+i)/2;r.captionMap(o)<e?n=o:i=o}return(n+i)/2*t}function qA(r){en=[];const e=document.querySelector("#scroll-story"),t=window.innerHeight;if(!e||!(t>0))return;document.querySelectorAll("#scroll-story [data-copy]").forEach(o=>{const a=Xd[o.getAttribute("data-copy")],l=a?r.cameraCueKnots?.[a]:void 0;l!==void 0&&a!=="deported"&&en.push({scroll:fv(o,t),knot:l,cue:a})});const n=r.cameraCueKnots?.transform;if(n!==void 0){const o=pg(r,n);o!==null&&en.push({scroll:o,knot:n,cue:"transform"})}const i=r.cameraCueKnots?.demolished,s=r.cameraCueKnots?.deported;if(i!==void 0&&s!==void 0){const o=Math.max(1.5,(s-i)*100),a=Math.min(s-.002,i+(.6+Math.max(.9,o*.14))/100);let l=pg(r,a);const c=document.querySelector('#scroll-story [data-copy="demolished"] .copy');if(l!==null&&c){const u=c.getBoundingClientRect().bottom+window.scrollY+t*.02;l=Math.max(l,u)}if(l!==null){const u=Math.max(1,$e.maxScroll(window)),h=r.captionMap?mt.clamp(r.captionMap(mt.clamp(l/u,0,1)),0,1):a;en.push({scroll:l,knot:h,cue:"wipe"})}}if(mu){const o=document.querySelector("#finale");o&&en.push({scroll:Math.max(0,o.offsetTop-t*1.5),knot:1,cue:"finale"})}en.sort((o,a)=>o.scroll-a.scroll)}function ZA(r,e,t){const n=Math.max(1,$e.maxScroll(window)),i=r.captionMap?mt.clamp(r.captionMap(mt.clamp(e/n,0,1)),0,1):0,s=Math.abs(t.knot-i),o=jA[t.cue];return o?mt.clamp(s*o,1.2,12):mt.clamp(Math.max(1.6,s/ms.VMAX*1.1),1.2,4.5)}const dv=r=>r*r*r*(r*(r*6-15)+10);function ba(r,e){if(!Wd||!en.length)return;const t=en[mt.clamp(e,0,en.length-1)];if(Ri||!r.lenis){window.scrollTo(0,t.scroll),$e.update();return}Do=!0,r.lenis.scrollTo(t.scroll,{duration:YA[t.cue]??ZA(r,window.scrollY,t),easing:dv,lock:!1,onComplete:()=>{Do=!1}})}function Pc(r){const e=window.scrollY,t=window.innerHeight*.5;if(r>0){for(let n=0;n<en.length;n+=1)if(en[n].scroll>e+t)return n;return en.length-1}for(let n=en.length-1;n>=0;n-=1)if(en[n].scroll<e-t)return n;return 0}function $A(r){const e=document.querySelector("#info-overlay");return e&&!e.hidden?!0:!!r.target?.closest?.("input, textarea, select, button, a, [data-lenis-prevent]")}function JA(r){if(!Wd)return;addEventListener("keydown",n=>{if(n.defaultPrevented||$A(n))return;const i=n.key;let s=!0;i==="PageDown"||i==="ArrowDown"||i==="ArrowRight"||i===" "&&!n.shiftKey?ba(r,Pc(1)):i==="PageUp"||i==="ArrowUp"||i==="ArrowLeft"||i===" "&&n.shiftKey?ba(r,Pc(-1)):i==="End"?ba(r,en.length-1):i==="Home"?document.querySelector("#top-return")?.click():s=!1,s&&n.preventDefault()});const e={y:0,t:0,vy:0,flickDir:0,flickAt:0};addEventListener("touchstart",n=>{e.y=n.touches[0].clientY,e.t=performance.now(),e.vy=0},{passive:!0}),addEventListener("touchmove",n=>{const i=performance.now(),s=n.touches[0].clientY;e.vy=(s-e.y)/Math.max(1,i-e.t),e.y=s,e.t=i},{passive:!0}),addEventListener("touchend",()=>{Math.abs(e.vy)>.9&&(e.flickDir=e.vy<0?1:-1,e.flickAt=performance.now())},{passive:!0});let t=0;addEventListener("scroll",()=>{Do||(clearTimeout(t),t=setTimeout(()=>{if(e.flickDir&&performance.now()-e.flickAt<3e3){const o=e.flickDir;e.flickDir=0,ba(r,Pc(o));return}if(e.flickDir=0,!_A||!matchMedia("(pointer: coarse)").matches)return;const n=window.scrollY;let i=-1,s=1/0;for(let o=0;o<en.length;o+=1){const a=Math.abs(en[o].scroll-n);a<s&&(s=a,i=o)}i>=0&&s>2&&s<window.innerHeight*.22&&r.lenis&&(Do=!0,r.lenis.scrollTo(en[i].scroll,{duration:.9,easing:dv,lock:!1,onComplete:()=>{Do=!1}}))},180))},{passive:!0}),KA(r)}function KA(r){Hi=document.createElement("button"),Hi.className="beat-cue",Hi.type="button",Hi.setAttribute("aria-label","Next moment"),Hi.textContent="▾",document.body.appendChild(Hi),Hi.addEventListener("click",()=>{Hi.blur(),ba(r,Pc(1))});let e=0;const t=()=>{Hi.classList.remove("pulse"),clearTimeout(e),e=setTimeout(()=>{const n=en[en.length-1],i=n&&window.scrollY>n.scroll-window.innerHeight*.3;Hi.classList.toggle("pulse",!Do&&!i)},6e3)};addEventListener("scroll",t,{passive:!0}),t()}function pv(r){if(!r.cameraCueKnots)return;const e=document.querySelector("#scroll-story");if(!e)return;const t=[...e.children];if(!t.length)return;const n=t.map(i=>{const s=Xd[i.getAttribute("data-copy")];return s&&r.cameraCueKnots[s]!==void 0?r.cameraCueKnots[s]:null});n[0]===null&&(n[0]=0),n[n.length-1]===null&&(n[n.length-1]=1);for(let i=0;i<n.length;i+=1){if(n[i]!==null)continue;let s=i-1;for(;s>=0&&n[s]===null;)s-=1;let o=i+1;for(;o<n.length&&n[o]===null;)o+=1;const a=s>=0?n[s]:0,l=o<n.length?n[o]:1;n[i]=a+(l-a)*((i-s)/(o-s))}for(let i=0;i<t.length;i+=1){const s=i===0?0:(n[i-1]+n[i])/2,o=i===t.length-1?1:(n[i]+n[i+1])/2,a=XA[t[i].getAttribute("data-copy")]??1,l=Math.max(WA,(o-s)*GA*a);t[i].style.minHeight=`${l.toFixed(1)}vh`}}function mv(r){if(r.captionMap=null,!r.cameraCueKnots)return;const e=document.querySelector("#scroll-story"),t=window.innerHeight,n=e?e.offsetHeight-t:0;if(!(n>0)||!(t>0))return;const i=[0],s=[0];document.querySelectorAll("#scroll-story [data-copy]").forEach(o=>{const a=Xd[o.getAttribute("data-copy")],l=a?r.cameraCueKnots[a]:void 0;if(l===void 0)return;const c=fv(o,t),u=mt.clamp(c/n,0,1);u>i[i.length-1]+.001&&l>s[s.length-1]+1e-4&&(i.push(u),s.push(l))}),i[i.length-1]<1-.001&&(i.push(1),s.push(1)),i.length>=3&&(r.captionMap=ps(i,s)),qA(r)}const QA=.12,Yd=St.get("smooth")!=="0";let Ga=0,Wa=0,mg=!1;function eC(r){if($e.config({ignoreMobileResize:!0}),Ri||(r.lenis=new UA({duration:1.35,smoothWheel:!0,wheelMultiplier:.78,touchMultiplier:1,syncTouch:!1}),r.lenis.on("scroll",$e.update),Xo.ticker.add(e=>{if(!r.PROF){r.lenis.raf(e*1e3);return}const t=performance.now();r.lenis.raf(e*1e3);const n=performance.now()-t;r.prof.tick+=n,r.prof.tickMax=Math.max(r.prof.tickMax,n)}),Xo.ticker.lagSmoothing(0)),r.quality.low||r.idleSleepEnabled)for(const e of["wheel","touchstart","touchmove","pointerdown","keydown"])addEventListener(e,()=>{r.governor.lastActivityAt=performance.now(),r.requestRender?.()},{passive:!0});pv(r),$e.create({trigger:"#scroll-story",start:"top top",end:"bottom bottom",onUpdate:({progress:e})=>gg(r,e)}),mu&&$e.create({trigger:"#finale",start:()=>Math.max(0,(document.querySelector("#finale")?.offsetTop||0)-window.innerHeight*1.5),end:"bottom bottom",onUpdate:({progress:e})=>{r.requestRender?.(),Wa=mt.clamp(e,0,1),(!r.quality?.low||Ri||!Yd)&&(r.finaleProgress=Wa)}}),mv(r),gg(r,$e.maxScroll(window)>0?scrollY/$e.maxScroll(window):0),JA(r)}function gg(r,e){Ga=mt.clamp(e,0,1),r.requestRender?.(),(!r.quality?.low||Ri||!Yd)&&Vf(r,Ga)}function Vf(r,e){r.scrollProgress=mt.clamp(e,0,1),r.target=r.captionMap?mt.clamp(r.captionMap(r.scrollProgress),0,1):r.cameraTrack?r.cameraTrack.easeProgress(r.scrollProgress):r.scrollProgress,(!Gd||Ri)&&kf(r,r.target),document.querySelector(".scroll-cue").style.opacity=String(1-ni(.015,.065,r.scrollProgress)),St.get("debug")==="1"&&(document.querySelector(".quality-note").style.opacity="1"),r.fallbackActive&&r.fallbackVideo?.duration&&(r.fallbackVideo.currentTime=Math.min(r.fallbackVideo.duration-.05,r.fallbackVideo.duration*r.scrollProgress))}function tC(r,e){if(r.quality.low&&!Ri&&Yd){mg||(mg=!0,Vf(r,Ga),r.finaleProgress=Wa);const t=1-Math.exp(-e/QA),n=Ga-r.scrollProgress;n!==0&&Vf(r,Math.abs(n)<2e-5?Ga:r.scrollProgress+n*t);const i=Wa-r.finaleProgress;i!==0&&(r.finaleProgress=Math.abs(i)<2e-4?Wa:r.finaleProgress+i*t)}}let _g=innerWidth;function nC(r){r.quality?.mobile&&innerWidth===_g||(_g=innerWidth,pv(r),$e.refresh(),mv(r))}function iC(r){const e=document.querySelector("#info-toggle"),t=document.querySelector("#info-overlay"),n=document.querySelector("#info-close");if(!e||!t)return;const i=s=>{t.hidden=!s,e.setAttribute("aria-expanded",String(s)),s?(r.lenis?.stop(),n?.focus()):(r.lenis?.start(),e.focus())};e.addEventListener("click",()=>i(t.hidden)),n?.addEventListener("click",()=>i(!1)),t.addEventListener("click",s=>{s.target===t&&i(!1)}),addEventListener("keydown",s=>{s.key==="Escape"&&!t.hidden&&i(!1)})}function rC(r){const e=document.querySelector("#top-return");if(!e)return;const t=()=>e.classList.toggle("visible",window.scrollY>window.innerHeight*2);addEventListener("scroll",t,{passive:!0}),t();const n=()=>{r.lenis?r.lenis.scrollTo(0,{immediate:!0,force:!0}):window.scrollTo(0,0),$e.update(),e.classList.remove("visible"),r.chasedClock=null,r.chaseVel=0};e.addEventListener("click",()=>{if(e.blur(),Ri){n();return}r.topReturnVeil.active||(r.topReturnVeil.active=!0,Xo.timeline({onComplete:()=>{r.topReturnVeil.active=!1,r.topReturnVeil.value=0}}).to(r.topReturnVeil,{value:1,duration:.45,ease:"power2.in"}).add(n,"+=0.05").to(r.topReturnVeil,{value:0,duration:.7,ease:"power2.out"},"+=0.15"))})}const Lr=St.get("prof")==="1",Mt={smooth:0,state:0,render:0,tick:0,smoothMax:0,stateMax:0,renderMax:0,tickMax:0,longCount:0,longMax:0,frames:0,gapMax:0,reset(){this.smooth=this.state=this.render=this.tick=0,this.smoothMax=this.stateMax=this.renderMax=this.tickMax=0,this.longCount=0,this.longMax=0,this.frames=0,this.gapMax=0}};if(Lr&&"PerformanceObserver"in window)try{new PerformanceObserver(r=>{for(const e of r.getEntries())Mt.longCount+=1,Mt.longMax=Math.max(Mt.longMax,e.duration)}).observe({entryTypes:["longtask"]})}catch{}let da=null;const Gi={frames:0,worst:0,lastReport:0};function sC(r,e,t,n){if(da||(da=document.createElement("div"),da.style.cssText="position:fixed;top:8px;left:8px;z-index:99;background:rgba(0,0,0,.65);color:#9f9;font:11px/1.45 monospace;padding:6px 8px;pointer-events:none;white-space:pre;",document.body.appendChild(da)),Gi.frames+=1,Gi.worst=Math.max(Gi.worst,n),t-Gi.lastReport<1e3)return;let s=`fps ${(Gi.frames*1e3/(t-Gi.lastReport)).toFixed(0)}  worst ${Gi.worst.toFixed(0)}ms
tris ${(r.info.render.triangles/1e6).toFixed(2)}M  calls ${r.info.render.calls}
pr ${r.getPixelRatio().toFixed(2)}  tier ${e.tier}`;if(Lr&&Mt.frames>0){const o=a=>(a/Mt.frames).toFixed(1);s+=`
smo ${o(Mt.smooth)}/${Mt.smoothMax.toFixed(0)}  sta ${o(Mt.state)}/${Mt.stateMax.toFixed(0)}
rnd ${o(Mt.render)}/${Mt.renderMax.toFixed(0)}  tick ${o(Mt.tick)}/${Mt.tickMax.toFixed(0)}
long ${Mt.longCount}x max ${Mt.longMax.toFixed(0)}ms  gap ${Mt.gapMax.toFixed(0)}`,Mt.reset()}da.textContent=s,Gi.lastReport=t,Gi.frames=0,Gi.worst=0}const Jc=St.get("governor")!=="0",oC=Jc&&St.get("ladder")!=="0",_t={IDLE_AFTER_MS:400,lastActivityAt:performance.now(),lastProgressKey:NaN,ema:16,hot:0,cool:0,ladder:[1/0,1.1,1],step:0};function vg(r){const e=Math.min(r.quality.pixelRatio,_t.ladder[_t.step]);r.renderer.setPixelRatio(e),r.soulPoints?.material?.uniforms?.uPixelRatio&&(r.soulPoints.material.uniforms.uPixelRatio.value=e),r.finaleMaterial?.uniforms?.uPixelRatio&&(r.finaleMaterial.uniforms.uPixelRatio.value=e),St.get("debug")==="1"&&console.info(`[governor] pixelRatio -> ${e.toFixed(2)}`)}function aC(r,e){const t=r.scrollProgress*7+r.finaleProgress*13+r.topReturnVeil.value*3+r.clock*5;return t!==_t.lastProgressKey&&(_t.lastProgressKey=t,_t.lastActivityAt=e),e-_t.lastActivityAt>_t.IDLE_AFTER_MS}function lC(r,e,t){oC&&(t-_t.lastActivityAt>_t.IDLE_AFTER_MS||(_t.ema=_t.ema*.9+e*.1,_t.ema>22?(_t.hot+=1,_t.cool=0):_t.ema<14?(_t.cool+=1,_t.hot=0):(_t.hot=0,_t.cool=0),_t.hot>=60&&_t.step<_t.ladder.length-1?(_t.step+=1,_t.hot=0,vg(r)):_t.cool>=300&&_t.step>0&&(_t.step-=1,_t.cool=0,vg(r))))}function cC(r){const e=new ty;e.background=new et("#030303"),e.fog=new sd("#030303",.0085);const t=new zn(39,innerWidth/innerHeight,.1,900);t.position.set(0,120,.01),t.up.set(0,0,-1);const n=new ow({antialias:!1,alpha:!1,powerPreference:"high-performance"});n.setSize(innerWidth,innerHeight),n.setPixelRatio(r.pixelRatio),n.outputColorSpace=Mn,n.toneMapping=Jg,n.toneMappingExposure=.84,n.shadowMap.enabled=!r.low,n.shadowMap.type=Zg,document.querySelector("#scene").appendChild(n.domElement),e.add(new cM("#31333b","#030303",.4));const i=new dM("#cdc6b6",1);return i.position.set(-24,42,18),i.castShadow=!0,i.shadow.mapSize.set(2048,2048),i.shadow.camera.near=1,i.shadow.camera.far=200,i.shadow.camera.left=-30,i.shadow.camera.right=30,i.shadow.camera.top=30,i.shadow.camera.bottom=-30,i.shadow.bias=-4e-4,i.shadow.normalBias=.6,e.add(i),{scene:e,camera:t,renderer:n}}function uC(r,e){if(St.get("nopause")==="1"||!Jc)return;const t=()=>{r.renderPaused=!0},n=()=>{if(!r.renderPaused)return;r.renderPaused=!1;const i=performance.now();r.lastFrame=i,r.lastRenderedAt=i,r.governor.lastActivityAt=i,r.idleSleepEnabled?r.requestRender?.():requestAnimationFrame(e)};document.addEventListener("visibilitychange",()=>document.hidden?t():n()),"IntersectionObserver"in window&&r.renderer?.domElement&&new IntersectionObserver(s=>{const o=s[s.length-1];o&&(o.intersectionRatio===0?t():n())},{threshold:0,rootMargin:"200px"}).observe(r.renderer.domElement)}function hC(r){r.camera.aspect=innerWidth/innerHeight,r.camera.updateProjectionMatrix(),r.renderer.setSize(innerWidth,innerHeight)}const xh=new U(0,0,-1),Wi=new U,xg=new U,pc=new U,ho=new U,pa=new U;function fC(r,e,t,n){if(!t)return;const i=mt.clamp(r,0,1);Wi.set(t.tx(i),t.ty(i),t.tz(i));const s=t.az(i),o=t.el(i),a=t.di(i),l=s*Math.PI/180,c=o*Math.PI/180,u=Math.cos(c);xg.set(Math.sin(l)*u,Math.sin(c),-Math.cos(l)*u),e.position.copy(Wi).addScaledVector(xg,a);const h=t.ring;if(h){const d=_h(h.enter,h.enter+h.ramp,i)*(1-_h(h.exit-h.ramp,h.exit,i));if(d>1e-4){const g=Math.sin(l),_=-Math.cos(l),m=ji.lookLead*Math.PI/180,p=Math.sin(l+m),S=-Math.cos(l+m),y=mt.lerp,x=Math.max(0,Math.cos(l-ji.tiltPeakDeg*Math.PI/180)),A=ji.lookRadius-ji.tiltAmount*x;let E=h.center.x+A*p,T=ji.lookHeight,C=h.center.z+A*S;const M=h.amstel.x-h.center.x,v=h.amstel.z-h.center.z,D=Math.hypot(M,v)||1,L=Math.max(0,(-g*M-_*v)/D),F=_h(0,1,L)*ji.amstelPull;E=y(E,h.amstel.x,F),T=y(T,h.amstel.y,F),C=y(C,h.amstel.z,F),e.position.x=y(e.position.x,h.center.x+ji.radius*g,d),e.position.y=y(e.position.y,ji.height,d),e.position.z=y(e.position.z,h.center.z+ji.radius*_,d),Wi.x=y(Wi.x,E,d),Wi.y=y(Wi.y,T,d),Wi.z=y(Wi.z,C,d)}}pc.subVectors(Wi,e.position).normalize();const f=ni(56,90,o);if(ho.set(0,1,0).lerp(xh,f),ho.lengthSq()<1e-6&&ho.copy(xh),pa.crossVectors(pc,ho),pa.lengthSq()<1e-6&&pa.crossVectors(pc,xh),pa.normalize(),ho.crossVectors(pa,pc).normalize(),e.up.copy(ho),e.lookAt(Wi),ng!==0&&n){const d=ni(n.ink??.08,n.transform??.2,i),g=ng*(1-d);Math.abs(g)>1e-5&&e.rotateZ(g)}}const yg=.1,Mg=.85;function dC(r,e=.45,t=.3,n=.35){const i=1-e/2-t/2;let s;if(r<=e){const o=r/e;s=e*(o*o*o-.5*o*o*o*o)}else if(r<=1-t)s=e/2+(r-e);else{const o=(r-(1-t))/t;s=e/2+(1-t-e)+t*(o-o*o*o+.5*o*o*o*o)}return(n*r+(1-n)*s)/(n+(1-n)*i)}const gv=St.get("souls")!=="0",pC=new he;function mC(r){const{soulPoints:e,mapMaterial:t,basemapMaterial:n,groundPatches:i,mobileGhostLayer:s,footprintLodLayer:o,camera:a,cityMaterial:l,ghostMaterial:c,cityGroup:u,buildingLayer:h,walkerLayer:f,neighborhoodIlluminations:d,focusGlow:g,barricadeMeshes:_,barricadeHead:m,cameraTrack:p,cameraCueKnots:S,finaleMaterial:y,finalePoints:x,finaleMemorialEl:A,infoToggleEl:E,finaleScrollMax:T,finaleProgress:C,topReturnVeil:M,state:v}=r,D=r.clock;if(!e)return;t.uniforms.uDesaturate.value=v.desaturate,t.uniforms.uOpacity.value=v.mapOpacity,document.body.classList.toggle("on-paper",v.mapOpacity>.45&&v.basemapOpacity<.55),n.opacity=v.basemapOpacity,i?.update(a.position,v.basemapOpacity),s?.update({basemapOpacity:v.basemapOpacity,demolishedOpacity:v.demolishedOpacity,demolishedWarmth:v.demolishedWarmth,demolishedDissolve:v.demolishedDissolve});const L=p?pC.set(p.tx(D),p.tz(D)):null,F=o?.update({cameraHeight:a?.position.y??null,lodCenter:L,buildingOpacity:v.buildingsOpacity,demolishedOpacity:v.demolishedOpacity,demolishedWarmth:v.demolishedWarmth,demolishedDissolve:v.demolishedDissolve})??null;if(er==="legacy"&&l&&c&&u?(l.opacity=v.cityOpacity,c.opacity=v.cityOpacity*.28,u.scale.y=Math.max(.001,v.buildings)):h?.update({opacity:v.buildingsOpacity,rise:v.buildings*ig,synagogueGlow:v.synagogueGlow,demolishedOpacity:v.demolishedOpacity,demolishedWarmth:v.demolishedWarmth,demolishedDissolve:v.demolishedDissolve,cameraHeight:a?.position.y??null,lodCenter:L,footprintLodBuildingOpacity:F?.buildingOpacity??1}),e.material.uniforms.uRise.value=v.rise,e.material.uniforms.uBuildings.value=er==="tiles"?v.buildings*ig:0,e.material.uniforms.uOpacity.value=v.soulOpacity,e.material.uniforms.uPopulationFade.value=v.populationFade,e.material.uniforms.uIsolate.value=v.isolate,e.material.uniforms.uCloseness.value=v.soulCloseness,e.material.uniforms.uAuraTint.value.set(v.jodenbuurtIllumination,v.transvaalbuurtIllumination,v.rivierenbuurtIllumination,v.marketsIllumination),e.material.depthTest=v.soulCloseness>.65,f&&(f.update(v.crowdLife),e.material.uniforms.uWalkerFade.value=v.crowdLife),Z1(d,{jodenbuurt:v.jodenbuurtIllumination,transvaalbuurt:v.transvaalbuurtIllumination,rivierenbuurt:v.rivierenbuurtIllumination,markets:v.marketsIllumination}),St.get("debug")==="1"){const z=document.querySelector("#scene canvas");z&&(z.dataset.marketsIllumination=v.marketsIllumination.toFixed(3),z.dataset.marketsLayers=String(d.markets?.length??-1))}if(g){const z=ni(.52,.92,v.isolate);g.material.opacity=z*.9*v.soulOpacity,g.scale.setScalar(2.2)}if(_.length){for(const Q of _)Q.material.uniforms.uProgress.value=v.barricadeProgress,Q.material.uniforms.uOpacity.value=v.barricadeOpacity*(Q.renderOrder===8?1:.18);const z=wA(v.barricadeProgress);z&&m&&m.position.copy(z),m&&(m.material.opacity=v.barricadeOpacity*(1-ni(.82,1,v.barricadeProgress)))}fC(D,a,p,S),h?.updateCameraPosition(a.position,D,S?.markets);const k=mt.lerp(39,34,ni(.18,.72,D));a.fov=mt.lerp(k,42,ni(.8,.95,D)),a.updateProjectionMatrix();const Y=ni(0,.055,C);if(y){if(x.visible=gv&&C>5e-4,x.visible){const z=y.uniforms;z.uFp.value=C;const Q=mt.clamp((C-yg)/(Mg-yg),0,1);z.uScroll.value=T*dC(Q),z.uOpacity.value=Y*(1-ni(Mg,.92,C))}if(Y>0){const z=1-Y;e.material.uniforms.uOpacity.value*=z,t.uniforms.uOpacity.value*=z,n.opacity*=z,g&&(g.material.opacity*=z)}if(A){const z=ni(.88,.915,C)*(1-ni(.99,1,C));A.style.opacity=z.toFixed(3),E?.classList.toggle("unfolded",C>=.915)}}const V=v.fade*(1-Y),W=M.active?Math.max(V,M.value):V;document.querySelector("#veil").style.opacity=W.toFixed(3)}function gC({quality:r,subjectWorld:e}){const t=[],n={};let s=-1,o=-1,a=vh;const l=T=>vh+360*Math.round((T-vh)/360);hg.forEach((T,C)=>{const M=r?.low&&T.cue&&fg[T.cue]?{...T,...fg[T.cue]}:T,v=e(M.subject),D=C===0?0:Math.max(.05,M.travel??1);if(M.continue){a+=M.orbit??0,t.push({x:v.x,y:v.y,z:v.z,az:a,el:M.elevationOut??M.elevation,di:M.distanceOut??M.distance,dur:D+Math.max(0,M.hold??0)}),M.cue&&(n[M.cue]=[t.length-1,t.length-1]),M.subject==="canalring"&&(s<0&&(s=t.length-1),o=t.length-1);return}let L;if(M.lift&&C>0){const V=e(hg[C-1].subject).clone().lerp(v,.5),W=l(a);t.push({x:V.x,y:0,z:V.z,az:W+(a-W)*.45,el:VA,di:HA,dur:D*.5}),L=W,t.push({x:v.x,y:v.y,z:v.z,az:L,el:M.elevation,di:M.distance,dur:D*.5})}else L=l(a),t.push({x:v.x,y:v.y,z:v.z,az:L,el:M.elevation,di:M.distance,dur:D});const F=t.length-1;a=L,!M.through&&((M.orbit??0)!==0||(M.hold??0)>.12||M.elevationOut!==void 0||M.distanceOut!==void 0)?(a=L+(M.orbit??0),t.push({x:v.x,y:v.y,z:v.z,az:a,el:M.elevationOut??M.elevation,di:M.distanceOut??M.distance,dur:Math.max(.05,M.hold??1)}),M.cue&&(n[M.cue]=[F,t.length-1])):M.cue&&(n[M.cue]=[F,F])});const c=t.length,u=T=>{const C=new Array(c);let M=0;for(let D=0;D<c;D+=1)M+=T[D],C[D]=M;const v=M||1;for(let D=0;D<c;D+=1)C[D]/=v;return C};let h=u(t.map(T=>T.dur));if(gA){const T=F=>({tx:ps(F,t.map(k=>k.x)),tz:ps(F,t.map(k=>k.z)),az:ps(F,t.map(k=>k.az)),el:ps(F,t.map(k=>k.el)),di:ps(F,t.map(k=>k.di))}),C=(F,k)=>{const Y=F.az(k)*Math.PI/180,V=F.el(k)*Math.PI/180,W=Math.cos(V),z=F.di(k),Q=F.tx(k),N=F.tz(k);return{px:Q+Math.sin(Y)*W*z,py:Math.sin(V)*z,pz:N-Math.cos(Y)*W*z,lx:Q,lz:N}},M=(F,k)=>{const Y=new Array(c).fill(0);for(let V=1;V<c;V+=1){const W=k[V-1],z=k[V];if(z<=W)continue;const Q=Math.max(4,Math.round(uo.SAMPLES*(z-W)));let N=C(F,W);for(let ce=1;ce<=Q;ce+=1){const Pe=C(F,W+(z-W)*ce/Q);Y[V]+=Math.hypot(Pe.px-N.px,Pe.py-N.py,Pe.pz-N.pz)+.5*Math.hypot(Pe.lx-N.lx,Pe.lz-N.lz),N=Pe}}return Y},v=t.map(F=>F.dur),D=r?.low?uo.FLOOR_LOW:uo.FLOOR;let L=v.slice();for(let F=0;F<uo.PASSES;F+=1){const k=u(L),Y=T(k),V=M(Y,k),W=Math.max(...V),z=[];for(let Re=1;Re<c;Re+=1)V[Re]>.01*W&&z.push({v:V[Re]/L[Re],arc:V[Re]});z.sort((Re,q)=>Re.v-q.v);const Q=z.reduce((Re,q)=>Re+q.arc,0);let N=z.length?z[z.length-1].v:1,ce=0;for(const Re of z)if(ce+=Re.arc,ce>=Q/2){N=Re.v;break}const Pe=L.slice();for(let Re=1;Re<c;Re+=1){const q=V[Re]/L[Re],re=Math.min(Math.max(q,D*N),uo.CAP*N),_e=re>0?V[Re]/re:0;Pe[Re]=Math.max(_e,uo.DWELL_KEEP*v[Re],.05)}L=Pe}h=u(L)}const f=T=>ps(h,t.map(C=>C[T])),d={tx:f("x"),ty:f("y"),tz:f("z"),az:f("az"),el:f("el"),di:f("di")},g=512,_=mt.clamp(kA,.001,.49),m=T=>T<_?ni(0,_,T):T>1-_?ni(1,1-_,T):1,p=new Float64Array(g+1);for(let T=1;T<=g;T+=1){const C=(T-1)/g,M=T/g;p[T]=p[T-1]+.5*(m(C)+m(M))/g}const S=p[g]||1,y=T=>{const C=mt.clamp(T,0,1)*g,M=Math.min(g-1,Math.floor(C));return(p[M]+(p[M+1]-p[M])*(C-M))/S},x=T=>{let C=0,M=1;for(let v=0;v<32;v+=1){const D=(C+M)/2;y(D)<T?C=D:M=D}return(C+M)/2},A={},E={};for(const[T,[C,M]]of Object.entries(n)){const v=(h[C]+h[M])/2;E[T]=v,A[T]=x(v)}if(s>=0&&o>s){const T=h[s],C=h[o];d.ring={enter:T,exit:C,ramp:ji.rampFraction*(C-T),center:e("canalring"),amstel:e("amstel")}}return d.easeProgress=y,St.has("debug")&&console.table(A),{track:d,cameraCues:A,cameraCueKnots:E}}Xo.registerPlugin($e);const Hf=84,_C=89.25;let Li=Hf,Oi=_C;const vC="amsterdam-boundaries-3857-v1",Gf={desaturate:0,mapOpacity:1,basemapOpacity:0,cityOpacity:0,buildings:0,buildingsOpacity:0,demolishedOpacity:0,demolishedWarmth:0,demolishedDissolve:0,rise:0,soulOpacity:1,populationFade:0,isolate:0,cameraT:0,fade:0,synagogueGlow:0,soulCloseness:0,crowdLife:0,barricadeProgress:0,barricadeOpacity:0,jodenbuurtIllumination:0,transvaalbuurtIllumination:0,rivierenbuurtIllumination:0,marketsIllumination:0};let Qn,Kc,Jt,fr,Sg,Tg,bg,Eg,Ui=null,gs=null;const Wf=new Set;let wg,Ag,Qc,Cg=null,Rg=null,Pg,Dg,Ng,Ig;const _v={active:!1,value:0};let Lg=0,Og=1,Ug=[],Fg,zg={},Bg=null,kg,Vg,xt,vv,Hg=null,yh=null,Gg=null,Xf=0,dn=null,Wg=0,fl=performance.now(),No=performance.now(),eu=!1,Xa=!1,Mh=0,Yf=0,jf=!1,Xg=0,xv=!1,Ea=null,dl=!1;function tu(){!yi||!xv||eu||jf||!Jt||(jf=!0,requestAnimationFrame(nu))}function Dc(){if(_t.lastActivityAt=performance.now(),!!yi){if(Xa){Yf+=1;const r=performance.now();fl=r,No=r}Xa=!1,tu()}}function xC(){const r=Jt?.domElement,e=t=>(r&&(r.dataset.idleSleepBlocker=t),!1);return!yi||dl?e("fallback"):_v.active?e("top-return"):Gf.crowdLife>.02?e("walkers"):Gd&&!Ri&&(Math.abs(qf-Xf)>1e-7||Math.abs(ai?.chaseVel||0)>1e-7)?e("camera"):Ui?.isSettled&&!Ui.isSettled()?e("buildings"):Qc?.isSettled&&!Qc.isSettled()?e("ground-patches"):(r&&(r.dataset.idleSleepBlocker=""),!0)}async function yC(){xt=xA(),xt.low||(_t.ladder=[1/0,1.4,1.25,1.1]),ai={chasedClock:null,chaseVel:0,quality:xt,buildingPreloads:Wf,preloadBuildingSet:SC,idleSleepEnabled:yi,requestRender:Dc,topReturnVeil:_v,get target(){return qf},set target(m){qf=m},get clock(){return Xf},set clock(m){Xf=m},get masterTimeline(){return kg},get buildingLayer(){return Ui},get cameraCueKnots(){return yh},get lenis(){return Vg},set lenis(m){Vg=m},get captionMap(){return Gg},set captionMap(m){Gg=m},get scrollProgress(){return Wg},set scrollProgress(m){Wg=m},get finaleProgress(){return Lg},set finaleProgress(m){Lg=m},get cameraTrack(){return Hg},get fallbackActive(){return dl},get fallbackVideo(){return Ea},get renderer(){return Jt},get soulPoints(){return fr},get finaleMaterial(){return Dg},get camera(){return Kc},get renderPaused(){return eu},set renderPaused(m){eu=m},set lastFrame(m){fl=m},set lastRenderedAt(m){No=m},state:Gf,get mapMaterial(){return wg},get basemapMaterial(){return Ag},get groundPatches(){return Qc},get mobileGhostLayer(){return Cg},get footprintLodLayer(){return Rg},get cityMaterial(){return bg},get ghostMaterial(){return Eg},get cityGroup(){return Tg},get walkerLayer(){return Bg},get neighborhoodIlluminations(){return zg},get focusGlow(){return Sg},get barricadeMeshes(){return Ug},get barricadeHead(){return Fg},get finalePoints(){return Pg},get finaleMemorialEl(){return Ng},get infoToggleEl(){return Ig},get finaleScrollMax(){return Og},governor:_t,prof:Mt,PROF:Lr},iC(ai),rC(ai),{scene:Qn,camera:Kc,renderer:Jt}=cC(xt);const r=er==="legacy"?Promise.all([uA(),es(()=>import("./city_legacy-Ecqh5Vqh.js"),__vite__mapDeps([0,1]),import.meta.url)]).then(([m,p])=>({footprints:m,manifest:null,distanceLod:null,module:p})):er==="tiles"?es(()=>import("./buildings-CMRsSAra.js"),__vite__mapDeps([2,1]),import.meta.url).then(async m=>{const[p,S]=await Promise.all([m.loadBuildingManifest("./data/buildings/manifest.json"),sg==="distance"?fetch("./data/buildings/distance-lod.json").then(y=>{if(!y.ok)throw new Error(`Distance-LoD request failed (${y.status}).`);return y.json()}):Promise.resolve(null),m.prepareMeshoptDecoder()]);return{footprints:null,manifest:p,distanceLod:S,module:m}}).catch(m=>(console.warn("Tiled buildings unavailable; the memorial will continue without building geometry.",m),{footprints:null,manifest:null,distanceLod:null,module:null})):Promise.resolve({footprints:null,manifest:null,distanceLod:null,module:null}),[e,t,n,i,s,o]=await Promise.all([sA(xt.unit),lA(Jt),cA(),r,hA(),j1()]);e.unit!==xt.unit&&(xt.unit=e.unit,xt.pointSize=lv(xt.unit,xt.mobile));const a=e.scene;if(vv=a,dn=n?.features?.length&&a.params?.coordinate_frame===vC?yo(n):null,dn){const m=(dn.maxX-dn.minX)/(dn.maxY-dn.minY);Li=Hf,Oi=Hf/m}const l=await fA(n,Jt,xt).catch(m=>(console.warn("CARTO basemap unavailable; using the dark ground fallback.",m),null)),c=mA({scene:Qn,worldW:Li,worldH:Oi,mapTexture:t,basemapTexture:l});if(wg=c.mapMaterial,Ag=c.basemapMaterial,vA&&!xt.low){const{createFootprintLodLayer:m}=await es(async()=>{const{createFootprintLodLayer:y}=await import("./footprint_lod-CBaCktgL.js");return{createFootprintLodLayer:y}},__vite__mapDeps([3,2,1]),import.meta.url),p=Xi("canalring"),S=Xi("amstel");Rg=await m({scene:Qn,renderer:Jt,worldW:Li,worldH:Oi,distanceLod:i.distanceLod,wipeDirection:new he(S.x-p.x,S.z-p.z)}).catch(y=>(console.warn("High-tier footprint LoD prototype unavailable.",y),null))}if(xt.low){const{createMobileGhostLayer:m}=await es(async()=>{const{createMobileGhostLayer:y}=await import("./mobile_footprints-BfLjurEh.js");return{createMobileGhostLayer:y}},[],import.meta.url),p=Xi("canalring"),S=Xi("amstel");Cg=await m({scene:Qn,renderer:Jt,worldW:Li,worldH:Oi,wipeDirection:new he(S.x-p.x,S.z-p.z)}).catch(y=>(console.warn("Mobile ghost footprints unavailable.",y),null))}let u=null;if(er==="legacy"){const m=i.module.buildCity({scene:Qn,renderer:Jt,geojson:i.footprints,boundaries:n,normalizeGeoPoint:Yg});u=m.heightField,bg=m.cityMaterial,Eg=m.ghostMaterial,Tg=m.cityGroup}else er==="tiles"&&i.manifest&&(gs=i.manifest,n?._sha256===gs.boundarySha256&&Math.abs(gs.worldWidth-Li)<1e-6&&Math.abs(gs.worldDepth-Oi)<1e-6?Ui=i.module.createBuildingLayer({scene:Qn,manifest:gs,quality:xt,reducedMotion:Ri,distanceLod:xt.low?null:i.distanceLod,streamMode:xt.low?"all":sg,onActivity:Dc}):console.warn("Tiled buildings do not match the active boundary frame; building geometry is disabled."));const h=yA({data:a,heightField:u,boundaries:n,scene:Qn,quality:xt,worldX:Ya,worldZ:ja,footprintHeightAt:i.module?.footprintHeightAt||(()=>0)});fr=h.soulPoints,Sg=h.focusGlow,!gv&&fr&&(fr.visible=!1);const f=bA({scene:Qn,geojson:s,boundaries:n,normalizeGeoPoint:Yg,makeGlowTexture:Bf});if(f&&(Ug=f.barricadeMeshes,Fg=f.barricadeHead),zg=q1(o,yo(n),Li,Oi,Qn,xt),dn&&!xt.low){const{createGroundPatches:m}=await es(async()=>{const{createGroundPatches:p}=await import("./ground_patches-hwQ9-77X.js");return{createGroundPatches:p}},[],import.meta.url);Qc=m({scene:Qn,renderer:Jt,geoFrame:dn,worldW:Li,worldH:Oi,quality:xt,onActivity:Dc,patches:[{name:"jodenbuurt",center:Xi("quarter"),radius:10},{name:"transvaal",center:Xi("transvaal"),radius:8},{name:"merwede",center:Xi("merwede"),radius:8}]})}if(fr){const m=J1(o,yo(n),Li,Oi);if(m){const p=fr.geometry.getAttribute("position"),S=fr.geometry.getAttribute("aAura");for(let y=0;y<p.count;y+=1){const[x,A,E,T]=m(p.getX(y),p.getZ(y));S.setXYZW(y,x,A,E,T)}S.needsUpdate=!0}}if(Ui&&!xt.low){const m=await fetch("./data/reconstruction/demolished.geojson").then(M=>M.ok?M.json():null).catch(()=>null),p=.25,S=100,x=(await fetch("./data/districts_population.geojson").then(M=>M.ok?M.json():null).catch(()=>null))?.features?.filter(M=>{const v=M.properties?.joden??0,D=M.properties?.tot_pop??0;return D>0&&v>=S&&v/D>=p}),A=m?.features?.length?[m]:x?.length?[{features:x}]:[o?.jodenbuurt,o?.transvaalbuurt,o?.rivierenbuurt].filter(Boolean);m?.features?.length?console.info("Ghost warmth/wipe mask: demolished.geojson extent."):x?.length&&console.info(`Warmth mask: ${x.length} districts above threshold (demolished.geojson absent).`);const E=K1(A,yo(n),Li,Oi);E&&Ui.setWarmthMask(E);const T=Xi("canalring"),C=Xi("amstel");Ui.setWipeDirection(new he(C.x-T.x,C.z-T.z))}const d=St.get("walkers"),g=d==="0"?!1:d==="1"?!0:!xt.low;if(!Ri&&g&&dn&&fr){const{createWalkers:m}=await es(async()=>{const{createWalkers:p}=await import("./walkers-IOqLDe-o.js");return{createWalkers:p}},[],import.meta.url);m({scene:Qn,geoBounds:dn,worldWidth:Li,worldHeight:Oi,soulGeometry:fr.geometry,quality:xt,markets:o?.markets}).then(p=>{Bg=p}).catch(p=>console.warn("Walkers disabled:",p))}if(mu){const{buildFinale:m}=await es(async()=>{const{buildFinale:S}=await import("./finale-D6P2aTkn.js");return{buildFinale:S}},[],import.meta.url),p=m({scene:Qn,quality:xt,makeGlowTexture:Bf});Pg=p.finalePoints,Dg=p.finaleMaterial,Ng=p.finaleMemorialEl,Og=p.finaleScrollMax,Ig=p.infoToggleEl}else document.querySelector("#finale")?.remove();const _=gC({quality:xt,subjectWorld:Xi});Hg=_.track,yh=_.cameraCueKnots,kg=AA({cameraCueKnots:yh,state:Gf,quality:xt}),eC(ai),await MC(),jg(),document.querySelector(".quality-note").textContent=xt.unit==="1to1"?"one light · one person":"one light · ten people",addEventListener("resize",jg,{passive:!0}),uC(ai,nu),document.querySelector("#loading").classList.add("hidden"),fl=No=performance.now(),xv=!0,yi?tu():requestAnimationFrame(nu),requestAnimationFrame(()=>{const m=gs?.tiles?.find(p=>p.classes?.includes("landmarks"))?.id;m&&Ui?.ensure([m])})}function Yg(r,e){const[t,n]=Math.abs(r[0])<=180&&Math.abs(r[1])<=90?av(r):r,i=(t-e.minX)/(e.maxX-e.minX||1),s=(n-e.minY)/(e.maxY-e.minY||1);return{nx:i,ny:s,x:Ya(i),z:ja(s)}}function Xi(r){if(r==="mapcenter")return new U(0,0,0);if(r==="field"||r==="center"){const t=vv?.lights;if(t?.x?.length){let n=0,i=0;for(let s=0;s<t.x.length;s+=1)n+=t.x[s],i+=t.y[s];return new U(Ya(n/t.x.length),0,ja(i/t.x.length))}return new U(0,0,0)}if(dn&&cg[r]){const[t,n]=av(cg[r]),i=(t-dn.minX)/(dn.maxX-dn.minX||1),s=(n-dn.minY)/(dn.maxY-dn.minY||1);return new U(Ya(i),0,ja(s))}const e=BA[r];return e?new U(Ya(e[0]),0,ja(e[1])):(console.warn("unknown camera subject:",r),new U(0,0,0))}async function MC(){if(Ri)try{const r=await fetch("./data/scene-fallback.mp4",{method:"HEAD"}),e=r.headers.get("content-type")||"";if(!r.ok||!e.startsWith("video/"))return;Ea=document.querySelector("#fallback-video"),Ea.src="./data/scene-fallback.mp4",await new Promise(t=>{Ea.addEventListener("loadedmetadata",t,{once:!0}),Ea.load()}),dl=!0,document.querySelector("#fallback").classList.add("active"),document.querySelector("#fallback").setAttribute("aria-hidden","false"),document.querySelector("#scene").style.visibility="hidden"}catch{}}function SC(r,e=!1){!Ui||Wf.has(r)||(Wf.add(r),e?Ui.ensure(gs?.storySets?.[r]||[]):Ui.preload(r))}let qf=0,ai=null;function nu(r){if(yi&&(jf=!1),eu)return;yi||requestAnimationFrame(nu);const e=Math.min(.05,(r-fl)/1e3);fl=r;const t=Lr?performance.now():0;tC(ai,e),Gd&&!Ri&&FA(ai,e);const n=Lr?performance.now():0;if(Jc&&!dl){const o=aC(ai,r);if(yi&&o&&xC()){Xa||(Mh+=1),Xa=!0,Jt.domElement.dataset.idleSleeping="true",Jt.domElement.dataset.idleSleepCount=String(Mh),Jt.domElement.dataset.idleWakeCount=String(Yf);return}yi&&tu();const a=o?xt.idleFps:xt.maxFps;if(a>0&&r-No<1e3/a-.5)return}else yi&&tu();yi&&(Xa=!1,Jt.domElement.dataset.idleSleeping="false",Jt.domElement.dataset.idleSleepCount=String(Mh),Jt.domElement.dataset.idleWakeCount=String(Yf));const i=r-No;No=r,mC(ai);const s=Lr?performance.now():0;if(dl||(Jt.render(Qn,Kc),Xg+=1,yi&&(Jt.domElement.dataset.renderFrameCount=String(Xg))),Lr){const o=performance.now(),a=n-t,l=s-n,c=o-s;Mt.smooth+=a,Mt.smoothMax=Math.max(Mt.smoothMax,a),Mt.state+=l,Mt.stateMax=Math.max(Mt.stateMax,l),Mt.render+=c,Mt.renderMax=Math.max(Mt.renderMax,c),Mt.gapMax=Math.max(Mt.gapMax,e*1e3-(o-t)),Mt.frames+=1}Jc&&lC(ai,i,r),(St.get("fps")==="1"||Lr)&&sC(Jt,xt,r,i)}function jg(){!Jt||!Kc||(hC(ai),nC(ai),Dc())}function Ya(r){return(r-.5)*Li}function ja(r){return(.5-r)*Oi}yC().catch(r=>{console.error(r);const e=document.querySelector("#loading p");e.textContent="The map could not be prepared."});export{M_ as $,xs as A,Qt as B,et as C,dM as D,D_ as E,BC as F,Ol as G,hy as H,CC as I,Jr as J,uy as K,ys as L,jy as M,Ir as N,Gt as O,Bp as P,qo as Q,Qf as R,wy as S,lM as T,Fi as U,he as V,su as W,At as X,pi as Y,AC as Z,RC as _,bn as a,PC as a0,fy as a1,zn as a2,L_ as a3,y_ as a4,NC as a5,ry as a6,Nc as a7,lf as a8,Oc as a9,mn as aa,Bc as ab,zc as ac,lu as ad,dt as ae,Xr as af,au as ag,$r as ah,br as ai,EC as aj,wC as ak,x_ as al,bC as am,ki as an,ou as ao,Ps as ap,rA as aq,mt as b,zC as c,Mn as d,kn as e,pt as f,yo as g,Ls as h,gl as i,UC as j,IC as k,DC as l,Uo as m,LC as n,OC as o,at as p,U as q,Rp as r,FC as s,ny as t,vl as u,_u as v,Qv as w,ui as x,Ih as y,Lh as z};
//# sourceMappingURL=index-B-zydq6U.js.map
