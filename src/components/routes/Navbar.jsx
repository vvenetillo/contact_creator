import { Link, Outlet, useNavigate } from 'react-router-dom';
import styles from '../layout/Navbar.module.css';
import Cadastro from '../pages/Cadastro';

export default function Navbar() {

    const navigate = useNavigate ()

    function submit (e){
        e.preventDefault();
        return navigate('/cadastro')
    }

    return (
        <>
        <div className={styles.navbar}>
           
            <h3 className={styles.main}>Cadastro 💻</h3>
            <ul className={styles.item}>
                <li>
                    <Link to="/" className={styles.cadastro} onClick={submit}>
                        Cadastrar Cliente 👤
                    </Link>
                </li>
                <li>
                    <Link to="/list" className={styles.list} >
                        Lista de Clientes 🧾
                    </Link>
                </li>
            </ul>
            <button>
                <Link to="/" className={styles.out}>
                    Sair ⛔
                </Link>
            </button>
            <div className={styles.content}>
                <Outlet />
                <Cadastro/>
            </div>
        </div>
     </>
    );
}

