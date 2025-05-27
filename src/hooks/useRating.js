export function useRating(dispatch) {
  const rateTrip = (id, rating) => {
    dispatch({ type: 'RATE_TRIP', payload: { id, rating } })
  }

  return {
    rateTrip
  }
}
