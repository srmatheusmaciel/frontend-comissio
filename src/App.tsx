import LoginPage from './pages/LoginPage';
import DashboardPage from "./pages/DashboardPage";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <DashboardPage />,
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
   
}

export default App
