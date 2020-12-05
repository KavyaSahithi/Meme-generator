import React from 'react'

class MemeGenerator extends React.Component {
  constructor() {
    super()
    this.state = {
      topText: '',
      bottomText: '',
      randomImg: 'http://i.imgflip.com/1bij.jpg',
      allMemeImgs: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
      .then((result) => {
        return result.json()
      })
      .then((data) => {
        this.setState({
          allMemeImgs: data.data.memes,
        })
      })
  }
  handleChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }
  handleSubmit(event) {
    let length = this.state.allMemeImgs.length
    this.setState({
      randomImg: this.state.allMemeImgs[Math.floor(Math.random() * length)].url,
    })
    event.preventDefault()
  }
  render() {
    return (
      <div style={{ margin: '0px' }}>
        <form className='meme-form' onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.topText}
            name='topText'
            placeholder='Top Text'
            onChange={this.handleChange}
          />
          <input
            type='text'
            value={this.state.bottomText}
            name='bottomText'
            placeholder='Bottom Text'
            onChange={this.handleChange}
          />
          <button type='submit'>Generate</button>
        </form>
        <div className='meme'>
          <img
            src={this.state.randomImg}
            style={{
              height: '65vh',
              alignContent: 'center',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: 'auto',
            }}
            alt=''
          />
          <h2 className='top'>{this.state.topText}</h2>
          <h2 className='bottom'>{this.state.bottomText}</h2>
        </div>
      </div>
    )
  }
}

export default MemeGenerator
