import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import data from '../../Data.json'

const HostVanDetails = () => {
  const [currentVan,setCurrentVan] = useState(null)
  const {id} = useParams();
  return (
    <div className="p-5 ">
      <div>
        <Link className="flex  gap-2">
          <button className="text-2xl">{<BsArrowLeftShort />} </button>
          <span>Back to all vans</span>
        </Link>
      </div>

      {
        
      }
    </div>
  );
};

export default HostVanDetails;
