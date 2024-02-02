// Select all the elements we'll need to access
const typeSelect = document.getElementById('type-select')
const results = document.getElementById('results')
const modal = document.getElementById('modal')
const modalContent = document.getElementById('modal-content')

// this event listener removes the modal
modal.addEventListener('click', () => modal.style.display = 'none')

// populate the list every time we select a type from the dropdown
typeSelect.addEventListener('change', e => {
    results.innerHTML = ''
    getPokemonByType(e.target.value)
})

// make a new API call to get all pokemon of the given type
const getPokemonByType = async (type) => {
    const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
    const pokemon = await res.json()
    pokemon.pokemon.forEach(p => {
        showPokemon(p.pokemon);
    })
}

// create card for individual pokemon and add them to the page
async function showPokemon(monster) {
    const res = await fetch(monster.url)
    const data = await res.json()

    // create card
    const card = document.createElement('div')
    card.setAttribute('id', 'card')

    // add label
    const h3 = document.createElement("h3")
    h3.textContent = monster.name
    card.appendChild(h3)

    // add picture
    const pic = document.createElement("img")
    if (data.sprites.front_default !== null) {
        pic.setAttribute("src", data.sprites.front_default)
    } else {
        pic.setAttribute('src', 'https://www.giantbomb.com/a/uploads/scale_small/9/95666/1879714-pokeball.png')
        pic.style.height = '96px'
    }
    card.appendChild(pic)

    // add click listener that opens the modal
    card.addEventListener('click', e => {
        modal.style.display = 'block'
        modalContent.innerHTML = ''
        modalContent.appendChild(h3.cloneNode(true))
        modalContent.appendChild(pic.cloneNode())
        // add stats to the modal
        data.stats.forEach(stat => {
            const label = document.createElement('h4')
            label.innerText = stat.stat.name
            modalContent.append(label)

            const statNum = document.createElement('span')
            statNum.innerText = stat.base_stat
            modalContent.append(statNum)
        })
    })

    // append card to the page
    results.appendChild(card)
}

// fetch the list of types from the pokemon API
const getStyles = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/type')
    const types = await res.json()
    return types.results
}

// create the dropdown menu with types
const buildSelect = async () => {
    const types = await getStyles()

    const blankOpt = document.createElement('option')
    blankOpt.setAttribute('value', '')
    blankOpt.setAttribute('disabled', 'true')
    blankOpt.setAttribute('selected', 'true')
    blankOpt.innerText = 'Select a type'
    typeSelect.appendChild(blankOpt)

    types.forEach(type => {
        const opt = document.createElement('option')
        opt.setAttribute('value', type.name)
        opt.innerText = type.name
        typeSelect.appendChild(opt)
    });
}

buildSelect()