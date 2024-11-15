const Button = (props) => {
  return (
    <div>
            <button className="btn btn-block btn-sm mt-2 bg-yellow-600 border-yellow-700 hover:bg-yellow-700" disabled={props.disabled}>{props.text}</button>
          </div>
  )
}

export default Button