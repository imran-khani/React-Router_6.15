import { Link } from "react-router-dom";
import img from "../assets/images/error.svg";
const Error = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-5">
        <img src={img} alt="error" className="w-1/3" />
        <h1 className="text-2xl font-bold">Page Not Found</h1>
        <p className="text-gray-500">Sorry, this page does not exist</p>
        <Link to={'/'} className="bg-orange-400 text-white px-4 py-2 rounded-md mt-5 hover:bg-orange-500">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
