import React from 'react'
import styles from './postuser.module.css'
const getdata = async (uid) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${uid}`, {next:{revalidate:20}})
  if (!res.ok){
    throw new Error('no data')
  }
  return res.json()
  }
async function Postuser({uid}) {
  const data = await getdata(uid)

  return (
    <div className={styles.container}>
      <div className={styles.detailtext}>
<span className={styles.detailtitle}>Author </span>
<span className={styles.detailname}>{data.username}</span>
</div>
    </div>
  )
}

export default Postuser
