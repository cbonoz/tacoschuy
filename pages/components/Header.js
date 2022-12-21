import React from 'react'
import Image from 'next/image'
import bg from '../assets/images/bg.jpg'

import Footer from './Footer'

class Header extends React.Component {
    render() {
        return (
            <header id="header" style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: 'cover',
                // opacity: '0.5',
                }}>
                <div className="inner">
                    <Image src={'/avatar.jpg'} alt="Taquizas Chuy" width={128} height={128} />
                    <h1><strong>Tacos (Taquizas) Chuy&nbsp;</strong><br/>Street Taco Catering in the <br/>South Washington Area</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
