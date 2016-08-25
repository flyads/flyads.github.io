// ==UserScript==
// @name           FlyAds
// @namespace      http://indir.gratis/
// @description    Bu eklenti sayesinde Link.tl, Bc.vc, Adf.Ly, Ouo.io linklerini kolayca geçebilirsiniz. - İndir Gratis tarafından hazırlanmıştır. 
// @copyright      İndir Gratis (http://indir.gratis/)
// @author         İndir Gratis - Atahan
// @version        1.0
// @include        http*://adf.ly/*
// @include        http*://link.tl/*
// @include        http*://bc.vc/*
// @include        http*://ouo.io/go/*
// @include        http*://ouo.press/go/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// @grant          GM_addStyle
// ==/UserScript==

/*
- İndir.Gratis FlyAds - http://indir.gratis/url
- Adf.Ly Link.tl Bc.Vc ve Ouo.io linklerini Otomatik Geçebilirsiniz.
- Bu script indir.gratis tarafından hazırlanmış olup tüm hakları saklıdır 2016.
*/


var path = window.location.href; {
if(window.location.hostname  == "adf.ly")
location.href = "http://indir.gratis/eklenti/url2.php?url=" + path ;
}


var path = window.location.href; {
if(window.location.hostname  == "link.tl")
location.href = "http://indir.gratis/eklenti/url.php?kod=" + path ;
}

var path = window.location.href; {
if(window.location.hostname  == "bc.vc")
location.href = "http://indir.gratis/eklenti/url3.php?kod=" + path ;
}


{
if(window.location.hostname  == "ouo.io")
$(function(){
    document.getElementsByClassName("btn btn-main")[0].click();
});
    } 

{
if(window.location.hostname  == "ouo.press")
$(function(){
    document.getElementsByClassName("btn btn-main")[0].click();
});
    } 