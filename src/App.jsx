import "./App.css";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "*", element: <Error /> },
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "vans", element: <Vans /> },
      { path: "vans/:id", element: <VanDetail /> },
      {
        path: "host",
        element: <HostLayout />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: "income", element: <Income /> },
          { path: "reviews", element: <Reviews /> },
          { path: "vans", element: <HostVan /> },
          {
            path: "vans/:id",
            element: <HostVanDetails />,
            children: [
              { index: true, element: <HostVanInfo /> },
              { path: "pricing", element: <HostVanPricing /> },
              { path: "photos", element: <HostVanPhotos /> },
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
