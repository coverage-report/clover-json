# clover-json

Parse [clover](http://clover.github.io/clover/) report files, and return a JSON representation in a [lcov-parse](https://github.com/davglass/lcov-parse) compatible manner.

## Usage

```javascript
var clover = require( "clover-json" );

// Parse by file path
clover.parseFile("filepath.xml")
    .then(function (result) {
        console.log(JSON.stringify(result));
    }).catch(function (err) {
        console.error(err);
    });

// Parse by file contents
clover.parseContent("<?xml version=\"1.0\" ?><coverage>...</coverage>")
    .then(function (result) {
        console.log(JSON.stringify(result));
    }).catch(function (err) {
        console.error(err);
    });
```
