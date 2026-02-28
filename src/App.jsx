
import { useState, useEffect } from 'react'
import './App.css'
import InicioSesion from './pages/InicioSesion'
import { MainView } from './pages/MainView'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const raw = localStorage.getItem('crono_current_user')
    if (raw) setUser(JSON.parse(raw))
  }, [])

  const handleLogin = (u) => {
    setUser(u)
  }

  const handleLogout = () => {
    localStorage.removeItem('crono_current_user')
    setUser(null)
  }

  if (!user) return <InicioSesion onLogin={handleLogin} />

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: 10 }}>
        <button className="btn btn-sm btn-outline-secondary" onClick={handleLogout}>Cerrar sesión</button>
      </div>
      <MainView />
    </>
  )
}

export default App
