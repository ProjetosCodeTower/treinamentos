const pokemonName = document.querySelector('.pokemon__name')
const pokemonNumber = document.querySelector('.pokemon__number')
const pokemonImage = document.querySelector('.pokemon__image')

const form = document.querySelector('.form')
const input = document.querySelector('.input__search')
const prev = document.querySelector('.btn-prev')
const next = document.querySelector('.btn-next')

let pokemonId = 1

const fetchPokemon = async pokemon => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if(res.status === 200){
        const data = await res.json()
        return data
    }
    throw new Error("Falha na requisição.")
}

const renderPokemon = async pokemon => {
    try {
        const data = await fetchPokemon(pokemon)
        pokemonName.innerText = data.name
        pokemonNumber.innerText = data.id
        pokemonImage.src = data.sprites.versions['generation-v']['black-white'].animated.front_default
        pokemonId = data.id
    } catch(e) {
        console.error(e)
    }
}

form.addEventListener('submit', e => {
    e.preventDefault()
    renderPokemon(input.value.toLocaleLowerCase())
    input.value = ''
})

prev.addEventListener('click', e => {
    if(pokemonId <= 1) return
    renderPokemon(--pokemonId)
})

next.addEventListener('click', e => {
    if(pokemonId >= 1008) return
    renderPokemon(++pokemonId)
})

renderPokemon(pokemonId)

