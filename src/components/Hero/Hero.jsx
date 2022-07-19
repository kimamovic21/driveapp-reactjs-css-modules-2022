import React from 'react';
import styles from './Hero.module.css';
import {AiOutlineSearch} from 'react-icons/ai';

const Hero = () => {
  return (
    <div className={styles.hero}>

        <form action="https://getform.io/f/dca02e7e-afff-4d0f-98a4-7ccc66ea5d33" method='POST'>
            <div className={styles.text}>
                <label htmlFor="text">Where </label>
                <input className={styles.text_input}
                       type="text"
                       name='text' 
                       id='text' 
                       placeholder='Search location'
                />
            </div>
            <div className={styles.from}>
                <span className={styles.border}></span>
                <label htmlFor="from">From: </label>
                <input type="date" name='date1' id='date1'
            />
            </div>
            <div className={styles.until}>
                <span className={styles.border}></span>
                <label htmlFor="from">Until: </label>
                <input type="date" name='date2' id='date2'
            />
            </div>
            <div className={styles.search_btn}>
                <AiOutlineSearch className={styles.icon}/>
                <button className={styles.btn}>
                    Search for cars
                </button>
            </div>
        </form>

    </div>
  )
}

export default Hero;





// 1. div element ce da bude roditelj div svih elemenata
// 2. dodajemo clas name div roditelj elementu
// 3. dodajemo form html element
// 4. dodajemo 4 div elementa unutar form elementa
// 5. dodajemo html elemente unutar svakog div elementa
// 6. dodajemo className html elementima
// 7. 
