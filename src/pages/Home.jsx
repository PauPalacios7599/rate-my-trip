import { useState } from 'react'
import TripCard from '../components/TripCard'

function Home({ trips, onToggleFavorite, onRate }) {
  const [search, setSearch] = useState('')

  const filteredTrips = trips.filter((trip) =>
    (trip.translatedName || trip.destination)
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  const noTripsCreated = trips.length === 0
  const noResultsFound = trips.length > 0 && filteredTrips.length === 0

  return (
    <section>
      <input
        type='text'
        placeholder='Buscar destino...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='search-input'
      />

      {noTripsCreated ? (
        <div className='no-results'>
          <p>No hay destinos disponibles. ¡Empieza por crear uno!</p>
        </div>
      ) : noResultsFound ? (
        <div className='no-results'>
          <p>No se encontraron destinos.</p>
        </div>
      ) : (
        <section>
          {filteredTrips.map((trip) => (
            <TripCard
              key={trip.id}
              trip={trip}
              onToggleFavorite={onToggleFavorite}
              onRate={onRate}
            />
          ))}
        </section>
      )}
    </section>
  )
}

export default Home
