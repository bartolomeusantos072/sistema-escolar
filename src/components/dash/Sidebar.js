import styles from './Sidebar.module.css'


function Sidebar(){

    return (
        <aside className={styles.sidebar}>
            <h2>Sistema</h2>
            <ul>
                <li>Dashboard</li>
                <li>Alunos</li>
                <li>Biblioteca</li>
            </ul>
        </aside>
    );
}

export default Sidebar;