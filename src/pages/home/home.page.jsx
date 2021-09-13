import React from 'react';
import illustration from './../../assets/homepage_illustration.svg';
import './home-styles.scss';
import CustomButton from './../../components/button/button.component';

const HomePage = () => {
	return (
		<header className="wrapper header">
			<div className="header__left">
				<h1 className="header__left-primary header__left-text">
					Hi, I'm <span className="header__left-orange">Shubham</span>
					.
				</h1>
				<h2 className="header__left-secondary header__left-text">
					I’m a Freelancer, Web developer.
				</h2>
				<h3 className="header__left-tertiary header__left-text">
					I create websites so that people can further go online.
				</h3>
				<div className="header__left-cta">
					<CustomButton
						href="mailto:shubhamku044@gmail.com"
						className="header__left-btn"
					>
						Get in touch
					</CustomButton>
				</div>
			</div>
			<div className="header__right">
				<img
					src={illustration}
					alt="vector illustration"
					className="header__right-img"
				/>
			</div>
		</header>
	);
};

export default HomePage;
