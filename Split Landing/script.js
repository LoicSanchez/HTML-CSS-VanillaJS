const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')
const mainH1 = document.getElementById('main')

left.addEventListener('mouseenter', () => {
	container.classList.add('hover-left')
	mainH1.classList.add('fade')
})
left.addEventListener('mouseleave', () => {
	container.classList.remove('hover-left')
	mainH1.classList.remove('fade')
})
right.addEventListener('mouseenter', () => {
	container.classList.add('hover-right')
	mainH1.classList.add('fade')
})
right.addEventListener('mouseleave', () => {
	container.classList.remove('hover-right')
	mainH1.classList.remove('fade')
})
