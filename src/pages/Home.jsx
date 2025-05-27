import { useState } from 'react'
import TripCard from '../components/TripCard'

function Home({ trips, onToggleFavorite, onRate }) {
  const [search, setSearch] = useState('')

  const filteredTrips = trips.filter((trip) =>
    (trip.translatedName || trip.destination)
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  return (
    <main>
      <input
        type='text'
        placeholder='Buscar destino...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='search-input'
      />

      {filteredTrips.length > 0 ? (
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
      ) : (
        <div className='no-results'>
          <p>No se encontraron destinos.</p>
        </div>
      )}
    </main>
  )
}

export default Home
