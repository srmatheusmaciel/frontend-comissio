import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, User, Lock, Loader2 } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { login as apiLogin, type LoginCredentials } from '../../services/authService';
import type { LoginResponse } from '../../services/authService';

import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';

import logoComissio from '../../assets/logo-comissio.png';


const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const credentials: LoginCredentials = { username, password };
      const data: LoginResponse = await apiLogin(credentials);
      
      login(data.token);

      navigate('/');

    } catch (err) {
      setError('Falha no login. Verifique suas credenciais.');
      console.error("Detalhes do erro de login:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 #1f2937 to-slate-900 flex items-center justify-center p-4">
      <div className="relative z-10 w-full max-w-md">
        <Card>
          <div className="text-center mb-8">
            <img 
                src={logoComissio} 
                alt="Logo Comissio" 
                className="w-64 h-64 mx-auto mb-6 rounded-full"
              />
            <h1 className="text-3xl font-bold text-white mb-2">Login</h1>
            <p className="text-gray-400 text-sm">Entre na sua conta para continuar</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Usuário</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Digite seu usuário"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Senha</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua senha"
                  required
                  className="pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-400"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-900/50 text-red-300 border border-red-500/30 rounded-lg p-3 text-center text-sm">
                {error}
              </div>
            )}
            
            <Button type="submit" disabled={loading}>
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Entrando...</span>
                </div>
              ) : (
                'Entrar'
              )}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;