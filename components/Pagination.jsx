import _ from 'lodash';
const Pagination=({items,pageSize,currentPage,onPageChange})=>{
    const pageCount=items/pageSize;
    if(Math.ceil(pageCount)===1) return null;
    const pages= _.range(1,pageCount+1);

    return(
        <nav>
  <ul className="pagination pagination-lg">
    {pages.map((page)=>(
 <li key={page} className={page===currentPage ? "page-item active":"page-item"} >
 <span style={{cursor:"pointer"}} onClick={()=>onPageChange(page)} className="page-link">
    {page}
 </span>
</li>


    )
        )}
   </ul>
</nav>
    );
}
export default Pagination;