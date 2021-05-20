window.addEventListener('DOMContentLoaded', () => {
	//==========================================================================================================================================
	function get(selector) {
		return document.querySelector(selector)
	}
	function getAll(selector) {
		return document.querySelectorAll(selector)
	}
	//==========================================================================================================================================
	//==========================================================================================================================================
	let ibg = document.querySelectorAll('.ibg')
	ibg.forEach(el => {
		let srcAttr = el.firstElementChild.getAttribute('src');
		el.style.backgroundImage = `url('./${srcAttr}')`
	})
	//==========================================================================================================================================
	// size1024()
	// function size1024() {
	if (document.documentElement.clientWidth >= 1024) {
		const buttonDown = get('.fullscreen-body__icon'),
			cloned = get('.fullscreen-body__icon').cloneNode(true),
			_toFix = get('.fullscreen-body__to-fix'),
			_text = get('.fullscreen-body__text'),
			_about = get('.fullscreen-body__about'),
			_toFixFirst = document.createElement('div'),
			_toFixSecond = document.createElement('div');

		_toFixFirst.className = 'fullscreen-body__first';
		_toFixSecond.className = 'fullscreen-body__second';
		_toFix.append(_toFixFirst);
		_toFix.append(_toFixSecond);
		_toFixFirst.append(_text, _about)
		_toFixSecond.append(cloned)

		buttonDown.remove()
		get('.fullscreen-body__second').append(cloned)
		// get('.fullscreen-body__to-fix').append(get('.fullscreen-body__icon'))
	}
	// }

})