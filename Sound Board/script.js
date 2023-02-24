const sounds = ['applause', 'wrong', 'boo', 'victory', 'tada', 'gasp']
sounds.forEach((sound) => {
	const btn = document.createElement('button')
	btn.classList.add('btn')
	btn.innerText = sound
	const soundElem = document.getElementById(sound)

	btn.addEventListener('click', () => {
		stopSounds()
		showIcon()
		soundElem.play()
	})
	soundElem.addEventListener('ended', hideIcon)
	document.getElementById('buttons').appendChild(btn)
})

function stopSounds() {
	sounds.forEach((sound) => {
		const soundElem = document.getElementById(sound)
		soundElem.pause()
		soundElem.currentTime = 0
	})
}
function showIcon() {
	const icon = document.querySelector('.icon')
	icon.classList.add('show')
}
function hideIcon() {
	const icon = document.querySelector('.icon')
	icon.classList.remove('show')
}
