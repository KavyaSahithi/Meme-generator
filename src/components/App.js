import './App.css'
import React from 'react'
import MemeGenerator from './MemeGenerator.js'
import Header from './Header.js'

function App() {
  return (
    <div
      style={{
        width: '80%',
        height: 'auto',
        alignContent: 'center',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '10px',
      }}
    >
      <Header />
      <MemeGenerator />
    </div>
  )
}

export default App
