import './App.css'
// Підключаємо файл зі стилями App.css для оформлення нашого головного компонента.

import {ParentComponent} from "./components/parent-component/ParentComponent.tsx";
// Імпортуємо головний батьківський компонент ParentComponent з папки components.

function App() {
// Створюємо основну функцію-компонент App, яка виступає кореневою точкою всього інтерфейсу.

    return (
        <>
            <ParentComponent/>
            {/* Рендеримо наш ParentComponent всередині фрагмента. */}
        </>
    )
}

export default App
// Експортуємо компонент App за замовчуванням (default export), щоб передати його в головний файл запуску програми.