var	modalBg       = document.querySelector('.js-modalObjectBg'),
	/* mail */
	mailLink      = document.querySelector('.js-mailBtn'),
	mailPopup     = document.querySelector('.js-mailModalForm'),
	form          = mailPopup.querySelector('form'),
	mailClose     = mailPopup.querySelector('.js-ModalObjectClose'),
	mailClose1    = mailPopup.querySelector('.js-modalFormCancelBtn'),
	mailName      = mailPopup.querySelector('[name=name]'),
	mailAddr      = mailPopup.querySelector('[name=email]'),
	mailMess      = mailPopup.querySelector('[name=message]'),
	/* cart */
	cartLinks     = document.getElementsByClassName('js-buyBtn'),
	bookmarkLinks = document.getElementsByClassName('js-bookmarkBtn'),
	cartPopup     = document.querySelector('.js-cartModalForm'),
	cartClose     = cartPopup.querySelector('.js-ModalObjectClose'),
	cartClose1    = cartPopup.querySelector('.js-modalFormCancelBtn'),
	cartMark      = document.querySelector('.js-cartOrderInfoItem'),
	bookmarkMark  = document.querySelector('.js-bookmarksOrderInfoItem'),
	/* map */
	mapLink       = document.querySelector('.js-mapLink'),
	mapPopup      = document.querySelector('.js-map'),
	mapClose      = mapPopup.querySelector('.js-ModalObjectClose');
/* mail */
mailLink.addEventListener('click', function(event) {
	event.preventDefault();
	mailPopup.classList.add('modal-content-show-animate');
	modalBg.classList.add('modal-content-show');	
	mailName.focus();
});
mailClose.addEventListener('click', function(event) {
	event.preventDefault();
	mailPopup.classList.remove('modal-content-show-animate');
	modalBg.classList.remove('modal-content-show');	
});
mailClose1.addEventListener('click', function(event) {
	event.preventDefault();
	mailPopup.classList.remove('modal-content-show-animate');
	modalBg.classList.remove('modal-content-show');	
});
/* cart */
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
/* map */
mapLink.addEventListener('click', function(event) {
	event.preventDefault();
	mapPopup.classList.add('modal-content-show');
});
mapClose.addEventListener('click', function(event) {
	event.preventDefault();
	mapPopup.classList.remove('modal-content-show');
});
/* escape key */
window.addEventListener('keydown', function(event) {
	if (event.keyCode === 27) {
		if (mailPopup.classList.contains('modal-content-show-animate') || modalBg.classList.contains('modal-content-show')) {
			mailPopup.classList.remove('modal-content-show-animate')
			modalBg.classList.remove('modal-content-show');
		}
		if (cartPopup.classList.contains('modal-content-show-animate') || modalBg.classList.contains('modal-content-show')) {
			cartPopup.classList.remove('modal-content-show-animate')
			modalBg.classList.remove('modal-content-show');
		}
		if (mapPopup.classList.contains('modal-content-show')) {
			mapPopup.classList.remove('modal-content-show')
		}
	}
});