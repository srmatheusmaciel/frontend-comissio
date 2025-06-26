import { Link } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 #1f2937 to-slate-900 flex items-center justify-center p-4">
            <div className="relative z-10 w-full max-w-md">
      <h1 className="text-3xl font-bold text-white mb-2">Dashboard Principal</h1>
      <p className="text-gray-400 text-sm">Bem-vindo! Você está na área principal da aplicação.</p>
      <br />
      <Link to="/login" style={{ textDecoration: 'underline' }} className="text-gray-400 text-sm">
        Voltar para a página de Login (Temporário)
      </Link>
      </div>
    </div>
  );
};

export default DashboardPage;