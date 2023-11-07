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
        element: (
          <PrivateRoutes>
            <Services></Services>
          </PrivateRoutes>
        ),
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/add-service",
        element: <AddServicePage></AddServicePage>,
      },
      {
        path: "/manage-service",
        element: (
          <PrivateRoutes>
            <ManageServicePage></ManageServicePage>
          </PrivateRoutes>
        ),
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/single-service/:id",
        element: <SingleServices></SingleServices>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/my-schedules",
        element: <MySchedulePage></MySchedulePage>,
      },
      {
        path: "/update-service",
        element: <UpdateService></UpdateService>,
      },
    ],
  },
]);

export default router;
