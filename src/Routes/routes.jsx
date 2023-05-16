import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../components/Home/Home";
import Register from "../components/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        }
      ]
    },
    {
      path: '/register',
      element: <Register></Register>
    }
  ]);

export default router;