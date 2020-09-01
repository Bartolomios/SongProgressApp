import React from 'react'
import styles from './Header.module.scss'
import NavItem from './NavItem/NavItem'



const Header = ({showModal}) =>{


return(

<div className={styles.header}>
<div className={styles.headerContainer}>
    <div className={styles.logo}>Guitar Power</div>
    <ul className={styles.navBar}>
        <NavItem link="/">Progress List</NavItem>            
        <NavItem link="/to-learn">Songs to Learn</NavItem> 
        <NavItem link="/learned">Learned</NavItem> 
                <button className={styles.addSongButton} onClick={showModal}>Add Song</button>
   
    </ul>
</div>
</div>
)

}

export default Header;