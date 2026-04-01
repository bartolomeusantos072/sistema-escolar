import styles from '../pages/CadastrarAlunos.module.css'

function AlunoList({alunos, removerAluno}){

    if(alunos.length == 0){
        return <p>Nenhum aluno cadastrado.</p>;
    }

    return(
        <ul className = {styles.lista}>
            {alunos.map(aluno => (
                <li key={aluno.id} className={styles.item}>
                    <strong>{aluno.nome}</strong>
                    <button onClick={() => removerAluno(aluno.id)}>
                        ❌
                    </button>                    
                </li>
            ))}
        </ul>
    );
}

export default AlunoList;