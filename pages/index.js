import React from 'react';
import Helmet from 'react-helmet';
import Image from 'next/image'

import Layout from './components/layout';
// import Lightbox from 'react-images'
import Gallery from './components/Gallery';

import { DEFAULT_IMAGES, FOOD_ITEMS, SIDES, DRINKS, EMAIL, PHONE } from '/utils/constants';
import ReactPlayer from 'react-player';
import { DESCRIPTION, COMPANY_NAME, VIDEO_URLS } from '../utils/constants';
import ItemList from './components/ItemList';
import Head from 'next/head';

class HomeIndex extends React.Component {
	constructor() {
		super();

		this.state = {
			lightboxIsOpen: false,
			currentImage: 0
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
			lightboxIsOpen: true
		});
	}
	closeLightbox() {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false
		});
	}
	gotoPrevious() {
		this.setState({
			currentImage: this.state.currentImage - 1
		});
	}
	gotoNext() {
		this.setState({
			currentImage: this.state.currentImage + 1
		});
	}
	handleClickImage() {
		if (this.state.currentImage === this.props.images.length - 1) return;

		this.gotoNext();
	}

	render() {
		return (
			<Layout>
				<Head>
					<title>Tacos Chuy | Mexican street food catering in South Washington</title>
					<meta name="description" content={DESCRIPTION} />
					<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
					{/* robots */}
					<meta name="robots" content="index, follow" />
					{/* keywords */}
					<meta name="keywords" content="taquizas, tacos, washington, south hill, catering, mexican food, mexican catering, mexican food catering, taco catering, taquizas catering, taquizas chuy, tacos chuy, taquizas chuy catering, tacos chuy catering, chuy catering, chuy taquizas, chuy tacos, chuy taquizas catering, chuy tacos catering, catering"/>
					<meta property="og:type" content="website" />

				</Head>

				{/* <div className="black-bar" /> */}
				<div id="main">
					{/* <img src={logo} className='logo-img' /> */}

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
							<div className="row">
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
						{/* <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul> */}
					</section>

					{/* <section> */}
						{/* <h2>Videos</h2> */}
						{/* <ReactPlayer url={VIDEO_URLS} playing={true} controls={true} muted /> */}
					{/* </section> */}

					<section id="three" name="contact">
						<h2>Get In Touch!</h2>
						<p className="header-sub2">
							Contact us via phone, or send us an email with information on the event you want catered and we will get back to you! All interested inquiries welcome.<br /><br/>
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
										{/* trigger call on click */}
										<a href={`tel:${PHONE}`}>{PHONE}</a>
									</li>
									<li>
										Contact: &nbsp;
										<h3 className="icon fa-envelope-o">
											<span className="label">Email</span>
										</h3>
										{/* trigger email on click */}
										<a href={`mailto:${EMAIL}`}>{EMAIL}</a>
									</li>
								</ul>
							</div>
						</div>
					</section>
				</div>
			</Layout>
		);
	}
}

export default HomeIndex;
