(this.webpackJsonpreactintro3=this.webpackJsonpreactintro3||[]).push([[0],{14:function(e,t,n){},9:function(e,t,n){"use strict";n.r(t);var r=n(8),s=n(2),a=n(3),c=n(5),i=n(4),u=n(1),o=n.n(u),l=n(7),h=n.n(l),j=(n(14),n(0));function b(e){return Object(j.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}var v=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"renderSquare",value:function(e){var t=this;return Object(j.jsx)(b,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}},e)}},{key:"makeRow3",value:function(e){var t=this;return Array(3).fill(null).map((function(n,r){return t.renderSquare(r+e)}))}},{key:"makeBoard3",value:function(){for(var e=[],t=0,n=[0,3,6];t<n.length;t++){var r=n[t];e.push(Object(j.jsx)("div",{className:"board-row",children:this.makeRow3(r)},r))}return e}},{key:"render",value:function(){return Object(j.jsx)("div",{children:this.makeBoard3()})}}]),n}(o.a.Component),d=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={history:[{squares:Array(9).fill(null),move:"(start)"}],xIsNext:!0,stepNumber:0},r}return Object(a.a)(n,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1].squares.slice();p(n)||n[e]||(n[e]="X",n[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:n,move:this.getMoveDesc(e)}]),xIsNext:!this.state.xIsNext,stepNumber:t.length}))}},{key:"getCurrent",value:function(){var e=this.state.history;return e[e.length-1]}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"getMoveDesc",value:function(e){e++;var t=Math.ceil(e/3),n=(e-1)%3+1;return"(".concat(t,":").concat(n,")")}},{key:"render",value:function(){var e=this,t=this.state.history,n=t[this.state.stepNumber],r=p(n.squares),s="";s=r?"Win: ".concat(r):"Next player: ".concat(this.state.xIsNext?"X":"O");var a=t.map((function(t,n){var r=n?"Go to step #".concat(n):"Go to start",s=t.move;return Object(j.jsx)("li",{children:Object(j.jsxs)("button",{className:e.state.stepNumber===n?"selected":"",onClick:function(){e.jumpTo(n)},children:[r," ",s]})},n)}));return Object(j.jsxs)("div",{className:"game",children:[Object(j.jsx)("div",{className:"game-board",children:Object(j.jsx)(v,{squares:n.squares,onClick:function(t){e.handleClick(t)}})}),Object(j.jsxs)("div",{className:"game-info",children:[Object(j.jsx)("h3",{children:s}),Object(j.jsxs)("h4",{children:["Steps: ",this.state.stepNumber]}),Object(j.jsx)("ol",{children:a})]}),Object(j.jsx)(O,{input:"[some]"})]})}}]),n}(o.a.Component),O=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"list",children:Object(j.jsxs)("ul",{children:["input = ",this.props.input,".",Object(j.jsx)("li",{children:"001"}),Object(j.jsx)("li",{children:"002"}),Object(j.jsx)("li",{children:"003"}),Object(j.jsx)("li",{children:"004"}),Object(j.jsx)("li",{children:"005"})]})})}}]),n}(o.a.Component);function p(e){for(var t=0,n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];t<n.length;t++){var s=n[t],a=Object(r.a)(s,3),c=a[0],i=a[1],u=a[2];if(e[c]&&e[c]===e[i]&&e[c]===e[u])return e[c]}return null}h.a.render(Object(j.jsx)(d,{}),document.getElementById("root")),console.log("start")}},[[9,1,2]]]);
//# sourceMappingURL=main.643f497a.chunk.js.map