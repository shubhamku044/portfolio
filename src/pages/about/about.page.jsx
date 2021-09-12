import React from 'react';
import './about-styles.scss';
import MyImage from './../../assets/my pic.png';

const AboutPage = () => {
	const getAge = (birthDate) => {
		return Math.floor(
			(new Date() - new Date(birthDate).getTime()) / 3.15576e10
		);
	};

	return (
		<main className="wrapper about">
			<div className="about-me">
				<div className="about__left">
					<h1 className="about__left-primary about__left-text">
						Hi, I'm &nbsp;
						<span className="about__left-orange">Shubham</span>.
					</h1>
					<h3 className="about__left-secondary about__left-text">
						{getAge('2003-09-21')} y&#47;o&#44; Programming
						enthusiast.
					</h3>
					<h4 className="about__left-tertiary about__left-text">
						I love to learn new things and new technologies.
					</h4>
					<h5 className="about__left-tertiary about__left-text">
						I also like to read books.
					</h5>
				</div>
				<div className="about__right">
					<img
						src={MyImage}
						alt="vector illustration"
						className="about__right-img"
					/>
				</div>
			</div>

			<h2>My Skills</h2>
		</main>
	);
};

export default AboutPage;
