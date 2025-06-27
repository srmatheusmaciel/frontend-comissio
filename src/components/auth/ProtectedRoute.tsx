import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import type { ReactNode } from 'react';

type ProtectedRouteProps = {
  children: ReactNode;
  allowedRoles?: string[];
};

export const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const { isAuthenticated, user } = useAuth();

  console.group("Depuração do ProtectedRoute");
  console.log("Rota sendo acessada:", window.location.pathname);
  console.log("Usuário está autenticado:", isAuthenticated);
  console.log("Objeto do usuário no contexto:", user);
  console.log("Perfis que o usuário TEM:", user?.roles);
  console.log("Perfis que a rota PERMITE:", allowedRoles);
  console.groupEnd();

  if (!isAuthenticated) {
    console.log("Usuário não autenticado, redirecionando para login");
    return <Navigate to="/login" replace />;
  }

  const userRoles = user?.roles || [];
  const hasRequiredRole = allowedRoles
  ? userRoles.some(role => allowedRoles.includes(role)) : true;

  if (!hasRequiredRole) {
    console.log(`Acesso negado. Usuário com perfis [${userRoles.join(', ')}]
     tentou acessar rota para [${allowedRoles?.join(', ')}]`);

    return <Navigate to="/acesso-negado" replace />;
  }

  return <>{children}</>;
};