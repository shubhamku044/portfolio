import React from 'react';
import './socials-styles.scss';
import github from './../../assets/github.svg';
import instagram from './../../assets/instagram.svg';
import twitter from './../../assets/twitter.svg';
import linkedin from './../../assets/linkedin.svg';

const SocialHandle = () => {
	return (
		<div className="wrapper">
			<div className="social__handle-sidebar">
				<a
					href="https://twitter.com/shubhamku044"
					target="_blank"
					rel="noreferrer"
					className="social__handle-icon"
				>
					<img
						src={twitter}
						alt="twitter"
						className="social__handle-img"
					/>
				</a>
				<a
					href="https://github.com/shubhamku044"
					target="_blank"
					rel="noreferrer"
					className="social__handle-icon"
				>
					<img
						src={github}
						alt="github"
						className="social__handle-img"
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/shubhamku044/"
					target="_blank"
					rel="noreferrer"
					className="social__handle-icon"
				>
					<img
						src={linkedin}
						alt="linkedin"
						className="social__handle-img"
					/>
				</a>
				<a
					href="https://www.instagram.com/thelegitprogrammer/"
					target="_blank"
					rel="noreferrer"
					className="social__handle-icon"
				>
					<img
						src={instagram}
						alt="instagram"
						className="social__handle-img"
					/>
				</a>
			</div>
		</div>
	);
};

export default SocialHandle;
