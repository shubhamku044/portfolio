import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
import blankImg from './../../assets/person.png';
import CustomButton from './../../components/button/button.component';
import './testimonials-styles.scss';

const TestimonialPage = () => {
	const [people, setPeople] = useState(data);
	const [index, setIndex] = React.useState(0);

	useEffect(() => {
		const lastIndex = people.length - 1;
		if (index < 0) {
			setIndex(lastIndex);
		}
		if (index > lastIndex) {
			setIndex(0);
		}
	}, [index, people]);

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1);
		}, 4000);
		return () => {
			clearInterval(slider);
		};
	}, [index]);

	return (
		<section className="testimonial">
			<div className="testimonial__center">
				{people.map((person, personIndex) => {
					const { id, image, name, quote } = person;

					let position = 'nextSlide';
					if (personIndex === index) {
						position = 'activeSlide';
					}
					if (
						personIndex === index - 1 ||
						(index === 0 && personIndex === people.length - 1)
					) {
						position = 'lastSlide';
					}

					return (
						<article className={position} key={id}>
							<img
								src={image ? image : blankImg}
								alt={name}
								className="testimonial__person-img"
							/>
							<h4 className="testimonial__person-name">{name}</h4>
							<p className="testimonial__text">{quote}</p>
							<FaQuoteRight className="testimonial__icon" />
						</article>
					);
				})}
				<button
					className="testimonial__prev"
					onClick={() => setIndex(index - 1)}
				>
					<FiChevronLeft />
				</button>
				<button
					className="testimonial__next"
					onClick={() => setIndex(index + 1)}
				>
					<FiChevronRight />
				</button>
			</div>
			<div className="testimonial__btn-container">
				<CustomButton
					href="mailto:shubhamku044@gmail.com"
					className="testimonial__btn"
				>
					Get in touch
				</CustomButton>
			</div>
		</section>
	);
};

export default TestimonialPage;
