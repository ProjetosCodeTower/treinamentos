const pokemonName = document.querySelector(".pokemon__name")
const pokemonNumber = document.querySelector(".pokemon__number")
const pokemonImage = document.querySelector(".pokemon__image")

const form = document.querySelector(".form")
const next = document.querySelector(".btn-next")
const prev = document.querySelector(".btn-prev")
const input = document.querySelector(".input__search")


let searchPokemon = 1


const fetchPokemon = async (pokemon) => {
    const ApiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if (ApiResponse.status == 200){
        const data = await ApiResponse.json();
        return data
    }
}

const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = "Carregando..."
    pokemonNumber.innerHTML = ''
    const data = await fetchPokemon(pokemon);
    console.log(data)

    if(data){
        pokemonName.innerHTML = data.name
        pokemonNumber.innerHTML = data.id
        pokemonImage.style.display = 'inline'
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_shiny']
        // pokemonImage.src = data['sprites']['other']['official-artwork']['front_default']
        searchPokemon = data.id

    } else {
        pokemonName.innerHTML = "Pokémon não existe"
        pokemonNumber.innerHTML = "???"
        pokemonImage.style.display = 'none'
        

    }
    
    }


form.addEventListener("submit", () => {
    event.preventDefault()
    renderPokemon(input.value.toLowerCase())
    input.value = ''
})


prev.addEventListener("click", () => {
    if(searchPokemon > 1){
        searchPokemon -= 1
        renderPokemon(searchPokemon);
    }
})

next.addEventListener("click", () => {
    searchPokemon += 1
    renderPokemon(searchPokemon)
})

renderPokemon(searchPokemon)