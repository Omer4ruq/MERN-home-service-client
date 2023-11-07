import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import Services from "../pages/Services";
import AddServicePage from "../pages/AddServicePage";
import ManageServicePage from "../pages/ManageServicePage";
import Home from "../pages/Home";
import SingleServices from "../pages/SingleServices";

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
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/add-service",
        element: <AddServicePage></AddServicePage>,
      },
      {
        path: "/manage-service",
        element: <ManageServicePage></ManageServicePage>,
      },
      {
        path: "/single-service/:id",
        element: <SingleServices></SingleServices>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);

export default router;
