import { useState } from "react";
import styles from '../pages/CadastrarLivros.module.css';

function LivroForm({ adicionarLivro }) {
    // 1. Criamos um estado para cada campo do db.json
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        // 2. Validamos se ambos os campos foram preenchidos
        if (!titulo.trim() || !autor.trim()) {
            alert("Por favor, preencha o título e o autor.");
            return;
        }

        // 3. Passamos os dois valores para a função de cadastro
        adicionarLivro(titulo, autor);

        // 4. Limpamos os campos após o envio
        setTitulo('');
        setAutor('');
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input 
                type="text"
                placeholder="Título do Livro"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
            />
            <input 
                type="text"
                placeholder="Autor do Livro"
                value={autor}
                onChange={(e) => setAutor(e.target.value)}
                required
            />
            <button type="submit">Adicionar Livro</button>
        </form>
    );
}

export default LivroForm;