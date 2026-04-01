import { useState, useEffect } from "react";
import { useTheme } from '../context/ThemeContext'; // Importante para o Desafio 4
import styles from './CadastrarLivros.module.css'; // Reaproveitando o CSS
import LivroForm from "../components/LivroForm";
import LivroList from "../components/LivroList";

function CadastrarLivros() {
    const { darkMode } = useTheme(); // Consumindo o tema global
    const [mensagem, setMensagem] = useState('');
    const [livros, setLivros] = useState([]);

    // URL do seu JSON Server
    const url = "http://localhost:5000/livros";

    // Carregar livros ao abrir a página
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setLivros(data))
            .catch(err => console.error("Erro ao carregar livros:", err));
    }, []);

    // Função para adicionar (POST no banco)
    async function adicionarLivro(titulo, autor) {
        const novoLivro = { titulo, autor };

        try {
            const resp = await fetch(url, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(novoLivro)
            });

            if (resp.ok) {
                const livroSalvo = await resp.json();
                setLivros([...livros, livroSalvo]); // Atualiza a lista na tela
                setMensagem('Livro cadastrado com sucesso!');
                setTimeout(() => setMensagem(''), 3000);
            }
        } catch (err) {
            console.error("Erro ao salvar:", err);
        }
    }

    // Função para remover (DELETE no banco)
    async function removerLivro(id) {
        await fetch(`${url}/${id}`, { method: "DELETE" });
        setLivros(livros.filter(livro => livro.id !== id));
    }

    return (
        /* Aplicando a lógica do Dark Mode para o Desafio 4 */
        <div className={`${styles.container} ${darkMode ? 'dark-mode-global' : ''}`}>
            <h1>Cadastrar Livros</h1>

            {mensagem && <p className={styles.sucesso}>{mensagem}</p>}

            <LivroForm adicionarLivro={adicionarLivro} />
            
            <hr style={{ margin: '20px 0', borderColor: 'var(--border-color)' }} />
            
            <h3>Livros no Acervo</h3>
            <LivroList livros={livros} removerLivro={removerLivro} />
        </div>
    );
}

export default CadastrarLivros;