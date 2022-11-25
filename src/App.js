import {useEffect, useState} from 'react'
import AddPost from './components/AddPost'
import Posts from './components/Posts';
import PostDetails from './components/PostDetails'
import {
 
  Routes,
  Route,

} from "react-router-dom";

function App() {


  
  const [posts, setPosts] = useState([])

  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/posts").then(res=>res.json());
   setPosts(res);

  }

  useEffect(() => {

    fetchData();

  }, [posts])

  const deletePost = async (id) => {

    await fetch(`http://localhost:5000/posts/${id}`, {
      method:'DELETE',
    })
   
   setPosts(posts.filter((post) => post.id !== id))

     }

    
    const addPost = async (post) => {

     const res = await fetch('http://localhost:5000/posts', {
      method:'POST',
      headers: {
        'Content-type': 'application/json'
      },
        body: JSON.stringify(post)
      })

      const data = res.json;

      setPosts([...posts, data])
     }
    
  
       

  return (
    <div className=' items-center justify-center max-w-screen-3xl'>

<Routes>

<Route path="/" element={
  <>
  <main className='max-w-screen-2xl mx-auto sm:mx-auto'>
  <AddPost onAdd={addPost}/>
  <Posts posts={posts} onDelete={deletePost} />
  </main>
   </>
} />
</Routes>
         
   
  

<Routes><Route path="/posts/:id" element={<PostDetails onDelete={deletePost} />} /></Routes>
</div>
   
  );
}

export default App;
