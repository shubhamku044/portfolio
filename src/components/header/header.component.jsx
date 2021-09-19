import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import './header-styles.scss';

const Header = () => {
	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		setClicked(!clicked);
	};

	return (
		<div className="navigation wrapper">
			<nav className="navigation__nav">
				<div className="navigation__logo">
					<Link to="/portfolio" className="navigation__link">
						shubham
					</Link>
				</div>
				<div className="navigation__menu-icon" onClick={handleClick}>
					{clicked ? (
						<MenuOpenIcon className="navigation__icon" />
					) : (
						<MenuIcon className="navigation__icon" />
					)}
				</div>

				<ul
					className={
						clicked ? 'navigation__list' : 'navigation__list closed'
					}
				>
					<li className="navigation__item" onClick={handleClick}>
						<Link to="/about" className="navigation__link">
							about
						</Link>
					</li>
					<li className="navigation__item" onClick={handleClick}>
						<Link to="/projects" className="navigation__link">
							projects
						</Link>
					</li>
					<li className="navigation__item" onClick={handleClick}>
						<Link to="/testimonials" className="navigation__link">
							testimonials
						</Link>
					</li>
					<li className="navigation__item" onClick={handleClick}>
						<a
							href="mailto:shubhamku044@gmail.com"
							className="navigation__link navigation__button"
						>
							contact
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
