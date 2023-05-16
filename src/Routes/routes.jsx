import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import Dashboard from "../Layouts/Dashboard";
import Home from "../components/Home/Home";
import EventDetails from "../components/Home/EventDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Bookings from "../components/Bookings/Bookings";

const router = createBrowserRouter([

    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('http://localhost:5000/events')
        },
        {
          path: '/event-details/:id',
          element: <EventDetails></EventDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/events/${params.id}`)
        },
        {
          path: '/bookings',
          element: <Bookings></Bookings>
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
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    },
   
  ]);

export default router;