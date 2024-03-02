import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

function page() {
  return (
    <div>
      <div className='container-img'>
      <Image src="/about.png" alt="About Logo" width={300} 
      
      height={150}  
      className={styles.img}/>
      </div>
      About
<hr />
     

    </div>
  )
}

export default page