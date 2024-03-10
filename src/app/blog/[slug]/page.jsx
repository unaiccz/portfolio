import Image from "next/image";
import styles from './page.module.css'
import {getpost, getuser} from '@/utils/data'

async function page({params}) {
const slug = params.slug
const post =  await getpost(slug)
const user = await getuser(post.userid)
return (
    <div className={styles.container}>
     <div className={styles.imgcontainer}>
<Image src={post.img ? post.img : '/noavatar.jpg'}  alt="post" fill className={styles.image}/>
     </div>
     {/* text */}
     <div className={styles.textcontainer}>
<h1 className={styles.title}>{post.title}</h1>
<div className={styles.detail}>
<Image src={user.img } alt="avatar" height={50} width={50} className={styles.avatar}/>
<div className={styles.detailtext}>
<span className={styles.dertailtitle}>Author </span>
<span className={styles.detailtext}>{user.username}</span>
</div>
<div className={styles.detailtext}>
<span className={styles.dertailtitle}>Published</span>
<span className={styles.detailtext}>{post.createdAt.toString().slice(0,16)}</span>
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
