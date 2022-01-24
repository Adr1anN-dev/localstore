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
      case 'object': contenedor.length != undefined ? /*is array*/ contenedor[contenedor.length] = val1 : /*is object*/ contenedor[val1] = val2; this.s.setItem(key, JSON.stringify(contenedor)); break;
    }
    return val1;
  },
  modify: function(key, val1, val2){
    var contenedor = this.get(key), tipo = typeof contenedor, tipo2 = typeof val1; this.remove(key);
    switch(tipo){
      case 'string': this.set(key, val1); break;
      case 'object': tipo2 == 'string' ? /*is string*/ contenedor[val1] = val2 : /*is array or object*/ val1.forEach((val,x) => { contenedor[val] = val2[x]; }); break;
    }
    this.set(key, contenedor);
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