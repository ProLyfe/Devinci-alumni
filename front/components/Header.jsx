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
                <a href="" style={{ color: 'white'}}>ACTUS</a>
                <a href="" style={{ color: 'white'}}>EVENTS</a>
                <a href="" style={{ color: 'white'}}>GROUPES</a>
                <a href="" style={{ color: 'white'}}>CARRIÈRE</a>
                <a href="" style={{ color: 'white'}}>LIFELONG LEARNING</a>
                <a href="" style={{ color: 'white'}}>S'ENGAGER</a>
                <a href="" style={{ color: 'white'}}>ANNUAIRE</a>
                <a href="" style={{ color: 'white'}}>SERVICES</a>
                <a href="" style={{ color: 'white'}}>CONTACT</a>
                <Link href="/parrain" style={{ color: 'white'}}>PARRAINAGE</Link>
           </div>
        </div>
    </header>
);

export default Header;