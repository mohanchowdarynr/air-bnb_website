(this["webpackJsonpairbnb-clone"]=this["webpackJsonpairbnb-clone"]||[]).push([[0],{101:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(0),i=c.n(s),n=c(23),r=c.n(n),o=(c(63),c(64),c(65),c(30)),j=(c(66),c(67),c(68),c(69),c(45)),d=c(115),l=c(46),b=c.n(l),h=c(5);var u=function(){var e=Object(h.f)(),t=Object(s.useState)(new Date),c=Object(o.a)(t,2),i=c[0],n=c[1],r=Object(s.useState)(new Date),l=Object(o.a)(r,2),u=l[0],m=l[1],p={startDate:i,endDate:u,key:"selection"};return Object(a.jsxs)("div",{className:"search",children:[Object(a.jsx)(j.DateRangePicker,{ranges:[p],onChange:function(e){n(e.selection.startDate),m(e.selection.endDate)}}),Object(a.jsxs)("h2",{children:[" Number of guests ",Object(a.jsx)(b.a,{})]}),Object(a.jsx)("input",{min:0,defaultValue:2,type:"number"}),Object(a.jsx)(d.a,{onClick:function(){return e.push("/search")},children:"Search Airbnb"})]})};var m=function(){var e=Object(h.f)(),t=Object(s.useState)(!1),c=Object(o.a)(t,2),i=c[0],n=c[1];return Object(a.jsxs)("div",{className:"banner",children:[Object(a.jsxs)("div",{className:"banner__search",children:[i&&Object(a.jsx)(u,{}),Object(a.jsx)(d.a,{onClick:function(){return n(!i)},className:"banner__searchButton",variant:"outlined",children:i?"Hide":"Search Dates"})]}),Object(a.jsxs)("div",{className:"banner__info",children:[Object(a.jsx)("h1",{children:"Get out and stretch your imagination"}),Object(a.jsx)("h5",{children:"Plan a different kind of gateway to uncover the hidden gems near you"}),Object(a.jsx)(d.a,{onClick:function(){return e.push("/search")},variant:"outlined",children:"Explore Nearby"})]})]})};c(95);var p=function(e){var t=e.src,c=e.title,s=e.description,i=e.price;return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("img",{src:t,alt:""}),Object(a.jsxs)("div",{className:"card__info",children:[Object(a.jsx)("h2",{children:c}),Object(a.jsx)("h4",{children:s}),Object(a.jsx)("h3",{children:i})]})]})};var O=function(){return Object(a.jsxs)("div",{className:"home",children:[Object(a.jsx)(m,{}),Object(a.jsxs)("div",{className:"home__section",children:[Object(a.jsx)(p,{src:"https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=320",title:"Entire homes",description:"Home is where the heart stays",price:"1200/night"}),Object(a.jsx)(p,{src:"https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=320",title:"Cabins and cottages",description:"Good availability and great rates",price:"1500/night"}),Object(a.jsx)(p,{src:"https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=320",title:"Unique stays",description:"Discover and book",price:"5000/night"})]}),Object(a.jsxs)("div",{className:"home__section",children:[Object(a.jsx)(p,{src:"https://a0.muscache.com/im/pictures/426a8116-0b94-4407-ae87-924126c81d78.jpg?im_w=320",title:"Entire house",description:"spacious 1bhk ",price:"2500/night"}),Object(a.jsx)(p,{src:"https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg?im_w=320",title:"Villa",description:"Discover and book",price:"3000/night"}),Object(a.jsx)(p,{src:"https://a0.muscache.com/im/pictures/a84e92bd-68e6-4ce2-9fdf-b2ce1a377f53.jpg?im_w=320",title:"Unique building",description:"Discover and book",price:"3500/night"})]})]})},x=(c(96),c(50)),g=c.n(x),f=c(51),v=c.n(f),_=c(52),y=c.n(_),N=c(53),w=c.n(N),k=c(22);var D=function(){return Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)(k.b,{to:"/",children:Object(a.jsx)("img",{className:"header__icon",src:"https://i.pinimg.com/564x/d2/91/9b/d2919b06c9d2c1c10be3941f14e038ed.jpg",alt:"Hell"})}),Object(a.jsxs)("div",{className:"header__center",children:[Object(a.jsx)("input",{type:"text",placeholder:"Start your search"}),Object(a.jsx)(g.a,{})]}),Object(a.jsxs)("div",{className:"header__right",children:[Object(a.jsx)("p",{children:"Host"}),Object(a.jsx)(v.a,{}),Object(a.jsx)(y.a,{}),Object(a.jsx)(w.a,{})]})]})};c(97);var H=function(){return Object(a.jsxs)("div",{className:"footer",children:[Object(a.jsx)("p",{children:"\xa9 2020 Airbnb, Inc. All rights reserved by mohan nagabhiru"}),Object(a.jsx)("p",{children:"Privacy . Terms . Sidemap"})]})},R=(c(98),c(99),c(54)),C=c.n(R),I=c(55),P=c.n(I);var A=function(e){var t=e.img,c=e.location,s=e.title,i=e.description,n=e.star,r=e.price,o=e.total;return Object(a.jsxs)("div",{className:"searchResult",children:[Object(a.jsx)("img",{src:t,alt:""}),Object(a.jsx)(C.a,{className:"searchResult__heart"}),Object(a.jsxs)("div",{className:"searchResult__info",children:[Object(a.jsxs)("div",{className:"searchResult__infoTop",children:[Object(a.jsx)("p",{children:c}),Object(a.jsx)("h3",{children:s}),Object(a.jsx)("p",{children:i})]}),Object(a.jsxs)("div",{className:"searchResult__infoBottom",children:[Object(a.jsxs)("div",{className:"searchResult__stars",children:[Object(a.jsx)(P.a,{className:"searchResult__star"}),Object(a.jsx)("p",{children:Object(a.jsx)("strong",{children:n})})]}),Object(a.jsxs)("div",{className:"searchResult__price",children:[Object(a.jsx)("h2",{children:r}),Object(a.jsx)("p",{children:o})]})]})]})]})};var E=function(){return Object(a.jsxs)("div",{className:"searchPage",children:[Object(a.jsxs)("div",{className:"searchPage__info",children:[Object(a.jsx)("p",{children:"300+ stays"}),Object(a.jsx)("h1",{children:"Places to stay near you"}),Object(a.jsx)(d.a,{variant:"outlined",children:"Cancellation flexibility"}),Object(a.jsx)(d.a,{variant:"outlined",children:"Type of place"}),Object(a.jsx)(d.a,{variant:"outlined",children:"Price"}),Object(a.jsx)(d.a,{variant:"outlined",children:"Instant book"}),Object(a.jsx)(d.a,{variant:"outlined",children:"More filters"})]}),Object(a.jsx)(A,{img:"https://a0.muscache.com/im/pictures/960cbd39-b1a8-4c1f-902c-bb9e8c71439a.jpg?im_w=960",location:"Lonavla, Maharashtra, India",title:"A luxury villa with beautiful mount view.",description:"Entire villa hosted by Highfield Villas",star:4.5,price:"\u20b914,000/ night",total:"\u20b940000 total"}),Object(a.jsx)(A,{img:"https://a0.muscache.com/im/pictures/fad5d919-cddb-4b8d-a11c-5e3d47e8f551.jpg?im_w=960",location:"Entire house in secunderabad",title:"The Happy Place",description:"Entire house hosted by Hannah 5 guests \xb7 2 bedrooms \xb7 4 beds \xb7 2 bathrooms",star:4.95,price:"\u20b91257/ night",total:"\u20b910000 total"}),Object(a.jsx)(A,{img:"https://a0.muscache.com/im/pictures/07a2de98-e71a-4446-a46a-1ffa65d1988a.jpg?im_w=960",location:"Alibag, Maharashtra, India",title:"Cozy 1 BHK Apartment in Varsoli Alibag Unit 1",description:"4 guests \xb7 1 bedroom \xb7 1 bed \xb7 1 bathroom",star:4.8,price:"\u20b92494/ night",total:"\u20b910000 total"}),Object(a.jsx)(A,{img:"https://a0.muscache.com/im/pictures/195ad4aa-4db4-4fbf-a598-6d40f5ded54f.jpg?im_w=960",location:"Hyderabad, Telangana, India",title:"Furnished 1 BHK Flats @ Wipro Circle, Gachibowli",description:"2 guests \xb7 1 bedroom \xb7 1 bed \xb7 1 bathroom",star:4.33,price:"\u20b91756/ night",total:"\u20b98000 total"}),Object(a.jsx)(A,{img:"https://a0.muscache.com/im/pictures/5b5f4963-665b-4d07-a4a5-1c0908bbf7dc.jpg?im_w=960",location:"Panchgani, Maharashtra, India",title:"Tranquil Treasure",description:"16 guests \xb7 10 bedrooms \xb7 12 beds \xb7 8 bathrooms",star:4.31,price:"\u20b91375/ night",total:"\u20b95600 total"}),Object(a.jsx)(A,{img:"https://a0.muscache.com/im/pictures/b55486bb-63af-4491-9eab-020525ca32d9.jpg?im_w=960",location:"Hyderabad, Telangana, India",title:"Couple Friendly Rooms at Kondapur",description:"Entire house hosted by Hannah 5 guests \xb7 2 bedrooms \xb7 4 beds \xb7 2 bathrooms",star:3.82,price:"\u20b91085/ night",total:"\u20b94000 total"}),Object(a.jsx)(A,{img:"https://a0.muscache.com/im/pictures/6c0e09d9-2537-4c2a-9180-4f14e22a1996.jpg?im_w=960",location:"Damkhind, Maharashtra, India",title:"Aamchi Wadi",description:"3 guests \xb7 1 bedroom \xb7 2 beds \xb7 1 bathroom",star:4.96,price:"\u20b91200/ night",total:"\u20b94800 total"})]})};var S=function(){return Object(a.jsx)("div",{className:"app",children:Object(a.jsxs)(k.a,{children:[Object(a.jsx)(D,{}),Object(a.jsxs)(h.c,{children:[Object(a.jsx)(h.a,{path:"/search",children:Object(a.jsx)(E,{})}),Object(a.jsx)(h.a,{path:"/",children:Object(a.jsx)(O,{})})]}),Object(a.jsx)(H,{})]})})};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root"))},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[101,1,2]]]);
//# sourceMappingURL=main.1228dbbc.chunk.js.map