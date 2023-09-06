import { Link, useSearchParams } from "react-router-dom";
import data from "../Data.json";
import { useEffect, useState } from "react";

export default function Vans() {
  const [vans, setVans] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");
  console.log(typeFilter);

  useEffect(() => {
    setVans(data);
  }, []);

  const displayVans = typeFilter
    ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
    : vans;

  const vanElements = displayVans.map((van) => (
    <div key={van.id} className="van-tile mb-5">
      <Link to={`${van.id}`}>
        <img className="w-[100%] object-cover" src={van.imageUrl} />
        <div className="van-info flex justify-between items-center mt-3 mb-2">
          <h3 className="font-bold ">{van.name}</h3>
          <p className="mr-5 font-bold">
            ${van.price}
            <span>/day</span>
          </p>
        </div>
      </Link>
      <Link to={`${van.type}`}>
        <i className={`van-type ${van.type} selected `}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <div className="van-list-container max-w-6xl mx-auto">
      <h1>Explore our van options</h1>
      <div className="flex gap-5 mt-10">
        <button
          onClick={() => setSearchParams({ type: "simple" })}
          className={`bg-gray-400 text-white p-2 rounded-md ${
            typeFilter === "simple" ? "bg-orange-400" : ""
          }`}
        >
          Simple
        </button>
        <button
          onClick={() => setSearchParams({ type: "rugged" })}
          className={`bg-gray-400 text-white p-2 rounded-md ${
            typeFilter === "rugged" ? "bg-orange-400" : ""
          } `}
        >
          Rugged
        </button>
        <button
          onClick={() => setSearchParams({ type: "luxury" })}
          className={`bg-gray-400 text-white p-2 rounded-md ${
            typeFilter === "luxury" ? "bg-orange-400" : ""
          } `}
        >
          Luxury
        </button>
        {typeFilter && (
          <button
            onClick={() => setSearchParams({})}
            className={`bg-slate-600 text-white p-2 rounded-md ml-auto`}
          >
            Clear Filter
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-5 mt-10  space-x-3">
        {vanElements}
      </div>
    </div>
  );
}
