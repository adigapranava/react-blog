import React from 'react'
import Blog from './Blogs/Blog'

export default function Blogs(props) {
  return (
    <div className='blogs'>
      {Object.keys(props.blogs).map(key => {
        return (
          <Blog
            key={key}
            id={key}
            blog={props.blogs[key]}
            deleteBlog={props.deleteBlog}
            updateBlog={props.updateBlog}
          />
        )
      }
      )}
    </div>
  )
}
