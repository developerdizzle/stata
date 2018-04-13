var r=function(r,e,t){var n=r,u=Object.keys(e).reduce(function(r,o){return r[o]=function(){for(var r,a=[],c=arguments.length;c--;)a[c]=arguments[c];return r=e[o].apply(e,a),n=r(n),void t(n,u)},r},{});return t(n,u),u},e={createStore:r};export default e;
//# sourceMappingURL=stata.m.js.map
