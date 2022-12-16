import { lazy, LazyExoticComponent } from 'react';
import NoLazy from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

// Para trabajar con el componente Lazy (para hacer lazy load). los componentes que voy a usar tienen exportarse por defecto

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layouts/LazyLayout'))

export const routes:Route[] = [
    {
        to: '/lazylayout',
        path: '/lazylayout/*',
        Component: LazyLayout,
        name: 'Lazy Layout dashboard'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
]