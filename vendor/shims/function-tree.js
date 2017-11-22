(function() {
  /* globals define, self */
  function vendorModule(base) {
    'use strict';

    return base;
  }
  // export an object with a default property that contains the 'hljs' global.
  define('function-tree/lib/devtools/base', ['function-tree/devtools/base'], vendorModule);
  define('function-tree/es/devtools/base', ['function-tree/devtools/base'], vendorModule);
})();


(function() {
  /* globals define, self */
  function vendorModule(base) {
    'use strict';
    
    return {
      'default': self['base'] || base,
      debounce: base,
      __esModule: true,
    };
  }
  // export an object with a default property that contains the 'hljs' global.
  define('function-tree/factories', ['function-tree/factories/debounce'], vendorModule);
})();