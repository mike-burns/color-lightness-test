/*
colpick Color Picker
Copyright 2013 Jose Vargas. Licensed under GPL license. Based on Stefan Petre's Color Picker www.eyecon.ro, dual licensed under the MIT and GPL licenses

For usage and examples: colpick.com/plugin
 */
!function(t){var o=function(){var o='<div class="colpick"><div class="colpick-color"><div class="colpick-color-overlay1"><div class="colpick-color-overlay2"><div class="colpick-selector-outer"><div class="colpick-selector-inner"></div></div></div></div></div><div class="colpick-hue"><div class="colpick-hue-arrs"><div class="colpick-hue-larr"></div><div class="colpick-hue-rarr"></div></div></div><div class="colpick-new-color"></div><div class="colpick-current-color"></div><div class="colpick-hex-field"><div class="colpick-field-letter">#</div><input type="text" maxlength="6" size="6" /></div><div class="colpick-rgb-r colpick-field"><div class="colpick-field-letter">R</div><input type="text" maxlength="3" size="3" /><div class="colpick-field-arrs"><div class="colpick-field-uarr"></div><div class="colpick-field-darr"></div></div></div><div class="colpick-rgb-g colpick-field"><div class="colpick-field-letter">G</div><input type="text" maxlength="3" size="3" /><div class="colpick-field-arrs"><div class="colpick-field-uarr"></div><div class="colpick-field-darr"></div></div></div><div class="colpick-rgb-b colpick-field"><div class="colpick-field-letter">B</div><input type="text" maxlength="3" size="3" /><div class="colpick-field-arrs"><div class="colpick-field-uarr"></div><div class="colpick-field-darr"></div></div></div><div class="colpick-hsb-h colpick-field"><div class="colpick-field-letter">H</div><input type="text" maxlength="3" size="3" /><div class="colpick-field-arrs"><div class="colpick-field-uarr"></div><div class="colpick-field-darr"></div></div></div><div class="colpick-hsb-s colpick-field"><div class="colpick-field-letter">S</div><input type="text" maxlength="3" size="3" /><div class="colpick-field-arrs"><div class="colpick-field-uarr"></div><div class="colpick-field-darr"></div></div></div><div class="colpick-hsb-b colpick-field"><div class="colpick-field-letter">B</div><input type="text" maxlength="3" size="3" /><div class="colpick-field-arrs"><div class="colpick-field-uarr"></div><div class="colpick-field-darr"></div></div></div><div class="colpick-submit"></div></div>',e={showEvent:"click",onShow:function(){},onBeforeShow:function(){},onHide:function(){},onChange:function(){},onSubmit:function(){},colorScheme:"light",color:"3289c7",livePreview:!0,flat:!1,layout:"full",submit:1,submitText:"OK",height:156},a=function(o,e){var i=s(o);t(e).data("colpick").fields.eq(1).val(i.r).end().eq(2).val(i.g).end().eq(3).val(i.b).end()},l=function(o,e){t(e).data("colpick").fields.eq(4).val(Math.round(o.h)).end().eq(5).val(Math.round(o.s)).end().eq(6).val(Math.round(o.b)).end()},c=function(o,e){t(e).data("colpick").fields.eq(0).val(r(o))},p=function(o,e){t(e).data("colpick").selector.css("backgroundColor","#"+r({h:o.h,s:100,b:100})),t(e).data("colpick").selectorIndic.css({left:parseInt(t(e).data("colpick").height*o.s/100,10),top:parseInt(t(e).data("colpick").height*(100-o.b)/100,10)})},d=function(o,e){t(e).data("colpick").hue.css("top",parseInt(t(e).data("colpick").height-t(e).data("colpick").height*o.h/360,10))},f=function(o,e){t(e).data("colpick").currentColor.css("backgroundColor","#"+r(o))},u=function(o,e){t(e).data("colpick").newColor.css("backgroundColor","#"+r(o))},h=function(){var o,e=t(this).parent().parent();this.parentNode.className.indexOf("-hex")>0?(e.data("colpick").color=o=i(O(this.value)),a(o,e.get(0)),l(o,e.get(0))):this.parentNode.className.indexOf("-hsb")>0?(e.data("colpick").color=o=q({h:parseInt(e.data("colpick").fields.eq(4).val(),10),s:parseInt(e.data("colpick").fields.eq(5).val(),10),b:parseInt(e.data("colpick").fields.eq(6).val(),10)}),a(o,e.get(0)),c(o,e.get(0))):(e.data("colpick").color=o=n(S({r:parseInt(e.data("colpick").fields.eq(1).val(),10),g:parseInt(e.data("colpick").fields.eq(2).val(),10),b:parseInt(e.data("colpick").fields.eq(3).val(),10)})),c(o,e.get(0)),l(o,e.get(0))),p(o,e.get(0)),d(o,e.get(0)),u(o,e.get(0)),e.data("colpick").onChange.apply(e.parent(),[o,r(o),s(o),e.data("colpick").el,0])},v=function(){t(this).parent().removeClass("colpick-focus")},m=function(){t(this).parent().parent().data("colpick").fields.parent().removeClass("colpick-focus"),t(this).parent().addClass("colpick-focus")},g=function(o){o.preventDefault?o.preventDefault():o.returnValue=!1;var e=t(this).parent().find("input").focus(),i={el:t(this).parent().addClass("colpick-slider"),max:this.parentNode.className.indexOf("-hsb-h")>0?360:this.parentNode.className.indexOf("-hsb")>0?100:255,y:o.pageY,field:e,val:parseInt(e.val(),10),preview:t(this).parent().parent().data("colpick").livePreview};t(document).mouseup(i,b),t(document).mousemove(i,k)},k=function(t){return t.data.field.val(Math.max(0,Math.min(t.data.max,parseInt(t.data.val-t.pageY+t.data.y,10)))),t.data.preview&&h.apply(t.data.field.get(0),[!0]),!1},b=function(o){return h.apply(o.data.field.get(0),[!0]),o.data.el.removeClass("colpick-slider").find("input").focus(),t(document).off("mouseup",b),t(document).off("mousemove",k),!1},w=function(o){o.preventDefault?o.preventDefault():o.returnValue=!1;var e={cal:t(this).parent(),y:t(this).offset().top};e.preview=e.cal.data("colpick").livePreview,t(document).mouseup(e,x),t(document).mousemove(e,y),h.apply(e.cal.data("colpick").fields.eq(4).val(parseInt(360*(e.cal.data("colpick").height-(o.pageY-e.y))/e.cal.data("colpick").height,10)).get(0),[e.preview])},y=function(t){return h.apply(t.data.cal.data("colpick").fields.eq(4).val(parseInt(360*(t.data.cal.data("colpick").height-Math.max(0,Math.min(t.data.cal.data("colpick").height,t.pageY-t.data.y)))/t.data.cal.data("colpick").height,10)).get(0),[t.data.preview]),!1},x=function(o){return a(o.data.cal.data("colpick").color,o.data.cal.get(0)),c(o.data.cal.data("colpick").color,o.data.cal.get(0)),t(document).off("mouseup",x),t(document).off("mousemove",y),!1},$=function(o){o.preventDefault?o.preventDefault():o.returnValue=!1;var e={cal:t(this).parent(),pos:t(this).offset()};e.preview=e.cal.data("colpick").livePreview,t(document).mouseup(e,C),t(document).mousemove(e,T),h.apply(e.cal.data("colpick").fields.eq(6).val(parseInt(100*(e.cal.data("colpick").height-(o.pageY-e.pos.top))/e.cal.data("colpick").height,10)).end().eq(5).val(parseInt(100*(o.pageX-e.pos.left)/e.cal.data("colpick").height,10)).get(0),[e.preview])},T=function(t){return h.apply(t.data.cal.data("colpick").fields.eq(6).val(parseInt(100*(t.data.cal.data("colpick").height-Math.max(0,Math.min(t.data.cal.data("colpick").height,t.pageY-t.data.pos.top)))/t.data.cal.data("colpick").height,10)).end().eq(5).val(parseInt(100*Math.max(0,Math.min(t.data.cal.data("colpick").height,t.pageX-t.data.pos.left))/t.data.cal.data("colpick").height,10)).get(0),[t.data.preview]),!1},C=function(o){return a(o.data.cal.data("colpick").color,o.data.cal.get(0)),c(o.data.cal.data("colpick").color,o.data.cal.get(0)),t(document).off("mouseup",C),t(document).off("mousemove",T),!1},I=function(){var o=t(this).parent(),e=o.data("colpick").color;o.data("colpick").origColor=e,f(e,o.get(0)),o.data("colpick").onSubmit(e,r(e),s(e),o.data("colpick").el)},M=function(o){o.stopPropagation();var e=t("#"+t(this).data("colpickId"));e.data("colpick").onBeforeShow.apply(this,[e.get(0)]);var i=t(this).offset(),n=i.top+this.offsetHeight,s=i.left,a=H();s+346>a.l+a.w&&(s-=346),e.css({left:s+"px",top:n+"px"}),0!=e.data("colpick").onShow.apply(this,[e.get(0)])&&e.show(),t("html").mousedown({cal:e},P),e.mousedown(function(t){t.stopPropagation()})},P=function(o){0!=o.data.cal.data("colpick").onHide.apply(this,[o.data.cal.get(0)])&&o.data.cal.hide(),t("html").off("mousedown",P)},H=function(){var t="CSS1Compat"==document.compatMode;return{l:window.pageXOffset||(t?document.documentElement.scrollLeft:document.body.scrollLeft),w:window.innerWidth||(t?document.documentElement.clientWidth:document.body.clientWidth)}},q=function(t){return{h:Math.min(360,Math.max(0,t.h)),s:Math.min(100,Math.max(0,t.s)),b:Math.min(100,Math.max(0,t.b))}},S=function(t){return{r:Math.min(255,Math.max(0,t.r)),g:Math.min(255,Math.max(0,t.g)),b:Math.min(255,Math.max(0,t.b))}},O=function(t){var o=6-t.length;if(o>0){for(var e=[],i=0;o>i;i++)e.push("0");e.push(t),t=e.join("")}return t},D=function(){var o=t(this).parent(),e=o.data("colpick").origColor;o.data("colpick").color=e,a(e,o.get(0)),c(e,o.get(0)),l(e,o.get(0)),p(e,o.get(0)),d(e,o.get(0)),u(e,o.get(0))};return{init:function(s){if(s=t.extend({},e,s||{}),"string"==typeof s.color)s.color=i(s.color);else if(void 0!=s.color.r&&void 0!=s.color.g&&void 0!=s.color.b)s.color=n(s.color);else{if(void 0==s.color.h||void 0==s.color.s||void 0==s.color.b)return this;s.color=q(s.color)}return this.each(function(){if(!t(this).data("colpickId")){var e=t.extend({},s);e.origColor=s.color;var i="collorpicker-"+parseInt(1e3*Math.random());t(this).data("colpickId",i);var n=t(o).attr("id",i);n.addClass("colpick-"+e.layout+(e.submit?"":" colpick-"+e.layout+"-ns")),"light"!=e.colorScheme&&n.addClass("colpick-"+e.colorScheme),n.find("div.colpick-submit").html(e.submitText).click(I),e.fields=n.find("input").change(h).blur(v).focus(m),n.find("div.colpick-field-arrs").mousedown(g).end().find("div.colpick-current-color").click(D),e.selector=n.find("div.colpick-color").mousedown($),e.selectorIndic=e.selector.find("div.colpick-selector-outer"),e.el=this,e.hue=n.find("div.colpick-hue-arrs"),huebar=e.hue.parent();var r=navigator.userAgent.toLowerCase(),k="Microsoft Internet Explorer"===navigator.appName,b=k?parseFloat(r.match(/msie ([0-9]{1,}[\.0-9]{0,})/)[1]):0,y=k&&10>b,x=["#ff0000","#ff0080","#ff00ff","#8000ff","#0000ff","#0080ff","#00ffff","#00ff80","#00ff00","#80ff00","#ffff00","#ff8000","#ff0000"];if(y){var T,C;for(T=0;11>=T;T++)C=t("<div></div>").attr("style","height:8.333333%; filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr="+x[T]+", endColorstr="+x[T+1]+'); -ms-filter: "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='+x[T]+", endColorstr="+x[T+1]+')";'),huebar.append(C)}else stopList=x.join(","),huebar.attr("style","background:-webkit-linear-gradient(top center,"+stopList+"); background:-moz-linear-gradient(top center,"+stopList+"); background:linear-gradient(to bottom,"+stopList+"); "),huebar.css({background:"linear-gradient(to bottom,"+stopList+")"}),huebar.css({background:"-moz-linear-gradient(top,"+stopList+")"});n.find("div.colpick-hue").mousedown(w),e.newColor=n.find("div.colpick-new-color"),e.currentColor=n.find("div.colpick-current-color"),n.data("colpick",e),a(e.color,n.get(0)),l(e.color,n.get(0)),c(e.color,n.get(0)),d(e.color,n.get(0)),p(e.color,n.get(0)),f(e.color,n.get(0)),u(e.color,n.get(0)),e.flat?(n.appendTo(this).show(),n.css({position:"relative",display:"block"})):(n.appendTo(document.body),t(this).on(e.showEvent,M),n.css({position:"absolute"}))}})},showPicker:function(){return this.each(function(){t(this).data("colpickId")&&M.apply(this)})},hidePicker:function(){return this.each(function(){t(this).data("colpickId")&&t("#"+t(this).data("colpickId")).hide()})},setColor:function(o,e){if(e="undefined"==typeof e?1:e,"string"==typeof o)o=i(o);else if(void 0!=o.r&&void 0!=o.g&&void 0!=o.b)o=n(o);else{if(void 0==o.h||void 0==o.s||void 0==o.b)return this;o=q(o)}return this.each(function(){if(t(this).data("colpickId")){var i=t("#"+t(this).data("colpickId"));i.data("colpick").color=o,i.data("colpick").origColor=o,a(o,i.get(0)),l(o,i.get(0)),c(o,i.get(0)),d(o,i.get(0)),p(o,i.get(0)),u(o,i.get(0)),i.data("colpick").onChange.apply(i.parent(),[o,r(o),s(o),i.data("colpick").el,1]),e&&f(o,i.get(0))}})}}}(),e=function(t){var t=parseInt(t.indexOf("#")>-1?t.substring(1):t,16);return{r:t>>16,g:(65280&t)>>8,b:255&t}},i=function(t){return n(e(t))},n=function(t){var o={h:0,s:0,b:0},e=Math.min(t.r,t.g,t.b),i=Math.max(t.r,t.g,t.b),n=i-e;return o.b=i,o.s=0!=i?255*n/i:0,o.h=0!=o.s?t.r==i?(t.g-t.b)/n:t.g==i?2+(t.b-t.r)/n:4+(t.r-t.g)/n:-1,o.h*=60,o.h<0&&(o.h+=360),o.s*=100/255,o.b*=100/255,o},s=function(t){var o={},e=t.h,i=255*t.s/100,n=255*t.b/100;if(0==i)o.r=o.g=o.b=n;else{var s=n,a=(255-i)*n/255,r=(s-a)*(e%60)/60;360==e&&(e=0),60>e?(o.r=s,o.b=a,o.g=a+r):120>e?(o.g=s,o.b=a,o.r=s-r):180>e?(o.g=s,o.r=a,o.b=a+r):240>e?(o.b=s,o.r=a,o.g=s-r):300>e?(o.b=s,o.g=a,o.r=a+r):360>e?(o.r=s,o.g=a,o.b=s-r):(o.r=0,o.g=0,o.b=0)}return{r:Math.round(o.r),g:Math.round(o.g),b:Math.round(o.b)}},a=function(o){var e=[o.r.toString(16),o.g.toString(16),o.b.toString(16)];return t.each(e,function(t,o){1==o.length&&(e[t]="0"+o)}),e.join("")},r=function(t){return a(s(t))};t.fn.extend({colpick:o.init,colpickHide:o.hidePicker,colpickShow:o.showPicker,colpickSetColor:o.setColor}),t.extend({colpickRgbToHex:a,colpickRgbToHsb:n,colpickHsbToHex:r,colpickHsbToRgb:s,colpickHexToHsb:i,colpickHexToRgb:e})}(jQuery),function(t,o,e){function n(o,e){this.bodyOverflowX,this.checkInterval=null,this.content,this.$el=t(o),this.elProxyPosition,this.$elProxy,this.enabled=!0,this.options=t.extend({},c,e),this.mouseIsOverProxy=!1,this.namespace="tooltipster-"+Math.round(1e5*Math.random()),this.status="hidden",this.timerHide=null,this.timerShow=null,this.$tooltip,this.options.iconTheme=this.options.iconTheme.replace(".",""),this.options.theme=this.options.theme.replace(".",""),this.init()}function s(o,e){var i=!0;return t.each(o,function(t){return"undefined"==typeof e[t]||o[t]!==e[t]?(i=!1,!1):void 0}),i}function a(){return!d&&p}function r(){var t=e.body||e.documentElement,o=t.style,i="transition";if("string"==typeof o[i])return!0;v=["Moz","Webkit","Khtml","O","ms"],i=i.charAt(0).toUpperCase()+i.substr(1);for(var n=0;n<v.length;n++)if("string"==typeof o[v[n]+i])return!0;return!1}var l="tooltipster",c={animation:"fade",arrow:!0,arrowColor:"",autoClose:!0,content:null,contentAsHTML:!1,contentCloning:!0,delay:200,fixedWidth:0,maxWidth:0,functionInit:function(){},functionBefore:function(t,o){o()},functionReady:function(){},functionAfter:function(){},icon:"(?)",iconCloning:!0,iconDesktop:!1,iconTouch:!1,iconTheme:"tooltipster-icon",interactive:!1,interactiveTolerance:350,offsetX:0,offsetY:0,onlyOne:!1,position:"top",positionTracker:!1,speed:350,timer:0,theme:"tooltipster-default",touchDevices:!0,trigger:"hover",updateAnimation:!0};n.prototype={init:function(){var o=this;if(e.querySelector){if(null!==o.options.content)o.setContent(o.options.content);else{var i=o.$el.attr("title");"undefined"==typeof i&&(i=null),o.setContent(i)}var n=o.options.functionInit(o.$el,o.content);"undefined"!=typeof n&&o.setContent(n),o.$el.removeAttr("title").addClass("tooltipstered"),!p&&o.options.iconDesktop||p&&o.options.iconTouch?("string"==typeof o.options.icon?(o.$elProxy=t('<span class="'+o.options.iconTheme+'"></span>'),o.$elProxy.text(o.options.icon)):o.$elProxy=o.options.iconCloning?o.options.icon.clone(!0):o.options.icon,o.$elProxy.insertAfter(o.$el)):o.$elProxy=o.$el,"hover"==o.options.trigger?(o.$elProxy.on("mouseenter."+o.namespace,function(){(!a()||o.options.touchDevices)&&(o.mouseIsOverProxy=!0,o.showTooltip())}).on("mouseleave."+o.namespace,function(){(!a()||o.options.touchDevices)&&(o.mouseIsOverProxy=!1)}),p&&o.options.touchDevices&&o.$elProxy.on("touchstart."+o.namespace,function(){o.showTooltipNow()})):"click"==o.options.trigger&&o.$elProxy.on("click."+o.namespace,function(){(!a()||o.options.touchDevices)&&o.showTooltip()})}},showTooltip:function(){var t=this;"shown"!=t.status&&"appearing"!=t.status&&(t.options.delay?t.timerShow=setTimeout(function(){("click"==t.options.trigger||"hover"==t.options.trigger&&t.mouseIsOverProxy)&&t.showTooltipNow()},t.options.delay):t.showTooltipNow())},showTooltipNow:function(){var e=this;clearTimeout(e.timerShow),e.timerShow=null,clearTimeout(e.timerHide),e.timerHide=null,e.enabled&&null!==e.content&&(e.options.onlyOne&&t(".tooltipstered").not(e.$el).each(function(o,e){var i=t(e),n=i[l]("status"),s=i[l]("option","autoClose");"hidden"!==n&&"disappearing"!==n&&s&&i[l]("hide")}),e.options.functionBefore(e.$elProxy,function(){if("hidden"!==e.status){var i=0;"disappearing"===e.status&&(e.status="appearing",r()?(e.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-"+e.options.animation+"-show"),e.options.speed>0&&e.$tooltip.delay(e.options.speed),e.$tooltip.queue(function(){e.status="shown"})):e.$tooltip.stop().fadeIn(function(){e.status="shown"}))}else{e.status="appearing";var i=e.options.speed;e.bodyOverflowX=t("body").css("overflow-x"),t("body").css("overflow-x","hidden");var n="tooltipster-"+e.options.animation,s="-webkit-transition-duration: "+e.options.speed+"ms; -webkit-animation-duration: "+e.options.speed+"ms; -moz-transition-duration: "+e.options.speed+"ms; -moz-animation-duration: "+e.options.speed+"ms; -o-transition-duration: "+e.options.speed+"ms; -o-animation-duration: "+e.options.speed+"ms; -ms-transition-duration: "+e.options.speed+"ms; -ms-animation-duration: "+e.options.speed+"ms; transition-duration: "+e.options.speed+"ms; animation-duration: "+e.options.speed+"ms;",a=e.options.fixedWidth>0?"width:"+Math.round(e.options.fixedWidth)+"px;":"",l=e.options.maxWidth>0?"max-width:"+Math.round(e.options.maxWidth)+"px;":"",c=e.options.interactive?"pointer-events: auto;":"";if(e.$tooltip=t('<div class="tooltipster-base '+e.options.theme+'" style="'+a+" "+l+" "+c+" "+s+'"><div class="tooltipster-content"></div></div>'),r()&&e.$tooltip.addClass(n),e.insertContent(),e.$tooltip.appendTo("body"),e.positionTooltip(),e.options.functionReady(e.$el,e.$tooltip),r()?(e.$tooltip.addClass(n+"-show"),e.options.speed>0&&e.$tooltip.delay(e.options.speed),e.$tooltip.queue(function(){e.status="shown"})):e.$tooltip.css("display","none").fadeIn(e.options.speed,function(){e.status="shown"}),e.setCheckInterval(),t(o).on("scroll."+e.namespace+" resize."+e.namespace,function(){e.positionTooltip()}),e.options.autoClose)if(t("body").off("."+e.namespace),"hover"==e.options.trigger)if(p&&setTimeout(function(){t("body").on("touchstart."+e.namespace,function(){e.hideTooltip()})},0),e.options.interactive){p&&e.$tooltip.on("touchstart."+e.namespace,function(t){t.stopPropagation()});var d=null;e.$elProxy.add(e.$tooltip).on("mouseleave."+e.namespace+"-autoClose",function(){clearTimeout(d),d=setTimeout(function(){e.hideTooltip()},e.options.interactiveTolerance)}).on("mouseenter."+e.namespace+"-autoClose",function(){clearTimeout(d)})}else e.$elProxy.on("mouseleave."+e.namespace+"-autoClose",function(){e.hideTooltip()});else"click"==e.options.trigger&&(setTimeout(function(){t("body").on("click."+e.namespace+" touchstart."+e.namespace,function(){e.hideTooltip()})},0),e.options.interactive&&e.$tooltip.on("click."+e.namespace+" touchstart."+e.namespace,function(t){t.stopPropagation()}))}e.options.timer>0&&(e.timerHide=setTimeout(function(){e.timerHide=null,e.hideTooltip()},e.options.timer+i))}))},setCheckInterval:function(){var o=this;o.checkInterval=setInterval(function(){if(0===t("body").find(o.$el).length||0===t("body").find(o.$elProxy).length||"hidden"==o.status||0===t("body").find(o.$tooltip).length)("shown"==o.status||"appearing"==o.status)&&o.hideTooltip(),o.cancelCheckInterval();else if(o.options.positionTracker){var e=o.positionInfo(o.$elProxy),i=!1;s(e.dimension,o.elProxyPosition.dimension)&&("fixed"===o.$elProxy.css("position")?s(e.position,o.elProxyPosition.position)&&(i=!0):s(e.offset,o.elProxyPosition.offset)&&(i=!0)),i||o.positionTooltip()}},200)},cancelCheckInterval:function(){clearInterval(this.checkInterval),this.checkInterval=null},hideTooltip:function(){var e=this;if(clearTimeout(e.timerShow),e.timerShow=null,clearTimeout(e.timerHide),e.timerHide=null,"shown"==e.status||"appearing"==e.status){e.status="disappearing";var i=function(){e.status="hidden",e.$tooltip.remove(),e.$tooltip=null,t(o).off("."+e.namespace),t("body").off("."+e.namespace).css("overflow-x",e.bodyOverflowX),e.$elProxy.off("."+e.namespace+"-autoClose"),e.options.functionAfter(e.$elProxy)};r()?(e.$tooltip.clearQueue().removeClass("tooltipster-"+e.options.animation+"-show").addClass("tooltipster-dying"),e.options.speed>0&&e.$tooltip.delay(e.options.speed),e.$tooltip.queue(i)):e.$tooltip.stop().fadeOut(e.options.speed,i)}},setContent:function(t){"object"==typeof t&&null!==t&&this.options.contentCloning&&(t=t.clone(!0)),this.content=t},insertContent:function(){var t=this,o=this.$tooltip.find(".tooltipster-content");"string"!=typeof t.content||t.options.contentAsHTML?o.empty().append(t.content):o.text(t.content)},updateTooltip:function(t){var o=this;o.setContent(t),null!==o.content?"hidden"!==o.status&&(o.insertContent(),o.positionTooltip(),o.options.updateAnimation&&(r()?(o.$tooltip.css({width:"","-webkit-transition":"all "+o.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-moz-transition":"all "+o.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-o-transition":"all "+o.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-ms-transition":"all "+o.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms",transition:"all "+o.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms"}).addClass("tooltipster-content-changing"),setTimeout(function(){"hidden"!=o.status&&(o.$tooltip.removeClass("tooltipster-content-changing"),setTimeout(function(){"hidden"!==o.status&&o.$tooltip.css({"-webkit-transition":o.options.speed+"ms","-moz-transition":o.options.speed+"ms","-o-transition":o.options.speed+"ms","-ms-transition":o.options.speed+"ms",transition:o.options.speed+"ms"})},o.options.speed))},o.options.speed)):o.$tooltip.fadeTo(o.options.speed,.5,function(){"hidden"!=o.status&&o.$tooltip.fadeTo(o.options.speed,1)}))):o.hideTooltip()},positionInfo:function(t){return{dimension:{height:t.outerHeight(!1),width:t.outerWidth(!1)},offset:t.offset(),position:{left:parseInt(t.css("left")),top:parseInt(t.css("top"))}}},positionTooltip:function(){function e(){var e=t(o).scrollLeft();0>H-e&&(a=H-e,H=e),H+c-e>r&&(a=H-(r+e-c),H=r+e-c)}function n(e,i){l.offset.top-t(o).scrollTop()-d-O-12<0&&i.indexOf("top")>-1&&(F=e),l.offset.top+l.dimension.height+d+12+O>t(o).scrollTop()+t(o).height()&&i.indexOf("bottom")>-1&&(F=e,S=l.offset.top-d-O-12)}var s=this;if(0!==t("body").find(s.$tooltip).length){s.$tooltip.css("width",""),s.elProxyPosition=s.positionInfo(s.$elProxy);var a=null,r=t(o).width(),l=s.elProxyPosition,c=s.$tooltip.outerWidth(!1),p=s.$tooltip.innerWidth()+1,d=s.$tooltip.outerHeight(!1);if(s.$elProxy.is("area")){var f=s.$elProxy.attr("shape"),u=s.$elProxy.parent().attr("name"),h=t('img[usemap="#'+u+'"]'),v=h.offset().left,m=h.offset().top,g=void 0!==s.$elProxy.attr("coords")?s.$elProxy.attr("coords").split(","):void 0;if("circle"==f){var k=parseInt(g[0]),b=parseInt(g[1]),w=parseInt(g[2]);l.dimension.height=2*w,l.dimension.width=2*w,l.offset.top=m+b-w,l.offset.left=v+k-w}else if("rect"==f){var k=parseInt(g[0]),b=parseInt(g[1]),y=parseInt(g[2]),x=parseInt(g[3]);l.dimension.height=x-b,l.dimension.width=y-k,l.offset.top=m+b,l.offset.left=v+k}else if("poly"==f){var $=0,T=0,C=0,I=0,M="even";for(i=0;i<g.length;i++){var P=parseInt(g[i]);"even"==M?(P>C&&(C=P,0===i&&($=C)),$>P&&($=P),M="odd"):(P>I&&(I=P,1==i&&(T=I)),T>P&&(T=P),M="even")}l.dimension.height=I-T,l.dimension.width=C-$,l.offset.top=m+T,l.offset.left=v+$}else l.dimension.height=h.outerHeight(!1),l.dimension.width=h.outerWidth(!1),l.offset.top=m,l.offset.left=v}0===s.options.fixedWidth&&s.$tooltip.css({width:Math.round(p)+"px","padding-left":"0px","padding-right":"0px"});var H=0,q=0,S=0,O=parseInt(s.options.offsetY),D=parseInt(s.options.offsetX),F=s.options.position;if("top"==F){var z=l.offset.left+c-(l.offset.left+l.dimension.width);H=l.offset.left+D-z/2,S=l.offset.top-d-O-12,e(),n("bottom","top")}if("top-left"==F&&(H=l.offset.left+D,S=l.offset.top-d-O-12,e(),n("bottom-left","top-left")),"top-right"==F&&(H=l.offset.left+l.dimension.width+D-c,S=l.offset.top-d-O-12,e(),n("bottom-right","top-right")),"bottom"==F){var z=l.offset.left+c-(l.offset.left+l.dimension.width);H=l.offset.left-z/2+D,S=l.offset.top+l.dimension.height+O+12,e(),n("top","bottom")}if("bottom-left"==F&&(H=l.offset.left+D,S=l.offset.top+l.dimension.height+O+12,e(),n("top-left","bottom-left")),"bottom-right"==F&&(H=l.offset.left+l.dimension.width+D-c,S=l.offset.top+l.dimension.height+O+12,e(),n("top-right","bottom-right")),"left"==F){H=l.offset.left-D-c-12,q=l.offset.left+D+l.dimension.width+12;var W=l.offset.top+d-(l.offset.top+s.$elProxy.outerHeight(!1));if(S=l.offset.top-W/2-O,0>H&&q+c>r){var N=2*parseFloat(s.$tooltip.css("border-width")),L=c+H-N;s.$tooltip.css("width",L+"px"),d=s.$tooltip.outerHeight(!1),H=l.offset.left-D-L-12-N,W=l.offset.top+d-(l.offset.top+s.$elProxy.outerHeight(!1)),S=l.offset.top-W/2-O}else 0>H&&(H=l.offset.left+D+l.dimension.width+12,a="left")}if("right"==F){H=l.offset.left+D+l.dimension.width+12,q=l.offset.left-D-c-12;var W=l.offset.top+d-(l.offset.top+s.$elProxy.outerHeight(!1));if(S=l.offset.top-W/2-O,H+c>r&&0>q){var N=2*parseFloat(s.$tooltip.css("border-width")),L=r-H-N;s.$tooltip.css("width",L+"px"),d=s.$tooltip.outerHeight(!1),W=l.offset.top+d-(l.offset.top+s.$elProxy.outerHeight(!1)),S=l.offset.top-W/2-O}else H+c>r&&(H=l.offset.left-D-c-12,a="right")}if(s.options.arrow){var A="tooltipster-arrow-"+F;if(s.options.arrowColor.length<1)var X=s.$tooltip.css("background-color");else var X=s.options.arrowColor;if(a?"left"==a?(A="tooltipster-arrow-right",a=""):"right"==a?(A="tooltipster-arrow-left",a=""):a="left:"+Math.round(a)+"px;":a="","top"==F||"top-left"==F||"top-right"==F)var Y=parseFloat(s.$tooltip.css("border-bottom-width")),E=s.$tooltip.css("border-bottom-color");else if("bottom"==F||"bottom-left"==F||"bottom-right"==F)var Y=parseFloat(s.$tooltip.css("border-top-width")),E=s.$tooltip.css("border-top-color");else if("left"==F)var Y=parseFloat(s.$tooltip.css("border-right-width")),E=s.$tooltip.css("border-right-color");else if("right"==F)var Y=parseFloat(s.$tooltip.css("border-left-width")),E=s.$tooltip.css("border-left-color");else var Y=parseFloat(s.$tooltip.css("border-bottom-width")),E=s.$tooltip.css("border-bottom-color");Y>1&&Y++;var B="";if(0!==Y){var R="",j="border-color: "+E+";";-1!==A.indexOf("bottom")?R="margin-top: -"+Math.round(Y)+"px;":-1!==A.indexOf("top")?R="margin-bottom: -"+Math.round(Y)+"px;":-1!==A.indexOf("left")?R="margin-right: -"+Math.round(Y)+"px;":-1!==A.indexOf("right")&&(R="margin-left: -"+Math.round(Y)+"px;"),B='<span class="tooltipster-arrow-border" style="'+R+" "+j+';"></span>'}s.$tooltip.find(".tooltipster-arrow").remove();var Q='<div class="'+A+' tooltipster-arrow" style="'+a+'">'+B+'<span style="border-color:'+X+';"></span></div>';s.$tooltip.append(Q)}s.$tooltip.css({top:Math.round(S)+"px",left:Math.round(H)+"px"})}}},t.fn[l]=function(){var o=arguments;if(0===this.length){if("string"==typeof o[0]){var e=!0;switch(o[0]){case"setDefaults":t.extend(c,o[1]);break;default:e=!1}return e?!0:this}return this}if("string"==typeof o[0]){var i="#*$~&";return this.each(function(){var e=t(this).data("tooltipster");if(!e)throw new Error("You called Tooltipster's \""+o[0]+'" method on an uninitialized element');switch(o[0]){case"content":case"update":if("undefined"==typeof o[1])return i=e.content,!1;e.updateTooltip(o[1]);break;case"destroy":e.hideTooltip(),e.$el[0]!==e.$elProxy[0]&&e.$elProxy.remove();var n="string"==typeof e.content?e.content:t("<div></div>").append(e.content).html();e.$el.removeClass("tooltipstered").attr("title",n).removeData("tooltipster").off("."+e.namespace);break;case"disable":e.hideTooltip(),e.enabled=!1;break;case"elementIcon":return i=e.$el[0]!==e.$elProxy[0]?e.$elProxy[0]:void 0,!1;case"elementTooltip":return i=e.$tooltip?e.$tooltip[0]:void 0,!1;case"enable":e.enabled=!0;break;case"hide":e.hideTooltip();break;case"option":i=e.options[o[1]];break;case"reposition":e.positionTooltip();break;case"show":e.showTooltipNow();break;case"status":return i=e.status,!1;default:throw new Error('Unknown method .tooltipster("'+o[0]+'")')}}),"#*$~&"!==i?i:this}return this.each(function(){t(this).data("tooltipster")||t(this).data("tooltipster",new n(this,o[0]))})};var p=!!("ontouchstart"in o),d=!1;t("body").one("mousemove",function(){d=!0})}(jQuery,window,document),function(){$(function(){var t,o,e,i,n,s,a,r,l,c,p,d,f,u,h,v,m,g,k,b,w,y,x,T,C,I,M;return r=$(".previews li"),$(".widget").colpick({flat:!0,layout:"hex",submit:0,color:"C52D2F",onChange:function(t,o,e){return w(t,e,o)}}),w=function(t,o,e){r.css("background-color","#"+e),x(t),T(t),b(o),y(o),g(o),I(o),m(o),k(o)},f=function(t){var o;return o=t?"black":"white"},C=function(t,o){return t.find(".value").text(o)},n=r.filter(".HSB"),x=function(t){var o;return o=f(t.b>50),n.css("color",o),C(n,(t.b/100).toFixed(2))},s=r.filter(".HSL"),d=function(t){return(200-t.s)*t.b/200},T=function(t){var o;return o=f(d(t)>50),s.css("color",o),C(s,(d(t)/100).toFixed(2))},e=r.filter(".arithmetic"),c=function(t){return(t.r+t.g+t.b)/3/255},b=function(t){var o;return o=f(c(t)>.5),e.css("color",o),C(e,c(t).toFixed(2))},i=r.filter(".geometric"),p=function(t){return Math.pow(t.r*t.g*t.b,1/3)/255},y=function(t){var o;return o=f(p(t)>.5),i.css("color",o),C(i,p(t).toFixed(2))},t=r.filter(".3D-distance"),u=function(t){return Math.sqrt(Math.pow(t.r,2)+Math.pow(t.g,2)+Math.pow(t.b,2))/Math.sqrt(3*Math.pow(255,2))},g=function(o){var e;return e=f(u(o)>.5),t.css("color",e),C(t,u(o).toFixed(2))},l=r.filter(".W3C"),M=function(t){return(299*t.r+587*t.g+117*t.b)/1e3/255},I=function(t){var o;return o=f(M(t)>.5),l.css("color",o),C(l,M(t).toFixed(2))},a=r.filter(".srgb-luma"),v=function(t){return(212.6*t.r+715.2*t.g+72.2*t.b)/1e3/255},m=function(t){var o;return o=f(v(t)>.5),a.css("color",o),C(a,v(t).toFixed(2))},o=r.filter(".3D-weighted"),h=function(t){return Math.sqrt(.299*Math.pow(t.r,2)+.587*Math.pow(t.g,2)+.114*Math.pow(t.b,2))/255},k=function(t){var e;return e=f(h(t)>.5),o.css("color",e),C(o,h(t).toFixed(2))},w({h:359.21,s:77.15,b:77.25},{r:197,g:45,b:47},"C52D2F"),r.each(function(){var t,o;return t=$(this).attr("class"),o=$("img."+t),$(this).tooltipster({theme:"tooltipster-shadow",content:o})})})}.call(this);