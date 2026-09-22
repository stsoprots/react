import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {CookiesProvider} from "react-cookie";


// Створюємо клієнт для кешування й керування запитами (React Query).
// Налаштування refetchOnWindowFocus автоматично оновлює дані з сервера
// щоразу, коли користувач повертається на вкладку сайту.
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {refetchOnWindowFocus: true},
    }
});



// Знаходимо блок 'root' у HTML та запускаємо додаток (App),
// огортаючи його провайдерами для роботи з куками (CookiesProvider)
// і глобального доступу до кешу запитів (QueryClientProvider).
createRoot(document.getElementById('root')!).render(
    <CookiesProvider>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </CookiesProvider>
)
