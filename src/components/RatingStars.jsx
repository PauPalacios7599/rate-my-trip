import '../styles/components/RatingStars.css'

function RatingStars({ rating, onRate }) {
  return (
    <div className='rating-stars'>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          onClick={() => onRate(i + 1)}
          className={i < rating ? 'filled' : ''}
          role='button'
        >
          ★
        </span>
      ))}
    </div>
  )
}

export default RatingStars
