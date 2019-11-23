# inject-css-string
> Inject an unique CSS string via a `<style>` tag into the `<head>`.

[![NPM](https://img.shields.io/npm/v/inject-css-string.svg)](https://www.npmjs.com/package/inject-css-string)

## Usage

```js
const injectCssString = require('inject-css-string');
const createCssRule = require('convert-to-css').createCssRule; // npm i -S 'convert-to-css'

const css = createCssRule({
	'.foo': {
		padding: 10,
	},
}); // results in: '.foo{padding:10px}'

injectCssString(css);
injectCssString(css);
console.log(document.head.innerHTML); // logs: '<style>.foo{padding:10px}</style>'

document.head.innerHTML = ''; // empty head, removes previously added style tags

injectCssString(css, 'bar');
injectCssString(css, 'bar');
console.log(document.head.innerHTML); // logs: '<style id="ics-bar">.foo{padding:10px}</style>'
```

# License

MIT © [LSVH](https://github.com/LSVH)