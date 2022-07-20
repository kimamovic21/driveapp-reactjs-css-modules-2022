import React from 'react';
import styles from './Footer.module.css';
import Logo from '../../images/logo_dark.png'

const Footer = () => {
  return (
    <div className={styles.footer}>

        <div className={styles.container}>
            <img src={Logo} alt="Logo" />
            <button>Share a car</button>
        </div>

    </div>
  )
}

export default Footer;



// 1. div roditelj elementu dodajemo klasu
// 2. dodajemo div sa klasom container
// 3. unutar diva sa klasom container dodajemo img html element
// 4. 

