(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $s="159",Ta=0,ur=1,Da=2,No=1,ya=2,Kt=3,An=0,Mt=1,qt=2,Xt=0,Wn=1,fr=2,dr=3,pr=4,La=5,vn=100,Ua=101,ba=102,gr=103,mr=104,Fa=200,_a=201,Qa=202,Pa=203,Ys=204,Hs=205,Ga=206,Na=207,Oa=208,Ya=209,Ha=210,ka=211,za=212,Va=213,Wa=214,Ka=0,qa=1,Ja=2,Wi=3,ja=4,Za=5,Xa=6,$a=7,Oo=0,el=1,tl=2,cn=0,nl=1,il=2,sl=3,rl=4,ol=5,Yo=300,Jn=301,jn=302,ks=303,zs=304,Xi=306,Vs=1e3,Ft=1001,Ws=1002,gt=1003,Er=1004,cs=1005,Rt=1006,al=1007,fi=1008,hn=1009,ll=1010,cl=1011,er=1012,Ho=1013,an=1014,ln=1015,Zn=1016,ko=1017,zo=1018,wn=1020,hl=1021,_t=1023,Al=1024,ul=1025,In=1026,Xn=1027,fl=1028,Vo=1029,dl=1030,Wo=1031,Ko=1033,hs=33776,As=33777,us=33778,fs=33779,Mr=35840,Cr=35841,xr=35842,vr=35843,qo=36196,Sr=37492,Br=37496,wr=37808,Ir=37809,Rr=37810,Tr=37811,Dr=37812,yr=37813,Lr=37814,Ur=37815,br=37816,Fr=37817,_r=37818,Qr=37819,Pr=37820,Gr=37821,ds=36492,Nr=36494,Or=36495,pl=36283,Yr=36284,Hr=36285,kr=36286,Jo=3e3,Rn=3001,gl=3200,ml=3201,El=0,Ml=1,Tt="",ot="srgb",en="srgb-linear",tr="display-p3",$i="display-p3-linear",Ki="linear",Ke="srgb",qi="rec709",Ji="p3",Tn=7680,zr=519,Cl=512,xl=513,vl=514,jo=515,Sl=516,Bl=517,wl=518,Il=519,Vr=35044,Wr="300 es",Ks=1035,Zt=2e3,ji=2001;class ei{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ps=Math.PI/180,qs=180/Math.PI;function pi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ht[i&255]+ht[i>>8&255]+ht[i>>16&255]+ht[i>>24&255]+"-"+ht[e&255]+ht[e>>8&255]+"-"+ht[e>>16&15|64]+ht[e>>24&255]+"-"+ht[t&63|128]+ht[t>>8&255]+"-"+ht[t>>16&255]+ht[t>>24&255]+ht[n&255]+ht[n>>8&255]+ht[n>>16&255]+ht[n>>24&255]).toLowerCase()}function Et(i,e,t){return Math.max(e,Math.min(t,i))}function Rl(i,e){return(i%e+e)%e}function gs(i,e,t){return(1-t)*i+t*e}function Kr(i){return(i&i-1)===0&&i!==0}function Js(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ii(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,n,s,r,a,o,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const A=this.elements;return A[0]=e,A[1]=s,A[2]=o,A[3]=t,A[4]=r,A[5]=l,A[6]=n,A[7]=a,A[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],A=n[4],u=n[7],d=n[2],p=n[5],E=n[8],m=s[0],f=s[3],h=s[6],w=s[1],x=s[4],S=s[7],I=s[2],T=s[5],D=s[8];return r[0]=a*m+o*w+l*I,r[3]=a*f+o*x+l*T,r[6]=a*h+o*S+l*D,r[1]=c*m+A*w+u*I,r[4]=c*f+A*x+u*T,r[7]=c*h+A*S+u*D,r[2]=d*m+p*w+E*I,r[5]=d*f+p*x+E*T,r[8]=d*h+p*S+E*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],A=e[8];return t*a*A-t*o*c-n*r*A+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],A=e[8],u=A*a-o*c,d=o*l-A*r,p=c*r-a*l,E=t*u+n*d+s*p;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/E;return e[0]=u*m,e[1]=(s*c-A*n)*m,e[2]=(o*n-s*a)*m,e[3]=d*m,e[4]=(A*t-s*l)*m,e[5]=(s*r-o*t)*m,e[6]=p*m,e[7]=(n*l-c*t)*m,e[8]=(a*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ms.makeScale(e,t)),this}rotate(e){return this.premultiply(ms.makeRotation(-e)),this}translate(e,t){return this.premultiply(ms.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ms=new Qe;function Zo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function di(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Tl(){const i=di("canvas");return i.style.display="block",i}const qr={};function Ai(i){i in qr||(qr[i]=!0,console.warn(i))}const Jr=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jr=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),vi={[en]:{transfer:Ki,primaries:qi,toReference:i=>i,fromReference:i=>i},[ot]:{transfer:Ke,primaries:qi,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[$i]:{transfer:Ki,primaries:Ji,toReference:i=>i.applyMatrix3(jr),fromReference:i=>i.applyMatrix3(Jr)},[tr]:{transfer:Ke,primaries:Ji,toReference:i=>i.convertSRGBToLinear().applyMatrix3(jr),fromReference:i=>i.applyMatrix3(Jr).convertLinearToSRGB()}},Dl=new Set([en,$i]),Ve={enabled:!0,_workingColorSpace:en,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Dl.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=vi[e].toReference,s=vi[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return vi[i].primaries},getTransfer:function(i){return i===Tt?Ki:vi[i].transfer}};function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Dn;class Xo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Dn===void 0&&(Dn=di("canvas")),Dn.width=e.width,Dn.height=e.height;const n=Dn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Dn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=di("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Kn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Kn(t[n]/255)*255):t[n]=Kn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yl=0;class $o{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yl++}),this.uuid=pi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ms(s[a].image)):r.push(Ms(s[a]))}else r=Ms(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ms(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ll=0;class Ct extends ei{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=Ft,s=Ft,r=Rt,a=fi,o=_t,l=hn,c=Ct.DEFAULT_ANISOTROPY,A=Tt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ll++}),this.uuid=pi(),this.name="",this.source=new $o(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof A=="string"?this.colorSpace=A:(Ai("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=A===Rn?ot:Tt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vs:e.x=e.x-Math.floor(e.x);break;case Ft:e.x=e.x<0?0:1;break;case Ws:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vs:e.y=e.y-Math.floor(e.y);break;case Ft:e.y=e.y<0?0:1;break;case Ws:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ai("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ot?Rn:Jo}set encoding(e){Ai("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Rn?ot:Tt}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=Yo;Ct.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,s=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],A=l[4],u=l[8],d=l[1],p=l[5],E=l[9],m=l[2],f=l[6],h=l[10];if(Math.abs(A-d)<.01&&Math.abs(u-m)<.01&&Math.abs(E-f)<.01){if(Math.abs(A+d)<.1&&Math.abs(u+m)<.1&&Math.abs(E+f)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,S=(p+1)/2,I=(h+1)/2,T=(A+d)/4,D=(u+m)/4,k=(E+f)/4;return x>S&&x>I?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=D/n):S>I?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=T/s,r=k/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=D/r,s=k/r),this.set(n,s,r,t),this}let w=Math.sqrt((f-E)*(f-E)+(u-m)*(u-m)+(d-A)*(d-A));return Math.abs(w)<.001&&(w=1),this.x=(f-E)/w,this.y=(u-m)/w,this.z=(d-A)/w,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ul extends ei{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(Ai("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Rn?ot:Tt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ct(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $o(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class un extends Ul{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ea extends Ct{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=gt,this.minFilter=gt,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bl extends Ct{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=gt,this.minFilter=gt,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],A=n[s+2],u=n[s+3];const d=r[a+0],p=r[a+1],E=r[a+2],m=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=A,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=E,e[t+3]=m;return}if(u!==m||l!==d||c!==p||A!==E){let f=1-o;const h=l*d+c*p+A*E+u*m,w=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const I=Math.sqrt(x),T=Math.atan2(I,h*w);f=Math.sin(f*T)/I,o=Math.sin(o*T)/I}const S=o*w;if(l=l*f+d*S,c=c*f+p*S,A=A*f+E*S,u=u*f+m*S,f===1-o){const I=1/Math.sqrt(l*l+c*c+A*A+u*u);l*=I,c*=I,A*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=A,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],A=n[s+3],u=r[a],d=r[a+1],p=r[a+2],E=r[a+3];return e[t]=o*E+A*u+l*p-c*d,e[t+1]=l*E+A*d+c*u-o*p,e[t+2]=c*E+A*p+o*d-l*u,e[t+3]=A*E-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),A=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),E=l(r/2);switch(a){case"XYZ":this._x=d*A*u+c*p*E,this._y=c*p*u-d*A*E,this._z=c*A*E+d*p*u,this._w=c*A*u-d*p*E;break;case"YXZ":this._x=d*A*u+c*p*E,this._y=c*p*u-d*A*E,this._z=c*A*E-d*p*u,this._w=c*A*u+d*p*E;break;case"ZXY":this._x=d*A*u-c*p*E,this._y=c*p*u+d*A*E,this._z=c*A*E+d*p*u,this._w=c*A*u-d*p*E;break;case"ZYX":this._x=d*A*u-c*p*E,this._y=c*p*u+d*A*E,this._z=c*A*E-d*p*u,this._w=c*A*u+d*p*E;break;case"YZX":this._x=d*A*u+c*p*E,this._y=c*p*u+d*A*E,this._z=c*A*E-d*p*u,this._w=c*A*u-d*p*E;break;case"XZY":this._x=d*A*u-c*p*E,this._y=c*p*u-d*A*E,this._z=c*A*E+d*p*u,this._w=c*A*u+d*p*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],A=t[6],u=t[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(A-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(A-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+A)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+A)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,A=t._w;return this._x=n*A+a*o+s*c-r*l,this._y=s*A+a*l+r*o-n*c,this._z=r*A+a*c+n*l-s*o,this._w=a*A-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),A=Math.atan2(c,o),u=Math.sin((1-t)*A)/c,d=Math.sin(t*A)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,n=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zr.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),A=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*A,this.y=n+l*A+o*c-r*u,this.z=s+l*u+r*A-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Cs.copy(this).projectOnVector(e),this.sub(Cs)}reflect(e){return this.sub(Cs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cs=new Q,Zr=new gi;class mi{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Dt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Dt):Dt.fromBufferAttribute(r,a),Dt.applyMatrix4(e.matrixWorld),this.expandByPoint(Dt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Si.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Si.copy(n.boundingBox)),Si.applyMatrix4(e.matrixWorld),this.union(Si)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Dt),Dt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(si),Bi.subVectors(this.max,si),yn.subVectors(e.a,si),Ln.subVectors(e.b,si),Un.subVectors(e.c,si),tn.subVectors(Ln,yn),nn.subVectors(Un,Ln),gn.subVectors(yn,Un);let t=[0,-tn.z,tn.y,0,-nn.z,nn.y,0,-gn.z,gn.y,tn.z,0,-tn.x,nn.z,0,-nn.x,gn.z,0,-gn.x,-tn.y,tn.x,0,-nn.y,nn.x,0,-gn.y,gn.x,0];return!xs(t,yn,Ln,Un,Bi)||(t=[1,0,0,0,1,0,0,0,1],!xs(t,yn,Ln,Un,Bi))?!1:(wi.crossVectors(tn,nn),t=[wi.x,wi.y,wi.z],xs(t,yn,Ln,Un,Bi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ht[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ht[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ht[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ht[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ht[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ht[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ht[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ht[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ht),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ht=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Dt=new Q,Si=new mi,yn=new Q,Ln=new Q,Un=new Q,tn=new Q,nn=new Q,gn=new Q,si=new Q,Bi=new Q,wi=new Q,mn=new Q;function xs(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){mn.fromArray(i,r);const o=s.x*Math.abs(mn.x)+s.y*Math.abs(mn.y)+s.z*Math.abs(mn.z),l=e.dot(mn),c=t.dot(mn),A=n.dot(mn);if(Math.max(-Math.max(l,c,A),Math.min(l,c,A))>o)return!1}return!0}const Fl=new mi,ri=new Q,vs=new Q;class nr{constructor(e=new Q,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Fl.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ri.subVectors(e,this.center);const t=ri.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ri,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ri.copy(e.center).add(vs)),this.expandByPoint(ri.copy(e.center).sub(vs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kt=new Q,Ss=new Q,Ii=new Q,sn=new Q,Bs=new Q,Ri=new Q,ws=new Q;class _l{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kt.copy(this.origin).addScaledVector(this.direction,t),kt.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ss.copy(e).add(t).multiplyScalar(.5),Ii.copy(t).sub(e).normalize(),sn.copy(this.origin).sub(Ss);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ii),o=sn.dot(this.direction),l=-sn.dot(Ii),c=sn.lengthSq(),A=Math.abs(1-a*a);let u,d,p,E;if(A>0)if(u=a*l-o,d=a*o-l,E=r*A,u>=0)if(d>=-E)if(d<=E){const m=1/A;u*=m,d*=m,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-E?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=E?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ss).addScaledVector(Ii,d),p}intersectSphere(e,t){kt.subVectors(e.center,this.origin);const n=kt.dot(this.direction),s=kt.dot(kt)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,A=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),A>=0?(r=(e.min.y-d.y)*A,a=(e.max.y-d.y)*A):(r=(e.max.y-d.y)*A,a=(e.min.y-d.y)*A),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,kt)!==null}intersectTriangle(e,t,n,s,r){Bs.subVectors(t,e),Ri.subVectors(n,e),ws.crossVectors(Bs,Ri);let a=this.direction.dot(ws),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;sn.subVectors(this.origin,e);const l=o*this.direction.dot(Ri.crossVectors(sn,Ri));if(l<0)return null;const c=o*this.direction.dot(Bs.cross(sn));if(c<0||l+c>a)return null;const A=-o*sn.dot(ws);return A<0?null:this.at(A/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,n,s,r,a,o,l,c,A,u,d,p,E,m,f){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,A,u,d,p,E,m,f)}set(e,t,n,s,r,a,o,l,c,A,u,d,p,E,m,f){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=A,h[10]=u,h[14]=d,h[3]=p,h[7]=E,h[11]=m,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/bn.setFromMatrixColumn(e,0).length(),r=1/bn.setFromMatrixColumn(e,1).length(),a=1/bn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),A=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*A,p=a*u,E=o*A,m=o*u;t[0]=l*A,t[4]=-l*u,t[8]=c,t[1]=p+E*c,t[5]=d-m*c,t[9]=-o*l,t[2]=m-d*c,t[6]=E+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*A,p=l*u,E=c*A,m=c*u;t[0]=d+m*o,t[4]=E*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*A,t[9]=-o,t[2]=p*o-E,t[6]=m+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*A,p=l*u,E=c*A,m=c*u;t[0]=d-m*o,t[4]=-a*u,t[8]=E+p*o,t[1]=p+E*o,t[5]=a*A,t[9]=m-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*A,p=a*u,E=o*A,m=o*u;t[0]=l*A,t[4]=E*c-p,t[8]=d*c+m,t[1]=l*u,t[5]=m*c+d,t[9]=p*c-E,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,E=o*l,m=o*c;t[0]=l*A,t[4]=m-d*u,t[8]=E*u+p,t[1]=u,t[5]=a*A,t[9]=-o*A,t[2]=-c*A,t[6]=p*u+E,t[10]=d-m*u}else if(e.order==="XZY"){const d=a*l,p=a*c,E=o*l,m=o*c;t[0]=l*A,t[4]=-u,t[8]=c*A,t[1]=d*u+m,t[5]=a*A,t[9]=p*u-E,t[2]=E*u-p,t[6]=o*A,t[10]=m*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ql,e,Pl)}lookAt(e,t,n){const s=this.elements;return vt.subVectors(e,t),vt.lengthSq()===0&&(vt.z=1),vt.normalize(),rn.crossVectors(n,vt),rn.lengthSq()===0&&(Math.abs(n.z)===1?vt.x+=1e-4:vt.z+=1e-4,vt.normalize(),rn.crossVectors(n,vt)),rn.normalize(),Ti.crossVectors(vt,rn),s[0]=rn.x,s[4]=Ti.x,s[8]=vt.x,s[1]=rn.y,s[5]=Ti.y,s[9]=vt.y,s[2]=rn.z,s[6]=Ti.z,s[10]=vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],A=n[1],u=n[5],d=n[9],p=n[13],E=n[2],m=n[6],f=n[10],h=n[14],w=n[3],x=n[7],S=n[11],I=n[15],T=s[0],D=s[4],k=s[8],M=s[12],B=s[1],z=s[5],H=s[9],j=s[13],y=s[2],G=s[6],V=s[10],Y=s[14],te=s[3],q=s[7],W=s[11],se=s[15];return r[0]=a*T+o*B+l*y+c*te,r[4]=a*D+o*z+l*G+c*q,r[8]=a*k+o*H+l*V+c*W,r[12]=a*M+o*j+l*Y+c*se,r[1]=A*T+u*B+d*y+p*te,r[5]=A*D+u*z+d*G+p*q,r[9]=A*k+u*H+d*V+p*W,r[13]=A*M+u*j+d*Y+p*se,r[2]=E*T+m*B+f*y+h*te,r[6]=E*D+m*z+f*G+h*q,r[10]=E*k+m*H+f*V+h*W,r[14]=E*M+m*j+f*Y+h*se,r[3]=w*T+x*B+S*y+I*te,r[7]=w*D+x*z+S*G+I*q,r[11]=w*k+x*H+S*V+I*W,r[15]=w*M+x*j+S*Y+I*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],A=e[2],u=e[6],d=e[10],p=e[14],E=e[3],m=e[7],f=e[11],h=e[15];return E*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*p-n*l*p)+m*(+t*l*p-t*c*d+r*a*d-s*a*p+s*c*A-r*l*A)+f*(+t*c*u-t*o*p-r*a*u+n*a*p+r*o*A-n*c*A)+h*(-s*o*A-t*l*u+t*o*d+s*a*u-n*a*d+n*l*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],A=e[8],u=e[9],d=e[10],p=e[11],E=e[12],m=e[13],f=e[14],h=e[15],w=u*f*c-m*d*c+m*l*p-o*f*p-u*l*h+o*d*h,x=E*d*c-A*f*c-E*l*p+a*f*p+A*l*h-a*d*h,S=A*m*c-E*u*c+E*o*p-a*m*p-A*o*h+a*u*h,I=E*u*l-A*m*l-E*o*d+a*m*d+A*o*f-a*u*f,T=t*w+n*x+s*S+r*I;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/T;return e[0]=w*D,e[1]=(m*d*r-u*f*r-m*s*p+n*f*p+u*s*h-n*d*h)*D,e[2]=(o*f*r-m*l*r+m*s*c-n*f*c-o*s*h+n*l*h)*D,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*p-n*l*p)*D,e[4]=x*D,e[5]=(A*f*r-E*d*r+E*s*p-t*f*p-A*s*h+t*d*h)*D,e[6]=(E*l*r-a*f*r-E*s*c+t*f*c+a*s*h-t*l*h)*D,e[7]=(a*d*r-A*l*r+A*s*c-t*d*c-a*s*p+t*l*p)*D,e[8]=S*D,e[9]=(E*u*r-A*m*r-E*n*p+t*m*p+A*n*h-t*u*h)*D,e[10]=(a*m*r-E*o*r+E*n*c-t*m*c-a*n*h+t*o*h)*D,e[11]=(A*o*r-a*u*r-A*n*c+t*u*c+a*n*p-t*o*p)*D,e[12]=I*D,e[13]=(A*m*s-E*u*s+E*n*d-t*m*d-A*n*f+t*u*f)*D,e[14]=(E*o*s-a*m*s-E*n*l+t*m*l+a*n*f-t*o*f)*D,e[15]=(a*u*s-A*o*s+A*n*l-t*u*l-a*n*d+t*o*d)*D,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,A=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,A*o+n,A*l-s*a,0,c*l-s*o,A*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,A=a+a,u=o+o,d=r*c,p=r*A,E=r*u,m=a*A,f=a*u,h=o*u,w=l*c,x=l*A,S=l*u,I=n.x,T=n.y,D=n.z;return s[0]=(1-(m+h))*I,s[1]=(p+S)*I,s[2]=(E-x)*I,s[3]=0,s[4]=(p-S)*T,s[5]=(1-(d+h))*T,s[6]=(f+w)*T,s[7]=0,s[8]=(E+x)*D,s[9]=(f-w)*D,s[10]=(1-(d+m))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=bn.set(s[0],s[1],s[2]).length();const a=bn.set(s[4],s[5],s[6]).length(),o=bn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],yt.copy(this);const c=1/r,A=1/a,u=1/o;return yt.elements[0]*=c,yt.elements[1]*=c,yt.elements[2]*=c,yt.elements[4]*=A,yt.elements[5]*=A,yt.elements[6]*=A,yt.elements[8]*=u,yt.elements[9]*=u,yt.elements[10]*=u,t.setFromRotationMatrix(yt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Zt){const l=this.elements,c=2*r/(t-e),A=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let p,E;if(o===Zt)p=-(a+r)/(a-r),E=-2*a*r/(a-r);else if(o===ji)p=-a/(a-r),E=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=A,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=E,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Zt){const l=this.elements,c=1/(t-e),A=1/(n-s),u=1/(a-r),d=(t+e)*c,p=(n+s)*A;let E,m;if(o===Zt)E=(a+r)*u,m=-2*u;else if(o===ji)E=r*u,m=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*A,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=m,l[14]=-E,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const bn=new Q,yt=new lt,Ql=new Q(0,0,0),Pl=new Q(1,1,1),rn=new Q,Ti=new Q,vt=new Q,Xr=new lt,$r=new gi;class es{constructor(e=0,t=0,n=0,s=es.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],A=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-A,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(A,-1,1)),Math.abs(A)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-A,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-A,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $r.setFromEuler(this),this.setFromQuaternion($r,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}es.DEFAULT_ORDER="XYZ";class ta{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gl=0;const eo=new Q,Fn=new gi,zt=new lt,Di=new Q,oi=new Q,Nl=new Q,Ol=new gi,to=new Q(1,0,0),no=new Q(0,1,0),io=new Q(0,0,1),Yl={type:"added"},Hl={type:"removed"};class Bt extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gl++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new Q,t=new es,n=new gi,s=new Q(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new Qe}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fn.setFromAxisAngle(e,t),this.quaternion.multiply(Fn),this}rotateOnWorldAxis(e,t){return Fn.setFromAxisAngle(e,t),this.quaternion.premultiply(Fn),this}rotateX(e){return this.rotateOnAxis(to,e)}rotateY(e){return this.rotateOnAxis(no,e)}rotateZ(e){return this.rotateOnAxis(io,e)}translateOnAxis(e,t){return eo.copy(e).applyQuaternion(this.quaternion),this.position.add(eo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(to,e)}translateY(e){return this.translateOnAxis(no,e)}translateZ(e){return this.translateOnAxis(io,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Di.copy(e):Di.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),oi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zt.lookAt(oi,Di,this.up):zt.lookAt(Di,oi,this.up),this.quaternion.setFromRotationMatrix(zt),s&&(zt.extractRotation(s.matrixWorld),Fn.setFromRotationMatrix(zt),this.quaternion.premultiply(Fn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Yl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zt.multiply(e.parent.matrixWorld)),e.applyMatrix4(zt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oi,e,Nl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oi,Ol,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,A=l.length;c<A;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),A=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),E=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),A.length>0&&(n.images=A),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),E.length>0&&(n.nodes=E)}return n.object=s,n;function a(o){const l=[];for(const c in o){const A=o[c];delete A.metadata,l.push(A)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Bt.DEFAULT_UP=new Q(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Lt=new Q,Vt=new Q,Is=new Q,Wt=new Q,_n=new Q,Qn=new Q,so=new Q,Rs=new Q,Ts=new Q,Ds=new Q;let yi=!1;class Ut{constructor(e=new Q,t=new Q,n=new Q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Lt.subVectors(e,t),s.cross(Lt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Lt.subVectors(s,t),Vt.subVectors(n,t),Is.subVectors(e,t);const a=Lt.dot(Lt),o=Lt.dot(Vt),l=Lt.dot(Is),c=Vt.dot(Vt),A=Vt.dot(Is),u=a*c-o*o;if(u===0)return r.set(-2,-1,-1);const d=1/u,p=(c*l-o*A)*d,E=(a*A-o*l)*d;return r.set(1-p-E,E,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Wt),Wt.x>=0&&Wt.y>=0&&Wt.x+Wt.y<=1}static getUV(e,t,n,s,r,a,o,l){return yi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),yi=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Wt),l.setScalar(0),l.addScaledVector(r,Wt.x),l.addScaledVector(a,Wt.y),l.addScaledVector(o,Wt.z),l}static isFrontFacing(e,t,n,s){return Lt.subVectors(n,t),Vt.subVectors(e,t),Lt.cross(Vt).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Lt.subVectors(this.c,this.b),Vt.subVectors(this.a,this.b),Lt.cross(Vt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ut.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ut.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return yi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),yi=!0),Ut.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return Ut.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Ut.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ut.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;_n.subVectors(s,n),Qn.subVectors(r,n),Rs.subVectors(e,n);const l=_n.dot(Rs),c=Qn.dot(Rs);if(l<=0&&c<=0)return t.copy(n);Ts.subVectors(e,s);const A=_n.dot(Ts),u=Qn.dot(Ts);if(A>=0&&u<=A)return t.copy(s);const d=l*u-A*c;if(d<=0&&l>=0&&A<=0)return a=l/(l-A),t.copy(n).addScaledVector(_n,a);Ds.subVectors(e,r);const p=_n.dot(Ds),E=Qn.dot(Ds);if(E>=0&&p<=E)return t.copy(r);const m=p*c-l*E;if(m<=0&&c>=0&&E<=0)return o=c/(c-E),t.copy(n).addScaledVector(Qn,o);const f=A*E-p*u;if(f<=0&&u-A>=0&&p-E>=0)return so.subVectors(r,s),o=(u-A)/(u-A+(p-E)),t.copy(s).addScaledVector(so,o);const h=1/(f+m+d);return a=m*h,o=d*h,t.copy(n).addScaledVector(_n,a).addScaledVector(Qn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const na={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},on={h:0,s:0,l:0},Li={h:0,s:0,l:0};function ys(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ve.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ve.workingColorSpace){if(e=Rl(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ys(a,r,e+1/3),this.g=ys(a,r,e),this.b=ys(a,r,e-1/3)}return Ve.toWorkingColorSpace(this,s),this}setStyle(e,t=ot){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ot){const n=na[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ot){return Ve.fromWorkingColorSpace(At.copy(this),e),Math.round(Et(At.r*255,0,255))*65536+Math.round(Et(At.g*255,0,255))*256+Math.round(Et(At.b*255,0,255))}getHexString(e=ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.fromWorkingColorSpace(At.copy(this),t);const n=At.r,s=At.g,r=At.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const A=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=A<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=A,e}getRGB(e,t=Ve.workingColorSpace){return Ve.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=ot){Ve.fromWorkingColorSpace(At.copy(this),e);const t=At.r,n=At.g,s=At.b;return e!==ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(on),this.setHSL(on.h+e,on.s+t,on.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(on),e.getHSL(Li);const n=gs(on.h,Li.h,t),s=gs(on.s,Li.s,t),r=gs(on.l,Li.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new Ye;Ye.NAMES=na;let kl=0;class ts extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kl++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=Wn,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ys,this.blendDst=Hs,this.blendEquation=vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tn,this.stencilZFail=Tn,this.stencilZPass=Tn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wn&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ys&&(n.blendSrc=this.blendSrc),this.blendDst!==Hs&&(n.blendDst=this.blendDst),this.blendEquation!==vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zr&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Tn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Tn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Zi extends ts{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xe=new Q,Ui=new He;class Nt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ui.fromBufferAttribute(this,t),Ui.applyMatrix3(e),this.setXY(t,Ui.x,Ui.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.applyMatrix3(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.applyMatrix4(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.applyNormalMatrix(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.transformDirection(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vr&&(e.usage=this.usage),e}}class ia extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class sa extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $t extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let zl=0;const It=new lt,Ls=new Bt,Pn=new Q,St=new mi,ai=new mi,it=new Q;class fn extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zl++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zo(e)?sa:ia)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return It.makeRotationFromQuaternion(e),this.applyMatrix4(It),this}rotateX(e){return It.makeRotationX(e),this.applyMatrix4(It),this}rotateY(e){return It.makeRotationY(e),this.applyMatrix4(It),this}rotateZ(e){return It.makeRotationZ(e),this.applyMatrix4(It),this}translate(e,t,n){return It.makeTranslation(e,t,n),this.applyMatrix4(It),this}scale(e,t,n){return It.makeScale(e,t,n),this.applyMatrix4(It),this}lookAt(e){return Ls.lookAt(e),Ls.updateMatrix(),this.applyMatrix4(Ls.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pn).negate(),this.translate(Pn.x,Pn.y,Pn.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new $t(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];St.setFromBufferAttribute(r),this.morphTargetsRelative?(it.addVectors(this.boundingBox.min,St.min),this.boundingBox.expandByPoint(it),it.addVectors(this.boundingBox.max,St.max),this.boundingBox.expandByPoint(it)):(this.boundingBox.expandByPoint(St.min),this.boundingBox.expandByPoint(St.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Q,1/0);return}if(e){const n=this.boundingSphere.center;if(St.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ai.setFromBufferAttribute(o),this.morphTargetsRelative?(it.addVectors(St.min,ai.min),St.expandByPoint(it),it.addVectors(St.max,ai.max),St.expandByPoint(it)):(St.expandByPoint(ai.min),St.expandByPoint(ai.max))}St.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)it.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(it));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,A=o.count;c<A;c++)it.fromBufferAttribute(o,c),l&&(Pn.fromBufferAttribute(e,c),it.add(Pn)),s=Math.max(s,n.distanceToSquared(it))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],A=[];for(let B=0;B<o;B++)c[B]=new Q,A[B]=new Q;const u=new Q,d=new Q,p=new Q,E=new He,m=new He,f=new He,h=new Q,w=new Q;function x(B,z,H){u.fromArray(s,B*3),d.fromArray(s,z*3),p.fromArray(s,H*3),E.fromArray(a,B*2),m.fromArray(a,z*2),f.fromArray(a,H*2),d.sub(u),p.sub(u),m.sub(E),f.sub(E);const j=1/(m.x*f.y-f.x*m.y);isFinite(j)&&(h.copy(d).multiplyScalar(f.y).addScaledVector(p,-m.y).multiplyScalar(j),w.copy(p).multiplyScalar(m.x).addScaledVector(d,-f.x).multiplyScalar(j),c[B].add(h),c[z].add(h),c[H].add(h),A[B].add(w),A[z].add(w),A[H].add(w))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let B=0,z=S.length;B<z;++B){const H=S[B],j=H.start,y=H.count;for(let G=j,V=j+y;G<V;G+=3)x(n[G+0],n[G+1],n[G+2])}const I=new Q,T=new Q,D=new Q,k=new Q;function M(B){D.fromArray(r,B*3),k.copy(D);const z=c[B];I.copy(z),I.sub(D.multiplyScalar(D.dot(z))).normalize(),T.crossVectors(k,z);const j=T.dot(A[B])<0?-1:1;l[B*4]=I.x,l[B*4+1]=I.y,l[B*4+2]=I.z,l[B*4+3]=j}for(let B=0,z=S.length;B<z;++B){const H=S[B],j=H.start,y=H.count;for(let G=j,V=j+y;G<V;G+=3)M(n[G+0]),M(n[G+1]),M(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new Q,r=new Q,a=new Q,o=new Q,l=new Q,c=new Q,A=new Q,u=new Q;if(e)for(let d=0,p=e.count;d<p;d+=3){const E=e.getX(d+0),m=e.getX(d+1),f=e.getX(d+2);s.fromBufferAttribute(t,E),r.fromBufferAttribute(t,m),a.fromBufferAttribute(t,f),A.subVectors(a,r),u.subVectors(s,r),A.cross(u),o.fromBufferAttribute(n,E),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,f),o.add(A),l.add(A),c.add(A),n.setXYZ(E,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),A.subVectors(a,r),u.subVectors(s,r),A.cross(u),n.setXYZ(d+0,A.x,A.y,A.z),n.setXYZ(d+1,A.x,A.y,A.z),n.setXYZ(d+2,A.x,A.y,A.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)it.fromBufferAttribute(e,t),it.normalize(),e.setXYZ(t,it.x,it.y,it.z)}toNonIndexed(){function e(o,l){const c=o.array,A=o.itemSize,u=o.normalized,d=new c.constructor(l.length*A);let p=0,E=0;for(let m=0,f=l.length;m<f;m++){o.isInterleavedBufferAttribute?p=l[m]*o.data.stride+o.offset:p=l[m]*A;for(let h=0;h<A;h++)d[E++]=c[p++]}return new Nt(d,A,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let A=0,u=c.length;A<u;A++){const d=c[A],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],A=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];A.push(p.toJSON(e.data))}A.length>0&&(s[l]=A,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const A=s[c];this.setAttribute(c,A.clone(t))}const r=e.morphAttributes;for(const c in r){const A=[],u=r[c];for(let d=0,p=u.length;d<p;d++)A.push(u[d].clone(t));this.morphAttributes[c]=A}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,A=a.length;c<A;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ro=new lt,En=new _l,bi=new nr,oo=new Q,Gn=new Q,Nn=new Q,On=new Q,Us=new Q,Fi=new Q,_i=new He,Qi=new He,Pi=new He,ao=new Q,lo=new Q,co=new Q,Gi=new Q,Ni=new Q;class Gt extends Bt{constructor(e=new fn,t=new Zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Fi.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const A=o[l],u=r[l];A!==0&&(Us.fromBufferAttribute(u,e),a?Fi.addScaledVector(Us,A):Fi.addScaledVector(Us.sub(t),A))}t.add(Fi)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bi.copy(n.boundingSphere),bi.applyMatrix4(r),En.copy(e.ray).recast(e.near),!(bi.containsPoint(En.origin)===!1&&(En.intersectSphere(bi,oo)===null||En.origin.distanceToSquared(oo)>(e.far-e.near)**2))&&(ro.copy(r).invert(),En.copy(e.ray).applyMatrix4(ro),!(n.boundingBox!==null&&En.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,En)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,A=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let E=0,m=d.length;E<m;E++){const f=d[E],h=a[f.materialIndex],w=Math.max(f.start,p.start),x=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let S=w,I=x;S<I;S+=3){const T=o.getX(S),D=o.getX(S+1),k=o.getX(S+2);s=Oi(this,h,e,n,c,A,u,T,D,k),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const E=Math.max(0,p.start),m=Math.min(o.count,p.start+p.count);for(let f=E,h=m;f<h;f+=3){const w=o.getX(f),x=o.getX(f+1),S=o.getX(f+2);s=Oi(this,a,e,n,c,A,u,w,x,S),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let E=0,m=d.length;E<m;E++){const f=d[E],h=a[f.materialIndex],w=Math.max(f.start,p.start),x=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let S=w,I=x;S<I;S+=3){const T=S,D=S+1,k=S+2;s=Oi(this,h,e,n,c,A,u,T,D,k),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const E=Math.max(0,p.start),m=Math.min(l.count,p.start+p.count);for(let f=E,h=m;f<h;f+=3){const w=f,x=f+1,S=f+2;s=Oi(this,a,e,n,c,A,u,w,x,S),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}}function Vl(i,e,t,n,s,r,a,o){let l;if(e.side===Mt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===An,o),l===null)return null;Ni.copy(o),Ni.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ni);return c<t.near||c>t.far?null:{distance:c,point:Ni.clone(),object:i}}function Oi(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Gn),i.getVertexPosition(l,Nn),i.getVertexPosition(c,On);const A=Vl(i,e,t,n,Gn,Nn,On,Gi);if(A){s&&(_i.fromBufferAttribute(s,o),Qi.fromBufferAttribute(s,l),Pi.fromBufferAttribute(s,c),A.uv=Ut.getInterpolation(Gi,Gn,Nn,On,_i,Qi,Pi,new He)),r&&(_i.fromBufferAttribute(r,o),Qi.fromBufferAttribute(r,l),Pi.fromBufferAttribute(r,c),A.uv1=Ut.getInterpolation(Gi,Gn,Nn,On,_i,Qi,Pi,new He),A.uv2=A.uv1),a&&(ao.fromBufferAttribute(a,o),lo.fromBufferAttribute(a,l),co.fromBufferAttribute(a,c),A.normal=Ut.getInterpolation(Gi,Gn,Nn,On,ao,lo,co,new Q),A.normal.dot(n.direction)>0&&A.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new Q,materialIndex:0};Ut.getNormal(Gn,Nn,On,u.normal),A.face=u}return A}class Ei extends fn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],A=[],u=[];let d=0,p=0;E("z","y","x",-1,-1,n,t,e,a,r,0),E("z","y","x",1,-1,n,t,-e,a,r,1),E("x","z","y",1,1,e,n,t,s,a,2),E("x","z","y",1,-1,e,n,-t,s,a,3),E("x","y","z",1,-1,e,t,n,s,r,4),E("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(A,3)),this.setAttribute("uv",new $t(u,2));function E(m,f,h,w,x,S,I,T,D,k,M){const B=S/D,z=I/k,H=S/2,j=I/2,y=T/2,G=D+1,V=k+1;let Y=0,te=0;const q=new Q;for(let W=0;W<V;W++){const se=W*z-j;for(let oe=0;oe<G;oe++){const N=oe*B-H;q[m]=N*w,q[f]=se*x,q[h]=y,c.push(q.x,q.y,q.z),q[m]=0,q[f]=0,q[h]=T>0?1:-1,A.push(q.x,q.y,q.z),u.push(oe/D),u.push(1-W/k),Y+=1}}for(let W=0;W<k;W++)for(let se=0;se<D;se++){const oe=d+se+G*W,N=d+se+G*(W+1),K=d+(se+1)+G*(W+1),ae=d+(se+1)+G*W;l.push(oe,N,ae),l.push(N,K,ae),te+=6}o.addGroup(p,te,M),p+=te,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ei(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $n(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function pt(i){const e={};for(let t=0;t<i.length;t++){const n=$n(i[t]);for(const s in n)e[s]=n[s]}return e}function Wl(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ra(i){return i.getRenderTarget()===null?i.outputColorSpace:Ve.workingColorSpace}const ir={clone:$n,merge:pt};var Kl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ql=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ot extends ts{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kl,this.fragmentShader=ql,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$n(e.uniforms),this.uniformsGroups=Wl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class oa extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Zt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class bt extends oa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ps*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yn=-90,Hn=1;class Jl extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new bt(Yn,Hn,e,t);s.layers=this.layers,this.add(s);const r=new bt(Yn,Hn,e,t);r.layers=this.layers,this.add(r);const a=new bt(Yn,Hn,e,t);a.layers=this.layers,this.add(a);const o=new bt(Yn,Hn,e,t);o.layers=this.layers,this.add(o);const l=new bt(Yn,Hn,e,t);l.layers=this.layers,this.add(l);const c=new bt(Yn,Hn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Zt)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ji)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,A]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,s),e.render(t,A),e.setRenderTarget(u,d,p),e.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class aa extends Ct{constructor(e,t,n,s,r,a,o,l,c,A){e=e!==void 0?e:[],t=t!==void 0?t:Jn,super(e,t,n,s,r,a,o,l,c,A),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jl extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Ai("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Rn?ot:Tt),this.texture=new aa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ei(5,5,5),r=new Ot({name:"CubemapFromEquirect",uniforms:$n(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mt,blending:Xt});r.uniforms.tEquirect.value=t;const a=new Gt(s,r),o=t.minFilter;return t.minFilter===fi&&(t.minFilter=Rt),new Jl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const bs=new Q,Zl=new Q,Xl=new Qe;class Cn{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=bs.subVectors(n,t).cross(Zl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(bs),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Xl.getNormalMatrix(e),s=this.coplanarPoint(bs).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mn=new nr,Yi=new Q;class la{constructor(e=new Cn,t=new Cn,n=new Cn,s=new Cn,r=new Cn,a=new Cn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zt){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],A=s[5],u=s[6],d=s[7],p=s[8],E=s[9],m=s[10],f=s[11],h=s[12],w=s[13],x=s[14],S=s[15];if(n[0].setComponents(l-r,d-c,f-p,S-h).normalize(),n[1].setComponents(l+r,d+c,f+p,S+h).normalize(),n[2].setComponents(l+a,d+A,f+E,S+w).normalize(),n[3].setComponents(l-a,d-A,f-E,S-w).normalize(),n[4].setComponents(l-o,d-u,f-m,S-x).normalize(),t===Zt)n[5].setComponents(l+o,d+u,f+m,S+x).normalize();else if(t===ji)n[5].setComponents(o,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mn)}intersectsSprite(e){return Mn.center.set(0,0,0),Mn.radius=.7071067811865476,Mn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Yi.x=s.normal.x>0?e.max.x:e.min.x,Yi.y=s.normal.y>0?e.max.y:e.min.y,Yi.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Yi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ca(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function $l(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,A){const u=c.array,d=c.usage,p=u.byteLength,E=i.createBuffer();i.bindBuffer(A,E),i.bufferData(A,u,d),c.onUploadCallback();let m;if(u instanceof Float32Array)m=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)m=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=i.SHORT;else if(u instanceof Uint32Array)m=i.UNSIGNED_INT;else if(u instanceof Int32Array)m=i.INT;else if(u instanceof Int8Array)m=i.BYTE;else if(u instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:E,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,A,u){const d=A.array,p=A._updateRange,E=A.updateRanges;if(i.bindBuffer(u,c),p.count===-1&&E.length===0&&i.bufferSubData(u,0,d),E.length!==0){for(let m=0,f=E.length;m<f;m++){const h=E[m];t?i.bufferSubData(u,h.start*d.BYTES_PER_ELEMENT,d,h.start,h.count):i.bufferSubData(u,h.start*d.BYTES_PER_ELEMENT,d.subarray(h.start,h.start+h.count))}A.clearUpdateRanges()}p.count!==-1&&(t?i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),A.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const A=n.get(c);A&&(i.deleteBuffer(A.buffer),n.delete(c))}function l(c,A){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,s(c,A));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,A),u.version=c.version}}return{get:a,remove:o,update:l}}class ns extends fn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,A=l+1,u=e/o,d=t/l,p=[],E=[],m=[],f=[];for(let h=0;h<A;h++){const w=h*d-a;for(let x=0;x<c;x++){const S=x*u-r;E.push(S,-w,0),m.push(0,0,1),f.push(x/o),f.push(1-h/l)}}for(let h=0;h<l;h++)for(let w=0;w<o;w++){const x=w+c*h,S=w+c*(h+1),I=w+1+c*(h+1),T=w+1+c*h;p.push(x,S,T),p.push(S,I,T)}this.setIndex(p),this.setAttribute("position",new $t(E,3)),this.setAttribute("normal",new $t(m,3)),this.setAttribute("uv",new $t(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.width,e.height,e.widthSegments,e.heightSegments)}}var ec=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tc=`#ifdef USE_ALPHAHASH
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
#endif`,nc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ic=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,rc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oc=`#ifdef USE_AOMAP
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
#endif`,ac=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lc=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,cc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,hc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ac=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fc=`#ifdef USE_IRIDESCENCE
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
#endif`,dc=`#ifdef USE_BUMPMAP
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
#endif`,pc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,gc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ec=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Sc=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Bc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,wc=`vec3 transformedNormal = objectNormal;
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
#endif`,Ic=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lc=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Uc=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,bc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fc=`#ifdef USE_ENVMAP
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
#endif`,_c=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qc=`#ifdef USE_ENVMAP
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
#endif`,Pc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Oc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yc=`#ifdef USE_GRADIENTMAP
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
}`,Hc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wc=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Kc=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,qc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xc=`PhysicalMaterial material;
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
#endif`,$c=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,eh=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,th=`#if defined( RE_IndirectDiffuse )
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
#endif`,nh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ih=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,oh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ah=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ch=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hh=`#if defined( USE_POINTS_UV )
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
#endif`,Ah=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ph=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,gh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,mh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Eh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ch=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vh=`#ifdef USE_NORMALMAP
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
#endif`,Sh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ih=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Th=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Dh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_h=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Qh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ph=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Oh=`#ifdef USE_SKINNING
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
#endif`,Yh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hh=`#ifdef USE_SKINNING
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
#endif`,kh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wh=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kh=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qh=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $h=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eA=`uniform sampler2D t2D;
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
}`,tA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rA=`#include <common>
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
}`,oA=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,aA=`#define DISTANCE
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
}`,lA=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AA=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uA=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fA=`#include <common>
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
}`,dA=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,pA=`#define LAMBERT
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
}`,gA=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,mA=`#define MATCAP
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
}`,EA=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,MA=`#define NORMAL
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
}`,CA=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xA=`#define PHONG
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
}`,vA=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,SA=`#define STANDARD
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
}`,BA=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,wA=`#define TOON
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
}`,IA=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,RA=`uniform float size;
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
}`,TA=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,DA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,yA=`uniform vec3 color;
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
}`,LA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,UA=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Le={alphahash_fragment:ec,alphahash_pars_fragment:tc,alphamap_fragment:nc,alphamap_pars_fragment:ic,alphatest_fragment:sc,alphatest_pars_fragment:rc,aomap_fragment:oc,aomap_pars_fragment:ac,batching_pars_vertex:lc,batching_vertex:cc,begin_vertex:hc,beginnormal_vertex:Ac,bsdfs:uc,iridescence_fragment:fc,bumpmap_pars_fragment:dc,clipping_planes_fragment:pc,clipping_planes_pars_fragment:gc,clipping_planes_pars_vertex:mc,clipping_planes_vertex:Ec,color_fragment:Mc,color_pars_fragment:Cc,color_pars_vertex:xc,color_vertex:vc,common:Sc,cube_uv_reflection_fragment:Bc,defaultnormal_vertex:wc,displacementmap_pars_vertex:Ic,displacementmap_vertex:Rc,emissivemap_fragment:Tc,emissivemap_pars_fragment:Dc,colorspace_fragment:yc,colorspace_pars_fragment:Lc,envmap_fragment:Uc,envmap_common_pars_fragment:bc,envmap_pars_fragment:Fc,envmap_pars_vertex:_c,envmap_physical_pars_fragment:Kc,envmap_vertex:Qc,fog_vertex:Pc,fog_pars_vertex:Gc,fog_fragment:Nc,fog_pars_fragment:Oc,gradientmap_pars_fragment:Yc,lightmap_fragment:Hc,lightmap_pars_fragment:kc,lights_lambert_fragment:zc,lights_lambert_pars_fragment:Vc,lights_pars_begin:Wc,lights_toon_fragment:qc,lights_toon_pars_fragment:Jc,lights_phong_fragment:jc,lights_phong_pars_fragment:Zc,lights_physical_fragment:Xc,lights_physical_pars_fragment:$c,lights_fragment_begin:eh,lights_fragment_maps:th,lights_fragment_end:nh,logdepthbuf_fragment:ih,logdepthbuf_pars_fragment:sh,logdepthbuf_pars_vertex:rh,logdepthbuf_vertex:oh,map_fragment:ah,map_pars_fragment:lh,map_particle_fragment:ch,map_particle_pars_fragment:hh,metalnessmap_fragment:Ah,metalnessmap_pars_fragment:uh,morphcolor_vertex:fh,morphnormal_vertex:dh,morphtarget_pars_vertex:ph,morphtarget_vertex:gh,normal_fragment_begin:mh,normal_fragment_maps:Eh,normal_pars_fragment:Mh,normal_pars_vertex:Ch,normal_vertex:xh,normalmap_pars_fragment:vh,clearcoat_normal_fragment_begin:Sh,clearcoat_normal_fragment_maps:Bh,clearcoat_pars_fragment:wh,iridescence_pars_fragment:Ih,opaque_fragment:Rh,packing:Th,premultiplied_alpha_fragment:Dh,project_vertex:yh,dithering_fragment:Lh,dithering_pars_fragment:Uh,roughnessmap_fragment:bh,roughnessmap_pars_fragment:Fh,shadowmap_pars_fragment:_h,shadowmap_pars_vertex:Qh,shadowmap_vertex:Ph,shadowmask_pars_fragment:Gh,skinbase_vertex:Nh,skinning_pars_vertex:Oh,skinning_vertex:Yh,skinnormal_vertex:Hh,specularmap_fragment:kh,specularmap_pars_fragment:zh,tonemapping_fragment:Vh,tonemapping_pars_fragment:Wh,transmission_fragment:Kh,transmission_pars_fragment:qh,uv_pars_fragment:Jh,uv_pars_vertex:jh,uv_vertex:Zh,worldpos_vertex:Xh,background_vert:$h,background_frag:eA,backgroundCube_vert:tA,backgroundCube_frag:nA,cube_vert:iA,cube_frag:sA,depth_vert:rA,depth_frag:oA,distanceRGBA_vert:aA,distanceRGBA_frag:lA,equirect_vert:cA,equirect_frag:hA,linedashed_vert:AA,linedashed_frag:uA,meshbasic_vert:fA,meshbasic_frag:dA,meshlambert_vert:pA,meshlambert_frag:gA,meshmatcap_vert:mA,meshmatcap_frag:EA,meshnormal_vert:MA,meshnormal_frag:CA,meshphong_vert:xA,meshphong_frag:vA,meshphysical_vert:SA,meshphysical_frag:BA,meshtoon_vert:wA,meshtoon_frag:IA,points_vert:RA,points_frag:TA,shadow_vert:DA,shadow_frag:yA,sprite_vert:LA,sprite_frag:UA},re={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Pt={basic:{uniforms:pt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:pt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:pt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:pt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:pt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:pt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:pt([re.points,re.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:pt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:pt([re.common,re.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:pt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:pt([re.sprite,re.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:pt([re.common,re.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:pt([re.lights,re.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Pt.physical={uniforms:pt([Pt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const Hi={r:0,b:0,g:0};function bA(i,e,t,n,s,r,a){const o=new Ye(0);let l=r===!0?0:1,c,A,u=null,d=0,p=null;function E(f,h){let w=!1,x=h.isScene===!0?h.background:null;x&&x.isTexture&&(x=(h.backgroundBlurriness>0?t:e).get(x)),x===null?m(o,l):x&&x.isColor&&(m(x,1),w=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||w)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Xi)?(A===void 0&&(A=new Gt(new Ei(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:$n(Pt.backgroundCube.uniforms),vertexShader:Pt.backgroundCube.vertexShader,fragmentShader:Pt.backgroundCube.fragmentShader,side:Mt,depthTest:!1,depthWrite:!1,fog:!1})),A.geometry.deleteAttribute("normal"),A.geometry.deleteAttribute("uv"),A.onBeforeRender=function(I,T,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(A.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(A)),A.material.uniforms.envMap.value=x,A.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,A.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,A.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,A.material.toneMapped=Ve.getTransfer(x.colorSpace)!==Ke,(u!==x||d!==x.version||p!==i.toneMapping)&&(A.material.needsUpdate=!0,u=x,d=x.version,p=i.toneMapping),A.layers.enableAll(),f.unshift(A,A.geometry,A.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Gt(new ns(2,2),new Ot({name:"BackgroundMaterial",uniforms:$n(Pt.background.uniforms),vertexShader:Pt.background.vertexShader,fragmentShader:Pt.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=Ve.getTransfer(x.colorSpace)!==Ke,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,p=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function m(f,h){f.getRGB(Hi,ra(i)),n.buffers.color.setClear(Hi.r,Hi.g,Hi.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(f,h=1){o.set(f),l=h,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,m(o,l)},render:E}}function FA(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=f(null);let c=l,A=!1;function u(y,G,V,Y,te){let q=!1;if(a){const W=m(Y,V,G);c!==W&&(c=W,p(c.object)),q=h(y,Y,V,te),q&&w(y,Y,V,te)}else{const W=G.wireframe===!0;(c.geometry!==Y.id||c.program!==V.id||c.wireframe!==W)&&(c.geometry=Y.id,c.program=V.id,c.wireframe=W,q=!0)}te!==null&&t.update(te,i.ELEMENT_ARRAY_BUFFER),(q||A)&&(A=!1,k(y,G,V,Y),te!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(te).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(y){return n.isWebGL2?i.bindVertexArray(y):r.bindVertexArrayOES(y)}function E(y){return n.isWebGL2?i.deleteVertexArray(y):r.deleteVertexArrayOES(y)}function m(y,G,V){const Y=V.wireframe===!0;let te=o[y.id];te===void 0&&(te={},o[y.id]=te);let q=te[G.id];q===void 0&&(q={},te[G.id]=q);let W=q[Y];return W===void 0&&(W=f(d()),q[Y]=W),W}function f(y){const G=[],V=[],Y=[];for(let te=0;te<s;te++)G[te]=0,V[te]=0,Y[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:V,attributeDivisors:Y,object:y,attributes:{},index:null}}function h(y,G,V,Y){const te=c.attributes,q=G.attributes;let W=0;const se=V.getAttributes();for(const oe in se)if(se[oe].location>=0){const K=te[oe];let ae=q[oe];if(ae===void 0&&(oe==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),oe==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor)),K===void 0||K.attribute!==ae||ae&&K.data!==ae.data)return!0;W++}return c.attributesNum!==W||c.index!==Y}function w(y,G,V,Y){const te={},q=G.attributes;let W=0;const se=V.getAttributes();for(const oe in se)if(se[oe].location>=0){let K=q[oe];K===void 0&&(oe==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),oe==="instanceColor"&&y.instanceColor&&(K=y.instanceColor));const ae={};ae.attribute=K,K&&K.data&&(ae.data=K.data),te[oe]=ae,W++}c.attributes=te,c.attributesNum=W,c.index=Y}function x(){const y=c.newAttributes;for(let G=0,V=y.length;G<V;G++)y[G]=0}function S(y){I(y,0)}function I(y,G){const V=c.newAttributes,Y=c.enabledAttributes,te=c.attributeDivisors;V[y]=1,Y[y]===0&&(i.enableVertexAttribArray(y),Y[y]=1),te[y]!==G&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](y,G),te[y]=G)}function T(){const y=c.newAttributes,G=c.enabledAttributes;for(let V=0,Y=G.length;V<Y;V++)G[V]!==y[V]&&(i.disableVertexAttribArray(V),G[V]=0)}function D(y,G,V,Y,te,q,W){W===!0?i.vertexAttribIPointer(y,G,V,te,q):i.vertexAttribPointer(y,G,V,Y,te,q)}function k(y,G,V,Y){if(n.isWebGL2===!1&&(y.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const te=Y.attributes,q=V.getAttributes(),W=G.defaultAttributeValues;for(const se in q){const oe=q[se];if(oe.location>=0){let N=te[se];if(N===void 0&&(se==="instanceMatrix"&&y.instanceMatrix&&(N=y.instanceMatrix),se==="instanceColor"&&y.instanceColor&&(N=y.instanceColor)),N!==void 0){const K=N.normalized,ae=N.itemSize,de=t.get(N);if(de===void 0)continue;const pe=de.buffer,ye=de.type,we=de.bytesPerElement,Be=n.isWebGL2===!0&&(ye===i.INT||ye===i.UNSIGNED_INT||N.gpuType===Ho);if(N.isInterleavedBufferAttribute){const Ue=N.data,U=Ue.stride,ut=N.offset;if(Ue.isInstancedInterleavedBuffer){for(let ge=0;ge<oe.locationSize;ge++)I(oe.location+ge,Ue.meshPerAttribute);y.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let ge=0;ge<oe.locationSize;ge++)S(oe.location+ge);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let ge=0;ge<oe.locationSize;ge++)D(oe.location+ge,ae/oe.locationSize,ye,K,U*we,(ut+ae/oe.locationSize*ge)*we,Be)}else{if(N.isInstancedBufferAttribute){for(let Ue=0;Ue<oe.locationSize;Ue++)I(oe.location+Ue,N.meshPerAttribute);y.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let Ue=0;Ue<oe.locationSize;Ue++)S(oe.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let Ue=0;Ue<oe.locationSize;Ue++)D(oe.location+Ue,ae/oe.locationSize,ye,K,ae*we,ae/oe.locationSize*Ue*we,Be)}}else if(W!==void 0){const K=W[se];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(oe.location,K);break;case 3:i.vertexAttrib3fv(oe.location,K);break;case 4:i.vertexAttrib4fv(oe.location,K);break;default:i.vertexAttrib1fv(oe.location,K)}}}}T()}function M(){H();for(const y in o){const G=o[y];for(const V in G){const Y=G[V];for(const te in Y)E(Y[te].object),delete Y[te];delete G[V]}delete o[y]}}function B(y){if(o[y.id]===void 0)return;const G=o[y.id];for(const V in G){const Y=G[V];for(const te in Y)E(Y[te].object),delete Y[te];delete G[V]}delete o[y.id]}function z(y){for(const G in o){const V=o[G];if(V[y.id]===void 0)continue;const Y=V[y.id];for(const te in Y)E(Y[te].object),delete Y[te];delete V[y.id]}}function H(){j(),A=!0,c!==l&&(c=l,p(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:H,resetDefaultState:j,dispose:M,releaseStatesOfGeometry:B,releaseStatesOfProgram:z,initAttributes:x,enableAttribute:S,disableUnusedAttributes:T}}function _A(i,e,t,n){const s=n.isWebGL2;let r;function a(A){r=A}function o(A,u){i.drawArrays(r,A,u),t.update(u,r,1)}function l(A,u,d){if(d===0)return;let p,E;if(s)p=i,E="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),E="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[E](r,A,u,d),t.update(u,r,d)}function c(A,u,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let E=0;E<d;E++)this.render(A[E],u[E]);else{p.multiDrawArraysWEBGL(r,A,0,u,0,d);let E=0;for(let m=0;m<d;m++)E+=u[m];t.update(E,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function QA(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),A=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),E=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),h=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,S=a||e.has("OES_texture_float"),I=x&&S,T=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:A,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:E,maxAttributes:m,maxVertexUniforms:f,maxVaryings:h,maxFragmentUniforms:w,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:I,maxSamples:T}}function PA(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Cn,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,A(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=A(u,d,0)},this.setState=function(u,d,p){const E=u.clippingPlanes,m=u.clipIntersection,f=u.clipShadows,h=i.get(u);if(!s||E===null||E.length===0||r&&!f)r?A(null):c();else{const w=r?0:n,x=w*4;let S=h.clippingState||null;l.value=S,S=A(E,d,x,p);for(let I=0;I!==x;++I)S[I]=t[I];h.clippingState=S,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function A(u,d,p,E){const m=u!==null?u.length:0;let f=null;if(m!==0){if(f=l.value,E!==!0||f===null){const h=p+m*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(f===null||f.length<h)&&(f=new Float32Array(h));for(let x=0,S=p;x!==m;++x,S+=4)a.copy(u[x]).applyMatrix4(w,o),a.normal.toArray(f,S),f[S+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,f}}function GA(i){let e=new WeakMap;function t(a,o){return o===ks?a.mapping=Jn:o===zs&&(a.mapping=jn),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ks||o===zs)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new jl(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class is extends oa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,A=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=A*this.view.offsetY,l=o-A*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Vn=4,ho=[.125,.215,.35,.446,.526,.582],Sn=20,Fs=new is,Ao=new Ye;let _s=null,Qs=0,Ps=0;const xn=(1+Math.sqrt(5))/2,kn=1/xn,uo=[new Q(1,1,1),new Q(-1,1,1),new Q(1,1,-1),new Q(-1,1,-1),new Q(0,xn,kn),new Q(0,xn,-kn),new Q(kn,0,xn),new Q(-kn,0,xn),new Q(xn,kn,0),new Q(-xn,kn,0)];class fo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){_s=this._renderer.getRenderTarget(),Qs=this._renderer.getActiveCubeFace(),Ps=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=go(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_s,Qs,Ps),e.scissorTest=!1,ki(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Jn||e.mapping===jn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_s=this._renderer.getRenderTarget(),Qs=this._renderer.getActiveCubeFace(),Ps=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:Zn,format:_t,colorSpace:en,depthBuffer:!1},s=po(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=po(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=NA(r)),this._blurMaterial=OA(r,e,t)}return s}_compileMaterial(e){const t=new Gt(this._lodPlanes[0],e);this._renderer.compile(t,Fs)}_sceneToCubeUV(e,t,n,s){const o=new bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],A=this._renderer,u=A.autoClear,d=A.toneMapping;A.getClearColor(Ao),A.toneMapping=cn,A.autoClear=!1;const p=new Zi({name:"PMREM.Background",side:Mt,depthWrite:!1,depthTest:!1}),E=new Gt(new Ei,p);let m=!1;const f=e.background;f?f.isColor&&(p.color.copy(f),e.background=null,m=!0):(p.color.copy(Ao),m=!0);for(let h=0;h<6;h++){const w=h%3;w===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):w===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const x=this._cubeSize;ki(s,w*x,h>2?x:0,x,x),A.setRenderTarget(s),m&&A.render(E,o),A.render(e,o)}E.geometry.dispose(),E.material.dispose(),A.toneMapping=d,A.autoClear=u,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Jn||e.mapping===jn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=go());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Gt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ki(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Fs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=uo[(s-1)%uo.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const A=3,u=new Gt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,E=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Sn-1),m=r/E,f=isFinite(r)?1+Math.floor(A*m):Sn;f>Sn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Sn}`);const h=[];let w=0;for(let D=0;D<Sn;++D){const k=D/m,M=Math.exp(-k*k/2);h.push(M),D===0?w+=M:D<f&&(w+=2*M)}for(let D=0;D<h.length;D++)h[D]=h[D]/w;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=E,d.mipInt.value=x-n;const S=this._sizeLods[s],I=3*S*(s>x-Vn?s-x+Vn:0),T=4*(this._cubeSize-S);ki(t,I,T,3*S,2*S),l.setRenderTarget(t),l.render(u,Fs)}}function NA(i){const e=[],t=[],n=[];let s=i;const r=i-Vn+1+ho.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Vn?l=ho[a-i+Vn-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),A=-c,u=1+c,d=[A,A,u,A,u,u,A,A,u,u,A,u],p=6,E=6,m=3,f=2,h=1,w=new Float32Array(m*E*p),x=new Float32Array(f*E*p),S=new Float32Array(h*E*p);for(let T=0;T<p;T++){const D=T%3*2/3-1,k=T>2?0:-1,M=[D,k,0,D+2/3,k,0,D+2/3,k+1,0,D,k,0,D+2/3,k+1,0,D,k+1,0];w.set(M,m*E*T),x.set(d,f*E*T);const B=[T,T,T,T,T,T];S.set(B,h*E*T)}const I=new fn;I.setAttribute("position",new Nt(w,m)),I.setAttribute("uv",new Nt(x,f)),I.setAttribute("faceIndex",new Nt(S,h)),e.push(I),s>Vn&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function po(i,e,t){const n=new un(i,e,t);return n.texture.mapping=Xi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ki(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function OA(i,e,t){const n=new Float32Array(Sn),s=new Q(0,1,0);return new Ot({name:"SphericalGaussianBlur",defines:{n:Sn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sr(),fragmentShader:`

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
		`,blending:Xt,depthTest:!1,depthWrite:!1})}function go(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sr(),fragmentShader:`

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
		`,blending:Xt,depthTest:!1,depthWrite:!1})}function mo(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xt,depthTest:!1,depthWrite:!1})}function sr(){return`

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
	`}function YA(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ks||l===zs,A=l===Jn||l===jn;if(c||A)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new fo(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||A&&u&&s(u)){t===null&&(t=new fo(i));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let A=0;A<c;A++)o[A]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function HA(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function kA(i,e,t,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const E in d.attributes)e.remove(d.attributes[E]);for(const E in d.morphAttributes){const m=d.morphAttributes[E];for(let f=0,h=m.length;f<h;f++)e.remove(m[f])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const E in d)e.update(d[E],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const E in p){const m=p[E];for(let f=0,h=m.length;f<h;f++)e.update(m[f],i.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,E=u.attributes.position;let m=0;if(p!==null){const w=p.array;m=p.version;for(let x=0,S=w.length;x<S;x+=3){const I=w[x+0],T=w[x+1],D=w[x+2];d.push(I,T,T,D,D,I)}}else if(E!==void 0){const w=E.array;m=E.version;for(let x=0,S=w.length/3-1;x<S;x+=3){const I=x+0,T=x+1,D=x+2;d.push(I,T,T,D,D,I)}}else return;const f=new(Zo(d)?sa:ia)(d,1);f.version=m;const h=r.get(u);h&&e.remove(h),r.set(u,f)}function A(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:A}}function zA(i,e,t,n){const s=n.isWebGL2;let r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function A(p,E){i.drawElements(r,E,o,p*l),t.update(E,r,1)}function u(p,E,m){if(m===0)return;let f,h;if(s)f=i,h="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[h](r,E,o,p*l,m),t.update(E,r,m)}function d(p,E,m){if(m===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<m;h++)this.render(p[h]/l,E[h]);else{f.multiDrawElementsWEBGL(r,E,0,o,p,0,m);let h=0;for(let w=0;w<m;w++)h+=E[w];t.update(h,r,1)}}this.setMode=a,this.setIndex=c,this.render=A,this.renderInstances=u,this.renderMultiDraw=d}function VA(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function WA(i,e){return i[0]-e[0]}function KA(i,e){return Math.abs(e[1])-Math.abs(i[1])}function qA(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,a=new at,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,A,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const E=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,m=E!==void 0?E.length:0;let f=r.get(A);if(f===void 0||f.count!==m){let G=function(){j.dispose(),r.delete(A),A.removeEventListener("dispose",G)};var p=G;f!==void 0&&f.texture.dispose();const x=A.morphAttributes.position!==void 0,S=A.morphAttributes.normal!==void 0,I=A.morphAttributes.color!==void 0,T=A.morphAttributes.position||[],D=A.morphAttributes.normal||[],k=A.morphAttributes.color||[];let M=0;x===!0&&(M=1),S===!0&&(M=2),I===!0&&(M=3);let B=A.attributes.position.count*M,z=1;B>e.maxTextureSize&&(z=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const H=new Float32Array(B*z*4*m),j=new ea(H,B,z,m);j.type=ln,j.needsUpdate=!0;const y=M*4;for(let V=0;V<m;V++){const Y=T[V],te=D[V],q=k[V],W=B*z*4*V;for(let se=0;se<Y.count;se++){const oe=se*y;x===!0&&(a.fromBufferAttribute(Y,se),H[W+oe+0]=a.x,H[W+oe+1]=a.y,H[W+oe+2]=a.z,H[W+oe+3]=0),S===!0&&(a.fromBufferAttribute(te,se),H[W+oe+4]=a.x,H[W+oe+5]=a.y,H[W+oe+6]=a.z,H[W+oe+7]=0),I===!0&&(a.fromBufferAttribute(q,se),H[W+oe+8]=a.x,H[W+oe+9]=a.y,H[W+oe+10]=a.z,H[W+oe+11]=q.itemSize===4?a.w:1)}}f={count:m,texture:j,size:new He(B,z)},r.set(A,f),A.addEventListener("dispose",G)}let h=0;for(let x=0;x<d.length;x++)h+=d[x];const w=A.morphTargetsRelative?1:1-h;u.getUniforms().setValue(i,"morphTargetBaseInfluence",w),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}else{const E=d===void 0?0:d.length;let m=n[A.id];if(m===void 0||m.length!==E){m=[];for(let S=0;S<E;S++)m[S]=[S,0];n[A.id]=m}for(let S=0;S<E;S++){const I=m[S];I[0]=S,I[1]=d[S]}m.sort(KA);for(let S=0;S<8;S++)S<E&&m[S][1]?(o[S][0]=m[S][0],o[S][1]=m[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(WA);const f=A.morphAttributes.position,h=A.morphAttributes.normal;let w=0;for(let S=0;S<8;S++){const I=o[S],T=I[0],D=I[1];T!==Number.MAX_SAFE_INTEGER&&D?(f&&A.getAttribute("morphTarget"+S)!==f[T]&&A.setAttribute("morphTarget"+S,f[T]),h&&A.getAttribute("morphNormal"+S)!==h[T]&&A.setAttribute("morphNormal"+S,h[T]),s[S]=D,w+=D):(f&&A.hasAttribute("morphTarget"+S)===!0&&A.deleteAttribute("morphTarget"+S),h&&A.hasAttribute("morphNormal"+S)===!0&&A.deleteAttribute("morphNormal"+S),s[S]=0)}const x=A.morphTargetsRelative?1:1-w;u.getUniforms().setValue(i,"morphTargetBaseInfluence",x),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function JA(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,A=l.geometry,u=e.get(l,A);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class ha extends Ct{constructor(e,t,n,s,r,a,o,l,c,A){if(A=A!==void 0?A:In,A!==In&&A!==Xn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&A===In&&(n=an),n===void 0&&A===Xn&&(n=wn),super(null,s,r,a,o,l,A,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:gt,this.minFilter=l!==void 0?l:gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Aa=new Ct,ua=new ha(1,1);ua.compareFunction=jo;const fa=new ea,da=new bl,pa=new aa,Eo=[],Mo=[],Co=new Float32Array(16),xo=new Float32Array(9),vo=new Float32Array(4);function ti(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Eo[s];if(r===void 0&&(r=new Float32Array(s),Eo[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function $e(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function et(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ss(i,e){let t=Mo[e];t===void 0&&(t=new Int32Array(e),Mo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function jA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ZA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($e(t,e))return;i.uniform2fv(this.addr,e),et(t,e)}}function XA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($e(t,e))return;i.uniform3fv(this.addr,e),et(t,e)}}function $A(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($e(t,e))return;i.uniform4fv(this.addr,e),et(t,e)}}function eu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if($e(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),et(t,e)}else{if($e(t,n))return;vo.set(n),i.uniformMatrix2fv(this.addr,!1,vo),et(t,n)}}function tu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if($e(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),et(t,e)}else{if($e(t,n))return;xo.set(n),i.uniformMatrix3fv(this.addr,!1,xo),et(t,n)}}function nu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if($e(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),et(t,e)}else{if($e(t,n))return;Co.set(n),i.uniformMatrix4fv(this.addr,!1,Co),et(t,n)}}function iu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function su(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($e(t,e))return;i.uniform2iv(this.addr,e),et(t,e)}}function ru(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($e(t,e))return;i.uniform3iv(this.addr,e),et(t,e)}}function ou(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($e(t,e))return;i.uniform4iv(this.addr,e),et(t,e)}}function au(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function lu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($e(t,e))return;i.uniform2uiv(this.addr,e),et(t,e)}}function cu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($e(t,e))return;i.uniform3uiv(this.addr,e),et(t,e)}}function hu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($e(t,e))return;i.uniform4uiv(this.addr,e),et(t,e)}}function Au(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?ua:Aa;t.setTexture2D(e||r,s)}function uu(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||da,s)}function fu(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||pa,s)}function du(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||fa,s)}function pu(i){switch(i){case 5126:return jA;case 35664:return ZA;case 35665:return XA;case 35666:return $A;case 35674:return eu;case 35675:return tu;case 35676:return nu;case 5124:case 35670:return iu;case 35667:case 35671:return su;case 35668:case 35672:return ru;case 35669:case 35673:return ou;case 5125:return au;case 36294:return lu;case 36295:return cu;case 36296:return hu;case 35678:case 36198:case 36298:case 36306:case 35682:return Au;case 35679:case 36299:case 36307:return uu;case 35680:case 36300:case 36308:case 36293:return fu;case 36289:case 36303:case 36311:case 36292:return du}}function gu(i,e){i.uniform1fv(this.addr,e)}function mu(i,e){const t=ti(e,this.size,2);i.uniform2fv(this.addr,t)}function Eu(i,e){const t=ti(e,this.size,3);i.uniform3fv(this.addr,t)}function Mu(i,e){const t=ti(e,this.size,4);i.uniform4fv(this.addr,t)}function Cu(i,e){const t=ti(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function xu(i,e){const t=ti(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function vu(i,e){const t=ti(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Su(i,e){i.uniform1iv(this.addr,e)}function Bu(i,e){i.uniform2iv(this.addr,e)}function wu(i,e){i.uniform3iv(this.addr,e)}function Iu(i,e){i.uniform4iv(this.addr,e)}function Ru(i,e){i.uniform1uiv(this.addr,e)}function Tu(i,e){i.uniform2uiv(this.addr,e)}function Du(i,e){i.uniform3uiv(this.addr,e)}function yu(i,e){i.uniform4uiv(this.addr,e)}function Lu(i,e,t){const n=this.cache,s=e.length,r=ss(t,s);$e(n,r)||(i.uniform1iv(this.addr,r),et(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Aa,r[a])}function Uu(i,e,t){const n=this.cache,s=e.length,r=ss(t,s);$e(n,r)||(i.uniform1iv(this.addr,r),et(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||da,r[a])}function bu(i,e,t){const n=this.cache,s=e.length,r=ss(t,s);$e(n,r)||(i.uniform1iv(this.addr,r),et(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||pa,r[a])}function Fu(i,e,t){const n=this.cache,s=e.length,r=ss(t,s);$e(n,r)||(i.uniform1iv(this.addr,r),et(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||fa,r[a])}function _u(i){switch(i){case 5126:return gu;case 35664:return mu;case 35665:return Eu;case 35666:return Mu;case 35674:return Cu;case 35675:return xu;case 35676:return vu;case 5124:case 35670:return Su;case 35667:case 35671:return Bu;case 35668:case 35672:return wu;case 35669:case 35673:return Iu;case 5125:return Ru;case 36294:return Tu;case 36295:return Du;case 36296:return yu;case 35678:case 36198:case 36298:case 36306:case 35682:return Lu;case 35679:case 36299:case 36307:return Uu;case 35680:case 36300:case 36308:case 36293:return bu;case 36289:case 36303:case 36311:case 36292:return Fu}}class Qu{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=pu(t.type)}}class Pu{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_u(t.type)}}class Gu{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Gs=/(\w+)(\])?(\[|\.)?/g;function So(i,e){i.seq.push(e),i.map[e.id]=e}function Nu(i,e,t){const n=i.name,s=n.length;for(Gs.lastIndex=0;;){const r=Gs.exec(n),a=Gs.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){So(t,c===void 0?new Qu(o,i,e):new Pu(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Gu(o),So(t,u)),t=u}}}class Vi{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Nu(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Bo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ou=37297;let Yu=0;function Hu(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function ku(i){const e=Ve.getPrimaries(Ve.workingColorSpace),t=Ve.getPrimaries(i);let n;switch(e===t?n="":e===Ji&&t===qi?n="LinearDisplayP3ToLinearSRGB":e===qi&&t===Ji&&(n="LinearSRGBToLinearDisplayP3"),i){case en:case $i:return[n,"LinearTransferOETF"];case ot:case tr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function wo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Hu(i.getShaderSource(e),a)}else return s}function zu(i,e){const t=ku(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Vu(i,e){let t;switch(e){case nl:t="Linear";break;case il:t="Reinhard";break;case sl:t="OptimizedCineon";break;case rl:t="ACESFilmic";break;case ol:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Wu(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(li).join(`
`)}function Ku(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qu(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function li(i){return i!==""}function Io(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ro(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ju=/^[ \t]*#include +<([\w\d./]+)>/gm;function js(i){return i.replace(Ju,Zu)}const ju=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Zu(i,e){let t=Le[e];if(t===void 0){const n=ju.get(e);if(n!==void 0)t=Le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return js(t)}const Xu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function To(i){return i.replace(Xu,$u)}function $u(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Do(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ef(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===No?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ya?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kt&&(e="SHADOWMAP_TYPE_VSM"),e}function tf(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Jn:case jn:e="ENVMAP_TYPE_CUBE";break;case Xi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nf(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case jn:e="ENVMAP_MODE_REFRACTION";break}return e}function sf(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Oo:e="ENVMAP_BLENDING_MULTIPLY";break;case el:e="ENVMAP_BLENDING_MIX";break;case tl:e="ENVMAP_BLENDING_ADD";break}return e}function rf(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function of(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=ef(t),c=tf(t),A=nf(t),u=sf(t),d=rf(t),p=t.isWebGL2?"":Wu(t),E=Ku(r),m=s.createProgram();let f,h,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(li).join(`
`),f.length>0&&(f+=`
`),h=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(li).join(`
`),h.length>0&&(h+=`
`)):(f=[Do(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+A:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(li).join(`
`),h=[p,Do(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+A:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cn?"#define TONE_MAPPING":"",t.toneMapping!==cn?Le.tonemapping_pars_fragment:"",t.toneMapping!==cn?Vu("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,zu("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(li).join(`
`)),a=js(a),a=Io(a,t),a=Ro(a,t),o=js(o),o=Io(o,t),o=Ro(o,t),a=To(a),o=To(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,h=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Wr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=w+f+a,S=w+h+o,I=Bo(s,s.VERTEX_SHADER,x),T=Bo(s,s.FRAGMENT_SHADER,S);s.attachShader(m,I),s.attachShader(m,T),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function D(z){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(m).trim(),j=s.getShaderInfoLog(I).trim(),y=s.getShaderInfoLog(T).trim();let G=!0,V=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,I,T);else{const Y=wo(s,I,"vertex"),te=wo(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+H+`
`+Y+`
`+te)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(j===""||y==="")&&(V=!1);V&&(z.diagnostics={runnable:G,programLog:H,vertexShader:{log:j,prefix:f},fragmentShader:{log:y,prefix:h}})}s.deleteShader(I),s.deleteShader(T),k=new Vi(s,m),M=qu(s,m)}let k;this.getUniforms=function(){return k===void 0&&D(this),k};let M;this.getAttributes=function(){return M===void 0&&D(this),M};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(m,Ou)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yu++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=I,this.fragmentShader=T,this}let af=0;class lf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cf(e),t.set(e,n)),n}}class cf{constructor(e){this.id=af++,this.code=e,this.usedTimes=0}}function hf(i,e,t,n,s,r,a){const o=new ta,l=new lf,c=[],A=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return M===0?"uv":`uv${M}`}function f(M,B,z,H,j){const y=H.fog,G=j.geometry,V=M.isMeshStandardMaterial?H.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||V),te=Y&&Y.mapping===Xi?Y.image.height:null,q=E[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const W=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,se=W!==void 0?W.length:0;let oe=0;G.morphAttributes.position!==void 0&&(oe=1),G.morphAttributes.normal!==void 0&&(oe=2),G.morphAttributes.color!==void 0&&(oe=3);let N,K,ae,de;if(q){const ft=Pt[q];N=ft.vertexShader,K=ft.fragmentShader}else N=M.vertexShader,K=M.fragmentShader,l.update(M),ae=l.getVertexShaderID(M),de=l.getFragmentShaderID(M);const pe=i.getRenderTarget(),ye=j.isInstancedMesh===!0,we=j.isBatchedMesh===!0,Be=!!M.map,Ue=!!M.matcap,U=!!Y,ut=!!M.aoMap,ge=!!M.lightMap,Pe=!!M.bumpMap,Ce=!!M.normalMap,qe=!!M.displacementMap,Fe=!!M.emissiveMap,Te=!!M.metalnessMap,ke=!!M.roughnessMap,st=M.anisotropy>0,rt=M.clearcoat>0,v=M.iridescence>0,g=M.sheen>0,b=M.transmission>0,$=st&&!!M.anisotropyMap,J=rt&&!!M.clearcoatMap,ee=rt&&!!M.clearcoatNormalMap,ue=rt&&!!M.clearcoatRoughnessMap,ie=v&&!!M.iridescenceMap,le=v&&!!M.iridescenceThicknessMap,xe=g&&!!M.sheenColorMap,Oe=g&&!!M.sheenRoughnessMap,X=!!M.specularMap,ze=!!M.specularColorMap,Ie=!!M.specularIntensityMap,ve=b&&!!M.transmissionMap,me=b&&!!M.thicknessMap,Ae=!!M.gradientMap,Ge=!!M.alphaMap,R=M.alphaTest>0,ce=!!M.alphaHash,Z=!!M.extensions,O=!!G.attributes.uv1,ne=!!G.attributes.uv2,Me=!!G.attributes.uv3;let Ne=cn;return M.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Ne=i.toneMapping),{isWebGL2:A,shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:N,fragmentShader:K,defines:M.defines,customVertexShaderID:ae,customFragmentShaderID:de,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:we,instancing:ye,instancingColor:ye&&j.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:en,map:Be,matcap:Ue,envMap:U,envMapMode:U&&Y.mapping,envMapCubeUVHeight:te,aoMap:ut,lightMap:ge,bumpMap:Pe,normalMap:Ce,displacementMap:d&&qe,emissiveMap:Fe,normalMapObjectSpace:Ce&&M.normalMapType===Ml,normalMapTangentSpace:Ce&&M.normalMapType===El,metalnessMap:Te,roughnessMap:ke,anisotropy:st,anisotropyMap:$,clearcoat:rt,clearcoatMap:J,clearcoatNormalMap:ee,clearcoatRoughnessMap:ue,iridescence:v,iridescenceMap:ie,iridescenceThicknessMap:le,sheen:g,sheenColorMap:xe,sheenRoughnessMap:Oe,specularMap:X,specularColorMap:ze,specularIntensityMap:Ie,transmission:b,transmissionMap:ve,thicknessMap:me,gradientMap:Ae,opaque:M.transparent===!1&&M.blending===Wn,alphaMap:Ge,alphaTest:R,alphaHash:ce,combine:M.combine,mapUv:Be&&m(M.map.channel),aoMapUv:ut&&m(M.aoMap.channel),lightMapUv:ge&&m(M.lightMap.channel),bumpMapUv:Pe&&m(M.bumpMap.channel),normalMapUv:Ce&&m(M.normalMap.channel),displacementMapUv:qe&&m(M.displacementMap.channel),emissiveMapUv:Fe&&m(M.emissiveMap.channel),metalnessMapUv:Te&&m(M.metalnessMap.channel),roughnessMapUv:ke&&m(M.roughnessMap.channel),anisotropyMapUv:$&&m(M.anisotropyMap.channel),clearcoatMapUv:J&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:ee&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:le&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&m(M.sheenRoughnessMap.channel),specularMapUv:X&&m(M.specularMap.channel),specularColorMapUv:ze&&m(M.specularColorMap.channel),specularIntensityMapUv:Ie&&m(M.specularIntensityMap.channel),transmissionMapUv:ve&&m(M.transmissionMap.channel),thicknessMapUv:me&&m(M.thicknessMap.channel),alphaMapUv:Ge&&m(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ce||st),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:O,vertexUv2s:ne,vertexUv3s:Me,pointsUvs:j.isPoints===!0&&!!G.attributes.uv&&(Be||Ge),fog:!!y,useFog:M.fog===!0,fogExp2:y&&y.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:j.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:oe,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ne,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Be&&M.map.isVideoTexture===!0&&Ve.getTransfer(M.map.colorSpace)===Ke,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===qt,flipSided:M.side===Mt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Z&&M.extensions.derivatives===!0,extensionFragDepth:Z&&M.extensions.fragDepth===!0,extensionDrawBuffers:Z&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Z&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:A||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:A||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:A||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const B=[];if(M.shaderID?B.push(M.shaderID):(B.push(M.customVertexShaderID),B.push(M.customFragmentShaderID)),M.defines!==void 0)for(const z in M.defines)B.push(z),B.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(w(B,M),x(B,M),B.push(i.outputColorSpace)),B.push(M.customProgramCacheKey),B.join()}function w(M,B){M.push(B.precision),M.push(B.outputColorSpace),M.push(B.envMapMode),M.push(B.envMapCubeUVHeight),M.push(B.mapUv),M.push(B.alphaMapUv),M.push(B.lightMapUv),M.push(B.aoMapUv),M.push(B.bumpMapUv),M.push(B.normalMapUv),M.push(B.displacementMapUv),M.push(B.emissiveMapUv),M.push(B.metalnessMapUv),M.push(B.roughnessMapUv),M.push(B.anisotropyMapUv),M.push(B.clearcoatMapUv),M.push(B.clearcoatNormalMapUv),M.push(B.clearcoatRoughnessMapUv),M.push(B.iridescenceMapUv),M.push(B.iridescenceThicknessMapUv),M.push(B.sheenColorMapUv),M.push(B.sheenRoughnessMapUv),M.push(B.specularMapUv),M.push(B.specularColorMapUv),M.push(B.specularIntensityMapUv),M.push(B.transmissionMapUv),M.push(B.thicknessMapUv),M.push(B.combine),M.push(B.fogExp2),M.push(B.sizeAttenuation),M.push(B.morphTargetsCount),M.push(B.morphAttributeCount),M.push(B.numDirLights),M.push(B.numPointLights),M.push(B.numSpotLights),M.push(B.numSpotLightMaps),M.push(B.numHemiLights),M.push(B.numRectAreaLights),M.push(B.numDirLightShadows),M.push(B.numPointLightShadows),M.push(B.numSpotLightShadows),M.push(B.numSpotLightShadowsWithMaps),M.push(B.numLightProbes),M.push(B.shadowMapType),M.push(B.toneMapping),M.push(B.numClippingPlanes),M.push(B.numClipIntersection),M.push(B.depthPacking)}function x(M,B){o.disableAll(),B.isWebGL2&&o.enable(0),B.supportsVertexTextures&&o.enable(1),B.instancing&&o.enable(2),B.instancingColor&&o.enable(3),B.matcap&&o.enable(4),B.envMap&&o.enable(5),B.normalMapObjectSpace&&o.enable(6),B.normalMapTangentSpace&&o.enable(7),B.clearcoat&&o.enable(8),B.iridescence&&o.enable(9),B.alphaTest&&o.enable(10),B.vertexColors&&o.enable(11),B.vertexAlphas&&o.enable(12),B.vertexUv1s&&o.enable(13),B.vertexUv2s&&o.enable(14),B.vertexUv3s&&o.enable(15),B.vertexTangents&&o.enable(16),B.anisotropy&&o.enable(17),B.alphaHash&&o.enable(18),B.batching&&o.enable(19),M.push(o.mask),o.disableAll(),B.fog&&o.enable(0),B.useFog&&o.enable(1),B.flatShading&&o.enable(2),B.logarithmicDepthBuffer&&o.enable(3),B.skinning&&o.enable(4),B.morphTargets&&o.enable(5),B.morphNormals&&o.enable(6),B.morphColors&&o.enable(7),B.premultipliedAlpha&&o.enable(8),B.shadowMapEnabled&&o.enable(9),B.useLegacyLights&&o.enable(10),B.doubleSided&&o.enable(11),B.flipSided&&o.enable(12),B.useDepthPacking&&o.enable(13),B.dithering&&o.enable(14),B.transmission&&o.enable(15),B.sheen&&o.enable(16),B.opaque&&o.enable(17),B.pointsUvs&&o.enable(18),B.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function S(M){const B=E[M.type];let z;if(B){const H=Pt[B];z=ir.clone(H.uniforms)}else z=M.uniforms;return z}function I(M,B){let z;for(let H=0,j=c.length;H<j;H++){const y=c[H];if(y.cacheKey===B){z=y,++z.usedTimes;break}}return z===void 0&&(z=new of(i,B,M,r),c.push(z)),z}function T(M){if(--M.usedTimes===0){const B=c.indexOf(M);c[B]=c[c.length-1],c.pop(),M.destroy()}}function D(M){l.remove(M)}function k(){l.dispose()}return{getParameters:f,getProgramCacheKey:h,getUniforms:S,acquireProgram:I,releaseProgram:T,releaseShaderCache:D,programs:c,dispose:k}}function Af(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function uf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function yo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Lo(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,p,E,m,f){let h=i[e];return h===void 0?(h={id:u.id,object:u,geometry:d,material:p,groupOrder:E,renderOrder:u.renderOrder,z:m,group:f},i[e]=h):(h.id=u.id,h.object=u,h.geometry=d,h.material=p,h.groupOrder=E,h.renderOrder=u.renderOrder,h.z=m,h.group=f),e++,h}function o(u,d,p,E,m,f){const h=a(u,d,p,E,m,f);p.transmission>0?n.push(h):p.transparent===!0?s.push(h):t.push(h)}function l(u,d,p,E,m,f){const h=a(u,d,p,E,m,f);p.transmission>0?n.unshift(h):p.transparent===!0?s.unshift(h):t.unshift(h)}function c(u,d){t.length>1&&t.sort(u||uf),n.length>1&&n.sort(d||yo),s.length>1&&s.sort(d||yo)}function A(){for(let u=e,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:A,sort:c}}function ff(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Lo,i.set(n,[a])):s>=r.length?(a=new Lo,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function df(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new Ye};break;case"SpotLight":t={position:new Q,direction:new Q,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return i[e.id]=t,t}}}function pf(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let gf=0;function mf(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ef(i,e){const t=new df,n=pf(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let A=0;A<9;A++)s.probe.push(new Q);const r=new Q,a=new lt,o=new lt;function l(A,u){let d=0,p=0,E=0;for(let H=0;H<9;H++)s.probe[H].set(0,0,0);let m=0,f=0,h=0,w=0,x=0,S=0,I=0,T=0,D=0,k=0,M=0;A.sort(mf);const B=u===!0?Math.PI:1;for(let H=0,j=A.length;H<j;H++){const y=A[H],G=y.color,V=y.intensity,Y=y.distance,te=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)d+=G.r*V*B,p+=G.g*V*B,E+=G.b*V*B;else if(y.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(y.sh.coefficients[q],V);M++}else if(y.isDirectionalLight){const q=t.get(y);if(q.color.copy(y.color).multiplyScalar(y.intensity*B),y.castShadow){const W=y.shadow,se=n.get(y);se.shadowBias=W.bias,se.shadowNormalBias=W.normalBias,se.shadowRadius=W.radius,se.shadowMapSize=W.mapSize,s.directionalShadow[m]=se,s.directionalShadowMap[m]=te,s.directionalShadowMatrix[m]=y.shadow.matrix,S++}s.directional[m]=q,m++}else if(y.isSpotLight){const q=t.get(y);q.position.setFromMatrixPosition(y.matrixWorld),q.color.copy(G).multiplyScalar(V*B),q.distance=Y,q.coneCos=Math.cos(y.angle),q.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),q.decay=y.decay,s.spot[h]=q;const W=y.shadow;if(y.map&&(s.spotLightMap[D]=y.map,D++,W.updateMatrices(y),y.castShadow&&k++),s.spotLightMatrix[h]=W.matrix,y.castShadow){const se=n.get(y);se.shadowBias=W.bias,se.shadowNormalBias=W.normalBias,se.shadowRadius=W.radius,se.shadowMapSize=W.mapSize,s.spotShadow[h]=se,s.spotShadowMap[h]=te,T++}h++}else if(y.isRectAreaLight){const q=t.get(y);q.color.copy(G).multiplyScalar(V),q.halfWidth.set(y.width*.5,0,0),q.halfHeight.set(0,y.height*.5,0),s.rectArea[w]=q,w++}else if(y.isPointLight){const q=t.get(y);if(q.color.copy(y.color).multiplyScalar(y.intensity*B),q.distance=y.distance,q.decay=y.decay,y.castShadow){const W=y.shadow,se=n.get(y);se.shadowBias=W.bias,se.shadowNormalBias=W.normalBias,se.shadowRadius=W.radius,se.shadowMapSize=W.mapSize,se.shadowCameraNear=W.camera.near,se.shadowCameraFar=W.camera.far,s.pointShadow[f]=se,s.pointShadowMap[f]=te,s.pointShadowMatrix[f]=y.shadow.matrix,I++}s.point[f]=q,f++}else if(y.isHemisphereLight){const q=t.get(y);q.skyColor.copy(y.color).multiplyScalar(V*B),q.groundColor.copy(y.groundColor).multiplyScalar(V*B),s.hemi[x]=q,x++}}w>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=re.LTC_FLOAT_1,s.rectAreaLTC2=re.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=re.LTC_HALF_1,s.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=E;const z=s.hash;(z.directionalLength!==m||z.pointLength!==f||z.spotLength!==h||z.rectAreaLength!==w||z.hemiLength!==x||z.numDirectionalShadows!==S||z.numPointShadows!==I||z.numSpotShadows!==T||z.numSpotMaps!==D||z.numLightProbes!==M)&&(s.directional.length=m,s.spot.length=h,s.rectArea.length=w,s.point.length=f,s.hemi.length=x,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=T+D-k,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=M,z.directionalLength=m,z.pointLength=f,z.spotLength=h,z.rectAreaLength=w,z.hemiLength=x,z.numDirectionalShadows=S,z.numPointShadows=I,z.numSpotShadows=T,z.numSpotMaps=D,z.numLightProbes=M,s.version=gf++)}function c(A,u){let d=0,p=0,E=0,m=0,f=0;const h=u.matrixWorldInverse;for(let w=0,x=A.length;w<x;w++){const S=A[w];if(S.isDirectionalLight){const I=s.directional[d];I.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(h),d++}else if(S.isSpotLight){const I=s.spot[E];I.position.setFromMatrixPosition(S.matrixWorld),I.position.applyMatrix4(h),I.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(h),E++}else if(S.isRectAreaLight){const I=s.rectArea[m];I.position.setFromMatrixPosition(S.matrixWorld),I.position.applyMatrix4(h),o.identity(),a.copy(S.matrixWorld),a.premultiply(h),o.extractRotation(a),I.halfWidth.set(S.width*.5,0,0),I.halfHeight.set(0,S.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){const I=s.point[p];I.position.setFromMatrixPosition(S.matrixWorld),I.position.applyMatrix4(h),p++}else if(S.isHemisphereLight){const I=s.hemi[f];I.direction.setFromMatrixPosition(S.matrixWorld),I.direction.transformDirection(h),f++}}}return{setup:l,setupView:c,state:s}}function Uo(i,e){const t=new Ef(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Mf(i,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new Uo(i,e),t.set(r,[l])):a>=o.length?(l=new Uo(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class Cf extends ts{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xf extends ts{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sf=`uniform sampler2D shadow_pass;
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
}`;function Bf(i,e,t){let n=new la;const s=new He,r=new He,a=new at,o=new Cf({depthPacking:ml}),l=new xf,c={},A=t.maxTextureSize,u={[An]:Mt,[Mt]:An,[qt]:qt},d=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:vf,fragmentShader:Sf}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const E=new fn;E.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Gt(E,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=No;let h=this.type;this.render=function(I,T,D){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||I.length===0)return;const k=i.getRenderTarget(),M=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Xt),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const H=h!==Kt&&this.type===Kt,j=h===Kt&&this.type!==Kt;for(let y=0,G=I.length;y<G;y++){const V=I[y],Y=V.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const te=Y.getFrameExtents();if(s.multiply(te),r.copy(Y.mapSize),(s.x>A||s.y>A)&&(s.x>A&&(r.x=Math.floor(A/te.x),s.x=r.x*te.x,Y.mapSize.x=r.x),s.y>A&&(r.y=Math.floor(A/te.y),s.y=r.y*te.y,Y.mapSize.y=r.y)),Y.map===null||H===!0||j===!0){const W=this.type!==Kt?{minFilter:gt,magFilter:gt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new un(s.x,s.y,W),Y.map.texture.name=V.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const q=Y.getViewportCount();for(let W=0;W<q;W++){const se=Y.getViewport(W);a.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),z.viewport(a),Y.updateMatrices(V,W),n=Y.getFrustum(),S(T,D,Y.camera,V,this.type)}Y.isPointLightShadow!==!0&&this.type===Kt&&w(Y,D),Y.needsUpdate=!1}h=this.type,f.needsUpdate=!1,i.setRenderTarget(k,M,B)};function w(I,T){const D=e.update(m);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new un(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(T,null,D,d,m,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(T,null,D,p,m,null)}function x(I,T,D,k){let M=null;const B=D.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(B!==void 0)M=B;else if(M=D.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const z=M.uuid,H=T.uuid;let j=c[z];j===void 0&&(j={},c[z]=j);let y=j[H];y===void 0&&(y=M.clone(),j[H]=y),M=y}if(M.visible=T.visible,M.wireframe=T.wireframe,k===Kt?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=i.properties.get(M);z.light=D}return M}function S(I,T,D,k,M){if(I.visible===!1)return;if(I.layers.test(T.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&M===Kt)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,I.matrixWorld);const H=e.update(I),j=I.material;if(Array.isArray(j)){const y=H.groups;for(let G=0,V=y.length;G<V;G++){const Y=y[G],te=j[Y.materialIndex];if(te&&te.visible){const q=x(I,te,k,M);I.onBeforeShadow(i,I,T,D,H,q,Y),i.renderBufferDirect(D,null,H,q,I,Y),I.onAfterShadow(i,I,T,D,H,q,Y)}}}else if(j.visible){const y=x(I,j,k,M);I.onBeforeShadow(i,I,T,D,H,y,null),i.renderBufferDirect(D,null,H,y,I,null),I.onAfterShadow(i,I,T,D,H,y,null)}}const z=I.children;for(let H=0,j=z.length;H<j;H++)S(z[H],T,D,k,M)}}function wf(i,e,t){const n=t.isWebGL2;function s(){let R=!1;const ce=new at;let Z=null;const O=new at(0,0,0,0);return{setMask:function(ne){Z!==ne&&!R&&(i.colorMask(ne,ne,ne,ne),Z=ne)},setLocked:function(ne){R=ne},setClear:function(ne,Me,Ne,tt,ft){ft===!0&&(ne*=tt,Me*=tt,Ne*=tt),ce.set(ne,Me,Ne,tt),O.equals(ce)===!1&&(i.clearColor(ne,Me,Ne,tt),O.copy(ce))},reset:function(){R=!1,Z=null,O.set(-1,0,0,0)}}}function r(){let R=!1,ce=null,Z=null,O=null;return{setTest:function(ne){ne?we(i.DEPTH_TEST):Be(i.DEPTH_TEST)},setMask:function(ne){ce!==ne&&!R&&(i.depthMask(ne),ce=ne)},setFunc:function(ne){if(Z!==ne){switch(ne){case Ka:i.depthFunc(i.NEVER);break;case qa:i.depthFunc(i.ALWAYS);break;case Ja:i.depthFunc(i.LESS);break;case Wi:i.depthFunc(i.LEQUAL);break;case ja:i.depthFunc(i.EQUAL);break;case Za:i.depthFunc(i.GEQUAL);break;case Xa:i.depthFunc(i.GREATER);break;case $a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ne}},setLocked:function(ne){R=ne},setClear:function(ne){O!==ne&&(i.clearDepth(ne),O=ne)},reset:function(){R=!1,ce=null,Z=null,O=null}}}function a(){let R=!1,ce=null,Z=null,O=null,ne=null,Me=null,Ne=null,tt=null,ft=null;return{setTest:function(We){R||(We?we(i.STENCIL_TEST):Be(i.STENCIL_TEST))},setMask:function(We){ce!==We&&!R&&(i.stencilMask(We),ce=We)},setFunc:function(We,dt,Qt){(Z!==We||O!==dt||ne!==Qt)&&(i.stencilFunc(We,dt,Qt),Z=We,O=dt,ne=Qt)},setOp:function(We,dt,Qt){(Me!==We||Ne!==dt||tt!==Qt)&&(i.stencilOp(We,dt,Qt),Me=We,Ne=dt,tt=Qt)},setLocked:function(We){R=We},setClear:function(We){ft!==We&&(i.clearStencil(We),ft=We)},reset:function(){R=!1,ce=null,Z=null,O=null,ne=null,Me=null,Ne=null,tt=null,ft=null}}}const o=new s,l=new r,c=new a,A=new WeakMap,u=new WeakMap;let d={},p={},E=new WeakMap,m=[],f=null,h=!1,w=null,x=null,S=null,I=null,T=null,D=null,k=null,M=new Ye(0,0,0),B=0,z=!1,H=null,j=null,y=null,G=null,V=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,q=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(W)[1]),te=q>=1):W.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),te=q>=2);let se=null,oe={};const N=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),ae=new at().fromArray(N),de=new at().fromArray(K);function pe(R,ce,Z,O){const ne=new Uint8Array(4),Me=i.createTexture();i.bindTexture(R,Me),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<Z;Ne++)n&&(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)?i.texImage3D(ce,0,i.RGBA,1,1,O,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(ce+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return Me}const ye={};ye[i.TEXTURE_2D]=pe(i.TEXTURE_2D,i.TEXTURE_2D,1),ye[i.TEXTURE_CUBE_MAP]=pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ye[i.TEXTURE_2D_ARRAY]=pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ye[i.TEXTURE_3D]=pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),we(i.DEPTH_TEST),l.setFunc(Wi),Fe(!1),Te(ur),we(i.CULL_FACE),Ce(Xt);function we(R){d[R]!==!0&&(i.enable(R),d[R]=!0)}function Be(R){d[R]!==!1&&(i.disable(R),d[R]=!1)}function Ue(R,ce){return p[R]!==ce?(i.bindFramebuffer(R,ce),p[R]=ce,n&&(R===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ce),R===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ce)),!0):!1}function U(R,ce){let Z=m,O=!1;if(R)if(Z=E.get(ce),Z===void 0&&(Z=[],E.set(ce,Z)),R.isWebGLMultipleRenderTargets){const ne=R.texture;if(Z.length!==ne.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,Ne=ne.length;Me<Ne;Me++)Z[Me]=i.COLOR_ATTACHMENT0+Me;Z.length=ne.length,O=!0}}else Z[0]!==i.COLOR_ATTACHMENT0&&(Z[0]=i.COLOR_ATTACHMENT0,O=!0);else Z[0]!==i.BACK&&(Z[0]=i.BACK,O=!0);O&&(t.isWebGL2?i.drawBuffers(Z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))}function ut(R){return f!==R?(i.useProgram(R),f=R,!0):!1}const ge={[vn]:i.FUNC_ADD,[Ua]:i.FUNC_SUBTRACT,[ba]:i.FUNC_REVERSE_SUBTRACT};if(n)ge[gr]=i.MIN,ge[mr]=i.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(ge[gr]=R.MIN_EXT,ge[mr]=R.MAX_EXT)}const Pe={[Fa]:i.ZERO,[_a]:i.ONE,[Qa]:i.SRC_COLOR,[Ys]:i.SRC_ALPHA,[Ha]:i.SRC_ALPHA_SATURATE,[Oa]:i.DST_COLOR,[Ga]:i.DST_ALPHA,[Pa]:i.ONE_MINUS_SRC_COLOR,[Hs]:i.ONE_MINUS_SRC_ALPHA,[Ya]:i.ONE_MINUS_DST_COLOR,[Na]:i.ONE_MINUS_DST_ALPHA,[ka]:i.CONSTANT_COLOR,[za]:i.ONE_MINUS_CONSTANT_COLOR,[Va]:i.CONSTANT_ALPHA,[Wa]:i.ONE_MINUS_CONSTANT_ALPHA};function Ce(R,ce,Z,O,ne,Me,Ne,tt,ft,We){if(R===Xt){h===!0&&(Be(i.BLEND),h=!1);return}if(h===!1&&(we(i.BLEND),h=!0),R!==La){if(R!==w||We!==z){if((x!==vn||T!==vn)&&(i.blendEquation(i.FUNC_ADD),x=vn,T=vn),We)switch(R){case Wn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fr:i.blendFunc(i.ONE,i.ONE);break;case dr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pr:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Wn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case dr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pr:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}S=null,I=null,D=null,k=null,M.set(0,0,0),B=0,w=R,z=We}return}ne=ne||ce,Me=Me||Z,Ne=Ne||O,(ce!==x||ne!==T)&&(i.blendEquationSeparate(ge[ce],ge[ne]),x=ce,T=ne),(Z!==S||O!==I||Me!==D||Ne!==k)&&(i.blendFuncSeparate(Pe[Z],Pe[O],Pe[Me],Pe[Ne]),S=Z,I=O,D=Me,k=Ne),(tt.equals(M)===!1||ft!==B)&&(i.blendColor(tt.r,tt.g,tt.b,ft),M.copy(tt),B=ft),w=R,z=!1}function qe(R,ce){R.side===qt?Be(i.CULL_FACE):we(i.CULL_FACE);let Z=R.side===Mt;ce&&(Z=!Z),Fe(Z),R.blending===Wn&&R.transparent===!1?Ce(Xt):Ce(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),o.setMask(R.colorWrite);const O=R.stencilWrite;c.setTest(O),O&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),st(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?we(i.SAMPLE_ALPHA_TO_COVERAGE):Be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(R){H!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),H=R)}function Te(R){R!==Ta?(we(i.CULL_FACE),R!==j&&(R===ur?i.cullFace(i.BACK):R===Da?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Be(i.CULL_FACE),j=R}function ke(R){R!==y&&(te&&i.lineWidth(R),y=R)}function st(R,ce,Z){R?(we(i.POLYGON_OFFSET_FILL),(G!==ce||V!==Z)&&(i.polygonOffset(ce,Z),G=ce,V=Z)):Be(i.POLYGON_OFFSET_FILL)}function rt(R){R?we(i.SCISSOR_TEST):Be(i.SCISSOR_TEST)}function v(R){R===void 0&&(R=i.TEXTURE0+Y-1),se!==R&&(i.activeTexture(R),se=R)}function g(R,ce,Z){Z===void 0&&(se===null?Z=i.TEXTURE0+Y-1:Z=se);let O=oe[Z];O===void 0&&(O={type:void 0,texture:void 0},oe[Z]=O),(O.type!==R||O.texture!==ce)&&(se!==Z&&(i.activeTexture(Z),se=Z),i.bindTexture(R,ce||ye[R]),O.type=R,O.texture=ce)}function b(){const R=oe[se];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ee(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ie(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function le(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xe(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Oe(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function X(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ze(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ie(R){ae.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),ae.copy(R))}function ve(R){de.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),de.copy(R))}function me(R,ce){let Z=u.get(ce);Z===void 0&&(Z=new WeakMap,u.set(ce,Z));let O=Z.get(R);O===void 0&&(O=i.getUniformBlockIndex(ce,R.name),Z.set(R,O))}function Ae(R,ce){const O=u.get(ce).get(R);A.get(ce)!==O&&(i.uniformBlockBinding(ce,O,R.__bindingPointIndex),A.set(ce,O))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},se=null,oe={},p={},E=new WeakMap,m=[],f=null,h=!1,w=null,x=null,S=null,I=null,T=null,D=null,k=null,M=new Ye(0,0,0),B=0,z=!1,H=null,j=null,y=null,G=null,V=null,ae.set(0,0,i.canvas.width,i.canvas.height),de.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:we,disable:Be,bindFramebuffer:Ue,drawBuffers:U,useProgram:ut,setBlending:Ce,setMaterial:qe,setFlipSided:Fe,setCullFace:Te,setLineWidth:ke,setPolygonOffset:st,setScissorTest:rt,activeTexture:v,bindTexture:g,unbindTexture:b,compressedTexImage2D:$,compressedTexImage3D:J,texImage2D:X,texImage3D:ze,updateUBOMapping:me,uniformBlockBinding:Ae,texStorage2D:xe,texStorage3D:Oe,texSubImage2D:ee,texSubImage3D:ue,compressedTexSubImage2D:ie,compressedTexSubImage3D:le,scissor:Ie,viewport:ve,reset:Ge}}function If(i,e,t,n,s,r,a){const o=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,A=s.maxTextureSize,u=s.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),E=new WeakMap;let m;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(v,g){return h?new OffscreenCanvas(v,g):di("canvas")}function x(v,g,b,$){let J=1;if((v.width>$||v.height>$)&&(J=$/Math.max(v.width,v.height)),J<1||g===!0)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap){const ee=g?Js:Math.floor,ue=ee(J*v.width),ie=ee(J*v.height);m===void 0&&(m=w(ue,ie));const le=b?w(ue,ie):m;return le.width=ue,le.height=ie,le.getContext("2d").drawImage(v,0,0,ue,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+v.width+"x"+v.height+") to ("+ue+"x"+ie+")."),le}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+v.width+"x"+v.height+")."),v;return v}function S(v){return Kr(v.width)&&Kr(v.height)}function I(v){return o?!1:v.wrapS!==Ft||v.wrapT!==Ft||v.minFilter!==gt&&v.minFilter!==Rt}function T(v,g){return v.generateMipmaps&&g&&v.minFilter!==gt&&v.minFilter!==Rt}function D(v){i.generateMipmap(v)}function k(v,g,b,$,J=!1){if(o===!1)return g;if(v!==null){if(i[v]!==void 0)return i[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let ee=g;if(g===i.RED&&(b===i.FLOAT&&(ee=i.R32F),b===i.HALF_FLOAT&&(ee=i.R16F),b===i.UNSIGNED_BYTE&&(ee=i.R8)),g===i.RED_INTEGER&&(b===i.UNSIGNED_BYTE&&(ee=i.R8UI),b===i.UNSIGNED_SHORT&&(ee=i.R16UI),b===i.UNSIGNED_INT&&(ee=i.R32UI),b===i.BYTE&&(ee=i.R8I),b===i.SHORT&&(ee=i.R16I),b===i.INT&&(ee=i.R32I)),g===i.RG&&(b===i.FLOAT&&(ee=i.RG32F),b===i.HALF_FLOAT&&(ee=i.RG16F),b===i.UNSIGNED_BYTE&&(ee=i.RG8)),g===i.RGBA){const ue=J?Ki:Ve.getTransfer($);b===i.FLOAT&&(ee=i.RGBA32F),b===i.HALF_FLOAT&&(ee=i.RGBA16F),b===i.UNSIGNED_BYTE&&(ee=ue===Ke?i.SRGB8_ALPHA8:i.RGBA8),b===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),b===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function M(v,g,b){return T(v,b)===!0||v.isFramebufferTexture&&v.minFilter!==gt&&v.minFilter!==Rt?Math.log2(Math.max(g.width,g.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?g.mipmaps.length:1}function B(v){return v===gt||v===Er||v===cs?i.NEAREST:i.LINEAR}function z(v){const g=v.target;g.removeEventListener("dispose",z),j(g),g.isVideoTexture&&E.delete(g)}function H(v){const g=v.target;g.removeEventListener("dispose",H),G(g)}function j(v){const g=n.get(v);if(g.__webglInit===void 0)return;const b=v.source,$=f.get(b);if($){const J=$[g.__cacheKey];J.usedTimes--,J.usedTimes===0&&y(v),Object.keys($).length===0&&f.delete(b)}n.remove(v)}function y(v){const g=n.get(v);i.deleteTexture(g.__webglTexture);const b=v.source,$=f.get(b);delete $[g.__cacheKey],a.memory.textures--}function G(v){const g=v.texture,b=n.get(v),$=n.get(g);if($.__webglTexture!==void 0&&(i.deleteTexture($.__webglTexture),a.memory.textures--),v.depthTexture&&v.depthTexture.dispose(),v.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(b.__webglFramebuffer[J]))for(let ee=0;ee<b.__webglFramebuffer[J].length;ee++)i.deleteFramebuffer(b.__webglFramebuffer[J][ee]);else i.deleteFramebuffer(b.__webglFramebuffer[J]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[J])}else{if(Array.isArray(b.__webglFramebuffer))for(let J=0;J<b.__webglFramebuffer.length;J++)i.deleteFramebuffer(b.__webglFramebuffer[J]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let J=0;J<b.__webglColorRenderbuffer.length;J++)b.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[J]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}if(v.isWebGLMultipleRenderTargets)for(let J=0,ee=g.length;J<ee;J++){const ue=n.get(g[J]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),a.memory.textures--),n.remove(g[J])}n.remove(g),n.remove(v)}let V=0;function Y(){V=0}function te(){const v=V;return v>=l&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+l),V+=1,v}function q(v){const g=[];return g.push(v.wrapS),g.push(v.wrapT),g.push(v.wrapR||0),g.push(v.magFilter),g.push(v.minFilter),g.push(v.anisotropy),g.push(v.internalFormat),g.push(v.format),g.push(v.type),g.push(v.generateMipmaps),g.push(v.premultiplyAlpha),g.push(v.flipY),g.push(v.unpackAlignment),g.push(v.colorSpace),g.join()}function W(v,g){const b=n.get(v);if(v.isVideoTexture&&st(v),v.isRenderTargetTexture===!1&&v.version>0&&b.__version!==v.version){const $=v.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(b,v,g);return}}t.bindTexture(i.TEXTURE_2D,b.__webglTexture,i.TEXTURE0+g)}function se(v,g){const b=n.get(v);if(v.version>0&&b.__version!==v.version){we(b,v,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,b.__webglTexture,i.TEXTURE0+g)}function oe(v,g){const b=n.get(v);if(v.version>0&&b.__version!==v.version){we(b,v,g);return}t.bindTexture(i.TEXTURE_3D,b.__webglTexture,i.TEXTURE0+g)}function N(v,g){const b=n.get(v);if(v.version>0&&b.__version!==v.version){Be(b,v,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+g)}const K={[Vs]:i.REPEAT,[Ft]:i.CLAMP_TO_EDGE,[Ws]:i.MIRRORED_REPEAT},ae={[gt]:i.NEAREST,[Er]:i.NEAREST_MIPMAP_NEAREST,[cs]:i.NEAREST_MIPMAP_LINEAR,[Rt]:i.LINEAR,[al]:i.LINEAR_MIPMAP_NEAREST,[fi]:i.LINEAR_MIPMAP_LINEAR},de={[Cl]:i.NEVER,[Il]:i.ALWAYS,[xl]:i.LESS,[jo]:i.LEQUAL,[vl]:i.EQUAL,[wl]:i.GEQUAL,[Sl]:i.GREATER,[Bl]:i.NOTEQUAL};function pe(v,g,b){if(b?(i.texParameteri(v,i.TEXTURE_WRAP_S,K[g.wrapS]),i.texParameteri(v,i.TEXTURE_WRAP_T,K[g.wrapT]),(v===i.TEXTURE_3D||v===i.TEXTURE_2D_ARRAY)&&i.texParameteri(v,i.TEXTURE_WRAP_R,K[g.wrapR]),i.texParameteri(v,i.TEXTURE_MAG_FILTER,ae[g.magFilter]),i.texParameteri(v,i.TEXTURE_MIN_FILTER,ae[g.minFilter])):(i.texParameteri(v,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(v,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(v===i.TEXTURE_3D||v===i.TEXTURE_2D_ARRAY)&&i.texParameteri(v,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(g.wrapS!==Ft||g.wrapT!==Ft)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(v,i.TEXTURE_MAG_FILTER,B(g.magFilter)),i.texParameteri(v,i.TEXTURE_MIN_FILTER,B(g.minFilter)),g.minFilter!==gt&&g.minFilter!==Rt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(i.texParameteri(v,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(v,i.TEXTURE_COMPARE_FUNC,de[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===gt||g.minFilter!==cs&&g.minFilter!==fi||g.type===ln&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===Zn&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||n.get(g).__currentAnisotropy)&&(i.texParameterf(v,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy)}}function ye(v,g){let b=!1;v.__webglInit===void 0&&(v.__webglInit=!0,g.addEventListener("dispose",z));const $=g.source;let J=f.get($);J===void 0&&(J={},f.set($,J));const ee=q(g);if(ee!==v.__cacheKey){J[ee]===void 0&&(J[ee]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,b=!0),J[ee].usedTimes++;const ue=J[v.__cacheKey];ue!==void 0&&(J[v.__cacheKey].usedTimes--,ue.usedTimes===0&&y(g)),v.__cacheKey=ee,v.__webglTexture=J[ee].texture}return b}function we(v,g,b){let $=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&($=i.TEXTURE_3D);const J=ye(v,g),ee=g.source;t.bindTexture($,v.__webglTexture,i.TEXTURE0+b);const ue=n.get(ee);if(ee.version!==ue.__version||J===!0){t.activeTexture(i.TEXTURE0+b);const ie=Ve.getPrimaries(Ve.workingColorSpace),le=g.colorSpace===Tt?null:Ve.getPrimaries(g.colorSpace),xe=g.colorSpace===Tt||ie===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Oe=I(g)&&S(g.image)===!1;let X=x(g.image,Oe,!1,A);X=rt(g,X);const ze=S(X)||o,Ie=r.convert(g.format,g.colorSpace);let ve=r.convert(g.type),me=k(g.internalFormat,Ie,ve,g.colorSpace,g.isVideoTexture);pe($,g,ze);let Ae;const Ge=g.mipmaps,R=o&&g.isVideoTexture!==!0&&me!==qo,ce=ue.__version===void 0||J===!0,Z=M(g,X,ze);if(g.isDepthTexture)me=i.DEPTH_COMPONENT,o?g.type===ln?me=i.DEPTH_COMPONENT32F:g.type===an?me=i.DEPTH_COMPONENT24:g.type===wn?me=i.DEPTH24_STENCIL8:me=i.DEPTH_COMPONENT16:g.type===ln&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===In&&me===i.DEPTH_COMPONENT&&g.type!==er&&g.type!==an&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=an,ve=r.convert(g.type)),g.format===Xn&&me===i.DEPTH_COMPONENT&&(me=i.DEPTH_STENCIL,g.type!==wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=wn,ve=r.convert(g.type))),ce&&(R?t.texStorage2D(i.TEXTURE_2D,1,me,X.width,X.height):t.texImage2D(i.TEXTURE_2D,0,me,X.width,X.height,0,Ie,ve,null));else if(g.isDataTexture)if(Ge.length>0&&ze){R&&ce&&t.texStorage2D(i.TEXTURE_2D,Z,me,Ge[0].width,Ge[0].height);for(let O=0,ne=Ge.length;O<ne;O++)Ae=Ge[O],R?t.texSubImage2D(i.TEXTURE_2D,O,0,0,Ae.width,Ae.height,Ie,ve,Ae.data):t.texImage2D(i.TEXTURE_2D,O,me,Ae.width,Ae.height,0,Ie,ve,Ae.data);g.generateMipmaps=!1}else R?(ce&&t.texStorage2D(i.TEXTURE_2D,Z,me,X.width,X.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,X.width,X.height,Ie,ve,X.data)):t.texImage2D(i.TEXTURE_2D,0,me,X.width,X.height,0,Ie,ve,X.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){R&&ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Z,me,Ge[0].width,Ge[0].height,X.depth);for(let O=0,ne=Ge.length;O<ne;O++)Ae=Ge[O],g.format!==_t?Ie!==null?R?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,Ae.width,Ae.height,X.depth,Ie,Ae.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,O,me,Ae.width,Ae.height,X.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?t.texSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,Ae.width,Ae.height,X.depth,Ie,ve,Ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,O,me,Ae.width,Ae.height,X.depth,0,Ie,ve,Ae.data)}else{R&&ce&&t.texStorage2D(i.TEXTURE_2D,Z,me,Ge[0].width,Ge[0].height);for(let O=0,ne=Ge.length;O<ne;O++)Ae=Ge[O],g.format!==_t?Ie!==null?R?t.compressedTexSubImage2D(i.TEXTURE_2D,O,0,0,Ae.width,Ae.height,Ie,Ae.data):t.compressedTexImage2D(i.TEXTURE_2D,O,me,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?t.texSubImage2D(i.TEXTURE_2D,O,0,0,Ae.width,Ae.height,Ie,ve,Ae.data):t.texImage2D(i.TEXTURE_2D,O,me,Ae.width,Ae.height,0,Ie,ve,Ae.data)}else if(g.isDataArrayTexture)R?(ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Z,me,X.width,X.height,X.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,Ie,ve,X.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,X.width,X.height,X.depth,0,Ie,ve,X.data);else if(g.isData3DTexture)R?(ce&&t.texStorage3D(i.TEXTURE_3D,Z,me,X.width,X.height,X.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,Ie,ve,X.data)):t.texImage3D(i.TEXTURE_3D,0,me,X.width,X.height,X.depth,0,Ie,ve,X.data);else if(g.isFramebufferTexture){if(ce)if(R)t.texStorage2D(i.TEXTURE_2D,Z,me,X.width,X.height);else{let O=X.width,ne=X.height;for(let Me=0;Me<Z;Me++)t.texImage2D(i.TEXTURE_2D,Me,me,O,ne,0,Ie,ve,null),O>>=1,ne>>=1}}else if(Ge.length>0&&ze){R&&ce&&t.texStorage2D(i.TEXTURE_2D,Z,me,Ge[0].width,Ge[0].height);for(let O=0,ne=Ge.length;O<ne;O++)Ae=Ge[O],R?t.texSubImage2D(i.TEXTURE_2D,O,0,0,Ie,ve,Ae):t.texImage2D(i.TEXTURE_2D,O,me,Ie,ve,Ae);g.generateMipmaps=!1}else R?(ce&&t.texStorage2D(i.TEXTURE_2D,Z,me,X.width,X.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ie,ve,X)):t.texImage2D(i.TEXTURE_2D,0,me,Ie,ve,X);T(g,ze)&&D($),ue.__version=ee.version,g.onUpdate&&g.onUpdate(g)}v.__version=g.version}function Be(v,g,b){if(g.image.length!==6)return;const $=ye(v,g),J=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,v.__webglTexture,i.TEXTURE0+b);const ee=n.get(J);if(J.version!==ee.__version||$===!0){t.activeTexture(i.TEXTURE0+b);const ue=Ve.getPrimaries(Ve.workingColorSpace),ie=g.colorSpace===Tt?null:Ve.getPrimaries(g.colorSpace),le=g.colorSpace===Tt||ue===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const xe=g.isCompressedTexture||g.image[0].isCompressedTexture,Oe=g.image[0]&&g.image[0].isDataTexture,X=[];for(let O=0;O<6;O++)!xe&&!Oe?X[O]=x(g.image[O],!1,!0,c):X[O]=Oe?g.image[O].image:g.image[O],X[O]=rt(g,X[O]);const ze=X[0],Ie=S(ze)||o,ve=r.convert(g.format,g.colorSpace),me=r.convert(g.type),Ae=k(g.internalFormat,ve,me,g.colorSpace),Ge=o&&g.isVideoTexture!==!0,R=ee.__version===void 0||$===!0;let ce=M(g,ze,Ie);pe(i.TEXTURE_CUBE_MAP,g,Ie);let Z;if(xe){Ge&&R&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,Ae,ze.width,ze.height);for(let O=0;O<6;O++){Z=X[O].mipmaps;for(let ne=0;ne<Z.length;ne++){const Me=Z[ne];g.format!==_t?ve!==null?Ge?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ne,0,0,Me.width,Me.height,ve,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ne,Ae,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ne,0,0,Me.width,Me.height,ve,me,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ne,Ae,Me.width,Me.height,0,ve,me,Me.data)}}}else{Z=g.mipmaps,Ge&&R&&(Z.length>0&&ce++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,Ae,X[0].width,X[0].height));for(let O=0;O<6;O++)if(Oe){Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,X[O].width,X[O].height,ve,me,X[O].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,Ae,X[O].width,X[O].height,0,ve,me,X[O].data);for(let ne=0;ne<Z.length;ne++){const Ne=Z[ne].image[O].image;Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ne+1,0,0,Ne.width,Ne.height,ve,me,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ne+1,Ae,Ne.width,Ne.height,0,ve,me,Ne.data)}}else{Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,ve,me,X[O]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,Ae,ve,me,X[O]);for(let ne=0;ne<Z.length;ne++){const Me=Z[ne];Ge?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ne+1,0,0,ve,me,Me.image[O]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ne+1,Ae,ve,me,Me.image[O])}}}T(g,Ie)&&D(i.TEXTURE_CUBE_MAP),ee.__version=J.version,g.onUpdate&&g.onUpdate(g)}v.__version=g.version}function Ue(v,g,b,$,J,ee){const ue=r.convert(b.format,b.colorSpace),ie=r.convert(b.type),le=k(b.internalFormat,ue,ie,b.colorSpace);if(!n.get(g).__hasExternalTextures){const Oe=Math.max(1,g.width>>ee),X=Math.max(1,g.height>>ee);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,ee,le,Oe,X,g.depth,0,ue,ie,null):t.texImage2D(J,ee,le,Oe,X,0,ue,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,v),ke(g)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,J,n.get(b).__webglTexture,0,Te(g)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,J,n.get(b).__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function U(v,g,b){if(i.bindRenderbuffer(i.RENDERBUFFER,v),g.depthBuffer&&!g.stencilBuffer){let $=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(b||ke(g)){const J=g.depthTexture;J&&J.isDepthTexture&&(J.type===ln?$=i.DEPTH_COMPONENT32F:J.type===an&&($=i.DEPTH_COMPONENT24));const ee=Te(g);ke(g)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,$,g.width,g.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,$,g.width,g.height)}else i.renderbufferStorage(i.RENDERBUFFER,$,g.width,g.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,v)}else if(g.depthBuffer&&g.stencilBuffer){const $=Te(g);b&&ke(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$,i.DEPTH24_STENCIL8,g.width,g.height):ke(g)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$,i.DEPTH24_STENCIL8,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,v)}else{const $=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let J=0;J<$.length;J++){const ee=$[J],ue=r.convert(ee.format,ee.colorSpace),ie=r.convert(ee.type),le=k(ee.internalFormat,ue,ie,ee.colorSpace),xe=Te(g);b&&ke(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,le,g.width,g.height):ke(g)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,le,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,le,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(v,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,v),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),W(g.depthTexture,0);const $=n.get(g.depthTexture).__webglTexture,J=Te(g);if(g.depthTexture.format===In)ke(g)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(g.depthTexture.format===Xn)ke(g)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function ge(v){const g=n.get(v),b=v.isWebGLCubeRenderTarget===!0;if(v.depthTexture&&!g.__autoAllocateDepthBuffer){if(b)throw new Error("target.depthTexture not supported in Cube render targets");ut(g.__webglFramebuffer,v)}else if(b){g.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[$]),g.__webglDepthbuffer[$]=i.createRenderbuffer(),U(g.__webglDepthbuffer[$],v,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=i.createRenderbuffer(),U(g.__webglDepthbuffer,v,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(v,g,b){const $=n.get(v);g!==void 0&&Ue($.__webglFramebuffer,v,v.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),b!==void 0&&ge(v)}function Ce(v){const g=v.texture,b=n.get(v),$=n.get(g);v.addEventListener("dispose",H),v.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=g.version,a.memory.textures++);const J=v.isWebGLCubeRenderTarget===!0,ee=v.isWebGLMultipleRenderTargets===!0,ue=S(v)||o;if(J){b.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(o&&g.mipmaps&&g.mipmaps.length>0){b.__webglFramebuffer[ie]=[];for(let le=0;le<g.mipmaps.length;le++)b.__webglFramebuffer[ie][le]=i.createFramebuffer()}else b.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(o&&g.mipmaps&&g.mipmaps.length>0){b.__webglFramebuffer=[];for(let ie=0;ie<g.mipmaps.length;ie++)b.__webglFramebuffer[ie]=i.createFramebuffer()}else b.__webglFramebuffer=i.createFramebuffer();if(ee)if(s.drawBuffers){const ie=v.texture;for(let le=0,xe=ie.length;le<xe;le++){const Oe=n.get(ie[le]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&v.samples>0&&ke(v)===!1){const ie=ee?g:[g];b.__webglMultisampledFramebuffer=i.createFramebuffer(),b.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,b.__webglMultisampledFramebuffer);for(let le=0;le<ie.length;le++){const xe=ie[le];b.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,b.__webglColorRenderbuffer[le]);const Oe=r.convert(xe.format,xe.colorSpace),X=r.convert(xe.type),ze=k(xe.internalFormat,Oe,X,xe.colorSpace,v.isXRRenderTarget===!0),Ie=Te(v);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,ze,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,b.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),v.depthBuffer&&(b.__webglDepthRenderbuffer=i.createRenderbuffer(),U(b.__webglDepthRenderbuffer,v,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),pe(i.TEXTURE_CUBE_MAP,g,ue);for(let ie=0;ie<6;ie++)if(o&&g.mipmaps&&g.mipmaps.length>0)for(let le=0;le<g.mipmaps.length;le++)Ue(b.__webglFramebuffer[ie][le],v,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,le);else Ue(b.__webglFramebuffer[ie],v,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);T(g,ue)&&D(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){const ie=v.texture;for(let le=0,xe=ie.length;le<xe;le++){const Oe=ie[le],X=n.get(Oe);t.bindTexture(i.TEXTURE_2D,X.__webglTexture),pe(i.TEXTURE_2D,Oe,ue),Ue(b.__webglFramebuffer,v,Oe,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,0),T(Oe,ue)&&D(i.TEXTURE_2D)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(o?ie=v.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ie,$.__webglTexture),pe(ie,g,ue),o&&g.mipmaps&&g.mipmaps.length>0)for(let le=0;le<g.mipmaps.length;le++)Ue(b.__webglFramebuffer[le],v,g,i.COLOR_ATTACHMENT0,ie,le);else Ue(b.__webglFramebuffer,v,g,i.COLOR_ATTACHMENT0,ie,0);T(g,ue)&&D(ie),t.unbindTexture()}v.depthBuffer&&ge(v)}function qe(v){const g=S(v)||o,b=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let $=0,J=b.length;$<J;$++){const ee=b[$];if(T(ee,g)){const ue=v.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ie=n.get(ee).__webglTexture;t.bindTexture(ue,ie),D(ue),t.unbindTexture()}}}function Fe(v){if(o&&v.samples>0&&ke(v)===!1){const g=v.isWebGLMultipleRenderTargets?v.texture:[v.texture],b=v.width,$=v.height;let J=i.COLOR_BUFFER_BIT;const ee=[],ue=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=n.get(v),le=v.isWebGLMultipleRenderTargets===!0;if(le)for(let xe=0;xe<g.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let xe=0;xe<g.length;xe++){ee.push(i.COLOR_ATTACHMENT0+xe),v.depthBuffer&&ee.push(ue);const Oe=ie.__ignoreDepthValues!==void 0?ie.__ignoreDepthValues:!1;if(Oe===!1&&(v.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),v.stencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),le&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ie.__webglColorRenderbuffer[xe]),Oe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ue]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ue])),le){const X=n.get(g[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,X,0)}i.blitFramebuffer(0,0,b,$,0,0,b,$,J,i.NEAREST),p&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let xe=0;xe<g.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,ie.__webglColorRenderbuffer[xe]);const Oe=n.get(g[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}}function Te(v){return Math.min(u,v.samples)}function ke(v){const g=n.get(v);return o&&v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function st(v){const g=a.render.frame;E.get(v)!==g&&(E.set(v,g),v.update())}function rt(v,g){const b=v.colorSpace,$=v.format,J=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||v.format===Ks||b!==en&&b!==Tt&&(Ve.getTransfer(b)===Ke?o===!1?e.has("EXT_sRGB")===!0&&$===_t?(v.format=Ks,v.minFilter=Rt,v.generateMipmaps=!1):g=Xo.sRGBToLinear(g):($!==_t||J!==hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",b)),g}this.allocateTextureUnit=te,this.resetTextureUnits=Y,this.setTexture2D=W,this.setTexture2DArray=se,this.setTexture3D=oe,this.setTextureCube=N,this.rebindTextures=Pe,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=ke}function Rf(i,e,t){const n=t.isWebGL2;function s(r,a=Tt){let o;const l=Ve.getTransfer(a);if(r===hn)return i.UNSIGNED_BYTE;if(r===ko)return i.UNSIGNED_SHORT_4_4_4_4;if(r===zo)return i.UNSIGNED_SHORT_5_5_5_1;if(r===ll)return i.BYTE;if(r===cl)return i.SHORT;if(r===er)return i.UNSIGNED_SHORT;if(r===Ho)return i.INT;if(r===an)return i.UNSIGNED_INT;if(r===ln)return i.FLOAT;if(r===Zn)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===hl)return i.ALPHA;if(r===_t)return i.RGBA;if(r===Al)return i.LUMINANCE;if(r===ul)return i.LUMINANCE_ALPHA;if(r===In)return i.DEPTH_COMPONENT;if(r===Xn)return i.DEPTH_STENCIL;if(r===Ks)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===fl)return i.RED;if(r===Vo)return i.RED_INTEGER;if(r===dl)return i.RG;if(r===Wo)return i.RG_INTEGER;if(r===Ko)return i.RGBA_INTEGER;if(r===hs||r===As||r===us||r===fs)if(l===Ke)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===hs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===As)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===us)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===fs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===hs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===As)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===us)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===fs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Mr||r===Cr||r===xr||r===vr)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Mr)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Cr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===xr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===vr)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===qo)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Sr||r===Br)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Sr)return l===Ke?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Br)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===wr||r===Ir||r===Rr||r===Tr||r===Dr||r===yr||r===Lr||r===Ur||r===br||r===Fr||r===_r||r===Qr||r===Pr||r===Gr)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===wr)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ir)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Rr)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Tr)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Dr)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===yr)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Lr)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ur)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===br)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Fr)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===_r)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Qr)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Pr)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Gr)return l===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ds||r===Nr||r===Or)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===ds)return l===Ke?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Nr)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Or)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===pl||r===Yr||r===Hr||r===kr)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===ds)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Yr)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Hr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===kr)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===wn?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class Tf extends bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zi extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Df={type:"move"};class Ns{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const m of e.hand.values()){const f=t.getJointPose(m,n),h=this._getHandJoint(c,m);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}const A=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=A.position.distanceTo(u.position),p=.02,E=.005;c.inputState.pinching&&d>p+E?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-E&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Df)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class yf extends ei{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,A=null,u=null,d=null,p=null,E=null;const m=t.getContextAttributes();let f=null,h=null;const w=[],x=[],S=new He;let I=null;const T=new bt;T.layers.enable(1),T.viewport=new at;const D=new bt;D.layers.enable(2),D.viewport=new at;const k=[T,D],M=new Tf;M.layers.enable(1),M.layers.enable(2);let B=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let K=w[N];return K===void 0&&(K=new Ns,w[N]=K),K.getTargetRaySpace()},this.getControllerGrip=function(N){let K=w[N];return K===void 0&&(K=new Ns,w[N]=K),K.getGripSpace()},this.getHand=function(N){let K=w[N];return K===void 0&&(K=new Ns,w[N]=K),K.getHandSpace()};function H(N){const K=x.indexOf(N.inputSource);if(K===-1)return;const ae=w[K];ae!==void 0&&(ae.update(N.inputSource,N.frame,c||a),ae.dispatchEvent({type:N.type,data:N.inputSource}))}function j(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",y);for(let N=0;N<w.length;N++){const K=x[N];K!==null&&(x[N]=null,w[N].disconnect(K))}B=null,z=null,e.setRenderTarget(f),p=null,d=null,u=null,s=null,h=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(N){if(s=N,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",j),s.addEventListener("inputsourceschange",y),m.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(S),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:s.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),h=new un(p.framebufferWidth,p.framebufferHeight,{format:_t,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,ae=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=m.stencil?Xn:In,ae=m.stencil?wn:an);const pe={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(pe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),h=new un(d.textureWidth,d.textureHeight,{format:_t,type:hn,depthTexture:new ha(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const ye=e.properties.get(h);ye.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),oe.setContext(s),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function y(N){for(let K=0;K<N.removed.length;K++){const ae=N.removed[K],de=x.indexOf(ae);de>=0&&(x[de]=null,w[de].disconnect(ae))}for(let K=0;K<N.added.length;K++){const ae=N.added[K];let de=x.indexOf(ae);if(de===-1){for(let ye=0;ye<w.length;ye++)if(ye>=x.length){x.push(ae),de=ye;break}else if(x[ye]===null){x[ye]=ae,de=ye;break}if(de===-1)break}const pe=w[de];pe&&pe.connect(ae)}}const G=new Q,V=new Q;function Y(N,K,ae){G.setFromMatrixPosition(K.matrixWorld),V.setFromMatrixPosition(ae.matrixWorld);const de=G.distanceTo(V),pe=K.projectionMatrix.elements,ye=ae.projectionMatrix.elements,we=pe[14]/(pe[10]-1),Be=pe[14]/(pe[10]+1),Ue=(pe[9]+1)/pe[5],U=(pe[9]-1)/pe[5],ut=(pe[8]-1)/pe[0],ge=(ye[8]+1)/ye[0],Pe=we*ut,Ce=we*ge,qe=de/(-ut+ge),Fe=qe*-ut;K.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Fe),N.translateZ(qe),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const Te=we+qe,ke=Be+qe,st=Pe-Fe,rt=Ce+(de-Fe),v=Ue*Be/ke*Te,g=U*Be/ke*Te;N.projectionMatrix.makePerspective(st,rt,v,g,Te,ke),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function te(N,K){K===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(K.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(s===null)return;M.near=D.near=T.near=N.near,M.far=D.far=T.far=N.far,(B!==M.near||z!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),B=M.near,z=M.far);const K=N.parent,ae=M.cameras;te(M,K);for(let de=0;de<ae.length;de++)te(ae[de],K);ae.length===2?Y(M,T,D):M.projectionMatrix.copy(T.projectionMatrix),q(N,M,K)};function q(N,K,ae){ae===null?N.matrix.copy(K.matrixWorld):(N.matrix.copy(ae.matrixWorld),N.matrix.invert(),N.matrix.multiply(K.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(K.projectionMatrix),N.projectionMatrixInverse.copy(K.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=qs*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(N){l=N,d!==null&&(d.fixedFoveation=N),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=N)};let W=null;function se(N,K){if(A=K.getViewerPose(c||a),E=K,A!==null){const ae=A.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let de=!1;ae.length!==M.cameras.length&&(M.cameras.length=0,de=!0);for(let pe=0;pe<ae.length;pe++){const ye=ae[pe];let we=null;if(p!==null)we=p.getViewport(ye);else{const Ue=u.getViewSubImage(d,ye);we=Ue.viewport,pe===0&&(e.setRenderTargetTextures(h,Ue.colorTexture,d.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(h))}let Be=k[pe];Be===void 0&&(Be=new bt,Be.layers.enable(pe),Be.viewport=new at,k[pe]=Be),Be.matrix.fromArray(ye.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(ye.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(we.x,we.y,we.width,we.height),pe===0&&(M.matrix.copy(Be.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),de===!0&&M.cameras.push(Be)}}for(let ae=0;ae<w.length;ae++){const de=x[ae],pe=w[ae];de!==null&&pe!==void 0&&pe.update(de,K,c||a)}W&&W(N,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),E=null}const oe=new ca;oe.setAnimationLoop(se),this.setAnimationLoop=function(N){W=N},this.dispose=function(){}}}function Lf(i,e){function t(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function n(f,h){h.color.getRGB(f.fogColor.value,ra(i)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function s(f,h,w,x,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(f,h):h.isMeshToonMaterial?(r(f,h),u(f,h)):h.isMeshPhongMaterial?(r(f,h),A(f,h)):h.isMeshStandardMaterial?(r(f,h),d(f,h),h.isMeshPhysicalMaterial&&p(f,h,S)):h.isMeshMatcapMaterial?(r(f,h),E(f,h)):h.isMeshDepthMaterial?r(f,h):h.isMeshDistanceMaterial?(r(f,h),m(f,h)):h.isMeshNormalMaterial?r(f,h):h.isLineBasicMaterial?(a(f,h),h.isLineDashedMaterial&&o(f,h)):h.isPointsMaterial?l(f,h,w,x):h.isSpriteMaterial?c(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,t(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===Mt&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,t(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===Mt&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,t(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,t(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const w=e.get(h).envMap;if(w&&(f.envMap.value=w,f.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap){f.lightMap.value=h.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=h.lightMapIntensity*x,t(h.lightMap,f.lightMapTransform)}h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,f.aoMapTransform))}function a(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform))}function o(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function l(f,h,w,x){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*w,f.scale.value=x*.5,h.map&&(f.map.value=h.map,t(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function c(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function A(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function u(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function d(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,f.roughnessMapTransform)),e.get(h).envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function p(f,h,w){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Mt&&f.clearcoatNormalScale.value.negate())),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=w.texture,f.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,f.specularIntensityMapTransform))}function E(f,h){h.matcap&&(f.matcap.value=h.matcap)}function m(f,h){const w=e.get(h).light;f.referencePosition.value.setFromMatrixPosition(w.matrixWorld),f.nearDistance.value=w.shadow.camera.near,f.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Uf(i,e,t,n){let s={},r={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(w,x){const S=x.program;n.uniformBlockBinding(w,S)}function c(w,x){let S=s[w.id];S===void 0&&(E(w),S=A(w),s[w.id]=S,w.addEventListener("dispose",f));const I=x.program;n.updateUBOMapping(w,I);const T=e.render.frame;r[w.id]!==T&&(d(w),r[w.id]=T)}function A(w){const x=u();w.__bindingPointIndex=x;const S=i.createBuffer(),I=w.__size,T=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,I,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,S),S}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const x=s[w.id],S=w.uniforms,I=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,D=S.length;T<D;T++){const k=S[T];if(p(k,T,I)===!0){const M=k.__offset,B=Array.isArray(k.value)?k.value:[k.value];let z=0;for(let H=0;H<B.length;H++){const j=B[H],y=m(j);typeof j=="number"?(k.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,M+z,k.__data)):j.isMatrix3?(k.__data[0]=j.elements[0],k.__data[1]=j.elements[1],k.__data[2]=j.elements[2],k.__data[3]=j.elements[0],k.__data[4]=j.elements[3],k.__data[5]=j.elements[4],k.__data[6]=j.elements[5],k.__data[7]=j.elements[0],k.__data[8]=j.elements[6],k.__data[9]=j.elements[7],k.__data[10]=j.elements[8],k.__data[11]=j.elements[0]):(j.toArray(k.__data,z),z+=y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,M,k.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,x,S){const I=w.value;if(S[x]===void 0){if(typeof I=="number")S[x]=I;else{const T=Array.isArray(I)?I:[I],D=[];for(let k=0;k<T.length;k++)D.push(T[k].clone());S[x]=D}return!0}else if(typeof I=="number"){if(S[x]!==I)return S[x]=I,!0}else{const T=Array.isArray(S[x])?S[x]:[S[x]],D=Array.isArray(I)?I:[I];for(let k=0;k<T.length;k++){const M=T[k];if(M.equals(D[k])===!1)return M.copy(D[k]),!0}}return!1}function E(w){const x=w.uniforms;let S=0;const I=16;let T=0;for(let D=0,k=x.length;D<k;D++){const M=x[D],B={boundary:0,storage:0},z=Array.isArray(M.value)?M.value:[M.value];for(let H=0,j=z.length;H<j;H++){const y=z[H],G=m(y);B.boundary+=G.boundary,B.storage+=G.storage}if(M.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=S,D>0){T=S%I;const H=I-T;T!==0&&H-B.boundary<0&&(S+=I-T,M.__offset=S)}S+=B.storage}return T=S%I,T>0&&(S+=I-T),w.__size=S,w.__cache={},this}function m(w){const x={boundary:0,storage:0};return typeof w=="number"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function f(w){const x=w.target;x.removeEventListener("dispose",f);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function h(){for(const w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}class ga{constructor(e={}){const{canvas:t=Tl(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:A="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const p=new Uint32Array(4),E=new Int32Array(4);let m=null,f=null;const h=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ot,this._useLegacyLights=!1,this.toneMapping=cn,this.toneMappingExposure=1;const x=this;let S=!1,I=0,T=0,D=null,k=-1,M=null;const B=new at,z=new at;let H=null;const j=new Ye(0);let y=0,G=t.width,V=t.height,Y=1,te=null,q=null;const W=new at(0,0,G,V),se=new at(0,0,G,V);let oe=!1;const N=new la;let K=!1,ae=!1,de=null;const pe=new lt,ye=new He,we=new Q,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return D===null?Y:1}let U=n;function ut(C,L){for(let _=0;_<C.length;_++){const P=C[_],F=t.getContext(P,L);if(F!==null)return F}return null}try{const C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:A,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$s}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",ce,!1),U===null){const L=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&L.shift(),U=ut(L,C),U===null)throw ut(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ge,Pe,Ce,qe,Fe,Te,ke,st,rt,v,g,b,$,J,ee,ue,ie,le,xe,Oe,X,ze,Ie,ve;function me(){ge=new HA(U),Pe=new QA(U,ge,e),ge.init(Pe),ze=new Rf(U,ge,Pe),Ce=new wf(U,ge,Pe),qe=new VA(U),Fe=new Af,Te=new If(U,ge,Ce,Fe,Pe,ze,qe),ke=new GA(x),st=new YA(x),rt=new $l(U,Pe),Ie=new FA(U,ge,rt,Pe),v=new kA(U,rt,qe,Ie),g=new JA(U,v,rt,qe),xe=new qA(U,Pe,Te),ue=new PA(Fe),b=new hf(x,ke,st,ge,Pe,Ie,ue),$=new Lf(x,Fe),J=new ff,ee=new Mf(ge,Pe),le=new bA(x,ke,st,Ce,g,d,l),ie=new Bf(x,g,Pe),ve=new Uf(U,qe,Pe,Ce),Oe=new _A(U,ge,qe,Pe),X=new zA(U,ge,qe,Pe),qe.programs=b.programs,x.capabilities=Pe,x.extensions=ge,x.properties=Fe,x.renderLists=J,x.shadowMap=ie,x.state=Ce,x.info=qe}me();const Ae=new yf(x,U);this.xr=Ae,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const C=ge.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ge.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(C){C!==void 0&&(Y=C,this.setSize(G,V,!1))},this.getSize=function(C){return C.set(G,V)},this.setSize=function(C,L,_=!0){if(Ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=C,V=L,t.width=Math.floor(C*Y),t.height=Math.floor(L*Y),_===!0&&(t.style.width=C+"px",t.style.height=L+"px"),this.setViewport(0,0,C,L)},this.getDrawingBufferSize=function(C){return C.set(G*Y,V*Y).floor()},this.setDrawingBufferSize=function(C,L,_){G=C,V=L,Y=_,t.width=Math.floor(C*_),t.height=Math.floor(L*_),this.setViewport(0,0,C,L)},this.getCurrentViewport=function(C){return C.copy(B)},this.getViewport=function(C){return C.copy(W)},this.setViewport=function(C,L,_,P){C.isVector4?W.set(C.x,C.y,C.z,C.w):W.set(C,L,_,P),Ce.viewport(B.copy(W).multiplyScalar(Y).floor())},this.getScissor=function(C){return C.copy(se)},this.setScissor=function(C,L,_,P){C.isVector4?se.set(C.x,C.y,C.z,C.w):se.set(C,L,_,P),Ce.scissor(z.copy(se).multiplyScalar(Y).floor())},this.getScissorTest=function(){return oe},this.setScissorTest=function(C){Ce.setScissorTest(oe=C)},this.setOpaqueSort=function(C){te=C},this.setTransparentSort=function(C){q=C},this.getClearColor=function(C){return C.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor.apply(le,arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha.apply(le,arguments)},this.clear=function(C=!0,L=!0,_=!0){let P=0;if(C){let F=!1;if(D!==null){const he=D.texture.format;F=he===Ko||he===Wo||he===Vo}if(F){const he=D.texture.type,fe=he===hn||he===an||he===er||he===wn||he===ko||he===zo,Ee=le.getClearColor(),Se=le.getClearAlpha(),be=Ee.r,Re=Ee.g,De=Ee.b;fe?(p[0]=be,p[1]=Re,p[2]=De,p[3]=Se,U.clearBufferuiv(U.COLOR,0,p)):(E[0]=be,E[1]=Re,E[2]=De,E[3]=Se,U.clearBufferiv(U.COLOR,0,E))}else P|=U.COLOR_BUFFER_BIT}L&&(P|=U.DEPTH_BUFFER_BIT),_&&(P|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),J.dispose(),ee.dispose(),Fe.dispose(),ke.dispose(),st.dispose(),g.dispose(),Ie.dispose(),ve.dispose(),b.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",ft),Ae.removeEventListener("sessionend",We),de&&(de.dispose(),de=null),dt.stop()};function Ge(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const C=qe.autoReset,L=ie.enabled,_=ie.autoUpdate,P=ie.needsUpdate,F=ie.type;me(),qe.autoReset=C,ie.enabled=L,ie.autoUpdate=_,ie.needsUpdate=P,ie.type=F}function ce(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Z(C){const L=C.target;L.removeEventListener("dispose",Z),O(L)}function O(C){ne(C),Fe.remove(C)}function ne(C){const L=Fe.get(C).programs;L!==void 0&&(L.forEach(function(_){b.releaseProgram(_)}),C.isShaderMaterial&&b.releaseShaderCache(C))}this.renderBufferDirect=function(C,L,_,P,F,he){L===null&&(L=Be);const fe=F.isMesh&&F.matrixWorld.determinant()<0,Ee=Ba(C,L,_,P,F);Ce.setMaterial(P,fe);let Se=_.index,be=1;if(P.wireframe===!0){if(Se=v.getWireframeAttribute(_),Se===void 0)return;be=2}const Re=_.drawRange,De=_.attributes.position;let Ze=Re.start*be,xt=(Re.start+Re.count)*be;he!==null&&(Ze=Math.max(Ze,he.start*be),xt=Math.min(xt,(he.start+he.count)*be)),Se!==null?(Ze=Math.max(Ze,0),xt=Math.min(xt,Se.count)):De!=null&&(Ze=Math.max(Ze,0),xt=Math.min(xt,De.count));const nt=xt-Ze;if(nt<0||nt===1/0)return;Ie.setup(F,P,Ee,_,Se);let Yt,Je=Oe;if(Se!==null&&(Yt=rt.get(Se),Je=X,Je.setIndex(Yt)),F.isMesh)P.wireframe===!0?(Ce.setLineWidth(P.wireframeLinewidth*Ue()),Je.setMode(U.LINES)):Je.setMode(U.TRIANGLES);else if(F.isLine){let _e=P.linewidth;_e===void 0&&(_e=1),Ce.setLineWidth(_e*Ue()),F.isLineSegments?Je.setMode(U.LINES):F.isLineLoop?Je.setMode(U.LINE_LOOP):Je.setMode(U.LINE_STRIP)}else F.isPoints?Je.setMode(U.POINTS):F.isSprite&&Je.setMode(U.TRIANGLES);if(F.isBatchedMesh)Je.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)Je.renderInstances(Ze,nt,F.count);else if(_.isInstancedBufferGeometry){const _e=_._maxInstanceCount!==void 0?_._maxInstanceCount:1/0,rs=Math.min(_.instanceCount,_e);Je.renderInstances(Ze,nt,rs)}else Je.render(Ze,nt)};function Me(C,L,_){C.transparent===!0&&C.side===qt&&C.forceSinglePass===!1?(C.side=Mt,C.needsUpdate=!0,xi(C,L,_),C.side=An,C.needsUpdate=!0,xi(C,L,_),C.side=qt):xi(C,L,_)}this.compile=function(C,L,_=null){_===null&&(_=C),f=ee.get(_),f.init(),w.push(f),_.traverseVisible(function(F){F.isLight&&F.layers.test(L.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),C!==_&&C.traverseVisible(function(F){F.isLight&&F.layers.test(L.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights(x._useLegacyLights);const P=new Set;return C.traverse(function(F){const he=F.material;if(he)if(Array.isArray(he))for(let fe=0;fe<he.length;fe++){const Ee=he[fe];Me(Ee,_,F),P.add(Ee)}else Me(he,_,F),P.add(he)}),w.pop(),f=null,P},this.compileAsync=function(C,L,_=null){const P=this.compile(C,L,_);return new Promise(F=>{function he(){if(P.forEach(function(fe){Fe.get(fe).currentProgram.isReady()&&P.delete(fe)}),P.size===0){F(C);return}setTimeout(he,10)}ge.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Ne=null;function tt(C){Ne&&Ne(C)}function ft(){dt.stop()}function We(){dt.start()}const dt=new ca;dt.setAnimationLoop(tt),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(C){Ne=C,Ae.setAnimationLoop(C),C===null?dt.stop():dt.start()},Ae.addEventListener("sessionstart",ft),Ae.addEventListener("sessionend",We),this.render=function(C,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(L),L=Ae.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,L,D),f=ee.get(C,w.length),f.init(),w.push(f),pe.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),N.setFromProjectionMatrix(pe),ae=this.localClippingEnabled,K=ue.init(this.clippingPlanes,ae),m=J.get(C,h.length),m.init(),h.push(m),Qt(C,L,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(te,q),this.info.render.frame++,K===!0&&ue.beginShadows();const _=f.state.shadowsArray;if(ie.render(_,C,L),K===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),le.render(m,C),f.setupLights(x._useLegacyLights),L.isArrayCamera){const P=L.cameras;for(let F=0,he=P.length;F<he;F++){const fe=P[F];or(m,C,fe,fe.viewport)}}else or(m,C,L);D!==null&&(Te.updateMultisampleRenderTarget(D),Te.updateRenderTargetMipmap(D)),C.isScene===!0&&C.onAfterRender(x,C,L),Ie.resetDefaultState(),k=-1,M=null,w.pop(),w.length>0?f=w[w.length-1]:f=null,h.pop(),h.length>0?m=h[h.length-1]:m=null};function Qt(C,L,_,P){if(C.visible===!1)return;if(C.layers.test(L.layers)){if(C.isGroup)_=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(L);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||N.intersectsSprite(C)){P&&we.setFromMatrixPosition(C.matrixWorld).applyMatrix4(pe);const fe=g.update(C),Ee=C.material;Ee.visible&&m.push(C,fe,Ee,_,we.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||N.intersectsObject(C))){const fe=g.update(C),Ee=C.material;if(P&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),we.copy(C.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),we.copy(fe.boundingSphere.center)),we.applyMatrix4(C.matrixWorld).applyMatrix4(pe)),Array.isArray(Ee)){const Se=fe.groups;for(let be=0,Re=Se.length;be<Re;be++){const De=Se[be],Ze=Ee[De.materialIndex];Ze&&Ze.visible&&m.push(C,fe,Ze,_,we.z,De)}}else Ee.visible&&m.push(C,fe,Ee,_,we.z,null)}}const he=C.children;for(let fe=0,Ee=he.length;fe<Ee;fe++)Qt(he[fe],L,_,P)}function or(C,L,_,P){const F=C.opaque,he=C.transmissive,fe=C.transparent;f.setupLightsView(_),K===!0&&ue.setGlobalState(x.clippingPlanes,_),he.length>0&&Sa(F,he,L,_),P&&Ce.viewport(B.copy(P)),F.length>0&&Ci(F,L,_),he.length>0&&Ci(he,L,_),fe.length>0&&Ci(fe,L,_),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Sa(C,L,_,P){if((_.isScene===!0?_.overrideMaterial:null)!==null)return;const he=Pe.isWebGL2;de===null&&(de=new un(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?Zn:hn,minFilter:fi,samples:he?4:0})),x.getDrawingBufferSize(ye),he?de.setSize(ye.x,ye.y):de.setSize(Js(ye.x),Js(ye.y));const fe=x.getRenderTarget();x.setRenderTarget(de),x.getClearColor(j),y=x.getClearAlpha(),y<1&&x.setClearColor(16777215,.5),x.clear();const Ee=x.toneMapping;x.toneMapping=cn,Ci(C,_,P),Te.updateMultisampleRenderTarget(de),Te.updateRenderTargetMipmap(de);let Se=!1;for(let be=0,Re=L.length;be<Re;be++){const De=L[be],Ze=De.object,xt=De.geometry,nt=De.material,Yt=De.group;if(nt.side===qt&&Ze.layers.test(P.layers)){const Je=nt.side;nt.side=Mt,nt.needsUpdate=!0,ar(Ze,_,P,xt,nt,Yt),nt.side=Je,nt.needsUpdate=!0,Se=!0}}Se===!0&&(Te.updateMultisampleRenderTarget(de),Te.updateRenderTargetMipmap(de)),x.setRenderTarget(fe),x.setClearColor(j,y),x.toneMapping=Ee}function Ci(C,L,_){const P=L.isScene===!0?L.overrideMaterial:null;for(let F=0,he=C.length;F<he;F++){const fe=C[F],Ee=fe.object,Se=fe.geometry,be=P===null?fe.material:P,Re=fe.group;Ee.layers.test(_.layers)&&ar(Ee,L,_,Se,be,Re)}}function ar(C,L,_,P,F,he){C.onBeforeRender(x,L,_,P,F,he),C.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),F.onBeforeRender(x,L,_,P,C,he),F.transparent===!0&&F.side===qt&&F.forceSinglePass===!1?(F.side=Mt,F.needsUpdate=!0,x.renderBufferDirect(_,L,P,F,C,he),F.side=An,F.needsUpdate=!0,x.renderBufferDirect(_,L,P,F,C,he),F.side=qt):x.renderBufferDirect(_,L,P,F,C,he),C.onAfterRender(x,L,_,P,F,he)}function xi(C,L,_){L.isScene!==!0&&(L=Be);const P=Fe.get(C),F=f.state.lights,he=f.state.shadowsArray,fe=F.state.version,Ee=b.getParameters(C,F.state,he,L,_),Se=b.getProgramCacheKey(Ee);let be=P.programs;P.environment=C.isMeshStandardMaterial?L.environment:null,P.fog=L.fog,P.envMap=(C.isMeshStandardMaterial?st:ke).get(C.envMap||P.environment),be===void 0&&(C.addEventListener("dispose",Z),be=new Map,P.programs=be);let Re=be.get(Se);if(Re!==void 0){if(P.currentProgram===Re&&P.lightsStateVersion===fe)return cr(C,Ee),Re}else Ee.uniforms=b.getUniforms(C),C.onBuild(_,Ee,x),C.onBeforeCompile(Ee,x),Re=b.acquireProgram(Ee,Se),be.set(Se,Re),P.uniforms=Ee.uniforms;const De=P.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(De.clippingPlanes=ue.uniform),cr(C,Ee),P.needsLights=Ia(C),P.lightsStateVersion=fe,P.needsLights&&(De.ambientLightColor.value=F.state.ambient,De.lightProbe.value=F.state.probe,De.directionalLights.value=F.state.directional,De.directionalLightShadows.value=F.state.directionalShadow,De.spotLights.value=F.state.spot,De.spotLightShadows.value=F.state.spotShadow,De.rectAreaLights.value=F.state.rectArea,De.ltc_1.value=F.state.rectAreaLTC1,De.ltc_2.value=F.state.rectAreaLTC2,De.pointLights.value=F.state.point,De.pointLightShadows.value=F.state.pointShadow,De.hemisphereLights.value=F.state.hemi,De.directionalShadowMap.value=F.state.directionalShadowMap,De.directionalShadowMatrix.value=F.state.directionalShadowMatrix,De.spotShadowMap.value=F.state.spotShadowMap,De.spotLightMatrix.value=F.state.spotLightMatrix,De.spotLightMap.value=F.state.spotLightMap,De.pointShadowMap.value=F.state.pointShadowMap,De.pointShadowMatrix.value=F.state.pointShadowMatrix),P.currentProgram=Re,P.uniformsList=null,Re}function lr(C){if(C.uniformsList===null){const L=C.currentProgram.getUniforms();C.uniformsList=Vi.seqWithValue(L.seq,C.uniforms)}return C.uniformsList}function cr(C,L){const _=Fe.get(C);_.outputColorSpace=L.outputColorSpace,_.batching=L.batching,_.instancing=L.instancing,_.instancingColor=L.instancingColor,_.skinning=L.skinning,_.morphTargets=L.morphTargets,_.morphNormals=L.morphNormals,_.morphColors=L.morphColors,_.morphTargetsCount=L.morphTargetsCount,_.numClippingPlanes=L.numClippingPlanes,_.numIntersection=L.numClipIntersection,_.vertexAlphas=L.vertexAlphas,_.vertexTangents=L.vertexTangents,_.toneMapping=L.toneMapping}function Ba(C,L,_,P,F){L.isScene!==!0&&(L=Be),Te.resetTextureUnits();const he=L.fog,fe=P.isMeshStandardMaterial?L.environment:null,Ee=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:en,Se=(P.isMeshStandardMaterial?st:ke).get(P.envMap||fe),be=P.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,Re=!!_.attributes.tangent&&(!!P.normalMap||P.anisotropy>0),De=!!_.morphAttributes.position,Ze=!!_.morphAttributes.normal,xt=!!_.morphAttributes.color;let nt=cn;P.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(nt=x.toneMapping);const Yt=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,Je=Yt!==void 0?Yt.length:0,_e=Fe.get(P),rs=f.state.lights;if(K===!0&&(ae===!0||C!==M)){const wt=C===M&&P.id===k;ue.setState(P,C,wt)}let je=!1;P.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==rs.state.version||_e.outputColorSpace!==Ee||F.isBatchedMesh&&_e.batching===!1||!F.isBatchedMesh&&_e.batching===!0||F.isInstancedMesh&&_e.instancing===!1||!F.isInstancedMesh&&_e.instancing===!0||F.isSkinnedMesh&&_e.skinning===!1||!F.isSkinnedMesh&&_e.skinning===!0||F.isInstancedMesh&&_e.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&_e.instancingColor===!1&&F.instanceColor!==null||_e.envMap!==Se||P.fog===!0&&_e.fog!==he||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==ue.numPlanes||_e.numIntersection!==ue.numIntersection)||_e.vertexAlphas!==be||_e.vertexTangents!==Re||_e.morphTargets!==De||_e.morphNormals!==Ze||_e.morphColors!==xt||_e.toneMapping!==nt||Pe.isWebGL2===!0&&_e.morphTargetsCount!==Je)&&(je=!0):(je=!0,_e.__version=P.version);let dn=_e.currentProgram;je===!0&&(dn=xi(P,L,F));let hr=!1,ni=!1,os=!1;const ct=dn.getUniforms(),pn=_e.uniforms;if(Ce.useProgram(dn.program)&&(hr=!0,ni=!0,os=!0),P.id!==k&&(k=P.id,ni=!0),hr||M!==C){ct.setValue(U,"projectionMatrix",C.projectionMatrix),ct.setValue(U,"viewMatrix",C.matrixWorldInverse);const wt=ct.map.cameraPosition;wt!==void 0&&wt.setValue(U,we.setFromMatrixPosition(C.matrixWorld)),Pe.logarithmicDepthBuffer&&ct.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&ct.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,ni=!0,os=!0)}if(F.isSkinnedMesh){ct.setOptional(U,F,"bindMatrix"),ct.setOptional(U,F,"bindMatrixInverse");const wt=F.skeleton;wt&&(Pe.floatVertexTextures?(wt.boneTexture===null&&wt.computeBoneTexture(),ct.setValue(U,"boneTexture",wt.boneTexture,Te)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(ct.setOptional(U,F,"batchingTexture"),ct.setValue(U,"batchingTexture",F._matricesTexture,Te));const as=_.morphAttributes;if((as.position!==void 0||as.normal!==void 0||as.color!==void 0&&Pe.isWebGL2===!0)&&xe.update(F,_,dn),(ni||_e.receiveShadow!==F.receiveShadow)&&(_e.receiveShadow=F.receiveShadow,ct.setValue(U,"receiveShadow",F.receiveShadow)),P.isMeshGouraudMaterial&&P.envMap!==null&&(pn.envMap.value=Se,pn.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),ni&&(ct.setValue(U,"toneMappingExposure",x.toneMappingExposure),_e.needsLights&&wa(pn,os),he&&P.fog===!0&&$.refreshFogUniforms(pn,he),$.refreshMaterialUniforms(pn,P,Y,V,de),Vi.upload(U,lr(_e),pn,Te)),P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(Vi.upload(U,lr(_e),pn,Te),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&ct.setValue(U,"center",F.center),ct.setValue(U,"modelViewMatrix",F.modelViewMatrix),ct.setValue(U,"normalMatrix",F.normalMatrix),ct.setValue(U,"modelMatrix",F.matrixWorld),P.isShaderMaterial||P.isRawShaderMaterial){const wt=P.uniformsGroups;for(let ls=0,Ra=wt.length;ls<Ra;ls++)if(Pe.isWebGL2){const Ar=wt[ls];ve.update(Ar,dn),ve.bind(Ar,dn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return dn}function wa(C,L){C.ambientLightColor.needsUpdate=L,C.lightProbe.needsUpdate=L,C.directionalLights.needsUpdate=L,C.directionalLightShadows.needsUpdate=L,C.pointLights.needsUpdate=L,C.pointLightShadows.needsUpdate=L,C.spotLights.needsUpdate=L,C.spotLightShadows.needsUpdate=L,C.rectAreaLights.needsUpdate=L,C.hemisphereLights.needsUpdate=L}function Ia(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(C,L,_){Fe.get(C.texture).__webglTexture=L,Fe.get(C.depthTexture).__webglTexture=_;const P=Fe.get(C);P.__hasExternalTextures=!0,P.__hasExternalTextures&&(P.__autoAllocateDepthBuffer=_===void 0,P.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),P.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,L){const _=Fe.get(C);_.__webglFramebuffer=L,_.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(C,L=0,_=0){D=C,I=L,T=_;let P=!0,F=null,he=!1,fe=!1;if(C){const Se=Fe.get(C);Se.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(U.FRAMEBUFFER,null),P=!1):Se.__webglFramebuffer===void 0?Te.setupRenderTarget(C):Se.__hasExternalTextures&&Te.rebindTextures(C,Fe.get(C.texture).__webglTexture,Fe.get(C.depthTexture).__webglTexture);const be=C.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(fe=!0);const Re=Fe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Re[L])?F=Re[L][_]:F=Re[L],he=!0):Pe.isWebGL2&&C.samples>0&&Te.useMultisampledRTT(C)===!1?F=Fe.get(C).__webglMultisampledFramebuffer:Array.isArray(Re)?F=Re[_]:F=Re,B.copy(C.viewport),z.copy(C.scissor),H=C.scissorTest}else B.copy(W).multiplyScalar(Y).floor(),z.copy(se).multiplyScalar(Y).floor(),H=oe;if(Ce.bindFramebuffer(U.FRAMEBUFFER,F)&&Pe.drawBuffers&&P&&Ce.drawBuffers(C,F),Ce.viewport(B),Ce.scissor(z),Ce.setScissorTest(H),he){const Se=Fe.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,Se.__webglTexture,_)}else if(fe){const Se=Fe.get(C.texture),be=L||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Se.__webglTexture,_||0,be)}k=-1},this.readRenderTargetPixels=function(C,L,_,P,F,he,fe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Fe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&fe!==void 0&&(Ee=Ee[fe]),Ee){Ce.bindFramebuffer(U.FRAMEBUFFER,Ee);try{const Se=C.texture,be=Se.format,Re=Se.type;if(be!==_t&&ze.convert(be)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Re===Zn&&(ge.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&ge.has("EXT_color_buffer_float"));if(Re!==hn&&ze.convert(Re)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===ln&&(Pe.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=C.width-P&&_>=0&&_<=C.height-F&&U.readPixels(L,_,P,F,ze.convert(be),ze.convert(Re),he)}finally{const Se=D!==null?Fe.get(D).__webglFramebuffer:null;Ce.bindFramebuffer(U.FRAMEBUFFER,Se)}}},this.copyFramebufferToTexture=function(C,L,_=0){const P=Math.pow(2,-_),F=Math.floor(L.image.width*P),he=Math.floor(L.image.height*P);Te.setTexture2D(L,0),U.copyTexSubImage2D(U.TEXTURE_2D,_,0,0,C.x,C.y,F,he),Ce.unbindTexture()},this.copyTextureToTexture=function(C,L,_,P=0){const F=L.image.width,he=L.image.height,fe=ze.convert(_.format),Ee=ze.convert(_.type);Te.setTexture2D(_,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,_.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,_.unpackAlignment),L.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,P,C.x,C.y,F,he,fe,Ee,L.image.data):L.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,P,C.x,C.y,L.mipmaps[0].width,L.mipmaps[0].height,fe,L.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,P,C.x,C.y,fe,Ee,L.image),P===0&&_.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(C,L,_,P,F=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=C.max.x-C.min.x+1,fe=C.max.y-C.min.y+1,Ee=C.max.z-C.min.z+1,Se=ze.convert(P.format),be=ze.convert(P.type);let Re;if(P.isData3DTexture)Te.setTexture3D(P,0),Re=U.TEXTURE_3D;else if(P.isDataArrayTexture)Te.setTexture2DArray(P,0),Re=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,P.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,P.unpackAlignment);const De=U.getParameter(U.UNPACK_ROW_LENGTH),Ze=U.getParameter(U.UNPACK_IMAGE_HEIGHT),xt=U.getParameter(U.UNPACK_SKIP_PIXELS),nt=U.getParameter(U.UNPACK_SKIP_ROWS),Yt=U.getParameter(U.UNPACK_SKIP_IMAGES),Je=_.isCompressedTexture?_.mipmaps[0]:_.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Je.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Je.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,C.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,C.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,C.min.z),_.isDataTexture||_.isData3DTexture?U.texSubImage3D(Re,F,L.x,L.y,L.z,he,fe,Ee,Se,be,Je.data):_.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Re,F,L.x,L.y,L.z,he,fe,Ee,Se,Je.data)):U.texSubImage3D(Re,F,L.x,L.y,L.z,he,fe,Ee,Se,be,Je),U.pixelStorei(U.UNPACK_ROW_LENGTH,De),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ze),U.pixelStorei(U.UNPACK_SKIP_PIXELS,xt),U.pixelStorei(U.UNPACK_SKIP_ROWS,nt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Yt),F===0&&P.generateMipmaps&&U.generateMipmap(Re),Ce.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Te.setTextureCube(C,0):C.isData3DTexture?Te.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Te.setTexture2DArray(C,0):Te.setTexture2D(C,0),Ce.unbindTexture()},this.resetState=function(){I=0,T=0,D=null,Ce.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===tr?"display-p3":"srgb",t.unpackColorSpace=Ve.workingColorSpace===$i?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ot?Rn:Jo}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Rn?ot:en}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class bf extends ga{}bf.prototype.isWebGL1Renderer=!0;class Ff extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}const bo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class _f{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(A){o++,r===!1&&s.onStart!==void 0&&s.onStart(A,a,o),r=!0},this.itemEnd=function(A){a++,s.onProgress!==void 0&&s.onProgress(A,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(A){s.onError!==void 0&&s.onError(A)},this.resolveURL=function(A){return l?l(A):A},this.setURLModifier=function(A){return l=A,this},this.addHandler=function(A,u){return c.push(A,u),this},this.removeHandler=function(A){const u=c.indexOf(A);return u!==-1&&c.splice(u,2),this},this.getHandler=function(A){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],E=c[u+1];if(p.global&&(p.lastIndex=0),p.test(A))return E}return null}}}const Qf=new _f;class rr{constructor(e){this.manager=e!==void 0?e:Qf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}rr.DEFAULT_MATERIAL_NAME="__DEFAULT";class Pf extends rr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=bo.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=di("img");function l(){A(),bo.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){A(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function A(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Fo extends rr{constructor(e){super(e)}load(e,t,n,s){const r=new Ct,a=new Pf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class ma{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_o(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=_o();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function _o(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$s}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$s);const Gf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Mi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Nf=new is(-1,1,1,-1,0,1);class Of extends fn{constructor(){super(),this.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $t([0,2,0,0,2,0],2))}}const Yf=new Of;class Ea{constructor(e){this._mesh=new Gt(Yf,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Nf)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Hf extends Mi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ot?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ir.clone(e.uniforms),this.material=new Ot({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ea(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Qo extends Mi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class kf extends Mi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class zf{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new He);this._width=n.width,this._height=n.height,t=new un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Zn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hf(Gf),this.copyPass.material.blending=Xt,this.clock=new ma}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Qo!==void 0&&(a instanceof Qo?n=!0:a instanceof kf&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new He);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Vf extends Mi{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ye}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const Wf=`
    varying vec2 vUV;

    void main(){
        vUV = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,Os={name:"HalftoneShader",uniforms:{radius:{value:8},mixing:{value:1},redChannel:{value:!1},greenChannel:{value:!1},blueChannel:{value:!1},greyscale:{value:!1},disable:{value:!1},tDiffuse:{value:null},width:{value:0},height:{value:0},redMask:{value:0},greenMask:{value:0},blueMask:{value:0}},vertexShader:Wf,fragmentShader:`
        #define HALF_PI         1.57079632
        #define NORMAL_VECTOR   vec2(cos(HALF_PI), sin(HALF_PI))
		
		#define RED         0
		#define GREEN       1
		#define BLUE        2
		#define GREY        3
		
		uniform float radius;
		uniform float mixing;
		uniform bool redChannel;
		uniform bool greenChannel;
		uniform bool blueChannel;
		uniform float redMask;
		uniform float greenMask;
		uniform float blueMask;
		uniform bool greyscale;
		uniform bool disable;
		uniform float width;
		uniform float height;
		uniform sampler2D tDiffuse;
		varying vec2 vUV;
		vec2 p;
		vec2 root;
		
		struct Cell {
			vec2 point;
			float pointColor;
		};
		
		Cell createCell();
		float mix(float a, float b, float t);
		float vectorModule(float x, float y);
		float getPointColor(vec2 point, int colorChanel);
		float pointDistance(float channelColor, vec2 coord);
		float getPointColor(int channel);
		float customMin(float a, float b);
        float customMax(float a, float b);
        float applyColorFilter(float channel, float mask);
		
		void main() {
            // init
            p = vec2(vUV.x * width, vUV.y * height);
            root = vec2(0, 0);
                
		    if (disable) {
		        gl_FragColor = texture2D(tDiffuse, vUV);
		    } else {
		        // get colors for R, G, B channels
                float r = getPointColor(RED);
                float g = getPointColor(GREEN);
                float b = getPointColor(BLUE);
        
                // mix with origin image
                vec4 color = texture2D(tDiffuse, vUV);
                r = mix(r, color.r, 1.0 - mixing);
                g = mix(g, color.g, 1.0 - mixing);
                b = mix(b, color.b, 1.0 - mixing);
                
                // set color mask
                r = applyColorFilter(r, redMask);
                g = applyColorFilter(g, greenMask);
                b = applyColorFilter(b, blueMask);
        
                if (greyscale) {
                    float grey = (r + b + g) / 3.0;
                    r = g = b = grey;
                } 
        
                gl_FragColor = vec4(r, g, b, 1.0);
		    }
        }

		float vectorModule(float x, float y) {
			return sqrt(x * x + y * y);
		}

        float mix(float a, float b, float t) {
			return a * (1.0 - t) + b * t;
		}
		
		float customMin(float a, float b) {
            return (a < b) ? a : b;
        }
        
        float customMax(float a, float b) {
            return (a > b) ? a : b;
        }
        
        float applyColorFilter(float channel, float mask) {
            channel = customMin(255.0, channel + mask);
            channel = customMax(0.0, channel);
            return channel;
        }
            
		float pointDistance(float channelColor, vec2 coord) {
			float dist = vectorModule(coord.x - p.x, coord.y - p.y);
            float rad = pow(abs(channelColor), 1.15) * radius;
            return rad - dist;
		}
        
        float getPointColor(vec2 point, int colorChanel) {
            if (colorChanel == RED) {
                return texture2D(tDiffuse, vec2(point.x / width, point.y / height)).r;
            } else if (colorChanel == GREEN) {
                return texture2D(tDiffuse, vec2(point.x / width, point.y / height)).g;
            } else if (colorChanel == BLUE) {
                return texture2D(tDiffuse, vec2(point.x / width, point.y / height)).b;
            } else {
                return texture2D(tDiffuse, vec2(point.x / width, point.y / height)).b;
            }
        }
		
		Cell createCell() {
            Cell cell;
        
            // calculate image grid
            float threshold = radius * 0.5;
            float dot_normal = NORMAL_VECTOR.x * (p.x - root.x) + NORMAL_VECTOR.y * (p.y - root.y);
            vec2 offset = vec2(NORMAL_VECTOR.x * dot_normal, NORMAL_VECTOR.y * dot_normal);
            float offset_normal = mod(vectorModule(offset.x, offset.y), radius);
            float normal_scale = ((offset_normal < threshold) ? -offset_normal : radius - offset_normal) * -1.0;
            float offset_line = mod(vectorModule((p.x - offset.x) - root.x, (p.y - offset.y) - root.y), radius);
            float line_scale = (offset_line < threshold) ? -offset_line : radius - offset_line;
            cell.point.x = p.x - NORMAL_VECTOR.x + NORMAL_VECTOR.y * line_scale;
            cell.point.y = p.y - NORMAL_VECTOR.y * normal_scale - NORMAL_VECTOR.x;
        
            return cell;
        }

		float getPointColor(int channel) {
		    Cell cell = createCell();
            float pointDist, res;
        
            if (channel == RED && redChannel) {
                cell.pointColor = getPointColor(cell.point, RED);
            } else if (channel == GREEN && greenChannel) {
                cell.pointColor = getPointColor(cell.point, GREEN);
            } else if (channel == BLUE && blueChannel) {
                cell.pointColor = getPointColor(cell.point, BLUE);
            } else if (!redChannel && !greenChannel && !blueChannel) {
                cell.pointColor = getPointColor(cell.point, GREY);
            }
        
            pointDist = pointDistance(cell.pointColor, cell.point);
            res = (pointDist > 0.0) ? clamp(pointDist / 1.25, 0.0, 1.0) : 0.0;
            res = clamp(res, 0.0, 1.0);
        
            return res;
        }`};class Kf extends Mi{constructor(e,t){super(),this.uniforms=ir.clone(Os.uniforms),this.material=new Ot({uniforms:this.uniforms,fragmentShader:Os.fragmentShader,vertexShader:Os.vertexShader}),this.uniforms.height.value=t,this.uniforms.width.value=e,this.fsQuad=new Ea(this.material)}dispose(){this.material.dispose(),this.fsQuad.dispose()}setSize(e,t){this.uniforms.width.value=e,this.uniforms.height.value=t}render(e,t,n){this.material.uniforms.tDiffuse.value=n.texture,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}}const Ma="data:image/jpeg;base64,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";let Jt,jt,Bn,Ca,qn,ci,ui,zn,Po=Ma,hi=Ma,Zs=null,Xs=!1;window.imageToBase64=i=>{const e=i.files[0],t=new FileReader;t.onloadend=()=>{hi=t.result},t.readAsDataURL(e)};window.onresize=()=>{const i=document.querySelector(".wrapper .three-js-wrapper");Jt=i.offsetWidth,jt=i.offsetHeight,Bn.setSize(Jt,jt),ui.setSize(Jt,jt);const e=150;qn=new is(Jt/-e,Jt/e,jt/e,jt/-e,1,500),qn.position.z=1};qf();xa();function qf(){const i=document.querySelector(".wrapper .three-js-wrapper");Jt=i.offsetWidth,jt=i.offsetHeight,Bn=new ga({preserveDrawingBuffer:!0}),Bn.setPixelRatio(i.devicePixelRatio),Bn.setSize(Jt,jt),i.appendChild(Bn.domElement),Ca=new ma;const e=150;qn=new is(Jt/-e,Jt/e,jt/e,jt/-e,1,500),qn.position.z=1,ci=new Ff,ci.background=new Ye(16777215);const t=new ns(10,10),s=new Fo().load(hi,p=>{zn.scale.set(1,p.image.height/p.image.width,1)}),r=new Zi({map:s});zn=new Gt(t,r),zn.position.set(0,0,0),ci.add(zn),setInterval(()=>{if(Po!==hi){const E=new Fo().load(hi,m=>{zn.scale.set(1,m.image.height/m.image.width,1)});zn.material=new Zi({map:E}),Po=hi}},100),ui=new zf(Bn);const a=new Vf(ci,qn),o=new Kf(window.innerWidth,window.innerHeight);ui.addPass(a),ui.addPass(o);const l={radiusRange:document.getElementById("radiusRange"),mixingRange:document.getElementById("mixingRange"),flexCheckRed:document.getElementById("flexCheckRed"),flexCheckGreen:document.getElementById("flexCheckGreen"),flexCheckBlue:document.getElementById("flexCheckBlue"),greyscaleCheckbox:document.getElementById("greyscaleCheckbox"),disableCheckbox:document.getElementById("disableCheckbox"),colorInput:document.getElementById("colorInput")};setInterval(()=>{Xs&&Zs!==null&&(o.uniforms=va(o.uniforms,Zs),Xs=!1,Go(l,o))},100),Go(l,o),l.radiusRange.addEventListener("input",p=>o.uniforms.radius.value=p.target.value),l.mixingRange.addEventListener("input",p=>o.uniforms.mixing.value=p.target.value),l.flexCheckRed.addEventListener("change",p=>o.uniforms.redChannel.value=p.target.checked),l.flexCheckGreen.addEventListener("change",p=>o.uniforms.greenChannel.value=p.target.checked),l.flexCheckBlue.addEventListener("change",p=>o.uniforms.blueChannel.value=p.target.checked),l.greyscaleCheckbox.addEventListener("change",p=>o.uniforms.greyscale.value=p.target.checked),l.disableCheckbox.addEventListener("change",p=>o.uniforms.disable.value=p.target.checked),l.colorInput.addEventListener("change",p=>{let E=p.target.value,m,f,h;if(E.match(/^#[0-9A-Fa-f]{6}$/))m=parseInt(E.substring(1,3),16),f=parseInt(E.substring(3,5),16),h=parseInt(E.substring(5,7),16);else{console.error("Invalid color format:",E);return}o.uniforms.redMask.value=m/255,o.uniforms.greenMask.value=f/255,o.uniforms.blueMask.value=h/255}),document.getElementById("downloadImage").addEventListener("click",()=>jf()),document.getElementById("saveSettings").addEventListener("click",()=>Jf(o.uniforms)),document.addEventListener("DOMContentLoaded",function(){const p=document.getElementById("mixingRange");u(p.value),p.addEventListener("input",function(E){u(E.target.value)})});function u(p){document.getElementById("mixingRange_output_value").value=Math.round(p*100)/100}document.getElementById("mixingRange_output_value").addEventListener("change",function(p){document.getElementById("mixingRange").value=p.target.value,o.uniforms.mixing.value=p.target.value}),document.addEventListener("DOMContentLoaded",function(){const p=document.getElementById("radiusRange");d(p.value),p.addEventListener("input",function(E){d(E.target.value)})});function d(p){document.getElementById("radiusRange_output_value").value=Math.round(p*100)/100}document.getElementById("radiusRange_output_value").addEventListener("change",function(p){document.getElementById("radiusRange").value=p.target.value,o.uniforms.radius.value=p.target.value})}function Jf(i){let{tDiffuse:e,width:t,height:n,...s}=i;try{const r=JSON.stringify(s,null,2),a=new Blob([r],{type:"application/json"}),o=document.createElement("a");o.href=URL.createObjectURL(a),o.download="settings",o.click(),console.log(`Settings saved to ${o.download}`)}catch(r){console.error("Error saving settings:",r.message)}}window.loadHalftoneSettings=i=>new Promise((e,t)=>{i.value.endsWith(".json")||(window.alert("Select valid file with settings!"),e("Error: not a JSON file!"));const n=new FileReader;n.onload=function(r){try{const a=r.target.result,o=JSON.parse(a);Zs=o,Xs=!0,e(o)}catch(a){t(new Error("Error parsing JSON file: "+a.message))}},n.onerror=function(){t(new Error("Error reading file"))};const s=i.files[0];s?n.readAsText(s):t(new Error("No file selected"))});function jf(){const i=document.getElementById("imageFormatSelect");if(i.value===""){window.alert("Select any of the provided image formats!");return}const t=document.querySelector("canvas").toDataURL("image/"+i.value),n=new Image;n.src=t;const s=document.createElement("a");s.href=t,s.download="image."+i.value,document.body.appendChild(s),s.click(),document.body.removeChild(s)}function xa(){requestAnimationFrame(xa),Bn.render(ci,qn),ui.render(Ca.getDelta())}function va(i,e){for(const t in e)e.hasOwnProperty(t)&&(e[t]instanceof Object&&t in i?va(i[t],e[t]):i[t]=e[t]);return i}function Go(i,e){i.radiusRange.value=e.uniforms.radius.value,i.mixingRange.value=e.uniforms.mixing.value,i.flexCheckRed.checked=e.uniforms.redChannel.value,i.flexCheckGreen.checked=e.uniforms.greenChannel.value,i.flexCheckBlue.checked=e.uniforms.blueChannel.value,i.greyscaleCheckbox.checked=e.uniforms.greyscale.value,i.disableCheckbox.checked=e.uniforms.disable.value}
