import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

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
const arr = [1, 4, 7];

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await Promise.all(
        arr.map(async (item) => {
          const pokeData = await getPoke(item);
          return pokeData;
        })
      );

      setPokemonData(data);
    };
    fetchData();
  }, []);

  const handleCardClick = (index) => {
    if (clickedCards.includes(index)) {
      alert("Game Over! Your Score: " + score);
      setClickedCards([]);
      setScore(0);
    } else {
      setScore(score + 1);
      setClickedCards([...clickedCards, index]);
    }
    const shuffledData = pokemonData.slice().sort(() => Math.random() - 0.5);
    setPokemonData(shuffledData);
  };

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Score: {score}</h1>
        {pokemonData.map((data, index) => (
          <div
            className="border mt-5"
            key={index}
            onClick={() => handleCardClick(index)}
          >
            <p>Name:{data[0]}</p>
            <img src={data[1]} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
