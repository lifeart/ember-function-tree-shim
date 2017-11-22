module.exports = {
  desctipion: 'function-tree shim for Ember.js',
  afterInstall: function () {
    return this.addPackagesToProject([
      {name: 'function-tree', target: '^2.2.1'}
    ]);
  },

  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified
  }
}