import { useEffect, useReducer, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from 'react-router-dom'

import { tripsReducer, initialState } from './context/tripsReducer'

import Home from './pages/Home'
import CreateTrip from './pages/CreateTrip'
import Favorites from './pages/Favorites'

import './styles/App.css'

function App() {
  const [trips, dispatch] = useReducer(tripsReducer, [], () => {
    const saved = localStorage.getItem('trips')
    return saved ? JSON.parse(saved) : initialState
  })

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode')
    return savedTheme === 'true'
  })

  const toggleTheme = () => {
    setDarkMode((prev) => !prev)
  }

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      darkMode ? 'dark' : 'light'
    )
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  useEffect(() => {
    localStorage.setItem('trips', JSON.stringify(trips))
  }, [trips])

  return (
    <div className={darkMode ? 'dark-theme' : ''}>
      <Router>
        <header>
          <nav>
            <NavLink to='/'>Inicio</NavLink>
            <NavLink to='/create'>Crear viaje</NavLink>
            <NavLink to='/favorites'>Favoritos</NavLink>
            <button onClick={toggleTheme} className='theme-toggle'>
              {darkMode ? '☀️ Modo claro' : '🌙 Modo oscuro'}
            </button>
          </nav>
        </header>

        <main>
          <Routes>
            <Route
              path='/'
              element={
                <Home
                  trips={trips}
                  onToggleFavorite={(id) =>
                    dispatch({ type: 'TOGGLE_FAVORITE', payload: id })
                  }
                  onRate={(id, value) =>
                    dispatch({ type: 'RATE_TRIP', payload: { id, value } })
                  }
                />
              }
            />
            <Route
              path='/create'
              element={<CreateTrip dispatch={dispatch} />}
            />
            <Route
              path='/favorites'
              element={
                <Favorites
                  trips={trips}
                  onToggleFavorite={(id) =>
                    dispatch({ type: 'TOGGLE_FAVORITE', payload: id })
                  }
                  onRate={(id, rating) =>
                    dispatch({ type: 'RATE_TRIP', payload: { id, rating } })
                  }
                />
              }
            />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
