async function getPoke(id) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      mode: "cors",
    });
    const pokeData = await response.json();
    const pokeName = pokeData.species.name;
    const pokeSprite = pokeData.sprites.front_default;
    console.log(pokeData);
    const array = [pokeName, pokeSprite];
    return array;
  } catch (err) {
    alert("...");
  }
}

export default getPoke;
