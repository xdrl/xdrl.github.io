(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),c=a.n(r),u=(a(84),a(48)),o=a(37),m=a(13),s=(a(85),a(145)),i=a(55),b=a(143),d=a(144),E=a(140),v=a(141),f=a(104),p=a(142);var g=function(){var e=Object(n.useState)(["a"]),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(),g=Object(m.a)(c,2),j=g[0],O=g[1],N=Object(n.useState)([]),h=Object(m.a)(N,2),k=h[0],S=h[1],w=Object(n.useState)(["",29]),y=Object(m.a)(w,2),M=y[0],C=y[1],A=Object(n.useState)(1),B=Object(m.a)(A,2),x=B[0],D=B[1],I=Object(n.useState)(!0),J=Object(m.a)(I,2),K=J[0],P=J[1],W=Object(n.useState)(!1),F=Object(m.a)(W,2),L=F[0],V=F[1],$=Object(n.useState)(!1),q=Object(m.a)($,2),z=q[0],G=q[1],H=Object(n.useState)(),Q=Object(m.a)(H,2),R=Q[0],T=Q[1],U=Object(n.useState)({avdrag:0,lon:0}),X=Object(m.a)(U,2),Y=X[0],Z=X[1];Object(n.useEffect)((function(){Object(i.a)("/skattesatser-2020.csv",{complete:function(e){r(e.data);var t=Object(o.a)(e.data);console.log(t);var a=[],n=[];t.map((function(e){-1===a.indexOf(e[2])&&(a.push(e[2]),n.push([e[2],e[5]]))})),n=n.sort(),console.log(n),O(n)}}),Object(i.a)("/allmanna-tabeller-manad-2020.csv",{complete:function(e){S(e.data)}})}),[]);var _=function(e){var t=Object(o.a)(M);T(e.target.value),t[1]=e.target.value.substring(0,2),C(t),te(Y.lon,L?4:5,e.target.value.substring(0,2))},ee=function(e){G(!0);var t=Number(e.target.value.substring(0,2));D(e.target.value),k.map((function(e){Number(e[1])===Number(t)&&Number(Y.lon)>=Number(e[2])&&Number(Y.lon)<=Number(e[3])&&(C(e),Z(Object(u.a)(Object(u.a)({},Y),{},{avdrag:Number(e[4])})),console.log(e))}))},te=function(e,t,a){isNaN(e)&&(e=Number(e.replace(/\D/g,""))),P(!1);var n=Object(u.a)({},Y);n.lon=e,Z(n),k.map((function(l){Number(l[1])===Number(a||M[1])&&e>=Number(l[2])&&e<=Number(l[3])&&(C(l),n.avdrag=Number(l[t]),Z(n))}))},ae=function(){return l.a.createElement(b.a,{className:"selects",native:!0,value:x,onChange:ee},j.map((function(e){return l.a.createElement("option",{name:e[0],value:String(Math.round(e[1]))+e[0]},e[0])})))},ne=function(){console.log(x.substring(2));var e=a.filter((function(e){return e[2]===x.substring(2)}));return e=e.sort((function(e,t){return e>t})),l.a.createElement(b.a,{className:"selects",native:!0,onChange:_,value:R},l.a.createElement("option",{value:"33none"},"V\xe4lj f\xf6rsamling"),e.map((function(e){return l.a.createElement("option",{name:e[3],value:String(Math.round(e[4]))+e[3]},e[3])})))};return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(v.a,{in:!0,timeout:1e3},l.a.createElement(E.a,{className:"App-Paper"},l.a.createElement(f.a,{variant:"h4"},"L\xf6nekalkylator"),l.a.createElement(f.a,{variant:"subtitle1"},"Fyll i din nuvarande m\xe5nadsl\xf6n f\xf6r att se din uppskattade nettol\xf6n f\xf6r 2020"),l.a.createElement(s.a,{autoComplete:"off",className:"selects",id:"standard-basic",InputProps:{endAdornment:l.a.createElement(p.a,{position:"end"},"Kr")},onChange:function(e){return te(e.target.value,4)},label:"M\xe5nadsl\xf6n"}),K?"":l.a.createElement(v.a,{in:!0,timeout:2e3},l.a.createElement("div",null,l.a.createElement(ae,null),l.a.createElement("br",null),l.a.createElement(v.a,{in:z,timeout:1e3},l.a.createElement("div",null,l.a.createElement("p",{className:"lesser"},l.a.createElement(d.a,{checked:L,onChange:function(){V(!L)},name:"checkedB",color:"primary",label:"Medlem i svenska kyrkan?"})," Medlem i Svenska kyrkan?"))))),L?l.a.createElement(v.a,{in:!0,timeout:1e3},l.a.createElement("div",null,l.a.createElement(ne,null))):"",l.a.createElement(v.a,{in:z,timeout:1e3},l.a.createElement("div",{className:"containsData"},l.a.createElement("br",null),l.a.createElement("table",{className:"lesser2"},l.a.createElement("tbody",null),l.a.createElement("tr",null,l.a.createElement("td",null,"Nettol\xf6n"),l.a.createElement("td",null,Y.lon," kr")),l.a.createElement("tr",null,l.a.createElement("td",null,"Skatt"),l.a.createElement("td",null,"-",Y.avdrag," kr")),l.a.createElement("tr",null,l.a.createElement("td",null,"Skattetabell"),l.a.createElement("td",null,M[1])),l.a.createElement("tr",null,l.a.createElement("td",null,"Kvar efter skatt"),l.a.createElement("td",null,l.a.createElement("b",null,Y.lon-Y.avdrag," kr"))))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,t,a){e.exports=a(103)},84:function(e,t,a){},85:function(e,t,a){},88:function(e,t){},90:function(e,t){}},[[79,1,2]]]);
//# sourceMappingURL=main.59347729.chunk.js.map