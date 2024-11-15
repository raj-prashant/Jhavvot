import { Link } from "react-router-dom";
const MyLink = (props) => {
  return (
    <Link to={props.to} className="text-sm hover:underline hover:text-purple-700 mt-2 inline-block text-purple-600">
      {props.text}
    </Link>
  );
};

export default MyLink;
