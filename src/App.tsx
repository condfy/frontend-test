import React from 'react'
import { Home } from './components'
import './App.css'

function App() {
  return (
    <div style={{minWidth: '1000px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
      <Home />
    </div>
  )
}

export { App }
