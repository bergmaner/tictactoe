(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],[,,,,,,,,function(e,t,r){e.exports=r(18)},,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),s=r(6),c=r.n(s),o=(r(13),r(7)),i=r(1),u=r(2),l=r(3),h=r(4);r(14);var m=function(e){return a.a.createElement("button",{className:"square",onClick:e.onClick},e.value)},d=(r(15),function(e){Object(h.a)(r,e);var t=Object(l.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"renderSquare",value:function(e){var t=this;return a.a.createElement(m,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return a.a.createElement("div",{className:"board"},a.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),a.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),a.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),r}(n.Component)),f=(r(16),function(e){Object(h.a)(r,e);var t=Object(l.a)(r);function r(e){var n;return Object(i.a)(this,r),(n=t.call(this,e)).checkBoard=function(e){return!!(e[0]&&e[1]&&e[2]&&e[3]&&e[4]&&e[5]&&e[6]&&e[7]&&e[8])},n.checkWinner=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var n=Object(o.a)(t[r],3),a=n[0],s=n[1],c=n[2];if(e[a]&&e[a]===e[s]&&e[s]===e[c])return e[a]}return null},n.restart=function(){console.log("hehe"),n.setState({stepNumber:0})},n.onClick=function(e){var t=n.state.history.slice(0,n.state.stepNumber+1),r=t[t.length-1].squares.slice();n.checkWinner(r)||r[e]||(r[e]=n.state.xIsNext?"X":"O",n.setState({history:t.concat({squares:r}),xIsNext:!n.state.xIsNext,stepNumber:t.length}),console.log(e))},n.state={xIsNext:!0,stepNumber:0,history:[{squares:Array(9).fill(null)}]},n}return Object(u.a)(r,[{key:"render",value:function(){var e,t=this,r=this.state.history[this.state.stepNumber],n=r.squares.slice(),s=this.checkWinner(n),c=this.checkBoard(n);return e=s?"Winner is ".concat(s):"Next player is ".concat(this.state.xIsNext?"X":"O"),c&&(e="Nobody win"),a.a.createElement("div",{className:"game"},a.a.createElement("div",{className:"game-board"},a.a.createElement(d,{squares:r.squares,clicked:this.props.clicked,onClick:function(e){return t.onClick(e)}}),a.a.createElement("div",{className:"status"},e),a.a.createElement("button",{className:"restart",onClick:function(){return t.restart()}},"Restart")))}}]),r}(n.Component));r(17);var v=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.45b49ec9.chunk.js.map