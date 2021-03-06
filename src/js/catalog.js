/* cart */
var	modalBg       = document.querySelector('.js-modalObjectBg'),
	cartLinks     = document.getElementsByClassName('js-buyBtn'),
	bookmarkLinks = document.getElementsByClassName('js-bookmarkBtn'),
	cartPopup     = document.querySelector('.js-cartModalForm'),
	cartClose     = cartPopup.querySelector('.js-ModalObjectClose'),
	cartClose1    = cartPopup.querySelector('.js-modalFormCancelBtn'),
	cartMark      = document.querySelector('.js-cartOrderInfoItem')

	bookmarkMark  = document.querySelector('.js-bookmarksOrderInfoItem');
for (var i = 0; i < cartLinks.length; i++) {
	cartLinks[i].addEventListener('click', function(event) {
		event.preventDefault();
		cartPopup.classList.add('modal-content-show-animate');
		modalBg.classList.add('modal-content-show');		
		cartMark.classList.add('order-info__item--not-empty');
	});
}
for (var j = 0; j < bookmarkLinks.length; j++) {
	bookmarkLinks[j].addEventListener('click', function(event) {
		event.preventDefault();
		bookmarkMark.classList.add('order-info__item--not-empty');
	});
}
cartClose.addEventListener('click', function(event) {
	event.preventDefault();
	cartPopup.classList.remove('modal-content-show-animate');
	modalBg.classList.remove('modal-content-show');		
});
cartClose1.addEventListener('click', function(event) {
	event.preventDefault();
	cartPopup.classList.remove('modal-content-show-animate');
	modalBg.classList.remove('modal-content-show');		
});
window.addEventListener('keydown', function(event) {
	if (event.keyCode === 27) {
		if (cartPopup.classList.contains('modal-content-show-animate') || modalBg.classList.contains('modal-content-show')) {
			cartPopup.classList.remove('modal-content-show-animate')
			modalBg.classList.remove('modal-content-show');
		}
	}
});