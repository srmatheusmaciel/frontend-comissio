import LoginPage from './pages/LoginPage';
import DashboardPage from "./pages/DashboardPage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import UnauthorizedPage from "./pages/UnauthorizedPage";

const EmployeesPage = () =>
  <h1 style={{color: 'white'}}>
    Página de Funcionários
  </h1>;


const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/acesso-negado",
    element: <UnauthorizedPage />,
  },
  {
    path: "/",
    element: ( 
    <ProtectedRoute>
    <DashboardPage />
    </ProtectedRoute>
    
    ),
  },

  {
    path: "/employees",
    element: ( 
    <ProtectedRoute allowedRoles={['ROLE_ADMIN', 'ROLE_MANAGER']}>
    <EmployeesPage />
    </ProtectedRoute>
    
    ),
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
