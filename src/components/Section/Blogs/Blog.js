import React from 'react'

export default function Blog(props) {
  return (
    <div className='blog'>
        <h2>{props.blog.title}</h2>
        <p>{props.blog.content}</p>
        <button class="del" onClick={() => props.deleteBlog(props.blog.id)}>Delete</button>
      </div>
  )
}
