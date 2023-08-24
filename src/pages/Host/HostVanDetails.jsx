import { useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import data from "../../Data.json";

const HostVanDetails = () => {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);
  useEffect(() => {
    const findVan = data.find((van) => van.id === id);
    setCurrentVan(findVan);
  }, [id]);
  return (
    <div className="p-5 ">
      <div>
        <Link className="flex  gap-2">
          <button className="text-2xl">{<BsArrowLeftShort />} </button>
          <span>Back to all vans</span>
        </Link>
      </div>

      {!currentVan ? (
        <div>Loading...</div>
      ) : (
        <div className="flex mt-10 p-5 bg-white flex-col">
          <div className="flex ml-3">
            <img src={currentVan.imageUrl} className="w-40 h-40" alt="" />
            <div className="flex flex-col ms-5 mt-5 gap-5 w-full">
              <button className="px-5 py-2 bg-orange-500 text-white rounded-md opacity-90 self-start">
                {currentVan.type}
              </button>
              {/* <h1 className="text-2xl font-bold">{currentVan.name}</h1> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HostVanDetails;
