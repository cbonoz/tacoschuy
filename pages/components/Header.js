import { COMPANY_NAME, DESCRIPTION, PHONE } from '../../utils/constants'
import { FaPhone } from 'react-icons/fa'

export default function Header() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-inner">
                    <span className="nav-brand">{COMPANY_NAME}</span>
                    <ul className="nav-links">
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#video">Find Us on TikTok</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href={`tel:${PHONE}`} className="nav-cta"><FaPhone size={14} /> Call Now</a></li>
                    </ul>
                </div>
            </nav>

            <section className="hero">
                <div className="hero-bg">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster="/_next/static/media/bg.6539f536.jpg"
                        preload="auto"
                    >
                        <source src="/video-bg.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="hero-shapes"></div>
                <div className="hero-overlay-animated"></div>
                <div className="hero-content">
                    <img
                        src="/card.jpg"
                        alt="Tacos Chuy banner"
                        width={400}
                        height={200}
                        className="card-img"
                        style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', marginBottom: '1.5rem' }}
                    />
                    <h1>{COMPANY_NAME}</h1>
                    <p className="hero-subtitle">{DESCRIPTION}</p>
                    <a href={`tel:${PHONE}`} className="hero-phone">
                        <FaPhone /> {PHONE}
                    </a>
                    <br />
                    <a href={`tel:${PHONE}`} className="hero-cta">
                        <FaPhone /> Call to Book Your Event
                    </a>
                </div>
            </section>
        </>
    )
}
