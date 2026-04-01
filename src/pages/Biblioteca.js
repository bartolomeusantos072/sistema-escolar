import { useState, useEffect } from "react";
import styles from './Biblioteca.module.css'


function Biblioteca(){

    const [livros, setLivros] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( ()=> {

        setTimeout( () => {
            //simulando dados vindo de uma API
            fetch("http://localhost:5001/livros")
            .then((resp) => resp.json())
            .then((data) => {
                setLivros(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });

        }, 2000);
    
        /*
        const dados = [
            {id: 1, titulo: 'Fundamentos de React', autor: 'Maria Silva'},
            {id: 2, titulo: 'React na prática', autor: 'João Souza'},
            {id: 3, titulo: 'Linguagens de programação', autor: 'Ana Costa'},
            {id: 4, titulo: 'Livro 4', autor: 'José da Silva'},
            {id: 5, titulo: 'Livro 5', autor: 'Fernanda Santos'},
            {id: 6, titulo: 'Livro 6', autor: 'Gabriel Henrique'},
        ]

        setTimeout(() =>{
            setLivros(dados);
            setLoading(false);
        }, 2000);
        */

    }, []);
    
    if(loading){
        return <p>Carregando livros...</p>
    }

    return(
        <div className={styles.container}>
            <h1>Lista de Livros</h1>

            {livros.length === 0 ? (<p>Nenhum livro encontrado</p>) 
            : (
                <table className={styles.tabela}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Título</th>
                            <th>Autor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map(livro =>(
                            <tr key={livro.id}>
                                <td>{livro.id}</td>
                                <td>{livro.titulo}</td>
                                <td>{livro.autor}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
    
}

export default Biblioteca;