import React from 'react'

const DrumPad = (props) => {
  return (
    <div className="drum-pad">
      {props.keyTrigger}
    </div>
  )
}

export default DrumPad;