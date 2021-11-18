(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{245:function(e,t,a){"use strict";a.r(t);var l=a(51),n=a(0),r=a.n(n),m=a(5),c=a(8);t.default=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("compare"))),t=Object(l.a)(e,2),a=t[0],s=t[1];return a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"bg-dark py-4"},r.a.createElement("div",{className:"container d-lg-flex justify-content-between py-2 py-lg-3"},r.a.createElement("div",{className:"order-lg-2 mb-3 mb-lg-0 pt-lg-2"},r.a.createElement("nav",{"aria-label":"breadcrumb"},r.a.createElement("ol",{className:"breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start"},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement(m.b,{className:"text-nowrap",to:"/"},r.a.createElement("i",{className:"czi-home"}),"Home")),r.a.createElement("li",{className:"breadcrumb-item text-nowrap active","aria-current":"page"},"Comparison")))),r.a.createElement("div",{className:"order-lg-1 pr-lg-4 text-center text-lg-left"},r.a.createElement("h1",{className:"h3 text-light mb-0"},"Product comparison")))),r.a.createElement("div",{className:"container py-5 mb-2"},r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table table-bordered table-fixed font-size-sm",style:{minWidth:"45rem"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"align-middle"},r.a.createElement("select",{className:"form-control custom-select",id:"compare-criteria","data-filter":"trigger"},r.a.createElement("option",{value:"all"},"Comparison criteria *"),r.a.createElement("option",{value:"summary"},"Summary"),r.a.createElement("option",{value:"general"},"General"),r.a.createElement("option",{value:"multimedia"},"Multimedia"),r.a.createElement("option",{value:"performance"},"Performance"),r.a.createElement("option",{value:"design"},"Design"),r.a.createElement("option",{value:"display"},"Display"),r.a.createElement("option",{value:"storage"},"Storage"),r.a.createElement("option",{value:"camera"},"Camera"),r.a.createElement("option",{value:"battery"},"Battery"),r.a.createElement("option",{value:"price"},"Price & rating")),r.a.createElement("small",{className:"form-text text-muted"},"* Choose criteria to filter table below."),r.a.createElement("div",{className:"pt-3"},r.a.createElement("div",{className:"custom-control custom-checkbox"},r.a.createElement("input",{className:"custom-control-input",type:"checkbox",id:"differences"}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"differences"},"Show differences only")))),a.length>0?r.a.createElement("td",{className:"text-center px-4 pb-4"},r.a.createElement("button",{className:"btn btn-sm btn-block text-danger mb-2",value:a[0]._id,id:"compare",onClick:function(e){return s(Object(c.d)(e))}},r.a.createElement("i",{className:"czi-trash mr-1"}),"Remove"),r.a.createElement("a",{className:"d-inline-block mb-3",href:"/"},r.a.createElement("img",{src:a[0].img,width:80,alt:"Apple iPhone Xs Max"})),r.a.createElement("h3",{className:"product-title font-size-sm"},r.a.createElement("a",{href:"/"},a[0].name)),r.a.createElement("button",{className:"btn btn-primary btn-sm",type:"button","data-toggle":"toast","data-target":"#cart-toast"},"Add to Cart")):null,a.length>1?r.a.createElement("td",{className:"text-center px-4 pb-4"},r.a.createElement("button",{className:"btn btn-sm btn-block text-danger mb-2",value:a[1]._id,id:"compare",onClick:function(e){return s(Object(c.d)(e))}},r.a.createElement("i",{className:"czi-trash mr-1"}),"Remove"),r.a.createElement("a",{className:"d-inline-block mb-3",href:"/"},r.a.createElement("img",{src:a[1].img,width:80,alt:"Apple iPhone Xs Max"})),r.a.createElement("h3",{className:"product-title font-size-sm"},r.a.createElement("a",{href:"/"},a[1].name)),r.a.createElement("button",{className:"btn btn-primary btn-sm",type:"button","data-toggle":"toast","data-target":"#cart-toast"},"Add to Cart")):null,a.length>2?r.a.createElement("td",{className:"text-center px-4 pb-4"},r.a.createElement("button",{className:"btn btn-sm btn-block text-danger mb-2",value:a[2]._id,id:"compare",onClick:function(e){return s(Object(c.d)(e))}},r.a.createElement("i",{className:"czi-trash mr-1"}),"Remove"),r.a.createElement("a",{className:"d-inline-block mb-3",href:"/"},r.a.createElement("img",{src:a[2].img,width:80,alt:"Apple iPhone Xs Max"})),r.a.createElement("h3",{className:"product-title font-size-sm"},r.a.createElement("a",{href:"/"},a[2].name)),r.a.createElement("button",{className:"btn btn-primary btn-sm",type:"button","data-toggle":"toast","data-target":"#cart-toast"},"Add to Cart")):null)),r.a.createElement("tbody",{id:"summary","data-filter":"target"},r.a.createElement("tr",{className:"bg-secondary"},r.a.createElement("th",{className:"text-uppercase text-dark"},"Summary"),a.length?r.a.createElement("td",null,r.a.createElement("span",{className:"text-dark font-weight-medium text-dark"},a[0].name)):null,r.a.createElement("td",null,r.a.createElement("span",{className:"text-dark font-weight-medium text-dark"},"Google Pixel 3 XL")),r.a.createElement("td",null,r.a.createElement("span",{className:"text-dark font-weight-medium text-dark"},"Samsung Galaxy S10+"))),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Performance"),r.a.createElement("td",null,"Hexa Core"),r.a.createElement("td",null,"Octa Core"),r.a.createElement("td",null,"Octa Core")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Display"),r.a.createElement("td",null,"6.5-inch"),r.a.createElement("td",null,"6.3-inch"),r.a.createElement("td",null,"6.4-inch")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Storage"),r.a.createElement("td",null,"64 GB"),r.a.createElement("td",null,"64 GB"),r.a.createElement("td",null,"128 GB")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Camera"),r.a.createElement("td",null,"Dual 12-megapixel"),r.a.createElement("td",null,"12.2-megapixel"),r.a.createElement("td",null,"12,16,12-megapixel")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Battery"),r.a.createElement("td",null,"3,174 mAh"),r.a.createElement("td",null,"3,430 mAh"),r.a.createElement("td",null,"4,100 mAh"))),r.a.createElement("tbody",{id:"general","data-filter":"target"},r.a.createElement("tr",{className:"bg-secondary"},r.a.createElement("th",{className:"text-uppercase text-dark"},"General"),r.a.createElement("td",null,r.a.createElement("span",{className:"text-dark font-weight-medium text-dark"},"Apple iPhone Xs Max")),r.a.createElement("td",null,r.a.createElement("span",{className:"text-dark font-weight-medium text-dark"},"Google Pixel 3 XL")),r.a.createElement("td",null,r.a.createElement("span",{className:"text-dark font-weight-medium text-dark"},"Samsung Galaxy S10+"))),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Quick charging"),r.a.createElement("td",null,"Yes"),r.a.createElement("td",null,"Yes"),r.a.createElement("td",null,"Yes")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Operating system"),r.a.createElement("td",null,"iOS v12"),r.a.createElement("td",null,"Android v9.0 Pie"),r.a.createElement("td",null,"Android v9.0 with Samsung One UI")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Sim slots"),r.a.createElement("td",null,"Single SIM, GSM"),r.a.createElement("td",null,"Single SIM, GSM"),r.a.createElement("td",null,"Hybrid SIM slot, GSM")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Launch date"),r.a.createElement("td",null,"September 12, 2018 (Official)"),r.a.createElement("td",null,"November 1, 2018 (Official)"),r.a.createElement("td",null,"February 20, 2019 (Official)")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Sim size"),r.a.createElement("td",null,"SIM1: Nano"),r.a.createElement("td",null,"SIM1: Nano"),r.a.createElement("td",null,"SIM1: Nano SIM2: Nano (Hybrid)")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Network"),r.a.createElement("td",null,"4G: Available (supports Indian bands) 3G: Available, 2G: Available"),r.a.createElement("td",null,"4G: Available (supports Indian bands) 3G: Available, 2G: Available"),r.a.createElement("td",null,"4G: Available (supports Indian bands) 3G: Available, 2G: Available")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Fingerprint sensor"),r.a.createElement("td",null,"None (Face ID)"),r.a.createElement("td",null,"Back cover"),r.a.createElement("td",null,"In-screen"))),r.a.createElement("tbody",{id:"multimedia","data-filter":"target"},r.a.createElement("tr",{className:"bg-secondary"},r.a.createElement("th",{className:"text-uppercase text-dark"},"Multimedia"),r.a.createElement("td",null,r.a.createElement("span",{className:"text-dark font-weight-medium text-dark"},"Apple iPhone Xs Max")),r.a.createElement("td",null,r.a.createElement("span",{className:"text-dark font-weight-medium text-dark"},"Google Pixel 3 XL")),r.a.createElement("td",null,r.a.createElement("span",{className:"text-dark font-weight-medium text-dark"},"Samsung Galaxy S10+"))),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Loudspeaker"),r.a.createElement("td",null,"Yes"),r.a.createElement("td",null,"Yes"),r.a.createElement("td",null,"Yes")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"FM radio"),r.a.createElement("td",null,"No"),r.a.createElement("td",null,"No"),r.a.createElement("td",null,"No")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Headphone jack"),r.a.createElement("td",null,"No"),r.a.createElement("td",null,"No"),r.a.createElement("td",null,"Yes"))),r.a.createElement("tbody",{id:"performance","data-filter":"target"},r.a.createElement("tr",{className:"bg-secondary"},r.a.createElement("th",{className:"text-uppercase text-dark"},"Performance"),r.a.createElement("td",null,r.a.createElement("span",{className:"text-dark font-weight-medium text-dark"},"Apple iPhone Xs Max")),r.a.createElement("td",null,r.a.createElement("span",{className:"text-dark font-weight-medium text-dark"},"Google Pixel 3 XL")),r.a.createElement("td",null,r.a.createElement("span",{className:"text-dark font-weight-medium text-dark"},"Samsung Galaxy S10+"))),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Processor"),r.a.createElement("td",null,"Apple A12 Bionic"),r.a.createElement("td",null,"Qualcomm Snapdragon 845 (2.5GHz octa-core)"),r.a.createElement("td",null,"Octa-core Qualcomm Snapdragon 855")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Graphics"),r.a.createElement("td",null,"Apple GPU (4-core graphics)"),r.a.createElement("td",null,"Adreno 630"),r.a.createElement("td",null,"Mali-G72 MP18")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Architecture"),r.a.createElement("td",null,"64 bit"),r.a.createElement("td",null,"64 bit"),r.a.createElement("td",null,"64 bit")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"RAM"),r.a.createElement("td",null,"4 GB"),r.a.createElement("td",null,"4 GB"),r.a.createElement("td",null,"8 GB"))),r.a.createElement("tbody",{id:"design","data-filter":"target"},r.a.createElement("tr",{className:"bg-secondary"},r.a.createElement("th",{className:"text-uppercase text-dark"},"Design"),r.a.createElement("td",null,r.a.createElement("span",{className:"text-dark font-weight-medium text-dark"},"Apple iPhone Xs Max")),r.a.createElement("td",null,r.a.createElement("span",{className:"text-dark font-weight-medium text-dark"},"Google Pixel 3 XL")),r.a.createElement("td",null,r.a.createElement("span",{className:"text-dark font-weight-medium text-dark"},"Samsung Galaxy S10+"))),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Build material"),r.a.createElement("td",null,"Case: AluminiumBack: Mineral Glass"),r.a.createElement("td",null,"Case: AluminiumBack: Aluminium"),r.a.createElement("td",null,"Case: AluminiumBack: Mineral Glass")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Thickness"),r.a.createElement("td",null,"7.7 mm"),r.a.createElement("td",null,"7.9 mm"),r.a.createElement("td",null,"8.5 mm")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Width"),r.a.createElement("td",null,"70.9 mm"),r.a.createElement("td",null,"76.7 mm"),r.a.createElement("td",null,"73.8 mm")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Height"),r.a.createElement("td",null,"143.6 mm"),r.a.createElement("td",null,"157.9 mm"),r.a.createElement("td",null,"158.1 mm")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Weight"),r.a.createElement("td",null,"174 grams"),r.a.createElement("td",null,"175 grams"),r.a.createElement("td",null,"189 grams")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Waterproof"),r.a.createElement("td",null,"Yes Water resistant (up to 30 minutes in a depth of 1 meter), IP67"),r.a.createElement("td",null,"Yes Water resistant (up to 30 minutes in a depth of 1 meter), IP67"),r.a.createElement("td",null,"Yes Water resistant (up to 30 minutes in a depth of 1.5 meter), IP68")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Colors"),r.a.createElement("td",null,"Silver, Space Grey"),r.a.createElement("td",null,"Black, Black and White"),r.a.createElement("td",null,"Midnight Black, Coral Blue, Lilac Purple"))),r.a.createElement("tbody",{id:"display","data-filter":"target"},r.a.createElement("tr",{className:"bg-secondary"},r.a.createElement("th",{className:"text-uppercase text-dark"},"Display"),r.a.createElement("td",null,r.a.createElement("span",{className:"text-dark font-weight-medium text-dark"},"Apple iPhone Xs Max")),r.a.createElement("td",null,r.a.createElement("span",{className:"text-dark font-weight-medium text-dark"},"Google Pixel 3 XL")),r.a.createElement("td",null,r.a.createElement("span",{className:"text-dark font-weight-medium text-dark"},"Samsung Galaxy S10+"))),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Display type"),r.a.createElement("td",null,"Super Retina OLED"),r.a.createElement("td",null,"'flexible' OLED"),r.a.createElement("td",null,"Super AMOLED")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Pixel density"),r.a.createElement("td",null,"458 ppi"),r.a.createElement("td",null,"522 ppi"),r.a.createElement("td",null,"522 ppi")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Screen protection"),r.a.createElement("td",null,"Yes"),r.a.createElement("td",null,"Corning Gorilla Glass v5"),r.a.createElement("td",null,"Corning Gorilla Glass v5")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Screen size"),r.a.createElement("td",null,"6.5 inches"),r.a.createElement("td",null,"6.3 inches"),r.a.createElement("td",null,"6.4 inches")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Screen resolution"),r.a.createElement("td",null,"1125 x 2436 pixels"),r.a.createElement("td",null,"1440 x 2880 pixels"),r.a.createElement("td",null,"1440 x 2960 pixels")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Touch screen"),r.a.createElement("td",null,"Yes, 3D Touch Touchscreen, Multi-touch"),r.a.createElement("td",null,"Yes, Capacitive Touchscreen, Multi-touch"),r.a.createElement("td",null,"Yes, Capacitive Touchscreen, Multi-touch"))),r.a.createElement("tbody",{id:"storage","data-filter":"target"},r.a.createElement("tr",{className:"bg-secondary"},r.a.createElement("th",{className:"text-uppercase text-dark"},"Storage"),r.a.createElement("td",null,r.a.createElement("span",{className:"text-dark font-weight-medium text-dark"},"Apple iPhone Xs Max")),r.a.createElement("td",null,r.a.createElement("span",{className:"text-dark font-weight-medium text-dark"},"Google Pixel 3 XL")),r.a.createElement("td",null,r.a.createElement("span",{className:"text-dark font-weight-medium text-dark"},"Samsung Galaxy S10+"))),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Internal memory"),r.a.createElement("td",null,"64 GB"),r.a.createElement("td",null,"64 GB"),r.a.createElement("td",null,"128 GB")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Expandable memory"),r.a.createElement("td",null,"No"),r.a.createElement("td",null,"No"),r.a.createElement("td",null,"Yes Up to 1 TB"))),r.a.createElement("tbody",{id:"camera","data-filter":"target"},r.a.createElement("tr",{className:"bg-secondary"},r.a.createElement("th",{className:"text-uppercase text-dark"},"Camera"),r.a.createElement("td",null,r.a.createElement("span",{className:"text-dark font-weight-medium text-dark"},"Apple iPhone Xs Max")),r.a.createElement("td",null,r.a.createElement("span",{className:"text-dark font-weight-medium text-dark"},"Google Pixel 3 XL")),r.a.createElement("td",null,r.a.createElement("span",{className:"text-dark font-weight-medium text-dark"},"Samsung Galaxy S10+"))),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Settings"),r.a.createElement("td",null,"Exposure compensation, ISO control"),r.a.createElement("td",null,"Exposure compensation, ISO control"),r.a.createElement("td",null,"Exposure compensation")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Aperture"),r.a.createElement("td",null,"F2.2"),r.a.createElement("td",null,"F2.4"),r.a.createElement("td",null,"F1.7")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Camera features"),r.a.createElement("td",null,"10 x Digital zoom, Optical zoom, Auto flash, Face detection, Touch to focus"),r.a.createElement("td",null,"Fixed zocus"),r.a.createElement("td",null,"Wide angle selfie")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Image resolution"),r.a.createElement("td",null,"4000 x 3000 pixels"),r.a.createElement("td",null,"4000 x 3000 pixels"),r.a.createElement("td",null,"4000 x 3000 pixels")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Sensor"),r.a.createElement("td",null,"BSI sensor"),r.a.createElement("td",null,"CMOS image sensor"),r.a.createElement("td",null,"CMOS image sensor")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Autofocus"),r.a.createElement("td",null,"Yes"),r.a.createElement("td",null,"No"),r.a.createElement("td",null,"Yes")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Shooting modes"),r.a.createElement("td",null,"Continuos shooting, High dynamic range mode (HDR), Burst mode"),r.a.createElement("td",null,"Continuos shooting, High dynamic range mode (HDR)"),r.a.createElement("td",null,"Continuos shooting, High dynamic range mode (HDR)")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Optical image stabilisation"),r.a.createElement("td",null,"Yes, Dual optical image stabilization"),r.a.createElement("td",null,"Yes"),r.a.createElement("td",null,"Yes")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Flash"),r.a.createElement("td",null,"Yes, Retina flash"),r.a.createElement("td",null,"Yes, Dual LED flash"),r.a.createElement("td",null,"Yes, LED flash"))),r.a.createElement("tbody",{id:"battery","data-filter":"target"},r.a.createElement("tr",{className:"bg-secondary"},r.a.createElement("th",{className:"text-uppercase text-dark"},"Battery"),r.a.createElement("td",null,r.a.createElement("span",{className:"text-dark font-weight-medium text-dark"},"Apple iPhone Xs Max")),r.a.createElement("td",null,r.a.createElement("span",{className:"text-dark font-weight-medium text-dark"},"Google Pixel 3 XL")),r.a.createElement("td",null,r.a.createElement("span",{className:"text-dark font-weight-medium text-dark"},"Samsung Galaxy S10+"))),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Talktime"),r.a.createElement("td",null,"Up to 21 hours(4G)"),r.a.createElement("td",null,"Up to 24 hours(4G)"),r.a.createElement("td",null,"Up to 25 hours(4G)")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Quick charging"),r.a.createElement("td",null,"Yes, fast, 50 % in 30 minutes"),r.a.createElement("td",null,"Yes"),r.a.createElement("td",null,"Yes")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Wireless charging"),r.a.createElement("td",null,"Yes"),r.a.createElement("td",null,"Yes"),r.a.createElement("td",null,"Yes")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Type"),r.a.createElement("td",null,"Li-ion"),r.a.createElement("td",null,"Li-ion"),r.a.createElement("td",null,"Li-ion")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Capacity"),r.a.createElement("td",null,"3,174 mAh"),r.a.createElement("td",null,"3,430 mAh"),r.a.createElement("td",null,"4,100 mAh"))),r.a.createElement("tbody",{id:"price","data-filter":"target"},r.a.createElement("tr",{className:"bg-secondary"},r.a.createElement("th",{className:"text-uppercase text-dark"},"Price & rating"),r.a.createElement("td",null,r.a.createElement("span",{className:"text-dark font-weight-medium text-dark"},"Apple iPhone Xs Max")),r.a.createElement("td",null,r.a.createElement("span",{className:"text-dark font-weight-medium text-dark"},"Google Pixel 3 XL")),r.a.createElement("td",null,r.a.createElement("span",{className:"text-dark font-weight-medium text-dark"},"Samsung Galaxy S10+"))),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Price"),r.a.createElement("td",null,"$1,099"),r.a.createElement("td",null,"$899"),r.a.createElement("td",null,"$1,000")),r.a.createElement("tr",null,r.a.createElement("th",{className:"text-dark"},"Rating"),r.a.createElement("td",null,"4.5/5"),r.a.createElement("td",null,"4.5/5"),r.a.createElement("td",null,"4.5/5")),r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-primary btn-block",type:"button","data-toggle":"toast","data-target":"#cart-toast"},"Add to Cart")),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-primary btn-block",type:"button","data-toggle":"toast","data-target":"#cart-toast"},"Add to Cart")),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-primary btn-block",type:"button","data-toggle":"toast","data-target":"#cart-toast"},"Add to Cart"))))))),r.a.createElement("div",{className:"toast-container toast-bottom-center"},r.a.createElement("div",{className:"toast mb-3",id:"cart-toast","data-delay":5e3,role:"alert","aria-live":"assertive","aria-atomic":"true"},r.a.createElement("div",{className:"toast-header bg-success text-white"},r.a.createElement("i",{className:"czi-check-circle mr-2"}),r.a.createElement("h6",{className:"font-size-sm text-white mb-0 mr-auto"},"Added to cart!"),r.a.createElement("button",{className:"close text-white ml-2 mb-1",type:"button","data-dismiss":"toast","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"toast-body"},"This item has been added to your cart.")))):a?void 0:r.a.createElement("div",null)}}}]);
//# sourceMappingURL=2.b9dd0e5c.chunk.js.map