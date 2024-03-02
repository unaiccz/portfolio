import React from 'react'
import styles from './nav.module.css'
import Links from './links/Links'
import Link from 'next/link'
function Nav() {
  return (
    <div className={styles.container}>
        <Link className={styles.logo} href='/'>Logo</Link>
        <div>
            <Links />
        </div>
    </div>
  )
}

export default Nav
