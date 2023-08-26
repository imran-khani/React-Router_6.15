import data from "../../Data.json";
import { Link } from "react-router-dom";
const HostVans = () => {
  return (
    <div className="mt-10 p-5">
      <h1 className="text-2xl font-bold">Your listed vans</h1>
      {data.map((item) => {
        return data.length > 0 ? (
          <div key={item.id} className="flex flex-col gap-10">
            <Link to={`/host/vans/${item.id}`}>
              <div className="flex gap-5 items-center bg-white mt-3 rounded-md">
                <div>
                  <img className="w-20 h-20" src={item.imageUrl} alt="" />
                </div>
                <div>
                  <h2>{item.name}</h2>
                  <p className="text-gray-400">{`$${item.price}/day`}</p>
                </div>
              </div>
            </Link>
          </div>
        ) : (
          <div>Loading...</div>
        );
      })}
    </div>
  );
};

export default HostVans;
