import { Link } from "react-router-dom";

export default function NavBar({ titleNavBar, link }) {
  return (
    <div className="mt-7 flex">
      <Link to={link}>
        <button className=" text-blue-600 p-1 rounded">{titleNavBar}</button>
      </Link>
    </div>
  );
}
