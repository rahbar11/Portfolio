import './ProjectCard.css';

const ProjectCard = ({title, description, tools, link, image, theme}) => {
	return (
		<a 
			href={link}
			target='_blank' 
			rel="noopener noreferrer"
			className='tr-5 br-round grow-size pointer padding2 margin3 shadow5 tc no-underline' 
			style={{
				flex: '0 0 50%',
				color: (theme === 'light' ? 'black' : 'white'),
				background: (theme === 'light' ? 'rgb(255, 162, 0)' : 'rgb(180, 100, 0)')
			}}
		>
			<img className='w-25 br-100' alt={title} src={image} />
			<h3 className='margin3'>{title}</h3>
			<p className='fw1'>{description}</p>
			<p className='fw1'><span className='fw7'>Tools: </span>{tools}</p>
		</a>
	)
}

export default ProjectCard;