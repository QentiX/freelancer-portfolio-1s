const btnDarkMode = document.querySelector('.dark-mode-button')

btnDarkMode.onclick = function () {
	btnDarkMode.classList.toggle('dark-mode-button--active')
	document.body.classList.toggle('dark')
}
