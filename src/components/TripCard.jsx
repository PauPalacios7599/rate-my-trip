import { motion } from 'framer-motion'
import '../styles/components/TripCard.css'
import RatingStars from './RatingStars'

function TripCard({ trip, onToggleFavorite, onRate }) {
  console.log('Datos del viaje:', trip)

  return (
    <motion.div
      className='trip-card'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className='trip-title'>{trip.title}</h2>

      <p className='trip-destination'>
        {trip.translatedName || trip.destination}
        {trip.flag ? (
          <img
            src={trip.flag}
            alt={`Bandera de ${trip.translatedName || trip.destination}`}
            className='flag'
          />
        ) : (
          <span style={{ fontSize: '0.9rem', color: 'gray' }}>🏳️</span>
        )}
      </p>

      {trip.region && <p className='trip-info'>Región: {trip.region}</p>}
      {trip.languages && <p className='trip-info'>Idiomas: {trip.languages}</p>}

      {trip.weather && (
        <p className='trip-info'>
          Clima: {trip.weather.temp}°C - {trip.weather.description}
          {trip.weather.icon && (
            <img
              src={`https://openweathermap.org/img/wn/${trip.weather.icon}@2x.png`}
              alt='icono clima'
              style={{ verticalAlign: 'middle', width: '32px' }}
            />
          )}
        </p>
      )}

      {trip.imageUrl && (
        <img
          src={trip.imageUrl}
          alt={`Imagen de ${trip.translatedName || trip.destination}`}
          className='trip-image'
        />
      )}

      <RatingStars
        rating={trip.rating}
        onRate={(value) => onRate(trip.id, value)}
      />

      <button className='like-button' onClick={() => onToggleFavorite(trip.id)}>
        {trip.favorite ? '❤️ Quitar de favoritos' : '🤍 Añadir a favoritos'}
      </button>
    </motion.div>
  )
}

export default TripCard
