import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate
} from 'react-router-dom';

import { routes } from './routes';

import logo from '../logo.svg';
import { Suspense } from 'react';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <div className='main-layout'>
          <nav>
              <img src={ logo } alt='React Logo' />
            <ul>
              {
                routes.map( ({ name, to }) => (
                  <li key={ name }>
                    <NavLink to={ to } className={({ isActive }) => isActive ? 'nav-active' : '' }>
                      { name }
                    </NavLink>
                  </li>
                ))

              }
            </ul>
          </nav>

          <Routes>
            {
              routes.map(({ path, Component }) => {
                return (
                  <Route key={ path } path={ path } element={ <Component/> } />
                )
              })
            }
            <Route path='/*' element={<Navigate to={ routes[0].to } replace />}/>
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
}