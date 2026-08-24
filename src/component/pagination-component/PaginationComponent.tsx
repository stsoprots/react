import {useSearchParams} from "react-router";
import type {FC} from "react";
import type {IProductsResponse} from "../../models/IProductsResponse.ts";

type PaginationPropsType = {
    total: IProductsResponse["total"];
}

export const PaginationComponent: FC<PaginationPropsType> = ({total}) => {

    const [searchParams, setSearchParams] = useSearchParams({page: '1'})
    let currentPage = Number(searchParams.get('page') || 1);
    const limit = 30;
    const lastPage = Math.ceil(total / limit);


    return (
        <div className="pagination">
            <button className="pagination__btn"
                    disabled={currentPage === 1}
                    onClick={()=>{
                        if (currentPage > 1){
                        setSearchParams({page: (--currentPage).toString()})
                    }
            }}>prev</button>

            <span className="pagination__status">
                Page {currentPage}
            </span>

            <button className="pagination__btn"
                    disabled={currentPage >= lastPage}
                    onClick={()=>{
                        if (currentPage < lastPage) {
                            setSearchParams({page: (++currentPage).toString()})
                        }
            }}>next</button>
        </div>

    );
};