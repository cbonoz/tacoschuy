import { useEffect, useState } from 'react'
import Image from 'next/image'

import Layout from './components/layout'
import Header from './components/Header'
import Gallery from './components/Gallery'

import { DEFAULT_IMAGES, FOOD_ITEMS, SIDES, DRINKS, EMAIL, PHONE, BASE_URL, TIKTOK_URL, FACEBOOK_URL, INSTAGRAM_URL } from '/utils/constants'
import { DESCRIPTION, COMPANY_NAME } from '../utils/constants'
import ItemList from './components/ItemList'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const VideoPlayer = dynamic(() => import('./components/VideoPlayer'), { ssr: false })

export default function HomeIndex() {
    const [revealed, setRevealed] = useState(false)
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        )

        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <Layout>
            <Head>
                <title>Tacos (Taquizas) Chuy | Mexican Street Food Catering</title>
                <meta name="description" content={DESCRIPTION} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#333333" />

                <link rel="preconnect" href="https://www.tiktok.com" />
                <link rel="dns-prefetch" href="https://www.tiktok.com" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Tacos (Taquizas) Chuy | Mexican Street Food Catering" />
                <meta property="og:description" content={DESCRIPTION} />
                <meta property="og:image" content={`${BASE_URL}/card.jpg`} />
                <meta property="og:image:alt" content="Tacos Chuy catering banner" />
                <meta property="og:url" content={BASE_URL} />
                <meta property="og:locale" content="en_US" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Tacos (Taquizas) Chuy | Mexican Street Food Catering" />
                <meta name="twitter:description" content={DESCRIPTION} />
                <meta name="twitter:image" content={`${BASE_URL}/card.jpg`} />
                <meta name="twitter:image:alt" content="Tacos Chuy catering banner" />

                <link rel="canonical" href={BASE_URL} />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "@id": `${BASE_URL}/#business`,
                            "name": "Tacos (Taquizas) Chuy",
                            "description": DESCRIPTION,
                            "url": BASE_URL,
                            "telephone": PHONE,
                            "email": EMAIL,
                            "sameAs": [TIKTOK_URL],
                            "areaServed": "South Washington",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Puyallup",
                                "addressRegion": "WA",
                                "postalCode": "98374",
                                "addressCountry": "US"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": 47.1854,
                                "longitude": -122.2929
                            },
                            "priceRange": "$$",
                            "servesCuisine": "Mexican",
                            "image": `${BASE_URL}/card.jpg`
                        })
                    }}
                />
            </Head>

            <Header />

            {/* About Section */}
            <section id="about" className="section">
                <div className="container">
                    <div className="section-header reveal">
                        <h2>About Tacos (Taquizas) Chuy</h2>
                        <p>Authentic Mexican street food catering in Puyallup, Tacoma, Lakewood, and beyond</p>
                    </div>
                    <div className="reveal about-content" style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', fontSize: '1.0625rem', color: 'var(--color-text)' }}>
                        <p>
                            We bring the bold flavors of Mexican street food directly to your event.
                        </p>
                        <p>
                            Based in Puyallup, WA, Tacos (Taquizas) Chuy specializes in full-service <a href="#menu">taquiza catering</a> for weddings, corporate events, 
                            birthday parties, quinceañeras, and special celebrations throughout the greater South Washington 
                            area including Tacoma, Lakewood, and the surrounding regions.
                        </p>
                        <p>
                            Browse our <a href="#gallery">recent event photos</a> to see 
                            our setup, or <a href="#contact">contact us</a> to book your celebration.
                        </p>
                        <p>
                            Our menu features a wide selection of traditional meats prepared from family recipes — 
                            including carne asada (steak), pollo (chicken), carnitas (pork), birria, adobada, chorizo, 
                            buche, tripas, lengua, and cabeza. Every taco is made to order and served fresh on site.
                        </p>
                        <p>
                            We also serve classic sides like rice, beans, salsas, guacamole, fresh vegetables, mole, 
                            tortillas, chips, and tortas. Pair your meal with refreshing aguas frescas including 
                            horchata and jamaica, or choose from sodas, water, and coffee.
                        </p>
                        <p>
                            Whether you are planning an intimate gathering or a large celebration for up to 1,000 
                            guests, we work with you to create a custom menu that fits your budget and dietary needs. 
                            Our full-service catering includes setup, on-site cooking, service, and cleanup — so you 
                            can enjoy your event without the stress.
                        </p>
                    </div>
                </div>
            </section>

            {/* Menu Section */}
            <section id="menu" className="section section-alt">
                <div className="container">
                    <div className="section-header reveal">
                        <h2>Our Menu</h2>
                        <p>We serve events big and small for any of the following needs, for groups between 50 to 1000 people!</p>
                    </div>
                    <div className="menu-grid">
                        <div className="reveal reveal-delay-1"><ItemList title={"Fresh Tacos"} items={FOOD_ITEMS} /></div>
                        <div className="reveal reveal-delay-2"><ItemList title={"Sides"} items={SIDES} /></div>
                        <div className="reveal reveal-delay-3"><ItemList title={"Drinks"} items={DRINKS} /></div>
                    </div>
                    <p className="reveal" style={{ textAlign: 'center', marginTop: '2rem', fontSize: '1.125rem', color: 'var(--color-text-light)' }}>
                        Tacos Chuy is full service: We will work with you to create a menu that fits your needs and budget
                        depending on the number of people. Rates typically start at $15 per person.
                    </p>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="section">
                <div className="container">
                    <div className="section-header reveal">
                        <h2>Recent Events</h2>
                        <p>See how we bring the fiesta to weddings, parties, and special occasions</p>
                    </div>
                    <div className="reveal">
                        <Gallery
                            images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                                source: src,
                                src,
                                thumbnail,
                                caption,
                                description
                            }))}
                        />
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section id="video" className="section section-alt video-section">
                <div className="container">
                    <div className="section-header reveal">
                        <h2>See Us In Action</h2>
                        <p>We don&apos;t just cater events — we taco &apos;bout them for years!</p>
                    </div>
                    <div className="video-wrapper reveal">
                        <VideoPlayer />
                    </div>
                    <p className="reveal" style={{ textAlign: 'center', marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                            Follow on Facebook &rarr;
                        </a>
                        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                            Follow on Instagram &rarr;
                        </a>
                        <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                            Follow on TikTok &rarr;
                        </a>
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section section-dark">
                <div className="container">
                    <div className="section-header reveal">
                        <h2>Get In Touch!</h2>
                        <p>Contact us via phone, or send us an email with information on the event you want catered and we will get back to you!</p>
                    </div>

                    <div className="reveal info-box" style={{
                        background: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        borderRadius: 'var(--radius-lg)',
                        padding: '1.5rem 2rem',
                        maxWidth: '600px',
                        margin: '0 auto 2.5rem',
                        textAlign: 'center',
                    }}>
                        <h3 style={{
                            color: 'var(--color-primary)',
                            fontSize: '1.1rem',
                            marginBottom: '1rem',
                            fontFamily: 'var(--font-heading)',
                        }}>
                            📋 Have This Info Ready
                        </h3>
                        <ul style={{
                            color: 'rgba(255,255,255,0.85)',
                            fontSize: '1rem',
                            lineHeight: '2.2',
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            display: 'inline-block',
                            textAlign: 'left',
                        }}>
                            <li>👥 Approximate number of guests</li>
                            <li>📍 Event location</li>
                            <li>🌮 Desired menu items</li>
                            <li>📅 Event date &amp; time</li>
                            <li>📝 Any special requests or dietary needs</li>
                        </ul>
                    </div>

                    <div className="contact-grid reveal">
                        <div className="contact-card reveal-delay-1">
                            <div className="contact-icon">📍</div>
                            <h3>Location</h3>
                            <p>{COMPANY_NAME}<br />Puyallup, WA 98374<br />United States</p>
                        </div>
                        <div className="contact-card reveal-delay-2">
                            <div className="contact-icon">📞</div>
                            <h3>Phone</h3>
                            <a href={`tel:${PHONE}`}>{PHONE}</a>
                            <p>Call Jesus directly</p>
                        </div>
                        <div className="contact-card reveal-delay-3">
                            <div className="contact-icon">✉️</div>
                            <h3>Email</h3>
                            {revealed ? (
                                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                            ) : (
                                <a href="#" className="reveal-link" onClick={(e) => { e.preventDefault(); setRevealed(true); }}>
                                    Click to reveal
                                </a>
                            )}
                            <p>Include event details</p>
                        </div>
                    </div>

                    <p className="reveal" style={{
                        textAlign: 'center',
                        marginTop: '2rem',
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: '1rem',
                        fontStyle: 'italic',
                    }}>
                        Couldn&apos;t reach us by phone? Send us an email and we&apos;ll get back to you as soon as we&apos;re free!
                    </p>
                </div>
            </section>
        </Layout>
    )
}
