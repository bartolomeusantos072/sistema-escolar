import { useState } from "react";
import styles from '../pages/CadastrarAlunos.module.css'

function AlunoForm({adicionarAluno}){

    const [nome, setNome] = useState('');

    function handleSubmit(e){
        e.preventDefault();

        if(!nome.trim()) return;

        adicionarAluno(nome);
        setNome('');
    }

    return(
        <form onSubmit={handleSubmit} className={styles.form}>
            <input 
                type="text"
                placeholder="Nome do aluno"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <button type="submit">Adicionar</button>
        </form>
    );
}

export default AlunoForm;