import React from 'react'
import AddBlog from './Section/AddBlog'
import Blogs from './Section/Blogs'

export default function Sections(props) {
  return (
    <div className='section'>
      <Blogs 
        blogs={props.blogs}
        deleteBlog={props.deleteBlog}
        updateBlog={props.updateBlog}
        />
      <AddBlog
        addBlog={props.addBlog}
      />
    </div>
  )
}
