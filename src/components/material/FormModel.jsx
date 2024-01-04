/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import styles from "../layout/Forms.module.css";
import Swal from "sweetalert2";

import photo from '../../assets/photo.svg'

export default function Login() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");



  const handleLogin = (e) => {
    e.preventDefault();
  
    if(!username || !name || !password){
      setErrorMessage('Preencha corretamente os dados')
    }

    }


  
  function handleSubmit() {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    });
    window.location.reload()
  }

  return (
    <div className={styles.login_box}>

      <img src={photo} alt="ilustration" srcset={photo} width={350} height={80}/>
      
      <form onSubmit={handleLogin}>
        <div className={styles.user}>
          <input
            type="text"
            name=""
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Nome Completo</label>
        </div>
        <div className={styles.user}>
          <input
            type="text"
            name=""
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
        </div>
        <div className={styles.user}>
          <input
            type="text"
            name=""
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Telefone</label>
        </div>
        <center>
          <button
            type="submit"
            className={styles.submit}
            onClick={handleSubmit}
          >
            ENVIAR
          </button>
        </center>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      </form>
    </div>
  );
}
