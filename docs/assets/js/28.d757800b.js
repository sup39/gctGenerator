(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{317:function(e,t,l){},373:function(e,t,l){"use strict";l(317)},396:function(e,t,l){"use strict";l.r(t);var n=l(246),a={props:{selectedValue:{type:String},placeholder:{type:String},optGroups:{type:Array},onChange:{type:Function}},computed:{},data:()=>({generation:2}),methods:{getLabel(e){return Object(n.a)(e,this.$lang)},onValueChanged(e){this.onChange(e.target.value)}}},o=(l(373),l(10)),r=Object(o.a)(a,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"select-wrapper"},[t("select",{attrs:{autocomplete:"off"},on:{change:e.onValueChanged}},[null!=e.placeholder?t("option",{attrs:{value:"placeholder",selected:"",disabled:""}},[e._v("\n      "+e._s(e.placeholder)+"\n    ")]):e._e(),e._v(" "),e._l(e.optGroups,(function(l,n){return t("optgroup",{key:n,attrs:{label:e.getLabel(l.label)}},e._l(l.options,(function(l,n){return t("option",{key:n,domProps:{value:l.value,selected:e.selectedValue&&l.value===e.selectedValue}},[e._v("\n        "+e._s(e.getLabel(l.label))+"\n      ")])})),0)}))],2)])}),[],!1,null,"7339f8f5",null);t.default=r.exports}}]);