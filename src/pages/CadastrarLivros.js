import { useState, useEffect } from "react";
import { useTheme } from '../context/ThemeContext'; 
import styles from './CadastrarLivros.module.css'; 
import LivroForm from "../components/LivroForm";
import LivroList from "../components/LivroList";

function CadastrarLivros() {
    const { darkMode } = useTheme(); 
    const [mensagem, setMensagem] = useState('');
    const [livros, setLivros] = useState([]);

    // URL da sua API na Vercel (ou localhost para teste)
    const url = "http://localhost:5000/livros"; 

    // 1. Carregar os livros ao montar o componente
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setLivros(data))
            .catch(err => console.error("Erro ao buscar livros:", err));
    }, []);

    // 2. Função interna para Adicionar (Onde vai a lógica do ID + 1)
    async function adicionarLivro(titulo, autor) {
        // Cálculo do ID baseado no maior existente
        const maiorId = livros.length > 0 
            ? Math.max(...livros.map(l => Number(l.id))) 
            : 0;
        
        const novoId = maiorId + 1;

        const novoLivro = { 
            id: novoId, 
            titulo: titulo, 
            autor: autor 
        };

        try {
            const resp = await fetch(url, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(novoLivro)
            });

            if (resp.ok) {
                const livroSalvo = await resp.json();
                // Atualiza o estado para refletir na tela imediatamente
                setLivros([...livros, livroSalvo]); 
                setMensagem(`Livro "${livroSalvo.titulo}" cadastrado com ID ${livroSalvo.id}!`);
                setTimeout(() => setMensagem(''), 3000);
            }
        } catch (err) {
            console.error("Erro ao salvar livro:", err);
            setMensagem("Erro ao conectar com o servidor.");
        }
    }

    // 3. Função para Remover
    async function removerLivro(id) {
        try {
            await fetch(`${url}/${id}`, { method: "DELETE" });
            setLivros(livros.filter(l => l.id !== id));
        } catch (err) {
            console.error("Erro ao remover:", err);
        }
    }

    return (
        <div className={`${styles.container} ${darkMode ? 'dark-mode-global' : ''}`}>
            <h1>Gestão da Biblioteca</h1>

            {mensagem && <p className={styles.sucesso}>{mensagem}</p>}

            {/* Passamos a função interna para o formulário */}
            <LivroForm adicionarLivro={adicionarLivro} />
            
            <hr style={{ margin: '20px 0', opacity: '0.2' }} />
            
            <h3>Livros no Acervo</h3>
            <LivroList livros={livros} removerLivro={removerLivro} />
        </div>
    );
}

export default CadastrarLivros;