import styles from '../styles/header.module.css';
import Image from 'next/image';
import Link from 'next/link';

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
                <a href="" className={styles.header}>ACTUS</a>
                <a href="" className={styles.header}>EVENTS</a>
                <a href="" className={styles.header}>GROUPES</a>
                <a href="" className={styles.header}>CARRIÈRE</a>
                <a href="" className={styles.header}>LIFELONG LEARNING</a>
                <a href="" className={styles.header}>S'ENGAGER</a>
                <a href="" className={styles.header}>ANNUAIRE</a>
                <a href="" className={styles.header}>SERVICES</a>
                <a href="" className={styles.header}>CONTACT</a>
                <Link href="/parrain" className={styles.header}>PARRAINAGE</Link>
           </div>
        </div>
    </header>
);

export default Header;