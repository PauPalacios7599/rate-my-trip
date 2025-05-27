import TripCard from '../components/TripCard'

function Favorites({ trips, onToggleFavorite, onRate }) {
  const favoriteTrips = trips.filter((trip) => trip.favorite)

  return (
    <main>
      <section>
        <h1 className='section-title'>Viajes favoritos</h1>
        {favoriteTrips.length > 0 ? (
          <div className='favorites-grid'>
            {favoriteTrips.map((trip) => (
              <TripCard
                key={trip.id}
                trip={trip}
                onToggleFavorite={onToggleFavorite}
                onRate={onRate}
              />
            ))}
          </div>
        ) : (
          <div className='no-results'>
            <p>Aún no tienes favoritos.</p>
          </div>
        )}
      </section>
    </main>
  )
}

export default Favorites
