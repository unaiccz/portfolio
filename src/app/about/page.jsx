import styles from './page.module.css'
import Image from 'next/image'
export const metadata = {
  title: "About Unai Compaired",
  description: "About Unai Compaired portfolio",
};
function page() {
  return (
    <div className={styles.container}>
      {/* text */}
      <div className={styles.text}>
<h2 className={styles.title}>About</h2>
<br />
<h1>Creating the best things...</h1>
<hr />
<p>
I am a React developer with great aspirations and eager to learn from this beautiful world of programming.
</p>

<h3>Values</h3>
<p>my values are based on the principles of honesty, integrity, and respect for others. I am a person who is always looking for new challenges and opportunities to grow and improve my skills.</p>
<h3>Culture</h3>
<p>
  My culture is develop slow but develop precise. im a person that when i look for some challenge i work hard to do it good as possible.
</p>
{/* boxes */}
<div className={styles.boxes}>
  <div className={styles.box}>
    <h3>Personal projects</h3>
    <p>React, express, python.</p>
    </div>
    <div className={styles.box}>
    <h3>Flexible</h3>
    <p>Works</p>
    </div>
</div>
      </div>
      {/* image */}
      <div className={styles.imgcontainer}>
      <Image src="/about.jpg" alt="about" width={600} height={300} />
      </div>
    </div>
  )
}

export default page
