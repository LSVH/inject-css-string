const injectCssString = require('./index');

const ids = ['foo', 'bar'];
const icsIds = ids.map(id => 'ics-'+id);
const css = 'a{color:red}';

beforeEach(() => {
  document.head.innerHTML = '';
});

describe('testing `injectCssString(css, id)`', () => {
	test('style tag is added to the DOM', () => {
		injectCssString(css, ids[0]);
		expect(document.getElementById(icsIds[0])).toBeTruthy();
	});
	test('style tag contains the injected css', () => {
		injectCssString(css, ids[0]);
		expect(document.getElementById(icsIds[0]).innerHTML).toBe(css);
	});
	test('css string with same identifier cannot be injected twice', () => {
		injectCssString(css, ids[0]);
		injectCssString(css, ids[0]);
		expect(document.getElementsByTagName('style').length).toBe(1);
	});
	test('css string with different identifier should be injected', () => {
		injectCssString(css, ids[0]);
		injectCssString(css, ids[1]);
		expect(document.getElementsByTagName('style').length).toBe(2);
	});
});

describe('testing `injectCssString(css)`', () => {
	test('style tag is addded to the DOM', () => {
		injectCssString(css);
		expect(
			Array.prototype.slice.call(
				document.getElementsByTagName('style')
			).find(el => el.innerHTML === css)
		).not.toBe(null);
	});
	test('two calls with same css result in one style tag being addded to the DOM', () => {
		injectCssString(css);
		injectCssString(css);
		expect(document.getElementsByTagName('style').length).toBe(1);
	});
	test('two calls with different css result in two style tags being addded to the DOM', () => {
		injectCssString(css);
		injectCssString(css+css);
		expect(document.getElementsByTagName('style').length).toBe(2);
	});
});