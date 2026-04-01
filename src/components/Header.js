import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { FaHome, FaUserGraduate, FaBook, FaSun, FaMoon } from 'react-icons/fa'; // Adicionei os ícones
import { IoSchoolOutline } from 'react-icons/io5';
import { useTheme } from '../context/ThemeContext'; // 1. Importação com chaves {}

function Header() {
    // 2. Consumindo o contexto global
    const { darkMode, toggleTheme } = useTheme();

    return (
        <header className={`${styles.header} ${darkMode ? styles.dark : styles.light}`}>
            <h1>Sistema Escolar <IoSchoolOutline/> </h1>

            <nav>
                <Link to='/'>
                    <FaHome /> Home
                </Link>
                <Link to='/alunos'>
                    <FaUserGraduate /> Alunos
                </Link>
                <Link to='/biblioteca'>
                    <FaBook/> Biblioteca
                </Link>

                {/* 3. Botão de alternar tema adicionado ao menu */}
                <button 
                    onClick={toggleTheme} 
                    className={styles.themeBtn}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '15px' }}
                >
                    {darkMode ? <FaSun color="yellow" size={20}/> : <FaMoon size={20}/>}
                </button>
            </nav>
        </header>
    );
}

export default Header;