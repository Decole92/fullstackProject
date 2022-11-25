import React from 'react'
import {useState} from 'react';

export default function AddPost({ onAdd }) {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [urlToImage, setUrlToImage] = useState("");
  const [content, setContent] = useState("");

const addPost = () => {


  if(!author){alert ("Fill the Author Space")}

   else if(!title){alert ("Fill the title of your post")}

   else if(!urlToImage){alert ("Please fill UrltoPicture")}
    
   else if(!content){alert("Post Must have a content article")}

    
    onAdd({ author, title, urlToImage, content })

    setTitle("");
    setAuthor("");
    setUrlToImage("");
    setContent("");

          


  }



  return (
    
<div className="bg-gray-100 border-b p-3">

 <div className="flex-1 p-2 items-center space-y-3">

<div><input className="h-10 w-full pl-3 outline-none" value={author}  onChange={(e) => setAuthor(e.target.value)} type="text" placeholder="Author" /></div>
<div><input className="h-10 w-full pl-3 outline-none" value={title}  onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" /></div>
<div><input className="h-10 w-full pl-3 outline-none" value={urlToImage}  onChange={(e) => setUrlToImage(e.target.value)} type="text" placeholder="Url to Picture" /></div>
<div className="flex flex-col">
  <input type="text" value={content} onChange={(e) => setContent(e.target.value) } form-contro="true" className="h-24 w-full pl-3 text-xl outline-none placeholder:text-xl" placeholder="Write your Content?"/>
  </div>
  </div>


    <div>
     <button onClick={addPost} className="rounded-full bg-blue-500 px-5 py-2 font-bold text-white disabled:opacity-40">Post</button>
     </div>



 
</div>

  )
}
  