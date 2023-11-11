import React from 'react'
import Image from 'next/image'
import bg from '../assets/images/bg.jpg'

import Footer from './Footer'
import { COMPANY_NAME, DESCRIPTION } from '../../utils/constants'

class Header extends React.Component {
    render() {
        return (
            <header id="header" style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: 'cover',
                // opacity: '0.5',
            }}>
                <div className="inner" style={{float: 'right'}}>
                    <Image src={'/avatar.jpg'} alt="Taquizas Chuy" width={150} height={150} />
                    <div>
                        <h1>{COMPANY_NAME}
                        </h1>
                        <p>{DESCRIPTION}</p>
                    </div>
                </div>
                <Footer />
            </header >
        )
    }
}

export default Header
