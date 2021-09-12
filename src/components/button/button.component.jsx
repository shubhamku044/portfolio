import React from 'react';
import './button-styles.scss';

const CustomButton = (props) => {
	return (
		<a
			href={props.href}
			target="_blank"
			rel="noreferrer"
			className="custom-button"
		>
			{props.children}
		</a>
	);
};

export default CustomButton;
