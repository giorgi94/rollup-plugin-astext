# rollup-plugin-astext

This plugin enables to import files, such as `.json` or `.svg`, as string variables.



## Installation
```
$ npm install git+https://github.com/giorgi94/rollup-plugin-astext.git
```

## Usage
```javascript
// rollup.config.js
import astext from 'rollup-plugin-astext';

export default {
    input: './src/index.js',
    plugins: [
        astext({
            extensions: [".json", ".svg"] // default [".json"]
        })
    ],
};
```

An optional `extensions` array with file extensions tells which imports should be imported as plain text.



```javascript
// data.json
{ "a": 8 }

// index.js
import data from "./data.json";

console.log(data)

/*
data -> '{ "a": 8 }'
*/
```
