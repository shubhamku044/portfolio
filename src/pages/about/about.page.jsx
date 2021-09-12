import React from 'react';
import './about-styles.scss';
import MyImage from './../../assets/my pic.png';
import Css from './../../assets/css.svg';
import Figma from './../../assets/figma.svg';
import Flask from './../../assets/flask.svg';
import Git from './../../assets/git.svg';
import Html from './../../assets/html.svg';
import Javascript from './../../assets/javascript.svg';
import MaterialUi from './../../assets/material-ui.svg';
import NodeJs from './../../assets/node-js.svg';
import Python from './../../assets/python.svg';
import ReactLogo from './../../assets/react.svg';
import Redux from './../../assets/redux.svg';
import Sass from './../../assets/sass.svg';
import Selenium from './../../assets/selenium.svg';
import TailwindCss from './../../assets/tailwind-css.svg';
import VsCode from './../../assets/vscode.svg';

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
						Hi, I'm&nbsp;
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

			<h2 className="about-skills">My Skills</h2>
			<div className="about__logo-container">
				<img src={Html} alt="html" className="about__logo-item" />
				<img src={Css} alt="css" className="about__logo-item" />
				<img
					src={Javascript}
					alt="javascript"
					className="about__logo-item"
				/>
				<img src={ReactLogo} alt="react" className="about__logo-item" />
				<img src={Redux} alt="redux" className="about__logo-item" />
				<img src={Python} alt="python" className="about__logo-item" />
				<img src={Flask} alt="flask" className="about__logo-item" />
				<img
					src={Selenium}
					alt="selenium"
					className="about__logo-item"
				/>
				<img src={Figma} alt="figma" className="about__logo-item" />
				<img src={Git} alt="git" className="about__logo-item" />
				<img src={Sass} alt="sass" className="about__logo-item" />
				<img src={NodeJs} alt="node js" className="about__logo-item" />
				<img
					src={MaterialUi}
					alt="material ui"
					className="about__logo-item"
				/>
				<img
					src={TailwindCss}
					alt="tailwind css"
					className="about__logo-item"
				/>
				<img src={VsCode} alt="vs code" className="about__logo-item" />
			</div>
		</main>
	);
};

export default AboutPage;
