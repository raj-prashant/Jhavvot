import React from 'react'

const Button = (props) => {
  return (
    <div>
            <button className="btn btn-block btn-sm mt-2" disabled={props.disabled}>{props.text}</button>
          </div>
  )
}

export default Button
