import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import RootLayout from '../layouts/main/RootLayout';
import HomePage from '../pages/home/HomePage';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    )
);

export default router