import Image from "next/image";
import styles from './page.module.css'

function page() {
  return (
    <div className={styles.container}>
     <div className={styles.imgcontainer}>
<Image src='/post.jpg'  alt="post" fill className={styles.image}/>
     </div>
     {/* text */}
     <div className={styles.textcontainer}>
<h1 className={styles.title}>title</h1>
<div className={styles.detail}>
<Image src='/avatar.png' alt="avatar" height={50} width={50} className={styles.avatar}/>
<div className={styles.detailtext}>
<span className={styles.dertailtitle}>Author </span>
<span className={styles.detailtext}>Jerry Calderon</span>
</div>
<div className={styles.detailtext}>
<span className={styles.dertailtitle}>Published</span>
<span className={styles.detailtext}> 01.02.23</span>
</div>
</div>
<div className={styles.content}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aut accusantium ullam, alias aperiam eos necessitatibus? Sed aliquid incidunt repudiandae dicta voluptates, suscipit, ratione assumenda commodi consectetur, illum maiores placeat.
</div>
     </div>
    </div>
  )
}

export default page
