import React from 'react'
import styles from './page.module.css'
import Card from '@/components/CardComponent/Card'

function page() {
  return (
    <div className={styles.container}>Blog
<div className={styles.post}>
<Card/>
</div>
<div className={styles.post}>
<Card/>
</div>
<div className={styles.post}>
<Card/>
</div>
    </div>
  )
}

export default page