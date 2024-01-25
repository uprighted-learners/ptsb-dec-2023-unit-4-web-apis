// in order to a attach an event listener, I must first have something to attach it to
// step one: select the element that you want to listen on
const box = document.getElementById('box')

// step two: attach event listener
box.addEventListener('click', () => {
    console.log('you clicked on the box!')
})

// you can attach multiple event listeners to the same element!
box.addEventListener('mouseenter', () => console.log('mouse entered the box'))


const red = document.getElementById('red')
const opacity = document.getElementById('opacity')

red.addEventListener('click', () => {
    // box.style.backgroundColor = 'red'
    box.classList.toggle('red')
    console.log(box.classList);
})

opacity.addEventListener('click', () => {
    box.classList.toggle('opacity')
})

box.addEventListener('dblclick', () => {
    document.body.classList.toggle('right')
})