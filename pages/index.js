import { useEffect } from 'react'
import Image from 'next/image'

import Layout from './components/layout'
import Header from './components/Header'
import Gallery from './components/Gallery'

import { DEFAULT_IMAGES, FOOD_ITEMS, SIDES, DRINKS, EMAIL, PHONE, BASE_URL, TIKTOK_URL } from '/utils/constants'
import { DESCRIPTION, COMPANY_NAME } from '../utils/constants'
import ItemList from './components/ItemList'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const VideoPlayer = dynamic(() => import('./components/VideoPlayer'), { ssr: false })

export default function HomeIndex() {
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
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section section-dark">
                <div className="container">
                    <div className="section-header reveal">
                        <h2>Get In Touch!</h2>
                        <p>Contact us via phone, or send us an email with information on the event you want catered and we will get back to you!</p>
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
                            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                            <p>Include event details</p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
