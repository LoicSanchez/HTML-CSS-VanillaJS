const mainContainer = document.querySelector('.main-container')
const textElement = mainContainer.querySelector('.text')
const imageElement = mainContainer.querySelector('.image')
const nameElement = mainContainer.querySelector('.name')
const subTitleElement = mainContainer.querySelector('.sub-title')

const characters = [
	{
		name: 'Emmet',
		subTitle: 'Hero',
		text: 'He is a construction worker chosen by the prophecy to find the Piece of Resistance to save the Lego World as "The Special" and stop the evil Lord Business.',
		image: 'https://randomuser.me/api/portraits/lego/1.jpg',
	},
	{
		name: 'Bad Cop / Good Cop',
		subTitle: 'Villain',
		text: 'A police officer with a double-sided head and is named after the good cop/bad cop interrogation method. One face is the bad one, which is mostly with Lord Business and when he questions people, while the other one is good, kind, and friendly.',
		image: 'https://randomuser.me/api/portraits/lego/0.jpg',
	},
	{
		name: 'Giuseppe Pizza',
		subTitle: 'Neutral',
		text: 'A master cook of Italian descent. He loves making a good pizza, the "tradizionale" way for his friends. His mom makes the best pasta sauce.',
		image: 'https://randomuser.me/api/portraits/lego/8.jpg',
	},
]

let i = 0

function setCharacter() {
	const { text, name, subTitle, image } = characters[i]

	textElement.innerText = text
	nameElement.innerText = name
	subTitleElement.innerText = subTitle
	imageElement.src = image
	i++
	if (i == characters.length) {
		i = 0
	}
}

setCharacter()
setInterval(setCharacter, 5000)
