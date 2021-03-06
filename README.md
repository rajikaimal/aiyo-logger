# aiyo-logger [![Build Status](https://travis-ci.org/rajikaimal/aiyo-logger.svg?branch=master)](https://travis-ci.org/rajikaimal/aiyo-logger)

Log `Shaa !!!` and `Aiyo !!!` in Node applications

## Install

```
npm install --save-dev aiyo-logger
```

## Usage

```js
var logger = require('aiyo-logger');

someAsyncFunc()
	.then(res => {
		//when you are happy log Shaa !!!
		logger.shaa();
	})
	.catch(err => {
	  //when something goes wrong log Aiyo !!!
		logger.aiyo();
	});
```

## API

### logger.shaa(['text'])

Logs Shaa !!!

#### text

Type: `string`

Optional text to be logged

### logger.aiyo(['text'])

Logs Aiyo !!!

#### text

Type: `string`

Optional text to be logged

## License

MIT © [Rajika Imal](https://rajikaimal.github.io)