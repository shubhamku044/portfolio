import project_dummy from './../../assets/project_dummy.png';
import calculator from './../../assets/calculator.png';
import monster_rolodex from './../../assets/monster_rolodex.png';
import ecommerce from './../../assets/e-commerce.png';

const projects = [
	{
		img: project_dummy,
		title: 'Web Scrapper',
		description:
			'A web scrapper using selenium that can find best hotel deals from booking.com',
		alt: 'Web scrapper image',
		link: 'https://github.com/shubhamku044/getBestDealFromBookingDotComWebAutomation_python_selenium',
	},
	{
		img: project_dummy,
		title: 'Web Automation',
		description:
			'A captcha solver bot created using selenium that can solve google re-Captcha using 2captcha API.',
		alt: 'Web automation image',
		link: 'https://github.com/shubhamku044/captcha_sover_2captcha',
	},
	{
		img: ecommerce,
		title: 'E-commerce clothing',
		description:
			'An e-commerce webapp using ReactJs. Also implemented firebase authentication for google o-auth and firebase store for database.',
		alt: 'e-commerce clothing image',
		link: 'https://github.com/shubhamku044/ecommerce-clothing',
	},
	{
		img: monster_rolodex,
		title: 'Monster Rolodex',
		description:
			'A webpage using ReactJs, I added filter feature to filter monsters name.',
		alt: 'monster rolodex image',
		link: 'https://github.com/shubhamku044/monster-rolodex',
	},
	{
		img: calculator,
		title: 'A GUI calculator',
		description: 'A gui calculator using PyQT-5.',
		link: 'https://github.com/shubhamku044/pyqt5_gui_calculator',
	},
];

export default projects;
