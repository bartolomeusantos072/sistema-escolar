import styles from '../pages/CadastrarLivros.module.css'

function LivroList({livros, removerLivro}){

    if(livros.length == 0){
        return <p>Nenhum livro cadastrado.</p>;
    }

    return(
        <ul className = {styles.lista}>
            {livros.map(livro => (
                <li key={livro.id} className={styles.item}>
                    <strong>{livro.nome}</strong>
                    <button onClick={() => removerLivro(livro.id)}>
                        ❌
                    </button>                    
                </li>
            ))}
        </ul>
    );
}

export default LivroList;