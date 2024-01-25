const yesButton = document.getElementById('yes-button')
const noButton = document.getElementById('no-button')
const yesCount = document.getElementById('yes-count')
const noCount = document.getElementById('no-count')
const nameInput = document.getElementById('name-input')
const warning = document.getElementById('warning')

const voters = []

const handleVote = (voteNode) => {
    if (nameInput.value === '' || voters.includes(nameInput.value)) {
        warning.classList.remove('hidden')
        // warning.setAttribute('hidden', 'until-found')
    } else {
        warning.classList.add('hidden')
        // warning.setAttribute('hidden', 'hidden')

        const count = Number(voteNode.textContent)
        voteNode.textContent = count + 1

        voters.push(nameInput.value)
        nameInput.value = ''
    }
    console.log(voters);
}

yesButton.addEventListener('click', () => {
    handleVote(yesCount)
})

noButton.addEventListener('click', () => {
    handleVote(noCount)
})


// Event listener callbacks implicitly have one argument
// that represents the event itself
// name the parameter if you want to use it!
nameInput.addEventListener('keyup', (e) => {
    // e.target is the element the event was fired on
    // e.target.value accesses the value of that element at the moment the event fired
    if (voters.includes(e.target.value)) {
        warning.classList.remove('hidden')
    } else {
        warning.classList.add('hidden')
    }
})
