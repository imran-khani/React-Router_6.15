import { useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link, useParams, Outlet, NavLink } from "react-router-dom";
import data from "../../Data.json";

const HostVanDetails = () => {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);
  useEffect(() => {
    const findVan = data.find((van) => van.id === id);
    setCurrentVan(findVan);
  }, [id]);

  if (currentVan === null) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="p-5 ">
      <div>
        <Link to=".." relative="path" className="flex  gap-2">
          <button className="text-2xl">{<BsArrowLeftShort />} </button>
          <span>Back to all vans</span>
        </Link>
      </div>

      {
        <div className="flex mt-10 p-5 bg-white flex-col max-w-full mx-auto">
          <div className="flex md:ml-3 flex-wrap md:flex-nowrap ">
            <img
              src={currentVan.imageUrl}
              className="w-40 h-40 rounded-lg ring-1 ring-offset-2  object-cover"
              alt=""
            />
            <div className="flex flex-col md:ms-5 mt-5 w-full">
              <button className="px-5 py-2 bg-orange-500 text-white rounded-md opacity-90 self-start mb-3 ">
                {currentVan.type}
              </button>
              <h1 className="md:text-[26px] text-lg font-bold">
                {currentVan.name}
              </h1>
              <p className="font-bold mt-3">
                {`$${currentVan.price}/ `}
                <span className="text-gray-500 -ml-1">day</span>
              </p>
            </div>
          </div>
          <div className="mt-5 md:p-5 transition-all">
            <nav className="flex md:gap-5 gap-3 mb-6 ">
              <NavLink end to=".">
                Details
              </NavLink>
              <NavLink to="pricing">Pricing</NavLink>
              <NavLink to="photos">Photos</NavLink>
            </nav>
            <Outlet context={{currentVan}} />
          </div>
        </div>
      }
    </div>
  );
};

export default HostVanDetails;
