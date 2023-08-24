import React from "react";
import { useParams } from "react-router-dom";
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
          <img className="max-w-[100%] " src={van.imageUrl} alt={van.name} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <div className="tiltePrice">

          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          </div>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
