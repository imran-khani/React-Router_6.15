import React from "react";
import { Link, useParams } from "react-router-dom";
import vansData from "../Data.json"; // Import the JSON data

export default function VanDetail() {
  const params = useParams();
  const [van, setVan] = React.useState(null);

  React.useEffect(() => {
    // Find the van with the matching ID from the imported JSON data
    const selectedVan = vansData.find((van) => van.id === params.id);
    if (selectedVan) {
      setVan(selectedVan);
    } else {
      console.error("Van not found");
    }
  }, [params.id]);

  return (
    <div className="van-detail-container">
      {van ? (
        <div className="van-detail max-w-[500px] mx-auto mt-0">
          <Link relative="path" to="..">
            <p className="flex gap-2 hover:cursor-pointer hover:underline">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                  />
                </svg>
              </span>
              Back to all vans
            </p>
          </Link>
          <img className="max-w-[100%] " src={van.imageUrl} alt={van.name} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <div className="tiltePrice mt-3 flex justify-between items-center">
            <h2>{van.name}</h2>
            <p className="van-price">
              <span>${van.price}</span>/day
            </p>
          </div>
          <p>{van.description}</p>
          <button className="link-button mt-3">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
