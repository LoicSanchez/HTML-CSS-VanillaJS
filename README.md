# Structure

\_project_starter is the boilerplate

## Projects

### Blurry Background

What? Blurs the background or image while the page is loading.

How? We use the filter CSS property https://developer.mozilla.org/en-US/docs/Web/CSS/filter and the JavaScript setInterval() method https://developer.mozilla.org/en-US/docs/Web/API/setInterval

Live Demo ⇒ https://loicsanchez.github.io/HTML-CSS-VanillaJS/Blurry%20Background/

<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTY3NGZmYzAxZTcxNjRhZjZhMzE4OThjYTA2OTg5Zjk4NTNlZjM3NyZjdD1n/omdqEWW2V4rjNTczJw/giphy.gif" alt="Blurry Background GIF" width="200">

### Form Labels with Wave Animation

What? Animate the labels on a form to move with a wavy pattern.

How? We use JavaScript to split the text into <span> elements and dynamically assign a different transition-delay to each of them.

Live Demo ⇒ https://loicsanchez.github.io/HTML-CSS-VanillaJS/Wave%20Label/

<img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWVkNDM3NDYxNzgwNzAzZDkyOWYwZjIzOTZhZjBiZmRhMjYwMzhmYSZjdD1n/3GGd0QLm9lIkfvIjZk/giphy.gif" alt="Animated Wave Label GIF" width="300">

### Progress Steps

What? An animated progress bar with multiple steps.

How? We use JavaScript to change the class of the active element and CSS to apply a different style to active elements. We also set the width of the progress bar in JavaScript.

Live Demo ⇒ https://loicsanchez.github.io/HTML-CSS-VanillaJS/Progress%20Steps/

<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExODQwZTUzNDFkNmI0MzRjOWQ0NDkzNjRjMzI4Zjc4ZjA3OTYyMGQyMyZjdD1n/x2iwpSm4RBPYHpaG6y/giphy.gif" alt="Animated Steps GIF" width="200">

### Split Screens

What? Split the screen in half and animation on hover.

How? We use JavaScript to add events on mouse enter and mouse leave and change the class of the elements. We use CSS to apply a different widths and opacity to the elements.

Live Demo ⇒ https://loicsanchez.github.io/HTML-CSS-VanillaJS/Split%20Landing/

<img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTQwMGUzN2I1YzMzZGE2N2MyNWFiNGJiZDRjMzQ4ODkzMDQ5YzJlMCZjdD1n/gZMOmGh8oPju7Iqfyn/giphy.gif" alt="Split screen GIF" width="400">

### Dad Joke

What? Generate a Dad Joke on every click. Try not to laugh!

How? We use the JavaScript fetch API https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API to fetch a joke and update the innerHTML value of the element.

Live Demo ⇒ https://loicsanchez.github.io/HTML-CSS-VanillaJS/Dad%20Joke/

<img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzNjNDY2MzRjZjcwMzI3ZDE4YWMyYTk3NTJmMTljNGY3YzRiM2M2MCZjdD1n/vnQyBj0Q5zUxrWgkuB/giphy.gif" alt="Dad Joke GIF" width="400">

### Background Parallax

What? A landing page with a background animated with a Parallax effect.

How? We use JavaScript to listen to the mousemove event and apply a transform (translate) to each image based on the mouse coordinates.

Live Demo ⇒ https://loicsanchez.github.io/HTML-CSS-VanillaJS/Background%20Parallax/

<img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTA3Y2QxYTk4NTMwNTU5YzdmMmQ3ZThlMzVhMjgwZDUxODk4NDNlNSZjdD1n/DMXqhIDHyXkQwRStSz/giphy.gif" alt="Background Parallax GIF" width="400">

### Scroll Animation

What? The boxes appear with animation as we scroll.

How? We use JavaScript to listen to the scroll event and apply a class to the elements based on their position in the viewport using getBoundingClientRect https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect. We use CSS to apply a transform (translate X or Y) to that class.

Live Demo ⇒ https://loicsanchez.github.io/HTML-CSS-VanillaJS/Scroll%20Animation/

<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDlmZjYyMDA1YTQ4YzEyYWY4MGY1OTZiNGJmZGEyY2U3MDMzYTA5ZCZjdD1n/m3tFyPCU656hCVXgaK/giphy.gif" alt="Scroll Animation GIF" width="300">

### Key Codes

