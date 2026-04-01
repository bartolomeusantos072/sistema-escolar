import { useState } from 'react';
import styles from './Home.module.css';
import {FaSun, FaMoon, FaUserGraduate, FaClipboardList, FaBook} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {AiFillDashboard} from 'react-icons/ai'

function Home(){

    const[darkMode, setDarkMode] = useState(false);

    const alunosPorSerie = [
        {serie: '1º ano', total: 12},
        {serie: '2º ano', total: 8},
        {serie: '3º ano', total: 15},
    ];

    return(

        <div className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}>
            
            <header className={styles.header}>
                <h1>Home</h1>
                <p>Bem vindos à Escola React.js</p>

                <button 
                    className={styles.themeBtn}
                    onClick={() => setDarkMode(!darkMode)}
                >
                    {darkMode ? <FaSun/> : <FaMoon/>}
                </button>
            </header>

            <section className={styles.cards}>
                <div className={styles.card}>
                    <FaUserGraduate className={styles.icon}/>
                    <h3>Cadastro</h3>
                    <p>Gerenciamento de alunos</p>
                    <Link to='/cadastarAlunos'>Acessar</Link>
                </div>
                <div className={styles.card}>
                    <FaClipboardList className={styles.icon}/>
                    <h3>Alunos</h3>
                    <p>Alunos matriculados</p>
                    <Link to='/alunos'>Acessar</Link>
                </div>
                <div className={styles.card}>
                    <FaBook className={styles.icon}/>
                    <h3>Biblioteca</h3>
                    <p>Encontre os livros em nosso acervo</p>
                    <Link to='/biblioteca'>Acessar</Link>
                </div>
                <div className={styles.card}>
                    <AiFillDashboard className={styles.icon}/>
                    <h3>Dashboard</h3>
                    <p>Estatísticas da escola</p>
                    <Link to='/dashboard'>Acessar</Link>
                </div>
            </section>   

            <section className={styles.chart}>
                <h2>Alunos por série</h2>

                {alunosPorSerie.map((item, index) =>(
                    <div key={index} className={styles.barContainer}>
                        <span>{item.serie}</span>
                        <div className={styles.bar}
                            style={{width: `${item.total*10}px`}}
                        >
                            {item.total}
                        </div>
                    </div>
                ))}
            </section>

        </div>
    );

}

export default Home;