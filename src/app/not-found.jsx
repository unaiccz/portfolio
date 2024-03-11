import Link from 'next/link'
import React from 'react'

function notfound() {
  return (
    <div>
      <h1>404</h1>
      <h4>there aren&apos;t anything here...</h4>
      <hr />
      <br />
      <Link href='/' className='goback'>Go back</Link>
    </div>
  )
}

export default notfound