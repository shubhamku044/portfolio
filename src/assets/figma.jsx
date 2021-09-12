import * as React from 'react';

function Figma(props) {
	return (
		<svg
			width={171}
			height={170}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M114 113.333c15.74 0 28.5-12.685 28.5-28.333 0-15.648-12.76-28.334-28.5-28.334S85.5 69.352 85.5 85s12.76 28.333 28.5 28.333z"
				fill="#19BCFE"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M57 170a28.587 28.587 0 0020.153-8.298 28.252 28.252 0 008.347-20.035v-28.334H57a28.588 28.588 0 00-20.153 8.299 28.25 28.25 0 00-8.347 20.035 28.252 28.252 0 008.347 20.035A28.587 28.587 0 0057 170z"
				fill="#09CF83"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M57 113.333h28.5V56.667H57a28.585 28.585 0 00-20.153 8.298A28.25 28.25 0 0028.5 85a28.252 28.252 0 008.347 20.035A28.587 28.587 0 0057 113.333z"
				fill="#A259FF"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M57 56.667h28.5V0H57a28.585 28.585 0 00-20.153 8.299A28.25 28.25 0 0028.5 28.333a28.25 28.25 0 008.347 20.035A28.585 28.585 0 0057 56.667z"
				fill="#F24E1E"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M114 56.667H85.5V0H114a28.586 28.586 0 0120.153 8.299 28.253 28.253 0 018.347 20.034 28.252 28.252 0 01-8.347 20.035A28.586 28.586 0 01114 56.667z"
				fill="#FF7262"
			/>
		</svg>
	);
}

export default Figma;
