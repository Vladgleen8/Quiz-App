import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise(resolve => {
    // Проверка работы suspense fallback
    // @ts-ignore
    setTimeout(() => resolve(import('./AboutPage')), 1500)
}))
