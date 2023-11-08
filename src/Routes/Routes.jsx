import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import Services from "../pages/Services";
import AddServicePage from "../pages/AddServicePage";
import ManageServicePage from "../pages/ManageServicePage";
import Home from "../pages/Home";
import SingleServices from "../pages/SingleServices";
import MySchedulePage from "../pages/MySchedulePage";
import PrivateRoutes from "./PrivateRoutes";
import UpdateService from "../pages/UpdateService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () =>
          fetch("https://home-service-server-six.vercel.app/services"),
      },
      {
        path: "/add-service",
        element: (
          <PrivateRoutes>
            <AddServicePage></AddServicePage>
          </PrivateRoutes>
        ),
      },
      {
        path: "/manage-service",
        element: (
          <PrivateRoutes>
            <ManageServicePage></ManageServicePage>
          </PrivateRoutes>
        ),
        loader: () =>
          fetch("https://home-service-server-six.vercel.app/services"),
      },
      {
        path: "/single-service/:id",
        element: (
          <PrivateRoutes>
            <SingleServices></SingleServices>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://home-service-server-six.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/my-schedules",
        element: (
          <PrivateRoutes>
            <MySchedulePage></MySchedulePage>
          </PrivateRoutes>
        ),
      },
      {
        path: "/update-service/:id",
        element: (
          <PrivateRoutes>
            <UpdateService></UpdateService>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://home-service-server-six.vercel.app/services/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
