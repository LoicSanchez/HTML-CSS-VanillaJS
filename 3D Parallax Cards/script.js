const cards = document.querySelector('.cards-container')
const images = document.querySelectorAll('.card-img')
const backgrounds = document.querySelectorAll('.card-bg')
const range = 40
const calcValue = (a, b) => ((a / b) * range - range / 2).toFixed(1)

let timeout
cards.addEventListener(
	'mousemove',
	({ x, y }) => {
		const valueY = calcValue(y, window.innerHeight)
		const valueX = calcValue(x, window.innerWidth)
		cards.style.transform = `rotateX(${valueY}deg) rotateY(${valueX}deg)`
		images.forEach((image) => {
			image.style.transform = `translateX(${-valueX}px) translateY(${-valueY}px)`
		})
		backgrounds.forEach((background) => {
			background.style.backgroundPosition = `${valueX * 0.45}px ${
				-valueY * 0.45
			}px`
		})
	},
	false
)
