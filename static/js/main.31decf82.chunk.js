(this["webpackJsonptic-tac-toe-rev"]=this["webpackJsonptic-tac-toe-rev"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r),n=a(7),s=a.n(n),i=(a(14),a(1)),p=a(2),c=a(5),o=a(4),u=a(3),h=(a(15),a(8)),y=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return l.a.createElement("button",{className:"square",onClick:this.props.onClick,style:{backgroundColor:this.props.bgColor}},this.props.value)}}]),a}(l.a.Component),m=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={squares:Array(9).fill(null),bgColor:Array(9).fill(null),xIsNext:!0,winner:""},r}return Object(p.a)(a,[{key:"renderSquare",value:function(e){var t=this;return l.a.createElement(y,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)},bgColor:this.state.bgColor[e]})}},{key:"handleClick",value:function(e){var t=this.state.squares.slice(),a=this.state.bgColor.slice();this.calculateWinner(this.state.squares)||t[e]||(t[e]=this.state.xIsNext?"X":"O",a[e]=this.state.xIsNext?"#aaaaaa":"yellow",this.setState({squares:t,bgColor:a,xIsNext:!this.state.xIsNext,winner:this.state.xIsNext?this.props.player1:this.props.player2}))}},{key:"render",value:function(){var e;return e=this.calculateWinner(this.state.squares)?"winner is "+this.state.winner:"Next Player :: "+(this.state.xIsNext?this.props.player1:this.props.player2),l.a.createElement("div",null,l.a.createElement("div",null," ",e," "),l.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),l.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),l.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}},{key:"calculateWinner",value:function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var r=Object(h.a)(t[a],3),l=r[0],n=r[1],s=r[2];if(e[l]&&e[l]===e[n]&&e[l]===e[s])return e[l]}return null}}]),a}(l.a.Component),b=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"game-board"},l.a.createElement(m,{player1:this.props.player1,player2:this.props.player2})))}}]),a}(l.a.Component),v=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"tournament"},l.a.createElement(b,{player1:this.props.player1,player2:this.props.player2}),l.a.createElement(b,{player1:this.props.player1,player2:this.props.player2}),l.a.createElement(b,{player1:this.props.player1,player2:this.props.player2}),l.a.createElement(b,{player1:this.props.player1,player2:this.props.player2})),l.a.createElement("div",{className:"tournament"},l.a.createElement(b,{player1:this.props.player1,player2:this.props.player2}),l.a.createElement(b,{player1:this.props.player1,player2:this.props.player2}),l.a.createElement(b,{player1:this.props.player1,player2:this.props.player2}),l.a.createElement(b,{player1:this.props.player1,player2:this.props.player2})),l.a.createElement("div",{className:"tournament"},l.a.createElement(b,{player1:this.props.player1,player2:this.props.player2}),l.a.createElement(b,{player1:this.props.player1,player2:this.props.player2}),l.a.createElement(b,{player1:this.props.player1,player2:this.props.player2}),l.a.createElement(b,{player1:this.props.player1,player2:this.props.player2})),l.a.createElement("div",null,"Total games :: 12 ",l.a.createElement("br",null),this.props.player1,"::",l.a.createElement("br",null),this.props.player2,"::",l.a.createElement("br",null)))}}]),a}(l.a.Component),d=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={player1:"",player2:"",start:""},r.changePlayer1=r.changePlayer1.bind(Object(c.a)(r)),r.changePlayer2=r.changePlayer2.bind(Object(c.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(c.a)(r)),r}return Object(p.a)(a,[{key:"changePlayer1",value:function(e){this.setState({player1:e.target.value,player2:this.state.player2,start:""})}},{key:"changePlayer2",value:function(e){this.setState({player1:this.state.player1,player2:e.target.value,start:""})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({player1:this.state.player1,player2:this.state.player2,start:"start"})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Player1:",l.a.createElement("input",{type:"text",value:this.state.player1,onChange:this.changePlayer1})," ",l.a.createElement("br",null)),l.a.createElement("label",null,"Player2:",l.a.createElement("input",{type:"text",value:this.state.player2,onChange:this.changePlayer2}),l.a.createElement("br",null)),l.a.createElement("input",{type:"submit",value:"Start"}))),this.state.start&&this.state.player1&&this.state.player2?l.a.createElement(v,{player1:this.state.player1,player2:this.state.player2}):l.a.createElement("div",null))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.31decf82.chunk.js.map