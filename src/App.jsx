import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route ath="/" element={<Root />}> </Route>
  )
);


const App = () => {
  return (
    <div> 
      <RouterProvider router={router} />
    </div>
  )
}

export default App