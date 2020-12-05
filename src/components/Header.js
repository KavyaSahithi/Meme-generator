import React from 'react'
import Trollface from '../Trollface.png'

function Header(props) {
  return (
    <header>
      <img src={Trollface} alt='Problem?' />
      <p
        style={{
          alignContent: 'center',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        Meme Generator
      </p>
    </header>
  )
}

export default Header
