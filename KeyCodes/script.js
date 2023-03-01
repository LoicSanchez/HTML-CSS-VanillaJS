const keys = document.getElementById('keys')
let key = ''

window.addEventListener('keydown', (event) => {
	key = event.key === ' ' ? 'Space' : event.key
	keys.innerHTML = `
        <div class="key">
            ${key}
            <span>
                event.key
            </span>
        </div>
        <div class="key">
            ${event.code}
            <span>
                event.code
            </span>
        </div>
        `
	button.innerHTML = '<i class="fa-solid fa-paperclip"></i>'
})

const button = document.getElementById('copy')
button.addEventListener('click', copyToClipboard)

async function copyToClipboard() {
	if (key) {
		try {
			await navigator.clipboard.writeText(key)
		} catch (err) {
			console.log(err)
		}
		button.innerHTML = '<p>Copied!</p>'
	}
}
