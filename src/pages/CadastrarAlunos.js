import { useState, useEffect } from "react"; // Adicionei useEffect
import styles from './CadastrarAlunos.module.css'
import AlunoForm from "../components/AlunoForm";
import AlunoList from "../components/AlunoList";

function CadastrarAlunos(){
    const [mensagem, setMensagem] = useState('');
    const [alunos, setAlunos] = useState([]);
    const url = 'https://69cf5600a4647a9fc675448c.mockapi.io/api/alunos';

    // --- NOVIDADE: Carregar dados ao iniciar ---
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAlunos(data))
            .catch(err => console.error("Erro ao carregar:", err));
    }, []);

    async function adicionarAluno(nome) {
        
        const maiorId = alunos.reduce((max, aluno) => Math.max(max, Number(aluno.id)), 0);
        
        const novoId = (maiorId + 1).toString();

        const novoAluno = { 
            id: novoId, 
            nome: nome, 
            curso: "Informática" 
        };

        try {
            const resposta = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(novoAluno),
            });
            
            if (resposta.ok) {
                const alunoSalvo = await resposta.json();
                // Atualiza a lista local com o que veio do servidor
                setAlunos([...alunos, alunoSalvo]);
                setMensagem(`Aluno ${alunoSalvo.nome} (ID: ${alunoSalvo.id}) cadastrado!`);
                setTimeout(() => setMensagem(''), 3000);
            } else {
                setMensagem('Erro: O servidor recusou o cadastro (talvez ID duplicado).');
            }
        } catch (erro) {
            console.error("Erro ao salvar:", erro);
            setMensagem('Erro de conexão com o servidor.');
        }
    }

   

    async function removerAluno(id){
        try {
            await fetch(`${url}/${id}`, { method: 'DELETE' });
            setAlunos(alunos.filter(aluno => aluno.id !== id));
        } catch (err) {
            console.error("Erro ao deletar:", err);
        }
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