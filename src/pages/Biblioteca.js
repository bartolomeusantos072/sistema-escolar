
import { useState, useEffect } from "react";
import styles from './Biblioteca.module.css';

function Biblioteca() {
    const [livros, setLivros] = useState([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
    const carregarLivros = async () => {
        try {
           const resposta = await fetch('https://69cf5600a4647a9fc675448c.mockapi.io/api/livros')
            const dadosCompletos = await resposta.json();
    
            setLivros(dadosCompletos);     
            setLoading(false);
        } catch (erro) {
            console.error("Erro:", erro);
            setLoading(false);
        }
    };

    carregarLivros();
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