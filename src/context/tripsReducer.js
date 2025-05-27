export const initialState = []

export const tripsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TRIP':
      return [
        ...state,
        {
          ...action.payload,
          id: crypto.randomUUID(),
          rating: 0,
          favorite: false
        }
      ]
    case 'TOGGLE_FAVORITE':
      return state.map((trip) =>
        trip.id === action.payload
          ? { ...trip, favorite: !trip.favorite }
          : trip
      )
    case 'RATE_TRIP':
      return state.map((trip) =>
        trip.id === action.payload.id
          ? { ...trip, rating: action.payload.value }
          : trip
      )

    default:
      return state
  }
}
