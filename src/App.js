import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Authentication/Login/Login";
import Signup from "./components/Authentication/Signup/Signup";
import { auth } from "./firebase";
import "./App.css";
import Root from "./components/Root";
import Uploadquote from "./components/HomePage/Fileupload";


function App() {
  const [userName, setUserName] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        console.log(user.displayName);
        console.log(user.email);
      } else setUserName("");
    });
  }, []);


  const router = createBrowserRouter([
    { 
      path: '/',
      element: <Root name = {userName}/>,
      children:[
        { path: '/homepage', element: <Uploadquote/>},
        { path: '/', element: <Login/>},
        { path: '/signup', element: <Signup/>},
      ],
    },
  ])


  return <RouterProvider router={router} />
  
}

export default App;
