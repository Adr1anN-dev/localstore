var localstore = {
  s: window.localStorage,
  type: 'localStorage',
  set: function(key, val) {
    this.s.setItem(key, JSON.stringify(val));
    return val;
  },
  add: function(key, val1, val2){
    var contenedor = this.get(key), tipo = typeof contenedor;
    switch(tipo){
      case 'string': this.s.setItem(key, JSON.stringify(contenedor + val1)); break;
      case 'object': contenedor.length != undefined ? /*is array*/ contenedor[contenedor.length] = val1 : /*is object*/ contenedor[val1] == undefined ? (contenedor[val1] = [], contenedor[val1][contenedor[val1].length] = val2) : contenedor[val1][contenedor[val1].length] = val2; this.s.setItem(key, JSON.stringify(contenedor)); break;
    }
    return val1;
  },
  get: function(key) {
    var value = this.s.getItem(key);
    if (typeof value != 'string') { return undefined }
    try { return JSON.parse(value) }
    catch(e) { return value || undefined }
  },
  remove: function(key) { this.s.removeItem(key) },
  removeAll: function() { this.s.clear() },
  getAll: function() {
    var ret = {};
    for (var i=0; i<this.s.length; i++) {
      var key = this.s.key(i);
      ret[key] = this.get(key);
    }
    return ret;
  }
};