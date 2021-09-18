import React from 'react';
import './project-styles.scss';

const ProjectCard = (props) => {
	return (
		<div className="project-card">
			<img
				src={props.img}
				alt={props.alt}
				className="project-card__img"
			/>
			<h5 className="project-card__title">{props.title}</h5>
			<p className="project-card__description">{props.description}</p>
			<a
				href={props.link}
				target="_blank"
				rel="noreferrer"
				className="project-card__link"
			>
				Source Code
			</a>
		</div>
	);
};

export default ProjectCard;
