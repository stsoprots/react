import './App.css'
import MyComponent from "./component/MyComponent.tsx";

function App() {

    return (
        <>
            <MyComponent title={'title1'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit!!!!
            </MyComponent>

            <MyComponent title={'title2'}>
            </MyComponent>

            <MyComponent title={'title3'}/>
        </>
    );
}

export default App