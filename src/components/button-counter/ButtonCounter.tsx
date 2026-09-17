import type {FC} from "react";
// Імпортуємо тип FC (Functional Component) з React для типізації нашого функціонального компонента.

type ButtonCounterProps = {
    setCounter: (value: (prev: number) => number) => void;
    setNumber: (value: (prev: number) => number) => void;
};
// Описуємо типізацію пропсів ButtonCounterProps для функцій зміни стану, які приймають попереднє число prev і оновлюють його.

export const ButtonCounter: FC<ButtonCounterProps>= ({setCounter, setNumber}, ) => {
// Створюємо та експортуємо компонент кнопок ButtonCounter, типізуємо його через FC і через деструктуризацію дістаємо функції setCounter та setNumber.
    return (
        <>
            <button type="button" onClick={() => setCounter((prev) => prev + 1)}>
                +1 count
            </button>
            {/* Кнопка для збільшення лічильника counter на одиницю через колбек з попереднім значенням prev. */}

            <button type="button" onClick={() => setNumber((prev) => prev + 1)}>
                +1 number
            </button>
            {/* Кнопка для збільшення числа number на одиницю, що викликає перерахунок sum у батьківському компоненті. */}
        </>
    );
};