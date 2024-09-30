'use client'
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import styles from "./navLink.module.css"

function NavLink({item}) {
    let pathname = usePathname()
    return (
        <Link className={`${styles.linkItems} ${pathname === item.path && styles.active}`} href={item.path}>{item.title}</Link>
    )
}

export default NavLink;