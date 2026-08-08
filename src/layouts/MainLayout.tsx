import {Outlet, useLocation, useNavigate} from "react-router";

export const MainLayout = () => {

    const navigate = useNavigate();

    const onButtonNavigate = () => {
        navigate('/users')
    }
    const location = useLocation();

    return (
        <div>
            {location.pathname === '/' && (
                <button className={'border-2'} onClick={onButtonNavigate}>
                    Перевірити ДЗ
                </button>
            )}
            <Outlet/>
        </div>
    );
};