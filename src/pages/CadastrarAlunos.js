import { useState } from "react";
import styles from './CadastrarAlunos.module.css'
import AlunoForm from "../components/AlunoForm";
import AlunoList from "../components/AlunoList";

function CadastrarAlunos(){

    const [mensagem, setMensagem] = useState('');
    const [alunos, setAlunos] = useState([]);

    function adicionarAluno(nome){
        setAlunos([...alunos, {nome, id: Date.now() }]);
        setMensagem('Aluno cadastrado com sucesso!');
        setTimeout(() => setMensagem(''), 3000);
    }

    function removerAluno(id){
        setAlunos(alunos.filter(aluno => aluno.id !== id))
    }

    return (       
        <div className={styles.container}>
            <h1>Cadastrar Alunos</h1>

            {mensagem && <p className={styles.sucesso} >{mensagem}</p>}

            <AlunoForm adicionarAluno={adicionarAluno} />
            <AlunoList alunos={alunos} removerAluno={removerAluno}/>
        </div>
    );
}

export default CadastrarAlunos;