const pokemonName = document.querySelector(".pokemon__name");
const pokemonNumber = document.querySelector(".pokemon__number");
const pokemonImage = document.querySelector(".pokemon__image");
const input = document.querySelector(".input__search");
const next = document.querySelector(".btn-next");
const prev = document.querySelector(".btn-prev");
const form = document.querySelector(".form");


let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const ApiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if(ApiResponse.status == 200){
        const data = await ApiResponse.json();
        
        return data;
    }else{
        console.log("Falha na requisição")
    }
}

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);
    console.log(data);

    if(data){
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    }
}

renderPokemon(searchPokemon);

form.addEventListener("submit", ()=>{
    event.preventDefault();
    renderPokemon(input.value.toLowerCase())
    input.value="";
})

prev.addEventListener("click", ()=>{
    event.preventDefault();
    if(searchPokemon > 1){
        searchPokemon-=1
        renderPokemon(searchPokemon)
    }
})
next.addEventListener("click", ()=>{
    event.preventDefault();
    if(searchPokemon < 1000){
        searchPokemon+=1
        renderPokemon(searchPokemon)
    }
})