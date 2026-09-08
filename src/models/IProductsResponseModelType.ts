import type {IProduct} from "./IProduct.ts";
// Імпортуємо інтерфейс типізації IProduct.

// Створюємо типізацію відповіді через type (а не через interface) — це модель даних, яку ми отримуємо саме у відповіді від сервера (API), а не просто від сайту. Ми не отримуємо products напряму: спочатку приходять дані пагінації (total, skip, limit), а вже всередині них лежить сам масив products. Це важливо для правильної типізації відповіді.
export type IProductsResponseModelType = {
    total: number;
    skip: number;
    limit: number;
    products: IProduct[]
}