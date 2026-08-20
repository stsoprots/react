import {useSearchParams} from "react-router";

export const PaginationComponent = () => {

    const [searchParams, setSearchParams] = useSearchParams({page: '1'})
    let currentPage = Number(searchParams.get('page') || 1);

    return (
        <div className="pagination">
            <button className="pagination__btn" onClick={()=>{
                if (currentPage > 1){
                    setSearchParams({page: (--currentPage).toString()})
                }
            }}>prev</button>

            <span className="pagination__status">
                Page {currentPage}
            </span>

            <button className="pagination__btn" onClick={()=>{
                setSearchParams({page: (++currentPage).toString()})
            }}>next</button>
        </div>

    );
};