import React from 'react'
import { Menu } from './Menu'
import './App.css'

function App() {
  return (
    <div style={{minWidth: '1000px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
      <Menu />
    </div>
  )
}

export { App }
