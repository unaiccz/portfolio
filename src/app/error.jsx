'use client'
import Link from 'next/link'
import React from 'react'

function error() {
  return (
    <div>
      <h1>upss</h1>
      <Link href='/'>Go back</Link>
    </div>
  )
}

export default error
