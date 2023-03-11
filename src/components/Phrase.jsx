import React from 'react'

const Phrase = (props) => {
  const showImage = () => {
    if (props.image) {
      return (
        <img src={props.image} alt={props.word} />
      )
    }
  }

  return (
    <div className='Phrase'>
      <h1>{props.word}</h1>
      {showImage()}
    </div>
  )
}

export default Phrase