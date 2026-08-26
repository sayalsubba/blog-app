import { useState } from 'react'
import Main from "./components/Main/Main"
import Create from "./components/Create/Create"
import Post from "./components/posts/post"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [post, setPost] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main
            post={post}
            setPost={setPost}
          />} >
            <Route path='create' element={<Create title={title}
              author={author}
              description={description}
              setTitle={setTitle}
              setAuthor={setAuthor}
              setDescription={setDescription}
              post={post}
              setPost={setPost}
            />} />
            <Route path='/' element={<Post 
             post={post}
            setPost={setPost}
            />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
