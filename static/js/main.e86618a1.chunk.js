(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{13:function(e,t,r){},14:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),s=r(6),i=r.n(s),c=r(7),o=r(1),u=r(2),l=r(4),m=r(3),h=function(e){Object(l.a)(r,e);var t=Object(m.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"square col-4",onClick:function(){return e.props.squareOnClick()}},this.props.square," ")}}]),r}(a.a.Component),p=function(e){Object(l.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).renderSquare=function(t){return a.a.createElement(h,{square:e.props.squares[t],squareOnClick:function(){e.props.squareOnClick(t)}})},e}return Object(u.a)(r,[{key:"render",value:function(){return a.a.createElement("div",{className:"gameboard  mx-auto "},a.a.createElement("div",{className:"row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),a.a.createElement("div",{className:"row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),a.a.createElement("div",{className:"row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),r}(a.a.Component),d=function(e){Object(l.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).playerRender=function(t){return e.props.winner?a.a.createElement("h2",null,"Winner is ",e.props.winner):e.props.player&&!e.props.winner?(clearInterval(t),"It's X turn"):e.props.player||e.props.winner?void 0:(clearInterval(t),"It's O turn")},e}return Object(u.a)(r,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"row my-2 mx-auto py-3 justify-content-around align-items-center record-board"},a.a.createElement("div",{className:"whosturn"},this.playerRender(this.props.shining)),a.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.props.restart(e.props.shining)}},"Restart"))}}]),r}(a.a.Component),v=function(e){Object(l.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).descriptionRender=function(t,r){return t.map((function(t,n){var s=n?"Go To #"+n:"Game Start!";return a.a.createElement("li",{key:n},a.a.createElement("button",{className:"btn btn-outline-info my-1 mx-1",onClick:function(){e.props.jumpTo(n,r)}},s))}))},e}return Object(u.a)(r,[{key:"render",value:function(){var e=this.props.history,t=this.props.shining;return a.a.createElement(a.a.Fragment,null,a.a.createElement("ol",{className:"text-left"},this.descriptionRender(e,t)," "))}}]),r}(a.a.Component),f=(r(13),function(e){Object(l.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={history:[{squares:Array(9).fill(null)}],turn:!0,stepNumber:0},e.squareOnClick=function(t){var r=e.state.history.slice(0,e.state.stepNumber+1),n=r[r.length-1].squares.slice();e.winnerCheck(n)||n[t]||(e.state.turn?n[t]="X":n[t]="O",e.setState({history:r.concat([{squares:n}]),turn:!e.state.turn,stepNumber:r.length}))},e.winnerCheck=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var n=Object(c.a)(t[r],3),a=n[0],s=n[1],i=n[2];if(e[a]&&e[a]===e[s]&&e[a]===e[i])return e[a]}return null},e.jumpTo=function(t,r){e.setState({stepNumber:t,turn:t%2===0}),e.removeShining(r)},e.restart=function(t){e.setState({stepNumber:0,turn:!0,history:[{squares:Array(9).fill(null)}]}),e.removeShining(t)},e.showWinner=function(){document.querySelector(".whosturn").classList.toggle("shining")},e.removeShining=function(e){clearInterval(e),document.querySelector(".shining")&&document.querySelector(".shining").classList.remove("shining")},e}return Object(u.a)(r,[{key:"render",value:function(){var e=this.state.history,t=e[this.state.stepNumber],r=this.winnerCheck(t.squares),n=setInterval(this.showWinner,200);return a.a.createElement("div",{className:"container text-center mx-auto "},a.a.createElement("h1",{className:"my-2 title"},"TIC TAC TOE"),a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-md-7 col-12 px-1 border"},a.a.createElement("h2",{className:"my-2"},"Enjoy the Game!"),a.a.createElement(d,{player:this.state.turn,winner:r,restart:this.restart,shining:n}),a.a.createElement(p,{squareOnClick:this.squareOnClick,squares:t.squares})),a.a.createElement("div",{className:"col-md-5  d-none d-md-block px-1 border border-left-0 "},a.a.createElement("h3",{className:"my-2"},"Move Description"),a.a.createElement(v,{history:e,shining:n,jumpTo:this.jumpTo}))))}}]),r}(a.a.Component));i.a.render(a.a.createElement(f,null),document.querySelector("#root"))},8:function(e,t,r){e.exports=r(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.e86618a1.chunk.js.map