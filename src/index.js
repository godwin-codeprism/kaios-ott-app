import React from 'react';
import ReactDOM from 'react-dom/client';
// import {
//   createBrowserRouter,
//   RouterProvider
// } from "react-router-dom";
import './index.css';
// import App from './App';
import Router from './Router';
// import VideoScreen from './pages/videoScreen';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//   },
//   {
//     path: "/video",
//     element: <VideoScreen/>
//   }
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <RouterProvider router={router} /> */}
     <Router/>
  </React.StrictMode>
);
