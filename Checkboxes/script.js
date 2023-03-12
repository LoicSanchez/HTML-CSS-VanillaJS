const toggles = document.querySelectorAll('.toggle')
const darkMode = document.getElementById('dark-mode-toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')
const mode = document.querySelector('#mode')

darkMode.addEventListener('change', (e) => {
	const html = document.querySelector('html')
	const spanElm = e.target.querySelector('span')
	if (html.classList.contains('dark')) {
		html.classList.remove('dark')
		spanElm.innerText = 'Dark mode'
	} else {
		html.classList.add('dark')
		spanElm.innerText = 'Light mode'
	}
})

toggles.forEach((toggle) =>
	toggle.addEventListener('change', (e) => validateCheckboxes(e.target))
)

function validateCheckboxes(theClickedOne) {
	if (mode === theClickedOne) {
		return
	}
	if (good.checked && cheap.checked && fast.checked) {
		if (good === theClickedOne) {
			fast.checked = false
		}

		if (cheap === theClickedOne) {
			good.checked = false
		}

		if (fast === theClickedOne) {
			cheap.checked = false
		}
	}
}
