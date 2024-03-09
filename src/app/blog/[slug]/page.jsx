import Image from "next/image";
import styles from './page.module.css'
import Postuser from "@/components/postuser/Postuser";
const getdata = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {next:{revalidate:20}})
  if (!res.ok){
    throw new Error('no data')
  }
  return res.json()
  }
async function page({params}) {
const {slug} = params
  const opost = await getdata(slug)
  console.log(opost);
  return (
    <div className={styles.container}>
     <div className={styles.imgcontainer}>
<Image src='/post.jpg'  alt="post" fill className={styles.image}/>
     </div>
     {/* text */}
     <div className={styles.textcontainer}>
<h1 className={styles.title}>{opost.title}</h1>
<div className={styles.detail}>
<Image src='/avatar.png' alt="avatar" height={50} width={50} className={styles.avatar}/>
<Postuser uid={opost.userId}/>
<div className={styles.detailtext}>
<span className={styles.dertailtitle}>Published</span>
<span className={styles.detailtext}> 01.02.23</span>
</div>
</div>
<div className={styles.content}>
{opost.body}
</div>
     </div>
    </div>
  )
}

export default page
