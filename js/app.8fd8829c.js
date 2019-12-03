(function(t){function e(e){for(var r,i,c=e[0],f=e[1],u=e[2],l=0,h=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&h.push(n[i][0]),n[i]=0;for(r in f)Object.prototype.hasOwnProperty.call(f,r)&&(t[r]=f[r]);s&&s(e);while(h.length)h.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,c=1;c<a.length;c++){var f=a[c];0!==n[f]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},o=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],f=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var s=f;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2e3e":function(t,e,a){"use strict";var r=a("d0eb"),n=a.n(r);n.a},"4ac9":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("ContextConsumer",{attrs:{contextKey:["BGCOLOR"]},scopedSlots:t._u([{key:"default",fn:function(e){e.context;return[a("BackgroundImage",{attrs:{color:t.bgcolor}})]}}])}),a("CanvasImage",{attrs:{src:t.img},on:{setCanvasRef:t.setCanvasRef}}),a("HtmlView")],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"frame",staticClass:"canvasImage"},[a("canvas",{ref:"canvas",staticClass:"canvas",attrs:{width:t.getCanvasWidth,height:t.getCanvasHeight}})])},c=[],f=(a("d3b7"),a("96cf"),a("89ba")),u=a("2ef0"),s=function(t,e){var a=t.width/e.width;return{x:0,y:0,width:e.width*a,height:e.height*a}},l=function(t,e){return new Promise((function(a){var r=new Image;r.onload=function(){var e=t.getBoundingClientRect(),n={left:0,top:0,width:r.width,height:r.height},o=s(e,n);a({fit:o,img:r})},r.src=e}))},h={data:function(){return{imageData:null,canvasData:{width:300,height:300},edge:300}},props:{src:String},mounted:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.init(),t.next=3,this.resizeCanvas();case 3:this.setTile(300,(function(){e.$emit("setCanvasRef",e.$refs.canvas)}));case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{init:function(){var t;window.addEventListener("resize",(function(){clearTimeout(t),t=setTimeout((function(){}),300)}))},resizeCanvas:function(){var t=this;return new Promise(function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(a){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l(t.$refs.frame,t.src);case 2:t.imageData=e.sent,r=u["cloneDeep"](t.canvasData),r.width=window.innerWidth,r.height=window.innerHeight,t.canvasData=r,a();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},setTile:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(e,a){var r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l(this.$refs.frame,this.src);case 2:this.imageData=t.sent,this.$nextTick((function(){var t=e,n=e,o=r.$refs.canvas.width/2-t/2,i=r.$refs.canvas.height/2-n/2,c=r.$refs.canvas.getContext("2d");c.clearRect(0,0,r.$refs.canvas.width,r.$refs.canvas.height),c.save(),c.drawImage(r.imageData.img,o,i,t,n),c.restore(),a()}));case 4:case"end":return t.stop()}}),t,this)})));function e(e,a){return t.apply(this,arguments)}return e}()},computed:{getCanvasWidth:function(){return this.canvasData.width+"px"},getCanvasHeight:function(){return this.canvasData.height+"px"}}},d=h,g=(a("8594"),a("2877")),v=Object(g["a"])(d,i,c,!1,null,"1da580a4",null),m=v.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"htmlView"}},[a("ContextConsumer",{attrs:{contextKey:["HTML_VIEW"]},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.context;return t._l(t.getItems(r["HTML_VIEW"]),(function(e,r){return a("div",{key:r},[a(t.getComponent(e.view),{tag:"component",attrs:{value:e}})],1)}))}}])})],1)},b=[],w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._t("default",null,{context:t.data})],2)},y=[],x=(a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("2fa7")),M=void 0;function C(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function O(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?C(a,!0).forEach((function(e){Object(x["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):C(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var I=function(){var t=[],e={},a=function(){u["each"](t,(function(t){t(e)}))},r=function(r){t.push(r),Object.keys(e).length>0&&a()},n=function(t,r){e[t]=r,a()};return{subscribe:a,getContext:r,setContext:n}},D=I(),j={data:function(){return{data:{},get:D.getContext.bind(M)}},props:{contextKey:{type:Array}},watch:{contextKey:{immediate:!0,handler:function(t){var e=this;u["map"](t,(function(t){e.data=Object(x["a"])({},t,null)}))}}},mounted:function(){var t=this;D.getContext((function(e){u["map"](t.contextKey,(function(a){if(u["has"](e,a)){var r=O({},t.data);r[a]=O({},e[a]),t.data=r}}))}))}},T=j,_=Object(g["a"])(T,w,y,!1,null,null,null),R=_.exports,V=function(){var t=[],e=document.getElementsByTagName("body")[0],a=e.getBoundingClientRect().height;document.addEventListener("scroll",(function(){var e=document.scrollingElement.scrollTop,a={top:e};D.setContext("SCROLL",a),u["map"](t,(function(t){t(a)}))}));var r=function(t){a+=t,e.style.height=a+"px"},n=function(e){t.push(e)};return{setHeight:r,getScroll:n}},$=V(),k={TEXT:"text",IMG:"img"},E={color:"#333",fontFamily:"'Roboto', sans-serif",textAlign:"center"},P=(k.TEXT,E.color,E.fontFamily,E.textAlign,k.TEXT,E.color,E.fontFamily,E.textAlign,k.TEXT,E.color,E.fontFamily,E.textAlign,k.TEXT,E.color,E.fontFamily,E.textAlign,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"textView"},[a("div",{style:t.style},[t._v(t._s(t.text))])])}),S=[],B=(a("99af"),a("a15b"),a("ac1f"),a("5319"),{data:function(){return{style:"",text:""}},props:{value:{type:Object}},methods:{stringToCss:function(t){return t.replace(/([A-Z])/g,(function(t){return"-"+t.charAt(0).toLowerCase()}))}},watch:{value:{immediate:!0,handler:function(t){var e=this,a=u["map"](t.style,(function(t,a){return"".concat(e.stringToCss(a),":").concat(t)}));this.style=a.join(";"),this.text=t.text?t.text:"ok "}}}}),H=B,A=(a("d7b9"),Object(g["a"])(H,P,S,!1,null,null,null)),L=A.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"imgView"},[a("img",{attrs:{src:t.src}})])},X=[],z={data:function(){return{src:""}},props:{value:{type:Object}}},F=z,K=Object(g["a"])(F,W,X,!1,null,null,null),J=K.exports,G={data:function(){return{}},components:{ContextConsumer:R,TextView:L,ImgView:J},methods:{getItems:function(t){return t||[]},getComponent:function(t){return t===k.TEXT?L:t===k.IMG?J:L}}},N=G,Y=Object(g["a"])(N,p,b,!1,null,null,null),Z=Y.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"bg",style:t.getStyle,attrs:{id:"bg"}})},Q=[],U=function(t,e){return JSON.stringify(t)===JSON.stringify(e)},tt={data:function(){return{style:"",canvasData:{}}},props:{color:{type:Object,default:function(){return{}}}},mounted:function(){},watch:{color:{immediate:!0,handler:function(t,e){U(t,e)||(this.setBackgroundColor(t),this.getSize())}}},methods:{setBackgroundColor:function(t){if(this.$refs.bg){this.$refs.bg.getBoundingClientRect();this.style="background-color:rgb(".concat(t.r,",").concat(t.g,",").concat(t.b,");")}},getSize:function(){if(this.$refs.bg){var t=this.$refs.bg.getBoundingClientRect();this.canvasData={width:t.width,height:t.height}}}},computed:{getStyle:function(){return this.style},getCanvasWidth:function(){return this.canvasData.width+"px"},getCanvasHeight:function(){return this.canvasData.height+"px"}}},et=tt,at=(a("2e3e"),Object(g["a"])(et,q,Q,!1,null,null,null)),rt=at.exports,nt=(a("26e9"),function(){var t,e,a=function(a,r,n,o){t=a,e=n,!1,o},r=function(t){return new Promise((function(e){var a=new Image;a.onload=function(){e(a)},a.src=t}))},n=function(){var a=Object(f["a"])(regeneratorRuntime.mark((function a(n){var o,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return o=n.path,a.next=3,r(o);case 3:i=a.sent,t.clearRect(0,0,e.width,e.height),t.save(),t.drawImage(i,0,0,e.width,e.height),t.restore();case 8:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}(),o=function(){var a=Object(f["a"])(regeneratorRuntime.mark((function a(n){var o,i,c,f,u,s,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return o=n.path,i=n.tile,n.rotate,a.next=3,r(o);case 3:for(c=a.sent,f=e.width/i.x,u=e.height/i.y,t.clearRect(0,0,e.width,e.height),t.save(),s=0;s<i.y;s++)for(l=0;l<i.x;l++)t.drawImage(c,f*l,u*s,f,u);t.restore();case 10:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}();return{init:a,set:n,setTile:o}}),ot=function(t){var e,a,r,n,o=t.isColor,i=!1,c=!1,f=o,u=function(t,o,c,f){e=t,a=o.getImageData(0,0,c.width,c.height),r=e.createImageData(c.width,c.height),n=c,i=!1,f},s=function(t,e,n){t<255?(r.data[e]=n.r,r.data[e+1]=n.g,r.data[e+2]=n.b):(r.data[e]=a.data[e],r.data[e+1]=a.data[e+1],r.data[e+2]=a.data[e+2]),r.data[e+3]=a.data[e+3]},l=function(t){if(t)return{r:Math.floor(250*Math.random()),g:Math.floor(250*Math.random()),b:Math.floor(250*Math.random())};var e=Math.floor(250*Math.random());return{r:e,g:e,b:e}},h=function(t){var o=t.value,u=t.from,h=t.to,d=n.height/(h-u),g=function(){if(i)return!0;if(u<n.height&&top>=n.height)c||v();else{for(var t=0;t<n.height;t++)for(var h=0;h<n.width;h++){var g=Math.floor(t*(4*n.width)+4*h),m=(a.data[g]+a.data[g+1]+a.data[g+2])/3;if(t<o*d){var p=l(f);s(m,g,p)}else{var b={r:10,g:10,b:10};s(m,g,b)}}e.putImageData(r,n.x,n.y)}};g()},d=function(t){t.value;var o=t.from,c=t.to,u=(n.height,function(){if(i)return!0;if(!(o<n.height&&top>=n.height)){for(var t=0;t<n.height;t++)for(var c=0;c<n.width;c++){var u=Math.floor(t*(4*n.width)+4*c),h=(a.data[u]+a.data[u+1]+a.data[u+2])/3,d=l(f);s(h,u,d)}e.putImageData(r,n.x,n.y)}});u()},g=function(){u();for(var t=0;t<a.data.length;t+=4){var o=(a.data[t]+a.data[t+1]+a.data[t+2])/3;s(o,t,{r:255,g:128,b:0})}e.putImageData(r,n.x,n.y)},v=function(t){console.log("release",t),i=t,a=null,r=null};return{init:u,set:g,loop:d,scroll:h,release:v}},it=function(){var t,e,a,r,n=!1,o=!1,i=function(o,i,c,f){t=o,e=i.getImageData(0,0,c.width,c.height),a=t.createImageData(c.width,c.height),r=c,n=!1,f},c=function(t,r,n){t<255?(a.data[r]=n.r,a.data[r+1]=n.g,a.data[r+2]=n.b):(a.data[r]=e.data[r],a.data[r+1]=e.data[r+1],a.data[r+2]=e.data[r+2]),a.data[r+3]=e.data[r+3]},f=function(i){var f=i.value,u=i.from,s=i.to,h=i.frgb,d=(i.trgb,r.height/(s-u)),g=function(){if(n)return!0;if(u<r.height&&top>=r.height)o||l();else{for(var i=0;i<r.height;i++)for(var s=0;s<r.width;s++){var g=Math.floor(i*(4*r.width)+4*s),v=(e.data[g]+e.data[g+1]+e.data[g+2])/3;if(i<f*d)c(v,g,h);else{var m={r:10,g:10,b:10};c(v,g,m)}}t.putImageData(a,r.x,r.y)}};g()},u=function(i){var f=i.value,u=i.from,s=i.to,h=i.frgb,d=(i.trgb,r.height/(s-u)),g=function(){if(n)return!0;if(u<r.height&&top>=r.height)o||l();else{for(var i=0;i<r.height;i++)for(var s=0;s<r.width;s++){var g=Math.floor(i*(4*r.width)+4*s),v=(e.data[g]+e.data[g+1]+e.data[g+2])/3;if(i>f*d)c(v,g,h);else{var m={r:10,g:10,b:10};c(v,g,m)}}t.putImageData(a,r.x,r.y)}};g()},s=function(o){o.value;var i=o.from,f=o.to,u=o.rgb,s=(r.height,function(){if(n)return!0;if(!(i<r.height&&top>=r.height)){for(var o=0;o<r.height;o++)for(var f=0;f<r.width;f++){var s=Math.floor(o*(4*r.width)+4*f),l=(e.data[s]+e.data[s+1]+e.data[s+2])/3;c(l,s,u)}t.putImageData(a,r.x,r.y)}});s()},l=function(t){console.log("release",t),n=t,e=null,a=null};return{init:i,loop:s,scroll:f,reverse:u,release:l}},ct=(a("d81d"),function(t){var e,a,r,n,o,i=t.isColor,c=!1,f=[],u=i,s=function(t,i,s,l){e=t,a=i.getImageData(0,0,s.width,s.height),r=e.createImageData(s.width,s.height),n=s,c=!1,o=l;for(var d=0;d<n.height;d++)for(var g=0;g<n.width;g++){var v=Math.floor(d*(4*n.width)+4*g),m=(a.data[v]+a.data[v+1]+a.data[v+2])/3;if(m<o){var p=Math.floor(360*Math.random()),b=1*Math.random()+1,w=2*Math.random(),y=a.data[v+3],x=h(u);f.push({index:v,x:g,y:d,rr:p,r:b,s:w,a:y,rgb:x})}}},l=function(){for(var t=0;t<n.height;t++)for(var e=0;e<n.width;e++){var a=Math.floor(t*(4*n.width)+4*e);r.data[a]=255,r.data[a+1]=255,r.data[a+2]=255,r.data[a+3]=0}},h=function(t){if(t)return{r:Math.floor(250*Math.random()),g:Math.floor(250*Math.random()),b:Math.floor(250*Math.random())};var e=Math.floor(250*Math.random());return{r:e,g:e,b:e}},d=function(t){var a=t.value,o=t.from;t.to;l();var i=function(){if(c)return!0;o<n.height&&top>=n.height||(f.map((function(t){var e=a*t.s,o=a/5+t.r,i=(t.rr+e)*Math.PI/180,c=Math.floor(o*Math.cos(i))+t.x,f=Math.floor(o*Math.sin(i))+t.y,u=Math.floor(f*(4*n.width)+4*c);r.data[u]=t.rgb.r,r.data[u+1]=t.rgb.g,r.data[u+2]=t.rgb.b,r.data[u+3]=t.a})),e.putImageData(r,n.x,n.y))};i()};return{init:s,scroll:d}}),ft=function(t){var e,a,r,n,o=t.isRandom,i=!1,c=o,f=[],u=function(t,o,c,f){e=t,a=o.getImageData(0,0,c.width,c.height),r=e.createImageData(c.width,c.height),n=c,i=!1,f},s=function(){for(var t=0;t<n.height;t++)for(var e=0;e<n.width;e++){var a=Math.floor(t*(4*n.width)+4*e);r.data[a]=255,r.data[a+1]=255,r.data[a+2]=255,r.data[a+3]=0}},l=function(t,e){r.data[e]=0,r.data[e+1]=0,r.data[e+2]=0,r.data[e+3]=a.data[t-1]},h=function(t){return a.data[t-1]},d=function(t){var o=t.value,u=t.from;t.to;s();var d=function(){if(i)return!0;if(!(u<n.height&&top>=n.height)){for(var t=0;t<n.height;t++)for(var s=0;s<n.width;s++){var d=Math.floor(t*(4*n.width)+4*s);a.data[d],a.data[d+1],a.data[d+2];if(0===a.data[d+3]&&h(d)>0){f[d]||(f[d]=c?Math.floor(10*Math.random()):1);for(var g=d+4*Math.floor(o*f[d]/10),v=d;v<g;v+=4)l(d,v)}else{var m=(r.data[d]+r.data[d+1]+r.data[d+2])/3;255===m&&(r.data[d]=1,r.data[d+1]=1,r.data[d+2]=1,r.data[d+3]=a.data[d+3])}}e.putImageData(r,n.x,n.y)}};d()};return{init:u,scroll:d}},ut=function(t){t.isColor;var e,a,r,n,o,i=!1,c=[],f=function(){for(var t=0;t<n.height;t++)for(var e=0;e<n.width;e++){var a=Math.floor(t*(4*n.width)+4*e);r.data[a]=255,r.data[a+1]=255,r.data[a+2]=255,r.data[a+3]=0}},s=function(t,f,s,l){e=t,a=f.getImageData(0,0,s.width,s.height),r=e.createImageData(s.width,s.height),n=s,i=!1,o=l;for(var h=0;h<n.height;h++)for(var d=u["random"](10),g=0;g<n.width;g++){var v=Math.floor(h*(4*n.width)+4*g),m=(a.data[v]+a.data[v+1]+a.data[v+2])/3;if(m<o){var p=0,b=4*h*Math.PI/180,w=Math.floor(d*Math.cos(b)),y=.5,x=a.data[v+3],M={r:0,g:0,b:0};c.push({index:v,x:g,y:h,rr:p,r:w,s:y,a:x,rgb:M})}}},l=function(t){var a=t.value,o=t.from;t.to;f();var u=function(){if(i)return!0;o<n.height&&top>=n.height||(c.map((function(t){var e=Math.floor(a)+90,o=t.r,i=e*Math.PI/180,c=Math.floor(o*Math.cos(i))+t.x,f=t.y,u=Math.floor(f*(4*n.width)+4*c);r.data[u]=t.rgb.r,r.data[u+1]=t.rgb.g,r.data[u+2]=t.rgb.b,r.data[u+3]=t.a})),e.putImageData(r,n.x,n.y))};u()};return{init:s,scroll:l}},st=function(){var t,e,a,r,n=function(n,o,i,c){t=n,e=o.getImageData(0,0,i.width,i.height),a=t.createImageData(i.width,i.height),r=i,!1,c},o=function(){for(var n=0;n<r.height;n++)for(var o=0;o<r.width;o++){var i=Math.floor(n*(4*r.width)+4*o),c=(e.data[i]+e.data[i+1]+e.data[i+2])/3;c<255&&(a.data[i]=e.data[i],a.data[i+1]=e.data[i+1],a.data[i+2]=e.data[i+2],a.data[i+3]=e.data[i+3])}t.putImageData(a,r.x,r.y)},i=function(t){console.log("release",t),t,e=null,a=null};return{init:n,set:o,release:i}},lt=function(t){var e=t.elem,a=t.from,r=t.to,n=t.fromVal,o=t.toVal,i=(o-n)/(r-a),c=function(t){var a=t.value,r=i*a+n;e.style.transform="scale(".concat(r,")")},f=function(t){var a=t.value,r=i*a+n;e.style.transform="translateY(".concat(r,"px)")},u=function(t){var a=t.value,r=i*a+n;e.style.opacity=r};return{scale:c,translateY:f,opacity:u}},ht=(Math.random(1),nt()),dt=ct({isColor:!1}),gt=ot({isColor:!1}),vt=it(),mt=ft({isRandom:!0}),pt=ut({isColor:!1}),bt=st(),wt=[{from:100,to:200,effect:function(t){t.refs,t.top;var e=t.value;vt.scroll({value:e,from:100,to:200,frgb:{r:0,g:200,b:255}})}},{from:400,to:500,effect:function(t){t.refs,t.top;var e=t.value;vt.reverse({value:e,from:400,to:500,frgb:{r:0,g:200,b:255}})}},{from:700,to:1400,effect:function(t){t.refs,t.top;var e=t.value;pt.scroll({value:e,from:700,to:1400})}},{from:1400,to:1600,effect:function(t){var e=t.refs,a=(t.top,t.value);lt({elem:e.ref,from:1400,to:1600,fromVal:1,toVal:0}).opacity({value:a})}},{from:1600,to:1900,effect:function(t){var e=t.refs,a=(t.top,t.value);lt({elem:e.ref,from:1600,to:1900,fromVal:0,toVal:1}).opacity({value:a})}},{from:1800,to:2400,effect:function(t){t.refs,t.top;var e=t.value;mt.scroll({value:e,from:1800,to:2400})}},{from:2400,to:2600,effect:function(t){t.refs,t.top;var e=t.value;bt.set({value:e,from:2400,to:2600})}},{from:2200,to:2400,effect:function(t){var e=t.refs,a=(t.top,t.value);lt({elem:e.ref,from:2200,to:2400,fromVal:1,toVal:0}).opacity({value:a})}},{from:2400,to:2700,effect:function(t){var e=t.refs,a=(t.top,t.value);lt({elem:e.ref,from:2400,to:2700,fromVal:0,toVal:1}).opacity({value:a})}},{from:200,to:3e3,effect:function(t){var e=t.refs,a=(t.top,t.value);lt({elem:e.ref,from:200,to:3e3,fromVal:0,toVal:-100}).translateY({value:a})}},{from:3e3,to:3200,effect:function(t){t.refs,t.top;var e=t.value;bt.set({value:e,from:3e3,to:3200})}},{from:3200,to:4500,effect:function(t){t.refs,t.top;var e=t.value;dt.scroll({value:e,from:3200,to:4500})}},{from:4e3,to:5e3,effect:function(t){var e=t.refs,a=(t.top,t.value);lt({elem:e.ref,from:1500,to:2e3,fromVal:1,toVal:0}).opacity({value:a})}}],yt=function(t){var e=t.getContext("2d"),a=t.getBoundingClientRect(),r=null,n={ref:t,ctx:e,rect:a,dst:r};ht.init(e,e,a,128),gt.init(e,e,a,128),vt.init(e,e,a,128),dt.init(e,e,a,128),mt.init(e,e,a,128),pt.init(e,e,a,128),bt.init(e,e,a,128);var o=function(t){var e=u["filter"](wt,(function(e){return e.from<=t.top&&e.to>t.top}));u["map"](e,(function(e){if(e){var a=t.top-e.from,r={refs:n,top:t.top,value:a};e.effect(r)}}))};o({top:1}),$.getScroll((function(t){o(t)}))},xt={name:"app",data:function(){return{ref:null,bgcolor:{},img:a("febb")}},components:{CanvasImage:m,HtmlView:Z,BackgroundImage:rt,ContextConsumer:R},mounted:function(){var t=this,e=$;e.setHeight(1e4),this.$nextTick((function(){t.bgcolor={r:255,g:255,b:255}}))},methods:{setCanvasRef:function(t){yt(t)}}},Mt=xt,Ct=(a("5c0b"),Object(g["a"])(Mt,n,o,!1,null,null,null)),Ot=Ct.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(Ot)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var r=a("9c0c"),n=a.n(r);n.a},8594:function(t,e,a){"use strict";var r=a("bea7"),n=a.n(r);n.a},"9c0c":function(t,e,a){},bea7:function(t,e,a){},d0eb:function(t,e,a){},d7b9:function(t,e,a){"use strict";var r=a("4ac9"),n=a.n(r);n.a},febb:function(t,e,a){t.exports=a.p+"img/vrmonkey_tran.5165007a.png"}});
//# sourceMappingURL=app.8fd8829c.js.map