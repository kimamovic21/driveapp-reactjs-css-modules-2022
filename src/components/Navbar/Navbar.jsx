import {React, useState} from 'react';
import styles from './Navbar.module.css';
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser} from 'react-icons/ai';
import Logo from '../../images/logo.png';

const Navbar = () => {

  const [nav, setNav] = useState(false);

  return (
    <header className={styles.navbar}>

        <img src={Logo} alt="Logo" />

        <nav>
            <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
                <li>
                    <a href="/">Learn more</a>
                </li>
                <li>
                    <a href="/">Log in</a>
                </li>
                <li>
                    <a href="/">Sign up</a>
                </li>
                <li>
                    <AiOutlineSearch size={25} style={{marginTop:'6px'}}/>
                </li>
                <li>
                    <AiOutlineUser size={25} style={{marginTop:'6px'}}/>
                </li>
            </ul>
        </nav>

        {/* Icons div */}
        <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
            {nav ? (<AiOutlineClose size={25}/>) : (<AiOutlineMenu size={25}/>)}
        </div>

    </header>
  )
}

export default Navbar;






// 1. kucamo rafce skracenicu i pritisnemo enter
// 2. importujemo react ikonice u jsx fajl
// 3. importujemo sliku Logo
// 4. odaberemo header element kao roditelj spremnik za sve elemente
// 5. dodajemo img html element sa atributom src i alt
// 6. dodajemo nav html element
// 7. unutar nav html elementa dodajemo ul html element
// 8. unutar ul html elementa dodajemo li element
// 9. unutar li elementa dodajemo a html element
// 10. dodajemo jos nekoliko li html elemenata
// 11. ispod nav html elementa dodajemo div element
// 12. dodajemo useState hook 
// 13. U divu za ikonice dodajemo funkciju, onClick dogadaj
// 14. dodajemo uslov kako ce se pojavljivati ikonice na ekranu
// 15. 




