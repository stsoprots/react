import {useCallback, useMemo, useState} from "react";
// Імпортуємо з React хуки: useCallback для запам'ятовування функцій, useMemo для кешування важких обчислень і значень, та useState для збереження стану.

import {ChildComponent} from "../child-component/ChildComponent.tsx";
// Імпортуємо дочірній компонент ChildComponent, куди будемо передавати наші пропси.

import {ButtonCounter} from "../button-counter/ButtonCounter.tsx";
// Імпортуємо компонент кнопок ButtonCounter для зміни лічильників.

// Створюємо та експортуємо батьківську компоненту ParentComponent. Цей компонент показує, як оптимізувати ререндери та не рахувати зайвий раз одні й ті самі дані.
export const ParentComponent = () => {

    console.log('parent');
    // Виводимо в консоль 'parent', щоб бачити, коли саме наш батьківський компонент рендериться.

    const [counter, setCounter] = useState<number>(0);
    // Створюємо стейт counter з початковим значенням 0 для простого лічильника кліків.

    const [number, setNumber] = useState<number>(5);
    // Створюємо стейт number зі значенням 5, від якого будуть залежати наші математичні підрахунки.

    const items = useMemo<number[]>(() => {
        return [1, 2, 3]
    }, [])
    // За допомогою useMemo запам'ятовуємо масив [1, 2, 3]. Оскільки масив залежностей [] пустий, посилання на цей масив створюється лише раз і не перезаписується при кожному ререндері.

    const sum = useMemo<number>(() => {
        let total = 0;
        for (let i = 1; i <= number; i++) {
            total += i;
        }
        return total;
    }, [number]);
    // Хуком useMemo оптимізуємо цикл підрахунку суми. Він відпрацьовує заново лише тоді, коли змінюється значення number у масиві залежностей [number], і не гальмує додаток при зміні counter.

    const handleClick = useCallback(() => {
        console.log("clicked from child");
    }, [])
    // Хуком useCallback кешуємо функцію кліку. Завдяки пустому масиву [] функція не перестворюється заново в пам'яті при кожному оновленні батька, тому дочірній компонент не буде зайвий раз перемальовуватися.

    return (
        <div>
            <h2>Parent</h2>

            <p>Count: {counter}</p>
            {/* Відображаємо поточне значення стейту counter. */}

            <ButtonCounter setCounter={setCounter} setNumber={setNumber}/>
            {/* Рендеримо компонент кнопок і передаємо йому функції зміни стану setCounter та setNumber. */}

            <ChildComponent number={number} sum={sum} items={items} onClick={handleClick}/>
            {/* Рендеримо ChildComponent і передаємо йому закешовані значення (items, sum) та функцію handleClick як пропси. */}
        </div>
    );
};