import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Post from './Post';


const PostDetails = ({onDelete}) => {

const [post, setPost] = useState([]);


const params = useParams();

useEffect(() => {

    const fetchPost = async () => {
    
    const res = await fetch(`http://localhost:5000/posts/${params.id}`)

    const data = await res.json()

    setPost(data);
  }

  fetchPost();
})


  return (
    <div>

      {  
         
           <Post key={post.id} id={post.id} post={post} onDelete={onDelete} />
   
       }

    </div>
  
  )
}

export default PostDetails;