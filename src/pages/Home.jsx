import { Link } from "react-router-dom";

export default function Home() {
   

    return (
        <div className="flex  flex-col justify-center md:mt-20 max-w-6xl mx-auto p-5" >
            <div className="home-container max-w-2xl flex flex-col justify-center mx-auto">
                <h1 className="mb-5">You got the travel plans,<br /> we got the travel vans.</h1>
                <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <Link to="vans">Find your van</Link>
            </div>
        </div>
    );
}
