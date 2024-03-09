import React from 'react'
import styles from './page.module.css'
import Card from '@/components/CardComponent/Card'
const getdata = async () => {
const res = await fetch('https://jsonplaceholder.typicode.com/posts', {next:{revalidate:20}})
if (!res.ok){
  throw new Error('no data')
}
return res.json()
}
 async function page() {
  const post = await getdata()
  return (
    <div className={styles.container}>Blog
{
  post.map((post)=>(

    <div className={styles.post} key={post.id}>
<Card post={post}/>
</div>
  ))
}

    </div>
  )
}

export default page