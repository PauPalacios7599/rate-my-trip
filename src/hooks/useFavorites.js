export function useFavorites(trips, dispatch) {
  const toggleFavorite = (id) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: id })
  }

  const getFavorites = () => {
    return trips.filter((trip) => trip.favorite)
  }

  return {
    toggleFavorite,
    favorites: getFavorites()
  }
}
