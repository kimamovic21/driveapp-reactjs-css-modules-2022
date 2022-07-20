import React from 'react';
import styles from './Driver.module.css';
import Drive from '../../images/drive.png';

const Driver = () => {
  return (
    <div className={styles.driver}>

        <div className={styles.left}>
            <img src={Drive} alt="Driver" />
        </div>

        <div className={styles.right}>
            <h2>Find your perfect car <span>to try before you buy</span></h2>
            <p>Make sure your future wheels work well with your lifestyle by taking your time in the driver's seat.</p>
            <button>Browse cars</button>
        </div>

    </div>
  )
}

export default Driver;




// 1. roditelj div html elementu dodajemo klasu
// 2. unutar roditelj div elementa dodajemo jos div elemenata
// 3. unutar div sa klasom left dodajemo sliku
// 4. 