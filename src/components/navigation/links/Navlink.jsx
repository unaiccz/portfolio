'use client'
import Link from 'next/link'
import React from 'react'
import styles from './navlink.module.css'
import { usePathname } from 'next/navigation'

function Navlink({item}) {

    const pname = usePathname()
  return (
    <div>
<Link href={item.path} className={`${styles.container} ${pname === item.path && styles.active}`}>{item.name}</Link>

    </div>
  )
}

export default Navlink
