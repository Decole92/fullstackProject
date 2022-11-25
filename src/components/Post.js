import React from 'react'
import { EllipsisHorizontalIcon, ChatBubbleOvalLeftIcon, ArrowUpTrayIcon, TrashIcon, ArrowPathIcon} from '@heroicons/react/24/outline';
import { Link } from "react-router-dom";


export default function Post({ id, post, onDelete }) {


  return (
<div className="hover:bg-gray-50 flex p-3 cursor-pointer border-b border-gray-200">
    
     <div className="flex-1">

<Link to={`posts/${id}`}>


       <div className="flex items-center justify-between">
        
         <div className="flex items-center space-x-1 whitespace-nowrap">
           <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
             {post?.author}
           </h4>
           <span className="text-sm sm:text-[15px]">
            {post?.title}
           </span>
           <span className="text-sm sm:text-[15px] hover:underline">
          
           </span> 
         </div>

         <EllipsisHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2 " />
       </div>

       <p className="text-gray-800 text-[15px sm:text-[16px] mb-2">
        { post?.content}</p>
    <img className="rounded-2xl mr-15 h-[200px]"
      src={post.urlToImage} alt=""
        />

</Link>
       {/* icons */}

       <div className="flex justify-between text-gray-500 p-2">
        <div className="flex justify-center items-center">
         <ChatBubbleOvalLeftIcon
          className="h-9 w-9 hover:bg-sky-100 rounded-full p-2 hover:text-sky-500 hover:bg-sky-100"/> </div>
         
        <ArrowPathIcon className="h-9  p-2 hover:bg-sky-100 hover:text-sky-500 rounded-full cursor-pointer transition-all duration-60" />

        <div className="flex items-center">
    
         </div>


      <TrashIcon onClick={() => onDelete(id)}
            
         className="h-9 p-2 hover:bg-red-100 hover:text-red-500 rounded-full cursor-pointer transition-all duration-60"
       />
       <ArrowUpTrayIcon className="h-9  p-2 hover:bg-sky-100 hover:text-sky-500 rounded-full cursor-pointer transition-all duration-60" />


         
       </div>
     </div>
    
   </div>
 );
}

  
