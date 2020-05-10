import React from 'react';
import styles from './Header.module.scss';
import NavItem from './NavItem/NavItem';


const Header = () =>(


<div className={styles.headerContainer}>
    <div className={styles.logo}>Guitar Power</div>
    <ul className={styles.navBar}>
        <NavItem link="http://localhost:3000/">Item 1</NavItem>            
        <NavItem link="http://localhost:3000/">Item 2</NavItem> 
        <NavItem link="http://localhost:3000/">Item 3</NavItem> 
    </ul>
</div>

);

export default Header;