const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
	{ message: 'Alert!', type: 'danger' },
	{ message: 'Success', type: 'info' },
	{ message: 'Warning!', type: 'warning' },
]

button.addEventListener('click', () =>
	createNotification(({ message, type } = getRandomMessage()))
)

function createNotification({ message = null, type = null }) {
	const toast = document.createElement('div')
	toast.classList.add('toast')
	toast.classList.add(type ? type : 'info')
	toast.innerText = message
	toasts.appendChild(toast)

	setTimeout(() => {
		toast.remove()
	}, 1000)
}

function getRandomMessage() {
	return messages[Math.floor(Math.random() * messages.length)]
}
