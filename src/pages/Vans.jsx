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
    <div key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`}>
        <img className="w-[100%] object-cover" src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p className="mb-2">
            ${van.price}
            <span>/day</span>
          </p>
        </div>
      </Link>
      <Link to={`?type=${van.type}`}>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>{" "}
      </Link>
    </div>
  ));

  return (
    <div className="van-list-container max-w-6xl mx-auto">
      <h1>Explore our van options</h1>
      <div className="flex gap-5 mt-10">
        <Link to={`?type=simple`} className="bg-orange-500 text-white p-2 rounded-md">Simple</Link>
        <Link to={`?type=rugged`} className="bg-blue-500 text-white p-2 rounded-md">Rugged</Link>
        <Link to={`?type=luxury`} className="bg-black text-white p-2 rounded-md">Luxury</Link>
        <Link to={'.'} className="bg-slate-600 text-white p-2 rounded-md">Clear Filter</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-5 mt-10  space-x-3">
        {vanElements}
      </div>
    </div>
  );
}
