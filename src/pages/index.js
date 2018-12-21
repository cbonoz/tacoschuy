import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'
import { Col, Row, Grid } from 'react-bootstrap'

import card from '../assets/images/card.jpg'
import logo from '../assets/images/logo.jpg'

import { DEFAULT_IMAGES, FOOD_ITEMS, SIDES, DRINKS, EMAIL, PHONE } from '../components/helper/helper'


class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox(index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage() {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Taquizos Chuy"
        const siteDescription = "Taco Catering Services"
        const formEmail = `https://formspree.io/${EMAIL}`
        // console.log(formEmail)
        return (
            <Layout>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <div className='black-bar' />
                <div id="main">
                    {/* <img src={logo} className='logo-img' /> */}

                    <section id="one" name="intro">
                        <header className="major">
                            <h2>Tacos (Taquizas) Chuy</h2>
                            <p className='header-sub'>Street Taco Catering for the greater South Washington Area.</p>
                        </header>

                        <p className='header-sub2'>We serve events big and small for any of the following needs:</p>

                        <Grid>
                            <Row><Col xs={12} md={4}>
                                <h2>Fresh Tacos:</h2>
                                <ul>
                                    {FOOD_ITEMS.map((item, i) => {
                                        return <li className='food-item' key={i}>{item}</li>
                                    })}
                                </ul>
                            </Col><Col xs={12} md={4}>
                                    <h2>Sides:</h2>
                                    <ul>
                                        {SIDES.map((item, i) => {
                                            return <li className='food-item' key={i}>{item}</li>
                                        })}
                                    </ul>
                                </Col><Col xs={12} md={4}>
                                    <h2>Drinks:</h2>
                                    <ul>
                                        {DRINKS.map((item, i) => {
                                            return <li className='food-item' key={i}>{item}</li>
                                        })}
                                    </ul>
                                </Col></Row>
                        </Grid>
                        <p className="home-subtitle">
                            <b>Full Service: Prices typically run between $9-14 per person depending on the number of people and food requested. Can serve between 50 to 500+ people! </b>
                        </p>
                        <p className="home-subtitle"><b>We'd love to serve your next event - see below for how to contact us!</b></p>
                    </section>

                    <section id="two" name="gallery">
                        <h2>Recent Events</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        {/* <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul> */}
                    </section>

                    <section id="three" name="contact">
                        <h2>Get In Touch!</h2>
                        <p>Contact us via phone or the form below with your request, and we'll get back to you!</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form action={formEmail} method="POST">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Describe the services you need." rows="4"></textarea></div>
                                    </div>
                                    <ul className="actions">
                                        <li><input type="submit" value="Send a Business Inquiry" /></li>
                                    </ul>
                                </form>
                        
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        Taquizas Chuy<br />
                                        Puyallup, WA 98374<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        {PHONE}
                                    </li>
                                    <li>
                                        Contact: &nbsp;
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">{EMAIL}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <img src={card} className='card-img' />
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex