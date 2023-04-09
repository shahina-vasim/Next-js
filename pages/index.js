import Pagination from "@/components/pagination";
import { paginate } from "@/utils/paginate";
import axios from "axios";
import { useState,useEffect } from "react";

const Home=()=>{

  const [posts,setposts]=useState([]);
  const [currentPage,setCurrentPage]=useState(1);
  const pageSize=10;

useEffect(()=>{
  const getposts=async()=>{
    const {data:res}=await axios.get('http://jsonplaceholder.typicode.com/posts');
    setposts(res)
  }
  getposts();
},[]);
const handlePageChange= page=>{
  setCurrentPage(page);
};

const paginatePosts=paginate(posts,currentPage,pageSize)


  return(
    <div className="container">
     <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {paginatePosts.map((post)=>(
        <tr key={post.id}>
          <td>{post.id}</td>
          <td>{post.title}</td>
          <td>
            
            <button className="btn btn-danger btn-sm">Delete</button>  </td>


        </tr>
          
          ))}
      </tbody>
     </table>
          <Pagination items={posts.length} currentPage={currentPage} pageSize={pageSize} onPageChange={handlePageChange}/>
    </div>
  );
}

export default Home;
















