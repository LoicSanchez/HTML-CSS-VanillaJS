const button = document.getElementById('toggle')
const nav = document.getElementById('nav')
button.addEventListener('click', () => {
	nav.classList.toggle('active')
})
