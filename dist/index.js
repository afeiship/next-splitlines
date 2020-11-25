/*!
 * name: @jswork/next-splitlines
 * description: Split string by `
` or `
` or `` for next.
 * homepage: https://github.com/afeiship/next-splitlines
 * version: 1.0.0
 * date: 2020-11-25 13:28:32
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.splitlines = function (inString) {
    if (!inString) return inString;
    return inString.replace(/\r\n/g, '\r').replace(/\n/g, '\r').split(/\r/);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.splitlines;
  }
})();
