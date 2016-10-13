# npm-checker [![Build Status](https://travis-ci.org/rajikaimal/npm-checker.svg?branch=master)](https://travis-ci.org/rajikaimal/npm-checker)

Check package exists on npmjs.com

## Install

```
npm install --save npm-checker
```

## Usage

```js
const npmChecker = require('npm-checker');

npmChecker('http-fetcher')
	.then(res => {
		console.log(res);
	})
	.catch(err => {
		console.log(err);
	});
```

## API

### npmChecker(packageName)

Returns a promise

#### packageName

Type: `string`

Package name for searching

## License

MIT © [Rajika Imal](https://rajikaimal.github.io)