import {type FC, memo} from "react";
// Імпортуємо з React тип FC для типізації функціонального компонента та функцію memo для запобігання зайвим перемальовкам.

type ChildProps = {
    number: number;
    sum: number;
    items: number[];
    onClick: () => void;
}
// Створюємо тип ChildProps, де описуємо всі пропси, які приходять від батька: число number, порахована сума sum, масив items та функція кліку onClick.

// Експортуємо дочірній компонент ChildComponent, обгорнутий у memo. Це зроблено з метою не перерендерити компонент, якщо жоден із переданих пропсів не змінився.
export const ChildComponent: FC<ChildProps> = memo(({number, sum, items, onClick}) => {
    console.log("child");
    // Виводимо в консоль 'child', щоб чітко бачити, коли дочірній компонент реально перемальовується.

    return (
        <div>
            <h3>Child</h3>

            <p>Number: {number}</p>
            {/* Відображаємо передане число number. */}

            <p>Sum from 1 to {number}: {sum}</p>
            {/* Відображаємо пораховану суму від 1 до number. */}

            <p>Items: {items.join(", ")}</p>
            {/* Відображаємо елементи масиву items через кому за допомогою join. */}

            <button type="button" onClick={onClick}>
                Click from child
            </button>
            {/* Кнопка, яка викликає передану функцію onClick при натисканні. */}
        </div>
    );
});