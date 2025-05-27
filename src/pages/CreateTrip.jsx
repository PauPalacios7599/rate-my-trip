import { useForm } from '../hooks/useForm'
import { useDestinationData } from '../hooks/useDestinationData'

function CreateTrip({ dispatch }) {
  const { values, handleChange, reset } = useForm({
    title: '',
    destination: ''
  })
  const { fetchDestinationData, loading, error } = useDestinationData()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!values.title || !values.destination) return

    const extraData = await fetchDestinationData(values.destination)
    if (!extraData) return

    dispatch({
      type: 'ADD_TRIP',
      payload: {
        ...values,
        ...extraData
      }
    })

    reset()
  }

  return (
    <section className='form-section'>
      <h1 className='form-title'>Crear un nuevo viaje</h1>

      <div className='form-card'>
        <form onSubmit={handleSubmit} className='trip-form'>
          <label htmlFor='title' className='visually-hidden'>
            Título del viaje
          </label>
          <input
            id='title'
            name='title'
            type='text'
            placeholder='Título del viaje'
            value={values.title}
            onChange={handleChange}
            aria-label='Título del viaje'
          />

          <label htmlFor='destination' className='visually-hidden'>
            Destino
          </label>
          <input
            id='destination'
            name='destination'
            type='text'
            placeholder='Destino'
            value={values.destination}
            onChange={handleChange}
            aria-label='Destino del viaje'
          />

          <button type='submit' disabled={loading}>
            {loading ? 'Cargando...' : 'Crear viaje'}
          </button>

          {error && <p className='error-message'>{error}</p>}
        </form>
      </div>
    </section>
  )
}

export default CreateTrip
