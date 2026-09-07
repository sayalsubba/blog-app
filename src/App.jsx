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
  const [edit, setEdit] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [selectedPost, setSelectedPost] = useState(false);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main
            post={post}
            setPost={setPost}
          />} >
            <Route path='create' element={<Create
              title={title}
              author={author}
              description={description}
              setTitle={setTitle}
              setAuthor={setAuthor}
              setDescription={setDescription}
              post={post}
              setPost={setPost}
              edit={edit}
              setEdit={setEdit}
            />} />
            <Route path='/' element={<Post
              title={title}
              author={author}
              description={description}
              setTitle={setTitle}
              setAuthor={setAuthor}
              setDescription={setDescription}
              post={post}
              setPost={setPost}
              edit={edit}
              setEdit={setEdit}
              showEdit={showEdit}
              setShowEdit={setShowEdit}
              selectedPost={selectedPost}
              setSelectedPost ={setSelectedPost}
            />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
