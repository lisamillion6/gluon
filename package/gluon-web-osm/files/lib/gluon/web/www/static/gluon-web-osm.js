"use strict";function initOSM(o,r){var e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href=o.openlayers_url+"/css/ol.css",document.head.appendChild(e);var t=document.createElement("script"),l=!1;t.onload=t.onreadystatechange=function(){if(!(l||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState)){l=!0;var t=new Image;t.onload=function(){var i,e=new ol.style.Style({image:new ol.style.Icon({img:t,imgSize:[30,45],anchor:[.5,1]})}),s=new ol.Feature;s.setStyle(e),i=o.tile_layer&&"XYZ"===o.tile_layer.type?new ol.source.XYZ({url:o.tile_layer.url,attributions:o.tile_layer.attributions}):new ol.source.OSM,r(function(e,t,o,r,l){function n(e){s.setGeometry(new ol.geom.Point(e))}var a=new ol.Map({target:e,layers:[new ol.layer.Tile({source:i}),new ol.layer.Vector({source:new ol.source.Vector({features:[s]})})],view:new ol.View({center:ol.proj.fromLonLat(t),zoom:o})});return a.addEventListener("click",function(e){n(e.coordinate),l(ol.proj.toLonLat(e.coordinate))}),r&&n(ol.proj.fromLonLat(t)),a})},t.src="data:image/svg+xml,"+escape('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="30" height="45"><path d="M2,15A13,13,0,0,1,28,13Q28,28,15,45Q2,28,2,15" fill="#48b" stroke="#369" stroke-width="1.5" /><circle cx="15" cy="15" r="6" fill="#fff" /></svg>')}},t.src=o.openlayers_url+"/build/ol.js",document.head.appendChild(t)}