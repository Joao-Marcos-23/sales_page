import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import '../styles/login.css';

export default function Login() {

  const Navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [type, setType] = useState('password');
  const [isFormValid, setIsFormValid] = useState(false);

  const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  useEffect(() => {
    const emailValido = validarEmail(email);
    const senhaValida = password.length >= 8;
    setIsFormValid(emailValido && senhaValida);
  }, [email, password]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validarEmail(email)) {
      setMessage('❌ E-mail inválido');
      setTimeout(() => setMessage(''), 6000);
      return;
    }

    if (password.length < 8) {
      setMessage('❌ Senha deve ter no mínimo 8 caracteres');
      setTimeout(() => setMessage(''), 6000);
      return;
    }

    Navigate('/products', { state: { senha: password } });
  };

  return (
    <div className="container">
   <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Faça o login em sua conta</h2>

        <input
          type="text"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type={type}
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" disabled={!isFormValid}>
          Entrar
        </button>

        <button
          type="button"
          onClick={() => setType(type === 'text' ? 'password' : 'text')}
        >
          {type === 'text' ? 'Ocultar senha' : 'Mostrar senha'}
        </button>

        <p>{message}</p>

        <Link to='/products' state={{ senha: password }}>
          Entrar via link
        </Link>
      </form>
    </div>
    </div>
  );
}
