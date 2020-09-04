import React, { useState } from 'react'
import styles from './Header.module.scss'
import NavItem from './NavItem/NavItem'
import MobileButton from './MobileButton/MobileButton'

const Header = () =>{
    
    const [toggleMenu, setToggleMenu] = useState(true)
    
const toggleMenuHandler = () =>{
   setToggleMenu(!toggleMenu)
}

return(

<div className={styles.header}>
<div className={styles.headerContainer}>
    <div className={styles.logo}>Guitar Power</div>
        <ul className={toggleMenu ? `${styles.navBar}` : `${styles.navBar} ${styles.active}`}>
        <NavItem link="/">Progress List</NavItem>            
        <NavItem link="/to-learn">Songs to Learn</NavItem> 
        <NavItem link="/learned">Learned</NavItem> 

    </ul>
    <MobileButton toggleHandler={toggleMenuHandler} isToggle={toggleMenu}/>
</div>
</div>
)

}

export default Header;