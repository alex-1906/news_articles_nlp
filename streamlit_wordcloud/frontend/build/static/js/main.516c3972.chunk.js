(this.webpackJsonpstreamlit_component_template=this.webpackJsonpstreamlit_component_template||[]).push([[0],{35:function(t,e,n){t.exports=n(54)},50:function(t,e){},54:function(t,e,n){"use strict";n.r(e);var o=n(4),r=n.n(o),a=n(21),i=n.n(a),l=n(3),s=n(15),c=n(28),d=(n(51),n(52),n(53),{width:"100%",height:"100%",fontScale:1,fontMin:8,fontMax:72,padding:1,enableTooltip:!0,spiral:"rectangular",scale:"linear",tooltipOptions:{allowHTML:!0,placement:"left",arrow:!0,theme:"light",hideOnClick:!0},colors:{viridis:["#fde725","#b5de2b","#6ece58","#35b779","#1f9e89","#26828e","#31688e","#3e4989","#482878","#440154"]}}),p=Object(s.b)((function(t){var e=Object(o.useState)({clicked:null,hovered:null}),n=Object(l.a)(e,2),a=n[0],i=n[1],p=t.args.width||d.width,u=t.args.height||d.height,f=t.args.fontScale||d.fontScale,g=parseInt(t.args.fontMin),h=parseInt(t.args.fontMax),b=parseInt(t.args.padding)||d.padding,m=t.args.layout||d.spiral,v=t.args.scaling||d.scale,O=void 0===t.args.enableTooltip?d.enableTooltip:t.args.enableTooltip,w=t.args.tooltipOptions||d.tooltipOptions,M=t.args.tooltipDataFields,k=t.args.words||[],E=t.args.maxWords||k.length,W=t.args.paletteColors||d.colors.viridis,T=t.args.perWordColoring,x={colors:W,fontFamily:"roboto",fontSizes:g&&h?[g,h]:[parseInt(d.fontMin*f),parseInt(d.fontMax*f)],padding:b,rotations:3,rotationAngles:[-90,90],spiral:m,scale:v,transitionDuration:500,deterministic:!0,enableOptimizations:!0,enableTooltip:O,tooltipOptions:w},C=function(t){i((function(e){return{clicked:e.clicked,hovered:t}}))},I={getWordColor:T?function(t){return t.color}:void 0,onWordClick:function(t){return function(t){i((function(e){return{clicked:t,hovered:e.hovered}}))}(t)},onWordMouseOver:function(t){return C(t)},onWordMouseOut:function(t){return C(null)},getWordTooltip:function(t){return function(t){var e="";for(var n in M)e+="<span><b>".concat(M[n],"</b>: ").concat(t[n],"</span></br>");return e}(t)}};return Object(o.useEffect)((function(){s.a.setComponentValue(a)}),[a]),Object(o.useEffect)((function(){s.a.setFrameHeight()})),r.a.createElement("div",null,r.a.createElement("div",{style:{width:p,height:u}},r.a.createElement(c.a,{words:k,options:x,maxWords:E,callbacks:I})))}));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.516c3972.chunk.js.map