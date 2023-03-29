import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';

import ShoppingPage from '../02-component-patterns/pages/ShoppingPage';

import logo from '../logo.svg';

export const Navigation = () => {
    return (
        <Router>
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt='React Logo' />
                    <ul>
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                            >
                                Shopping
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/about'
                                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/users'
                                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                            >
                                Users
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='/' element={<ShoppingPage />} />
                    <Route path='/about' element={<span>About</span>} />
                    <Route path='/users' element={<span>Users</span>} />

                    <Route path='/*' element={<Navigate to='/' replace />} />
                </Routes>
            </div>
        </Router>
    );
};
