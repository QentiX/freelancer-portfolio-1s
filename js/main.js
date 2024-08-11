const btnDarkMode = document.querySelector('.dark-mode-button')

// проверка темной темы на уровне системных настроек
if (
	window.matchMedia &&
	window.matchMedia('(prefers-color-scheme: dark)').matches
) {
	btnDarkMode.classList.add('dark-mode-button--active')
	document.body.classList.add('dark')
}

// проверка темной темы в localStorage
if (localStorage.getItem('darkMode') === 'dark') {
	btnDarkMode.classList.add('dark-mode-button--active')
	document.body.classList.add('dark')
} else if (localStorage.getItem('darkMode') === 'light') {
	btnDarkMode.classList.remove('dark-mode-button--active')
	document.body.classList.remove('dark')
}

// если меняются системные настройки, меняем тему (автоматическая смена тем)
window
	.matchMedia('(prefers-color-scheme: dark)')
	.addEventListener('change', event => {
		const newColorScheme = event.matches ? 'dark' : 'light'

		if (newColorScheme === 'dark') {
			btnDarkMode.classList.add('dark-mode-button--active')
			document.body.classList.add('dark')
			localStorage.setItem('darkMode', 'dark')
		} else {
			btnDarkMode.classList.remove('dark-mode-button--active')
			document.body.classList.remove('dark')
			localStorage.setItem('darkMode', 'light')
		}
	})

// ивент на клик по кнопке смены темы
btnDarkMode.onclick = function () {
	btnDarkMode.classList.toggle('dark-mode-button--active')
	const isDark = document.body.classList.toggle('dark')

	// добавление в localStorage
	if (isDark) {
		localStorage.setItem('darkMode', 'dark')
	} else {
		localStorage.setItem('darkMode', 'light')
	}
}
