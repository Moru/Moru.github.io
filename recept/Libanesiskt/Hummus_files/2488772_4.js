geoLookupNeeded="false";adsNeedGeo="";pixelTaggingNeeded="false";tsCookies3rd="%COOKIES%";
/*! END BASE HEADER */
/*! Generated @ Wed Sep 27 14:59:03 CEST 2017 */
var TS = window.TS || {};
(function(TS){
TS.headerShown = false;
TS.sitePlacementProperties = {};
TS.pl_4 = TS.pl_4 || {};
TS.pl_4.adsRenderedInSlot = 0;
TS.pl_4.currentSlot = (TS.pl_4.currentSlot === undefined) ? 1 : TS.pl_4.currentSlot + 1;
TS.pl_4.adsRenderedInSpecificSlot = TS.pl_4.adsRenderedInSpecificSlot || {};
TS.pl_4.adsRenderedInSpecificSlot[TS.pl_4.currentSlot] = 0;
TS.pl_4.maxAds = 1;
TS.pl_4.placementType=1;
//false
TS.pl_4.adHeaderEnabled=false;
TS.pl_4.placementStr="top";
}(TS = window.TS || {}));
var G = window;
if(G.tsAdsRendered_top === undefined){ G.tsAdsRendered_top=0; }
if(G.tsAdsRendered_top_slot === undefined){ G.tsAdsRendered_top_slot =[]; }
G.tsAdsRendered_top_slot[TS.pl_4.currentSlot-1]=0;
if(G.demographRendered === undefined){ G.demographRendered = false; }
if(G.ts_pl_4_idx === undefined){G.ts_pl_4_idx = 1;}
String.prototype.tsTrim = function () { return this.replace(/^\s+|\s+$/g, ''); };
Date.prototype.mGetDay = function () { return (this.getDay() + 6) %7; };
/* Source: TS.Base.js.vm */
(function(TS){
TS.getCookieValue = function (cookieName) {
var exp = new RegExp (escape(cookieName) + "=([^;]+)");
if (exp.test (document.cookie + ";")) {
exp.exec (document.cookie + ";");
return unescape(RegExp.$1);
}
return false;
};
TS.getUrl = function () {
return "tsUUI="+this.getRand()  /* Random number */
+ "&tsLho=" + this.ho       /* Random hostname */
+ "&tsQu=" + this.qu        /* Query string */
+ "&tsRef=" + this.ref      /* Referrer */
+ "&tsLP=" + this.lp        /* Pathname */
+ this.bp;                  /* screen width and height and color- and pixel-depth */
};
TS.sendStats = function (url) {
var statImg = new Image();
statImg.src = url;
};
TS.placementHit = function(placementId, slot) {
var url = "//script.tailsweep.com/siteplacementhit/2488772"
+ "?sitePlacements=" + placementId + "," + slot
+ "&tsSession=" + TS.session
+ "&tsUid=" + TS.uid
+ "&tsUV=" + TS.uv
+ "&tsUrl=" + TS.tsUrl;
TS.sendStats(url);
};
TS.logVisiblePlacementImp = function(placementSlot) {
var url = "//script.tailsweep.com/siteplacementinscreenhit/2488772"
+ "?sitePlacements="+placementSlot.placement + "," + placementSlot.slot
+ "&tsSession=" + TS.session
+ "&tsUid=" + TS.uid
+ "&tsUV=" + TS.uv
+ "&tsUrl=" + TS.tsUrl;
TS.sendStats(url);
};
TS.shuffleArray = function(array) {
var tmp, current, top = array.length;
if(top) {
while(--top) {
current = Math.floor(Math.random() * (top + 1));
tmp = array[current];
array[current] = array[top];
array[top] = tmp;
}
}
return array;
};
TS.loadScript = function(url) {
var s = document.createElement("script");
s.type = "text/javascript";
s.src=url;
document.getElementsByTagName('head')[0].appendChild(s);
};
TS.loadCss = function(url, iframeDocument) {
var doc = document;
if(iframeDocument !== undefined){
doc = iframeDocument;
}
var l = doc.createElement("link");
l.type = "text/css";
l.rel = "stylesheet";
l.href = url;
doc.getElementsByTagName('head')[0].appendChild(l);
};
TS.writeSessionCookie = function (cookieName, cookieValue) {
if (TS.testSessionCookie()) {
document.cookie = escape(cookieName) + "=" + escape(cookieValue) + "; path=/";
return true;
}
return false;
};
TS.testSessionCookie = function () {
document.cookie ="testSessionCookie=Enabled";
return (TS.getCookieValue("testSessionCookie") === "Enabled");
};
TS.writePersistentCookie = function (cookieName, cookieValue, periodType, offset) {
var expireDate = new Date ();
offset = parseInt(offset,10) || 0;
var myPeriodType = periodType;
switch (myPeriodType.toLowerCase()) {
case "years":
var year = expireDate.getYear();
if (year < 1000){ year = year + 1900; }
expireDate.setYear(year + offset);
break;
case "months":
expireDate.setMonth(expireDate.getMonth() + offset);
break;
case "days":
expireDate.setDate(expireDate.getDate() + offset);
break;
case "hours":
expireDate.setHours(expireDate.getHours() + offset);
break;
case "minutes":
expireDate.setMinutes(expireDate.getMinutes() + offset);
break;
default:
TS.log("Invalid periodType parameter for writePersistentCookie()");
break;
}
document.cookie = escape(cookieName ) + "=" + escape(cookieValue) + "; expires=" + expireDate.toGMTString() + "; path=/";
};
TS.testPersistentCookie = function () {
TS.writePersistentCookie ("testPersistentCookie", "Enabled", "minutes", 1);
return (this.getCookieValue ("testPersistentCookie") === "Enabled");
};
TS.incrementCookie = function (id, frequence, frequenceDays) {
if(frequence !== undefined && frequence > 0) {
var cval = TS.getCookieValue("ts_ad_"+id) || 0;
cval = parseInt(cval);
frequence = parseInt(frequence);
if(cval < frequence) {
cval++;
TS.writePersistentCookie ("ts_ad_"+id, cval, "days", frequenceDays);
return true;
}
return false;
}
return true;
};
TS.incrementSessionCookie = function (id, sessionFrequence) {
if(sessionFrequence !== undefined && sessionFrequence > 0) {
var cval = this.getCookieValue("ts_ad_session"+id) || 0;
if(cval < sessionFrequence) {
cval++;
this.writeSessionCookie("ts_ad_session"+id, cval);
return true;
}
return false;
}
return true;
};
TS.contains = function(a, obj) {
var i = 0;
while(i < a.length) {
if(a[i] === obj) {
return true;
}
i++;
}
return false;
};
TS.isMobileDevice = function() {
var userAgent = navigator.userAgent || navigator.vendor || window.opera;
try {
return /(android(?!.*gt-p1000m|.*kindle.*fire|.*kftt|.*sch-i800|.*xoom)|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle(?!.*fire)|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(userAgent.substr(0, 4))
} catch (e) {
return false;
}
};
TS.isTablet = function() {
var userAgent = navigator.userAgent || navigator.vendor || window.opera;
try {
return /(android(?!.*mobile)|gt-p1000m|hpwos|ipad|kindle.*fire|playbook|puffin\/\d+\.\d+[ai]t|sch-i800|webos|windows(?!.*phone).*arm|xoom)/i.test(userAgent);
} catch (e) {
return false;
}
};
TS.addEventListener = function(el, eventName, handler) {
if(el.addEventListener) {
el.addEventListener(eventName, handler, false);
}
else if(el.attachEvent) {
el.attachEvent("on" + eventName, function(){handler.call(el);});
}
};
TS.removeEventListener = function(el, eventName, handler) {
if (el.removeEventListener) {
el.removeEventListener (eventName, handler, false);
}
else if (el.detachEvent) {
el.detachEvent ('on' + eventName, handler);
}
};
TS.getQParamFromStr = function (str, paramName) {
var regex = new RegExp("[\\?&]"+paramName+"=([^&#]*)");
var qParam = regex.exec(str);
if(qParam === null) {
return "";
}
return qParam[1];
};
TS.getQParam = function (paramName) {
return this.getQParamFromStr(window.location.href,paramName);
};
TS.PosPopUp = function (id,x,y,offset) {
var el = document.getElementById(id);
el.style.left=x+offset;
el.style.top=y-document.body.scrollTop+offset;
};
TS.getRand = function () {
return Math.round(Math.random() * 2147483647);
};
TS.getRandomNr = function (max) {
return Math.floor(Math.random() * max);
};
TS.getBrowserProperties = function () {
return '&tsSW=' + window.screen.width + '&tsSH=' + window.screen.height + '&tsSC=' + window.screen.colorDepth + '&tsPD=' + window.screen.pixelDepth;
};
TS.encode = function (s,u) {
if (typeof encodeURIComponent === 'function') {
if (u) {
return encodeURI(s);
}
return encodeURIComponent(s);
}
return escape(s);
};
TS.addClass = function(el, className) {
el.className += " " + className;
};
TS.removeClass = function(el, className) {
el.className = el.className.replace( new RegExp('(?:^|\\s)' + className + '(?!\\S)','g') , '' );
};
TS.insertStyleInHead = function(cssRules, styleTagId) {
if(styleTagId !== undefined && !!document.getElementById(styleTagId)) {
return;
}
var style = document.createElement('style');
style.type = 'text/css';
if(styleTagId !== undefined) {
style.id = styleTagId;
}
if(style.styleSheet) {
style.styleSheet.cssText = cssRules;
}
else {
style.appendChild(document.createTextNode(cssRules));
}
document.getElementsByTagName('head')[0].appendChild(style);
};
/*
Wait for conditionalFunction to return true, then call doFunction
*/
TS.waitForConditionalFunction = function(conditionalFunction, doFunction, intervalMs, maxWaitMs) {
if (typeof conditionalFunction === "function" && typeof doFunction === "function"){
if (typeof maxWaitMs === "number"){
var timeToStop = new Date().getTime() + maxWaitMs;
}
var wait = window.setInterval(function() {
if ( conditionalFunction() ) {
clearInterval(wait);
doFunction.call();
}
else if (timeToStop !== undefined && new Date().getTime() === timeToStop){
clearInterval(wait);
}
}, intervalMs);
}
};
/*!
* Author: Diego Perini (diego.perini at gmail.com)
* Summary: cross-browser wrapper for DOMContentLoaded
* Updated: 20101020
* License: MIT
* Version: 1.2
*
* http://javascript.nwbox.com/ContentLoaded/
* http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
*/
TS.domReady = function(win, fn) {
var done = false, top = true,
doc = win.document, root = doc.documentElement,
add = doc.addEventListener ? 'addEventListener' : 'attachEvent',
rem = doc.addEventListener ? 'removeEventListener' : 'detachEvent',
pre = doc.addEventListener ? '' : 'on',
init = function(e) {
if (e.type === 'readystatechange' && doc.readyState !== 'complete'){ return; }
(e.type === 'load' ? win : doc)[rem](pre + e.type, init, false);
if (!done && (done = true)){ fn.call(win, e.type || e); }
},
poll = function() {
try { root.doScroll('left'); } catch(e) { setTimeout(poll, 50); return; }
init('poll');
};
if (doc.readyState === 'complete'){ fn.call(win, 'lazy'); }
else {
if (doc.createEventObject && root.doScroll) {
try { top = !win.frameElement; } catch(e) { }
if (top){ poll(); }
}
doc[add](pre + 'DOMContentLoaded', init, false);
doc[add](pre + 'readystatechange', init, false);
win[add](pre + 'load', init, false);
}
};
TS.getElementsByClassName = function(search) {
var elements, pattern, i, results = [];
if(document.getElementsByClassName) {
return document.getElementsByClassName(search);
}
if (document.querySelectorAll) { // IE8
return document.querySelectorAll("." + search);
}
if (document.evaluate) { // IE6, IE7
pattern = ".//*[contains(concat(' ', @class, ' '), ' " + search + " ')]";
elements = document.evaluate(pattern, d, null, 0, null);
while ((i = elements.iterateNext())) {
results.push(i);
}
} else {
elements = document.getElementsByTagName("*");
pattern = new RegExp("(^|\\s)" + search + "(\\s|$)");
for (i = 0; i < elements.length; i++) {
if ( pattern.test(elements[i].className) ) {
results.push(elements[i]);
}
}
}
return results;
};
TS.replaceTimestamp = function(content) {
var timestamp = new Date().getTime();
return content.replace(/\[timestamp\]/g, timestamp);
};
/* TS Variables ----------------------------------------------------------------------------------------------------- */
TS.bd=document;
TS.dl=TS.bd.location;
TS.ho = (TS.dl.hostname && TS.dl.hostname !== '')  ? TS.encode(TS.dl.hostname) : '';
TS.lp = (TS.dl.pathname && TS.dl.pathname !== '') ? TS.dl.pathname : '';
TS.qu = (TS.dl.search && TS.dl.search !== "") ? TS.encode(TS.dl.search) : '';
TS.ref = (TS.bd.referrer && TS.bd.referrer !== '') ? TS.encode(TS.bd.referrer) : '';
TS.session = TS.getCookieValue("ts_session") || '';
TS.uid = TS.getCookieValue("ts_uid") || '';
TS.uv = TS.getCookieValue("ts_uv") || '';
TS.bp = TS.getBrowserProperties() || '';
TS.tsUrl = window.tsUrl || '';
TS.tsUrl = (TS.tsUrl !== '') ? escape(TS.tsUrl) : '';
TS.countryCode=TS.getQParam('tsCountryCode') || "%COUNTRY_CODE%";
TS.regionCode=TS.getQParam('tsRegionCode') || "%REGION_CODE%";
}(TS = window.TS || {}));
(function(TS){
TS.getParameterByName = function (name) {
name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
results = regex.exec(location.search);
return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};
TS.log = function(msg)
{
if (TS.isLogDebug() && window.console && window.console.log)
{
var divId = TS.getParameterByName("tsDivDebug");
if(divId && typeof jQuery != 'undefined')
{
jQuery("#"+divId).prepend(msg + "<br/>");
}
else
{
window.console.log(msg);
}
}
};
TS.isDebug = function () {
return (window.location.href.indexOf('tsDebug=1') !== -1);
};
TS.isLogDebug = function () {
return (window.location.href.indexOf('tsDebug=2') !== -1);
};
TS.renderDebugAd = function (width, height, text, greyout) {
var randPopUpId = this.getRandomNr(1000);
var renderThis = '<div id="tsDebugPop_'+randPopUpId+'" style="display:none;border:transparent 1px solid;border-radius:5px;width:200px;height:110px;text-align:left;background:#eee;position:fixed;z-index:99;left:40%;top:40%;padding:0px 5px 10px 5px;"><p style="cursor:pointer;text-align:right;margin:0px;" onclick="this.parentNode.style.display=\'none\';">X</p>Height<br/><input onkeyup="document.getElementById(\'tsDebugAd_'+randPopUpId+'\').style.height=this.value+\'px\';"><br />Width:<br/><input onkeyup="document.getElementById(\'tsDebugAd_'+randPopUpId+'\').style.width=this.value+\'px\';"></div>';
renderThis += '<button class="ts-debug-ad" id="tsDebugAd_'+randPopUpId+'" onclick="TS.PosPopUp(\'tsDebugPop_'+randPopUpId+'\',this.offsetLeft,this.offsetTop,20);document.getElementById(\'tsDebugPop_'+randPopUpId+'\').style.display=\'block\';" style="height:'+height+'px;width:'+width+'px;';
if(greyout){
renderThis += ' opacity:0.5';
}
renderThis += '">' + text + '</button>';
TS.renderInContainer(renderThis);
};
TS.insertDebugCSS = function() {
var debugCSS = '.ts-ad:before { content: "Tailsweep Ad";position: absolute;z-index: 99999;background-color: #000;opacity: 0.8;color: #fff;padding: 5px;}';
debugCSS += '.ts-placement-in-screen {background-color:red !important; width:10px !important; height:10px !important;}';
debugCSS += '.ts-debug-ad {border:#000 0px solid;background-image:none;background-color:#ff17fc;text-align:center;font-size:20px;font-size:1rem;color:#fff;}';
TS.insertStyleInHead(debugCSS, 'tsDebug');
};
if (TS.isLogDebug() || TS.isDebug()) {
TS.insertDebugCSS();
}
}(TS = window.TS || {}));
/* Source: TS.Ad.js.vm */
(function(TS){
TS.browserIsIE = function(){
return navigator.appName.indexOf("Internet Explorer") !== -1;
};
TS.browserDetection = function(){
var nVer = navigator.appVersion;
var nAgt = navigator.userAgent;
var browserName  = navigator.appName;
var fullVersion  = ''+parseFloat(navigator.appVersion);
var majorVersion = parseInt(navigator.appVersion,10);
var nameOffset,verOffset,ix;
if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
browserName = "Opera";
fullVersion = nAgt.substring(verOffset+6);
if ((verOffset=nAgt.indexOf("Version"))!=-1)
fullVersion = nAgt.substring(verOffset+8);
}
else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
browserName = "Microsoft Internet Explorer";
fullVersion = nAgt.substring(verOffset+5);
}
else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
browserName = "Chrome";
fullVersion = nAgt.substring(verOffset+7);
}
else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
browserName = "Safari";
fullVersion = nAgt.substring(verOffset+7);
if ((verOffset=nAgt.indexOf("Version"))!=-1){
fullVersion = nAgt.substring(verOffset+8);
}
}
else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
browserName = "Firefox";
fullVersion = nAgt.substring(verOffset+8);
}
else if((nameOffset=nAgt.lastIndexOf(' ')+1) < (verOffset=nAgt.lastIndexOf('/')) ){
browserName = nAgt.substring(nameOffset,verOffset);
fullVersion = nAgt.substring(verOffset+1);
if (browserName.toLowerCase()==browserName.toUpperCase()) {
browserName = navigator.appName;
}
}
if(/Android/i.test(nAgt)){
return {b: "Android", v:1};
}
else if(/iPhone/i.test(nAgt)){
return {b: "iPhone", v:1};
}
else if(/iPad/i.test(nAgt)){
return {b: "iPad", v:1};
}
if ((ix=fullVersion.indexOf(";"))!=-1){
fullVersion=fullVersion.substring(0,ix);
}
if ((ix=fullVersion.indexOf(" "))!=-1){
fullVersion=fullVersion.substring(0,ix);
}
majorVersion = parseInt(''+fullVersion,10);
if (isNaN(majorVersion)) {
fullVersion  = ''+parseFloat(navigator.appVersion);
majorVersion = parseInt(navigator.appVersion,10);
}
TS.log('Browser name  = '+browserName+'<br>'+'Major version = '+majorVersion+'<br>');
return {b: browserName, v:majorVersion};
}
TS.browserRejection = function(browsers, userAgent){
for(var i = 0; i<browsers.length; i++){
if(browsers[i].b === userAgent.b){
if(browsers[i].o === "gt"){
if(userAgent.v > parseInt(browsers[i].v,10)){
return false;
}
}
if(browsers[i].o === "gte"){
if(userAgent.v >= parseInt(browsers[i].v,10)){
return false;
}
}
if(browsers[i].o === "lt"){
if(userAgent.v < parseInt(browsers[i].v,10)){
return false;
}
}
if(browsers[i].o === "lte"){
if(userAgent.v <= parseInt(browsers[i].v,10)){
return false;
}
}
if(browsers[i].o === "eq"){
if(userAgent.v === parseInt(browsers[i].v,10)){
return false;
}
}
}
}
return true;
};
TS.wasSomethingRenderedWithin = function(id) {
var e = document.getElementById(id);
if(e)
{
if(TS.isMobileDevice())
return e.offsetHeight > 20;
return e.offsetHeight > 40;
}
else
{
TS.log("Could not find "+id);
}
return false;
};
TS.isElementVisible = function(elem) {
if (elem === document){ return true; }
if (!elem){ return false; }
if (!elem.parentNode){ return false; }
if (elem.style) {
if (elem.style.display === 'none'){ return false; }
if (elem.style.visibility === 'hidden'){ return false; }
}
if (window.getComputedStyle) {
var computedStyle = window.getComputedStyle(elem, '');
if (computedStyle.display === 'none'){ return false; }
if (computedStyle.visibility === 'hidden'){ return false; }
}
if (elem.currentStyle) {
if (elem.currentStyle.display === 'none'){ return false; }
if (elem.currentStyle.visibility === 'hidden'){ return false; }
}
return TS.isElementVisible(elem.parentNode);
};
TS.adHit = function(scriptView,adContent) {
var siteAdId = scriptView.siteAdId;
TS.adHits = TS.adHits || {};
// Logged already?
if(TS.adHits[siteAdId] === undefined) {
TS.log("Hitting sitead "+siteAdId);
TS.adHits[siteAdId] = 1;
var url = "//script.tailsweep.com/siteadhit/" + scriptView.siteAdId
+ "?tsId=2488772&accsid=" + adContent.concreteStatisticsId
+ "&sacsid=" + scriptView.siteAdConcreteStatisticsId
+ "&rand=" + TS.getRand();
TS.sendStats(url);
}
};
TS.logVisibleAdImp = function(adContent) {
var url = "//script.tailsweep.com/siteadinscreenhit/" + adContent.siteAdId
+ "?tsId=2488772&accsid=" + adContent.concreteStatisticsId
+ "&sacsid=" + adContent.siteAdConcreteStatisticsId
+ "&rand=" + TS.getRand();
TS.sendStats(url);
};
TS.logInScreenTime = function(adContent, totalTime) {
if(totalTime !== undefined && totalTime > 0) {
var url = "//script.tailsweep.com/siteadtime/" + adContent.siteAdId
+ "?tsId=2488772&sacsid=" + adContent.siteAdConcreteStatisticsId
+ "&accsid=" + adContent.concreteStatisticsId
+ "&rand=" + TS.getRand()
+ "&time=" + totalTime
+ "&ct=i";
TS.sendStats(url);
}
};
TS.rect = function(id, width, height) {
var obj = document.getElementById(id);
if(obj)
{
obj.style.width = width + "px";
obj.style.height = height + "px";
obj.style.overflow = "hidden";
var emb = obj.getElementsByTagName('embed')[0];
if(emb)
{
emb.style.width = width + "px";
emb.style.height = height + "px";
emb.style.overflow = "hidden";
}
}
};
TS.browserHas3d = function() {
var el = document.createElement('p'),
has3d,
trns,
transforms = {
'webkitTransform':'-webkit-transform',
'OTransform':'-o-transform',
'msTransform':'-ms-transform',
'MozTransform':'-moz-transform',
'transform':'transform'
};
// Add it to the body to get the computed style
document.body.insertBefore(el, null);
for (trns in transforms) {
if (transforms.hasOwnProperty(trns) && el.style[trns] !== undefined) {
el.style[trns] = 'translate3d(1px,1px,1px)';
has3d = window.getComputedStyle(el).getPropertyValue(transforms[trns]);
}
}
document.body.removeChild(el);
return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
};
TS.isAdContentActive = function(activePeriods) {
if(activePeriods.length === 0) {
return true;
}
var theDate = new Date(),
weekDay = theDate.mGetDay(),
hour = theDate.getHours(),
i = 0;
while(i < activePeriods.length) {
if(activePeriods[i].startWeekDay <= weekDay && activePeriods[i].endWeekDay >= weekDay && activePeriods[i].startHour <= hour && activePeriods[i].endHour >= hour) {
return true;
}
i++;
}
return false;
};
TS.isInCountry = function (adCountryCode) {
var placeholder = "";
placeholder = "%COUNTRY"+placeholder+"_CODE%"; /* If we failed to replace it server-side */
return (adCountryCode === "0" || adCountryCode === 0 || adCountryCode === "" || adCountryCode === this.countryCode || this.countryCode === placeholder);
};
TS.isInRegion = function (regionCodes) {
var placeholder = "";
placeholder = "%REGION"+placeholder+"_CODE%"; /* If we failed to replace it server-side */
if (!regionCodes || regionCodes.length === 0 || regionCodes[0] === "" || regionCodes[0] === 0 || regionCodes[0] === "0" || this.regionCode === placeholder)
{
return true;
}
var i;
for (i=0;i<regionCodes.length;i++)
{
var regionCode = "" + regionCodes[i];
if (regionCode === this.regionCode)
{
return true;
}
}
return false;
};
TS.adMatchesVisitor = function(ad) {
var uniqueOK = TS.incrementCookie(ad.siteAdId,ad.frequence, ad.frequenceDays);
var sessionUniqueOK = TS.incrementSessionCookie(ad.siteAdId,ad.sessionFrequence);
var inCountry = TS.isInCountry(ad.countryCode);
var inRegion = TS.isInRegion(ad.regionCodes);
return uniqueOK && sessionUniqueOK && inCountry && inRegion;
};
TS.insertResponsiveAdCSS = function(adContent, type, placementId) {
var ad = TS['pl_'+placementId].siteAds[adContent.siteAdId];
if(ad.properties.disableAdCss !== undefined && ad.properties.disableAdCss === "true"){
return;
}
var responsiveCSS = "@media screen and (max-width : 979px) {";
var padding = adContent.height / adContent.width * 100;
if(type === "videoAd") {
var padding = adContent.videoAdContentProperties.height / adContent.videoAdContentProperties.width * 100;
responsiveCSS += '.ts-div div[id="' + adContent.inScreenId + '"] { height: 0 !important;  position:relative; padding-bottom:' + padding + '%; max-width: ' + adContent.videoAdContentProperties.width + 'px !important; margin: 0 auto 0 auto;}'
+ '.ts-div div[id="' + adContent.inScreenId + '"] iframe { position: absolute;top: 0;left: 0; width: 100% !important;height: 100% !important;}';
}
else{                var currentScript = document.currentScript;
if(currentScript !== undefined && currentScript !== null){
padding = currentScript.parentElement.offsetWidth / adContent.width;
}
else{
padding = document.body.clientWidth / adContent.width;
}
if(padding < 1){
var responsiveCSS = "#" + adContent.inScreenId + "{ transform-origin: 0 0 0; -webkit-transform-origin: 0 0 0; transform: scale(" + padding + "); -webkit-transform: scale(" + padding + "); }" +
" #" + adContent.inScreenId + " > .ts-ad{ height: " + padding * adContent.height + "px !important;}";
}
else{
var responsiveCSS = "#" + adContent.inScreenId + "{ transform-origin: 0 0 0; -webkit-transform-origin: 0 0 0; transform: scale(1); -webkit-transform: scale(1); }" +
" #" + adContent.inScreenId + " > .ts-ad{ height: " + adContent.height + "px !important;}";
}
TS.addEventListener(window, 'resize', function(){
var currentScript = document.currentScript;
if(currentScript !== undefined && currentScript !== null){
padding = currentScript.parentElement.offsetWidth / adContent.width;
}
else{
var width = document.getElementById(adContent.inScreenId).parentElement.offsetWidth;
var padding = width / adContent.width;
}
if(padding < 1){
var responsiveCSS = "#" + adContent.inScreenId + "{ transform-origin: 0 0 0; -webkit-transform-origin: 0 0 0; transform: scale(" + padding + "); -webkit-transform: scale(" + padding + "); }" +
" #" + adContent.inScreenId + " > .ts-ad{ height: " + padding * adContent.height + "px !important;}";
}
else{
var responsiveCSS = "#" + adContent.inScreenId + "{ transform-origin: 0 0 0; -webkit-transform-origin: 0 0 0; transform: scale(1); -webkit-transform: scale(1); }" +
" #" + adContent.inScreenId + " > .ts-ad{ height: " + adContent.height + "px !important;}";
}
var style = document.getElementById(adContent.inScreenId + "_css");
try{
style.innerHTML = responsiveCSS;
}catch(error){
style.styleSheet.cssText = responsiveCSS;
}
}, false);
}/*
else {
responsiveCSS += '.ts-div div[id="' + adContent.inScreenId + '"] {position:relative; margin: 0 auto 0 auto;}'
+ '.ts-div div[id="' + adContent.inScreenId + '"] img[width="1"] {display:none;}'
+ '.ts-div div[id="' + adContent.inScreenId + '"] img[width="0"] {display:none;}'
+ '.ts-div div[id="' + adContent.inScreenId + '"], .ts-div div[id^="' + adContent.inScreenId+ '"] *:not(div):not([height="1"]):not([width="1"]):not(embed):not(iframe) {max-width: ' + adContent.width + 'px !important;  width: 100% !important; height: auto !important; max-height:' + adContent.height + 'px;}'
+ '.ts-div div[id^="' + adContent.inScreenId + '"] div {padding-bottom:' + padding + '% !important; height: 0 !important; width:100% !important}'
+ '.ts-div div[id="' + adContent.inScreenId + '"] object { max-width: ' + adContent.width + 'px !important; width: 100% !important; position: absolute; top:0; left:0; padding-bottom:' + padding + '%;}'
+ '.ts-div div[id="' + adContent.inScreenId + '"] embed {position: absolute; top: 0; left: 0; height: 100% !important; padding-bottom:0 !important;width: 100%;}';
}*/
responsiveCSS += "}";
TS.insertStyleInHead(responsiveCSS, adContent.inScreenId + "_css" );
};
TS.flashEnabled = function() {
var flashEnabled = false;
if(window.ActiveXObject !== undefined) {
try{
flashEnabled = !!(new ActiveXObject("ShockwaveFlash.ShockwaveFlash"));
}catch(e){
flashEnabled = false;
}
} else {
flashEnabled = !!navigator.mimeTypes['application/x-shockwave-flash'];
}
return flashEnabled;
};
TS.deleteFromAds = function (ads, ad) {
var i = 0;
while(i < ads.length) {
if(ads[i].siteAdId === ad.siteAdId) {
ads.splice(i,1);
}
i++;
}
};
TS.renderInContainer = function (content, js, id) {
TS.insertStyleInHead('.ts-div{text-align:center;margin: 0 auto; padding: 0; display: block;}', 'tsDefaultCSS');
if(id === undefined)
{
id = "filler-"+this.getRandomNr(10000000);
}
document.write('<div class="ts-div" id="'+id+'">');
document.write(content);
if(js !== undefined) {
eval(js);         }
document.write('</div>');
};
TS.getWinWidth = function() {
var myWidth = 0;
if (typeof window.innerWidth === 'number') {
myWidth = window.innerWidth;
}
else if (document.documentElement && document.documentElement.clientWidth ) {
myWidth = document.documentElement.clientWidth;
}
return myWidth;
};
TS.getWinHeight = function() {
var myHeight = 0;
if( typeof window.innerHeight  === 'number' ) {
myHeight = window.innerHeight;
}
else if( document.documentElement && document.documentElement.clientHeight ) {
myHeight = document.documentElement.clientHeight;
}
return myHeight;
};
TS.processPrioLevel = function(placementId, level, slotsProcessed){
if(TS['pl_' + placementId].adsByPrio !== undefined && TS['pl_' + placementId].adsByPrio[level].ads.length > 0 && TS['pl_' + placementId].adsRenderedInSlot === 0) {
TS.log("pl_" + placementId + " - Num ads " + TS['pl_' + placementId].adsByPrio[level].ads.length);
TS['pl_' + placementId].adsByPrio[level].ads = TS.shuffleArray(TS['pl_' + placementId].adsByPrio[level].ads);
if(slotsProcessed <= TS['pl_' + placementId].maxAds) {
if(TS['pl_' + placementId].placementType == 0) {
TS.renderSeveralPerSlot(placementId, TS['pl_' + placementId].adsByPrio[level].ads, TS['pl_' + placementId].maxAds);
}
else if(TS['pl_' + placementId].placementType == 2) {
TS.renderGridAds(placementId, TS['pl_' + placementId].adsByPrio[level].ads, TS['pl_' + placementId].maxAds);
}
else {
TS.renderMaxOnePerSlot(placementId, TS['pl_' + placementId].adsByPrio[level].ads, TS['pl_' + placementId].maxAds);
}
}
else {
TS.log("pl_" + placementId + " - Not rendering any more ads, slotsProcessed = " + slotsProcessed);
}
}
};
TS.makeSticky = function(adContent) {
TS.log("renderStickyAd()");
var initSticky = function(){
if (!TS.stickyReady){
TS.loadScript("//script.tailsweep.com/js/sticky/ts-sticky.js");
TS.stickyReady = true;
}
TS.waitForConditionalFunction(
function(){
return window.TSStickyAd !== undefined;
},
function(){
var stickyAd = new TSStickyAd(adContent);
},100, 10000);
};
var css = '.ts-sticky {position: fixed !important; top:0px;margin: auto;width: 100%;z-index: 10000;}';
css += '@media screen and (max-width : 979px) { .ts-sticky {left:0px;} }';
css += '.ts-sticky > .tsCloseImg_' + adContent.inScreenId + ' {position: absolute; right: 10px; z-index: 10000; margin-right:-15px; margin-top:-15px; opacity: 0.5;}';
css += '.tsCloseImg_' + adContent.inScreenId + ' {display:none;} .ts-sticky > .tsVisible{display:block;}';
css += '.tsCloseImg_' + adContent.inScreenId + ':hover {opacity: 1.0 !important; cursor:pointer;}';
initSticky();
TS.insertStyleInHead(css, 'ts-sticky_' + adContent.inScreenId);
document.getElementById(adContent.inScreenId).parentNode.style.maxWidth = adContent.width + 'px';
document.getElementById(adContent.inScreenId).style.maxWidth = adContent.width + 'px';
};
TS.logMouseClickXYOnUnload = function(adContent, position) {
if(position !== false){
var url = "//script.tailsweep.com/siteadclickcoordinates/" + adContent.id
+ "?tsId=2488772&accsid=" + adContent.concreteStatisticsId
+ "&sacsid=" + adContent.siteAdConcreteStatisticsId
+ "&X=" + position.X
+ "&Y=" + position.Y
+ "&rand=" + TS.getRand();
TS.sendStats(url);
}
};
var TSAdClickPositionTracker = function(adContent, conf) {
var that = this;          conf = conf || {};
that.isDebug = TS.isLogDebug();
that.tsAd = null;
that.customTarget = null;
that.mouseClicked = false;
that.position = null;
that.targetOffset = null;
that.coordinates = null;
that.adContent = adContent;
that.onBeforeUnload = conf.onBeforeUnload || function(){};
that.tsAd = document.getElementById(adContent.inScreenId);
if(that.tsAd !== undefined && that.tsAd !== null){
if(that.tsAd.getElementsByTagName("embed").length > 0){
TS.addEventListener(that.tsAd,'mousedown', function(e){
var tsAd = this;
customTarget = e.target;
mouseClicked = true;
//that.coordinates = that.getCoordinates(e,tsAd);
});
TS.addEventListener(that.tsAd,'mouseup', function(e){
var tsAd = this;
that.coordinates = that.getCoordinates(e,tsAd);
if(e.target === customTarget){
if(that.coordinates.X > 0 && that.coordinates.Y > 0){
if(((e.target.offsetWidth > that.coordinates.X || that.coordinates.X < 0)
&& (e.target.offsetHeight > that.coordinates.Y || that.coordinates.Y < 0)) && mouseClicked){
that.position = that.coordinates;
that.targetOffset = {X:e.target.offsetWidth,Y:e.target.offsetHeight};
}
}
}
mouseClicked = false;
if(that.isDebug) {
if (that.position) { TS.log("MouseClickCoordinates: " + that.position.X + " " + that.position.Y); }
if (that.targetOffset) { TS.log("TargetOffset: " + that.targetOffset.X + " " + that.targetOffset.Y); }
}
});
TS.addEventListener(document,'mouseup', function(e){
mouseClicked = false;
});
TS.addEventListener(window, 'blur', function(){
TS.logMouseClickXYOnUnload(that.adContent, that.calculatePercent(that.position, that.targetOffset));
that.position = null;
that.targetOffset = null;
});
TS.addEventListener(window, 'beforeunload', function(){
TS.logMouseClickXYOnUnload(that.adContent, that.calculatePercent(that.position, that.targetOffset));
that.position = null;                     that.targetOffset = null;
});
} else {
TS.addEventListener(that.tsAd, 'click', function(e){
var tsAd = this;
that.position = that.getCoordinates(e,tsAd);
that.targetOffset = {X:e.target.offsetWidth,Y:e.target.offsetHeight};
TS.logMouseClickXYOnUnload(that.adContent, that.calculatePercent(that.position, that.targetOffset));
});
if(that.isDebug) {
if (that.position) { TS.log("MouseClickCoordinates: " + that.position.X + " " + that.position.Y); }
if (that.targetOffset) { TS.log("TargetOffset: " + that.targetOffset.X + " " + that.targetOffset.Y); }
}
that.position = null;
that.targetOffset = null;
}
}
};
TSAdClickPositionTracker.prototype.findPosition = function(oElement){
if(typeof( oElement.offsetParent ) != "undefined")
{
for(var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent)
{
posX += oElement.offsetLeft;
posY += oElement.offsetTop;
}
return [ posX, posY ];
}
else
{
return [ oElement.x, oElement.y ];
}
};
TSAdClickPositionTracker.prototype.calculatePercent = function(position, offsetTarget){
if(position !== null && offsetTarget !== null){
return {X:((position.X/offsetTarget.X)*100).toFixed(2),Y:((position.Y/offsetTarget.Y)*100).toFixed(2)};
} else {
return false;
}
};
TSAdClickPositionTracker.prototype.getCoordinates = function(e, tsAd){
var PosX = 0;
var PosY = 0;
var ImgPos;
ImgPos = this.findPosition(tsAd);
if (!e) var e = window.event;
if (e.pageX || e.pageY)
{
PosX = e.pageX;
PosY = e.pageY;
}
else if (e.clientX || e.clientY)
{
PosX = e.clientX + document.body.scrollLeft
+ document.documentElement.scrollLeft;
PosY = e.clientY + document.body.scrollTop
+ document.documentElement.scrollTop;
}
PosX = PosX - ImgPos[0];
PosY = PosY - ImgPos[1];
var position = {X:PosX,Y:PosY}
return position;
};
TS.countSlot = function(slot){
++TS.pl_4.adsRenderedInSlot;
++TS.pl_4.adsRenderedInSpecificSlot[TS.pl_4.currentSlot];
TS.log("4 - Ads rendered in slot "+slot + "=" + TS.pl_4.adsRenderedInSpecificSlot[TS.pl_4.currentSlot]);
};
window.TSAdClickPositionTracker = TSAdClickPositionTracker;
}(TS = window.TS || {}));/* Source: TS.API.js.vm */
(function(TS){
TS.newPageImpression = function() {
var i,
propertyNames = Object.getOwnPropertyNames(TS),
placement;
for(i = 0; i < propertyNames.length;i++) {
if(propertyNames[i].indexOf('pl_') !== -1) {
placement = propertyNames[i];
TS[placement].adsByPrio = undefined;
TS[placement].currentSlot = undefined;
TS[placement].siteAds = undefined;
TS[placement].adsByPrio = undefined;
window['ts_'+placement+'_idx'] = undefined;
}
}
};
}(TS = window.TS || {}));(function(TS){
TS.renderPix = function() {
document.write('<img border="0" src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAQAICRAEAOw==" height="10" width="1" style="width:1px;height:10px;margin:0 auto;padding:0;border-style:none;border-width:0;display:inline-block;" />');
};
}(TS = window.TS || {}));
/* Source: TS.RenderFillerAd.js.vm */
(function(TS) {
TS.createFillerContainer4 = function() {
if(TS.pl_4.fillerCarousel === undefined)
{
TS.pl_4.fillerCarousel = {};
TS.pl_4.fillerCarousel.fillerAds = [];
TS.pl_4.fillerCarousel.mobileFillerAds = [];
TS.pl_4.fillerCarousel.tabletFillerAds = [];
TS.pl_4.fillerCarousel.fillerAdSlots = [];
TS.pl_4.fillerCarousel.slotSpecificFiller = [];
TS.pl_4.fillerCarousel.slotSpecificMobileFiller = [];
TS.pl_4.fillerCarousel.slotSpecificTabletFiller = [];
TS.pl_4.fillerCarousel.started = false;
TS.pl_4.fillerCarousel.chosenFillerMap = {};
}
return TS.pl_4.fillerCarousel;
};
TS.addFillerSlot4 = function(fillerCarousel) {
var id = "ts-filler-4-" + TS.pl_4.currentSlot;
fillerCarousel.fillerAdSlots.push(
{
"id": id,
"fillerAd":undefined,
"currentSlot": TS.pl_4.currentSlot
}
);
TS.renderInContainer("", undefined, id);
var slotElement = document.getElementById(id);
if(slotElement && slotElement !== undefined)
{
}
};
TS.getFillerBySpecificSlot4 = function(fillerAds, slot, fillerNr) {
var i;
if(fillerAds.length > 0 && fillerAds[fillerNr].slotSpecific && fillerAds[fillerNr].slotSpecific.length > 0) {
for(i = 0; i<fillerAds[fillerNr].slotSpecific.length; i++) {
if(fillerAds[fillerNr].slotSpecific[i] === slot.currentSlot) {
TS.log("Slot specific ad " + fillerAds[fillerNr].name + " rendered in slot - " + slot.currentSlot);
return fillerNr;
}
TS.log("Ad " + fillerAds[fillerNr].name + " not rendered due to slot specific: " + fillerAds[fillerNr].slotSpecific[i] + " != " + slot.currentSlot);
if(fillerAds[fillerNr].slotSpecific[i] > slot.currentSlot) {
TS.log("Ad has slotSpecific chance later");
fillerHolder.slotSpecificFiller.push(fillerHolder.fillerAds[fillerNr]);
}
}
} else {
return fillerNr;
}
fillerAds.splice(fillerNr, 1);
return false;
};
TS.getRandomFillerWithHighestPrio4 = function(fillerAds) {
var highestPrioFound = -1;
for (var i = 0; i < fillerAds.length; i++) {
if (highestPrioFound === -1 || fillerAds[i].waterfallLevel < highestPrioFound) {
highestPrioFound = fillerAds[i].waterfallLevel;
}
}
var fillersWithHighestPrio = [];
for (var i = 0; i < fillerAds.length; i++) {
if (fillerAds[i].waterfallLevel === highestPrioFound) {
fillersWithHighestPrio.push(i);
}
}
var fillerNr = fillersWithHighestPrio[TS.getRandomNr(fillersWithHighestPrio.length)];
return fillerNr;
};
TS.fillerCarousel4 = function(fillerHolder) {
if(fillerHolder.started === false)
{
TS.log("pl_4 - starting carousel");
fillerHolder.started = true;
var maxTime = 600;
var allSpecificSlotsTried = false
var renderAllFillers = setInterval(function() {
--maxTime;
if(fillerHolder.fillerAds.length == 0 && fillerHolder.mobileFillerAds.length == 0 && fillerHolder.tabletFillerAds.length == 0
&& fillerHolder.slotSpecificFiller.length == 0 && fillerHolder.slotSpecificMobileFiller.length == 0 && fillerHolder.slotSpecificTabletFiller.length == 0)
{
TS.log("pl_4 - No fillers");
clearInterval(renderAllFillers);
}
else if(maxTime === 0)
{
TS.log("pl_4 - Time is up");
clearInterval(renderAllFillers);
}
else
{
if(fillerHolder.fillerAdSlots.length > 0)
{
TS.log("pl_4 - Num filler slots "+fillerHolder.fillerAdSlots.length);
var slot = fillerHolder.fillerAdSlots[0];
if(TS.pl_4.adsRenderedInSpecificSlot[slot.currentSlot] > 0)
{
fillerHolder.fillerAdSlots.splice(0, 1);
TS.log("pl_4 - already rendered an ad in slot "+slot.currentSlot);
return;
}
else if(allSpecificSlotsTried === true){
fillerHolder.fillerAdSlots.splice(0, 1);
allSpecificSlotsTried = false;
TS.log("Tried all specificSlots for this slot" + slot.currentSlot);
return;
}
else
{
TS.log("pl_4 - No ads rendered in slot "+slot.currentSlot + " yet, proceed")
}
if(slot.fillerAd === undefined)
{
var chosenFiller = undefined;
if( fillerHolder.mobileFillerAds.length > 0)
{
Array.prototype.push.apply(fillerHolder.mobileFillerAds, fillerHolder.slotSpecificMobileFiller);
fillerHolder.slotSpecificMobileFiller = [];
var fillerNr = TS.getRandomFillerWithHighestPrio4(fillerHolder.mobileFillerAds);
while(TS.getFillerBySpecificSlot4(fillerHolder.mobileFillerAds, slot, fillerNr) === false) {
fillerNr = TS.getRandomFillerWithHighestPrio4(fillerHolder.mobileFillerAds);
}
chosenFiller = fillerHolder.mobileFillerAds[fillerNr];
fillerHolder.mobileFillerAds.splice(fillerNr,1);                             }
else if(fillerHolder.tabletFillerAds.length > 0)
{
Array.prototype.push.apply(fillerHolder.tabletFillerAds, fillerHolder.slotSpecificTabletFiller);
fillerHolder.slotSpecificTabletFiller = [];
var fillerNr = TS.getRandomFillerWithHighestPrio4(fillerHolder.tabletFillerAds);
while(TS.getFillerBySpecificSlot4(fillerHolder.tabletFillerAds, slot, fillerNr) === false) {
fillerNr = TS.getRandomFillerWithHighestPrio4(fillerHolder.tabletFillerAds);
}
chosenFiller = fillerHolder.tabletFillerAds[fillerNr];
fillerHolder.tabletFillerAds.splice(fillerNr, 1);                             }
else
{
Array.prototype.push.apply(fillerHolder.fillerAds, fillerHolder.slotSpecificFiller);
fillerHolder.slotSpecificFiller = [];
var fillerNr = TS.getRandomFillerWithHighestPrio4(fillerHolder.fillerAds);
while(TS.getFillerBySpecificSlot4(fillerHolder.fillerAds, slot, fillerNr) === false) {
fillerNr = TS.getRandomFillerWithHighestPrio4(fillerHolder.fillerAds);
}
chosenFiller = fillerHolder.fillerAds[fillerNr];
fillerHolder.fillerAds.splice(fillerNr,1);                             }
if(chosenFiller === undefined)
{
if(fillerHolder.fillerAds.length == 0 && fillerHolder.mobileFillerAds.length == 0 && fillerHolder.tabletFillerAds.length == 0){
allSpecificSlotsTried = true;
}
TS.log("pl_4 - No chosen filler for slot "+slot.id);
return;
}
if(chosenFiller.inProcess)
{
TS.log("pl_4 - Impossible state for filler "+chosenFiller.id + ", num ads rendered in slot "+slot.currentSlot)
}
if (!TS.renderedFillersPlacement4) {
TS.renderedFillersPlacement4 = [];
}
var fillerAlreadyRendered4 = false;
for (var i = 0; i < TS.renderedFillersPlacement4.length; i++) {
if (TS.renderedFillersPlacement4[i] === chosenFiller.id) {
fillerAlreadyRendered4 = true;
}
}
chosenFiller.inProcess = true;
TS.pl_4.fillerCarousel.chosenFillerMap[chosenFiller.id] = chosenFiller;
TS.log("pl_4 - Processing filler "+chosenFiller.id + ", " + chosenFiller.name + ", num ads rendered in slot "+slot.currentSlot + " = "+TS.pl_4.adsRenderedInSpecificSlot[slot.currentSlot]);
var slotElement = document.getElementById(slot.id);
TS.log("pl_4 - Got a slot for "+chosenFiller.id + ", div: "+slot.id);
if(slotElement && slotElement !== undefined && !fillerAlreadyRendered4)
{
TS.renderedFillersPlacement4.push(chosenFiller.id);
slot.fillerAd = chosenFiller;
var iframe = document.createElement('iframe');
iframe.id="ts-filler-iframe-"+chosenFiller.id;
iframe.marginHeight=0;
iframe.marginWidth=0;
iframe.frameBorder=0;
iframe.width="0";
iframe.height="0";
iframe.scrolling="no";
var jsFunc = "<scr"+"ipt type='text/javascript'>function tsPassback() { " +
"window.parent.TS.passback4(" + chosenFiller.id+", '"+slot.id +"');"+
"}" +
"</scr"+"ipt>";
var content = TS.replaceTimestamp(chosenFiller.content);
var url = encodeURIComponent(document.location.href);
content = content.replace("$pageUrl", url);
var html = '<html><head><style type="text/css"></style>'+jsFunc+'</head><body id="frameBody" style="padding:0px;margin:0px">'+content+'</body></html>';
iframe.src ='about:blank';
while (slotElement.firstChild) {
slotElement.removeChild(slotElement.firstChild);
}
iframe.onload = function()
{
TS.log("iframe '"+this.id+"' loaded");
};
if(TS.isLogDebug() || TS.isDebug()) {
var d = document.createElement("div");
d.innerHTML = slot.id + ", "+chosenFiller.name + ", " + chosenFiller.slotSpecific;
slotElement.appendChild(d);
}
slotElement.appendChild(iframe);
TS.log("4 - Appending "+chosenFiller.name+" to slot "+slot.id +"\n"+html+"\n");
iframe.contentWindow.document.write(html);
iframe.contentWindow.document.close();
var max = 100;
var startTime = new Date().getTime();
var checkRenderTheFiller = setInterval(function() {
--max;
var checkRes = TS.checkFillerAdRendered4(startTime, max, chosenFiller, slot, iframe, fillerHolder);
var endTime = new Date().getTime();
var ttr = endTime - startTime;
if(checkRes || (ttr > chosenFiller.timeToLive) || chosenFiller.inProcess == false)
{
TS.log(slot.id + " " + chosenFiller.name + " done after ttr = "+ttr);
slot.fillerAd = undefined;
clearInterval(checkRenderTheFiller);
}
}, 100);
}
}
else
{
TS.log("pl_4 - Slot "+slot.currentSlot + " already is processing "+slot.fillerAd.id + ", "+slot.fillerAd.name)
}
}
}
}, 100);
}
};
TS.passback4 = function(fillerId, slotId)
{
var chosenFiller = TS.pl_4.fillerCarousel.chosenFillerMap[fillerId];
TS.log(slotId + " - Passback called for "+ chosenFiller.name +", aborting");
chosenFiller.inProcess = false;
};
TS.checkFillerAdRendered4 = function(startTime, max, chosenFiller, slot, iframe, fillerHolder){
var slotElement = document.getElementById(slot.id);
slotElement.style.display = "block";
var slotHeight = slotElement.offsetHeight;
TS.log(slot.id + " " + chosenFiller.name +", slot height is: " + slotHeight);
var newheight = 0;
var newwidth = 0;
if(iframe.contentDocument)
{
newheight = iframe.contentDocument.documentElement.scrollHeight;             newwidth = iframe.contentDocument.documentElement.scrollWidth;
}
else if(iframe.contentWindow && iframe.contentWindow.document)
{
newheight = iframe.contentWindow.document.body.offsetHeight;
newwidth = iframe.contentWindow.document.body.scrollWidth;
}
if(newheight == 0 || newwidth == 0)
{
var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
var iframeContent;
if (iframeDocument)
{
iframeContent = iframeDocument.getElementById('frameBody');
var images = iframeDocument.getElementsByTagName('img');
for(var i = 0; i < images.length; i++)
{
var h = images[i].height;
TS.log("pl_4 - img height: "+h);
if(h > newheight)
{
newheight = h;
}
var cssH = images[i].style.height;
if(cssH !== undefined)
{
cssH = cssH.replace("px", "");
TS.log("pl_4 - img css height: "+cssH);
if(cssH > newheight)
{
newheight = cssH;
}
}
var w = images[i].width;
TS.log("pl_4 - img width: "+w);
if(w > newwidth)
{
newwidth = w;
}
var cssW = images[i].style.width;
if(cssW !== undefined)
{
cssW = cssW.replace("px", "");
TS.log("pl_4 - img css width: "+cssW);
if(cssW > newwidth)
{
newwidth = cssW;
}
}
}
if(newheight == 0)
{
var objects = iframeDocument.getElementsByTagName('object');
for(var i = 0; i < objects.length; i++)
{
var h = objects[i].height;
TS.log("pl_4 - object height: "+h);
if(h > newheight)
{
newheight = h;
}
var w = objects[i].width;
TS.log("pl_4 - object width: "+w);
if(w > newwidth)
{
newwidth = w;
}
}
}
if(newheight == 0)
{
var iframes = iframeDocument.getElementsByTagName('iframe');
for(var i = 0; i < iframes.length; i++)
{
var h = iframes[i].height;
TS.log("pl_4 - iframe height: "+h);
if(h > newheight)
{
newheight = h;
}
var w = iframes[i].width;
TS.log("pl_4 - iframe width: "+w);
if(w > newwidth)
{
newwidth = w;
}
}
}
}
if(newheight == 0)
{
}
}
iframe.height = newheight;
iframe.width = newwidth;
iframe.style.height = (newheight) + "px";
iframe.style.width = (newwidth) + "px";
if(!String.prototype.startsWith){
String.prototype.startsWith = function (str) {
return !this.indexOf(str);
}
}
var isKeyM = chosenFiller.name.startsWith("KeyM");
TS.log("pl_4 - Setting height of slot "+slot.id + " "+ chosenFiller.name +" to "+newheight + ", time left: "+(max/10) + "s");
if(max === 0)
{
TS.log("pl_4 - " + slot.id + " "+ chosenFiller.name + " cancelling");
slot.fillerAd = undefined;
return true;
}
else if (newheight > 50 || ((slotHeight > 50 || (TS.isMobileDevice() && slotHeight > 40)) && !isKeyM))
{
TS.log("pl_4 - something rendered in " + slot.id + " "+chosenFiller.name);
for(var j = 0; j< fillerHolder.fillerAdSlots.length; j++)
{
if(fillerHolder.fillerAdSlots[j].currentSlot == slot.currentSlot)
{
TS.log("pl_4 - splicing slot "+j + " for slot "+slot.id + " "+chosenFiller.name);
fillerHolder.fillerAdSlots.splice(j, 1);
}
}
var stopTime = new Date().getTime();
var renderTime = stopTime - startTime;
var url = "//script.tailsweep.com/siteplacementfillersupplierhit/" +
"2488772" + "?" +
"tsId=" + "2488772" +
"&placementId=4" +
"&slot=" + slot.currentSlot +
"&supplierId=" + chosenFiller.fillerSupplier +
"&partnerPlacementId=" + chosenFiller.sitePlacement +
"&sitePlacementFillerSupplierId=" + chosenFiller.id +
"&ttr="+renderTime;
TS.sendStats(url);
++TS.pl_4.adsRenderedInSpecificSlot[slot.currentSlot];
return true;
}
else
{
}
return false;
};
TS.fillerAdsDisabled4 = function(placementId, fillerAds){
var fillerDisabled = typeof G.tsFillerDisabledSlots_top === "object" &&
G.tsFillerDisabledSlots_top.length &&
TS.contains(G.tsFillerDisabledSlots_top, TS['pl_' + placementId].currentSlot);
return fillerDisabled;
};
TS.processFillerAds4 = function(placementId, fillerAds){
var fillerDisabled = typeof G.tsFillerDisabledSlots_top === "object" && G.tsFillerDisabledSlots_top.length && TS.contains(G.tsFillerDisabledSlots_top, TS['pl_' + placementId].currentSlot);
if(!fillerDisabled && fillerAds.length > 0)
{
TS.fillerCarousel4();
}
else
{
TS.log("pl_4 - Fillers disabled / no fillers");
}
};
TS.renderFillerAd4 = function (currentSlot, fillerAds, placementId) {
if(fillerAds.length > 0) {
var id = "ts-fillers-"+currentSlot+"-"+placementId;
var randomFiller = 0;             var chosenFiller = fillerAds[randomFiller];
TS.log("pl_4 - Rendering filler supplier = " + chosenFiller.fillerSupplier);
TS.renderInContainer(TS.replaceTimestamp(chosenFiller.content), undefined, id);
fillerAds.splice(randomFiller,1);
var url = "//script.tailsweep.com/siteplacementfillersupplierhit/" +
"2488772" + "?" +
"tsId=" + "2488772" +
"&placementId=" + placementId +
"&slot=" + currentSlot +
"&supplierId=" + chosenFiller.fillerSupplier +
"&partnerPlacementId=" + chosenFiller.sitePlacement +
"&sitePlacementFillerSupplierId=" + chosenFiller.id;
TS.sendStats(url);
TS.pl_4.adsRenderedInSlot += 1;
}
};
}(TS = window.TS || {}));
/* Source: TS.InScreen.js.vm */
(function(TS, window){
var TSInScreenTracker = function(elementId, conf) {
var that = this;          conf = conf || {};
that.el = document.getElementById(elementId);
if(!that.el){
TS.log('No element with id=' + elementId + " so skip tracking In-screen." );
return;
}
that.onVisibleImpression = conf.onVisibleImpression || function(){};
that.onBeforeUnload = conf.onBeforeUnload || function(){};
that.isInView;
that.startTime = 0;
that.totalTime = 0;
that.maxTime = 30000;
that.manualTrack = !conf.manualTrack ? false : true;
that.timeForVisImp = conf.timeForVisImp || 1000;         that.fractionLimit = conf.fractionLimit || 0.5;         this.visImpLogged = false;
that.isDebug = TS.isLogDebug();
if(that.isDebug) {
that.insertDebugCSS();
}
that.didScroll = false;
that.touches = [];
TS.addEventListener(window, 'scroll', function(){ that.didScroll = true; });
TS.addEventListener(window, 'touchmove', function(){ that.didScroll = true; });
TS.addEventListener(window, 'touchstart', function(e){
that.touchStartTime = new Date().getTime();
that.touchStartY = that.getScrollTop();
});
TS.addEventListener(window, 'touchend', function(e){
//jQuery("#divDebug").html("");
that.touchEndTime = new Date().getTime();
//TS.log("Time: "+(that.debugEndTime - that.debugStartTime));
var docViewTop = that.getScrollTop();
var docViewBottom = docViewTop + TS.getWinHeight();
that.touchEndY = docViewBottom;
if(that.touchFractionInView())
{
var touchHeight = (that.touchEndY - that.touchStartY);
var time = (that.touchEndTime - that.touchStartTime);
var timePerYCoord = time / touchHeight;
var screenHeight = screen.height;
var t = (time/touchHeight)*screenHeight;
TS.log("Time: "+t);
that.totalTime += t;
if(!that.visImpLogged && that.totalTime >= that.timeForVisImp) {
that.visibleImpression();
}
}
});
TS.addEventListener(window, 'resize', function(){ that.track(); });
TS.addEventListener(window, 'blur', function(){ that.updateTotalTime() });
TS.addEventListener(window, 'load', function(){
that.track();
TS.addEventListener(window, 'beforeunload', function(){
that.updateTotalTime();
that.onBeforeUnload(that.totalTime);
});
});
if(!this.manualTrack){
setInterval(function() {
if ( that.didScroll ) {
that.didScroll = false;
that.track();
}
}, 100);
}
};
TSInScreenTracker.prototype.track = function() {
var wasInView = this.isInView;
this.isInView = this.elIsInView();
if(this.isInView) {
if(this.startTime === 0) {
this.startTime = new Date().getTime();
TS.log("Start timer for  " + this.el.id);
}
}
else {
this.updateTotalTime();
}
if(this.isDebug && wasInView !== this.isInView) {
if(this.isInView) {
TS.log("Element " + this.el.id + " is IN view");
this.el.style.opacity = "1";
TS.addClass(this.el, "tsAdInView");
}
else {
TS.log("Element " + this.el.id + " is NOT IN view");
this.el.style.opacity = "0.4";
TS.removeClass(this.el, "tsAdInView");
}
}
};
TSInScreenTracker.prototype.updateTotalTime = function() {
if(this.startTime > 0) {
var time = new Date().getTime() - this.startTime;
this.startTime = 0;
if(time > this.maxTime) {
time = this.maxTime;
TS.log('maxTime reached');
//TS.removeEventListener(window, 'scroll', ...
}
this.totalTime += time;
if(!this.visImpLogged && this.totalTime >= this.timeForVisImp) {
this.visibleImpression();
}
TS.log("el " + this.el.id + " total time = " + this.totalTime);
}
};
TSInScreenTracker.prototype.visibleImpression = function() {
this.visImpLogged = true;
this.onVisibleImpression.call(this);
if(this.isDebug){
TS.addClass(this.el, "tsVisibleImp");
}
};
TSInScreenTracker.prototype.getObjTop = function(obj) {
var curtop = 0;
if (obj.offsetParent) {
curtop = obj.offsetTop;
while (obj.offsetParent) {
obj = obj.offsetParent;
curtop += obj.offsetTop;
}
}
return curtop;
};
TSInScreenTracker.prototype.getObjLeft = function(obj) {
var curleft = 0;
if (obj.offsetParent) {
curleft = obj.offsetLeft;
while (obj.offsetParent) {
obj = obj.offsetParent;
curleft += obj.offsetLeft;
}
}
return curleft;
};
TSInScreenTracker.prototype.getScrollTop = function() {
if(window.pageYOffset !== undefined){
return window.pageYOffset;
}
var b = document.body; // IE 'quirks'
var d = document.documentElement; // IE with doctype
d = (d.clientHeight) ? d : b;
return d.scrollTop;
};
TSInScreenTracker.prototype.getScrollLeft = function() {
if (window.pageXOffset !== undefined) {
return window.pageXOffset;
}
var b = document.body; // IE 'quirks'
var d = document.documentElement; // IE with doctype
d = (d.clientWidth) ? d : b;
return d.scrollLeft;
};
TSInScreenTracker.prototype.fractionInView = function() {
var elem = this.el;
if (!TS.isElementVisible(elem)) {
return 0;
}
var docViewTop = this.getScrollTop();
var docViewBottom = docViewTop + TS.getWinHeight();
var docViewLeft = this.getScrollLeft();
var docViewRight = docViewLeft + TS.getWinWidth();
var elemWidth = elem.clientWidth;
var elemHeight = elem.clientHeight;
var elemArea = elemWidth * elemHeight;
if (elemArea === 0) {
return 0;
}
var elemTop = null;
if(elem.className.indexOf("sticky") > -1){
elemTop = this.getScrollTop();
}else{
elemTop = this.getObjTop(this.el);
}
var elemBottom = parseInt(elemTop, 10) + elemHeight;
var elemLeft = this.getObjLeft(this.el);
var elemRight = parseInt(elemLeft, 10) + elemWidth;
var verticalAreaInView = Math.max(0, Math.min(docViewRight, elemRight) - Math.max(docViewLeft, elemLeft));
var horizontalAreaInView = Math.max(0, Math.min(docViewBottom, elemBottom) - Math.max(docViewTop, elemTop));
return (horizontalAreaInView * verticalAreaInView) / elemArea;
};
TSInScreenTracker.prototype.touchFractionInView = function() {
var elem = this.el;
if (!TS.isElementVisible(elem)) {
return 0;
}
var docViewTop = this.touchStartY;
var docViewBottom = this.touchEndY;
var docViewLeft = this.getScrollLeft();
var docViewRight = docViewLeft + TS.getWinWidth();
var elemWidth = elem.clientWidth;
var elemHeight = elem.clientHeight;
var elemArea = elemWidth * elemHeight;
if (elemArea === 0) {
return 0;
}
var elemTop = this.getObjTop(this.el);
var elemBottom = parseInt(elemTop, 10) + elemHeight;
var elemLeft = this.getObjLeft(this.el);
var elemRight = parseInt(elemLeft, 10) + elemWidth;
var verticalAreaInView = Math.max(0, Math.min(docViewRight, elemRight) - Math.max(docViewLeft, elemLeft));
var horizontalAreaInView = Math.max(0, Math.min(docViewBottom, elemBottom) - Math.max(docViewTop, elemTop));
return (horizontalAreaInView * verticalAreaInView) / elemArea;
};
TSInScreenTracker.prototype.elIsInView = function() {
return this.fractionInView() > this.fractionLimit;
};
TSInScreenTracker.prototype.insertDebugCSS = function(){
var debugCSS = '.tsAdInView:before{content : "Is in view";color:#fff;font-size:20px; position:absolute;z-index:999999;background-color:orange;opacity:0.7;}';
debugCSS += '.tsAdInView:after{content : "Is in view";margin-top: -24px;color:#fff;font-size:20px;position:absolute;z-index:999999;background-color:orange;opacity:0.7;}';
debugCSS += '.tsVisibleImp:before{content : "Visible imp.";color:#fff;font-size:20px;position:absolute;z-index:999999;background-color:green;opacity:0.7;}';
debugCSS += '.tsVisibleImp:after{content : "Visible imp.";margin-top: -24px;color:#fff;font-size:20px;position:absolute;z-index:999999;background-color:green;opacity:0.7;}';
TS.insertStyleInHead(debugCSS, 'tsDebugInScreen');
};
window.TSInScreenTracker = TSInScreenTracker;
}(TS = window.TS || {}, window));
var fillerCarousel4 = TS.createFillerContainer4();
TS.pl_4.fillerCarousel=fillerCarousel4;
TS.addFillerSlot4(fillerCarousel4);
/*Num Fillers: 2*/
/*Num mobile Fillers: 2 */
/*Num mobile Fillers: 1 */
//[[com.tailsweep.core.model.dto.SitePlacementFillerSupplierDto@65ac2ba5, com.tailsweep.core.model.dto.SitePlacementFillerSupplierDto@a6591c9, com.tailsweep.core.model.dto.SitePlacementFillerSupplierDto@12462874], [com.tailsweep.core.model.dto.SitePlacementFillerSupplierDto@3c09e10b]]
if(!TS.fillerAdsDisabled4()){
var fillerCarousel4 = TS.createFillerContainer4();
TS.pl_4.fillerCarousel=fillerCarousel4;
if( TS.isMobileDevice() ) {
if(fillerCarousel4.mobileFillerAds.length == 0)
{
var tempA = [];
TS.log("pl_4  - Adding mobile fillersupplier id: 23859, name: BT Fusion TS Mobil Top Mat & Dryck, placement: 4, waterfall: 1")
tempA.push({
"id" : 23859,
"sitePlacement" : 5284664,
"fillerSupplier" : 700,
"content" : "<scr"+"ipt> window.frameElement.style.height = \"300px\"; window.frameElement.style.width = \"300px\"; Fuspartnetwork = \"Tailsweep\"; Fusparttsbid = window.top.tsId; Fusparttsdomain = window.location.hostname; Fusparttsbvertical = \"Mat o Dryck\"; Fusadserver = \"fusion.bonniertidskrifter.se\"; Fusmediazone = \"bt.mobile.tailsweep.mat__dryck.ros\"; Fussinglespace = \"tailsweep_mobile_top\"; Fusparameters = \"tsbnetwork=\" + Fuspartnetwork + \"&tsbid=\" + Fusparttsbid + \"&tsbdomain=\" + Fusparttsdomain + \"&tsbvertical=\" + Fusparttsbvertical; <\/script> <scr"+"ipt src=\"http:\/\/fusion.bonniertidskrifter.se\/redirscrpt.js\"><\/script> ",
"currentSlot" : TS.pl_4.currentSlot,
"inProcess":false,
"name":"BT Fusion TS Mobil Top Mat & Dryck",
"waterfallLevel" : 1,
"timeToLive":1,
"slotSpecific" : []
});
TS.log("pl_4  - Adding mobile fillersupplier id: 21173, name: Yieldoptimisers Mobile Top Mat och Dryck, placement: 4, waterfall: 2")
tempA.push({
"id" : 21173,
"sitePlacement" : 5284664,
"fillerSupplier" : 468,
"content" : "<"+"!-- Ad Unit [2105] Tailsweep - RON - Mat och Dryck - Mobile Top 300x250 \/ 320x320 \/ 640x640 -"+"-><div id=\"Yield MT\" style=\"width: 320px; height: 320px; left: 0px; top: 0px;\"><div style=\"position: relative; width: 100%; height: 100%; overflow: hidden;\"> <div id=\"switch_placeholder_a21623f76a7ee52bab8517be0dbcb753\" class=\"switch_placeholder\"><\/div> <scr"+"ipt> (__scads = window.__scads || []).push({\"z\":2105,\"targetId\":\"switch_placeholder_a21623f76a7ee52bab8517be0dbcb753\",\"domain\":\"delivery.yieldoptimisers.net\",\"width\":\"320\",\"height\":\"320\"}); <\/script> <scr"+"ipt async src=\"\/\/delivery.yieldoptimisers.net\/adserver\/sat.js\"><\/script><\/div><\/div> ",
"currentSlot" : TS.pl_4.currentSlot,
"inProcess":false,
"name":"Yieldoptimisers Mobile Top Mat och Dryck",
"waterfallLevel" : 2,
"timeToLive":1,
"slotSpecific" : []
});
fillerCarousel4.mobileFillerAds.push.apply(fillerCarousel4.mobileFillerAds, tempA);
var tempA = [];
TS.log("pl_4  - Adding mobile fillersupplier id: 23858, name: BT Fusion TS Mobil Top Kvinna & Livsstil , placement: 4, waterfall: 3")
tempA.push({
"id" : 23858,
"sitePlacement" : 5284664,
"fillerSupplier" : 696,
"content" : "<scr"+"ipt> Fuspartnetwork = \"Tailsweep\"; Fusparttsbid = window.top.tsId; Fusparttsdomain = window.location.hostname; Fusparttsbvertical = \"Kvinna o Livsstil\"; Fusadserver = \"fusion.bonniertidskrifter.se\"; Fusmediazone = \"bt.mobile.tailsweep.kvinna__livsstil.ros\"; Fussinglespace = \"tailsweep_mobile_top\"; Fusparameters = \"tsbnetwork=\" + Fuspartnetwork + \"&tsbid=\" + Fusparttsbid + \"&tsbdomain=\" + Fusparttsdomain + \"&tsbvertical=\" + Fusparttsbvertical; <\/script> <scr"+"ipt src=\"http:\/\/fusion.bonniertidskrifter.se\/redirscrpt.js\"><\/script> ",
"currentSlot" : TS.pl_4.currentSlot,
"inProcess":false,
"name":"BT Fusion TS Mobil Top Kvinna & Livsstil ",
"waterfallLevel" : 3,
"timeToLive":1,
"slotSpecific" : []
});
fillerCarousel4.mobileFillerAds.push.apply(fillerCarousel4.mobileFillerAds, tempA);
}
}
if (TS.isTablet()) {
if (fillerCarousel4.tabletFillerAds.length == 0)
{
var tempA = [];
TS.log("pl_4  - Adding tablet fillersupplier id: 21175, name: Yieldoptimisers Tablet Panorama Top Mat och Dryck, placement: 4, waterfall: 2")
tempA.push({
"id" : 21175,
"sitePlacement" : 5284664,
"fillerSupplier" : 616,
"content" : "<"+"!-- Ad Unit [2108] Tailsweep - RON - Mat och Dryck - Panorama Top 728x90 \/ 980x120 \/ 980x240 \/ 980x300 \/ 970x90 \/ 970x250 -"+"-><div id=\"Yield PS\" style=\"width: 980px; height: 300px; left: 0px; top: 0px;\"><div style=\"position: relative; width: 100%; height: 100%; overflow: hidden;\"> <div id=\"switch_placeholder_0ff38634cefb7dd1d119994145e16d26\" class=\"switch_placeholder\"><\/div> <scr"+"ipt> (__scads = window.__scads || []).push({\"z\":2108,\"targetId\":\"switch_placeholder_0ff38634cefb7dd1d119994145e16d26\",\"domain\":\"delivery.yieldoptimisers.net\",\"width\":\"980\",\"height\":\"300\"}); <\/script> <scr"+"ipt async src=\"\/\/delivery.yieldoptimisers.net\/adserver\/sat.js\"><\/script><\/div><\/div> ",
"currentSlot" : TS.pl_4.currentSlot,
"inProcess":false,
"name":"Yieldoptimisers Tablet Panorama Top Mat och Dryck",
"waterfallLevel" : 2,
"timeToLive":1,
"slotSpecific" : []
});
fillerCarousel4.tabletFillerAds.push.apply(fillerCarousel4.tabletFillerAds, tempA);
}
}
if (!TS.isMobileDevice() && !TS.isTablet()) {
if(fillerCarousel4.fillerAds.length == 0)
{
var tempA = [];
TS.log("pl_4  - Adding fillersupplier id: 21169, name: Yieldoptimisers Desktop Panorama Top Mat och Dryck, placement: 4, waterfall: 2");
tempA.push({
"id" : 21169,
"sitePlacement" : 5284664,
"fillerSupplier" : 470,
"content" : "<"+"!-- Ad Unit [2108] Tailsweep - RON - Mat och Dryck - Panorama Top 728x90 \/ 980x120 \/ 980x240 \/ 980x300 \/ 970x90 \/ 970x250 -"+"-><div id=\"Yield PS\" style=\"width: 980px; height: 300px; left: 0px; top: 0px;\"><div style=\"position: relative; width: 100%; height: 100%; overflow: hidden;\"> <div id=\"switch_placeholder_0ff38634cefb7dd1d119994145e16d26\" class=\"switch_placeholder\"><\/div> <scr"+"ipt> (__scads = window.__scads || []).push({\"z\":2108,\"targetId\":\"switch_placeholder_0ff38634cefb7dd1d119994145e16d26\",\"domain\":\"delivery.yieldoptimisers.net\",\"width\":\"980\",\"height\":\"300\"}); <\/script> <scr"+"ipt async src=\"\/\/delivery.yieldoptimisers.net\/adserver\/sat.js\"><\/script><\/div><\/div> ",
"currentSlot" : TS.pl_4.currentSlot,
"inProcess":false,
"name":"Yieldoptimisers Desktop Panorama Top Mat och Dryck",
"waterfallLevel" : 2,
"timeToLive":1,
"slotSpecific" : []
});
TS.log("pl_4  - Adding fillersupplier id: 23857, name: BT Fusion TS Desktop Top Mode & Skönhet , placement: 4, waterfall: 2");
tempA.push({
"id" : 23857,
"sitePlacement" : 5284664,
"fillerSupplier" : 701,
"content" : "<scr"+"ipt> Fuspartnetwork = \"Tailsweep\"; Fusparttsbid = window.top.tsId; Fusparttsdomain = window.location.hostname; Fusparttsbvertical = \"Mode o Sk\u00F6nhet\"; Fusadserver = \"fusion.bonniertidskrifter.se\"; Fusmediazone = \"bt.desktop.tailsweep.mode__skonhet.ros\"; Fussinglespace = \"tailsweep_desktop_top\"; Fusparameters = \"tsbnetwork=\" + Fuspartnetwork + \"&tsbid=\" + Fusparttsbid + \"&tsbdomain=\" + Fusparttsdomain + \"&tsbvertical=\" + Fusparttsbvertical; <\/script> <scr"+"ipt src=\"http:\/\/fusion.bonniertidskrifter.se\/redirscrpt.js\"><\/script> ",
"currentSlot" : TS.pl_4.currentSlot,
"inProcess":false,
"name":"BT Fusion TS Desktop Top Mode & Skönhet ",
"waterfallLevel" : 2,
"timeToLive":1,
"slotSpecific" : []
});
TS.log("pl_4  - Adding fillersupplier id: 23855, name: BT Fusion TS Desktop Top Kvinna & Livsstil , placement: 4, waterfall: 3");
tempA.push({
"id" : 23855,
"sitePlacement" : 5284664,
"fillerSupplier" : 695,
"content" : "<scr"+"ipt> Fuspartnetwork = \"Tailsweep\"; Fusparttsbid = window.top.tsId; Fusparttsdomain = window.location.hostname; Fusparttsbvertical = \"Kvinna o Livsstil\"; Fusadserver = \"fusion.bonniertidskrifter.se\"; Fusmediazone = \"bt.desktop.tailsweep.kvinna__livsstil.ros\"; Fussinglespace = \"tailsweep_desktop_top\"; Fusparameters = \"tsbnetwork=\" + Fuspartnetwork + \"&tsbid=\" + Fusparttsbid + \"&tsbdomain=\" + Fusparttsdomain + \"&tsbvertical=\" + Fusparttsbvertical; <\/script> <scr"+"ipt src=\"http:\/\/fusion.bonniertidskrifter.se\/redirscrpt.js\"><\/script> ",
"currentSlot" : TS.pl_4.currentSlot,
"inProcess":false,
"name":"BT Fusion TS Desktop Top Kvinna & Livsstil ",
"waterfallLevel" : 3,
"timeToLive":1,
"slotSpecific" : []
});
fillerCarousel4.fillerAds.push.apply(fillerCarousel4.fillerAds, tempA);
var tempA = [];
TS.log("pl_4  - Adding fillersupplier id: 22862, name: BT Fusion TS Desktop Top Inredning , placement: 4, waterfall: 4");
tempA.push({
"id" : 22862,
"sitePlacement" : 5284664,
"fillerSupplier" : 693,
"content" : "<scr"+"ipt> Fuspartnetwork = \"Tailsweep\"; Fusparttsbid = window.top.tsId; Fusparttsdomain = window.location.hostname; Fusparttsbvertical = \"Hem & Inredning\"; Fusadserver = \"fusion.bonniertidskrifter.se\"; Fusmediazone = \"bt.desktop.tailsweep.hem__inredning.ros\"; Fussinglespace = \"tailsweep_desktop_top\"; Fusparameters = \"tsbnetwork=\" + Fuspartnetwork + \"&tsbid=\" + Fusparttsbid + \"&tsbdomain=\" + Fusparttsdomain + \"&tsbvertical=\" + Fusparttsbvertical; <\/script> <scr"+"ipt src=\"http:\/\/fusion.bonniertidskrifter.se\/redirscrpt.js\"><\/script> ",
"currentSlot" : TS.pl_4.currentSlot,
"inProcess":false,
"name":"BT Fusion TS Desktop Top Inredning ",
"waterfallLevel" : 4,
"timeToLive":1,
"slotSpecific" : []
});
fillerCarousel4.fillerAds.push.apply(fillerCarousel4.fillerAds, tempA);
}
}
}
else{
TS.log("pl_4  - Fillers disabled");
}
/* Source: placementScript.js.vm */
(function(TS){
var i,
slotsProcessed;
if(TS.pl_4.currentSlot >= G.ts_pl_4_idx) {
slotsProcessed = TS.pl_4.currentSlot+1-G.ts_pl_4_idx;          TS.log("pl_4  - maxAds =  "+TS.pl_4.maxAds + ", slotsProcessed = " + slotsProcessed);
if(TS.isDebug() || true) {
TS.greyout = true;
if(TS.pl_4.currentSlot < TS.pl_4.maxAds+G.ts_pl_4_idx){
TS.greyout = false;
}
if(TS.isDebug()) {
TS.renderDebugAd(980, 300, 'Tailsweep Debug<br />top', TS.greyout);
}
else {
TS.log("pl_4  - starting");
if(TS.isMobileDevice()) {
TS.processPrioLevel(4, 0, slotsProcessed);
}
TS.log("pl_4  - no ads");
if(!TS.fillerAdsDisabled4()){
if( TS.isMobileDevice() ) {
if(fillerCarousel4.mobileFillerAds.length > 0)
{
TS.fillerCarousel4(fillerCarousel4);
}
}
else if (TS.isTablet()) {
if (fillerCarousel4.tabletFillerAds.length > 0)
{
TS.fillerCarousel4(fillerCarousel4);
}
}
else if (!TS.isMobileDevice() && !TS.isTablet()) {
if(fillerCarousel4.fillerAds.length > 0)
{
TS.fillerCarousel4(fillerCarousel4);
}
}
}
}
document.write('<div class="ts-div">'+"<a class='tailsweep-buylink' href='http://www.tailsweep.se/#annonsor'>ANNONSERA H&Auml;R</a>"+'</div>');
}
if ("top" !== "17" || !TS.isMobileDevice()) {
var num = Math.floor((Math.random() * 100) + 1);
if(num < 95) {
TS.log("top" + " - Sending stats "+num);
TS.placementHit(4, TS.pl_4.currentSlot);
}
else {
TS.log("top" + " - Not sending stats "+num);
}
}
var placementSlot = {};
placementSlot.elementId = 'pl_' + 4 + '_' + TS.pl_4.currentSlot + '_inscreen';
placementSlot.placement = 4;
placementSlot.slot = TS.pl_4.currentSlot;
document.write('<div class="ts-placement-in-screen" id="' + placementSlot.elementId + '" style="width:1px; height:1px;background-color:transparent;"></div>');
TS.domReady(window, function(){
var tracker = new TSInScreenTracker(placementSlot.elementId, {
onVisibleImpression : function(){ TS.logVisiblePlacementImp(placementSlot) }
});
});
}
}(TS = window.TS || {}));
