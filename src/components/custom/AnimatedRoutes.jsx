import React, { memo } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../../pages/Home'
import Contact from '../../pages/Contact'
import Portfolio from '../../pages/Portfolio'
import Skills from '../../pages/Skills'
import NotFoundPage from '../../pages/NotFoundPage'

const AnimatedRoutes = () => {

    const Location = useLocation();

    return (
        <div>
            <AnimatePresence mode='wait'>
                <Routes location={Location} key={Location.pathname} >
                    <Route path='/' element={<Home />} />
                    <Route path='/skills' element={<Skills />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </AnimatePresence>
        </div>
    )
}

export default React.memo(AnimatedRoutes)