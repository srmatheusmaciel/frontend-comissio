import { Link } from 'react-router-dom';

const UnauthorizedPage = () => {
  return (
    <div style={{ padding: '2rem', color: 'white', textAlign: 'center' }}>
      <h1>Acesso Negado</h1>
      <p>Você não tem permissão para acessar esta página.</p>
      <br />
      <Link to="/" style={{ color: 'white', textDecoration: 'underline' }}>
        Voltar para o Dashboard
      </Link>
    </div>
  );
};

export default UnauthorizedPage;