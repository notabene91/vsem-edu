(function(t){function e(e){for(var n,c,a=e[0],o=e[1],u=e[2],d=0,p=[];d<a.length;d++)c=a[d],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&p.push(s[c][0]),s[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,a=1;a<i.length;a++){var o=i[a];0!==s[o]&&(n=!1)}n&&(r.splice(e--,1),t=c(c.s=i[0]))}return t}var n={},s={app:0},r=[];function c(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.m=t,c.c=n,c.d=function(t,e,i){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(i,n,function(e){return t[e]}.bind(null,n));return i},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],o=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=o;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("85ec"),s=i.n(n);s.a},"0762":function(t,e,i){},"1bcb":function(t,e,i){},"3b34":function(t,e,i){"use strict";var n=i("d00e"),s=i.n(n);s.a},"4cc4":function(t,e,i){"use strict";var n=i("a16e"),s=i.n(n);s.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("pizza"),i("nutrients"),i("dough"),i("additions"),i("buy")],1)},r=[],c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pizza"},[i("img",{staticClass:"pizza__image",attrs:{alt:"Пицца.",src:t.pizza.photo}}),i("div",{staticClass:"pizza__container"},[i("h2",{staticClass:"pizza__title"},[t._v('"'+t._s(t.pizza.item_name)+'"')]),i("p",{staticClass:"pizza__subtitle"},[t._v(t._s(t.pizza.item_description))]),t._l(t.pizza.prices,(function(e){return i("label",{key:e.size_id,staticClass:"pizza__label"},[i("input",{staticClass:"pizza__input",attrs:{type:"radio",name:"size"},on:{change:function(i){t.setPizzaPrice(parseInt(e.price)),t.pickPizza()}}}),i("span",{staticClass:"pizza__pseudo"}),i("span",{staticClass:"pizza__size"},[t._v(t._s(e.size))]),i("span",{staticClass:"pizza__price"},[t._v(t._s(e.price)+" ₽")])])})),i("buttonblock",{attrs:{counterStyle:"button-clock__counter_pizza",button:"button-block__btn_pizza",counter:t.getCounter}})],2)])},a=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"button-block"},[i("button",{class:["button","button-block__btn",""+t.button],on:{click:t.decrement}},[t._v("-")]),i("p",{class:["button-block__counter",t.counterStyle+" "]},[t._v(t._s(t.counter))]),i("button",{class:["button","button-block__btn",""+t.button],on:{click:t.increment}},[t._v("+")])])},u=[],l={props:["button","counter","counterStyle","buttonBlock"],methods:{increment:function(){this.$store.commit("increment")},decrement:function(){this.$store.commit("decrement")}}},d=l,p=(i("9f97"),i("2877")),_=Object(p["a"])(d,o,u,!1,null,"4d89a1a1",null),f=_.exports,z={components:{buttonblock:f},computed:{pizza:function(){return this.$store.getters.getPizzaData},getCounter:function(){return this.$store.getters.getCounter},getPizzaPrice:function(){return this.$store.getters.getPizzaPrice}},methods:{setPizzaPrice:function(t){isNaN(t)?this.$store.commit("setPizzaPrice",0):this.$store.commit("setPizzaPrice",t)},pickPizza:function(){this.$store.commit("pickPizza")}}},h=z,g=(i("3b34"),Object(p["a"])(h,c,a,!1,null,"28ee24f7",null)),b=g.exports,m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.pickedPizza?i("div",{staticClass:"nutrients"},[i("h2",{staticClass:"nutrients__title"},[t._v("Пищевая ценность в 100г продукта:")]),i("div",{staticClass:"nutrients__container"},[i("p",{staticClass:"nutrients__item"},[t._v(" Белки "),i("span",{staticClass:"nutrients__number"},[t._v(t._s(t.pizza.item_protein))])]),i("p",{staticClass:"nutrients__item"},[t._v(" Жиры "),i("span",{staticClass:"nutrients__number"},[t._v(t._s(t.pizza.item_fats))])]),i("p",{staticClass:"nutrients__item"},[t._v(" Углеводы "),i("span",{staticClass:"nutrients__number"},[t._v(t._s(t.pizza.item_carbohydrates))])]),i("p",{staticClass:"nutrients__item"},[t._v(" Калории "),i("span",{staticClass:"nutrients__number"},[t._v(t._s(t.pizza.item_calories))])])])]):t._e()},P=[],v={computed:{pizza:function(){return this.$store.getters.getPizzaData},pickedPizza:function(){return this.$store.getters.getPicked}}},k=v,C=(i("f61f"),Object(p["a"])(k,m,P,!1,null,"2f5309ee",null)),y=C.exports,D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.pickedPizza?i("div",{staticClass:"dough"},[i("h2",{staticClass:"dough__title"},[t._v(t._s(t.pizza.addon_item[0].subcat_name))]),t._l(t.pizza.addon_item[0].sub_item,(function(e){return i("label",{key:e.sub_item_id,staticClass:"dough__label"},[i("input",{staticClass:"dough__input",attrs:{type:"radio",name:"dough"},on:{change:function(i){t.setDoughPrice(parseInt(e.pretty_price)),t.pickDough()}}}),i("span",{staticClass:"dough__pseudo"}),i("span",{staticClass:"dough__type"},[t._v(t._s(e.sub_item_name))]),i("span",{staticClass:"dough__price"},[t._v("+ "+t._s(t._f("convertToZero")(e.pretty_price))+"₽")])])}))],2):t._e()},$=[],O=(i("ac1f"),i("5319"),{filters:{convertToZero:function(t){return"-"===t?"0 ":t.replace("Р","")}},computed:{pizza:function(){return this.$store.getters.getPizzaData},getDoughPrice:function(){return this.$store.getters.getDoughPrice},pickedPizza:function(){return this.$store.getters.getPickedPizza}},methods:{setDoughPrice:function(t){isNaN(t)?this.$store.commit("setDoughPrice",0):this.$store.commit("setDoughPrice",t)},pickDough:function(){this.$store.commit("pickDough")}}}),j=O,A=(i("9054"),Object(p["a"])(j,D,$,!1,null,"c38d9126",null)),x=A.exports,w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.pickedDough?i("div",{staticClass:"additions"},[i("h2",{staticClass:"additions__title"},[t._v(t._s(t.pizza.addon_item[1].subcat_name))]),t._l(t.pizza.addon_item[1].sub_item,(function(e){return i("label",{key:e.sub_item_id,staticClass:"additions__label"},[i("input",{staticClass:"additions__input",attrs:{type:"checkbox",name:"additions"},domProps:{value:e.price},on:{change:function(i){t.setAddPrice(parseInt(e.price)),t.pickAdd(),t.toggleChecked()}}}),i("span",{staticClass:"additions__pseudo"}),i("span",{staticClass:"additions__type"},[t._v(t._s(e.sub_item_name))]),i("span",{staticClass:"additions__price"},[t._v("+ "+t._s(e.price)+" ₽")]),t.checked?i("buttonblock",{staticStyle:{width:"40%"},attrs:{button:"button-block__btn_add",counter:t.getCounter()-1}}):t._e()],1)}))],2):t._e()},S=[],V={components:{buttonblock:f},computed:{pizza:function(){return this.$store.getters.getPizzaData},pickedDough:function(){return this.$store.getters.getPickedDough}},methods:{setAddPrice:function(t){event.target.checked?this.$store.commit("setAddPrice",t):this.$store.commit("setAddPrice",-t)},getCounter:function(){return this.$store.getters.getCounter},pickAdd:function(){this.$store.commit("pickAdd")},toggleChecked:function(){this.checked=!0}},data:function(){return{checked:!1}}},E=V,T=(i("4cc4"),Object(p["a"])(E,w,S,!1,null,"5a64e69e",null)),I=T.exports,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.pickedDough?i("div",{staticClass:"buy"},[i("button",{staticClass:"button buy__btn"},[t._v(" Купить | "),i("span",{staticClass:"buy__bold"},[t._v(t._s(t.totalAmount)+" ₽")])])]):t._e()},N=[],J={computed:{pickedDough:function(){return this.$store.getters.getPickedDough},pizzaPriceValue:function(){return this.$store.getters.getPizzaPrice},counterValue:function(){return this.$store.getters.getCounter},doughPriceValue:function(){return this.$store.getters.getDoughPrice},addPriceValue:function(){return this.$store.getters.getAddPrice},totalAmount:function(){return(this.pizzaPriceValue+this.doughPriceValue+this.addPriceValue)*this.counterValue}}},Z=J,B=(i("7fff"),Object(p["a"])(Z,M,N,!1,null,"11ad53e3",null)),L=B.exports,R={name:"App",components:{pizza:b,nutrients:y,dough:x,additions:I,buy:L},created:function(){this.$store.dispatch("fetchData")}},U=R,q=(i("034f"),Object(p["a"])(U,s,r,!1,null,null,null)),F=q.exports,G=(i("13d5"),i("2f62")),H=i("bc3a"),K=i.n(H),Q=K.a.create({baseURL:"https://vsem-edu-oblako.ru/singlemerchant/api/loadItemDetails?merchant_keys=929990d3b27944af404a5eb3ee1ec4f6&device_id=89000001020&lang=ru&device_platform=mobile&json=true&item_id=18094140#get"}),W=Q;n["a"].use(G["a"]);var X=new G["a"].Store({state:{counter:1,pickedPizza:!1,pickedDough:!1,pizzaData:{},pizzaPrice:0,doughPrice:0,addPrice:[]},mutations:{setData:function(t,e){return t.pizzaData=e},increment:function(t){return t.counter++},decrement:function(t){t.counter>1&&t.counter--},pickPizza:function(t){t.pickedPizza=!0},pickDough:function(t){t.pickedDough=!0},pickAdd:function(t){t.pickedAdd=!0},setPizzaPrice:function(t,e){t.pizzaPrice=e},setDoughPrice:function(t,e){t.doughPrice=e},setAddPrice:function(t,e){t.addPrice.push(e)}},actions:{fetchData:function(t){return W.get().then((function(e){return t.commit("setData",e.data.details.data)})).catch((function(t){return console.log(t)}))}},getters:{getCounter:function(t){return t.counter},getPickedPizza:function(t){return t.pickedPizza},getPickedDough:function(t){return t.pickedDough},getPizzaData:function(t){return t.pizzaData},getPizzaPrice:function(t){return t.pizzaPrice},getDoughPrice:function(t){return t.doughPrice},getAddPrice:function(t){return t.addPrice.reduce((function(t,e){return t+e}),0)}},modules:{}});n["a"].config.productionTip=!1,new n["a"]({store:X,render:function(t){return t(F)}}).$mount("#app")},"5a1b":function(t,e,i){},"65b9":function(t,e,i){},"7fff":function(t,e,i){"use strict";var n=i("65b9"),s=i.n(n);s.a},"85ec":function(t,e,i){},9054:function(t,e,i){"use strict";var n=i("1bcb"),s=i.n(n);s.a},"9f97":function(t,e,i){"use strict";var n=i("0762"),s=i.n(n);s.a},a16e:function(t,e,i){},d00e:function(t,e,i){},f61f:function(t,e,i){"use strict";var n=i("5a1b"),s=i.n(n);s.a}});
//# sourceMappingURL=app.e67694a5.js.map