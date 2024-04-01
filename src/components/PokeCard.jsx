import { useState } from "react";

function PokeCard({ pokemonData, setPokemonData }) {
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleCardClick = (pokeName) => {
    if (clickedCards.includes(pokeName)) {
      alert("Game Over! Your Score: " + score);
      setClickedCards([]);
      setBestScore(Math.max(bestScore, score));
      setScore(0);
    } else {
      setScore(score + 1);
      setClickedCards([...clickedCards, pokeName]);
    }
    const shuffledData = pokemonData.slice().sort(() => Math.random() - 0.5);
    setPokemonData(shuffledData);
  };

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-gray-500">Score: {score}</h1>
        <h1 className="text-3xl font-bold text-gray-500">
          Highcore: {bestScore}
        </h1>
        <p className="text-gray-500 font-bold mt-2">
          Get points by clicking on an image but don&apos;t click on any more
          than once!
        </p>
        <div className="flex flex-wrap items-center">
          {pokemonData.map((data, index) => (
            <div
              className="border mt-5 ml-5 p-5 shadow-lg transition ease-in-out delay-150 bg-gray-300 hover:-translate-y-1 hover:scale-110 hover:bg-gray-400 duration-50"
              key={index}
              onClick={() => handleCardClick(data[0])}
            >
              <p className="font-bold">{data[0]}</p>
              <img className="" src={data[1]} alt="pokemonSprite" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PokeCard;
