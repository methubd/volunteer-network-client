import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import Dashboard from "../Layouts/Dashboard";
import Home from "../components/Home/Home";

const router = createBrowserRouter([

    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('http://localhost:5000/events')
        }
      ]
    },
    {
      path: '/register',
      element: <Register></Register>
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/addEvent',
      element: <Dashboard></Dashboard>,
    },
   
  ]);

export default router;