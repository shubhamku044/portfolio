import React, { useState, useEffect } from 'react';
import './footer-styles.scss';
import Fork from './../../assets/fork.jsx';
import Star from './../../assets/star.jsx';

const Footer = () => {
	const [Data, setData] = useState({});

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		return fetch('https://api.github.com/repos/shubhamku044/portfolio')
			.then((response) => response.json())
			.then((data) => {
				return setData(data);
			});
	};
	return (
		<footer className="footer">
			<a
				href="https://github.com/shubhamku044/portfolio"
				className="footer__link"
				target="_blank"
				rel="noreferrer"
			>
				<div className="footer__text">
					Designed &#38; Built by Shubham
				</div>
				<div className="footer__icon-box">
					<span className="footer__icon-container">
						<Star className="footer__icon" />
						{Data.stargazers_count}
					</span>
					&nbsp; &nbsp;
					<span className="footer__icon-container">
						<Fork className="footer__icon" />

						{Data.forks_count}
					</span>
				</div>
			</a>
		</footer>
	);
};

export default Footer;
