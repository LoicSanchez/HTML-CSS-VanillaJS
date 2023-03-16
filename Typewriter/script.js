const textEl = document.getElementById('text')

const text = 'Vanilla is my new favorite flavor!'
let idx = 1
let speed = 200

writeText()

function writeText() {
	textEl.innerText = text.slice(0, idx)

	idx++

	if (idx > text.length) {
		idx = 1
		setTimeout(writeText, speed * 4)
	} else {
		setTimeout(writeText, speed)
	}
}
