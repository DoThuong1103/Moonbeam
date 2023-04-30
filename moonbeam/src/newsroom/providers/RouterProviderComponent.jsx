import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "../components/layouts/homeLayout";
import NewsRoom from "../pages/NewsRoom";
import MoonbeamAcceleratorCohort from "../pages/MoonbeamAcceleratorCohort";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <NewsRoom />,
      },
      {
        path: "announcements/moonbeam-accelerator-cohort/",
        element: <MoonbeamAcceleratorCohort />,
      },
    ],
  },
]);
//
const RouterProviderComponent = () => {
  return <RouterProvider router={router} />;
};

export default RouterProviderComponent;
