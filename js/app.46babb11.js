(function(t){function a(a){for(var r,i,f=a[0],c=a[1],u=a[2],h=0,s=[];h<f.length;h++)i=f[h],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&s.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(a);while(s.length)s.shift()();return o.push.apply(o,u||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],r=!0,f=1;f<e.length;f++){var c=e[f];0!==n[c]&&(r=!1)}r&&(o.splice(a--,1),t=i(i.s=e[0]))}return t}var r={},n={app:0},o=[];function i(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=r,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)i.d(e,r,function(a){return t[a]}.bind(null,r));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="";var f=window["webpackJsonp"]=window["webpackJsonp"]||[],c=f.push.bind(f);f.push=a,f=f.slice();for(var u=0;u<f.length;u++)a(f[u]);var d=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"2e3e":function(t,a,e){"use strict";var r=e("d0eb"),n=e.n(r);n.a},"4ac9":function(t,a,e){},"51c5":function(t,a,e){"use strict";var r=e("b71d"),n=e.n(r);n.a},"56d7":function(t,a,e){"use strict";e.r(a);var r={};e.r(r),e.d(r,"SkewedRight",(function(){return Q})),e.d(r,"SkewedLeft",(function(){return tt})),e.d(r,"SkewedLeftReverse",(function(){return at})),e.d(r,"SkewedRightReverse",(function(){return et}));e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("ContextConsumer",{attrs:{contextKey:["BGCOLOR"]},scopedSlots:t._u([{key:"default",fn:function(a){a.context;return[e("BackgroundImage",{attrs:{color:t.bgcolor}})]}}])}),e("CanvasTextView",{attrs:{txts:t.txts}}),e("HtmlView")],1)},i=[],f=(e("a4d3"),e("99af"),e("4de4"),e("4160"),e("0d03"),e("e439"),e("dbb4"),e("b64b"),e("159b"),e("2fa7")),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"frame",staticClass:"canvasImage"},[e("canvas",{ref:"canvas",staticClass:"canvas",attrs:{width:t.getCanvasWidth,height:t.getCanvasHeight}})])},u=[],d=(e("d3b7"),e("96cf"),e("89ba")),h=e("2ef0"),s=(e("26e9"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._t("default",null,{context:t.data})],2)}),l=[],v=void 0;function g(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?g(e,!0).forEach((function(a){Object(f["a"])(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):g(e).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}var p=function(){var t=[],a={},e=function(){h["each"](t,(function(t){t(a)}))},r=function(r){t.push(r),Object.keys(a).length>0&&e()},n=function(t,r){a[t]=r,e()};return{subscribe:e,getContext:r,setContext:n}},w=p(),x={data:function(){return{data:{},get:w.getContext.bind(v)}},props:{contextKey:{type:Array}},watch:{contextKey:{immediate:!0,handler:function(t){var a=this;h["map"](t,(function(t){a.data=Object(f["a"])({},t,null)}))}}},mounted:function(){var t=this;w.getContext((function(a){h["map"](t.contextKey,(function(e){if(h["has"](a,e)){var r=m({},t.data);r[e]=m({},a[e]),t.data=r}}))}))}},y=x,b=e("2877"),M=Object(b["a"])(y,s,l,!1,null,null,null),C=M.exports,D=function(){var t=[],a=document.getElementsByTagName("body")[0],e=a.getBoundingClientRect().height;document.addEventListener("scroll",(function(){var a=document.scrollingElement.scrollTop,e={top:a};w.setContext("SCROLL",e),h["map"](t,(function(t){t(e)}))}));var r=function(t){e+=t,a.style.height=e+"px"},n=function(a){t.push(a)};return{setHeight:r,getScroll:n}},T=D(),O=function(t,a,e){var r=0,n=function(e){var n=h["filter"](t,(function(t){return t.from<=e.top&&t.to>e.top}));h["map"](n,(function(t){if(t){var n=e.top-t.from,o=r-n,i={top:e.top,value:n,diff:o};a(t,i),r=n}}))};n({top:1}),T.getScroll((function(t){e&&e(),n(t)}))},I=function(){var t,a,e=function(e,r,n,o){t=e,a=n,!1,o},r=function(t){return new Promise((function(a){var e=new Image;e.onload=function(){a(e)},e.src=t}))},n=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(n){var o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=n.path,e.next=3,r(o);case 3:i=e.sent,t.clearRect(0,0,a.width,a.height),t.save(),t.drawImage(i,0,0,a.width,a.height),t.restore();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(n){var o,i,f,c,u,d,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=n.path,i=n.tile,n.rotate,e.next=3,r(o);case 3:for(f=e.sent,c=a.width/i.x,u=a.height/i.y,t.clearRect(0,0,a.width,a.height),t.save(),d=0;d<i.y;d++)for(h=0;h<i.x;h++)t.drawImage(f,c*h,u*d,c,u);t.restore();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{init:e,set:n,setTile:o}},j=function(t){var a,e,r,n,o=t.isColor,i=!1,f=!1,c=o,u=function(t,o,f,c){a=t,e=o.getImageData(0,0,f.width,f.height),r=a.createImageData(f.width,f.height),n=f,i=!1,c},d=function(t,a,n){t<255?(r.data[a]=n.r,r.data[a+1]=n.g,r.data[a+2]=n.b):(r.data[a]=e.data[a],r.data[a+1]=e.data[a+1],r.data[a+2]=e.data[a+2]),r.data[a+3]=e.data[a+3]},h=function(t){if(t)return{r:Math.floor(250*Math.random()),g:Math.floor(250*Math.random()),b:Math.floor(250*Math.random())};var a=Math.floor(250*Math.random());return{r:a,g:a,b:a}},s=function(t){var o=t.value,u=t.from,s=t.to,l=n.height/(s-u),v=function(){if(i)return!0;if(u<n.height&&top>=n.height)f||g();else{for(var t=0;t<n.height;t++)for(var s=0;s<n.width;s++){var v=Math.floor(t*(4*n.width)+4*s),m=(e.data[v]+e.data[v+1]+e.data[v+2])/3;if(t<o*l){var p=h(c);d(m,v,p)}else{var w={r:10,g:10,b:10};d(m,v,w)}}a.putImageData(r,n.x,n.y)}};v()},l=function(t){t.value;var o=t.from,f=t.to,u=(n.height,function(){if(i)return!0;if(!(o<n.height&&top>=n.height)){for(var t=0;t<n.height;t++)for(var f=0;f<n.width;f++){var u=Math.floor(t*(4*n.width)+4*f),s=(e.data[u]+e.data[u+1]+e.data[u+2])/3,l=h(c);d(s,u,l)}a.putImageData(r,n.x,n.y)}});u()},v=function(){u();for(var t=0;t<e.data.length;t+=4){var o=(e.data[t]+e.data[t+1]+e.data[t+2])/3;d(o,t,{r:255,g:128,b:0})}a.putImageData(r,n.x,n.y)},g=function(t){console.log("release",t),i=t,e=null,r=null};return{init:u,set:v,loop:l,scroll:s,release:g}},R=function(){var t,a,e,r,n=!1,o=!1,i=function(o,i,f,c){t=o,a=i.getImageData(0,0,f.width,f.height),e=t.createImageData(f.width,f.height),r=f,n=!1,c},f=function(t,r,n){t<255?(e.data[r]=n.r,e.data[r+1]=n.g,e.data[r+2]=n.b):(e.data[r]=a.data[r],e.data[r+1]=a.data[r+1],e.data[r+2]=a.data[r+2]),e.data[r+3]=a.data[r+3]},c=function(i){var c=i.value,u=i.from,d=i.to,s=i.frgb,l=(i.trgb,r.height/(d-u)),v=function(){if(n)return!0;if(u<r.height&&top>=r.height)o||h();else{for(var i=0;i<r.height;i++)for(var d=0;d<r.width;d++){var v=Math.floor(i*(4*r.width)+4*d),g=(a.data[v]+a.data[v+1]+a.data[v+2])/3;if(i<c*l)f(g,v,s);else{var m={r:10,g:10,b:10};f(g,v,m)}}t.putImageData(e,r.x,r.y)}};v()},u=function(i){var c=i.value,u=i.from,d=i.to,s=i.frgb,l=(i.trgb,r.height/(d-u)),v=function(){if(n)return!0;if(u<r.height&&top>=r.height)o||h();else{for(var i=0;i<r.height;i++)for(var d=0;d<r.width;d++){var v=Math.floor(i*(4*r.width)+4*d),g=(a.data[v]+a.data[v+1]+a.data[v+2])/3;if(i>c*l)f(g,v,s);else{var m={r:10,g:10,b:10};f(g,v,m)}}t.putImageData(e,r.x,r.y)}};v()},d=function(o){o.value;var i=o.from,c=o.to,u=o.rgb,d=(r.height,function(){if(n)return!0;if(!(i<r.height&&top>=r.height)){for(var o=0;o<r.height;o++)for(var c=0;c<r.width;c++){var d=Math.floor(o*(4*r.width)+4*c),h=(a.data[d]+a.data[d+1]+a.data[d+2])/3;f(h,d,u)}t.putImageData(e,r.x,r.y)}});d()},h=function(t){console.log("release",t),n=t,a=null,e=null};return{init:i,loop:d,scroll:c,reverse:u,release:h}},S=(e("d81d"),function(t){var a,e,r,n,o,i=t.isColor,f=!1,c=[],u=i,d=function(t,i,d,h){a=t,e=i.getImageData(0,0,d.width,d.height),r=a.createImageData(d.width,d.height),n=d,f=!1,o=h;for(var s=0;s<n.height;s++)for(var v=0;v<n.width;v++){var g=Math.floor(s*(4*n.width)+4*v),m=(e.data[g]+e.data[g+1]+e.data[g+2])/3;if(m<o){var p=Math.floor(360*Math.random()),w=1*Math.random()+1,x=2*Math.random(),y=e.data[g+3],b=l(u);c.push({index:g,x:v,y:s,rr:p,r:w,s:x,a:y,rgb:b})}}},h=function(t){var e=t.value,o=t.from;t.to;s();var i=function(){if(f)return!0;o<n.height&&top>=n.height||(c.map((function(t){var a=e*t.s,o=e/5+t.r,i=(t.rr+a)*Math.PI/180,f=Math.floor(o*Math.cos(i))+t.x,c=Math.floor(o*Math.sin(i))+t.y,u=Math.floor(c*(4*n.width)+4*f);r.data[u]=t.rgb.r,r.data[u+1]=t.rgb.g,r.data[u+2]=t.rgb.b,r.data[u+3]=t.a})),a.putImageData(r,n.x,n.y))};i()},s=function(){for(var t=0;t<n.height;t++)for(var a=0;a<n.width;a++){var e=Math.floor(t*(4*n.width)+4*a);r.data[e]=255,r.data[e+1]=255,r.data[e+2]=255,r.data[e+3]=0}},l=function(t){return t?{r:Math.floor(250*Math.random()),g:Math.floor(250*Math.random()),b:Math.floor(250*Math.random())}:{r:0,g:0,b:0}};return{init:d,scroll:h}}),k=function(t){var a,e,r,n,o,i=t.isColor,f=!1,c=[],u=i,d=function(t,i,d,s){a=t,e=i.getImageData(0,0,d.width,d.height),r=a.createImageData(d.width,d.height),n=d,f=!1,o=s;for(var l=0;l<n.height;l++)for(var g=0;g<n.width;g++){var m=Math.floor(l*(4*n.width)+4*g),p=(e.data[m]+e.data[m+1]+e.data[m+2])/3;if(p<o){var w=[90,270][h["random"](1)],x=50*Math.random(),y=Math.floor(10*Math.random()),b=2*Math.random(),M=e.data[m+3],C=v(u);c.push({index:m,x:g,y:l,rr:w,rx:x,ry:y,s:b,a:M,rgb:C})}}},s=function(t){var e=t.value,o=t.from,i=(t.to,t.sp),u=void 0===i?50:i;l();var d=function(){if(f)return!0;o<n.height&&top>=n.height||(c.map((function(t){var a=e/u,o=t.rx,i=t.ry,f=(t.rr+a)*Math.PI/180,c=Math.floor(o*Math.cos(f))+t.x,d=Math.floor(i*Math.sin(f+f))+t.y,h=Math.floor(d*(4*n.width)+4*c);r.data[h]=t.rgb.r,r.data[h+1]=t.rgb.g,r.data[h+2]=t.rgb.b,r.data[h+3]=t.a})),a.putImageData(r,n.x,n.y))};d()},l=function(){for(var t=0;t<n.height;t++)for(var a=0;a<n.width;a++){var e=Math.floor(t*(4*n.width)+4*a);r.data[e]=255,r.data[e+1]=255,r.data[e+2]=255,r.data[e+3]=0}},v=function(t){return t?{r:Math.floor(250*Math.random()),g:Math.floor(250*Math.random()),b:Math.floor(250*Math.random())}:{r:0,g:0,b:0}};return{init:d,scroll:s}},_=function(t){var a,e,r,n,o=t.isRandom,i=!1,f=o,c=[],u=function(t,o,f,c){a=t,e=o.getImageData(0,0,f.width,f.height),r=a.createImageData(f.width,f.height),n=f,i=!1,c},d=function(){for(var t=0;t<n.height;t++)for(var a=0;a<n.width;a++){var e=Math.floor(t*(4*n.width)+4*a);r.data[e]=255,r.data[e+1]=255,r.data[e+2]=255,r.data[e+3]=0}},h=function(t,a){r.data[a]=0,r.data[a+1]=0,r.data[a+2]=0,r.data[a+3]=e.data[t-1]},s=function(t){return e.data[t-1]},l=function(t){return e.data[t+4]},v=function(t){var o=t.value,u=t.from;t.to;d();var v=function(){if(i)return!0;if(!(u<n.height&&top>=n.height)){for(var t=0;t<n.height;t++){for(var d=0;d<n.width;d++){var v=Math.floor(t*(4*n.width)+4*d);e.data[v],e.data[v+1],e.data[v+2];if(0===e.data[v+3]&&s(v)>0){c[v]||(c[v]=f?Math.floor(4*Math.random()):1);for(var g=v+4*Math.floor(o*c[v]/10),m=v;m<g;m+=4)h(v,m)}}for(var p=n.width;p>0;p--){var w=Math.floor(t*(4*n.width)+4*p);e.data[w],e.data[w+1],e.data[w+2];if(e.data[w+3]>0&&0===l(w)){c[w]||(c[w]=f?Math.floor(10*Math.random()):1);for(var x=w-4*Math.floor(o*c[w]/10),y=x;y<w;y+=4)h(x,y)}else{var b=(r.data[w]+r.data[w+1]+r.data[w+2])/3;255===b&&(r.data[w]=1,r.data[w+1]=1,r.data[w+2]=1,r.data[w+3]=e.data[w+3])}}}a.putImageData(r,n.x,n.y)}};v()};return{init:u,scroll:v}},P=function(t){t.isColor;var a,e,r,n,o,i=!1,f=[],c=function(){for(var t=0;t<n.height;t++)for(var a=0;a<n.width;a++){var e=Math.floor(t*(4*n.width)+4*a);r.data[e]=255,r.data[e+1]=255,r.data[e+2]=255,r.data[e+3]=0}},u=function(t,c,u,d){a=t,e=c.getImageData(0,0,u.width,u.height),r=a.createImageData(u.width,u.height),n=u,i=!1,o=d;for(var s=0;s<n.height;s++)for(var l=h["random"](10),v=0;v<n.width;v++){var g=Math.floor(s*(4*n.width)+4*v),m=(e.data[g]+e.data[g+1]+e.data[g+2])/3;if(m<o){var p=0,w=4*s*Math.PI/180,x=Math.floor(l*Math.cos(w)),y=.5,b=e.data[g+3],M={r:0,g:0,b:0};f.push({index:g,x:v,y:s,rr:p,r:x,s:y,a:b,rgb:M})}}},d=function(t){var e=t.value,o=t.from;t.to;c();var u=function(){if(i)return!0;o<n.height&&top>=n.height||(f.map((function(t){var a=Math.floor(e)+90,o=t.r,i=a*Math.PI/180,f=Math.floor(o*Math.cos(i))+t.x,c=t.y,u=Math.floor(c*(4*n.width)+4*f);r.data[u]=t.rgb.r,r.data[u+1]=t.rgb.g,r.data[u+2]=t.rgb.b,r.data[u+3]=t.a})),a.putImageData(r,n.x,n.y))};u()};return{init:u,scroll:d}},$=function(){var t,a,e,r,n=function(n,o,i,f){t=n,a=o.getImageData(0,0,i.width,i.height),e=t.createImageData(i.width,i.height),r=i,!1,f},o=function(){for(var n=0;n<r.height;n++)for(var o=0;o<r.width;o++){var i=Math.floor(n*(4*r.width)+4*o),f=(a.data[i]+a.data[i+1]+a.data[i+2])/3;f<255&&(e.data[i]=a.data[i],e.data[i+1]=a.data[i+1],e.data[i+2]=a.data[i+2],e.data[i+3]=a.data[i+3])}t.putImageData(e,r.x,r.y)},i=function(t){console.log("release",t),t,a=null,e=null};return{init:n,set:o,release:i}},E=function(t){var a=t.elem,e=t.from,r=t.to,n=t.fromVal,o=t.toVal,i=(o-n)/(r-e),f=function(t){var e=t.value,r=i*e+n;a.style.transform="scale(".concat(r,")")},c=function(t){var e=t.value,r=i*e+n;a.style.transform="translateY(".concat(r,"px)")},u=function(t){var e=t.value,r=i*e+n;a.style.opacity=r};return{scale:f,translateY:c,opacity:u}},F=(Math.random(1),I()),V=S({isColor:!1}),A=k({isColor:!1}),U=j({isColor:!1}),H=R(),B=_({isRandom:!0}),z=P({isColor:!1}),L=$(),K=[{from:100,to:200,effect:function(t){t.refs,t.top;var a=t.value;H.scroll({value:a,from:100,to:200,frgb:{r:0,g:200,b:255}})}},{from:400,to:500,effect:function(t){t.refs,t.top;var a=t.value;H.reverse({value:a,from:400,to:500,frgb:{r:0,g:200,b:255}})}},{from:700,to:1400,effect:function(t){t.refs,t.top;var a=t.value;z.scroll({value:a,from:700,to:1400})}},{from:1400,to:1600,effect:function(t){var a=t.refs,e=(t.top,t.value);E({elem:a.ref,from:1400,to:1600,fromVal:1,toVal:0}).opacity({value:e})}},{from:1600,to:1900,effect:function(t){var a=t.refs,e=(t.top,t.value);E({elem:a.ref,from:1600,to:1900,fromVal:0,toVal:1}).opacity({value:e})}},{from:1800,to:2400,effect:function(t){t.refs,t.top;var a=t.value;B.scroll({value:a,from:1800,to:2400})}},{from:2400,to:2600,effect:function(t){t.refs,t.top;var a=t.value;L.set({value:a,from:2400,to:2600})}},{from:2200,to:2400,effect:function(t){var a=t.refs,e=(t.top,t.value);E({elem:a.ref,from:2200,to:2400,fromVal:1,toVal:0}).opacity({value:e})}},{from:2400,to:2700,effect:function(t){var a=t.refs,e=(t.top,t.value);E({elem:a.ref,from:2400,to:2700,fromVal:0,toVal:1}).opacity({value:e})}},{from:3e3,to:3200,effect:function(t){t.refs,t.top;var a=t.value;L.set({value:a,from:3e3,to:3200})}},{from:3200,to:4500,effect:function(t){t.refs,t.top;var a=t.value;A.scroll({value:a,from:3200,to:4500,sp:20})}},{from:4500,to:6e3,effect:function(t){t.refs,t.top;var a=t.value;V.scroll({value:a,from:4500,to:6e3})}},{from:5e3,to:6e3,effect:function(t){var a=t.refs,e=(t.top,t.value);E({elem:a.ref,from:5e3,to:6e3,fromVal:1,toVal:0}).opacity({value:e})}}],W=function(t){var a=t.getContext("2d"),e=t.getBoundingClientRect(),r=null,n={ref:t,ctx:a,rect:e,dst:r};F.init(a,a,e,128),U.init(a,a,e,128),H.init(a,a,e,128),V.init(a,a,e,128),A.init(a,a,e,128),B.init(a,a,e,128),z.init(a,a,e,128),L.init(a,a,e,128),O(K,(function(t,a){var e=a.top,r=a.value,o={top:e,value:r,refs:n};t.effect(o)}))},X=function(t,a){var e=t.width/a.width;return{x:0,y:0,width:a.width*e,height:a.height*e}},Y=function(t,a){return new Promise((function(e){var r=new Image;r.onload=function(){var a=t.getBoundingClientRect(),n={left:0,top:0,width:r.width,height:r.height},o=X(a,n);e({fit:o,img:r})},r.src=a}))},G={data:function(){return{imageData:null,canvasData:{width:300,height:300},edge:300}},props:{src:String},mounted:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.init(),t.next=3,this.resizeCanvas();case 3:this.setTile(300,(function(){W(a.$refs.canvas)}));case 4:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),methods:{init:function(){var t;window.addEventListener("resize",(function(){clearTimeout(t),t=setTimeout((function(){}),300)}))},resizeCanvas:function(){var t=this;return new Promise(function(){var a=Object(d["a"])(regeneratorRuntime.mark((function a(e){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Y(t.$refs.frame,t.src);case 2:t.imageData=a.sent,r=h["cloneDeep"](t.canvasData),r.width=window.innerWidth,r.height=window.innerHeight,t.canvasData=r,e();case 8:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}())},setTile:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(a,e){var r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Y(this.$refs.frame,this.src);case 2:this.imageData=t.sent,this.$nextTick((function(){var t=a,n=a,o=r.$refs.canvas.width/2-t/2,i=r.$refs.canvas.height/2-n/2,f=r.$refs.canvas.getContext("2d");f.clearRect(0,0,r.$refs.canvas.width,r.$refs.canvas.height),f.save(),f.drawImage(r.imageData.img,o,i,t,n),f.restore(),e()}));case 4:case"end":return t.stop()}}),t,this)})));function a(a,e){return t.apply(this,arguments)}return a}()},computed:{getCanvasWidth:function(){return this.canvasData.width+"px"},getCanvasHeight:function(){return this.canvasData.height+"px"}}},J=G,N=(e("51c5"),Object(b["a"])(J,c,u,!1,null,"75d94856",null)),Z=(N.exports,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"frame",staticClass:"canvasText"},t._l(t.txts,(function(a,r){return e("CanvasTextLayer",{key:r,attrs:{txt:a,canvasData:t.canvasData},on:{setCanvasRef:t.setCanvasRef}})})),1)}),q=[],Q=(e("b680"),function(t,a,e){e.top;for(var r=e.value,n=(e.diff,t.getContext("2d")),o=t.getBoundingClientRect(),i=n.getImageData(0,0,o.width,o.height),f=n.createImageData(o.width,o.height),c=0;c<o.height;c++)for(var u=0;u<o.width;u++){var d=Math.floor(c*(4*o.width)+4*u);f.data[d]=i.data[d],f.data[d+1]=i.data[d+1],f.data[d+2]=i.data[d+2],f.data[d+3]=i.data[d+3]}for(var h=+(o.width/(a.to-a.from)).toFixed(2),s=[],l=0;l<o.height;l++)for(var v=0;v<o.width;v++){var g=Math.floor(l*(4*o.width)+4*v);v<r*h?(f.data[g]=i.data[g],f.data[g+1]=i.data[g+1],f.data[g+2]=i.data[g+2],f.data[g+3]=i.data[g+3],s[l]={r:i.data[g],g:i.data[g+1],b:i.data[g+2],a:i.data[g+3]}):(f.data[g]=s[l].r,f.data[g+1]=s[l].g,f.data[g+2]=s[l].b,f.data[g+3]=s[l].a)}n.putImageData(f,o.x,o.y)}),tt=function(t,a,e){e.top;for(var r=e.value,n=(e.diff,t.getContext("2d")),o=t.getBoundingClientRect(),i=n.getImageData(0,0,o.width,o.height),f=n.createImageData(o.width,o.height),c=0;c<o.height;c++)for(var u=0;u<o.width;u++){var d=Math.floor(c*(4*o.width)+4*u);f.data[d]=i.data[d],f.data[d+1]=i.data[d+1],f.data[d+2]=i.data[d+2],f.data[d+3]=i.data[d+3]}for(var h=[],s=0;s<o.height;s++)for(var l=o.width;l>0;l--){var v=Math.floor(s*(4*o.width)+4*l);l>o.width-.5*r?(f.data[v]=i.data[v],f.data[v+1]=i.data[v+1],f.data[v+2]=i.data[v+2],f.data[v+3]=i.data[v+3],h[s]={r:i.data[v],g:i.data[v+1],b:i.data[v+2],a:i.data[v+3]}):(f.data[v]=h[s].r,f.data[v+1]=h[s].g,f.data[v+2]=h[s].b,f.data[v+3]=h[s].a)}n.putImageData(f,o.x,o.y)},at=function(t,a,e){e.top;for(var r=e.value,n=(e.diff,t.getContext("2d")),o=t.getBoundingClientRect(),i=n.getImageData(0,0,o.width,o.height),f=n.createImageData(o.width,o.height),c=0;c<o.height;c++)for(var u=0;u<o.width;u++){var d=Math.floor(c*(4*o.width)+4*u);f.data[d]=i.data[d],f.data[d+1]=i.data[d+1],f.data[d+2]=i.data[d+2],f.data[d+3]=i.data[d+3]}for(var h=[],s=[],l=0;l<o.height;l++)for(var v=o.width;v>0;v--){var g=Math.floor(l*(4*o.width)+4*v);v>o.width-.5*r?(f.data[g]=i.data[g],f.data[g+1]=i.data[g+1],f.data[g+2]=i.data[g+2],f.data[g+3]=i.data[g+3],s[l]={r:i.data[g],g:i.data[g+1],b:i.data[g+2],a:i.data[g+3]},h[l]={index:g,x:v,y:l}):(f.data[g]=s[l].r,f.data[g+1]=s[l].g,f.data[g+2]=s[l].b,f.data[g+3]=s[l].a)}for(var m=0;m<o.height;m++)for(var p=0;p<o.width;p++){var w=Math.floor(m*(4*o.width)+4*p);h[m].x<p?(f.data[w]=s[m].r,f.data[w+1]=s[m].g,f.data[w+2]=s[m].b,f.data[w+3]=s[m].a):(f.data[w]=i.data[w],f.data[w+1]=i.data[w+1],f.data[w+2]=i.data[w+2],f.data[w+3]=i.data[w+3])}n.putImageData(f,o.x,o.y)},et=function(t,a,e){e.top;for(var r=e.value,n=(e.diff,t.getContext("2d")),o=t.getBoundingClientRect(),i=n.getImageData(0,0,o.width,o.height),f=n.createImageData(o.width,o.height),c=0;c<o.height;c++)for(var u=0;u<o.width;u++){var d=Math.floor(c*(4*o.width)+4*u);f.data[d]=i.data[d],f.data[d+1]=i.data[d+1],f.data[d+2]=i.data[d+2],f.data[d+3]=i.data[d+3]}for(var h=+(o.width/(a.to-a.from)).toFixed(2),s=[],l=[],v=0;v<o.height;v++)for(var g=o.width;g>0;g--){var m=Math.floor(v*(4*o.width)+4*g),p=Math.floor(o.width-r*h);g===p&&(l[v]={r:i.data[m],g:i.data[m+1],b:i.data[m+2],a:i.data[m+3]},s[v]={index:m,x:g,y:v})}for(var w=0;w<o.height;w++)for(var x=0;x<o.width;x++){var y=Math.floor(w*(4*o.width)+4*x);s[w]&&x>=s[w].x?(f.data[y]=l[w].r,f.data[y+1]=l[w].g,f.data[y+2]=l[w].b,f.data[y+3]=l[w].a):(f.data[y]=i.data[y],f.data[y+1]=i.data[y+1],f.data[y+2]=i.data[y+2],f.data[y+3]=i.data[y+3])}n.putImageData(f,o.x,o.y)},rt=function(){var t,a=function(a){t=a},e=function(a,e,r,n){var o=e.fontFamily,i=e.fontSize,f=e.color,c=e.align,u=e.moveTo,d=e.letterSpacing,s=r.top,l=r.value,v=r.diff;t.style.letterSpacing=d;var g=t.getContext("2d");g.font="".concat(i,"px '").concat(o,"'"),g.fillStyle=f,g.textAlign=c;var m="center"===c?Math.floor((n-u.x)/2):u.x;console.log("align",c,n,m),h["map"](a,(function(t,a){var e=u.y-i*a;g.fillText(h["isFunction"](t)?t({top:s,value:l,diff:v}):t,m,e,n?n-u.x:null)}))};return{init:a,setText:e}},nt=function(t,a,e){var n={x:0,y:0},o=rt();o.init(t);var i=t.getContext("2d");O(a,(function(a,i){var f=i.top,c=i.value,u=i.diff,d=(window.innerHeight,(a.moveFrom.y-a.moveTo.y)/Math.abs(a.to-a.from));n.y+=u*d;var s=a.moveFrom.y+n.y,l=h["cloneDeep"](a.style);l.moveTo={x:a.moveTo.x,y:s},o.setText(a.text,l,{top:f,value:c,diff:u},e),a.eff&&a.eff.length&&r[a.eff[0]](t,a,{top:f,value:c,diff:u})}),(function(){i.clearRect(0,0,t.width,t.height)}))},ot=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("canvas",{ref:"src",staticClass:"canvas src",attrs:{width:t.canvasData.width+"px",height:t.canvasData.height+"px"}}),e("canvas",{ref:"canvas",staticClass:"canvas",attrs:{width:t.canvasData.width+"px",height:t.canvasData.height+"px"}})])},it=[],ft={data:function(){return{refsFlag:!1}},props:{canvasData:{type:Object,default:function(){return{width:0,height:0}}},txt:{type:Object}},mounted:function(){},methods:{init:function(){},setCanvasRef:function(){this.txt.id&&this.$refs.canvas&&!this.refsFlag&&(this.$emit("setCanvasRef",{id:this.txt.id,ref:this.$refs.canvas}),this.refsFlag=!0)}},watch:{txt:{immediate:!0,handler:function(t){var a=this;this.$nextTick((function(){a.setCanvasRef()}))}},$refs:{immediate:!0,handler:function(t){var a=this;this.$nextTick((function(){a.setCanvasRef()}))}}}},ct=ft,ut=(e("951e"),Object(b["a"])(ct,ot,it,!1,null,"09762c11",null)),dt=ut.exports,ht={data:function(){return{canvasRef:[],canvasData:{width:0,height:0}}},components:{CanvasTextLayer:dt},mounted:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.init(),t.next=3,this.resizeCanvas();case 3:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),props:{txts:{type:Array}},methods:{init:function(){var t;window.addEventListener("resize",(function(){clearTimeout(t),t=setTimeout((function(){}),300)}))},setCanvasRef:function(t){var a=t.id,e=t.ref;a&&e&&(this.canvasRef[a]=e,nt(this.canvasRef[a],h["filter"](this.txts,(function(t){return t.id===a})),this.canvasData.width))},resizeCanvas:function(){var t=this;return new Promise(function(){var a=Object(d["a"])(regeneratorRuntime.mark((function a(e){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:r=h["cloneDeep"](t.canvasData),r.width=window.innerWidth,r.height=window.innerHeight,t.canvasData=r,e();case 5:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}())}}},st=ht,lt=(e("5963"),Object(b["a"])(st,Z,q,!1,null,"077bd3c7",null)),vt=lt.exports,gt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"htmlView"}},[e("ContextConsumer",{attrs:{contextKey:["HTML_VIEW"]},scopedSlots:t._u([{key:"default",fn:function(a){var r=a.context;return t._l(t.getItems(r["HTML_VIEW"]),(function(a,r){return e("div",{key:r},[e(t.getComponent(a.view),{tag:"component",attrs:{value:a}})],1)}))}}])})],1)},mt=[],pt={TEXT:"text",IMG:"img"},wt={color:"#333",fontFamily:"'Roboto', sans-serif",textAlign:"center"},xt=[{from:1,to:600,html:{view:pt.TEXT,text:"BACKHAM",style:{fontSize:"24px",color:wt.color,fontFamily:wt.fontFamily,textAlign:wt.textAlign}}},{from:800,to:1200,html:{view:pt.TEXT,text:"DESIGN",style:{fontSize:"120px",color:wt.color,fontFamily:wt.fontFamily,textAlign:wt.textAlign}}},{from:1400,to:1800,html:{view:pt.TEXT,text:"UI",style:{fontSize:"120px",color:wt.color,fontFamily:wt.fontFamily,textAlign:wt.textAlign}}},{from:3e3,to:4e3,html:{view:pt.TEXT,text:"backham",style:{fontSize:"26px",color:wt.color,fontFamily:wt.fontFamily,textAlign:wt.textAlign}}}],yt=function(){var t=function(t){var a=h["filter"](xt,(function(a){return a.from<=t.top&&a.to>t.top})),e=[];h["map"](a,(function(a){if(a){var r=h["cloneDeep"](a.html);r.scroll=t.top-a.from,e.push(r)}})),w.setContext("HTML_VIEW",e)};t({top:1}),T.getScroll((function(a){t(a)}))},bt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"textView"},[e("div",{style:t.style},[t._v(t._s(t.text))])])},Mt=[],Ct=(e("a15b"),e("ac1f"),e("5319"),{data:function(){return{style:"",text:""}},props:{value:{type:Object}},methods:{stringToCss:function(t){return t.replace(/([A-Z])/g,(function(t){return"-"+t.charAt(0).toLowerCase()}))}},watch:{value:{immediate:!0,handler:function(t){var a=this,e=h["map"](t.style,(function(t,e){return"".concat(a.stringToCss(e),":").concat(t)}));this.style=e.join(";"),this.text=t.text?t.text:"ok "}}}}),Dt=Ct,Tt=(e("d7b9"),Object(b["a"])(Dt,bt,Mt,!1,null,null,null)),Ot=Tt.exports,It=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"imgView"},[e("img",{attrs:{src:t.src}})])},jt=[],Rt={data:function(){return{src:""}},props:{value:{type:Object}}},St=Rt,kt=Object(b["a"])(St,It,jt,!1,null,null,null),_t=kt.exports,Pt={data:function(){return{}},components:{ContextConsumer:C,TextView:Ot,ImgView:_t},methods:{getItems:function(t){return t||[]},getComponent:function(t){return t===pt.TEXT?Ot:t===pt.IMG?_t:Ot}}},$t=Pt,Et=Object(b["a"])($t,gt,mt,!1,null,null,null),Ft=Et.exports,Vt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"bg",style:t.getStyle,attrs:{id:"bg"}})},At=[],Ut=function(t,a){return JSON.stringify(t)===JSON.stringify(a)},Ht={data:function(){return{style:"",canvasData:{}}},props:{color:{type:Object,default:function(){return{}}}},mounted:function(){},watch:{color:{immediate:!0,handler:function(t,a){Ut(t,a)||(this.setBackgroundColor(t),this.getSize())}}},methods:{setBackgroundColor:function(t){if(this.$refs.bg){this.$refs.bg.getBoundingClientRect();this.style="background-color:rgb(".concat(t.r,",").concat(t.g,",").concat(t.b,");")}},getSize:function(){if(this.$refs.bg){var t=this.$refs.bg.getBoundingClientRect();this.canvasData={width:t.width,height:t.height}}}},computed:{getStyle:function(){return this.style},getCanvasWidth:function(){return this.canvasData.width+"px"},getCanvasHeight:function(){return this.canvasData.height+"px"}}},Bt=Ht,zt=(e("2e3e"),Object(b["a"])(Bt,Vt,At,!1,null,null,null)),Lt=zt.exports;function Kt(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function Wt(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?Kt(e,!0).forEach((function(a){Object(f["a"])(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Kt(e).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}var Xt={default:{fontFamily:"robot",fontSize:48,color:"black",align:"center",letterSpacing:"4px"}},Yt=[{id:1001,from:50,to:1e3,text:[function(t){t.top,t.value,t.diff;var a=new Date;return"".concat(a.getUTCDate(),".").concat(a.getUTCMonth(),".").concat(a.getUTCFullYear(),".").concat(a.getUTCHours(),".").concat(a.getUTCMinutes(),".").concat(a.getUTCSeconds(),".").concat(a.getUTCMilliseconds())}],style:Wt({},Xt.default,{fontSize:10}),moveTo:{x:0,y:64},moveFrom:{x:0,y:64},eff:["SkewedRight"]},{id:1003,from:1e3,to:3500,text:[function(t){t.top,t.value,t.diff;var a=new Date;return"".concat(a.getUTCDate(),".").concat(a.getUTCMonth(),".").concat(a.getUTCFullYear(),".").concat(a.getUTCHours(),".").concat(a.getUTCMinutes(),".").concat(a.getUTCSeconds(),".").concat(a.getUTCMilliseconds())}],style:Wt({},Xt.default,{fontSize:10}),moveTo:{x:0,y:64},moveFrom:{x:0,y:64},eff:[]},{id:1004,from:3500,to:4e3,text:[function(t){t.top,t.value,t.diff;var a=new Date;return"".concat(a.getUTCDate(),".").concat(a.getUTCMonth(),".").concat(a.getUTCFullYear(),".").concat(a.getUTCHours(),".").concat(a.getUTCMinutes(),".").concat(a.getUTCSeconds(),".").concat(a.getUTCMilliseconds())}],style:Wt({},Xt.default,{fontSize:10}),moveTo:{x:0,y:64},moveFrom:{x:0,y:64},eff:["SkewedRightReverse"]},{id:2,from:1e3,to:2500,text:["BACKHAM"],style:Xt.default,moveTo:{x:0,y:400},moveFrom:{x:0,y:400},eff:["SkewedRight"]},{id:3,from:2500,to:3500,text:["BACKHAM"],style:Xt.default,moveTo:{x:0,y:400},moveFrom:{x:0,y:400},eff:[]},{id:4,from:3500,to:5e3,text:["BACKHAM"],style:Xt.default,moveTo:{x:0,y:400},moveFrom:{x:0,y:400},eff:["SkewedRightReverse"]}],Gt={name:"app",data:function(){return{ref:null,bgcolor:{},img:e("febb"),txts:Yt}},components:{CanvasTextView:vt,HtmlView:Ft,BackgroundImage:Lt,ContextConsumer:C},mounted:function(){var t=this,a=T;a.setHeight(1e4),this.$nextTick((function(){t.bgcolor={r:255,g:255,b:255}}))},methods:{setCanvasRef:function(t){yt()}}},Jt=Gt,Nt=(e("5c0b"),Object(b["a"])(Jt,o,i,!1,null,null,null)),Zt=Nt.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(Zt)}}).$mount("#app")},5963:function(t,a,e){"use strict";var r=e("d2a8"),n=e.n(r);n.a},"5c0b":function(t,a,e){"use strict";var r=e("9c0c"),n=e.n(r);n.a},"951e":function(t,a,e){"use strict";var r=e("fc26"),n=e.n(r);n.a},"9c0c":function(t,a,e){},b71d:function(t,a,e){},d0eb:function(t,a,e){},d2a8:function(t,a,e){},d7b9:function(t,a,e){"use strict";var r=e("4ac9"),n=e.n(r);n.a},fc26:function(t,a,e){},febb:function(t,a,e){t.exports=e.p+"img/vrmonkey_tran.5165007a.png"}});
//# sourceMappingURL=app.46babb11.js.map