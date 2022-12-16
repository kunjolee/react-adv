import { Routes, Route, NavLink } from 'react-router-dom'
import { LazyPage1, LazyPage2, LazyPage3 } from '../pages'

const LazyLayout = () => {
  return (
    <div>
        <h1>
            LazyLayout Page
        </h1>

        <ul>
          <li>
            <NavLink to='lazy1'>LazyPage1</NavLink>
          </li>
          <li>
            <NavLink to='lazy2'>LazyPage2</NavLink>
          </li>
          <li>
            <NavLink to='lazy3'>LazyPage2</NavLink>
          </li>
        </ul>

        <Routes>
          <Route path='lazy1' element={ <LazyPage1/> } />
          <Route path='lazy2' element={ <LazyPage2/> } />
          <Route path='lazy3' element={ <LazyPage3/> } />
        </Routes>
    </div>
  )
}
export default LazyLayout