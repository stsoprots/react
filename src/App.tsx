import './App.css'
import {PaginationComponent} from "./components/pagination/PaginationComponent.tsx";
import {UsersComponent} from "./components/some/UsersComponent.tsx";

function App() {

    return (
        <div>
            <UsersComponent/>
            <PaginationComponent/>
        </div>
    )
}

export default App
