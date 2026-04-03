
import { useEffect, useState } from "react";
import styles from './Alunos.module.css';

function Alunos() {
    const [alunos, setAlunos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [busca, setBusca] = useState('');

    useEffect(() => {
        const carregarDados = async () => {
            try {
               const resposta = await fetch('https://69cf5600a4647a9fc675448c.mockapi.io/api/alunos')
                
                if (!resposta.ok) {
                    throw new Error("Erro ao buscar os dados");
                }

                const dados = await resposta.json();

                setTimeout(() => {
                    setAlunos(dados);
                    setLoading(false);
                }, 2000);

            } catch (erro) {
                console.error("Falha na requisição:", erro);
                setLoading(false);
            }
        };

        carregarDados();
    }, []);

    // Lógica de filtro do Desafio 1
    const alunosFiltrados = alunos.filter(aluno =>
        aluno.nome.toLowerCase().includes(busca.toLowerCase())
    );

    if (loading) {
        return <p className={styles.loading}>Carregando alunos...</p>;
    }

    return (
        <div className={styles.container}>
            <h1>Lista de Alunos</h1>

            <div className={styles.buscaContainer}>
                <input
                    type="text"
                    placeholder="Buscar aluno pelo nome..."
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                    className={styles.inputBusca}
                />
            </div>

            {alunosFiltrados.length === 0 ? (
                <p className={styles.vazio}>Nenhum aluno encontrado.</p>
            ) : (
                <table className={styles.tabela}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alunosFiltrados.map(aluno => (
                            <tr key={aluno.id}>
                                <td>{aluno.id}</td>
                                <td>{aluno.nome}</td>
                                <td>{aluno.curso}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Alunos;