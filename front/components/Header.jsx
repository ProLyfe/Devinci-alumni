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
                <a href="" className={styles.navLinks}>ACTUS</a>
                <a href="" className={styles.navLinks}>EVENTS</a>
                <a href="" className={styles.navLinks}>GROUPES</a>
                <a href="" className={styles.navLinks}>CARRIÈRE</a>
                <a href="" className={styles.navLinks}>LIFELONG LEARNING</a>
                <a href="" className={styles.navLinks}>S'ENGAGER</a>
                <a href="" className={styles.navLinks}>ANNUAIRE</a>
                <a href="" className={styles.navLinks}>SERVICES</a>
                <a href="" className={styles.navLinks}>CONTACT</a>
                <Link href="/parrain" className={styles.navLinks}>PARRAINAGE</Link>
           </div>
        </div>
    </header>
);

export default Header;