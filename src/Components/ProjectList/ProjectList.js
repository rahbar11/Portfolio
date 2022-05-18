import ProjectCard from '../ProjectCard/ProjectCard';
import './ProjectList.css';

const ProjectList = ({theme, projects}) => {
	return (
		<div className='center flex overflow-x-scroll scroll br-round' style={{width: '90%',height:'75%'}}>
			{projects.map((project, index) => {
					return <ProjectCard key={index} title={project.title} description={project.description} tools={project.tools} link={project.link} image={project.image} theme={theme} />
				}
			)}
		</div>
	)
}

export default ProjectList;