(this.webpackJsonpcurriculum=this.webpackJsonpcurriculum||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),i=a.n(l),c=(a(13),a(2)),s=a(3),o=a(1),u=a(5),m=a(4),d=(a(14),a(15),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={parent:!1,child:!1},n.leftItem=n.leftItem.bind(Object(o.a)(n)),n.rightItem=n.rightItem.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"leftItem",value:function(e){console.log("left",e),!0===this.state.child?this.setState({child:!1}):!0===this.state.parent&&this.setState({parent:!1})}},{key:"rightItem",value:function(e){console.log("right",e),!0===this.state.parent?this.setState({child:!0}):!1===this.state.parent&&this.setState({parent:!0})}},{key:"render",value:function(){var e=this;return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("i",{onClick:this.props.upItem,class:"fa fa-arrow-circle-up\t fa-3x"}),r.a.createElement("i",{onClick:this.props.downItem,class:"fa fa-arrow-circle-down fa-3x"}),r.a.createElement("i",{onClick:function(t){e.leftItem(t)},class:"fa fa-arrow-circle-left fa-3x"}),r.a.createElement("i",{onClick:function(t){e.rightItem(t)},class:"fa fa-arrow-circle-right fa-3x"}),r.a.createElement("i",{onClick:this.props.deleteItem,class:"fa fa-trash-o fa-3x"})),r.a.createElement("td",{className:"list-item ".concat(this.state.parent?"shiftInside":""," ").concat(this.state.child?"shiftDeepInside":"")},"   ",this.props.content))}}]),a}(r.a.Component)),h=[],f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),console.log(n.standard.current.value.length),0===n.standard.current.value.replace(/\s+/,"").length?n.setState({error:"null"}):(n.setState({error:null}),n.setState({value:n.standard.current.value}),n.setState((function(e){return{itemsArray:e.itemsArray.concat(e.value),value:""}}))),n.standard.current.value=null},n.state={error:null,itemsArray:h,value:"",parent:!1,child:!1},n.standard=r.a.createRef(),n.handleSubmit=n.handleSubmit.bind(Object(o.a)(n)),n.upItem=n.upItem.bind(Object(o.a)(n)),n.downItem=n.downItem.bind(Object(o.a)(n)),n.deleteItem=n.deleteItem.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"upItem",value:function(e){if(this.state.itemsArray.indexOf(e)>0){for(var t=this.state.itemsArray,a=t.indexOf(e),n=t.indexOf(e)-1,r=t[n],l=a<n?-1:1,i=n;i!=a;i+=l)t[i]=t[i+l];t[a]=r,this.setState({itemsArray:t})}}},{key:"downItem",value:function(e){if(this.state.itemsArray.indexOf(e)<this.state.itemsArray.length-1){for(var t=this.state.itemsArray,a=t.indexOf(e),n=t.indexOf(e)+1,r=t[n],l=a<n?-1:1,i=n;i!=a;i+=l)t[i]=t[i+l];t[a]=r,this.setState({itemsArray:t})}}},{key:"deleteItem",value:function(e){var t=this.state.itemsArray.filter((function(t){return t!==e}));this.setState({itemsArray:t})}},{key:"render",value:function(){var e=this;return console.log(this.state.itemsArray),r.a.createElement("div",{className:"MainContainer"},r.a.createElement("h4",{className:"heading"},"MATHEMATICS"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Action ",r.a.createElement("br",null),r.a.createElement("span",null,"Up,Down,Outdent,Indent,Delete")),r.a.createElement("th",{className:"LeftHead"},"Standard ",r.a.createElement("br",null),r.a.createElement("span",null,"The text of the standard")))),r.a.createElement("tbody",null,this.state.itemsArray.map((function(t){return r.a.createElement(d,{content:t,upItem:function(){return e.upItem(t)},downItem:function(){return e.downItem(t)},deleteItem:function(){return e.deleteItem(t)}})})),r.a.createElement("tr",null,r.a.createElement("td",{colspan:"4"},r.a.createElement("input",{type:"text",ref:this.standard,placeholder:"Type Standard here"}))),r.a.createElement("tr",null,r.a.createElement("td",{className:"Button",colspan:"4"},r.a.createElement("button",{onClick:this.handleSubmit},r.a.createElement("i",{class:"fa fa-plus-circle"})," Add a Standard"))))),r.a.createElement("div",null))}}]),a}(r.a.Component);var p=function(){return r.a.createElement("div",null,r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.30729174.chunk.js.map