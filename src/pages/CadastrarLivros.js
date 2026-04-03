import { useState, useEffect } from "react";
import { useTheme } from '../context/ThemeContext'; 
import styles from './CadastrarLivros.module.css'; 
import LivroForm from "../components/LivroForm";
import LivroList from "../components/LivroList";

function CadastrarLivros() {
    // 1. Estados e Contextos
    const { darkMode } = useTheme(); 
    const [mensagem, setMensagem] = useState('');
    const [livros, setLivros] = useState([]); // Inicia como array vazio para o .map não quebrar
    
    // URL Única do MockAPI
    const url = "https://69cf5600a4647a9fc675448c.mockapi.io/api/livros";

    // 2. Função para BUSCAR livros (GET)
    // Criamos fora do useEffect para poder reutilizar se necessário
    const carregarLivros = async () => {
        try {
            const resposta = await fetch(url);
            if (!resposta.ok) throw new Error("Erro ao buscar dados do servidor");
            
            const dados = await resposta.json();
            setLivros(dados); // Aqui os livros aparecem na tela
        } catch (erro) {
            console.error("Erro no carregamento:", erro);
        }
    };

    // 3. useEffect para disparar a busca assim que a página abrir
    useEffect(() => {
        carregarLivros();
    }, []); // Array vazio [] significa: "executa apenas uma vez ao abrir"

    // 4. Função para ADICIONAR livro (POST)
    async function adicionarLivro(titulo, autor) {
        // O MockAPI gera o ID sozinho, então enviamos apenas os dados
        const novoLivro = { 
            titulo: titulo, 
            autor: autor 
        };

        try {
            const resposta = await fetch(url, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(novoLivro)
            });

            if (resposta.ok) {
                const livroSalvo = await resposta.json();
                
                // Atualiza a lista localmente sem precisar de F5
                setLivros(prevLivros => [...prevLivros, livroSalvo]);
                
                setMensagem(`Livro "${livroSalvo.titulo}" cadastrado com sucesso!`);
                setTimeout(() => setMensagem(''), 3000);
            }
        } catch (erro) {
            console.error("Erro ao salvar:", erro);
            setMensagem("Erro ao conectar com o servidor.");
        }
    }

    // 5. Função para REMOVER livro (DELETE)
    async function removerLivro(id) {
        try {
            const resposta = await fetch(`${url}/${id}`, {
                method: "DELETE"
            });

            if (resposta.ok) {
                // Remove da tela apenas o que foi deletado no servidor
                setLivros(prevLivros => prevLivros.filter(l => l.id !== id));
            }
        } catch (erro) {
            console.error("Erro ao remover:", erro);
        }
    }

    // 6. Renderização do Componente
    return (
        <div className={`${styles.container} ${darkMode ? 'dark-mode-global' : ''}`}>
            <h1>Gestão da Biblioteca</h1>

            {/* Exibe mensagem de feedback se houver */}
            {mensagem && <p className={styles.sucesso}>{mensagem}</p>}

            {/* Componente do Formulário */}
            <LivroForm adicionarLivro={adicionarLivro} />
            
            <hr style={{ margin: '20px 0', opacity: '0.2' }} />
            
            <h3>Livros no Acervo ({livros.length})</h3>
            
            {/* Componente da Lista de Livros */}
            <LivroList livros={livros} removerLivro={removerLivro} />
        </div>
    );
}

export default CadastrarLivros;