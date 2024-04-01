import { useEffect, useState } from "react";
import getPoke from "../utils/API.js";

function PokeData({ setPokemonData }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      setLoading(true);
      const pokemonIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
      try {
        const data = await Promise.all(
          pokemonIds.map(async (id) => {
            const pokeData = await getPoke(id);
            return pokeData;
          })
        );
        setPokemonData(data);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonData();
  }, [setPokemonData]);

  if (loading) {
    return (
      <div>
        <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-gray-600" />
      </div>
    );
  }
  return null;
}

export default PokeData;
