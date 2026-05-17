
import { createContext, useEffect, useState } from 'react';
import '../styles/app.css';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom'
import Home from '../nav/Home';
import About from '../nav/About';
import Blog from '../nav/Blog';
import MainLayout from './MainLayout';

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "blog/:id",
        element: <Blog />
      },
    ]
  }
]
)
export default function App() {
  return <RouterProvider router={myRouter} />
}