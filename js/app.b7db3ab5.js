(function(t){function a(a){for(var r,i,f=a[0],h=a[1],c=a[2],u=0,s=[];u<f.length;u++)i=f[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&s.push(n[i][0]),n[i]=0;for(r in h)Object.prototype.hasOwnProperty.call(h,r)&&(t[r]=h[r]);d&&d(a);while(s.length)s.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],r=!0,f=1;f<e.length;f++){var h=e[f];0!==n[h]&&(r=!1)}r&&(o.splice(a--,1),t=i(i.s=e[0]))}return t}var r={},n={app:0},o=[];function i(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=r,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)i.d(e,r,function(a){return t[a]}.bind(null,r));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="";var f=window["webpackJsonp"]=window["webpackJsonp"]||[],h=f.push.bind(f);f.push=a,f=f.slice();for(var c=0;c<f.length;c++)a(f[c]);var d=h;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"1e97":function(t,a,e){},"2e3e":function(t,a,e){"use strict";var r=e("d0eb"),n=e.n(r);n.a},"4ac9":function(t,a,e){},"51c5":function(t,a,e){"use strict";var r=e("b71d"),n=e.n(r);n.a},"56d7":function(t,a,e){"use strict";e.r(a);var r={};e.r(r),e.d(r,"Stay",(function(){return tt})),e.d(r,"SkewedRight",(function(){return at})),e.d(r,"SkewedLeft",(function(){return et})),e.d(r,"SkewedLeftReverse",(function(){return rt})),e.d(r,"SkewedRightReverse",(function(){return nt})),e.d(r,"PixelNoise",(function(){return dt}));e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("ContextConsumer",{attrs:{contextKey:["BGCOLOR"]},scopedSlots:t._u([{key:"default",fn:function(a){a.context;return[e("BackgroundImage",{attrs:{color:t.bgcolor}})]}}])}),e("CanvasTextView",{attrs:{txts:t.txts,imgs:t.imgs}}),e("HtmlView")],1)},i=[],f=(e("99af"),e("0d03"),e("2ef0")),h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"frame",staticClass:"canvasImage"},[e("canvas",{ref:"canvas",staticClass:"canvas",attrs:{width:t.getCanvasWidth,height:t.getCanvasHeight}})])},c=[],d=(e("d3b7"),e("96cf"),e("89ba")),u=(e("26e9"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._t("default",null,{context:t.data})],2)}),s=[],l=(e("a4d3"),e("4de4"),e("4160"),e("e439"),e("dbb4"),e("b64b"),e("159b"),e("2fa7")),g=void 0;function v(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?v(e,!0).forEach((function(a){Object(l["a"])(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):v(e).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}var w=function(){var t=[],a={},e=function(){f["each"](t,(function(t){t(a)}))},r=function(r){t.push(r),Object.keys(a).length>0&&e()},n=function(t,r){a[t]=r,e()};return{subscribe:e,getContext:r,setContext:n}},p=w(),x={data:function(){return{data:{},get:p.getContext.bind(g)}},props:{contextKey:{type:Array}},watch:{contextKey:{immediate:!0,handler:function(t){var a=this;f["map"](t,(function(t){a.data=Object(l["a"])({},t,null)}))}}},mounted:function(){var t=this;p.getContext((function(a){f["map"](t.contextKey,(function(e){if(f["has"](a,e)){var r=m({},t.data);r[e]=m({},a[e]),t.data=r}}))}))}},y=x,b=e("2877"),M=Object(b["a"])(y,u,s,!1,null,null,null),R=M.exports,C=function(){var t=[],a=document.getElementsByTagName("body")[0],e=a.getBoundingClientRect().height;document.addEventListener("scroll",(function(){var a=document.scrollingElement.scrollTop,e={top:a};p.setContext("SCROLL",e),f["map"](t,(function(t){t(e)}))}));var r=function(t){e+=t,a.style.height=e+"px"},n=function(a){t.push(a)};return{setHeight:r,getScroll:n}},T=C(),E=function(t,a,e){var r=0,n=function(e){var n=f["filter"](t,(function(t){return t.from<=e.top&&t.to>e.top}));f["map"](n,(function(t){if(t){var n=e.top-t.from,o=r-n,i={top:e.top,value:n,diff:o};a(t,i),r=n}}))};n({top:1}),T.getScroll((function(t){e&&e(),n(t)}))},O=function(){var t,a,e=function(e,r,n,o){t=e,a=n,!1,o},r=function(t){return new Promise((function(a){var e=new Image;e.onload=function(){a(e)},e.src=t}))},n=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(n){var o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=n.path,e.next=3,r(o);case 3:i=e.sent,t.clearRect(0,0,a.width,a.height),t.save(),t.drawImage(i,0,0,a.width,a.height),t.restore();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(n){var o,i,f,h,c,d,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=n.path,i=n.tile,n.rotate,e.next=3,r(o);case 3:for(f=e.sent,h=a.width/i.x,c=a.height/i.y,t.clearRect(0,0,a.width,a.height),t.save(),d=0;d<i.y;d++)for(u=0;u<i.x;u++)t.drawImage(f,h*u,c*d,h,c);t.restore();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{init:e,set:n,setTile:o}},D=function(t){var a,e,r,n,o=t.isColor,i=!1,f=!1,h=o,c=function(t,o,f,h){a=t,e=o.getImageData(0,0,f.width,f.height),r=a.createImageData(f.width,f.height),n=f,i=!1,h},d=function(t,a,n){t<255?(r.data[a]=n.r,r.data[a+1]=n.g,r.data[a+2]=n.b):(r.data[a]=e.data[a],r.data[a+1]=e.data[a+1],r.data[a+2]=e.data[a+2]),r.data[a+3]=e.data[a+3]},u=function(t){if(t)return{r:Math.floor(250*Math.random()),g:Math.floor(250*Math.random()),b:Math.floor(250*Math.random())};var a=Math.floor(250*Math.random());return{r:a,g:a,b:a}},s=function(t){var o=t.value,c=t.from,s=t.to,l=n.height/(s-c),g=function(){if(i)return!0;if(c<n.height&&top>=n.height)f||v();else{for(var t=0;t<n.height;t++)for(var s=0;s<n.width;s++){var g=Math.floor(t*(4*n.width)+4*s),m=(e.data[g]+e.data[g+1]+e.data[g+2])/3;if(t<o*l){var w=u(h);d(m,g,w)}else{var p={r:10,g:10,b:10};d(m,g,p)}}a.putImageData(r,n.x,n.y)}};g()},l=function(t){t.value;var o=t.from,f=t.to,c=(n.height,function(){if(i)return!0;if(!(o<n.height&&top>=n.height)){for(var t=0;t<n.height;t++)for(var f=0;f<n.width;f++){var c=Math.floor(t*(4*n.width)+4*f),s=(e.data[c]+e.data[c+1]+e.data[c+2])/3,l=u(h);d(s,c,l)}a.putImageData(r,n.x,n.y)}});c()},g=function(){c();for(var t=0;t<e.data.length;t+=4){var o=(e.data[t]+e.data[t+1]+e.data[t+2])/3;d(o,t,{r:255,g:128,b:0})}a.putImageData(r,n.x,n.y)},v=function(t){console.log("release",t),i=t,e=null,r=null};return{init:c,set:g,loop:l,scroll:s,release:v}},I=function(){var t,a,e,r,n=!1,o=!1,i=function(o,i,f,h){t=o,a=i.getImageData(0,0,f.width,f.height),e=t.createImageData(f.width,f.height),r=f,n=!1,h},f=function(t,r,n){t<255?(e.data[r]=n.r,e.data[r+1]=n.g,e.data[r+2]=n.b):(e.data[r]=a.data[r],e.data[r+1]=a.data[r+1],e.data[r+2]=a.data[r+2]),e.data[r+3]=a.data[r+3]},h=function(i){var h=i.value,c=i.from,d=i.to,s=i.frgb,l=(i.trgb,r.height/(d-c)),g=function(){if(n)return!0;if(c<r.height&&top>=r.height)o||u();else{for(var i=0;i<r.height;i++)for(var d=0;d<r.width;d++){var g=Math.floor(i*(4*r.width)+4*d),v=(a.data[g]+a.data[g+1]+a.data[g+2])/3;if(i<h*l)f(v,g,s);else{var m={r:10,g:10,b:10};f(v,g,m)}}t.putImageData(e,r.x,r.y)}};g()},c=function(i){var h=i.value,c=i.from,d=i.to,s=i.frgb,l=(i.trgb,r.height/(d-c)),g=function(){if(n)return!0;if(c<r.height&&top>=r.height)o||u();else{for(var i=0;i<r.height;i++)for(var d=0;d<r.width;d++){var g=Math.floor(i*(4*r.width)+4*d),v=(a.data[g]+a.data[g+1]+a.data[g+2])/3;if(i>h*l)f(v,g,s);else{var m={r:10,g:10,b:10};f(v,g,m)}}t.putImageData(e,r.x,r.y)}};g()},d=function(o){o.value;var i=o.from,h=o.to,c=o.rgb,d=(r.height,function(){if(n)return!0;if(!(i<r.height&&top>=r.height)){for(var o=0;o<r.height;o++)for(var h=0;h<r.width;h++){var d=Math.floor(o*(4*r.width)+4*h),u=(a.data[d]+a.data[d+1]+a.data[d+2])/3;f(u,d,c)}t.putImageData(e,r.x,r.y)}});d()},u=function(t){console.log("release",t),n=t,a=null,e=null};return{init:i,loop:d,scroll:h,reverse:c,release:u}},F=(e("d81d"),function(t){var a,e,r,n,o,i=t.isColor,f=!1,h=[],c=i,d=function(t,i,d,u){a=t,e=i.getImageData(0,0,d.width,d.height),r=a.createImageData(d.width,d.height),n=d,f=!1,o=u;for(var s=0;s<n.height;s++)for(var g=0;g<n.width;g++){var v=Math.floor(s*(4*n.width)+4*g),m=(e.data[v]+e.data[v+1]+e.data[v+2])/3;if(m<o){var w=Math.floor(360*Math.random()),p=1*Math.random()+1,x=2*Math.random(),y=e.data[v+3],b=l(c);h.push({index:v,x:g,y:s,rr:w,r:p,s:x,a:y,rgb:b})}}},u=function(t){var e=t.value,o=t.from;t.to;s();var i=function(){if(f)return!0;o<n.height&&top>=n.height||(h.map((function(t){var a=e*t.s,o=e/5+t.r,i=(t.rr+a)*Math.PI/180,f=Math.floor(o*Math.cos(i))+t.x,h=Math.floor(o*Math.sin(i))+t.y,c=Math.floor(h*(4*n.width)+4*f);r.data[c]=t.rgb.r,r.data[c+1]=t.rgb.g,r.data[c+2]=t.rgb.b,r.data[c+3]=t.a})),a.putImageData(r,n.x,n.y))};i()},s=function(){for(var t=0;t<n.height;t++)for(var a=0;a<n.width;a++){var e=Math.floor(t*(4*n.width)+4*a);r.data[e]=255,r.data[e+1]=255,r.data[e+2]=255,r.data[e+3]=0}},l=function(t){return t?{r:Math.floor(250*Math.random()),g:Math.floor(250*Math.random()),b:Math.floor(250*Math.random())}:{r:0,g:0,b:0}};return{init:d,scroll:u}}),N=function(t){var a,e,r,n,o,i=t.isColor,h=!1,c=[],d=i,u=function(t,i,u,s){a=t,e=i.getImageData(0,0,u.width,u.height),r=a.createImageData(u.width,u.height),n=u,h=!1,o=s;for(var l=0;l<n.height;l++)for(var v=0;v<n.width;v++){var m=Math.floor(l*(4*n.width)+4*v),w=(e.data[m]+e.data[m+1]+e.data[m+2])/3;if(w<o){var p=[90,270][f["random"](1)],x=50*Math.random(),y=Math.floor(10*Math.random()),b=2*Math.random(),M=e.data[m+3],R=g(d);c.push({index:m,x:v,y:l,rr:p,rx:x,ry:y,s:b,a:M,rgb:R})}}},s=function(t){var e=t.value,o=t.from,i=(t.to,t.sp),f=void 0===i?50:i;l();var d=function(){if(h)return!0;o<n.height&&top>=n.height||(c.map((function(t){var a=e/f,o=t.rx,i=t.ry,h=(t.rr+a)*Math.PI/180,c=Math.floor(o*Math.cos(h))+t.x,d=Math.floor(i*Math.sin(h+h))+t.y,u=Math.floor(d*(4*n.width)+4*c);r.data[u]=t.rgb.r,r.data[u+1]=t.rgb.g,r.data[u+2]=t.rgb.b,r.data[u+3]=t.a})),a.putImageData(r,n.x,n.y))};d()},l=function(){for(var t=0;t<n.height;t++)for(var a=0;a<n.width;a++){var e=Math.floor(t*(4*n.width)+4*a);r.data[e]=255,r.data[e+1]=255,r.data[e+2]=255,r.data[e+3]=0}},g=function(t){return t?{r:Math.floor(250*Math.random()),g:Math.floor(250*Math.random()),b:Math.floor(250*Math.random())}:{r:0,g:0,b:0}};return{init:u,scroll:s}},S=function(t){var a,e,r,n,o=t.isRandom,i=!1,f=o,h=[],c=function(t,o,f,h){a=t,e=o.getImageData(0,0,f.width,f.height),r=a.createImageData(f.width,f.height),n=f,i=!1,h},d=function(){for(var t=0;t<n.height;t++)for(var a=0;a<n.width;a++){var e=Math.floor(t*(4*n.width)+4*a);r.data[e]=255,r.data[e+1]=255,r.data[e+2]=255,r.data[e+3]=0}},u=function(t,a){r.data[a]=0,r.data[a+1]=0,r.data[a+2]=0,r.data[a+3]=e.data[t-1]},s=function(t){return e.data[t-1]},l=function(t){return e.data[t+4]},g=function(t){var o=t.value,c=t.from;t.to;d();var g=function(){if(i)return!0;if(!(c<n.height&&top>=n.height)){for(var t=0;t<n.height;t++){for(var d=0;d<n.width;d++){var g=Math.floor(t*(4*n.width)+4*d);e.data[g],e.data[g+1],e.data[g+2];if(0===e.data[g+3]&&s(g)>0){h[g]||(h[g]=f?Math.floor(4*Math.random()):1);for(var v=g+4*Math.floor(o*h[g]/10),m=g;m<v;m+=4)u(g,m)}}for(var w=n.width;w>0;w--){var p=Math.floor(t*(4*n.width)+4*w);e.data[p],e.data[p+1],e.data[p+2];if(e.data[p+3]>0&&0===l(p)){h[p]||(h[p]=f?Math.floor(10*Math.random()):1);for(var x=p-4*Math.floor(o*h[p]/10),y=x;y<p;y+=4)u(x,y)}else{var b=(r.data[p]+r.data[p+1]+r.data[p+2])/3;255===b&&(r.data[p]=1,r.data[p+1]=1,r.data[p+2]=1,r.data[p+3]=e.data[p+3])}}}a.putImageData(r,n.x,n.y)}};g()};return{init:c,scroll:g}},k=function(t){t.isColor;var a,e,r,n,o,i=!1,h=[],c=function(){for(var t=0;t<n.height;t++)for(var a=0;a<n.width;a++){var e=Math.floor(t*(4*n.width)+4*a);r.data[e]=255,r.data[e+1]=255,r.data[e+2]=255,r.data[e+3]=0}},d=function(t,c,d,u){a=t,e=c.getImageData(0,0,d.width,d.height),r=a.createImageData(d.width,d.height),n=d,i=!1,o=u;for(var s=0;s<n.height;s++)for(var l=f["random"](10),g=0;g<n.width;g++){var v=Math.floor(s*(4*n.width)+4*g),m=(e.data[v]+e.data[v+1]+e.data[v+2])/3;if(m<o){var w=0,p=4*s*Math.PI/180,x=Math.floor(l*Math.cos(p)),y=.5,b=e.data[v+3],M={r:0,g:0,b:0};h.push({index:v,x:g,y:s,rr:w,r:x,s:y,a:b,rgb:M})}}},u=function(t){var e=t.value,o=t.from;t.to;c();var f=function(){if(i)return!0;o<n.height&&top>=n.height||(h.map((function(t){var a=Math.floor(e)+90,o=t.r,i=a*Math.PI/180,f=Math.floor(o*Math.cos(i))+t.x,h=t.y,c=Math.floor(h*(4*n.width)+4*f);r.data[c]=t.rgb.r,r.data[c+1]=t.rgb.g,r.data[c+2]=t.rgb.b,r.data[c+3]=t.a})),a.putImageData(r,n.x,n.y))};f()};return{init:d,scroll:u}},P=function(){var t,a,e,r,n=function(n,o,i,f){t=n,a=o.getImageData(0,0,i.width,i.height),e=t.createImageData(i.width,i.height),r=i,!1,f},o=function(){for(var n=0;n<r.height;n++)for(var o=0;o<r.width;o++){var i=Math.floor(n*(4*r.width)+4*o),f=(a.data[i]+a.data[i+1]+a.data[i+2])/3;f<255&&(e.data[i]=a.data[i],e.data[i+1]=a.data[i+1],e.data[i+2]=a.data[i+2],e.data[i+3]=a.data[i+3])}t.putImageData(e,r.x,r.y)},i=function(t){console.log("release",t),t,a=null,e=null};return{init:n,set:o,release:i}},A=function(t){var a=t.elem,e=t.from,r=t.to,n=t.fromVal,o=t.toVal,i=(o-n)/(r-e),f=function(t){var e=t.value,r=i*e+n;a.style.transform="scale(".concat(r,")")},h=function(t){var e=t.value,r=i*e+n;a.style.transform="translateY(".concat(r,"px)")},c=function(t){var e=t.value,r=i*e+n;a.style.opacity=r};return{scale:f,translateY:h,opacity:c}},j=(Math.random(1),O()),_=F({isColor:!1}),$=N({isColor:!1}),V=D({isColor:!1}),B=I(),L=S({isRandom:!0}),z=k({isColor:!1}),H=P(),Y=[{from:100,to:200,effect:function(t){t.refs,t.top;var a=t.value;B.scroll({value:a,from:100,to:200,frgb:{r:0,g:200,b:255}})}},{from:400,to:500,effect:function(t){t.refs,t.top;var a=t.value;B.reverse({value:a,from:400,to:500,frgb:{r:0,g:200,b:255}})}},{from:700,to:1400,effect:function(t){t.refs,t.top;var a=t.value;z.scroll({value:a,from:700,to:1400})}},{from:1400,to:1600,effect:function(t){var a=t.refs,e=(t.top,t.value);A({elem:a.ref,from:1400,to:1600,fromVal:1,toVal:0}).opacity({value:e})}},{from:1600,to:1900,effect:function(t){var a=t.refs,e=(t.top,t.value);A({elem:a.ref,from:1600,to:1900,fromVal:0,toVal:1}).opacity({value:e})}},{from:1800,to:2400,effect:function(t){t.refs,t.top;var a=t.value;L.scroll({value:a,from:1800,to:2400})}},{from:2400,to:2600,effect:function(t){t.refs,t.top;var a=t.value;H.set({value:a,from:2400,to:2600})}},{from:2200,to:2400,effect:function(t){var a=t.refs,e=(t.top,t.value);A({elem:a.ref,from:2200,to:2400,fromVal:1,toVal:0}).opacity({value:e})}},{from:2400,to:2700,effect:function(t){var a=t.refs,e=(t.top,t.value);A({elem:a.ref,from:2400,to:2700,fromVal:0,toVal:1}).opacity({value:e})}},{from:3e3,to:3200,effect:function(t){t.refs,t.top;var a=t.value;H.set({value:a,from:3e3,to:3200})}},{from:3200,to:4500,effect:function(t){t.refs,t.top;var a=t.value;$.scroll({value:a,from:3200,to:4500,sp:20})}},{from:4500,to:6e3,effect:function(t){t.refs,t.top;var a=t.value;_.scroll({value:a,from:4500,to:6e3})}},{from:5e3,to:6e3,effect:function(t){var a=t.refs,e=(t.top,t.value);A({elem:a.ref,from:5e3,to:6e3,fromVal:1,toVal:0}).opacity({value:e})}}],U=function(t){var a=t.getContext("2d"),e=t.getBoundingClientRect(),r=null,n={ref:t,ctx:a,rect:e,dst:r};j.init(a,a,e,128),V.init(a,a,e,128),B.init(a,a,e,128),_.init(a,a,e,128),$.init(a,a,e,128),L.init(a,a,e,128),z.init(a,a,e,128),H.init(a,a,e,128),E(Y,(function(t,a){var e=a.top,r=a.value,o={top:e,value:r,refs:n};t.effect(o)}))},X=function(t,a){var e=t.width/a.width;return{x:0,y:0,width:a.width*e,height:a.height*e}},W=function(t,a){return new Promise((function(e){var r=new Image;r.onload=function(){var a=t.getBoundingClientRect(),n={left:0,top:0,width:r.width,height:r.height},o=X(a,n);e({fit:o,img:r})},r.src=a}))},K={data:function(){return{imageData:null,canvasData:{width:300,height:300},edge:300}},props:{src:String},mounted:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.init(),t.next=3,this.resizeCanvas();case 3:this.setTile(300,(function(){U(a.$refs.canvas)}));case 4:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),methods:{init:function(){var t;window.addEventListener("resize",(function(){clearTimeout(t),t=setTimeout((function(){}),300)}))},resizeCanvas:function(){var t=this;return new Promise(function(){var a=Object(d["a"])(regeneratorRuntime.mark((function a(e){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,W(t.$refs.frame,t.src);case 2:t.imageData=a.sent,r=f["cloneDeep"](t.canvasData),r.width=window.innerWidth,r.height=window.innerHeight,t.canvasData=r,e();case 8:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}())},setTile:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(a,e){var r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,W(this.$refs.frame,this.src);case 2:this.imageData=t.sent,this.$nextTick((function(){var t=a,n=a,o=r.$refs.canvas.width/2-t/2,i=r.$refs.canvas.height/2-n/2,f=r.$refs.canvas.getContext("2d");f.clearRect(0,0,r.$refs.canvas.width,r.$refs.canvas.height),f.save(),f.drawImage(r.imageData.img,o,i,t,n),f.restore(),e()}));case 4:case"end":return t.stop()}}),t,this)})));function a(a,e){return t.apply(this,arguments)}return a}()},computed:{getCanvasWidth:function(){return this.canvasData.width+"px"},getCanvasHeight:function(){return this.canvasData.height+"px"}}},G=K,J=(e("51c5"),Object(b["a"])(G,h,c,!1,null,"75d94856",null)),q=(J.exports,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"frame",staticClass:"canvasText"},[t._l(t.txts,(function(a){return e("CanvasTextLayer",{key:a.id,staticClass:"ref-text",attrs:{item:a,canvasData:t.canvasData},on:{setCanvasRef:t.setCanvasRef}})})),t._l(t.imgs,(function(a){return e("CanvasImageLayer",{key:a.id,staticClass:"ref-image",attrs:{item:a,canvasData:t.canvasData},on:{setCanvasRef:t.setCanvasImageRef}})}))],2)}),Z=[],Q=1,tt=function(t,a,e,r){r.top,r.value,r.diff;var n=r.scrollY,o=r.drawRect,i=a.getContext("2d"),f=a.getBoundingClientRect();f.width=f.width*Q,f.height=f.height*Q;var h=i.getImageData(o.x,o.y,o.width,o.height);i.putImageData(h,o.x,o.y+n);var c=t.getContext("2d");c.drawImage(a,0,0,f.width,f.height,0,0,f.width,f.height)},at=(e("b680"),function(t,a,e,r){r.top;var n=r.value,o=(r.diff,r.scrollY),i=r.drawRect,f=a.getContext("2d"),h=a.getBoundingClientRect();h.width=h.width*Q,h.height=h.height*Q;for(var c=f.getImageData(0,0,h.width,h.height),d=f.createImageData(h.width,h.height),u=0;u<h.height;u++)for(var s=0;s<h.width;s++){var l=Math.floor(u*(4*h.width)+4*s);d.data[l]=c.data[l],d.data[l+1]=c.data[l+1],d.data[l+2]=c.data[l+2],d.data[l+3]=c.data[l+3]}for(var g=+(i.width/(e.to-e.from)).toFixed(2),v=[],m=0;m<h.height;m++)for(var w=0;w<h.width;w++){var p=Math.floor(m*(4*h.width)+4*w),x=Math.floor((m+o)*(4*h.width)+4*w);w<i.x+n*g?(d.data[x]=c.data[p],d.data[x+1]=c.data[p+1],d.data[x+2]=c.data[p+2],d.data[x+3]=c.data[p+3],v[m]={r:c.data[p],g:c.data[p+1],b:c.data[p+2],a:c.data[p+3]}):(d.data[x]=v[m].r,d.data[x+1]=v[m].g,d.data[x+2]=v[m].b,d.data[x+3]=v[m].a)}f.putImageData(d,h.x,h.y);var y=t.getContext("2d");y.drawImage(a,0,0,h.width,h.height,0,0,h.width,h.height)}),et=function(t,a,e,r){r.top;var n=r.value,o=(r.diff,a.getContext("2d")),i=a.getBoundingClientRect();i.width=i.width*Q,i.height=i.height*Q;for(var f=o.getImageData(0,0,i.width,i.height),h=o.createImageData(i.width,i.height),c=0;c<i.height;c++)for(var d=0;d<i.width;d++){var u=Math.floor(c*(4*i.width)+4*d);h.data[u]=f.data[u],h.data[u+1]=f.data[u+1],h.data[u+2]=f.data[u+2],h.data[u+3]=f.data[u+3]}for(var s=[],l=0;l<i.height;l++)for(var g=i.width;g>0;g--){var v=Math.floor(l*(4*i.width)+4*g);g>i.width-.5*n?(h.data[v]=f.data[v],h.data[v+1]=f.data[v+1],h.data[v+2]=f.data[v+2],h.data[v+3]=f.data[v+3],s[l]={r:f.data[v],g:f.data[v+1],b:f.data[v+2],a:f.data[v+3]}):(h.data[v]=s[l].r,h.data[v+1]=s[l].g,h.data[v+2]=s[l].b,h.data[v+3]=s[l].a)}o.putImageData(h,i.x,i.y);var m=t.getContext("2d");m.drawImage(a,0,0,i.width,i.height,0,0,i.width,i.height)},rt=function(t,a,e,r){r.top;var n=r.value,o=(r.diff,a.getContext("2d")),i=a.getBoundingClientRect();i.width=i.width*Q,i.height=i.height*Q;for(var f=o.getImageData(0,0,i.width,i.height),h=o.createImageData(i.width,i.height),c=0;c<i.height;c++)for(var d=0;d<i.width;d++){var u=Math.floor(c*(4*i.width)+4*d);h.data[u]=f.data[u],h.data[u+1]=f.data[u+1],h.data[u+2]=f.data[u+2],h.data[u+3]=f.data[u+3]}for(var s=[],l=[],g=0;g<i.height;g++)for(var v=i.width;v>0;v--){var m=Math.floor(g*(4*i.width)+4*v);v>i.width-.5*n?(h.data[m]=f.data[m],h.data[m+1]=f.data[m+1],h.data[m+2]=f.data[m+2],h.data[m+3]=f.data[m+3],l[g]={r:f.data[m],g:f.data[m+1],b:f.data[m+2],a:f.data[m+3]},s[g]={index:m,x:v,y:g}):(h.data[m]=l[g].r,h.data[m+1]=l[g].g,h.data[m+2]=l[g].b,h.data[m+3]=l[g].a)}for(var w=0;w<i.height;w++)for(var p=0;p<i.width;p++){var x=Math.floor(w*(4*i.width)+4*p);s[w].x<p?(h.data[x]=l[w].r,h.data[x+1]=l[w].g,h.data[x+2]=l[w].b,h.data[x+3]=l[w].a):(h.data[x]=f.data[x],h.data[x+1]=f.data[x+1],h.data[x+2]=f.data[x+2],h.data[x+3]=f.data[x+3])}o.putImageData(h,i.x,i.y);var y=t.getContext("2d");y.drawImage(a,0,0,i.width,i.height,0,0,i.width,i.height)},nt=function(t,a,e,r){r.top;var n=r.value,o=(r.diff,r.scrollY),i=r.drawRect,f=a.getContext("2d"),h=a.getBoundingClientRect();h.width=h.width*Q,h.height=h.height*Q;for(var c=f.getImageData(0,0,h.width,h.height),d=f.createImageData(h.width,h.height),u=0;u<h.height;u++)for(var s=0;s<h.width;s++){var l=Math.floor(u*(4*h.width)+4*s);d.data[l]=c.data[l],d.data[l+1]=c.data[l+1],d.data[l+2]=c.data[l+2],d.data[l+3]=c.data[l+3]}for(var g=+(i.width/(e.to-e.from)).toFixed(2),v=[],m=[],w=0;w<h.height;w++)for(var p=h.width;p>0;p--){var x=Math.floor(w*(4*h.width)+4*p),y=Math.floor(h.width-Math.floor(i.x+n*g));p===y&&(m[w]={r:c.data[x],g:c.data[x+1],b:c.data[x+2],a:c.data[x+3]},v[w]={index:x,x:p,y:w})}for(var b=0;b<h.height;b++)for(var M=0;M<h.width;M++){var R=Math.floor(b*(4*h.width)+4*M),C=Math.floor((b+o)*(4*h.width)+4*M);v[b]&&M>=v[b].x?(d.data[C]=m[b].r,d.data[C+1]=m[b].g,d.data[C+2]=m[b].b,d.data[C+3]=m[b].a):(d.data[C]=c.data[R],d.data[C+1]=c.data[R+1],d.data[C+2]=c.data[R+2],d.data[C+3]=c.data[R+3])}f.putImageData(d,h.x,h.y);var T=t.getContext("2d");T.drawImage(a,0,0,h.width,h.height,0,0,h.width,h.height)},ot=[],it=null,ft=null,ht=null,ct=128,dt=function(t,a,e,r){r.top;var n=r.value;r.diff;if(0===ot.length){ht=a.getContext("2d"),it=a.getBoundingClientRect(),it.width=it.width*Q,it.height=it.height*Q;var o=ht.getImageData(0,0,it.width,it.height);ft=ht.createImageData(it.width,it.height);for(var i=0;i<it.height;i++)for(var f=0;f<it.width;f++){var h=Math.floor(i*(4*it.width)+4*f),c=(o.data[h]+o.data[h+1]+o.data[h+2])/3,d=Math.floor(360*Math.random()),u=1*Math.random()+1,s=2*Math.random();if(ft.data[h]=o.data[h],ft.data[h+1]=o.data[h+1],ft.data[h+2]=o.data[h+2],ft.data[h+3]=o.data[h+3],c<ct){var l=o.data[h+3],g={r:0,g:0,b:0};ot.push({index:h,x:f,y:i,rr:d,r:u,s:s,a:l,rgb:g})}}}console.log("pixelNoise",ot.length),ot.map((function(t){var a=n*t.s,e=n/5+t.r,r=(t.rr+a)*Math.PI/180,o=Math.floor(e*Math.cos(r))+t.x,i=Math.floor(e*Math.sin(r))+t.y,f=Math.floor(i*(4*it.width)+4*o);ft.data[f]=t.rgb.r,ft.data[f+1]=t.rgb.g,ft.data[f+2]=t.rgb.b,ft.data[f+3]=t.a})),ht.putImageData(ft,it.x,it.y);var v=t.getContext("2d");v.drawImage(a,0,0,it.width,it.height,0,0,it.width,it.height)},ut=function(){var t={},a=function(a,e){t[a]=e},e=function(a){return t[a]};return{set:a,get:e}},st=ut(),lt=(ut(),ut()),gt=function(){var t,a=null,e={},r={},n=function(a){t=a},o=function(n,o,i,h){var c=o.fontFamily,d=o.fontSize,u=o.color,s=o.align,l=o.moveTo,g=o.letterSpacing,v=i.top,m=i.value,w=i.diff;t.style.letterSpacing=g;var p=t.getContext("2d");p.font="".concat(d,"px '").concat(c,"'"),p.fillStyle=u,p.textAlign=s;var x="center"===s?Math.floor((h-l.x)/2):l.x,y=t.getBoundingClientRect();e={x:y.width,y:0,width:0,height:0},f["map"](n,(function(t,a){var r=l.y-1.5*d*a,n=h?h-l.x:null;p.fillText(f["isFunction"](t)?t({top:v,value:m,diff:w}):t,x,r,n),e.x=l.x,e.y=l.y-1.5*d*(a+1),e.width=n>e.width?n:e.width,e.height=1.5*d*(a+1)+d}));var b=t.getBoundingClientRect();b.width=b.width*Q,b.height=b.height*Q,a=p.getImageData(e.x,e.y,e.width,e.height);for(var M={min:e.width,max:0},R=0;R<e.height;R++)for(var C=0;C<e.width;C++){var T=Math.floor(R*(4*e.width)+4*C),E=(a.data[T]+a.data[T+1]+a.data[T+2])/3;a.data[T+3]>=1&&E<128&&(M.min=C<M.min?C:M.min,M.max=C>M.max?C:M.max)}r={x:M.min,y:e.y,width:M.max-M.min,height:e.height},console.log("positionX",r)},i=function(t){var r=t.getContext("2d");r.clearRect(0,0,t.width,t.height),r.putImageData(a,e.x,e.y)},h=function(){return r};return{init:n,setText:o,redraw:i,getDrawRect:h}},vt=function(t,a,e,n){var o={x:0,y:0},i=a.getContext("2d"),h=t.getContext("2d");E(e,(function(e,i){var h,c=i.top,d=i.value,u=i.diff,s=(e.moveFrom.y-e.moveTo.y)/Math.abs(e.to-e.from);if(o.y+=u*s,st.get(e.id))h=st.get(e.id),h.redraw(a);else{h=gt(),h.init(a);var l=f["cloneDeep"](e.style);l.moveTo={x:e.moveTo.x,y:e.moveFrom.y};var g=f["cloneDeep"](e.text).reverse();h.setText(g,l,{top:c,value:d,diff:u},n),st.set(e.id,h)}var v=Math.floor(o.y),m=h.getDrawRect();e.eff&&e.eff.length&&f["map"](e.eff,(function(n){r[n](t,a,e,{top:c,value:d,diff:u,scrollY:v,drawRect:m})}))}),(function(){i.clearRect(0,0,a.width,a.height),h.clearRect(0,0,t.width,t.height)}))},mt=function(){var t=[],a=function(t){return new Promise((function(a){var e=new Image;e.onload=function(){a(e)},e.src=t}))},e=function(e){return new Promise(function(){var r=Object(d["a"])(regeneratorRuntime.mark((function r(n){var o,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(o=f["find"](t,(function(t){return t.url===e})),!o){r.next=5;break}n(o.image),r.next=10;break;case 5:return r.next=7,a(e);case 7:i=r.sent,t.push({url:e,date:new Date,image:i}),n(i);case 10:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}())};return{get:e}},wt=mt(),pt=function(t){return new Promise(function(){var a=Object(d["a"])(regeneratorRuntime.mark((function a(e){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.t0=e,a.next=3,wt.get(t);case 3:a.t1=a.sent,(0,a.t0)(a.t1);case 5:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}())},xt=function(){var t,a,e,r=function(a){t=a},n=function(r,n,o,i){var f=n.x,h=n.y,c=n.width,d=n.height,u=n.moveTo,s=(o.top,o.value,o.diff,{x:0,y:0,width:r.width,height:r.height}),l={x:f,y:h,width:c,height:d};"auto"===d&&(l.height=Math.floor(r.height*(c/r.width))),"auto"===f&&(l.x=Math.floor(t.width/2)-Math.floor(c/2)),"auto"===h&&(l.y=Math.floor(t.height/2)-Math.floor(l.height/2)),u.x&&(l.x=u.x),u.y&&(l.y=u.y),a={x:l.x,y:l.y,width:l.width,height:l.height};var g=t.getContext("2d");g.drawImage(r,s.x,s.y,s.width,s.height,l.x,l.y,l.width,l.height),e=g.getImageData(a.x,a.y,a.width,a.height)},o=function(t){var r=t.getContext("2d");r.clearRect(0,0,t.width,t.height),r.putImageData(e,a.x,a.y)},i=function(){return a};return{init:r,setImage:n,redraw:o,getDrawRect:i}},yt=function(t,a,e,n){var o={x:0,y:0},i=a.getContext("2d"),h=t.getContext("2d");E(e,function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(i,h){var c,d,u,s,l,g,v,m,w;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(c=h.top,d=h.value,u=h.diff,s=(i.moveFrom.y-i.moveTo.y)/Math.abs(i.to-i.from),o.y+=u*s,lt.get(i.id)){e.next=15;break}return l=xt(),l.init(a),g=f["cloneDeep"](i.rect),g.moveTo={x:i.moveTo.x,y:i.moveFrom.y},e.next=10,pt(i.img);case 10:v=e.sent,l.setImage(v,g,{top:c,value:d,diff:u},n),lt.set(i.id,l),e.next=17;break;case 15:l=lt.get(i.id),l.redraw(a);case 17:m=Math.floor(o.y),w=l.getDrawRect(),i.eff&&i.eff.length&&f["map"](i.eff,(function(e){r[e](t,a,i,{top:c,value:d,diff:u,scrollY:m,drawRect:w})}));case 20:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),(function(){i.clearRect(0,0,a.width,a.height),h.clearRect(0,0,t.width,t.height)}))},bt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("canvas",{ref:"src",staticClass:"canvas src",attrs:{width:t.canvasData.width+"px",height:t.canvasData.height+"px"}}),e("canvas",{ref:"canvas",staticClass:"canvas",attrs:{width:t.canvasData.width+"px",height:t.canvasData.height+"px"}})])},Mt=[],Rt={data:function(){return{refsFlag:!1}},props:{canvasData:{type:Object,default:function(){return{width:0,height:0}}},item:{type:Object}},mounted:function(){},methods:{init:function(){},setCanvasRef:function(){this.item.id&&this.$refs.canvas&&this.$refs.src&&!this.refsFlag&&(this.$emit("setCanvasRef",{id:this.item.id,ref:this.$refs.canvas,srcRef:this.$refs.src}),this.refsFlag=!0)}},watch:{item:{immediate:!0,handler:function(t){var a=this;this.$nextTick((function(){a.setCanvasRef()}))}},canvasData:{immediate:!0,handler:function(t){var a=this;this.$nextTick((function(){a.$refs.canvas.style.width="".concat(t.width/Q,"px"),a.$refs.canvas.style.height="".concat(t.height/Q,"px"),a.$refs.src.style.width="".concat(t.width/Q,"px"),a.$refs.src.style.height="".concat(t.height/Q,"px")}))}},$refs:{immediate:!0,handler:function(t){var a=this;this.$nextTick((function(){a.setCanvasRef()}))}}}},Ct=Rt,Tt=(e("6873"),Object(b["a"])(Ct,bt,Mt,!1,null,"39606519",null)),Et=Tt.exports,Ot={data:function(){return{canvasRef:[],srcRef:[],canvasData:{width:0,height:0}}},components:{CanvasTextLayer:Et,CanvasImageLayer:Et},mounted:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.init(),t.next=3,this.resizeCanvas();case 3:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),props:{txts:{type:Array},imgs:{type:Array,default:function(){return[]}}},methods:{init:function(){var t;window.addEventListener("resize",(function(){clearTimeout(t),t=setTimeout((function(){}),300)}))},setCanvasRef:function(t){var a=t.id,e=t.ref,r=t.srcRef;if(a&&e&&r){this.canvasRef[a]=e,this.srcRef[a]=r;var n=f["filter"](this.txts,(function(t){return t.id===a}));n&&n.length&&vt(this.canvasRef[a],this.srcRef[a],n,this.canvasData.width)}},setCanvasImageRef:function(t){var a=t.id,e=t.ref,r=t.srcRef;if(a&&e&&r){this.canvasRef[a]=e,this.srcRef[a]=r;var n=f["filter"](this.imgs,(function(t){return t.id===a}));console.log("img",a,n),n&&n.length&&yt(this.canvasRef[a],this.srcRef[a],n,this.canvasData.width)}},resizeCanvas:function(){var t=this;return new Promise(function(){var a=Object(d["a"])(regeneratorRuntime.mark((function a(e){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:r=f["cloneDeep"](t.canvasData),r.width=window.innerWidth*Q,r.height=window.innerHeight*Q,t.canvasData=r,e();case 5:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}())}}},Dt=Ot,It=(e("56ec"),Object(b["a"])(Dt,q,Z,!1,null,"242ec87b",null)),Ft=It.exports,Nt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"htmlView"}},[e("ContextConsumer",{attrs:{contextKey:["HTML_VIEW"]},scopedSlots:t._u([{key:"default",fn:function(a){var r=a.context;return t._l(t.getItems(r["HTML_VIEW"]),(function(a,r){return e("div",{key:r},[e(t.getComponent(a.view),{tag:"component",attrs:{value:a}})],1)}))}}])})],1)},St=[],kt={TEXT:"text",IMG:"img"},Pt={color:"#333",fontFamily:"'Roboto', sans-serif",textAlign:"center"},At=[{from:1,to:600,html:{view:kt.TEXT,text:"BACKHAM",style:{fontSize:"24px",color:Pt.color,fontFamily:Pt.fontFamily,textAlign:Pt.textAlign}}},{from:800,to:1200,html:{view:kt.TEXT,text:"DESIGN",style:{fontSize:"120px",color:Pt.color,fontFamily:Pt.fontFamily,textAlign:Pt.textAlign}}},{from:1400,to:1800,html:{view:kt.TEXT,text:"UI",style:{fontSize:"120px",color:Pt.color,fontFamily:Pt.fontFamily,textAlign:Pt.textAlign}}},{from:3e3,to:4e3,html:{view:kt.TEXT,text:"backham",style:{fontSize:"26px",color:Pt.color,fontFamily:Pt.fontFamily,textAlign:Pt.textAlign}}}],jt=function(){var t=function(t){var a=f["filter"](At,(function(a){return a.from<=t.top&&a.to>t.top})),e=[];f["map"](a,(function(a){if(a){var r=f["cloneDeep"](a.html);r.scroll=t.top-a.from,e.push(r)}})),p.setContext("HTML_VIEW",e)};t({top:1}),T.getScroll((function(a){t(a)}))},_t=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"textView"},[e("div",{style:t.style},[t._v(t._s(t.text))])])},$t=[],Vt=(e("a15b"),e("ac1f"),e("5319"),{data:function(){return{style:"",text:""}},props:{value:{type:Object}},methods:{stringToCss:function(t){return t.replace(/([A-Z])/g,(function(t){return"-"+t.charAt(0).toLowerCase()}))}},watch:{value:{immediate:!0,handler:function(t){var a=this,e=f["map"](t.style,(function(t,e){return"".concat(a.stringToCss(e),":").concat(t)}));this.style=e.join(";"),this.text=t.text?t.text:"ok "}}}}),Bt=Vt,Lt=(e("d7b9"),Object(b["a"])(Bt,_t,$t,!1,null,null,null)),zt=Lt.exports,Ht=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"imgView"},[e("img",{attrs:{src:t.src}})])},Yt=[],Ut={data:function(){return{src:""}},props:{value:{type:Object}}},Xt=Ut,Wt=Object(b["a"])(Xt,Ht,Yt,!1,null,null,null),Kt=Wt.exports,Gt={data:function(){return{}},components:{ContextConsumer:R,TextView:zt,ImgView:Kt},methods:{getItems:function(t){return t||[]},getComponent:function(t){return t===kt.TEXT?zt:t===kt.IMG?Kt:zt}}},Jt=Gt,qt=Object(b["a"])(Jt,Nt,St,!1,null,null,null),Zt=qt.exports,Qt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{ref:"bg",style:t.getStyle,attrs:{id:"bg"}})},ta=[],aa=function(t,a){return JSON.stringify(t)===JSON.stringify(a)},ea={data:function(){return{style:"",canvasData:{}}},props:{color:{type:Object,default:function(){return{}}}},mounted:function(){},watch:{color:{immediate:!0,handler:function(t,a){aa(t,a)||(this.setBackgroundColor(t),this.getSize())}}},methods:{setBackgroundColor:function(t){if(this.$refs.bg){this.$refs.bg.getBoundingClientRect();this.style="background-color:rgb(".concat(t.r,",").concat(t.g,",").concat(t.b,");")}},getSize:function(){if(this.$refs.bg){var t=this.$refs.bg.getBoundingClientRect();this.canvasData={width:t.width,height:t.height}}}},computed:{getStyle:function(){return this.style},getCanvasWidth:function(){return this.canvasData.width+"px"},getCanvasHeight:function(){return this.canvasData.height+"px"}}},ra=ea,na=(e("2e3e"),Object(b["a"])(ra,Qt,ta,!1,null,null,null)),oa=na.exports,ia={DEFAULT:{fontFamily:"robot",fontSize:48,color:"black",align:"center",letterSpacing:"4px"}},fa=function(){return window.innerHeight/2-23},ha=function(){return f["random"](9999999999)+f["uniq"]()},ca={TEXT:"text",IMAGE:"image"},da={OPEN1:{type:ca.TEXT,value:["VR/AR"],style:ia.DEFAULT},OPEN2:{type:ca.TEXT,value:["Design &","Implement"],style:ia.DEFAULT},OPEN3:{type:ca.TEXT,value:["BACKHAM"],style:f["assign"](ia.DEFAULT,{fontSize:48})}},ua={CENTER:{FADEIN:{TO:{x:0,y:fa()+10},FROM:{x:0,y:fa()+50}},STAY:{TO:{x:0,y:fa()},FROM:{x:0,y:fa()+10}},FADEOUT:{TO:{x:0,y:fa()-150},FROM:{x:0,y:fa()}}}},sa=[{id:ha(),from:3500,to:4e3,img:"./images/vrmonkey_tran.png",rect:{x:"auto",y:"auto",width:300,height:"auto"},moveTo:{x:0,y:fa()-50},moveFrom:ua.CENTER.FADEIN.FROM,eff:["SkewedRight"]},{id:ha(),from:4e3,to:5e3,img:"./images/vrmonkey_tran.png",rect:{x:"auto",y:"auto",width:300,height:"auto"},moveTo:{x:0,y:fa()-80},moveFrom:{x:0,y:fa()-50},eff:["Stay"]},{id:ha(),from:5e3,to:5500,img:"./images/vrmonkey_tran.png",rect:{x:"auto",y:"auto",width:300,height:"auto"},moveTo:{x:0,y:fa()-200},moveFrom:{x:0,y:fa()-80},eff:["SkewedRightReverse"]}],la=[{id:ha(),from:10,to:500,text:da.OPEN1.value,style:da.OPEN1.style,moveTo:ua.CENTER.FADEIN.TO,moveFrom:ua.CENTER.FADEIN.FROM,eff:["SkewedRight"]},{id:ha(),from:500,to:1e3,text:da.OPEN1.value,style:da.OPEN1.style,moveTo:ua.CENTER.STAY.TO,moveFrom:ua.CENTER.STAY.FROM,eff:["Stay"]},{id:ha(),from:1e3,to:1500,text:da.OPEN1.value,style:da.OPEN1.style,moveTo:ua.CENTER.FADEOUT.TO,moveFrom:ua.CENTER.FADEOUT.FROM,eff:["SkewedRightReverse"]},{id:ha(),from:1500,to:3e3,text:da.OPEN2.value,style:da.OPEN2.style,moveTo:ua.CENTER.FADEIN.TO,moveFrom:ua.CENTER.FADEIN.FROM,eff:["SkewedRight"]},{id:ha(),from:3e3,to:3500,text:da.OPEN2.value,style:da.OPEN2.style,moveTo:ua.CENTER.STAY.TO,moveFrom:ua.CENTER.STAY.FROM,eff:["Stay"]},{id:ha(),from:3500,to:5e3,text:da.OPEN2.value,style:da.OPEN2.style,moveTo:ua.CENTER.FADEOUT.TO,moveFrom:ua.CENTER.FADEOUT.FROM,eff:["SkewedRightReverse"]},{id:ha(),from:5500,to:7e3,text:da.OPEN3.value,style:da.OPEN3.style,moveTo:ua.CENTER.FADEIN.TO,moveFrom:ua.CENTER.FADEIN.FROM,eff:["SkewedRight"]},{id:ha(),from:7e3,to:8e3,text:da.OPEN3.value,style:da.OPEN3.style,moveTo:ua.CENTER.STAY.TO,moveFrom:ua.CENTER.STAY.FROM,eff:["Stay"]},{id:ha(),from:8e3,to:9500,text:da.OPEN3.value,style:da.OPEN3.style,moveTo:ua.CENTER.FADEOUT.TO,moveFrom:ua.CENTER.FADEOUT.FROM,eff:["PixelNoise"]}],ga={name:"app",data:function(){return{ref:null,bgcolor:{},img:e("febb"),txts:la,imgs:sa}},components:{CanvasTextView:Ft,HtmlView:Zt,BackgroundImage:oa,ContextConsumer:R},mounted:function(){var t=this,a=T;a.setHeight(1e4),this.$nextTick((function(){t.bgcolor={r:255,g:255,b:255}}))},methods:{setCanvasRef:function(t){jt()}}},va=ga,ma=(e("5c0b"),Object(b["a"])(va,o,i,!1,null,null,null)),wa=ma.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(wa)}}).$mount("#app")},"56ec":function(t,a,e){"use strict";var r=e("bf16"),n=e.n(r);n.a},"5c0b":function(t,a,e){"use strict";var r=e("9c0c"),n=e.n(r);n.a},6873:function(t,a,e){"use strict";var r=e("1e97"),n=e.n(r);n.a},"9c0c":function(t,a,e){},b71d:function(t,a,e){},bf16:function(t,a,e){},d0eb:function(t,a,e){},d7b9:function(t,a,e){"use strict";var r=e("4ac9"),n=e.n(r);n.a},febb:function(t,a,e){t.exports=e.p+"img/vrmonkey_tran.5165007a.png"}});
//# sourceMappingURL=app.b7db3ab5.js.map