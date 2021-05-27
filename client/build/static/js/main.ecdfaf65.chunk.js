(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{76:function(e,t,a){},83:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),r=a(55),s=a.n(r),i=(a(76),a(14)),o=a(10),d=a(93),l=a(67),u=a(6),j=a(91),b=a(5),h=a(68),m=a(29),p="UPDATE_PRODUCTS",O="UPDATE_CATEGORIES",v="UPDATE_CURRENT_CATEGORY",g="ADD_TO_CART",x="ADD_MULTIPLE_TO_CART",f="REMOVE_FROM_CART",w="UPDATE_CART_QUANTITY",y="TOGGLE_CART",A=function(e,t){switch(t.type){case p:return Object(b.a)(Object(b.a)({},e),{},{products:Object(m.a)(t.products)});case O:return Object(b.a)(Object(b.a)({},e),{},{categories:Object(m.a)(t.categories)});case v:return Object(b.a)(Object(b.a)({},e),{},{currentCategory:t.currentCategory});case g:return Object(b.a)(Object(b.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(m.a)(e.cart),[t.product])});case x:return Object(b.a)(Object(b.a)({},e),{},{cart:[].concat(Object(m.a)(e.cart),Object(m.a)(t.products))});case f:var a=e.cart.filter((function(e){return e._id!==t._id}));return Object(b.a)(Object(b.a)({},e),{},{cartOpen:a.length>0,cart:a});case w:return Object(b.a)(Object(b.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case"CLEAR_CART":return Object(b.a)(Object(b.a)({},e),{},{cartOpen:!1,cart:[]});case y:return Object(b.a)(Object(b.a)({},e),{},{cartOpen:!e.cartOpen});default:return e}};var N=a(1),C=Object(c.createContext)(),B=C.Provider,k=function(e){e.value;var t,a=Object(h.a)(e,["value"]),n=(t={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(c.useReducer)(A,t)),r=Object(u.a)(n,2),s=r[0],i=r[1];return Object(N.jsx)(B,Object(b.a)({value:[s,i]},a))},I=function(){return Object(c.useContext)(C)};function E(e,t,a){return new Promise((function(c,n){var r,s,i,o=window.indexedDB.open("webdev",1);o.onupgradeneeded=function(e){var t=o.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},o.onerror=function(e){console.log("There was an error")},o.onsuccess=function(n){switch(r=o.result,s=r.transaction(e,"readwrite"),i=s.objectStore(e),r.onerror=function(e){console.log("error",e)},t){case"put":i.put(a),c(a);break;case"get":var d=i.getAll();d.onsuccess=function(){c(d.result)};break;case"delete":i.delete(a._id);break;default:console.log("No valid method")}s.oncomplete=function(){r.close()}}}))}var Q=E;var T,U,S,D,R=function(e){var t=e.image,a=e.name,c=e._id,n=e.price,r=I(),s=Object(u.a)(r,2),o=s[0];return s[1],o.cart,Object(N.jsxs)("div",{className:"card px-1 py-1 col-md-3",id:"hvr-float-shadow",children:[Object(N.jsx)(i.b,{to:"/products/".concat(c),children:Object(N.jsx)("img",{src:"/images/".concat(t),alt:a,id:"cardImage"})}),Object(N.jsx)("div",{className:"container",children:Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("div",{className:"cardTitle",children:[Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("h5",{children:[a," "]})}),Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("h5",{children:[" $",n]})})]})})})]})},G=a(26),H=a(23),q=Object(H.a)(T||(T=Object(G.a)(["\n    query getProducts($category: ID) {\n        products(category: $category) {\n            _id\n            name\n            description\n            price\n            image\n            category {\n                _id\n            }\n        }\n    }\n"]))),P=Object(H.a)(U||(U=Object(G.a)(["\n    {\n        categories {\n            _id\n            name\n        }\n    }\n"]))),F=Object(H.a)(S||(S=Object(G.a)(["\n    query getCheckout($products: [ID]!){\n        checkout(products: $products) {\n            session\n        }\n    }\n"]))),z=Object(H.a)(D||(D=Object(G.a)(["\n    {\n        user{\n            firstName\n            lastName\n            orders{\n                _id\n                purchaseDate\n                products{\n                    _id\n                    name\n                    description\n                    price\n                    quantity\n                    image\n                }\n            }\n        }\n    }\n"]))),K=a.p+"static/media/spinner.689d9a07.gif";var L=function(){var e=I(),t=Object(u.a)(e,2),a=t[0],n=t[1],r=a.currentCategory,s=Object(j.a)(q),i=s.loading,o=s.data;return Object(c.useEffect)((function(){o?(n({type:p,products:o.products}),o.products.forEach((function(e){Q("products","put",e)}))):i||Q("products","get").then((function(e){n({type:p,products:e})}))}),[o,i,n]),Object(N.jsxs)("div",{className:" container",children:[a.products.length?Object(N.jsx)("div",{className:"row",children:(r?a.products.filter((function(e){return e.category._id===r})):a.products).map((function(e){return Object(N.jsx)(R,{_id:e._id,image:e.image,name:e.name,price:e.price,className:"col-sm",id:"cards"},e._id)}))}):Object(N.jsx)("h3",{children:" Your cart is empty!"}),i?Object(N.jsx)("img",{src:K,alt:"loading"}):null]})};var X=a(18),J=a.n(X),M=a(28),W=function(e){var t=e.item,a=I(),c=Object(u.a)(a,2)[1];return Object(N.jsxs)("div",{className:"flex-row allCart",children:[Object(N.jsx)("div",{children:Object(N.jsx)("img",{src:"/images/".concat(t.image),alt:t.name,id:"cartImage"})}),Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{className:"allCart",children:[t.name," "]}),Object(N.jsxs)("div",{className:"allCart",children:["$",t.price]}),"WebDev 2020-2021 Tank"==t.name||"WebDev 2020-2021 Tshirt"==t.name?Object(N.jsxs)("div",{className:"allCart",children:["Size: ",t.size]}):null,Object(N.jsxs)("div",{children:[Object(N.jsx)("span",{className:"allCart",children:"Quantity: "}),Object(N.jsx)("input",{className:"allCart",type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var a=e.target.value;"0"===a?(c({type:f,_id:t._id}),E("cart","delete",Object(b.a)({},t))):(c({type:w,_id:t._id,purchaseQuantity:parseInt(a)}),E("cart","put",Object(b.a)(Object(b.a)({},t),{},{purchaseQuantity:parseInt(a)})))}}),Object(N.jsx)("span",{onClick:function(){return function(e){c({type:f,_id:e._id}),E("cart","delete",Object(b.a)({},e))}(t)},role:"img","aria-label":"trash",id:"trashCan",children:"\ud83d\uddd1\ufe0f"})]})]})]})},Y=a(59),Z=a(60),V=a(47),_=new(function(){function e(){Object(Y.a)(this,e)}return Object(Z.a)(e,[{key:"getProfile",value:function(){return Object(V.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return Object(V.a)(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),$=(a(83),a(92)),ee=a(61),te=Object(ee.a)("pk_test_TYooMQauvdEDq54NiTphI7jx"),ae=function(){var e=I(),t=Object(u.a)(e,2),a=t[0],n=t[1],r=Object($.a)(F),s=Object(u.a)(r,2),i=s[0],o=s[1].data;function d(){n({type:y})}if(Object(c.useEffect)((function(){o&&te.then((function(e){e.redirectToCheckout({sessionId:o.checkout.session})}))}),[o]),Object(c.useEffect)((function(){function e(){return(e=Object(M.a)(J.a.mark((function e(){var t;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E("cart","get");case 2:t=e.sent,n({type:x,products:Object(m.a)(t)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.cart.length||function(){e.apply(this,arguments)}()}),[a.cart.length,n]),!a.cartOpen)return Object(N.jsx)("div",{id:"closedCartBubble",className:"cart-closed",onClick:d,children:Object(N.jsx)("span",{role:"img","aria-label":"trash",children:"\ud83d\uded2"})});return Object(N.jsxs)("div",{className:"cart",id:"cart",children:[Object(N.jsx)("div",{className:"close",id:"cartClose",onClick:d,children:"X"}),Object(N.jsx)("h2",{children:Object(N.jsx)("b",{className:"allCart",children:"Shopping Cart"})}),a.cart.length?Object(N.jsxs)("div",{children:[a.cart.map((function(e){return Object(N.jsx)(W,{item:e},e._id)})),Object(N.jsxs)("div",{className:"flex-row space-between",children:[Object(N.jsxs)("strong",{className:"allCart",children:["Total: $",function(){var e=0;return a.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()]}),_.loggedIn()?Object(N.jsx)("button",{className:"allCart",onClick:function(){var e=[];a.cart.forEach((function(t){for(var a=0;a<t.purchaseQuantity;a++)e.push(t._id)})),i({variables:{products:e}})},children:"Checkout"}):Object(N.jsx)("span",{children:"(log in to check out)"})]})]}):Object(N.jsx)("h3",{children:"Your cart is empty! Go add some stuff!"})]})},ce=function(){return Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)(L,{}),Object(N.jsx)(ae,{})]})};var ne=function(){var e=I(),t=Object(u.a)(e,2),a=t[0],n=t[1],r=Object(o.f)().id,s=Object(c.useState)({}),d=Object(u.a)(s,2),l=d[0],h=d[1],m=Object(j.a)(q),O=m.loading,v=m.data,x=a.products,f=a.cart,y=Object(c.useState)(""),A=Object(u.a)(y,2),C=A[0],B=A[1];return Object(c.useEffect)((function(){x.length?(console.log(x.find((function(e){return e._id===r}))),h(x.find((function(e){return e._id===r})))):v?(n({type:p,products:v.products}),v.products.forEach((function(e){E("products","put",e)}))):O||E("products","get").then((function(e){n({type:p,products:e})}))}),[x,v,O,n,r]),Object(N.jsxs)(N.Fragment,{children:[l?Object(N.jsxs)("div",{className:"container-fluid",children:[Object(N.jsx)(i.b,{to:"/",id:"backLink",children:Object(N.jsx)("span",{id:"back",children:" \u2190 Back to Products"})}),Object(N.jsxs)("div",{className:"detail-row",children:[Object(N.jsx)("div",{className:"col-5 small-container",children:Object(N.jsx)("img",{src:"/images/".concat(l.image),alt:l.name,id:"detailImage",className:"animate__animated animate__backInDown",width:"100%"})}),Object(N.jsxs)("div",{className:"col-5",children:[Object(N.jsx)("h1",{className:"animate__animated animate__lightSpeedInRight",children:l.name}),Object(N.jsxs)("h3",{children:["Price: $",l.price," "]}),Object(N.jsxs)("div",{className:"row justify-content-start py-4",children:["60ae9865152ba173c0ee0898"==l._id||"60ae9865152ba173c0ee0899"==l._id?Object(N.jsx)("div",{children:Object(N.jsxs)("select",{className:"form-select dropdown","aria-label":"Default select example",onChange:function(e){console.log(e.target.value),B(e.target.value)},id:"dropdown",children:[Object(N.jsx)("option",{children:"Select Size"}),Object(N.jsx)("option",{value:"Small",children:"Small"}),Object(N.jsx)("option",{value:"Medium",children:"Medium"}),Object(N.jsx)("option",{value:"Large",children:"Large"}),Object(N.jsx)("option",{value:"XL",children:"XL"})]})}):null,Object(N.jsx)("div",{className:"px-4",children:Object(N.jsx)("button",{className:"hvr-pulse-grow",id:"addToCartBtn",onClick:function(){var e=f.find((function(e){return e._id===r}));e?(n({type:w,_id:r,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),E("cart","put",Object(b.a)(Object(b.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1}))):(n({type:g,product:Object(b.a)(Object(b.a)({},l),{},{purchaseQuantity:1,size:C})}),E("cart","put",Object(b.a)(Object(b.a)({},l),{},{purchaseQuantity:1})))},children:"Add To Cart"})})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("h3",{children:"Product Details:"}),Object(N.jsx)("p",{children:l.description})]})]})]})]}):null,O?Object(N.jsx)("img",{src:K,alt:"loading spinner"}):null,Object(N.jsx)(ae,{})]})};var re,se,ie,oe=function(e){var t=e.children;return Object(N.jsx)("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"},children:t})},de=function(){return Object(N.jsx)("div",{children:Object(N.jsxs)(oe,{children:[Object(N.jsx)("h2",{children:" 4040 Page Not Found!"}),Object(N.jsx)("h1",{children:Object(N.jsx)("span",{role:"img","aria-label":"Rolling eyes",children:"\ud83d\ude44"})})]})})},le=a(32),ue=a(94),je=Object(H.a)(re||(re=Object(G.a)(["\n    mutation login($email: String!, $password: String!) {\n        login(email: $email, password: $password){\n            token\n            user{ \n                _id\n            }\n        }\n    }\n"]))),be=Object(H.a)(se||(se=Object(G.a)(["\n    mutation addOrder($products: [ID]!){\n        addOrder(products: $products) {\n            purchaseDate\n            products {\n                _id\n                name \n                description\n                price\n                quantity\n                category {\n                    name\n                }\n            }\n        }\n    }\n"]))),he=Object(H.a)(ie||(ie=Object(G.a)(["\n    mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!){\n        addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password){\n            token\n            user{\n                _id\n            }\n        }\n    }\n"])));var me=function(e){var t=Object(c.useState)({emai:"",password:""}),a=Object(u.a)(t,2),n=a[0],r=a[1],s=Object(ue.a)(je),i=Object(u.a)(s,2),o=i[0],d=i[1].error,l=function(){var e=Object(M.a)(J.a.mark((function e(t){var a,c;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,o({variables:{email:n.email,password:n.password}});case 4:a=e.sent,c=a.data.login.token,_.login(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.target,a=t.name,c=t.value;r(Object(b.a)(Object(b.a)({},n),{},Object(le.a)({},a,c)))};return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"container my-1",id:"signCard",children:[Object(N.jsx)("div",{className:"card-header",children:Object(N.jsx)("h2",{children:" Login"})}),Object(N.jsx)("div",{className:"card-body",children:Object(N.jsxs)("form",{onSubmit:l,children:[Object(N.jsxs)("div",{className:"row my-2",id:"signup-form",children:[Object(N.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(N.jsx)("input",{className:"input",name:"email",type:"email",id:"email",onChange:j})]}),Object(N.jsxs)("div",{className:"row my-2",id:"signup-form",children:[Object(N.jsx)("label",{htmlFor:"pwd",children:"Password: "}),Object(N.jsx)("input",{className:"input",name:"password",type:"password",id:"password",onChange:j})]}),d?Object(N.jsx)("div",{children:Object(N.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(N.jsx)("div",{className:"flex-row flex-end",children:Object(N.jsx)("button",{type:"submit",id:"submitBtn",children:"Submit"})}),Object(N.jsx)("div",{})]})})]})})};var pe=function(e){var t=Object(c.useState)({email:"",password:""}),a=Object(u.a)(t,2),n=a[0],r=a[1],s=Object(ue.a)(he),i=Object(u.a)(s,1)[0],o=function(){var e=Object(M.a)(J.a.mark((function e(t){var a,c;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,i({variables:{email:n.email,password:n.password,firstName:n.firstName,lastName:n.lastName}});case 3:a=e.sent,c=a.data.addUser.token,_.login(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.target,a=t.name,c=t.value;r(Object(b.a)(Object(b.a)({},n),{},Object(le.a)({},a,c)))};return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"container my-1",id:"signCard",children:[Object(N.jsx)("div",{className:"card-header",children:Object(N.jsx)("h2",{children:"Signup"})}),Object(N.jsx)("div",{className:"card-body",children:Object(N.jsxs)("form",{onSubmit:o,children:[Object(N.jsxs)("div",{className:"row  my-2",id:"signup-form",children:[Object(N.jsx)("label",{htmlFor:"firstName",children:"First Name: "}),Object(N.jsx)("input",{className:"input",name:"firstName",type:"firstName",id:"firstName",onChange:d})]}),Object(N.jsxs)("div",{className:"row my-2",id:"signup-form",children:[Object(N.jsx)("label",{htmlFor:"lastName",children:"Last Name: "}),Object(N.jsx)("input",{className:"input",name:"lastName",type:"lastName",id:"lastName",onChange:d})]}),Object(N.jsxs)("div",{className:"row  my-2",id:"signup-form",children:[Object(N.jsx)("label",{htmlFor:"email",children:"Email: "}),Object(N.jsx)("input",{className:"input",name:"email",type:"email",id:"email",onChange:d})]}),Object(N.jsxs)("div",{className:"row  my-2",id:"signup-form",children:[Object(N.jsx)("label",{htmlFor:"firstName",children:"Password: "}),Object(N.jsx)("input",{className:"input",name:"password",type:"password",id:"pwd",onChange:d})]}),Object(N.jsx)("div",{className:"row flex-end",children:Object(N.jsx)("button",{type:"submit",id:"submitBtn",children:"Submit"})})]})})]})})},Oe=a.p+"static/media/WebDev logo.1396b5a9.png";var ve=function(e){e.setCategory;var t=I(),a=Object(u.a)(t,2),n=a[0],r=a[1],s=n.categories,o=Object(j.a)(P),d=o.loading,l=o.data;window.onscroll=function(){document.body.scrollTop>50||document.documentElement.scrollTop>75?(document.getElementById("navBar").setAttribute("class","endState"),document.getElementById("navBarItems").setAttribute("class","displaynone"),document.getElementById("navTitle").setAttribute("class","displayhidden"),document.getElementById("navGreeting").setAttribute("class","displayhidden"),document.getElementById("holder").setAttribute("class","displayhidden"),document.getElementById("closedCartBubble").setAttribute("class","cart-closed2")):(document.getElementById("navBar").setAttribute("class","initialState"),document.getElementById("navBarItems").setAttribute("class","navBarItems"),document.getElementById("navTitle").setAttribute("class","navTitle"),document.getElementById("closedCartBubble").setAttribute("class","cart-closed "))},Object(c.useEffect)((function(){l?(r({type:O,categories:l.categories}),l.categories.forEach((function(e){E("categories","put",e)}))):d||E("categories","get").then((function(e){r({type:O,categories:e})}))}),[d,l,r]);var b=function(e){r({type:v,currentCategory:e})};return Object(N.jsxs)("header",{id:"navHeader",className:"navHeader",children:[Object(N.jsx)("div",{id:"navTitle",className:"navTitle",children:Object(N.jsxs)(i.b,{to:"/",onClick:function(){r({type:v,currentCategory:null})},className:"navLogo",children:[Object(N.jsx)("img",{src:Oe,className:"roundicon",alt:"web dev logo",id:"icon"}),Object(N.jsx)("span",{className:"title",children:"2020-2021 WebDev Gifts"})]})}),Object(N.jsx)("div",{id:"navBar",onClick:function(){document.getElementById("navBar").classList.contains("endState")&&(console.log("closed"),document.getElementById("navBar").setAttribute("class","initialState2"),document.getElementById("navBarItems").setAttribute("class","navBarItems"))},className:"initialState",children:_.loggedIn()?Object(N.jsxs)("div",{id:"navBarItems",className:"navBarItems",children:[s.map((function(e){return Object(N.jsxs)("button",{className:"navButton",onClick:function(){b(e._id)},children:[" ",e.name]},e._id)})),Object(N.jsx)(i.b,{className:"navButton",to:"/orderHistory",children:Object(N.jsx)("button",{className:"navButton",children:"   Order History"})}),Object(N.jsx)("button",{className:"navButton",href:"/",onClick:function(){return _.logout()},children:"Logout"})]}):Object(N.jsxs)("div",{id:"navBarItems",className:"navBarItems",children:[s.map((function(e){return Object(N.jsxs)("button",{className:"navButton",onClick:function(){b(e._id)},children:[" ",e.name]},e._id)})),Object(N.jsx)("button",{className:"navButton",children:Object(N.jsx)(i.b,{className:"navButton",to:"/signup",children:"Signup"})}),Object(N.jsx)("button",{className:"navButton",children:Object(N.jsx)(i.b,{className:"navButton",to:"/login",children:"Login"})})]})}),Object(N.jsx)("div",{id:"holder",className:"holder",children:Object(N.jsxs)("p",{id:"navGreeting",className:"greeting",children:["Congrats! It was a crazy 6 Months but you are now a Full Stack Developer.",Object(N.jsx)("br",{})," Now get yourself some new gear to sport your accomplishments."]})})]})};var ge=function(){var e=Object(ue.a)(be),t=Object(u.a)(e,1)[0];return Object(c.useEffect)((function(){function e(){return(e=Object(M.a)(J.a.mark((function e(){var a,c,n,r;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E("cart","get");case 2:if(a=e.sent,!(c=a.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:c}});case 7:n=e.sent,r=n.data,r.addOrder.products.forEach((function(e){E("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),5e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(N.jsx)("div",{children:Object(N.jsx)(oe,{children:Object(N.jsx)("div",{className:"successBackground",children:Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)("div",{className:"row",children:Object(N.jsx)("h1",{children:"Success!"})}),Object(N.jsx)("div",{className:"row",children:Object(N.jsx)("h2",{children:"Thank you for your purchase!"})}),Object(N.jsx)("div",{className:"row",children:Object(N.jsx)("h2",{children:"You will now be redirected to the home page"})})]})})})})},xe=function(){};var fe=function(){return Object(N.jsx)("footer",{id:"links",className:"container",children:Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"row",id:"footer",children:Object(N.jsx)("h3",{children:"\xa9 2021 Created by Adam Ramos, John Halley, and Mark Peterson"})}),Object(N.jsx)("div",{className:"row",id:"react",children:Object(N.jsxs)("span",{children:["Built with React",Object(N.jsxs)("a",{href:"https://reactjs.org/",target:"_blank",rel:"noreferrer",children:[Object(N.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlApw1AAAAh1BMVEUAAABk2vth2vxh2/xh2vxh2/xh2vth2/xh2vth2vxh2/xh2vxh2vxh2/xh2vxh2vxh2vth2vth2vth2vxg2vth2vth2/th2vxh2vxh2vxh2vxh2vtg2vth2vth2/xh2vxh2/xh2vth2/xh2vth2vth2/th2vth2vtm6P9h3P5j3/9l4/9o6/9I1caUAAAAJ3RSTlMACPsj9g8s4NjrX5OArPGcRcDQTBwXbj9Y5bM0UWe5eXTKOqTFh4yMjSHNAAAT5ElEQVR42uxb6XKbMBAuAhtsLhs7PvAVx2nQwfs/Xy0s8SmVscgUt/2RzUwnAaTV3qvd7Y9v+IZv+IZv+IZv+IZv+Cp4LfzpRj/kHrefvwcmrj9C7Vl/PhWAxdtNTx9xnBwWvufA7Dj8craK0+MxzU+LlyeTALzrPKzoDXgQ5Zvll2jAPt5b8p5xqkBM0sUTKQDa3ZHXvCI3qJio6STdjIC6L/fHScRryiqit+JUzHfPogCIT4xWpAIQQjil4U9fvu5//FlJqLgurgwgFWWvzxECMOc1U0gBDfeCfAzcruMv3gVlOD12YnX8XDW61BqrjbrKfTdy+cFsLmjVtU8dD08AcCc4P2ngMwnBT4ctyJfjlJvH1zYACg5DUwDkMw51FdJxSGM2SaDbKSi4H7YSoo4P7Wug1UxWjQemAMgjobHULDzP59GE1590mXB6hB7d056osSGwoRZZUeZ5WhDK1EM6x5JhCXilRB2TxbuRfLRcvx4D6U3AURqsNAU2B2IujE855VG8WN7e+h+Mq3d0M6QIgH4U3jAQns2MF/7qzKUCQI+OSxzAZP9bVBukcprla88IyrNA7U/PWDYkAQdKlJKumwwMidAsNYMDodlGvrEjiDCOX2+TpZlJeYaJidlTrOCdKgadPm3fkLJLOSUEzG29OeRX1oywVkqTpHVY+OZDY7jg1XACGCvkIvLuxab1nPKWgqo++/IpPngLqSEiFiNzM4nc3mTAJ/L10AScNHuUn7ZImG6h4oRmUAPv+o4JAiOZ7+TD7jhDnmLG84YAIrnj3feRo1xACJzLtEa9+aBQn8ZNdWzhE3b7Jh+KAOz9MuG3vdMHbn4R1lAjmstn0kzLmhCwH4Gik0uiwDdDEbDmyklPza0tLb7Ao5L66EkTfylAlWAn+ZlLT1kAExrYiTJyP9BD2wMKQyiuxjjeGg/CN/mRm018NjgB8Y2N0gd5j70VGB7Qrb/LRNAqVTpSi52Kuhrcio837aRHx85X+i5tVCN0kgn9OxeJW7PPgjwpqY4UAa6d5etXzttTM/2bCPY/3GtThSYd7OCIMcQpW3ijoHX7UH9HloxgPGQ6BA+d8f4hxmstF+c/v/RauFJ+NISpDZVIsC+4B+U7AXXp9Vs3VeFyOxqYgJ3OFF2FDyRvHOfncd8L/0LcTGeyHJiAtagQBnqt2AsQwNZY5by1DhrJsDHFxv0WVMyQQNBXcGum8Iz/DQGwmYCb130x6bnu7b8g4Oq0JqYfbdzKVan/BwKIJMDtg0JKoEHNOhrBrwyjQsMbMZKJMw309Va0edFcvuppxDzzh3ajTLHmrcfGqY4BpE4u+D3/iht9GTqQEQQyZzqAM8cyCwx0NE6wdoBANnwqgZuDPv9F6pOsZuAy9G9SCSRzuNJ3a3F7+z3elka6osfYm2t1gmRuUFB1UahB5wmWE070fUxysXkkiA4HL47luSKgxMNBy1qoF3Q7IH3YUB0WUY3Jwu3j9aWBZlhI+9zIvLYDQjgc7tW38H79C9zIPgYlAK6F4E7cXcBugO/1d7BNGFF3Afk5d2IcAQ66o6igz/mKz1ATuAJjuwcb+NpbLwYnYM+Bv5t/gsCB4keuONatbcDFdwXi4bs0uJKJrkDgKTvp8IJe1BKH2l4vOQ9VWtzyG3rbj3pew2MYAJ+MvaU/lrDbyX/95dJbBwzqpaY8PLv6pEuLw8NZoOABr2lQsWivMGwSTSZZQIhUuYqQIMgmkyhrX1cLHB17oDaKAuyQIrjQ1g0B761RNj3FZREaVzAuOOcMwK8g8JpVYXHMk+l6+Rsdo9ARLgdo8XF5pVH9JX+2io9XztJby9UA1fjF3+oBKJRrWBYd49XM93SrZ1exZ/UHEIzoomnt7ZM0ygStqVDzGtVXQC1hzQZZlCb7hooNKsjDE7DMFHc+/ENeBKJhuvvgbkKkOGoRRJeVnysph8/o8XmFUOypqGZ7o89/BHK5FgatdIOmHL5BcwUdTBl7xHcCsJ86FipukPp1sOEtOIjltOB3Wcgq2zobEIIrEMZDbgnABv4+9RXqgZi/PJQZ5Q7G3bS3eC8v8c/TYbrZL2az2Xp9/Wex30wPr0mcp/NziG1YpwkJmpWH5R9SgObj/pJhmsQAeXRO65qjhVR6zsJDSY2GeE35XTIIozRLNyMnDW7mj3+GgvLfUGirEyQ85odDwCo0qG/ZWwNI5hpQ0pxwJYBgOs2PYePPQIU5CyK28dhBgmuucF9WVA8FAZho5hXT034sN89p3zETFB5Ut0dGw8UpLTLRBBR7kq06bjzQ8FXdORQCqmPAle/Jwvd0ok3VU2QwrjaSJri99PiLpNzew1RRGq0wVvGl459C+vuAop6WGKmPmh+ZvyAH7tszR/FEp1XLLSfIQ4BU0G2C0Yrex38NP2s+kXalldc35m0+tEag6tNfidTVt2mIv2n/RDVmWMPk1E8KaFeHlP9+epJeFOdqeWPFRQdVICeg9oCbl374U9864zSgepIN40UHCME9W/xOBTE1R1AyX/k/Rpkd6o+UoG7du84XMGJRfRYqEbqaxPSo52Lhcs8zRYGzCBdz8XkpL06+fKVPy7KlFr3MH3FT+2pujsQZ80h13jzxX8+8USXYgshfXCTI1/uwroxlvM7ytTbZ1W8zQ8qCu8st6qGNpVDreKgdQqL33utV63xSC4OEqp5snHOpXmwov9Sd8KSG01WNGjoErKpqbW+GX7oKMKT+qd6eBeaRNMbla0TFp0HBHJt1TWpg6opQWkw9HABzc1zqEO4Id0KAltBopE5jFUFrApcGZ4A7t2LatBCU4Eh1tHtUGFsE1CS32AC5PXeGUxCO1hlw+4f8Pdxuw/d82liQFQww4dfKEs4Y+2wKUylEZQ0H49sV58ZkWzi10EKH5mjb4BJu7jUrgyZ7bvLroIQHsaqNfC0pKOyKEKbxwjYhYITRzpmphFbGZFtyNweZt7dWuHNYMAg9yiSkBUZFCRnBjjUzmigGXbRzsgSqQSr6oQ5mjwxCe0pMtll8U17zx0xU1X2xH9oJb2AlED3aYcrvqOse3KpFgl8qPULt2nbNxugtkNkhSDNdS8Oe1v4wU0Aw5ef9eExEYUyMjjqTgwxCQNC5O9qAwcIHWQDdrT8pMUByU6sigJHWY1pZSL2YUYIo1kHBcl5XGiAocJYTbb0PRksQemnaCABqCy2rLfbf7Q140JvzXDiH/TxDsgSVIxinfsUPOH9HCR23easUDtdkA/n9Uz/Te+j8uvAe55iMof59tzVKOHsw2Qa2AdDOQqzroIDBWnQCirCDufKH5cGKE116MT8dtfdU5miNmBxGJLVzfRuQ6OBjhdfeq5sChR0BAwFWguhxKXlXOmR17ZDSdIElgpMWp6siBwYJ9P2Ra0XyqXOoEuoGnE1WZI3LdALDyBr650gTIB/HXKMqoHroTBkR1QXaZ9sxBSmNCZ1aDtkDvQu8tkZbCa3tsCXRpyyPux+uNoC5i4Dy3v95gF32GmixeFdSVw/Yzuigc5aT7QLgsEQAbXQAkijYE+Yg4n6TeZgHwkUYQy0PCMA8pe2IEIXdGmBOtIBtCJTusSpmCwDC6QZ4SlsEsO/+w7EvBgF9CzvI6EDyHxAAp9avr4RsBpdPr+8oje1q4DdM0twq1NEAj7+CHi1/dGfFr/bOdDttGIjCRZjF7EvYEpKwxpLs93++1ljwGYSRaUSXc5gfbRKwLVma0ejOndHOca2lqQyabddt4an2AJTnyRFMXuPeSAGjrzwySLYOsnaZ0WFhgikUFacvgxNmJlV8FzqIrWfpwNVzdIA9AS+Dt1EWl4SBhykraYcAYQ2vzFplisV2+BkA1lb3+OPNWXNIOE1ZhXiGvYlNwXZdfh2jNezonRNIKNx4y/oJDUnbhe4z7pZZLxR4UAzAfe70y+J0BVaXqZtaCe7hUuFr067IDhHRsDEOu3/F7W/Ic6OLZYQZySy6qcLaDBpuLctM2f1MQ7OlRKNupebEwra5KJ+hGwIB30qmaSw0r+0c9QyiqxLw1phumWasNQDHDeCc5CheBbAWCWtfYHJFvrRIWgf0gZeBHg+T4Hr7IY0Cj2b3GifAKoXt38da3IC2oJxHcl1QpQO1U8GkEurrm5raLrkSuhbJsGKvGUYzaqET2KrvSBBMXq994+P04oSMPit0wcL1DQq+stwwkhHRZKB97nhu+mSrGFokO1BIwVDyKs6HPodNjy7xZFYMs+akNh9o6wLACbMKOCdKkAxBKwkXG0PsBHd/zEaglQylTZtMBBZPdwnz5+0GPhkWVY8t+H+/SMH1I4FlQQ0AKKLoI/A63up5NZOYlpFUZ/egnfYTPJlqLxgrdjIEbEDU8pHmeb/ZU3Gses0t9YeQkSRQeTPAUW2DdRchnwy9iEW+2ku/bj7AjcDcGY2w9uPEh6pvs9kbVawuEVRc4Hz47aKOUjuQKh+gmd5EPk2QjO6K7iz9gPWOtGjmMeiEHePjR9shoYYE/P50DtHjzVbkmx9ZIbLC+id0QQ/fU9PGG2cGsQND+RDYFAUeIe6PWdWwQxmLtDXUUuWBr5gg5a04/UUFGikX/RmrGAsm6x+u8J2FfkRyALqwqgzJpr3IyCbM6Iajihg1gIKzK7NYfT1VPGZQfmHDUS7PgOSqyxDuIp3JnZGSOjp7j2JfKV0Eq7rVpgsUAhK76VwoFnwiO0Ss764UBRrKH/V0uo6S+Pz5Mu7iHZTpwub11AX4KnnLXbHoS+4dtb0Gv1LcBtxen7gqNH/oZHrYi9/HQYMQAXxw1Gr0+K5yHMO8BmOkstnIk7AjO2vylxuFrUjgiyAqeO0MXk5vbpWUJaywjUGDzRUvg89uT/EMBj5Rr4O7WXOsIiG0HSSdTeG6/76ZVHihJcFB4olCZjjUZPbeX4fpvOEJEJV6/Tea/1vEv51Cobj1wcNRvVG3M68uI8WGCr6lvSRkn9DfZXXe2a576qJeGkwfPVr9Pv2V1fCrGae+5VXeeSKlWgQK1MclJKqoYKGkTODAn7c+XX6YO9+szjnehrHUBVRvpRVxyH5n2hoP3urVSa1WOUmtNqnWN4Nla9XpB3xbqwI6uJKmAuV3288w1Jb9hSqiz0eIIXiLoNcLG41G85f8+i/s9QKhTNoGXy6i76uw2zIcYI/8dTAQF/v+EK5VhrduOOxKHbrquBSAy0frbY5Vtv5ouM4+RMHFPo5O3EzV3bcQmmp1m+KQPCO+2wvansTBaDvfHtlI1Qfm0CTpjqLe+vpoHHqRKaL4nZYb+r6UovG6P2QBjY87PO9ZTHjA4MuV+rLTHYWm7qWK7umEyjQ6FuFu2xnXK6dyGsoC4X2msxIMRcNqb8tV/2PUCHRM+44ai5znqsQqaIxe29NxvYadINzhOQsIQAX4kmcaqVXfOprlQElLFPG/uFOv1q7epmtFrH0Jkaktf7poQD85JYOON2neTOt9+kve31ut5Xg2y1AkbsGF1kaBmLcXARHC5bR7AbZDL/PSzoc2LTNJsIs9q0/B7cdAXPczgUvJocmc7jxhxUVGki3/lf7I6HYT6mgBNswRiwRtYZz9CESj4tlpR3qUMpMADgXJ6i4ujf+yDHCrHFUNIA8SbTPFPVS+WgaCkKHgtXAw79Z9Z7C7fEGhCmkegrI7jsoeTe9WtFsqWdzkNFNQCPsKjF2aB+FVhpQqdAWiTzh4N/0dwAcM2EHIs0bKU61FJ7MT/JFQaOqDRG5KEziZ8FpYAvNQhhRFnARqZGa+SDoo6zJuHlVfaF4CHqYkUjIdH+tdotW3VSgT6bViKmWDADPdpsi4pToqwWKwU0SW/ktUsRtwNwPunzoRvzflUC9FpMl3B/Cy3I5HRtJGlF6WuvDln+hARtI+9gBS9j/RgUFpbqSKkMMC8D91IO1BfguJc/m3dGBS0gphS+cRokmc+jtWqDw5lqS6+GwKdUv1APq+HDxqJV6VI2jvpbqgW9ZKUtP9r8QQQkkid3sTEULZ5nKcVMp1/mF3GoU50V9Bn4O4R6DL6U57L7JF9at1iXkcntqvdEQRcE0WZ6k6Un47sHLVH0N9lYb79bk5Kx7vxKvWsYBD7FHQLrVxFFvsn4KzQsXTi/L9TQ6vKECQtf8TmVhhbpghzpqhuTqapxual/wBChHndRW8JsiongSauZ3Fc+usmUCGmytHWHDWUYGmAX55EtQLdLqQWJhntjVT/x8mGKnWJGsWcSK19z09FhpkzU67jqSAmoTCXhzjouWQ2HXBDNo+LkJjWzjTmGVTKhqpOzTRPkgnalPiwoK1vNeZI/GAIbCav/mI41wLQxat4qOM+AoDAP3Vt4Dcql71kg43O5BzmD7Dl/sOk+K4LeAXj2KTsybEJwy1LaJtsWL6nB8IefU4LwotnhwQ5dcG2TSZeLE8/nUy7htqG8RCzppxH6i2H0zMp0ujJQ5/y8uRdkLHo/a01Vq1h6E8oxQJqfaV+460C3fb9v6r24y1ePihfIM492QZS5lIfcEO3L3dXGmvHyqYJMmpBoyyghveXVKIDUI4yjCVPdaRGylDg3qUQNFHICp/3SyExTzaFR+sGUiT4uldoOjz6LPJE7SrZXfuxUebCrmwAEjPPehSmTDPyFzsq984XJZJuGMF8SwUfrnIbVAyEcMW62ppQuGe430PEukksFeQB/Rg0mkcyr3qjK/RG36SKXEfk222XwfxgeOV/qsbjOJjBCrjeP8xaiwazV23M375jcqgXFIdf/Y/duv1cLuaUdDokUL1rEkNd9nDGeN/pvUoMz99+04Usv5TwpOf8pSnPOUpT3nKU/5r+QnL/zLKJKcZgAAAAABJRU5ErkJggg==",alt:"react icon",style:{width:"2rem"}})," "]})]})})]})})};var we=function(){var e,t=Object(j.a)(z).data;return t&&(e=t.user),Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"container my-1",children:[Object(N.jsx)(i.b,{to:"/",children:"\u2190 Back to Products"}),e?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("h2",{children:["Order History for ",e.firstName," ",e.lastName]}),e.orders.map((function(e){return Object(N.jsxs)("div",{className:"my-2",children:[Object(N.jsx)("h3",{children:new Date(parseInt(e.purchaseDate)).toLocaleDateString()}),Object(N.jsx)("div",{className:"flex-row",children:e.products.map((function(e,t){var a=e._id,c=e.image,n=e.name,r=e.price;return Object(N.jsxs)("div",{className:"card px-1 py-1 col-md-3",children:[Object(N.jsxs)(i.b,{to:"/products/".concat(a),children:[Object(N.jsx)("img",{alt:n,id:"cardImage",src:"/images/".concat(c)}),Object(N.jsx)("p",{children:n})]}),Object(N.jsx)("div",{children:Object(N.jsxs)("span",{children:["$",r]})})]},t)}))})]},e._id)}))]}):null]})})},ye=new l.a({request:function(e){var t=localStorage.getItem("id_token");e.setContext({headers:{authorization:t?"Bearer ".concat(t):""}})},uri:"/graphql"});var Ae=function(){return Object(N.jsx)(d.a,{client:ye,children:Object(N.jsx)(i.a,{children:Object(N.jsxs)("div",{children:[Object(N.jsxs)(k,{children:[Object(N.jsx)(ve,{}),Object(N.jsxs)(o.c,{children:[Object(N.jsx)(o.a,{exact:!0,path:"/",component:ce}),Object(N.jsx)(o.a,{exact:!0,path:"/login",component:me}),Object(N.jsx)(o.a,{exact:!0,path:"/signup",component:pe}),Object(N.jsx)(o.a,{exact:!0,path:"/success",component:ge}),Object(N.jsx)(o.a,{exact:!0,path:"/orderHistory",component:we}),Object(N.jsx)(o.a,{exact:!0,path:"/products/:id",component:ne}),Object(N.jsx)(o.a,{exact:!0,path:"/shipping",component:xe}),Object(N.jsx)(o.a,{component:de})]})]}),Object(N.jsx)(fe,{})]})})})},Ne=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ce(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(N.jsx)(n.a.StrictMode,{children:Object(N.jsx)(Ae,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Ne?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var c=a.headers.get("content-type");404===a.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ce(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ce(t,e)}))}}()}},[[86,1,2]]]);
//# sourceMappingURL=main.ecdfaf65.chunk.js.map