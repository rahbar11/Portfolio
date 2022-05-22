import './ProjectCard.css';

const ProjectCard = ({title, description, tools, link, image, theme, colors}) => {
	return (
		<a 
			href={link}
			target='_blank' 
			rel="noopener noreferrer"
			className='tr-5 br-round grow-size pointer padding2 margin3 shadow5 tc no-underline' 
			style={{
				flex: '0 0 50%',
				color: colors.font[theme],
				background: colors.main[theme]
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