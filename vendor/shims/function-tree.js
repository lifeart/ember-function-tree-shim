(function() {
  /* globals define, self */
  function vendorModule(base) {
    'use strict';

    return base;
  }
  // export an object with a default property that contains the 'hljs' global.
  define('function-tree/lib/devtools/base', ['function-tree/devtools/base'], vendorModule);
})();