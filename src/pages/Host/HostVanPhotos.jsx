import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { currentVan } = useOutletContext();

  return (
    <div>
      <img className="w-40 h-40 " src={currentVan.imageUrl} alt="" />
    </div>
  );
};

export default HostVanPhotos;
