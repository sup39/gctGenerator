(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{241:function(t,e,n){"use strict";n.d(e,"e",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"f",(function(){return i})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return s})),n.d(e,"a",(function(){return l})),n.d(e,"d",(function(){return p})),n.d(e,"i",(function(){return f}));n(91);function o(t,e,n,o={}){const r=Object.keys(e),a=e instanceof Array?t=>t.config:t=>Object.fromEntries(r.map(e=>[e,t[e]]));return function(){const e=a(this);localStorage.setItem(t,JSON.stringify(e));const r={...o,...e};this.$emit("config",n?{...r,text:n(e)}:r)}}const r=(t,e)=>(t>>>0).toString(16).toUpperCase().padStart(e<<1,"0").slice(-(e<<1));function a(t){const e=new DataView(new ArrayBuffer(4));return e.setFloat32(0,t),r(e.getUint32(0),4)}const i=t=>"#"+t.toString(16).padStart(6,"0"),u=t=>parseInt(t.slice(1),16),s=(t,e)=>"#"+t.toString(16).padStart(6,"0")+e.toString(16).padStart(2,"0"),l=t=>"#"+(t>>>0).toString(16).padStart(8,"0"),p=(t,e,n="en-US")=>o=>{const r=o.split(".");for(const o of[e,n]){let e=t[o];for(const t of r){if(null==e)break;e=e[t]}if(null!=e)return e}return null};function f(t,e){const n=[],o=[];for(const r of t)(e(r)?n:o).push(r);return[n,o]}},242:function(t,e,n){},243:function(t){t.exports=JSON.parse('{"ja-JP":{"h3":{"appearance":"見た目"},"location":"位置：","fontSize":"文字サイズ：","fgColor":"文字色：","fgColorGrad":"グラデーション","fgColor1":"文字色(上)：","fgColor2":"文字色(下)：","alpha":"不透明度=","bgColor":"背景色：","bgOffset":"背景位置：","size":"サイズ：","left":"左","right":"右","top":"上","bottom":"下","display":{"duration":"表示時間：","frame":"(フレーム)","sec":"(秒)"}},"en-US":{"h3":{"appearance":"Appearance"},"location":"Location: ","fontSize":"Font size: ","fgColor":"Font color: ","fgColorGrad":"Gradient","fgColor1":"Font color(Top): ","fgColor2":"Font color(Bottom): ","alpha":"Alpha=","bgColor":"Background color: ","bgOffset":"Background offset: ","size":"Size: ","left":"Left","right":"Right","top":"Top","bottom":"Bottom","display":{"duration":"Display duration: ","frame":"(frame)","sec":"(sec)"}},"fr-FR":{"location":"Position : ","fontSize":"Taille de police : ","fgColor":"Couleur du texte : ","fgColorGrad":"Dégradé","fgColor1":"Couleur du texte (haut) : ","fgColor2":"Couleur du texte (bas) : ","bgColor":"Couleur de fond : ","alpha":"Alpha = "}}')},244:function(t,e,n){"use strict";n.r(e);var o=n(243),r=n(241);const a=t=>({get(){return this.$props.value[t]},set(e){this.update({[t]:e})}});var i={props:{value:{type:Object}},computed:{l(){var t;return null!==(t=o[this.$lang])&&void 0!==t?t:o["en-US"]},...Object.fromEntries(["x","y","fontSize","fgRGB","fgA","fgRGB2","fgA2","bgRGB","bgA","bgLeft","bgRight","bgTop","bgBot"].map(t=>[t,a(t)]))},methods:{update(t){this.$emit("input",{...this.value,...t})},toggleGradient(t){t.target.checked?this.update({fgRGB2:this.fgRGB,fgA2:this.fgA}):this.update({fgRGB2:null,fgA2:null})},rgbI2S:r.f,rgbS2I:r.g,rgbaI2S:r.h}},u=(n(245),n(10)),s=Object(u.a)(i,(function(){var t=this,e=t._self._c;return e("div",[e("div",[e("span",[t._v(t._s(t.l.location)+"(")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.x,expression:"x",modifiers:{number:!0}}],attrs:{type:"number",min:"0",max:"600"},domProps:{value:t.x},on:{input:function(e){e.target.composing||(t.x=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),e("span",[t._v(", ")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.y,expression:"y",modifiers:{number:!0}}],attrs:{type:"number",min:"16",max:"464"},domProps:{value:t.y},on:{input:function(e){e.target.composing||(t.y=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),e("span",[t._v(")")])]),t._v(" "),e("div",[e("span",[t._v(t._s(t.l.fontSize))]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.fontSize,expression:"fontSize",modifiers:{number:!0}}],attrs:{type:"number",min:"0"},domProps:{value:t.fontSize},on:{input:function(e){e.target.composing||(t.fontSize=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),e("div",[e("span",[t._v(t._s(null==t.fgRGB2?t.l.fgColor:t.l.fgColor1))]),e("input",{attrs:{type:"color"},domProps:{value:t.rgbI2S(t.fgRGB)},on:{change:function(e){t.fgRGB=t.rgbS2I(e.target.value)}}}),t._v(" "),e("span",[t._v(t._s(t.l.alpha))]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.fgA,expression:"fgA",modifiers:{number:!0}}],attrs:{type:"number",min:"0",max:"255"},domProps:{value:t.fgA},on:{input:function(e){e.target.composing||(t.fgA=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),e("span",[t._v("/255="+t._s((t.fgA/2.55).toFixed(1))+"%")]),t._v(" "),e("input",{attrs:{type:"checkbox"},domProps:{checked:null!=t.fgRGB2},on:{change:t.toggleGradient}}),e("span",[t._v(t._s(t.l.fgColorGrad))])]),t._v(" "),null!=t.fgRGB2?e("div",[e("span",[t._v(t._s(t.l.fgColor2))]),e("input",{attrs:{type:"color"},domProps:{value:t.rgbI2S(t.fgRGB2)},on:{change:function(e){t.fgRGB2=t.rgbS2I(e.target.value)}}}),t._v(" "),e("span",[t._v(t._s(t.l.alpha))]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.fgA2,expression:"fgA2",modifiers:{number:!0}}],attrs:{type:"number",min:"0",max:"255"},domProps:{value:t.fgA2},on:{input:function(e){e.target.composing||(t.fgA2=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),e("span",[t._v("/255="+t._s((t.fgA2/2.55).toFixed(1))+"%")])]):t._e(),t._v(" "),e("div",[e("div",[e("span",[t._v(t._s(t.l.bgColor))]),e("input",{attrs:{type:"color"},domProps:{value:t.rgbI2S(t.bgRGB)},on:{change:function(e){t.bgRGB=t.rgbS2I(e.target.value)}}}),t._v(" "),e("span",[t._v(t._s(t.l.alpha))]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.bgA,expression:"bgA",modifiers:{number:!0}}],attrs:{type:"number",min:"0",max:"254"},domProps:{value:t.bgA},on:{input:function(e){e.target.composing||(t.bgA=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),e("span",[t._v("/255="+t._s((t.bgA/2.55).toFixed(1))+"%")])]),t._v(" "),e("div",[e("span",[t._v(t._s(t.l.bgOffset))]),t._v(" "),e("span",[t._v(t._s(t.l.left))]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.bgLeft,expression:"bgLeft",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.bgLeft},on:{input:function(e){e.target.composing||(t.bgLeft=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),e("span",[t._v(t._s(t.l.right))]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.bgRight,expression:"bgRight",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.bgRight},on:{input:function(e){e.target.composing||(t.bgRight=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),e("span",[t._v(t._s(t.l.top))]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.bgTop,expression:"bgTop",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.bgTop},on:{input:function(e){e.target.composing||(t.bgTop=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),e("span",[t._v(t._s(t.l.bottom))]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.bgBot,expression:"bgBot",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.bgBot},on:{input:function(e){e.target.composing||(t.bgBot=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])])])}),[],!1,null,"5f99cba2",null);e.default=s.exports},245:function(t,e,n){"use strict";n(242)}}]);