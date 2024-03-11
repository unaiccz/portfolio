import React from 'react'
import { addpost, deletepost } from '@/utils/action'
function page() {
  return (
    <div>
      <form action={addpost}>
        <input type="text" name='title' placeholder='title'/>
        <input type="text" name='desc' placeholder='desc'/>
        <input type="text" name='userid' placeholder='uid'/>
        <input type="text" name='slug' placeholder='slug'/>
        <input type="submit" value='press'/>
      </form>
   <form action={deletepost}>
    <input type="text" name='id' placeholder='id'/>
    <input type="submit"  value='delete'/>
   </form>
    </div>
  )
}

export default page
