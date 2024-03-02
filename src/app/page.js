import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
function page() {
  return (
    <div className={styles.container}>
      {/* text */}
      <div className={styles.text}>
<h1 className={styles.title}>Unai Compaired</h1>
<br/>
<p className={styles.desc}>Full-Stack Developer</p>


      {/* buttons  */}
      <div className={styles.buttons}>
        <button>Learn More</button>
        <button>Contact</button>
      </div>
      {/* brands */}
      <div className={styles.brands}>
        <Image src="/brands.png" alt="brands" fill  className={styles.brands}/>
      </div>
</div>

      <div className={styles.imgcontainer}>
        <Image src="/hero.gif" alt="hero"  className={styles.heroimg} fill/>
      </div>
      <div>

      </div>
      {/* image */}
      <div className={styles.image}>

      </div>
    </div>
  )
}

export default page