function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e=[],i=[];!function(t,n){if(t&&"undefined"!=typeof document){var o,a=!0===n.prepend?"prepend":"append",r=!0===n.singleTag,d="string"==typeof n.container?document.querySelector(n.container):document.getElementsByTagName("head")[0];if(r){var s=e.indexOf(d);-1===s&&(s=e.push(d)-1,i[s]={}),o=i[s]&&i[s][a]?i[s][a]:i[s][a]=l()}else o=l();65279===t.charCodeAt(0)&&(t=t.substring(1)),o.styleSheet?o.styleSheet.cssText+=t:o.appendChild(document.createTextNode(t))}function l(){var t=document.createElement("style");if(t.setAttribute("type","text/css"),n.attributes)for(var e=Object.keys(n.attributes),i=0;i<e.length;i++)t.setAttribute(e[i],n.attributes[e[i]]);var o="prepend"===a?"afterbegin":"beforeend";return d.insertAdjacentElement(o,t),t}}("/* The Modal (background) */\n.ik-media-library-widget-modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  padding-top: 2%; /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n/* Modal Content */\n.ik-media-library-widget-modal-content {\n  background-color: #fefefe;\n  margin: auto;\n  /* padding: 5px; */\n  border: 1px solid #888;\n  width: 96%;\n  height: 94%;\n}\n",{});var n=function(){var e,i,n,o,a="https://eml.imagekit.io",r="".concat(a,"/media-library-widget?redirectTo=media-library-widget&isMediaLibraryWidget=true"),d="modal",s=function(){this.security=null,this.widgetHost=window.location.href;var i={className:"",container:"",containerDimensions:{height:"100%",width:"100%"},dimensions:{height:"100%",width:"100%"},style:{border:"none"},view:"modal",renderOpenButton:!0};arguments[0]&&"object"===t(arguments[0])&&(this.options=Object.assign({},i,arguments[0])),arguments[1]&&"function"==typeof arguments[1]&&(this.callback=arguments[1],e=this.callback),d=this.options.view,this.init()};function l(){var t,e,a;t="string"==typeof this.options.container?document.querySelector(this.options.container):this.options.container,e=document.createDocumentFragment(),this.ikFrame=document.createElement("div"),this.ikFrame.className=this.options.className,this.ikFrame.style.height=this.options.containerDimensions.height,this.ikFrame.style.width=this.options.containerDimensions.width,this.ikFrame.callback=this.callback,(a=document.createElement("iframe")).title="ImageKit Embedded Media Library",a.src="".concat(r,"&widgetHost=").concat(this.widgetHost),a.sandbox="allow-top-navigation allow-same-origin allow-scripts allow-forms allow-modals allow-popups",a.height=this.options.dimensions.height,a.width=this.options.dimensions.width,a.style.border=this.options.style.border,this.ikFrame.appendChild(a),"modal"!==this.options.view.toLowerCase()?(e.appendChild(this.ikFrame),t.appendChild(e)):(this.options.renderOpenButton&&((i=document.createElement("button")).innerHTML="Open Media Library",i.onclick=function(){n.style.display="block"}),n=document.createElement("div"),o=document.createElement("div"),n.classList.add("ik-media-library-widget-modal"),o.classList.add("ik-media-library-widget-modal-content"),o.appendChild(this.ikFrame),n.appendChild(o),this.options.renderOpenButton&&e.appendChild(i),e.appendChild(n),t.appendChild(e))}function c(){"modal"===d.toLowerCase()&&(n.style.display="none")}return s.prototype.init=function(){l.call(this)},window.onclick=function(t){t.target==n&&c()},window.addEventListener("message",(function(t){t.origin===a&&("CLOSE_MEDIA_LIBRARY_WIDGET"!==t.data.eventType&&"INSERT"!==t.data.eventType||(e(t.data),c()))})),window.IKMediaLibraryWidget=s}();export default n;
//# sourceMappingURL=imagekit-media-library-widget.esm.js.map