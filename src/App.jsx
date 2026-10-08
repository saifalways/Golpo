import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import RootLayout from "./Componenet/RootLayout";
import Notification from "./Pages/Notification";
import Message from "./Pages/Message";
import Setting from "./Pages/Setting";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="/login" element={<Login />}></Route>

      <Route path="/root" element={<RootLayout />}>
        <Route path="home" element={<Home />}></Route>
        <Route path="notification" element={<Notification />}></Route>
        <Route path="message" element={<Message />}></Route>
        <Route path="setting" element={<Setting />}></Route>
      </Route>
    </Route>,
  ),
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
