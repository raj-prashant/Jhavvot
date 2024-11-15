const TextInput = (props) => {
  return (
    <div>
      <label htmlFor="" className="label p-2">
        <span className="text-base label-text text-purple-600">{props.label}</span>
      </label>
      <input 
        type={props.type}
        placeholder={props.placeholder} value={props.value} onChange={props.onChange}
        className="w-full input input-bordered h-10 text-purple-700 placeholder-purple-300 bg-yellow-600 border-yellow-700 "
      />
    </div>
  );
};

export default TextInput;