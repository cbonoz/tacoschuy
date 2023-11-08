import React from 'react';
import Link from 'next/link'
import { EMAIL, PHONE } from '../../utils/constants';

class Footer extends React.Component {
	render() {
		return (
			<div className='white'>
				<div>
					<ul className="icons">
						<li>
							<Link href={`mailto:${EMAIL}`} className="icon fa-envelope-o fa-2xl">
							</Link>
						</li>
						<li>
							<Link href={`tel:${PHONE}`} className="icon fa-phone fa-2xl">

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
