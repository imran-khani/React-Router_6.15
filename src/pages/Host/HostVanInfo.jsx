import { useOutletContext } from "react-router-dom";
const HostVanInfo = () => {
  const { currentVan } = useOutletContext();
  return (
    <div className="flex flex-col mt-5 gap-5">
      <h3 className="text-sm md:text-xl ">
        <span className="font-bold text-sm md:text-xl">Name: </span>
        {`${currentVan.name}`}
      </h3>
      <h3 className="text-sm md:text-xl ">
        <span className="font-bold text-sm md:text-xl">Category: </span>
        {`${currentVan.type}`}
      </h3>
      <h3 className="text-sm md:text-xl  max-w-2xl ">
        <span className="font-bold text-sm md:text-xl">Description: </span>
        {`${currentVan.description}`}
      </h3>
    </div>
  );
};

export default HostVanInfo;
