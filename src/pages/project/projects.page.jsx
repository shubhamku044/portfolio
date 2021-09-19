import React from 'react';
import './projects-styles.scss';
import ProjectCard from './../../components/card/project.component';
import projects from './projects.data';

const ProjectsPage = () => {
	return (
		<div className="wrapper projects">
			{projects.map((project) => {
				return (
					<ProjectCard
						img={project.img}
						alt={project.alt}
						title={project.title}
						description={project.description}
						link={project.link}
						className="projects-card"
					/>
				);
			})}
		</div>
	);
};

export default ProjectsPage;
