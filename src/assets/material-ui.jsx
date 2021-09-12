import * as React from 'react';

function MaterialUi(props) {
	return (
		<svg
			width={158}
			height={135}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M0 73.355V0l59.25 36.678V61.13l-39.5-24.452V85.58L0 73.355z"
				fill="#00B0FF"
			/>
			<path
				d="M59.25 36.678L118.5 0v73.355L79 97.808 59.25 85.58l39.5-24.452V36.678L59.25 61.13V36.678z"
				fill="#0081CB"
			/>
			<path
				d="M59.25 85.582v24.451l39.5 24.452v-24.452l-39.5-24.451z"
				fill="#00B0FF"
			/>
			<path
				d="M98.75 134.484L158 97.807V48.904L138.25 61.13v24.452l-39.5 24.452v24.452-.002zm39.5-97.806V12.225L158 0v24.452l-19.75 12.226z"
				fill="#0081CB"
			/>
		</svg>
	);
}

export default MaterialUi;
