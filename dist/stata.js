var r=function(r,o,u){var c=r,a=Object.keys(o).reduce(function(r,n){return r[n]=function(){for(var r,e=[],t=arguments.length;t--;)e[t]=arguments[t];return r=o[n].apply(o,e),c=r(c),void u(c,a)},r},{});return u(c,a),a},e={createStore:r};module.exports=e;
//# sourceMappingURL=stata.js.map
