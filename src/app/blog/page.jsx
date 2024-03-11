import React from 'react'
import styles from './page.module.css'
import Card from '@/components/CardComponent/Card'
import { getposts } from '@/utils/data'

export const metadata = {
  title: "Unai Compaired blog",
  description: "Blog posts from Unai Compaired portfolio",
};

const ft = async () => {
  const res = await fetch('http://localhost:3000/api/blog', {next:{revalidate:3600}})
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  return await res.json()
}

async function page() {
  const posts = await ft();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  )
}

export default page