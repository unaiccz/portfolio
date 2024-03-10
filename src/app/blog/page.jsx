import React from 'react'
import styles from './page.module.css'
import Card from '@/components/CardComponent/Card'
import { getposts } from '@/utils/data'


async function page() {
  const posts = await getposts()
  return (

    <div className={styles.container}>
      {posts.map((post) => (
        <Card key={posts} post={post} />
      ))}
      </div>
  )
}

export default page
