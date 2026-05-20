import Image from 'next/image'

import Layout from './components/layout'
import Gallery from './components/Gallery'

import { DEFAULT_IMAGES, FOOD_ITEMS, SIDES, DRINKS, EMAIL, PHONE, BASE_URL, TIKTOK_URL } from '/utils/constants'
import { DESCRIPTION, COMPANY_NAME } from '../utils/constants'
import ItemList from './components/ItemList'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const VideoPlayer = dynamic(() => import('./components/VideoPlayer'), { ssr: false })

export default function HomeIndex() {
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

            <main id="main">
                <section id="one" name="intro">
                    <header className="major">
                        <Image alt='Banner' src={'/card.jpg'} className="card-img" width={400} height={200} />
                        <h2>{COMPANY_NAME}</h2>
                        <hr />
                        <p className="header-sub">{DESCRIPTION}</p>
                        <h3>Contact Jesus:&nbsp;<a href={`tel:${PHONE}`}>{PHONE}</a></h3>
                    </header>

                    <p className="home-subtitle">
                        We serve events big and small for any of the following needs, for groups between 50 to 1000
                        people!
                    </p>
                    <div className="container">
                        <div className="row" style={{ display: 'flex' }}>
                            <ItemList title={"Fresh Tacos"} items={FOOD_ITEMS} />
                            <ItemList title={"Sides"} items={SIDES} />
                            <ItemList title={"Drinks"} items={DRINKS} />
                        </div>
                    </div>

                    <p className="home-subtitle">
                        Tacos Chuy is full service: We will work with you to create a menu that fits your needs and budget
                        depending on the number of people. Rates typically start at $15 per person.
                    </p>
                    <p className="home-subtitle">
                        We would love to serve your next event - see below for how to contact us!
                    </p>
                </section>

                <section id="two" name="gallery">
                    <h2>Recent Events</h2>

                    <Gallery
                        images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            source: src,
                            src,
                            thumbnail,
                            caption,
                            description
                        }))}
                    />
                </section>

                <section>
                    <VideoPlayer />
                </section>

                <section id="three" name="contact">
                    <h2>Get In Touch!</h2>
                    <p className="header-sub2">
                        Contact us via phone, or send us an email with information on the event you want catered and we will get back to you! All interested inquiries welcome.<br /><br />
                        Please include the approximate number of people, location, general items desired, and date.
                    </p>
                    <div className="row">
                        <div className="4u 12u$(small)">
                            <ul className="labeled-icons">
                                <li>
                                    <h3 className="icon fa-home">
                                        <span className="label">Address</span>
                                    </h3>
                                    {COMPANY_NAME}<br />
                                    Puyallup, WA 98374<br />
                                    United States
                                </li>
                                <li>
                                    <h3 className="icon fa-mobile">
                                        <span className="label">Phone</span>
                                    </h3>
                                    <a href={`tel:${PHONE}`}>{PHONE}</a>
                                </li>
                                <li>
                                    Contact: &nbsp;
                                    <h3 className="icon fa-envelope-o">
                                        <span className="label">Email</span>
                                    </h3>
                                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
}
