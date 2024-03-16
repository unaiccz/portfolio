'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './nav.module.css';
import Links from './links/Links';
import Link from 'next/link';

function Nav() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
      setUser(loggedInUser);
    }
  }, []);

  let username = null;
  let email = null;

  if (user) {
    username = user.username;
    email = user.email;
  }

  return (
    <div className={styles.container}>
      <Link className={styles.logo} href='/'>Logo</Link>
      <div>
        <h4 className={styles.email}>{`Welcome ${email}`}</h4>
        <Links />
      </div>
    </div>
  )
}

export default Nav;