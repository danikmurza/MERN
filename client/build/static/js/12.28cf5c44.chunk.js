(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{223:function(e,a,t){e.exports=t.p+"static/media/avatar.e3b65c58.jpg"},272:function(e,a,t){"use strict";t.r(a);var l=t(16),s=t.n(l),n=t(27),r=t(17),c=t(18),m=t(20),i=t(19),o=t(21),d=t(0),u=t.n(d),p=t(223),b=t.n(p),E=t(5),N=t(15),g=t(48),v=function(e){function a(){var e,t;Object(r.a)(this,a);for(var l=arguments.length,c=new Array(l),o=0;o<l;o++)c[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(c)))).state={show:"",userId:JSON.parse(localStorage.getItem("user")),address:JSON.parse(localStorage.getItem("user")).user.address,firstName:"",lastName:"",company:"",city:"",line1:"",line2:"",postalCode:"",primary:!1,error:"",edit:"",wishlist:JSON.parse(localStorage.getItem("wishlist"))},t.closedModal=function(){t.setState({show:"none"})},t.addNewAddress=function(){var e=Object(n.a)(s.a.mark(function e(a){var l,n,r,c,m,i,o,d,u,p,b;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),l=t.state,n=l.firstName,r=l.lastName,c=l.company,m=l.country,i=l.city,o=l.postalCode,d=l.line1,u=l.line2,p=l.userId,t.url="address",b={_id:p.userId,url:t.url,address:{firstName:n,lastName:r,company:c,country:m,city:i,line1:d,line2:u,postalCode:o},action:"addAddress"},e.next=6,t.props.dispatch(N.h.myAccount(b,"update"));case 6:t.closedModal();case 7:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),t.removeAddress=function(e){e.preventDefault();var a=e.currentTarget.value,l={_id:t.state.userId.userId,url:"address",address:{_id:a},action:"deleteAddress"};t.props.dispatch(N.h.myAccount(l,"update"))},t.handleInputChange=function(e){var a=e.target,l="checkbox"===a.type?a.checked:a.value,s=a.name;t.setState(function(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}({},s,l))},t.editAddress=function(e){var a=t.state.address.filter(function(a){return a._id===e.currentTarget.value});t.setState({show:"block",edit:a}),t.setState({edit:""})},t}return Object(o.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.show,l=a.firstName,s=a.lastName,n=a.company,r=a.edit,c=a.userId,m=a.wishlist,i=a.country,o=a.city,d=a.postalCode,p=a.line1,g=a.line2,v=a.address;return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"page-title-overlap bg-dark pt-4"},u.a.createElement("div",{className:"container d-lg-flex justify-content-between py-2 py-lg-3"},u.a.createElement("div",{className:"order-lg-2 mb-3 mb-lg-0 pt-lg-2"},u.a.createElement("nav",{"aria-label":"breadcrumb"},u.a.createElement("ol",{className:"breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start"},u.a.createElement("li",{className:"breadcrumb-item"},u.a.createElement(E.b,{className:"text-nowrap",to:"/"},u.a.createElement("i",{className:"czi-home"}),"Home")),u.a.createElement("li",{className:"breadcrumb-item text-nowrap"},u.a.createElement(E.b,{to:"/account_address"},"Account")),u.a.createElement("li",{className:"breadcrumb-item text-nowrap active","aria-current":"page"},"Addresses")))),u.a.createElement("div",{className:"order-lg-1 pr-lg-4 text-center text-lg-left"},u.a.createElement("h1",{className:"h3 text-light mb-0"},"My addresses")))),u.a.createElement("div",{className:"container pb-5 mb-2 mb-md-3"},u.a.createElement("div",{className:"row"},u.a.createElement("aside",{className:"col-lg-4 pt-4 pt-lg-0"},u.a.createElement("div",{className:"cz-sidebar-static rounded-lg box-shadow-lg px-0 pb-0 mb-5 mb-lg-0"},u.a.createElement("div",{className:"px-4 mb-4"},u.a.createElement("div",{className:"media align-items-center"},u.a.createElement("div",{className:"img-thumbnail rounded-circle position-relative",style:{width:"6.375rem"}},u.a.createElement("span",{className:"badge badge-warning","data-toggle":"tooltip",title:"Reward points"},"384"),u.a.createElement("img",{className:"rounded-circle",src:b.a,alt:"Susan Gardner"})),u.a.createElement("div",{className:"media-body pl-3"},u.a.createElement("h3",{className:"font-size-base mb-0"},c.user.firstName+"  "+c.user.lastName),u.a.createElement("span",{className:"text-accent font-size-sm"},c.user.email)))),u.a.createElement("div",{className:"bg-secondary px-4 py-3"},u.a.createElement("h3",{className:"font-size-sm mb-0 text-muted"},"Dashboard")),u.a.createElement("ul",{className:"list-unstyled mb-0"},u.a.createElement("li",{className:"border-bottom mb-0"},u.a.createElement(E.b,{className:"nav-link-style d-flex align-items-center px-4 py-3",to:"/account_orders"},u.a.createElement("i",{className:"czi-bag opacity-60 mr-2"}),"Orders",u.a.createElement("span",{className:"font-size-sm text-muted ml-auto"},c.user.orders.length>0?c.user.orders.length:0))),u.a.createElement("li",{className:"border-bottom mb-0"},u.a.createElement(E.b,{className:"nav-link-style d-flex align-items-center px-4 py-3",to:"/account_wishlist"},u.a.createElement("i",{className:"czi-heart opacity-60 mr-2"}),"Wishlist",u.a.createElement("span",{className:"font-size-sm text-muted ml-auto"},m?m.length:0))),u.a.createElement("li",{className:"mb-0"},u.a.createElement(E.b,{className:"nav-link-style d-flex align-items-center px-4 py-3",to:"/account_tickets"},u.a.createElement("i",{className:"czi-help opacity-60 mr-2"}),"Support tickets",u.a.createElement("span",{className:"font-size-sm text-muted ml-auto"},c.user.ticket.length>0?c.user.ticket.length:0)))),u.a.createElement("div",{className:"bg-secondary px-4 py-3"},u.a.createElement("h3",{className:"font-size-sm mb-0 text-muted"},"Account settings")),u.a.createElement("ul",{className:"list-unstyled mb-0"},u.a.createElement("li",{className:"border-bottom mb-0"},u.a.createElement(E.b,{className:"nav-link-style d-flex align-items-center px-4 py-3",to:"/account_profile"},u.a.createElement("i",{className:"czi-user opacity-60 mr-2"}),"Profile info")),u.a.createElement("li",{className:"border-bottom mb-0"},u.a.createElement(E.b,{className:"nav-link-style d-flex align-items-center px-4 py-3 active",to:"/account_address"},u.a.createElement("i",{className:"czi-location opacity-60 mr-2"}),"Addresses")),u.a.createElement("li",{className:"mb-0"},u.a.createElement(E.b,{className:"nav-link-style d-flex align-items-center px-4 py-3",to:"/account_payment"},u.a.createElement("i",{className:"czi-card opacity-60 mr-2"}),"Payment methods")),u.a.createElement("li",{className:"d-lg-none border-top mb-0"},u.a.createElement("a",{className:"nav-link-style d-flex align-items-center px-4 py-3",href:"/"},u.a.createElement("i",{className:"czi-sign-out opacity-60 mr-2"}),"Sign out"))))),u.a.createElement("section",{className:"col-lg-8"},u.a.createElement("div",{className:"d-none d-lg-flex justify-content-between align-items-center pt-lg-3 pb-4 pb-lg-5 mb-lg-4"},u.a.createElement("h6",{className:"font-size-base text-light mb-0"},"List of your registered addresses:"),u.a.createElement(E.b,{className:"btn btn-primary btn-sm",onClick:function(){return N.h.logout()},to:"/"},u.a.createElement("i",{className:"czi-sign-out mr-2"}),"Sign out")),u.a.createElement("div",{className:"table-responsive font-size-md"},u.a.createElement("table",{className:"table table-hover mb-0"},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Address"),u.a.createElement("th",null,"Actions"))),u.a.createElement("tbody",null,v?v.map(function(a,t){var l=a._id,s=a.country,n=a.city,r=a.line1,c=a.line2,m=a.postalCode;return u.a.createElement("tr",{key:t},u.a.createElement("td",null," ".concat(r," ").concat(c," ").concat(n," ").concat(s," ").concat(m),u.a.createElement("span",{className:"align-middle badge badge-info ml-2"},"Primary")),u.a.createElement("td",{className:"py-3 align-middle"},u.a.createElement("button",{className:"nav-link-style mr-2",style:{backgroundColor:"white",border:"none"},"data-toggle":"tooltip",title:"Edit",value:l,onClick:e.editAddress},u.a.createElement("i",{className:"czi-edit"})),u.a.createElement("button",{className:"nav-link-style text-danger",style:{backgroundColor:"white",border:"none"},"data-toggle":"tooltip",title:"Remove",value:l,onClick:function(a){e.removeAddress(a)}},u.a.createElement("div",{className:"czi-trash"}))))}):null))),u.a.createElement("hr",{className:"pb-4"}),u.a.createElement("div",{className:"text-sm-right"},u.a.createElement("button",{className:"btn btn-primary","data-toggle":"modal",onClick:function(){return e.setState({show:"block"})}},"Add new address"))))),u.a.createElement("div",{className:"needs-validation modal fade show",id:"add-address",tabIndex:-1,"aria-modal":"true",style:{paddingRight:34,display:t}},u.a.createElement("div",{className:"modal-dialog modal-lg"},u.a.createElement("div",{className:"modal-content"},u.a.createElement("div",{className:"modal-header"},u.a.createElement("h5",{className:"modal-title"},"Add a new address"),u.a.createElement("button",{className:"close",type:"button","data-dismiss":"modal","aria-label":"Close",onClick:this.closedModal},u.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),u.a.createElement("div",{className:"modal-body"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-sm-6"},u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"address-fn"},"First name"),u.a.createElement("input",{className:"form-control",type:"text",id:"address-fn",value:r?r[0].firstName:l,onChange:function(a){return e.setState({firstName:a.target.value})},required:!0}),u.a.createElement("div",{className:"invalid-feedback"},"Please fill in you first name!"))),u.a.createElement("div",{className:"col-sm-6"},u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"address-ln"},"Last name"),u.a.createElement("input",{className:"form-control",type:"text",id:"address-ln",value:s,onChange:function(a){return e.setState({lastName:a.target.value})},required:!0}),u.a.createElement("div",{className:"invalid-feedback"},"Please fill in you last name!"))),u.a.createElement("div",{className:"col-sm-6"},u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"address-company"},"Company"),u.a.createElement("input",{className:"form-control",type:"text",id:"address-company",value:n,onChange:function(a){return e.setState({company:a.target.value})}}))),u.a.createElement("div",{className:"col-sm-6"},u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"address-country"},"Country"),u.a.createElement("select",{className:"custom-select",id:"address-country",value:i,onChange:function(a){return e.setState({country:a.target.value})},required:!0},u.a.createElement("option",{value:!0},"Select country"),u.a.createElement("option",{value:"Argentina"},"Argentina"),u.a.createElement("option",{value:"Belgium"},"Belgium"),u.a.createElement("option",{value:"France"},"France"),u.a.createElement("option",{value:"Germany"},"Germany"),u.a.createElement("option",{value:"Spain"},"Spain"),u.a.createElement("option",{value:"UK"},"United Kingdom"),u.a.createElement("option",{value:"USA"},"USA")),u.a.createElement("div",{className:"invalid-feedback"},"Please select your country!"))),u.a.createElement("div",{className:"col-sm-6"},u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"address-city"},"City"),u.a.createElement("input",{className:"form-control",type:"text",id:"address-city",value:o,onChange:function(a){return e.setState({city:a.target.value})},required:!0}),u.a.createElement("div",{className:"invalid-feedback"},"Please fill in your city!"))),u.a.createElement("div",{className:"col-sm-6"},u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"address-line1"},"Line 1"),u.a.createElement("input",{className:"form-control",type:"text",id:"address-line1",value:p,onChange:function(a){return e.setState({line1:a.target.value})},required:!0}),u.a.createElement("div",{className:"invalid-feedback"},"Please fill in your address!"))),u.a.createElement("div",{className:"col-sm-6"},u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"address-line2"},"Line 2"),u.a.createElement("input",{className:"form-control",type:"text",id:"address-line2",value:g,onChange:function(a){return e.setState({line2:a.target.value})}}))),u.a.createElement("div",{className:"col-sm-6"},u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"address-zip"},"ZIP code"),u.a.createElement("input",{className:"form-control",type:"text",id:"address-zip",value:d,onChange:function(a){return e.setState({postalCode:a.target.value})},required:!0}),u.a.createElement("div",{className:"invalid-feedback"},"Please add your ZIP code!"))),u.a.createElement("div",{className:"col-12"},u.a.createElement("div",{className:"custom-control custom-checkbox"},u.a.createElement("input",{className:"custom-control-input"}),u.a.createElement("label",{className:"custom-control-label",htmlFor:"address-primary"},"Make this address primary"))))),u.a.createElement("div",{className:"modal-footer"},u.a.createElement("button",{className:"btn btn-secondary",type:"button","data-dismiss":"modal",onClick:this.closedModal},"Close"),u.a.createElement("button",{className:"btn btn-primary btn-shadow",type:"submit",onClick:this.addNewAddress},"Add address"))))))}}]),a}(d.Component);a.default=Object(g.b)(null,null)(v)}}]);
//# sourceMappingURL=12.28cf5c44.chunk.js.map