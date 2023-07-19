import styles from '../styles/header.module.css';
import Image from 'next/image';

const Header = () => (
    <header className={styles.header}>
        <div className={styles.logoHeader}>
           <div className={styles.logoSubHeader}>
            <Image
                    src="/devinci-alumni.gif"
                    width={150}
                    height={100}
                    alt="Picture of the author"
                />
           </div>
        </div>
        <div className={styles.subHeaderContainer}>
           <div className={styles.subHeader}>
                <a href="">ACTUS</a>
                <a href="">EVENTS</a>
                <a href="">GROUPES</a>
                <a href="">CARRIÈRE</a>
                <a href="">LIFELONG LEARNING</a>
                <a href="">S'ENGAGER</a>
                <a href="">ANNUAIRE</a>
                <a href="">SERVICES</a>
                <a href="">CONTACT</a>
           </div>
        </div>
    </header>
);

export default Header;