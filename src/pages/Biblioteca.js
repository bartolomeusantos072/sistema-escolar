
import { useState, useEffect } from "react";
import styles from './Biblioteca.module.css';

function Biblioteca() {
    const [livros, setLivros] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const buscarLivros = async () => {
            try {
                // O await substitui o .then()
                const resp = await fetch("http://localhost:5001/livros");
                const data = await resp.json();
                
                // Mantendo o seu delay de 2s para o loading
                setTimeout(() => {
                    setLivros(data);
                    setLoading(false);
                }, 2000);
            } catch (err) {
                console.log("Erro ao buscar livros:", err);
                setLoading(false);
            }
        };

        buscarLivros();
    }, []);

    if (loading) {
        return <p className={styles.loading}>Carregando livros...</p>;
    }

    return (
        <div className={styles.container}>
            <h1>Lista de Livros</h1>

            {livros.length === 0 ? (
                <p className={styles.vazio}>Nenhum livro encontrado</p>
            ) : (
                <table className={styles.tabela}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Título</th>
                            <th>Autor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map(livro => (
                            <tr key={livro.id}>
                                <td>{livro.id}</td>
                                <td>{livro.titulo}</td>
                                <td>{livro.autor}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Biblioteca;