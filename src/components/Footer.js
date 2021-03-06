import React from 'react';

class Footer extends React.Component {
	render() {
		return (
			<div id="footer">
				<div className="inner">
					<ul className="icons">
						<li>
							<a href="#contact" className="icon fa-envelope-o">
								<span className="label">Email</span>
							</a>
						</li>
						<li>
							<a href="#contact" className="icon fa-phone">
								<span className="label">Email</span>
							</a>
						</li>
					</ul>
					<ul className="copyright">
						<li>&copy; Taquizas Chuy 2020</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Footer;
