import React from 'react';
import Helmet from 'react-helmet';
import Image from 'next/image'

import Layout from './components/layout';
// import Lightbox from 'react-images'
import Gallery from './components/Gallery';
import { Col, Row, Grid } from 'react-bootstrap';

import { DEFAULT_IMAGES, FOOD_ITEMS, SIDES, DRINKS, EMAIL, PHONE } from '/utils/constants';

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
		const siteTitle = 'Taquizos Chuy';
		const siteDescription = 'Taco Catering Services';
		const formEmail = `https://formspree.io/${EMAIL}`;
		return (
			<Layout>
				<Helmet>
					<title>{siteTitle}</title>
					<meta name="description" content={siteDescription} />
				</Helmet>

				{/* <div className="black-bar" /> */}
				<div id="main">
					{/* <img src={logo} className='logo-img' /> */}

					<section id="one" name="intro">
						<header className="major">
							<Image alt='Banner' src={'/card.jpg'} className="card-img" width={400} height={200} />
							<h2>Tacos (Taquizas) Chuy</h2>
							<hr />
							<p className="header-sub">Street Taco Catering for the greater South Washington Area.</p>
							<p>Contact Jesus: {PHONE}</p>
						</header>

						<p className="header-sub2">
							We serve events big and small for any of the following needs, for groups between 50 to 1000
							people!
						</p>
						<div className="container">
							<div className="row">
								<div className="col-sm-12 col-md-6 col-xs-12 col-lg-4">
									<h2 className="item-category">Fresh Tacos:</h2>
									<ul>
										{FOOD_ITEMS.map((item, i) => {
											return (
												<li className="food-item" key={i}>
													{item}
												</li>
											);
										})}
									</ul>
								</div>
								<div className="col-sm-12 col-md-6 col-xs-12 col-lg-4">
									<h2 className="item-category">Sides:</h2>
									<ul>
										{SIDES.map((item, i) => {
											return (
												<li className="food-item" key={i}>
													{item}
												</li>
											);
										})}
									</ul>
								</div>
								<div className="col-sm-12 col-md-6 col-xs-12 col-lg-4">
									<h2 className="item-category">Drinks:</h2>
									<ul>
										{DRINKS.map((item, i) => {
											return (
												<li className="food-item" key={i}>
													{item}
												</li>
											);
										})}
									</ul>
								</div>
							</div>
						</div>

						<p className="home-subtitle">
							
							<b>
								Full Service: Prices typically run between $9-14 per person depending on the number of
								people and food requested.
							</b>
						</p>
						<p className="home-subtitle">
							<b>We would love to serve your next event - see below for how to contact us!</b>
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

					<section id="three" name="contact">
						<h2 className="header-sub">Get In Touch!</h2>
						<p className="header-sub2">
							Contact us via phone, or send us an email with information on the event you want catered and we will get back to you!<br/><br/>
							Please include the approximate number of people, location, general items desired, and date.

						</p>
						<div className="row">
							<div className="4u 12u$(small)">
								<ul className="labeled-icons">
									<li>
										<h3 className="icon fa-home">
											<span className="label">Address</span>
										</h3>
										Taquizas Chuy<br />
										Puyallup, WA 98374<br />
										United States
									</li>
									<li>
										<h3 className="icon fa-mobile">
											<span className="label">Phone</span>
										</h3>
										{PHONE}
									</li>
									<li>
										Contact: &nbsp;
										<h3 className="icon fa-envelope-o">
											<span className="label">Email</span>
										</h3>
										<a href="#">{EMAIL}</a>
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
