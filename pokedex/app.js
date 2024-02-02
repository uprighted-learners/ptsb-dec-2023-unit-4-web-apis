/* 
Ideas

Styling
* sprite card background
* button text, maybe pokemon icons?

Functionality
* filter all pokemon by type, etc
    * generation
    * evolutions
    * stats
    * alphabet
* modal 
* √ error handling

*/

const typeSelect = document.getElementById('type-select')
const results = document.getElementById('results')
const modal = document.getElementById('modal')
const modalContent = document.getElementById('modal-content')

modal.addEventListener('click', () => modal.style.display = 'none')

typeSelect.addEventListener('change', e => {
    console.log(e.target.value);
    results.innerHTML = ''
    getPokemonByType(e.target.value)
})

const getPokemonByType = async (type) => {
    console.log(type);

    const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
    console.log(res);
    const pokemon = await res.json()
    pokemon.pokemon.forEach(p => {
        showPokemon(p.pokemon);
    })
}

async function showPokemon(monster) {
    const res = await fetch(monster.url)
    const data = await res.json()

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

    card.addEventListener('click', e => {
        modal.style.display = 'block'
        modalContent.innerHTML = ''
        modalContent.appendChild(h3.cloneNode(true))
        modalContent.appendChild(pic.cloneNode())
        data.stats.forEach(stat => {
            const label = document.createElement('h4')
            label.innerText = stat.stat.name
            modalContent.append(label)

            const statNum = document.createElement('span')
            statNum.innerText = stat.base_stat
            modalContent.append(statNum)
        })
    })

    results.appendChild(card)
}

const getStyles = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/type')
    const types = await res.json()
    return types.results
}

const buildSelect = async () => {
    const types = await getStyles()
    console.log(typeSelect);

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