/*!
 * name: @jswork/next-splitlines
 * description: Split string by `
` or `
` or `` for next.
 * homepage: https://github.com/afeiship/next-splitlines
 * version: 1.0.1
 * date: 2021-01-09 16:36:45
 * license: MIT
 */

(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.splitlines = function (inString) {
    if (!inString) return inString;
    return inString.replace(/\r\n/g, '\r').replace(/\n/g, '\r').split(/\r/);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.splitlines;
  }
})();
