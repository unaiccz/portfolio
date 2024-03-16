import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Card({post}) {
  const {img, title, desc} = post
  return (
    // container
    <div className={styles.container}>
        {/* top */}
        <div className={styles.top}>
            {/* imgc */}
        <div className={styles.imgcontainer}>
<Image src={post.img} alt='post' fill/>
        </div>
        <span className={styles.date}>{post.createdAt ? post.createdAt.toString().slice(0,16) : 'no-date'}</span>
        </div>
        {/* bottom */}
        <div className={styles.bottom}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.desc}>{desc}</p>
        <Link href={`/blog/${post.slug}`} className={styles.link}>Learn More</Link>
    </div>
    </div>
  )
}

export default Card