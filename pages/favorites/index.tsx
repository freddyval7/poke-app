import { useEffect, useState } from "react";

import { Layout } from "@/components/layouts";
import { NoFavorites } from "@/components/ui";
import { localFavorites } from "@/utils";
import FavoritePokemons from "@/components/pokemon/FavoritePokemons";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.getPokemons());
  }, []);

  return (
    <Layout title="Pokémon - Favorites">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons favoritePokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
