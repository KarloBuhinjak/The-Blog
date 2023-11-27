import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const{data: blogs, isPending, error} = useFetch('http://localhost:4000/api/posts/allPosts')
    

    return ( 
        <div className="home">
          {error && <div>{error}</div>}
          {isPending && <div>Loading...</div>}
           {blogs && <BlogList blogs={blogs} title="All blogs" />}
        </div>
     );
}
 
export default Home;