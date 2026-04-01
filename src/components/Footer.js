import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer(){

    return(
        <footer className={styles.footer}>
            <p>© 2026 - Sistema Escolar</p>
            <ul className={styles.social_list}>
                <li>
                    <a href="https://facebook.com" target="_blank" rel='noopener noreferrer'>
                        <FaFacebook/>
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com" target="_blank" rel='noopener noreferrer'> 
                        <FaInstagram/>
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com" target="_blank" rel='noopener noreferrer'>
                        <FaLinkedin/>
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;