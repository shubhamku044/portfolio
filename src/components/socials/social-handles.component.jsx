import React from 'react';
import './socials-styles.scss';
import github from './../../assets/github.svg';
import instagram from './../../assets/instagram.svg';
import twitter from './../../assets/twitter.svg';
import linkedin from './../../assets/linkedin.svg';

const SocialHandle = () => {
	return (
		<div className="social__handle-sidebar">
			<img src={twitter} alt="twitter" className="social__handle-icon" />
			<img src={github} alt="github" className="social__handle-icon" />
			<img
				src={linkedin}
				alt="linkedin"
				className="social__handle-icon"
			/>
			<img
				src={instagram}
				alt="instagram"
				className="social__handle-icon"
			/>
		</div>
	);
};

export default SocialHandle;
