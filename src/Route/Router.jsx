import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import Room from "../Pages/Rooms/Room";
import AboutUs from "../Pages/AboutUs/AboutUs";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import PrivateRoute from "./PrivateRoute";
import RoomDetails from "../Pages/Rooms/RoomDetails";
import MyBookings from "../Pages/MyBookings/MyBookings";
import Error from "../Layout/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/rooms",
        element: <Room></Room>,
        loader: () => fetch("https://b9a11-assignment-server-site.vercel.app/rooms"),
      },
      {
        path: "/roomDetails/:id",
        element: <RoomDetails></RoomDetails>,
        loader: () => fetch("https://b9a11-assignment-server-site.vercel.app/rooms"),
      },
      {
        path: "/mybookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
