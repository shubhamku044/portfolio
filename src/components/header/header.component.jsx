import React from 'react';
import { Link } from 'react-router-dom';
import './header-styles.scss';

const Header = () => {
	return (
		<div className="navigation wrapper">
			<nav className="navigation__nav">
				<div className="navigation__logo">
					<Link to="/portfolio" className="navigation__link">
						shubham
					</Link>
				</div>
				<ul className="navigation__list">
					<li className="navigation__item">
						<Link to="/about" className="navigation__link">
							about
						</Link>
					</li>
					<li className="navigation__item">
						<Link to="/projects" className="navigation__link">
							projects
						</Link>
					</li>
					<li className="navigation__item">
						<Link to="/testimonials" className="navigation__link">
							testimonials
						</Link>
					</li>
					<li className="navigation__item">
						<Link
							to="/contact"
							className="navigation__link navigation__button"
						>
							contact
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
