/*
    ? URLs
    * Uniform Resource Locator
    * carries tons of information!
        * protocol, domain and subdomain, route, query params
    * http://mail.google.com/u/1/home
        * http is the protocol (https is another, also file and ftp)
        * mail is the subdomain
        * google is the domain
        * .com is the TLD - top level domain
        * /u/1/home is the path within the domain
    * any url can be modified with query params
        * also called "query string" or "url parameters"
        * how they are handled is up to the site
        * made up of key value pairs
        * starts with ?
        * key=value
        * separated by &
        * in forms
            * the key comes from the "name" attribute
            * the value comes from the "value" attribute
    */

// this gives us a string, which we would have to parse to get the values
const queryString = document.location.search
console.log(queryString);

// or we can get the params as an object (from the query string)
const queryParams = new URLSearchParams(document.location.search)
console.log(queryParams);

// use the .get() method to access query values
const email = queryParams.get('email')
const pwd = queryParams.get('pwd')


const db = [
    { email: 'dburrow@uprighted.com', password: 'abc123' },
    { email: 'santa@northpole.com', password: 'stnick' },
    { email: 'bunnny@easter.com', password: 'iloveeggs' }
]

const btn = document.getElementById('submit')
const output = document.getElementById('output')

btn.addEventListener('click', event => {
    event.preventDefault()
    // event.target.form is an array-like object
    // with all of the inputs from the form inside it
    const email = event.target.form[0].value
    const pwd = event.target.form[1].value

    // find uses from our db who have the given email address
    const user = db.filter(entry => entry.email === email)

    // array.filter() returns an array, so we can check its length to see if it's empty
    if (user.length === 0) {
        output.textContent = 'user not found'
    } else if (user.length === 1) {
        if (user[0].password === pwd) {
            output.textContent = 'user authenticated'
        } else {
            output.textContent = 'incorrect password'
        }
    } else {
        output.textContent = 'what is even going on here'
    }
})