What? Easily see and copy the Key Codes when the keyboard is pressed.

How? We use JavaScript to listen to the keydown event and get the key and code. We use the navigator.clipboard API to copy the key to the clipboard https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard.

Live Demo ⇒ https://loicsanchez.github.io/HTML-CSS-VanillaJS/KeyCodes/

<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjE4MmU4NWRhYzVjM2YzMTM4ZWJjZWM5OWQ1ZWZiMTZiOThlYmRmZSZjdD1n/J2JIZFYfpNqG97AkHq/giphy.gif" alt="Animated GIF" width="300">

### Expanding Cards

What? List of cards that expand on click.

How? We use JavaScript to set the active class to the clicked element and remove that class from other elements. We use CSS to show the active card.

✨ Live Demo ⇒ https://loicsanchez.github.io/HTML-CSS-VanillaJS/Expanding%20Cards

<img src="https://media3.giphy.com/media/5oCeYHp0FvqnxoFGsR/giphy.gif" alt="Expanding Cards GIF" width="300">

### Hidden Search Widget

What? A hidden search that shows/expands on click.

How? We use JavaScript to set the active class. We use CSS to show the active elements and apply a transform with transition.

✨ Live Demo ⇒ https://loicsanchez.github.io/HTML-CSS-VanillaJS/Hidden%20Search

<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjhjNjliNGEyZDEyNGI1MTA0NDgwNTk3OGI2ZGI5ZWM3OTdhMDJmOSZjdD1n/7ecui6YjcTrbL2kepF/giphy.gif" alt="Animated GIF" width="200">

### Animated Side-Collapse Navigation Menu

What? Navigation menu that collapses sideways with animation.

How? We use JavaScript to set the active class. We use CSS to show the active elements and apply a transform with transition.

✨ Live Demo ⇒ https://loicsanchez.github.io/HTML-CSS-VanillaJS/Animated%20Navigation%20Menu

<img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDhiNWVhNmVkN2Y0MzQ4MWNlOTBiYzQxNWRiMDEwOWQ0M2RlZDE1MSZjdD1n/1uSH0eJUSZPcfUp5kb/giphy.gif" alt="Animated GIF" width="200">

### 3D Parallax Cards

What? Cards with 3D Parallax effect.

How? We use JavaScript to listen to the mousemove event and dynamically transform (rotate and translate) elements. The key is to use the CSS transform-style of preserve-3d https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style.

✨ Live Demo ⇒ https://loicsanchez.github.io/HTML-CSS-VanillaJS/3D%20Parallax%20Cards

<img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmUwMWNkMzJiNDhmNzg5OTNjNzhkYWJiOTg0ODI0YjM4NTM1ZjlmOSZjdD1n/pChi4vMw1i87vH56Cn/giphy.gif" alt="3D Parallax Cards GIF" width="350">

### Wavy Loader

What? Cool loading animation.

How? We use CSS @keyframes https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes to animate the position of the circles and color with hue-rotate https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/hue-rotate. We use JavaScript to create the elements and assign different size and transition-delay.

✨ Live Demo ⇒ https://loicsanchez.github.io/HTML-CSS-VanillaJS/Wavy%20Loader

<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTExOGVkN2UwOGU0OGUwNDY0M2RmY2QwZjM3OGRiNTViMjdiMmI1NyZjdD1n/7DsrTdh1Ocs2NmBNzC/giphy.gif" alt="Wavy Loader GIF" width="250">

### FAQ Collapse

What? FAQ with collapse/expand.

How? We use JavaScript to set the active class using the parentNode to get the parent element. We use CSS to show the active elements.

✨ Live Demo ⇒ https://loicsanchez.github.io/HTML-CSS-VanillaJS/FAQ%20Collapse

<img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjUyODYwYzdmNDQxY2NhMTFlMTVhY2M3NTQ3YWJiZmRiYmM5NzMxYyZjdD1n/Bm70bOUt6JoLsuEpFl/giphy.gif" alt="FAQ Collapse GIF" width="300">

### Animated Likes/Followers Counter

What? Likes or Followers counter that increment on loading.

How? We use JavaScript to update the value by increments using setTimeout. We define the target value in an HTML attribute.

✨ Live Demo ⇒ https://loicsanchez.github.io/HTML-CSS-VanillaJS/Likes%20Counter

