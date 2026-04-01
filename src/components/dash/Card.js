import styles from './Card.module.css';

function Card({titulo, valor}){

    return(
        <div className={styles.card}>
            <h3>{titulo}</h3>
            <p>{valor}</p>
        </div>
    );

}

export default Card;