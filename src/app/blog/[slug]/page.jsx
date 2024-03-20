import Image from "next/image";
import styles from './page.module.css'
const ft = async (slug) => {
     const res = await fetch(`/api/blog/${slug}`, {next:{revalidate:10}})
     if (!res.ok) {
       throw new Error('Something went wrong')
     }
     return await res.json()
   }
async function page({params}) {
     const {slug} = params
     console.log(slug);
     const post = await ft(slug)
return (
    <div className={styles.container}>
     <div className={styles.imgcontainer}>
<Image src={post.img}  alt="post" fill className={styles.image}/>
     </div>
     {/* text */}
     <div className={styles.textcontainer}>
<h1 className={styles.title}>{post.title}</h1>
<div className={styles.detail}>
<Image src={"/noavatar.jpg"} alt="avatar" height={50} width={50} className={styles.avatar}/>
<div className={styles.detailtext}>
<span className={styles.dertailtitle}>Author </span>
<span className={styles.detailtext}>username</span>
</div>
<div className={styles.detailtext}>
<span className={styles.dertailtitle}>Published</span>
<span className={styles.detailtext}>{post.createdAt ? post.createdAt.toString().slice(0,16) : 'no-date'}</span>
</div>
</div>
<div className={styles.content}>
{post.desc}
</div>
     </div>
    </div>
  )
}

export default page
