import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Card() {
  return (
    // container
    <div className={styles.container}>
        {/* top */}
        <div className={styles.top}>
            {/* imgc */}
        <div className={styles.imgcontainer}>
<Image src='/post.jpg' alt='post' fill/>
        </div>
        <span className={styles.date}>11/02/2023</span>
        </div>
        {/* bottom */}
        <div className={styles.bottom}>
        <h1 className={styles.title}>title</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, placeat. Nemo quibusdam esse nulla illum laborum? In molestiae quisquam, laboriosam nesciunt exercitationem vero, eum optio amet veritatis mollitia quas reprehenderit?</p>
        <Link href='/blog/1' className={styles.link}>Learn More</Link>
    </div>
    </div>
  )
}

export default Card
