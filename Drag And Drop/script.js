const boxes = document.querySelectorAll('.empty')
const fill = document.querySelector('.fill')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

boxes.forEach((box) => {
	box.addEventListener('dragover', dragOver)
	box.addEventListener('dragenter', dragEnter)
	box.addEventListener('dragleave', dragLeave)
	box.addEventListener('drop', dragDrop)
})

//https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
function dragStart() {
	this.className += ' hold'
	setTimeout(() => (this.className = 'invisible'), 0)
}
function dragEnd() {
	this.className = 'fill'
}
function dragOver(e) {
	e.preventDefault()
}
function dragEnter(e) {
	e.preventDefault()
	this.className += ' hovered'
}
function dragLeave() {
	this.className = 'empty'
}
function dragDrop() {
	this.className = 'empty'
	this.appendChild(fill)
}
