const jokeEl = document.getElementById('joke')
const jokeBtnEl = document.getElementById('joke-btn')

generateJoke()

async function generateJoke() {
	const config = {
		headers: { Accept: 'application/json' },
	}
	const res = await fetch('https://icanhazdadjoke.com/', config)
	const data = await res.json()
	jokeEl.innerHTML = data.joke
}
// function generateJoke() {
// 	const config = {
// 		headers: { Accept: 'application/json' },
// 	}
// 	fetch('https://icanhazdadjoke.com/', config)
// 		.then((response) => response.json())
// 		.then((data) => {
// 			if (data.status == 200) {
// 				jokeEl.innerHTML = data.joke
// 			}
// 		})
// }

jokeBtnEl.addEventListener('click', generateJoke)
