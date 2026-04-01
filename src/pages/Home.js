import { useTheme } from '../context/ThemeContext';
import styles from './Home.module.css';
import { FaUserGraduate, FaClipboardList, FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AiFillDashboard } from 'react-icons/ai';

function Home() {
    const { darkMode } = useTheme();

    // 1. Array de Configuração dos Cards (Dados)
    const cardsInfo = [
        { id: 1, titulo: 'Cadastro', desc: 'Gerenciamento de alunos', rota: '/cadastrarAlunos', icon: <FaUserGraduate className={styles.icon}/> },
        { id: 2, titulo: 'Alunos', desc: 'Alunos matriculados', rota: '/Alunos', icon: <FaClipboardList className={styles.icon}/> },
        { id: 3, titulo: 'Biblioteca', desc: 'Acervo de livros', rota: '/Biblioteca', icon: <FaBook className={styles.icon}/> },
        { id: 4, titulo: 'Livro', desc: 'Cadastrar livros', rota: '/cadastrarLivros', icon: <FaBook className={styles.icon}/> },
        { id: 5, titulo: 'Dashboard', desc: 'Estatísticas da escola', rota: '/Dashboard', icon: <AiFillDashboard className={styles.icon}/> }
    ];

    const alunosPorSerie = [
        { serie: '1º ano', total: 12 },
        { serie: '2º ano', total: 8 },
        { serie: '3º ano', total: 15 },
    ];

    return (
        /* 2. Aplicação do Dark Mode no container principal */
        <div className={`${styles.container} ${darkMode ? 'dark-mode-global' : ''}`}>
            
            <header className={styles.header}>
                <h1>Home</h1>
                <p>Bem vindos à Escola React.js</p>
            </header>

            {/* 3. Renderização Automática dos Cards */}
            <section className={styles.cards}>
                {cardsInfo.map((card) => (
                    <div key={card.id} className={styles.card}>
                        {card.icon}
                        <h3>{card.titulo}</h3>
                        <p>{card.desc}</p>
                        <Link to={card.rota}>Acessar</Link>
                    </div>
                ))}
            </section>   

            <section className={styles.chart}>
                <h2>Alunos por série</h2>
                {alunosPorSerie.map((item, index) => (
                    <div key={index} className={styles.barContainer}>
                        <span>{item.serie}</span>
                        {/* No Dark Mode, verifique se a cor dessa barra está no index.css */}
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