import React from 'react'
import styles from './nav.module.css'
import Links from './links/Links'
function Nav() {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>Logo</div>
        <div>
            <Links />
        </div>
    </div>
  )
}

export default Nav
