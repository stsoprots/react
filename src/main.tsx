// ==== main.tsx ======
// 1. Створює обгортку провайдера — ініціалізує клієнт через useQueryClientConfig та передає його в QueryClientProvider для дочірніх компонентів. (14-18:)
// 2. Рендерить дерево додатку — створює кореневий вузол за допомогою createRoot і монтує його в елемент '#root'. (20:)
// 3. Підключає глобальні контексти — огортає додаток провайдерами кукі (CookiesProvider) та React Query (QueryClient). (21-25:)


import {useQueryClientConfig} from "./api/query/use-query-client-config.ts";
import {QueryClientProvider} from "@tanstack/react-query";
import type {PropsWithChildren} from "react";
import {createRoot} from "react-dom/client";
import {CookiesProvider} from "react-cookie";
import App from "./App.tsx";

const QueryClient = ({children}: PropsWithChildren) => {
    const queryClient = useQueryClientConfig();

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
};

createRoot(document.getElementById("root")!).render(
    <CookiesProvider>
        <QueryClient>
            <App/>
        </QueryClient>
    </CookiesProvider>
);