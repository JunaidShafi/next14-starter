"use client";
import React from "react";
import styles from "./Link.module.css";
import NavLink from "@/Components/navbar/Links/navLink/NavLink";
import { useState } from "react";
const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

function Links() {
  const [open, setOpen] = useState(false);
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink item={link} key={link.title} />
      ))}
      {session ? (
        <>
          {isAdmin && (
            <NavLink item={{ title: "Admin", path: "/admin" }}>Admin</NavLink>
          )}
          <button className={styles.logout}>Logout </button>
        </>
      ) : (
        <NavLink item={{ title: "Login", path: "/login" }} key="login" />
      )}
    </div>
  );
}

export default Links;
