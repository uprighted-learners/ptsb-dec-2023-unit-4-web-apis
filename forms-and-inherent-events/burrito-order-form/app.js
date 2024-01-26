const link = document.getElementById('weird-link')

// hijack the event of an anchor tag and do something else
link.addEventListener('click', event => {
    event.preventDefault()
    window.location.replace('https://stackoverflow.com/questions/503093/how-do-i-redirect-to-another-webpage')
})
