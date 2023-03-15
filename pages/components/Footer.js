import React from 'react';
import Link from 'next/link'

class Footer extends React.Component {
	render() {
		return (
			<div id="footer">
				<div className="inner">
					<ul className="icons">
						<li>
							<Link href="#contact" className="icon fa-envelope-o">
								<span className="label">Email</span>
							</Link>
						</li>
						<li>
							<Link href="#contact" className="icon fa-phone">
								<span className="label">Email</span>
							</Link>
						</li>
					</ul>
					<ul className="copyright">
						<li>Taquizas Chuy &copy;{new Date().getFullYear()}</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Footer;
