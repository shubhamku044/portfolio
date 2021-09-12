import React from 'react';
import './button-styles.scss';

const CustomButton = (props) => {
	return (
		<div className="custom-button">
			<a href={props.href} target="_blank" rel="noreferrer">
				{props.children}
			</a>
		</div>
	);
};

export default CustomButton;
