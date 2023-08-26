import { useEffect, useState } from "react";
import data from "../../Data.json";
import { useParams } from "react-router-dom";
const HostVanPricing = () => {
  const [currentVan, setCurrentVan] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const findPrice = data.find((van) => van.id === id);
    setCurrentVan(findPrice);
  }, [id]);
  return (
    <div>
      <p className="text-2xl">{`$${currentVan.price}.00 / day`}</p>
    </div>
  );
};

export default HostVanPricing;
