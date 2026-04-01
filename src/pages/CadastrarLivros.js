
import { useState } from "react";
import styles from './Biblioteca.module.css'; // Usando o mesmo CSS para manter o padrão

function CadastroLivro() {
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');

    const cadastrarLivro = async (e) => {
        e.preventDefault();

        const novoLivro = { titulo, autor };

        try {
            const resp = await fetch("http://localhost:5001/livros", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(novoLivro)
            });

            if (resp.ok) {
                alert("Livro cadastrado com sucesso!");
                setTitulo(''); // Limpa o campo
                setAutor('');  // Limpa o campo
            }
        } catch (err) {
            console.error("Erro ao cadastrar:", err);
        }
    };

    return (
        <div className={styles.container}>
            <h1>Cadastrar Livro</h1>
            <form onSubmit={cadastrarLivro}>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block' }}>Título:</label>
                    <input 
                        type="text" 
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block' }}>Autor:</label>
                    <input 
                        type="text" 
                        value={autor}
                        onChange={(e) => setAutor(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </div>
                <button type="submit" style={{
                    padding: '10px 20px',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}>
                    Salvar Livro
                </button>
            </form>
        </div>
    );
}

export default CadastroLivro;