//Criando variaveis para mexer com os elementos do HTML através do nome do elemento da class

const pokemonName = document.querySelector(".pokemon__name")
const pokemonNumber = document.querySelector(".pokemon__number")
const pokemonImage = document.querySelector(".pokemon__image")

const form = document.querySelector(".form")
const next = document.querySelector(".btn-next")
const prev = document.querySelector(".btn-prev")
const input = document.querySelector(".input__search")


let searchPokemon = 1

//Função para buscar informações na Api


const fetchPokemon = async (pokemon) => {
    /**Escreva aqui a função de FETCH para pegar os dados da api  */

}



const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = "Carregando..."
    pokemonNumber.innerHTML = ''
    /** Escreva a função que vai consumir os dados vindo da função FETCH */

    
    }

//Adicionando evento ao inputField para fazer o FETCH dos pokemons pesquisados no campo
form.addEventListener("submit", () => {
    event.preventDefault()
    renderPokemon(input.value.toLowerCase())
    input.value = ''
})

//Adicionando Evento ao "prev.button" para buscar o pokémon anterior
prev.addEventListener("click", () => {
    if(searchPokemon > 1){
        searchPokemon -= 1
        renderPokemon(searchPokemon);
    }
})

//Adicionando Evento ao "next.button" para buscar o próximo pokémon 
next.addEventListener("click", () => {
    searchPokemon += 1
    renderPokemon(searchPokemon)
})

renderPokemon(searchPokemon)