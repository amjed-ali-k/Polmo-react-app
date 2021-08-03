import React from 'react';

import { 
    Pagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap';

function Paginations ({paging, changePage}) {
    if(paging.total_pages > 1){
        console.log(paging);
        return (
        <Pagination aria-label="Page navigation example">

                <PaginationItem>
                    <PaginationLink disabled={paging.current_page === 1} active={paging.current_page === 1} previous onClick={()=> changePage(paging.current_page-1)}>
                        <i className="fa fa-fw fa-angle-left"/>
                    </PaginationLink>
                </PaginationItem>

                <PaginationItem active>
                    <PaginationLink>
                        {paging.current_page}
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink disabled={paging.current_page === paging.total_pages} active={paging.current_page === paging.total_pages} next onClick={()=> changePage(paging.current_page+1)}>
                        <i className="fa fa-fw fa-angle-right"/>
                    </PaginationLink>
                </PaginationItem>


            </Pagination>
)}
    else{
        return null
    }
}

export { Paginations };
