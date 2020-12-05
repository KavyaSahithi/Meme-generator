import React from 'react'

function Header(props) {
  return (
    <header>
      <img
        src='http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png'
        alt='Problem?'
      />
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
