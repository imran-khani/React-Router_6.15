import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostVan from "./pages/Host/HostVans";
import HostLayout from "./components/HostLayout";
import HostVanDetails from "./pages/Host/HostVanDetails";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import Error from "./pages/Error";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "*", element: <Error /> },
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "login", element: <Login /> },
      { path: "vans", element: <Vans /> },
      { path: "vans/:id", element: <VanDetail /> },
      {
        path: "host",
        element: <HostLayout />,
        children: [
          { index: true, element: <Dashboard />,loader:async ()=>{return null} },
          { path: "income", element: <Income />,loader:async ()=>{return null} },
          { path: "reviews", element: <Reviews />,loader:async ()=>{return null} },
          { path: "vans", element: <HostVan />,loader:async ()=>{return null} },
          {
            path: "vans/:id",
            element: <HostVanDetails />,loader:async ()=>{return null},
            children: [
              { index: true, element: <HostVanInfo />,loader:async ()=>{return null} },
              { path: "pricing", element: <HostVanPricing />,loader:async ()=>{return null} },
              { path: "photos", element: <HostVanPhotos />,loader:async ()=>{return null} },
            ],
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  );
};

export default App;
