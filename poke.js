const inputpokeName = document.getElementById("inputPokemon");
const okBtn = document.querySelector(".okBtn");
const image = document.getElementById("pokeSprite");
async function fetchPokeData(pokeName){
    
    //const pokeName = "ditto";
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
        if(!response.ok){
            throw new Error("could not fetch it.");
        }
        const data = await response.json();
        image.src = data.sprites.front_default;
        const name = document.querySelector(".pokeName");
        name.textContent = "Namn: "+ data.species.name;
    }catch(error){
        console.error(error);
    }
}
//fetchPokeData();

okBtn.addEventListener("click", () =>{
    const pokeName = inputpokeName.value.toLowerCase();
    fetchPokeData(pokeName);
    inputpokeName.value = "";
});

