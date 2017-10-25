module.exports = {
  desctipion: 'function-tree shim for Ember.js',
  afterInstall: function () {
    return this.addPackagesToProject([
      {name: 'function-tree', target: '^2.1.1'},
      {name: 'download-git-repo', target: '^1.0.1'}
    ]).then(()=>{
      return new Promise(function(resolve, reject){
        const download = require('download-git-repo');
        download('cerebral/cerebral', 'cerebral_src', function (err) {
          console.log(err ? 'Error' : 'Success');
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        })
      });
    });
      // .then(() => {
      //   return this.addAddonsToProject({
      //     packages: [
      //       {name: 'ember-lodash-shim', target: '^2.0.0'},
      //       {name: 'ember-symbol-observable', target: '1.0.0'}
      //     ]
      //   })
      // })
  },

  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified
  }
}