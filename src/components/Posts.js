import Post from './Post'

const Posts = ({posts, onDelete}) => {

  return (
     

        <div className="p-3 sm:w-max-2lg">
            {
               posts?.map((post) => (
             <Post key={post.id} id={post.id} post={post}  onDelete={onDelete} />

               )) 
            }
        </div>

    )
}

export default Posts;