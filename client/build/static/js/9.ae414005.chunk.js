(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{223:function(e,t,a){e.exports=a.p+"static/media/avatar.e3b65c58.jpg"},252:function(e,t,a){"use strict";a.r(t);var l=a(17),s=a(18),n=a(20),c=a(19),r=a(21),m=a(0),i=a.n(m),o=a(223),d=a.n(o),u=a(5),p=a(15),b=a(48),E=function(e){function t(){var e,a;Object(l.a)(this,t);for(var s=arguments.length,r=new Array(s),m=0;m<s;m++)r[m]=arguments[m];return(a=Object(n.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={userId:JSON.parse(localStorage.getItem("user")).userId,show:"none",subject:"",type:"",priority:"",description:[],status:!0,tickets:JSON.parse(localStorage.getItem("user")).user.ticket,user:JSON.parse(localStorage.getItem("user")).user,wishlist:JSON.parse(localStorage.getItem("wishlist"))},a.submitNewTicket=function(){var e=a.state,t=e.userId,l=e.subject,s=e.type,n=e.priority,c=e.description,r=e.status;a.props.dispatch(p.h.ticket(t,l,s,n,c,r)),a.setState({show:"none",userId:"",subject:"",type:"",description:[],priority:"",status:""})},a}return Object(r.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.show,l=t.tickets,s=t.user,n=t.wishlist;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"page-title-overlap bg-dark pt-4"},i.a.createElement("div",{className:"container d-lg-flex justify-content-between py-2 py-lg-3"},i.a.createElement("div",{className:"order-lg-2 mb-3 mb-lg-0 pt-lg-2"},i.a.createElement("nav",{"aria-label":"breadcrumb"},i.a.createElement("ol",{className:"breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement(u.b,{className:"text-nowrap",to:"/"},i.a.createElement("i",{className:"czi-home"}),"Home")),i.a.createElement("li",{className:"breadcrumb-item text-nowrap"},i.a.createElement(u.b,{to:"/account_tickets"},"Account")),i.a.createElement("li",{className:"breadcrumb-item text-nowrap active","aria-current":"page"},"Support tickets")))),i.a.createElement("div",{className:"order-lg-1 pr-lg-4 text-center text-lg-left"},i.a.createElement("h1",{className:"h3 text-light mb-0"},"Support tickets")))),i.a.createElement("div",{className:"container pb-5 mb-2 mb-md-3"},i.a.createElement("div",{className:"row"},i.a.createElement("aside",{className:"col-lg-4 pt-4 pt-lg-0"},i.a.createElement("div",{className:"cz-sidebar-static rounded-lg box-shadow-lg px-0 pb-0 mb-5 mb-lg-0"},i.a.createElement("div",{className:"px-4 mb-4"},i.a.createElement("div",{className:"media align-items-center"},i.a.createElement("div",{className:"img-thumbnail rounded-circle position-relative",style:{width:"6.375rem"}},i.a.createElement("span",{className:"badge badge-warning","data-toggle":"tooltip",title:"Reward points"},"384"),i.a.createElement("img",{className:"rounded-circle",src:d.a,alt:"Susan Gardner"})),i.a.createElement("div",{className:"media-body pl-3"},i.a.createElement("h3",{className:"font-size-base mb-0"},s?s.firstName:null," ",s?s.lastName:null),i.a.createElement("span",{className:"text-accent font-size-sm"},s?s.email:null)))),i.a.createElement("div",{className:"bg-secondary px-4 py-3"},i.a.createElement("h3",{className:"font-size-sm mb-0 text-muted"},"Dashboard")),i.a.createElement("ul",{className:"list-unstyled mb-0"},i.a.createElement("li",{className:"border-bottom mb-0"},i.a.createElement(u.b,{className:"nav-link-style d-flex align-items-center px-4 py-3",to:"/account_orders"},i.a.createElement("i",{className:"czi-bag opacity-60 mr-2"}),"Orders",i.a.createElement("span",{className:"font-size-sm text-muted ml-auto"},s.orders.length>0?s.orders.length:0))),i.a.createElement("li",{className:"border-bottom mb-0"},i.a.createElement(u.b,{className:"nav-link-style d-flex align-items-center px-4 py-3",to:"/account_wishlist"},i.a.createElement("i",{className:"czi-heart opacity-60 mr-2"}),"Wishlist",i.a.createElement("span",{className:"font-size-sm text-muted ml-auto"},n?n.length:0))),i.a.createElement("li",{className:"mb-0"},i.a.createElement(u.b,{className:"nav-link-style d-flex align-items-center px-4 py-3 active",to:"/account_tickets"},i.a.createElement("i",{className:"czi-help opacity-60 mr-2"}),"Support tickets",i.a.createElement("span",{className:"font-size-sm text-muted ml-auto"},l.length?l.length:0)))),i.a.createElement("div",{className:"bg-secondary px-4 py-3"},i.a.createElement("h3",{className:"font-size-sm mb-0 text-muted"},"Account settings")),i.a.createElement("ul",{className:"list-unstyled mb-0"},i.a.createElement("li",{className:"border-bottom mb-0"},i.a.createElement(u.b,{className:"nav-link-style d-flex align-items-center px-4 py-3",to:"/account_profile"},i.a.createElement("i",{className:"czi-user opacity-60 mr-2"}),"Profile info")),i.a.createElement("li",{className:"border-bottom mb-0"},i.a.createElement(u.b,{className:"nav-link-style d-flex align-items-center px-4 py-3",to:"/account_address"},i.a.createElement("i",{className:"czi-location opacity-60 mr-2"}),"Addresses")),i.a.createElement("li",{className:"mb-0"},i.a.createElement(u.b,{className:"nav-link-style d-flex align-items-center px-4 py-3",to:"/account_payment"},i.a.createElement("i",{className:"czi-card opacity-60 mr-2"}),"Payment methods")),i.a.createElement("li",{className:"d-lg-none border-top mb-0"},i.a.createElement("a",{className:"nav-link-style d-flex align-items-center px-4 py-3",href:"/"},i.a.createElement("i",{className:"czi-sign-out opacity-60 mr-2"}),"Sign out"))))),i.a.createElement("section",{className:"col-lg-8"},i.a.createElement("div",{className:"d-flex justify-content-between align-items-center pt-lg-2 pb-4 pb-lg-5 mb-lg-3"},i.a.createElement("div",{className:"form-inline"},i.a.createElement("label",{className:"text-light opacity-75 text-nowrap mr-2 d-none d-lg-block",htmlFor:"order-sort"},"Sort orders:"),i.a.createElement("select",{className:"form-control custom-select",id:"order-sort"},i.a.createElement("option",null,"All"),i.a.createElement("option",null,"Open"),i.a.createElement("option",null,"Closed"))),i.a.createElement(u.b,{className:"btn btn-primary btn-sm",onClick:function(){return p.h.logout()},to:"/"},i.a.createElement("i",{className:"czi-sign-out mr-2"}),"Sign out")),i.a.createElement("div",{className:"table-responsive font-size-md"},i.a.createElement("table",{className:"table table-hover mb-0"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Ticket Subject"),i.a.createElement("th",null,"Date Submitted | Updated"),i.a.createElement("th",null,"Type"),i.a.createElement("th",null,"Priority"),i.a.createElement("th",null,"Status"))),i.a.createElement("tbody",null,l.length>0?l.map(function(e,t){var a=e.subject,l=e.ticketData,s=e.ticketUpdate,n=e.type,c=e.priority,r=e.status;return i.a.createElement("tr",{key:t},i.a.createElement("td",{className:"py-3"},i.a.createElement(u.b,{className:"nav-link-style font-weight-medium",to:"/account_single_ticket"},a)),i.a.createElement("td",{className:"py-3"},new Date(l).toLocaleDateString()," | ",new Date(s).toLocaleDateString()),i.a.createElement("td",{className:"py-3"},n),i.a.createElement("td",{className:"py-3"},"high"===c?i.a.createElement("span",{className:"badge badge-warning m-0"},"High"):null,"medium"===c?i.a.createElement("span",{className:"badge badge-info m-0"},"Medium"):null,"urgent"===c?i.a.createElement("span",{className:"badge badge-danger m-0"},"Urgent"):null,"low"===c?i.a.createElement("span",{className:"badge badge-success m-0"},"Low"):null),i.a.createElement("td",{className:"py-3"},!0===r?i.a.createElement("span",{className:"badge badge-success m-0"},"Open"):null,!1===r?i.a.createElement("span",{className:"badge badge-secondary m-0"},"Closed"):null))}):null))),i.a.createElement("hr",{className:"mb-4"}),i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{className:"btn btn-primary","data-toggle":"modal","data-target":"#open-ticket",onClick:function(){return e.setState({show:"block"})}},"Submit new ticket"))))),i.a.createElement("div",{className:"needs-validation modal fade show",id:"open-ticket",tabIndex:-1,"aria-modal":"true",style:{paddingRight:34,display:a}},i.a.createElement("div",{className:"modal-dialog modal-lg"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"modal-header"},i.a.createElement("h5",{className:"modal-title"},"Submit new ticket"),i.a.createElement("button",{className:"close",type:"button","data-dismiss":"modal","aria-label":"Close",onClick:function(){return e.setState({show:"none"})}},i.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),i.a.createElement("div",{className:"modal-body"},i.a.createElement("p",{className:"text-muted font-size-sm"},"We normally respond tickets within 2 business days."),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"ticket-subject"},"Subject"),i.a.createElement("input",{className:"form-control",type:"text",id:"ticket-subject",onChange:function(t){return e.setState({subject:t.target.value})},required:!0}),i.a.createElement("div",{className:"invalid-feedback"},"Please fill in the subject line!")),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"ticket-type"},"Type"),i.a.createElement("select",{className:"form-control custom-select",id:"ticket-type",onChange:function(t){return e.setState({type:t.target.value})},required:!0},i.a.createElement("option",{value:!0},"Choose type"),i.a.createElement("option",{value:"WebsiteProblem"},"Website problem"),i.a.createElement("option",{value:"PartnerRequest"},"Partner request"),i.a.createElement("option",{value:"Complaint"},"Complaint"),i.a.createElement("option",{value:"InfoInquiry"},"Info inquiry")),i.a.createElement("div",{className:"invalid-feedback"},"Please choose ticket type!"))),i.a.createElement("div",{className:"col-sm-6"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"ticket-priority"},"Priority"),i.a.createElement("select",{className:"form-control custom-select",id:"ticket-priority",onChange:function(t){return e.setState({priority:t.target.value})},required:!0},i.a.createElement("option",{value:!0},"How urgent is your issue?"),i.a.createElement("option",{value:"urgent"},"Urgent"),i.a.createElement("option",{value:"high"},"High"),i.a.createElement("option",{value:"medium"},"Medium"),i.a.createElement("option",{value:"low"},"Low")),i.a.createElement("div",{className:"invalid-feedback"},"Please choose how urgent your ticket is!")))),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"ticket-description"},"Describe your issue"),i.a.createElement("textarea",{className:"form-control",id:"ticket-description",rows:8,required:!0,onChange:function(t){return e.setState({description:t.target.value})},defaultValue:""}),i.a.createElement("div",{className:"invalid-feedback"},"Please provide ticket description!")),i.a.createElement("div",{className:"custom-file mb-3"},i.a.createElement("input",{className:"custom-file-input",type:"file",id:"file-input"}),i.a.createElement("label",{className:"custom-file-label",htmlFor:"file-input"},"Choose file..."))),i.a.createElement("div",{className:"modal-footer"},i.a.createElement("button",{className:"btn btn-secondary",type:"button","data-dismiss":"modal",onClick:function(){return e.setState({show:"none"})}},"Close"),i.a.createElement("button",{className:"btn btn-primary",type:"submit",onClick:this.submitNewTicket},"Submit Ticket"))))))}}]),t}(m.Component);t.default=Object(b.b)(null,null)(E)}}]);
//# sourceMappingURL=9.ae414005.chunk.js.map