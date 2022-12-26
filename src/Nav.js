import React from 'react';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Routerdata from './Routerdata';
import ReduxImp from './ReduxImp';
import ReduxReact from './react-reduct/reducer/ReduxReact';


function Nav() {
    return (
        <div>
            <BrowserRouter>
                <nav className='nav'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'contact'}>Contact</Link></li>
                    <li><Link to={'about'}>About</Link></li>
                    <li><Link to={'redux'}>Redux</Link></li>
                    <li><Link to={'redux-react'}>Redux React</Link></li>
                </nav>
                <Routes>
                    <Route index element={<Home />}  ></Route>
                    <Route path='contact' element={<Contact />} >
                        <Route path='nested' element={<div>Test <Link to={'nested2'}> Nested 2</Link> <Outlet/></div>}>
                            <Route path=':nested' element={<Routerdata/>}></Route>
                        </Route>
                        <Route path='*' element={<div>Not found</div>}></Route>
                    </Route>
                    <Route path='about' element={<About />} ></Route>
                    <Route path='redux' element={<ReduxImp />} ></Route>
                    <Route path='redux-react' element={<ReduxReact />} ></Route>
                    <Route path='*' element={<div>Not found</div>}></Route>
                </Routes>
            </BrowserRouter>
            
        </div>
    );
}

export default Nav;