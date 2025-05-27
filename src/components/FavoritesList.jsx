import TripCard from './TripCard'

function FavoritesList({ trips, onToggleFavorite, onRate }) {
  const favoriteTrips = trips.filter((trip) => trip.favorite)

  if (favoriteTrips.length === 0) {
    return <p>No hay favoritos aún.</p>
  }

  return (
    <div className='favorites-list'>
      {favoriteTrips.map((trip) => (
        <TripCard
          key={trip.id}
          trip={trip}
          onToggleFavorite={onToggleFavorite}
          onRate={onRate}
        />
      ))}
    </div>
  )
}

export default FavoritesList
