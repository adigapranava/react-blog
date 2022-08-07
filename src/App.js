import Nav from './components/nav';
import './App.css';
import Sections from './components/Sections';
import React, { useState, useEffect} from 'react';
import Blogs from './apis/Blogs';

function App() {
  const [blogs, setBlogs] = useState({});

  // GET all blogs from the server
  useEffect(()=>{
    async function fetchMyAPI() {
      const response = await Blogs.get(`/posts`);
      const data = response.data; 
      setBlogs(data);
    }
    fetchMyAPI();
  },[])

  // add a new blog to the server
  const addBlog = async (blog) => {
    const response = await Blogs.post(`/posts`, blog);
    const data = response.data;
    setBlogs(prevBlogs => {
      return {
        ...prevBlogs,
        [data.id]: data
      }
    }
    )
  }
  // delete a blog from the server
  const deleteBlog = async (id) => {
    await Blogs.delete(`/posts/${id}`);
    setBlogs(prevBlogs => {
      const newBlogs = {...prevBlogs};
      delete newBlogs[id];
      return newBlogs;
    }
    )
  }
  // update a blog from the server
  const updateBlog = async (id, blog) => {
    await Blogs.put(`/posts/${id}`, blog);
    setBlogs(prevBlogs => {
      const newBlogs = {...prevBlogs};
      newBlogs[id] = {...newBlogs[id], ...blog};
      return newBlogs;
    }
    )
  }


  return (
    <div className="App">
      <Nav/>
      <Sections
        blogs={blogs}
        addBlog={addBlog}
        deleteBlog={deleteBlog}
        updateBlog={updateBlog}
        />
    </div>
  );
}

export default App;
