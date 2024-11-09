const TextInput = (props) => {
  return (
    <div>
      <label htmlFor="" className="label p-2">
        <span className="text-base label-text">{props.label}</span>
      </label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="w-full input input-bordered h-10"
      />
    </div>
  );
};

export default TextInput;