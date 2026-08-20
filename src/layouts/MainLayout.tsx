import {Outlet, useNavigate} from "react-router";


export const MainLayout = () => {
    const navigate = useNavigate();

    return (
        <div className='main-layout'>
            <h2>Main Layout</h2>

            {location.pathname !== '/list/posts' && (
                <button className='pagination__btn' onClick={() =>
                    navigate('/list/posts')
                }>Пости тут</button>)}
            <Outlet/>
        </div>
    );
};