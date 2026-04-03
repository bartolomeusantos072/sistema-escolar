
import { useState } from "react";
import styles from './CadastrarAlunos.module.css'
import AlunoForm from "../components/AlunoForm";
import AlunoList from "../components/AlunoList";

function CadastrarAlunos(){

    const [mensagem, setMensagem] = useState('');
    const [alunos, setAlunos] = useState([]);

    async function adicionarAluno(nome) {
        
        // O ", 0" no final evita erro se a lista estiver vazia
        const maiorId = alunos.reduce((max, aluno) => Math.max(max, Number(aluno.id)), 0);
        
        
        const novoId = (maiorId + 1).toString();

        const novoAluno = { 
            id: novoId, 
            nome: nome, 
            curso: "Informática" 
        };

        try {
            const resposta = await fetch('https://sua-api.vercel.app/alunos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(novoAluno),
            });

            if (resposta.ok) {
                const alunoSalvo = await resposta.json();
                setAlunos([...alunos, alunoSalvo]);
                setMensagem(`Aluno ${alunoSalvo.nome} (ID: ${alunoSalvo.id}) cadastrado!`);
                setTimeout(() => setMensagem(''), 3000);
            }
        } catch (erro) {
            console.error("Erro ao salvar:", erro);
        }
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