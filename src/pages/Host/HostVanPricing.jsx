import { useOutletContext } from "react-router-dom";
const HostVanPricing = () => {
 const { currentVan } = useOutletContext(); 
  return (
    <div>
      <p className="text-2xl">{`$${currentVan.price}.00 / day`}</p>
    </div>
  );
};

export default HostVanPricing;
