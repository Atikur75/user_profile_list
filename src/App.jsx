import { useState } from 'react'
import './App.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';
import UserProfile from './pages/userProfile';
import store from './store';
import { Provider } from 'react-redux';
import UserProfileDetails from './pages/userProfileDetails';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/userprofile" element={<UserProfile />}></Route>
        <Route path="/userprofiledetails" element={<UserProfileDetails />}></Route>
      </Route>
    )
  );

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App
