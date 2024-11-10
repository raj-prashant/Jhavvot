import { Link } from "react-router-dom";
const MyLink = (props) => {
  return (
    <Link to={props.to} className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
      {props.text}
    </Link>
  );
};

export default MyLink;
