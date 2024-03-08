'use client'
import Link from 'next/link'
import Image from 'next/image'
import styles from './links.module.css'
import React, { useState } from 'react';

import Navlink from './Navlink'

function Links() {
  const [open, setOpen] = useState(false);
  
  const session = true
  const admin = true
  const links = [
    {name: 'Home', path: '/'},
    {name: 'About', path: '/about'},
    {name: 'Contact', path: '/contact'},
    {name: 'Blog', path: '/blog'}
  ]

  return (
    <div className={styles.container}>
    <div className={styles.links}>
    
      {
        links.map(link => (
     <Navlink item={link} key={link.name}/>
  

        ))
      }{
        session ? (<Navlink item={{name: 'Log-out', path: '/logout'}} className='lin'/>)
        :
        (<Navlink item={{name: 'Login', path: '/login'}} className='lin'/>)
      }{
        admin && (<Navlink item={{name: 'Admin', path: '/admin'}} className='lin'/>)
      }

  </div>
  <Image onClick={() => setOpen((prev)=>(!prev))} className={styles.menu } src='/menu.png' alt='menu' width={30} height={30}></Image>
{
  open && <div className={styles.mobile}>
{
  links.map(link => (
    <Navlink item={link} key={link.name}/>


       ))
}
  </div>
}
  </div>
  )
}

export default Links
