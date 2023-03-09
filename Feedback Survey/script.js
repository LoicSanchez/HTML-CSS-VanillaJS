const ratings = document.querySelectorAll('.rating')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
const ratingsContainer = document.querySelector('.ratings-container')
let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (e) => {
	if (e.target.parentNode.classList.contains('rating')) {
		removeActive()
		e.target.parentNode.classList.add('active')
		selectedRating = e.target.nextElementSibling.innerHTML
	}
})

sendBtn.addEventListener('click', () => {
	panel.innerHTML = `<i class="fa-regular fa-heart"></i><strong>Thank You!</strong><br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to make the experience better.</p>`
})

function removeActive() {
	ratings.forEach((rating) => rating.classList.remove('active'))
}
