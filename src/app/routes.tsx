import { createBrowserRouter } from "react-router"
import HomePage from "../pages/HomePage"
import NotFoundPage from "../pages/NotFoundPage"
import ServicesPage from "../pages/ServicesPage"

export const router = createBrowserRouter([
  { path: "/", Component: HomePage },
  { path: "/servicios", Component: ServicesPage },
  { path: "*", Component: NotFoundPage },
])
