import {Outlet, useNavigate} from "react-router";


export const MainLayout = () => {
    const navigate = useNavigate();

    return (
        <div className='main-layout'>
            <h2>Main Layout</h2>

            {location.pathname !== '/list/products' && (
                <button className='pagination__btn' onClick={() =>
                    navigate('/list/products')
                }>Асортимент</button>)}
            <Outlet/>
        </div>
    );
};