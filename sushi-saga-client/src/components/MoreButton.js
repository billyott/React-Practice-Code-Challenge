import React from 'react'

const MoreButton = (props) => {

  const localhandleMoreSushi = () => {
    props.handleMoreSushi()
  }

    return <button onClick={localhandleMoreSushi}>
            More sushi!
          </button>
}

export default MoreButton