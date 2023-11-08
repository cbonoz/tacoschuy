import React from 'react'
import Image from 'next/image'
import bg from '../assets/images/bg.jpg'

import Footer from './Footer'
import { COMPANY_NAME } from '../../utils/constants'

class Header extends React.Component {
    render() {
        return (
            <header id="header" style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: 'cover',
                // opacity: '0.5',
            }}>
                <div className="inner">
                    <Image src={'/avatar.jpg'} alt="Taquizas Chuy" width={150} height={150} />
                    <div>
                        <h1><b>{COMPANY_NAME}</b><p>Street Taco Catering in the <br />South Washington Area</p></h1>
                    </div>
                </div>
                <Footer />
            </header >
        )
    }
}

export default Header
