(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,n){e.exports=n(62)},41:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(26),c=n.n(o),l=n(7),i=n(11),u=n(12),s=(n(41),function(e){var t=e.numItems,n=e.total;return a.a.createElement("header",{className:"shop-header row"},a.a.createElement(i.b,{to:"/"},a.a.createElement("div",{className:"logo text-dark"},"ReStore")),a.a.createElement(i.b,{to:"/cart"},a.a.createElement("div",{className:"shopping-cart"},a.a.createElement("i",{className:"cart-icon fa fa-shopping-cart"}),t," items ($",n,")")))}),d=n(9),m=n(10),p=n(14),f=n(13),E=n(15),b=(n(48),function(e){var t=e.book,n=e.onAddedToCart,r=t.title,o=t.author,c=t.price,l=t.coverImage;return a.a.createElement("div",{className:"products-item"},a.a.createElement("div",{className:"book-cover"},a.a.createElement("img",{src:l,alt:"cover"})),a.a.createElement("div",{className:"book-details"},a.a.createElement("span",{className:"book-title"},r),a.a.createElement("div",{className:"book-author"},o),a.a.createElement("div",{className:"book-price"},"$",c),a.a.createElement("button",{onClick:n,className:"btn btn-info add-to-cart"},"Add to cart")))}),h=n(3),v=a.a.createContext(),O=v.Provider,g=v.Consumer,C=function(){return function(e){return function(t){return a.a.createElement(g,null,function(n){return a.a.createElement(e,Object.assign({},t,{bookstoreService:n}))})}}},k=function(e){return{type:"BOOK_ADDED_TO_CART",payload:e}};function _(e){return{type:"FETCH_NEWS_ERROR",payload:e}}var y=function(e){return function(){return function(t){t({type:"FETCH_BOOKS_REQUEST"}),e.getBooks().then(function(e){return t({type:"FETCH_BOOKS_SUCCESS",payload:e})}).catch(function(e){return t({type:"FETCH_BOOKS_FAILURE",payload:e})})}}},j=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},S=(n(50),function(){return a.a.createElement("div",{className:"lds-css"},a.a.createElement("div",{className:"lds-double-ring"},a.a.createElement("div",null),a.a.createElement("div",null)))}),N=(n(52),function(){return a.a.createElement("div",null,"Error!")}),T=(n(54),function(e){var t=e.books,n=e.onAddedToCart;return a.a.createElement("ul",{className:"products"},t.map(function(e){return a.a.createElement("li",{key:e.id},a.a.createElement(b,{book:e,onAddedToCart:function(){return n(e.id)}}))}))}),w=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchBooks()}},{key:"render",value:function(){var e=this.props,t=e.books,n=e.loading,r=e.error,o=e.onAddedToCart;return n?a.a.createElement(S,null):r?a.a.createElement(N,null):a.a.createElement(T,{books:t,onAddedToCart:o})}}]),t}(r.Component),R=j(C(),Object(l.b)(function(e){var t=e.bookList;return{books:t.books,loading:t.loading,error:t.error}},function(e,t){var n=t.bookstoreService;return Object(h.bindActionCreators)({fetchBooks:y(n),onAddedToCart:k},e)}))(w),A=(n(56),{onIncrease:k,onDecrease:function(e){return{type:"BOOK_REMOVED_FROM_CART",payload:e}},onDelete:function(e){return{type:"ALL_BOOKS_REMOVED_FROM_CART",payload:e}}}),I=Object(l.b)(function(e){var t=e.shoppingCart;return{items:t.cartItems,total:t.orderTotal}},A)(function(e){var t=e.items,n=e.total,r=e.onIncrease,o=e.onDecrease,c=e.onDelete;return a.a.createElement("div",{className:"shopping-cart-table"},a.a.createElement("h2",null,"Your Order"),a.a.createElement("table",{className:"table"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"#"),a.a.createElement("th",null,"Item"),a.a.createElement("th",null,"Count"),a.a.createElement("th",null,"Price"),a.a.createElement("th",null,"Action"))),a.a.createElement("tbody",null,t.map(function(e,t){var n=e.id,l=e.title,i=e.count,u=e.total;return a.a.createElement("tr",{key:n},a.a.createElement("td",null,t+1),a.a.createElement("td",null,l),a.a.createElement("td",null,i),a.a.createElement("td",null,"$",u),a.a.createElement("td",null,a.a.createElement("button",{onClick:function(){return c(n)},className:"btn btn-outline-danger btn-sm float-right"},a.a.createElement("i",{className:"fa fa-trash-o"})),a.a.createElement("button",{onClick:function(){return r(n)},className:"btn btn-outline-success btn-sm float-right"},a.a.createElement("i",{className:"fa fa-plus-circle"})),a.a.createElement("button",{onClick:function(){return o(n)},className:"btn btn-outline-warning btn-sm float-right"},a.a.createElement("i",{className:"fa fa-minus-circle"}))))}))),a.a.createElement("div",{className:"total"},"Total: $",n))}),D=function(){return a.a.createElement("div",null,a.a.createElement(R,null),a.a.createElement(I,null))},B=function(){return a.a.createElement("div",null,"Cart Page")},F=n(22),L=n.n(F),M=n(29);var H=function(){return function(){var e=Object(M.a)(L.a.mark(function e(t){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FETCH_NEWS_PENDING"}),e.next=3,fetch("https://swapi.dev/api/people").then(function(e){return e.json()}).then(function(e){if(e.error)throw e.error;return t({type:"FETCH_NEWS_SUCCESS",payload:e.results}),e}).catch(function(e){t(_(e))});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},K=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state={hasError:!1},n}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement(N,null):this.props.children}}]),t}(r.Component),P=function(e){function t(e){return Object(d.a)(this,t),Object(p.a)(this,Object(f.a)(t).call(this,e))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.fetchProducts)()}},{key:"render",value:function(){var e=this.props,t=e.pending,n=e.error,r=e.products;return console.log(r),t?a.a.createElement(S,null):n?a.a.createElement(K,null):a.a.createElement("div",{className:"product-list-wrapper"},a.a.createElement(U,{products:r}))}}]),t}(r.Component),U=function(e){var t=e.products.map(function(e,t){return a.a.createElement("li",{key:t},e.name)});return a.a.createElement("ul",null,t)},x=j(C(),Object(l.b)(function(e){var t=e.newsList;return{products:t.products,pending:t.pending,error:t.error}},function(e){return Object(h.bindActionCreators)({fetchProducts:H},e)}))(P),W=(n(60),j(C(),Object(l.b)(function(e){var t=e.newsList;return{products:t.products,pending:t.pending,error:t.error}},function(e){return Object(h.bindActionCreators)({fetchProducts:H},e)}))(function(e){e.products;var t=e.fetchProducts;e.error,e.pending;return a.a.createElement("div",{className:"product-list-wrapper"},a.a.createElement("button",{onClick:t},"Click here"))})),V=function(){return a.a.createElement("main",{role:"main",className:"container"},a.a.createElement(s,{numItems:5,total:210}),a.a.createElement(u.c,null,a.a.createElement(u.a,{path:"/",component:D,exact:!0}),a.a.createElement(u.a,{path:"/cart",component:B})),a.a.createElement(x,null),a.a.createElement(W,null))},J=function(){function e(){Object(d.a)(this,e),this.data=[{id:1,title:"Production-Ready Microservices",author:"Susan J. Fowler",price:32,coverImage:"https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg"},{id:2,title:"Release It!",author:"Michael T. Nygard",price:45,coverImage:"https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg"}]}return Object(m.a)(e,[{key:"getBooks",value:function(){var e=this;return new Promise(function(t,n){setTimeout(function(){Math.random()>.75?n(new Error("Something bad happened")):t(e.data)},700)})}}]),e}(),$=n(30),z=n(31),G=function(e,t){if(void 0===e)return{books:[],loading:!0,error:null};switch(t.type){case"FETCH_BOOKS_REQUEST":return{books:[],loading:!0,error:null};case"FETCH_BOOKS_SUCCESS":return{books:t.payload,loading:!1,error:null};case"FETCH_BOOKS_FAILURE":return{books:[],loading:!1,error:t.payload};default:return e.bookList}},Q=n(17),X=function(e,t,n){return 0===t.count?[].concat(Object(Q.a)(e.slice(0,n)),Object(Q.a)(e.slice(n+1))):-1===n?[].concat(Object(Q.a)(e),[t]):[].concat(Object(Q.a)(e.slice(0,n)),[t],Object(Q.a)(e.slice(n+1)))},Y=function(e,t,n){var r=e.bookList.books,a=e.shoppingCart.cartItems,o=r.find(function(e){return e.id===t}),c=a.findIndex(function(e){return e.id===t}),l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=t.id,a=void 0===r?e.id:r,o=t.count,c=void 0===o?0:o,l=t.title,i=void 0===l?e.title:l,u=t.total;return{id:a,title:i,count:c+n,total:(void 0===u?0:u)+n*e.price}}(o,a[c],n);return{orderTotal:0,cartItems:X(a,l,c)}},q=function(e,t){if(void 0===e)return{cartItems:[],orderTotal:0};switch(t.type){case"BOOK_ADDED_TO_CART":return Y(e,t.payload,1);case"BOOK_REMOVED_FROM_CART":return Y(e,t.payload,-1);case"ALL_BOOKS_REMOVED_FROM_CART":var n=e.shoppingCart.cartItems.find(function(e){return e.id===t.payload});return Y(e,t.payload,-n.count);default:return e.shoppingCart}},Z={pending:!1,products:[{name:"Luke Skywalker",height:"172",mass:"77",hair_color:"blond",skin_color:"fair"},{name:"C-3PO",height:"167",mass:"75",hair_color:"n/a",skin_color:"gold"}],error:null};function ee(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_NEWS_PENDING":return{pending:!0,products:e.products,error:null};case"FETCH_NEWS_SUCCESS":return{pending:!1,products:t.payload,error:null};case"FETCH_NEWS_ERROR":return{pending:!1,products:e.products,error:t.error};default:return Z}}var te=function(e,t){return{bookList:G(e,t),shoppingCart:q(e,t),newsList:ee(e,t)}},ne=Object(z.composeWithDevTools)({trace:!0,traceLimit:25}),re=Object(h.createStore)(te,ne(Object(h.applyMiddleware)($.a,function(){return function(e){return function(t){return e("string"===typeof t?{type:t}:t)}}},function(e){var t=e.getState;return function(e){return function(n){return console.log(n.type,t()),e(n)}}}))),ae=new J;c.a.render(a.a.createElement(l.a,{store:re},a.a.createElement(K,null,a.a.createElement(O,{value:ae},a.a.createElement(i.a,null,a.a.createElement(V,null))))),document.getElementById("root"))}},[[32,2,1]]]);
//# sourceMappingURL=main.8597ed24.chunk.js.map
