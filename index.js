module.exports = function(css, id = '') {
	const head = document.getElementsByTagName('head')[0];
	const style = document.createElement('style');
	style.innerHTML = css;
	style.id = id !== '' ? `ics-${id.replace(' ', '-')}` : null;

	const isStyleAlreadyInjected = id !== '' && document.getElementById(style.id) == null;
	const styleTagsInHead = Array.prototype.slice.call(head.getElementsByTagName('style'));
	const isCssAlreadyInjected = id === '' && styleTagsInHead.find(el => el.innerHTML === css) == null;
	if (css !== '' && (isStyleAlreadyInjected || isCssAlreadyInjected)) {
		head.appendChild(style);
	}
}