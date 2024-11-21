import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Project from "./components/Project.jsx";

import App from "./App.jsx";
import Home from "./components/Home.jsx";
import SearchCandidate from "./components/SearchCandidate.jsx";
import Reports from "./components/Reports.jsx";
import Message from "./components/Message.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="home" element={<Home />} />
      <Route path="project" element={<Project />} />
      <Route path="searchcandidate" element={<SearchCandidate />} />
      <Route path="reports" element={<Reports />} />
      <Route path="message" element={<Message />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
