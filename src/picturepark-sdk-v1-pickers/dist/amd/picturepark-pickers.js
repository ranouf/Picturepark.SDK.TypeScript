define(["require","exports"],function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.showContentPicker=function(e){return new Promise(function(n,o){0!==e.indexOf("http://localhost:4200")&&(e+="/elements");var t=void 0!=window.screenLeft?window.screenLeft:screen.left,i=void 0!=window.screenTop?window.screenTop:screen.top,d=(window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width)/2-500+t,c=(window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height)/2-330+i,r=window.open(e+"/content-picker?postUrl="+encodeURIComponent(window.location.origin),"_blank","width=1000, height=660, top="+c+", left="+d+",status=no,location=no,toolbar=no"),s=!1,w=function(o){if(console.log("PCP Message received:"),console.log(o),o.origin==e){window.removeEventListener("message",w);var t=o.data&&"undefined"!==o.data?JSON.parse(o.data):void 0;s||(s=!0,setTimeout(function(){r.close(),n(t)}))}};r.onbeforeunload=function(){window.removeEventListener("message",w),s||(s=!0,n(void 0))},window.addEventListener("message",w)})}});