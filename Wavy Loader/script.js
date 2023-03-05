const body = document.body
const loader = document.querySelector('.loader')
const numberOfElements = 15

loader.style.width = `${numberOfElements * 22}px`
loader.style.height = `${numberOfElements * 22}px`

for (let index = 0; index < numberOfElements; index++) {
	const position = index * 10
	const delay = (numberOfElements - index) / 10

	let span = document.createElement('span')

	span.style.inset = `${position}px`
	span.style.animationDelay = `${delay}s`
	span.style.translateZ = '-100px'

	loader.append(span)
}
