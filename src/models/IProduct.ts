// Створюємо інтерфейс (типізацію-контракт) для об'єкта товару з масиву products, щоб контролювати структуру даних, які ми приймаємо чи віддаємо. Всі наступні інтерфейси нижче — це додаткова типізація вкладених полів (розміри, відгуки, метадані). Обов'язково вказуємо export, щоб використовувати IProduct в інших файлах.
export interface IProduct {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: IDimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: IReviews[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: IMeta;
    images: string[];
    thumbnail: string;
}

interface IDimensions {
    width: number;
    height: number;
    depth: number;
}

interface IReviews {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

interface IMeta {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
}