import { useState } from 'react';
import styles from '../layout/Login.module.css'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username === 'admin' && password === 'admin') {
      console.log("Autenticação")
    } else {
      setErrorMessage('Credenciais inválidas');
    }
  };
  function handleSubmit(e) {
    e.preventDefault(true);
    if (username === 'admin' && password === 'admin') {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Acesso liberado',
        showConfirmButton: false,
        timer: 1500
      })
      return navigate("/navbar")
      
    } else{
      setErrorMessage ('Credenciais inválidas')
    }
  }

  return (
    <div className={styles.login_box}>
      <form onSubmit={handleLogin}>
        <div className={styles.user}>
          <input 
          type="text" 
          name="" 
          required 
          value={username}
          onChange={(e) => setUsername(e.target.value)} />
          <label>Username</label>
        </div>
        <div className={styles.user}>
          <input 
          type="password" 
          name="" 
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
          <label>Password</label>
        </div>
        <center>
            <button type="submit"className={styles.submit} onClick={handleSubmit}>
              
            SUBMIT
            </button>
            <span></span>
        </center>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      </form>
    </div>
  );
}
