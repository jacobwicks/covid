(this.webpackJsonpcovid4=this.webpackJsonpcovid4||[]).push([[0],{24:function(e,t,n){t.seattleEviction=n(40),t.rentAssistance=n(41)},29:function(e,t,n){e.exports=n(99)},34:function(e,t,n){},35:function(e,t,n){},40:function(e,t,n){e.exports=n.p+"static/media/seattleEviction.6cccb1bf.md"},41:function(e,t,n){e.exports=n.p+"static/media/rentAssistance.e8081dfb.md"},99:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),c=n.n(o),i=(n(34),n(2)),l=(n(35),n(3)),u=n(18),s=n(19),d=n(28),m=n(27),f=n(20),h=n.n(f),p=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleScriptLoad=function(){a.autocomplete=new google.maps.places.Autocomplete(document.getElementById("autocomplete"),{componentRestrictions:{country:"us"}}),a.autocomplete.setFields(["address_components","formatted_address"]),a.autocomplete.addListener("place_changed",a.handlePlaceSelect)},a.handlePlaceSelect=function(){var e,t,n=a.autocomplete.getPlace(),r=n.address_components,o=null===(e=r.find((function(e){var t;return null===e||void 0===e||null===(t=e.types)||void 0===t?void 0:t.includes("administrative_area_level_2")})))||void 0===e?void 0:e.long_name;console.log(r);var c=null===(t=r.find((function(e){var t;return null===e||void 0===e||null===(t=e.types)||void 0===t?void 0:t.includes("locality")})))||void 0===t?void 0:t.long_name;r&&(a.setState({city:c,county:o,query:n.formatted_address}),a.props.setCityJurisdiction(c),a.props.setCountyJurisdiction(o))},a.state={city:"",county:"",query:""},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("span",null,r.a.createElement(h.a,{url:"https://maps.googleapis.com/maps/api/js?key=AIzaSyDSBzpWCoKDndCryxQTsNcpZMfMVEGO4bA&libraries=places",onLoad:this.handleScriptLoad}),r.a.createElement("input",{id:"autocomplete",placeholder:"",hintText:"Search City",value:this.state.query,onChange:function(t){var n,a,r,o=t.target,c=o.value;!(null===(n=c)||void 0===n||null===(a=n.slice(-3))||void 0===a||null===(r=a.toLowerCase())||void 0===r?void 0:r.includes("wa"))&&(c+=" wa"),e.setState(Object(l.a)(Object(l.a)({},e.state),{},{query:o.value}))},style:{margin:"0 auto",maxWidth:800,marginLeft:10,width:500}}))}}]),n}(a.Component),y=n(7),v=n.n(y),b=n(21),g=n(22),E=function(e,t){switch(t.type){case"setCurrentFile":var n=t.currentFile;return console.log("setting current file",n),Object(l.a)(Object(l.a)({},e),{},{currentFile:n});default:return e}},C={currentFile:void 0},j=Object(a.createContext)(C),x=function(e){var t=e.children,n=e.testState,o=Object(a.useReducer)(E,n||C),c=Object(i.a)(o,2),u=c[0],s=c[1],d=Object(l.a)(Object(l.a)({},u),{},{dispatch:s});return r.a.createElement(j.Provider,{value:d},t)},w=n(24),O=n.n(w),S=function(){var e=Object(a.useContext)(j).currentFile,t=Object(a.useState)(""),n=Object(i.a)(t,2),o=n[0],c=n[1],l=Object(a.useCallback)(function(){var e=Object(b.a)(v.a.mark((function e(t){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O.a[t]);case 2:return n=e.sent,e.next=5,n.text();case 5:a=e.sent,c(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(a.useEffect)((function(){e&&l(e)}),[e,l]),o&&r.a.createElement("div",{style:{border:"thick solid",borderRadius:20,marginLeft:200,width:800}},r.a.createElement(g.a,null,o),";")},k=[{city:"Seattle",content:"Seattle has prohibited evictions during covid19.",fileName:"seattleEviction",title:"Helpful information about Seattle laws"},{county:"King County",content:"King County has rent assistance programs. Call 206-283-1212 for more information",fileName:"rentAssistance",title:"Information about KC Rent Assistance"},{county:"Island County",content:"The island county sherriff will not enforce eviction orders unless there is an immediate threat to the health and safety of other tenants",title:"Sherriff practice"},{county:"Pierce",content:"Pierce county has a housing justice project. Help is available on a walk-in basis.",title:"Pierce HJP"}],L=function(e){var t=e.results,n=Object(a.useContext)(j).dispatch;return r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement("div",{key:t,style:{border:"thin solid"}},r.a.createElement("h1",{onClick:function(){return n({type:"setCurrentFile",currentFile:e.fileName})},style:{cursor:"pointer"}},e.title),e.content)})))},A=function(e){var t=e.city,n=e.county,a=function(e){var t=e.city,n=e.county;return{cityResults:k.filter((function(e){return e.city&&e.city===t})),countyResults:k.filter((function(e){return e.county&&e.county===n}))}}({city:t,county:n}),o=a.cityResults,c=a.countyResults;return r.a.createElement("div",{style:{border:"thick solid",marginLeft:200,width:800}},r.a.createElement("div",null,o.length?r.a.createElement(L,{results:o}):r.a.createElement("div",null,"No results found for city ",t)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,c.length?r.a.createElement(L,{results:c}):r.a.createElement("div",null,"No results found for county ",n)))},R=n(25),_=n.n(R),P=n(26),F=n.n(P),J=(n(98),new _.a),I=function(e){var t=e.backToSearch;return a.createElement("div",{style:{maxWidth:1e3,marginLeft:200}},"Got information to add? Use this markdown editor to write your contribution.",a.createElement("br",null),a.createElement("button",{onClick:function(){return t()},style:{backgroundColor:"green",border:"none",borderRadius:10,color:"white",padding:"15px 32px",textAlign:"center",textDecoration:"none",fontSize:16,margin:"4px 2px",cursor:"pointer"}},"Back to Search Page"),a.createElement(F.a,{value:"Your text goes here",style:{height:"500px"},renderHTML:function(e){return J.render(e)},onChange:function(e){var t=e.html,n=e.text;console.log("handleEditorChange",t,n)}}))},N=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),l=Object(i.a)(c,2),u=l[0],s=l[1],d=Object(a.useState)(""),m=Object(i.a)(d,2),f=m[0],h=m[1];return r.a.createElement(x,null,r.a.createElement("div",null,r.a.createElement("h1",{style:{marginLeft:100}},"Washington Legal Info Search"),"contribute"===f?r.a.createElement(I,{backToSearch:function(){return h("")}}):r.a.createElement("div",null,r.a.createElement("p",{style:{marginLeft:200}},"Do you have valuable information that people need to know? ",r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return h("contribute")},style:{backgroundColor:"green",border:"none",borderRadius:10,color:"white",padding:"15px 32px",textAlign:"center",textDecoration:"none",fontSize:16,margin:"4px 2px",cursor:"pointer"}},"Add your info!")),r.a.createElement("div",{style:{marginLeft:200}},r.a.createElement("h2",null,"Your address:",r.a.createElement(p,{setCityJurisdiction:o,setCountyJurisdiction:s}))),r.a.createElement("div",{style:{marginLeft:200}},r.a.createElement("h1",null,"Jurisdiction"),r.a.createElement("h2",null,"City: ",n),r.a.createElement("h2",null,"County: ",u)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(A,{city:n,county:u}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(S,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.9e982260.chunk.js.map