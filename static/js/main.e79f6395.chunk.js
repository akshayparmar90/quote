(this.webpackJsonpquote=this.webpackJsonpquote||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),a=n(3),i=n.n(a),s=(n(12),n(4)),r=n(5),u=n(7),d=n(6),l=(n(13),n(14),n(0)),h=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={data:""},t.handleNewQuote=function(){fetch("https://api.quotable.io/random").then((function(t){return t.json()})).then((function(e){t.setState({data:e})}))},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.handleNewQuote()}},{key:"render",value:function(){var t=this.state.data;return Object(l.jsxs)("div",{className:"col-sm-12 mt-3",id:"quote-box",children:[Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card-header",children:"Quote"}),Object(l.jsx)("div",{className:"card-body",children:Object(l.jsxs)("blockquote",{className:"blockquote mb-0",children:[Object(l.jsx)("p",{id:"text",children:t.content}),Object(l.jsx)("footer",{id:"author",className:"blockquote-footer",children:t.author})]})})]}),Object(l.jsx)("button",{id:"new-quote",className:"btn btn-primary mt-3",onClick:this.handleNewQuote,children:"New Quote"}),Object(l.jsx)("a",{href:"https://twitter.com/intent/tweet",id:"tweet-quote",className:"btn btn-info mt-3 float-right",children:"Tweet Quote"})]})}}]),n}(o.a.Component),b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),a(t),i(t)}))};i.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.e79f6395.chunk.js.map