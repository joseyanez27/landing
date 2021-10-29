import React from 'react'

import Navbar from '../pages/gui/Navbar'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Promotions from '../pages/Promotions'
import Contact from '../pages/Contact'
import Footer from '../pages/gui/Footer'

function HomePage() {
    return (
        <>
            <Navbar />
            <Home />
            <Services />
            <Promotions />
            <Contact />
            <Footer />
        </>
    )
}

export default HomePage
