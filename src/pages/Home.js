import { useTheme } from '../context/ThemeContext';
import styles from './Home.module.css';
import { FaSun, FaMoon, FaUserGraduate, FaClipboardList, FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AiFillDashboard } from 'react-icons/ai';

function Home() {
    // 2. REMOVA o useState daqui. 
    // Agora pegamos o estado e a função do "serviço global" de tema.
    const { darkMode, toggleTheme } = useTheme();

    const alunosPorSerie = [
        { serie: '1º ano', total: 12 },
        { serie: '2º ano', total: 8 },
        { serie: '3º ano', total: 15 },
    ];

    return (
        // 3. A lógica de classes continua funcionando, mas lendo o darkMode GLOBAL
        <div className={styles.container}>
            
            <header className={styles.header}>
                <h1>Home</h1>
                <div>
                <p>Bem vindos à Escola React.js</p>
                </div>

                
            </header>

            <section className={styles.cards}>
                <div className={styles.card}>
                    <FaUserGraduate className={styles.icon}/>
                    <h3>Cadastro</h3>
                    <p>Gerenciamento de alunos</p>
                    <Link to='/cadastarAlunos'>Acessar</Link>
                </div>
                {/* ... restante dos cards (Alunos, Biblioteca, Dashboard) ... */}
                <div className={styles.card}>
                    <FaClipboardList className={styles.icon}/>
                    <h3>Alunos</h3>
                    <p>Alunos matriculados</p>
                    <Link to='/Alunos'>Acessar</Link>
                </div>
                <div className={styles.card}>
                    <FaBook className={styles.icon}/>
                    <h3>Biblioteca</h3>
                    <p>Encontre os livros em nosso acervo</p>
                    <Link to='/Biblioteca'>Acessar</Link>
                </div>
                <div className={styles.card}>
                    <AiFillDashboard className={styles.icon}/>
                    <h3>Dashboard</h3>
                    <p>Estatísticas da escola</p>
                    <Link to='/Dashboard'>Acessar</Link>
                </div>
            </section>   

            <section className={styles.chart}>
                <h2>Alunos por série</h2>
                {alunosPorSerie.map((item, index) => (
                    <div key={index} className={styles.barContainer}>
                        <span>{item.serie}</span>
                        <div className={styles.bar} style={{ width: `${item.total * 10}px` }}>
                            {item.total}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Home;