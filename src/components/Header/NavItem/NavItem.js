import React from 'react';
import styles from './NavItem.module.scss';

const NavItem = ({children, link}) => (


    <li className={styles.navItem}>
    <a href={link}>{children}</a>
    </li>

);

export default NavItem;