import React from 'react'

const Button = (props) => {
  return (
    <div>
            <button className="btn btn-block btn-sm mt-2">{props.text}</button>
          </div>
  )
}

export default Button
