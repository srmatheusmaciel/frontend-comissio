import LoginPage from './pages/LoginPage';
import DashboardPage from "./pages/DashboardPage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

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
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  )
   
}

export default App
