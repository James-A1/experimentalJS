const isObject = variable =>
  typeof variable === 'object' && !Array.isArray(variable);

const deepMerge = function(...args) {
  return args.reduce(function(acc, obj){
    if(isObject(obj)) {
      var mO = Object.assign({}, acc, obj)
      
      for (var k in obj)
        if (acc.hasOwnProperty(k))
          if(isObject(acc[k]) && isObject(obj[k]))
            mO[k] = deepMerge(acc[k], obj[k]);
          else if(Array.isArray(acc[k]) && Array.isArray(obj[k]))
            mO[k] = acc[k].concat(obj[k])
            
      return mO
    }
  },{}) 
}
