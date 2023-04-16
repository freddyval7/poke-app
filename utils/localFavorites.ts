const toggleFavorite = (id: number) => {

  // If local storage doesn't return anything, set an empty array
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  if ( favorites.includes(id) ) {
    favorites = favorites.filter((id) => id !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites))
};

const existInFavorites = ( id: number ): boolean => {

  // Is important because otherwise the server will search the local storage that doesn't
  // exist in that app's side (LS only exist in client-side)
  if( typeof window === "undefined" ) return false;

  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  return favorites.includes(id);
}

const getPokemons = (): number[] => {
  return JSON.parse( localStorage.getItem('favorites') || "[]" )
}

export default {
  toggleFavorite,
  existInFavorites,
  getPokemons
}
