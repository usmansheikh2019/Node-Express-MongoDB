function checkNested(obj /*, level1, level2, ... levelN*/ ) {
    let args = Array.prototype.slice.call(arguments, 1);
    for (var i = 0; i < args.length; i++) {
      if (!obj || !obj.hasOwnProperty(args[i])) {
        return false;
      }
      obj = obj[args[i]];
    }
    return true;
  }
  let test = {
    level1: {
      level2: {
        level3: 'level3'
      }
    }
  };
  console.log(checkNested(test, 'level1', 'level2', 'level3')); // true
  console.log(checkNested(test, 'level1', 'level2', 'foo')); // false