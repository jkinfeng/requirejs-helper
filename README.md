# [@jkinfeng/requirejs-helper](https://github.com/jkinfeng/requirejs-helper)

> Autoload js file of Node.js

[![NPM version](https://img.shields.io/npm/v/requirejs-helper.svg?style=flat)](https://github.com/jkinfeng/requirejs-helper) 
[![NPM Downloads](https://img.shields.io/npm/dm/requirejs-helper.svg?style=flat)](https://github.com/jkinfeng/requirejs-helper) 
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://github.com/jkinfeng/requirejs-helper/blob/HEAD/LICENSE)

## Installation

```
npm i requirejs-helper
```

## API Reference

| Param | Type | Default Value | Description |
| --- | --- | --- | --- |
| [$options] | <code>Object</code> |  |  |
| [$options.path] | <code>String</code> | process.cwd() | js file base path |
| [$options.regular] | <code>Regular expression</code> | /\\.js$/ | js file match |

**Example**  
Basic usage:

```javascript
const requireJs = require('requirejs-helper');

// returns an object, Null object if no jsfile is loaded.
const obj = requireJs({
  path: 'path',
  regular: /\.js$/
});

// Call mode
// obj.filename.doSomething
// filename: name of js file
// doSomething: object, function or both

// Suppose you load a js file that contains an object and a function
// myFunc.js
// ============================================
// module.exports = {a: 123, b: function(){return 'b'}}
// ============================================

// Object-Call: obj.myFunc.a
// Function-Call: obj.myFunc.b()

// Tips: the dots contained in the file name are replaced by underscores
// my.func.js => obj.my_func
```

## Contributing

Please submit all issues and pull requests to the [jkinfeng/requirejs-helper](https://github.com/jkinfeng/requirejs-helper) repository!

## Support

If you have any problem or suggestion please open an issue [here](https://github.com/jkinfeng/requirejs-helper/issues).

### License

[MIT](LICENSE)