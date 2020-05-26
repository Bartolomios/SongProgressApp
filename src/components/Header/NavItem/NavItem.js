import React from 'react';
import styles from './NavItem.module.scss'
import { NavLink } from 'react-router-dom'

const NavItem = ({children, link}) => (


    <li className={styles.navItem}>
    <NavLink exact activeClassName={styles.navItemLinkActive} to={link}>{children}</NavLink>
    </li>

);

export default NavItem;