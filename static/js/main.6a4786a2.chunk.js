(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(37)},28:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),l=a(5),i=a(6),s=(a(28),a(14)),u=a(7),h=a(8),m=a(10),p=a(9),f=a(11),b=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault();var t=a.searchItem.value;a.props.search(t);var n="/search/".concat(t);a.searchItem.value="",a.props.history.push(n)},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"search-form",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"search",name:"search",placeholder:"Search",ref:function(t){return e.searchItem=t},required:!0}),r.a.createElement("button",{type:"submit",className:"search-button"},r.a.createElement("svg",{fill:"#fff",height:"24",viewBox:"0 0 23 23",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))))}}]),t}(n.Component),d=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).getSearchText=function(){var e="A Flickr Photo Gallery of ",t=a.props.location.pathname;switch(t){case"/button1":e+=a.props.buttonText[0];break;case"/button2":e+=a.props.buttonText[1];break;case"/button3":e+=a.props.buttonText[2];break;default:t.indexOf("/search/")>-1?e+=t.replace("/search/",""):e=""}return e},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return this.getSearchText(),r.a.createElement("div",{className:"header"},r.a.createElement("h2",null,this.getSearchText()),r.a.createElement(i.b,{render:function(t){return r.a.createElement(b,Object.assign({},t,{search:e.props.search}))}}))}}]),t}(n.Component),E=function(e){return r.a.createElement("nav",{className:"main-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{exact:!0,to:"/button1"},e.buttonText[0])),r.a.createElement("li",null,r.a.createElement(l.b,{exact:!0,to:"/button2"},e.buttonText[1])),r.a.createElement("li",null,r.a.createElement(l.b,{exact:!0,to:"/button3"},e.buttonText[2]))))},v=function(){return r.a.createElement("div",{className:"main-content not-found"},r.a.createElement("i",{className:"material-icons icn-error"},"error_outline"),r.a.createElement("h1",null,"404 Error - Page Not Found"),r.a.createElement("p",null,"Please click a button above or enter a search term to view a ",r.a.createElement("b",null,"Flickr Photo Gallery"),"."))},g=function(e){return r.a.createElement("li",null,r.a.createElement("img",{src:e.url,alt:""}))},y=function(e){return r.a.createElement("div",{className:"loading-photos"},r.a.createElement("h3",null,"Please be Patient"),r.a.createElement("p",null,"Photos are loading..."),r.a.createElement("div",{className:"loader"}))},S=function(e){return r.a.createElement("li",{className:"not-found"},r.a.createElement("h3",null,"No Results Found"),r.a.createElement("p",null,"You search did not return any results. Please try again."))},j=function(e){var t,a=e.gallery;return t=e.loading?r.a.createElement(y,null):a.length>0?a.map(function(e){return r.a.createElement(g,{key:e.id,url:e.url})}):r.a.createElement(S,null),r.a.createElement("div",{className:"photo-container"},r.a.createElement("ul",null,t))},k="db4c79895c24276b611a6f9ae4520c59",w=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={button1:[],button2:[],button3:[],search:[],loading:!0},a.initialSearchTerms=["Sunsets","Perfume Bottles","Lion Cubs"],a.initialSearch=function(){var e,t=[];a.setState({loading:!0}),e=a.initialSearchTerms.map(function(e){return encodeURIComponent(e)});for(var n=0;n<e.length;n++)t[n]=fetch("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(k,"&tags=").concat(e[n],"&per_page=24&format=json&nojsoncallback=1")).then(function(e){return e.json()});Promise.all([t[0],t[1],t[2]]).then(function(t){for(var n=0;n<e.length;n++)a.handlePhotoResponse("button"+(n+1),t[n])}).catch(function(e){console.log("There was an error retrieving data from Flickr:",e)})},a.searchFormSearch=function(e){a.setState({loading:!0}),fetch("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(k,"&tags=").concat(encodeURIComponent(e),"&per_page=24&format=json&nojsoncallback=1")).then(function(e){return e.json()}).then(function(e){a.handlePhotoResponse("search",e)}).catch(function(e){console.log("There was an error retrieving data from Flickr:",e)})},a.performSearch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"initial setup";"initial setup"===e?a.initialSearch():(a.searchFormSearch(e),a.state.button1.length<1&&a.initialSearch())},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"handlePhotoResponse",value:function(e,t){var a,n=t.photos.photo.map(function(e){return{id:e.id,url:"https://farm".concat(e.farm,".staticflickr.com/").concat(e.server,"/").concat(e.id,"_").concat(e.secret,"_m.jpg")}});this.setState((a={},Object(s.a)(a,e,n),Object(s.a)(a,"loading",!1),a))}},{key:"componentDidMount",value:function(){var e=this.props.location.pathname,t=e.indexOf("/search/")>-1?e.replace("/search/",""):"initial setup";this.performSearch(t)}},{key:"componentDidUpdate",value:function(e){var t=e.location.pathname,a=this.props.location.pathname;if(a.indexOf("/search/")>-1&&a!==t){var n=a.replace("/search/","");this.performSearch(n)}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement(i.b,{render:function(t){return r.a.createElement(d,Object.assign({},t,{buttonText:e.initialSearchTerms,search:e.performSearch}))}}),r.a.createElement(i.b,{render:function(){return r.a.createElement(E,{buttonText:e.initialSearchTerms})}}),r.a.createElement(i.b,{exact:!0,path:"/",render:function(){return r.a.createElement(i.a,{to:"/button1"})}}),r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/button1",render:function(){return r.a.createElement(j,{gallery:e.state.button1,loading:e.state.loading})}}),r.a.createElement(i.b,{path:"/button2",render:function(){return r.a.createElement(j,{gallery:e.state.button2,loading:e.state.loading})}}),r.a.createElement(i.b,{path:"/button3",render:function(){return r.a.createElement(j,{gallery:e.state.button3,loading:e.state.loading})}}),r.a.createElement(i.b,{path:"/search/:searchTerm",render:function(){return r.a.createElement(j,{gallery:e.state.search,loading:e.state.loading})}}),r.a.createElement(i.b,{component:v})))}}]),t}(r.a.Component),O=function(e){return r.a.createElement("footer",null,r.a.createElement("div",null,"\xa9 Louise Iyengar - Treehouse FSJS - Learning React"))};o.a.render(r.a.createElement(l.a,null,r.a.createElement(i.b,{path:"/",render:function(e){return r.a.createElement(w,e)}}),r.a.createElement(i.b,{component:O})),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.6a4786a2.chunk.js.map