<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGJmYTYxMTE5NzRkNjgyYjEwMmVmZGU2ZmM5NTYzNzNkMDllMmIyOSZjdD1n/SujGJnieNwuYuSX8GQ/giphy.gif" alt="Likes Counter GIF" width="300">

### Feedback Form

What? Simple form to capture quick feedback.

How? We use a JavaScript event listener but leverage event bubbling to write the event handler only once https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling

✨ Live Demo ⇒ https://loicsanchez.github.io/HTML-CSS-VanillaJS/Feedback%20Survey

<img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDc0OTM0MDAzMjQyZmZhNGVhMGZjOThlM2Y3NDY3ZTFkYjA2MTk4MyZjdD1n/D5NuV41d2TFIeE7dXQ/giphy.gif" alt="Feedback Form GIF" width="300">

### Button with Ripple Effect Click

What? Animate a ripple when a button is clicked.

How? Listen to click event and calculate x and y with clientX/buttonLeft to set top and left on style.

✨ Live Demo ⇒ https://loicsanchez.github.io/HTML-CSS-VanillaJS/Button%20Ripple

<img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjQwMTUxODc4NTY0MGU4Y2E4Njc1YjI3NjlkNDUyN2Y2ZDY0NDQ0NSZjdD1n/7MVcTIJzZIYigWG8FP/giphy.gif" alt="Animated GIF" width="300">

### Toast Notifications

What? Show a toast animation when the button is clicked.

How? Create a new DOM element with JavaScript on click, use setTimeout to make it disappear. We use CSS position: fixed to position the notifications in the corner.

✨ Live Demo ⇒ https://loicsanchez.github.io/HTML-CSS-VanillaJS/Toast%20Notification

<img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGQ5NTg2NzI3ODAwMjRiNmJhN2ZmM2NhZDc4NzdjZDhiMjE2MjZmNyZjdD1n/Z8MOhKLdwKWIMqEKE2/giphy.gif" alt="Toast Notifications GIF" width="300">

### Drag And Drop

What? Visual animation when dragging and dropping.

How? We use JavaScript to listen to the dragstart, dragend, dragover, dragenter, dragleave and drop events (https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API), then assign classes and move DOM elements.

✨ Live Demo ⇒ https://loicsanchez.github.io/HTML-CSS-VanillaJS/Drag%20And%20Drop

<img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTU1MWYwZGE4YjZmNTEwYzE1YWM1MWRkMTcyYzZjNDJjZjBkYmE0MSZjdD1n/pKykPaAwdMXxX67Tr4/giphy.gif" alt="Drag and Drop GIF" width="450">

### Styled Checkboxes (With Dark Mode)

What? Checkboxes with styling for a nice look and dark mode compatibility.

How? A lot of CSS! We use JavaScript to set a dark mode class to the page.

✨ Live Demo ⇒ https://loicsanchez.github.io/HTML-CSS-VanillaJS/Checkboxes

<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExODk2ZmFiODhiNGQzM2NjNWY0NGRjNzg5MTUzODFiZTRhNzZjMGFjOCZjdD1n/zpzBSxwifgdevdN4Mh/giphy.gif" alt="Styled Checkboxes With Dark Mode GIF" width="450">

### Timed Accordion

What? A list of content cards that change on a set interval.

How? The content is set by JavaScript using a setInterval function. The progress bar is animated with CSS.

✨ Live Demo ⇒ https://loicsanchez.github.io/HTML-CSS-VanillaJS/Timed%20Accordion

<img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWM4MGZiMmVmYTllNGY3ODFjNTJlNDYwOGNhNTQ4ZDJkYTkzOTE3ZiZjdD1n/DQVYWZD8BpyN1k9go9/giphy.gif" alt="Timed Accordion GIF" width="400">

## Coming soon!

### Rotating Navigation

Rotate the entire page and show the navigation menu

### Sound Board

Play sound on click using <audio> elements https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio

### Custom Range Slider

### Split Screens Vertical

### Text Typewriter Effect

# VS Code Extensions

Live Server => right click and select 'Open in Live Server' for a live rendering

# Resources

cdnjs.com -=> faster and easier way to load library with CDN

Google Fonts => https://fonts.google.com/

Images => https://unsplash.com

Dad Joke API => https://icanhazdadjoke.com/

Create cool gradients => https://cssgradient.io

Create color palettes => https://coolors.co

Design Inspiration => https://dribbble.com

Icons => https://fontawesome.com

Random User API => https://randomuser.me
