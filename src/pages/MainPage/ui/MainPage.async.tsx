import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // Проверка работы suspense fallback
    // @ts-ignore
    setTimeout(() => resolve(import('./MainPage')), 1500)
}))