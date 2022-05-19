import {useEffect, useRef} from 'react';
import Info from '../Info/Info';
import ProjectList from '../ProjectList/ProjectList';
import Contact from '../Contact/Contact';
import logo from './logo.png';
import back from './back.svg';
import './Intro.css';

const Intro = ({introContents, setIntroContents, theme, portfolio, twilio}) => {

	const intro = useRef(null)
	const image = useRef(null)
	const back_element = useRef(null)
	const intro_contents = useRef(null)

	useEffect(() => {
		if (introContents) {
			image.current.style.transitionDelay = '0s'
			intro.current.style.transitionDelay = '0.1s'
			back_element.current.style.transitionDelay = '0.6s, 0.6s, 0s'
			back_element.current.style.transitionProperty = 'visibility, opacity, background'
			intro_contents.current.style.transitionDelay = '0.6s, 0.6s'
			intro_contents.current.style.transitionProperty = 'visibility, opacity'
			image.current.style.transform = 'scale(0.25)';
			image.current.style.top = '-40%';
			intro.current.style.transform = 'scale(2)';
			intro.current.style.transformOrigin = 'top';
			intro.current.style.borderRadius = '5%';
			intro.current.style.cursor = 'default'
			back_element.current.style.visibility = 'visible'
			back_element.current.style.opacity = '1'
			intro_contents.current.style.width = '100%'
			intro_contents.current.style.visibility = 'visible'
			intro_contents.current.style.opacity = '1'

		} else {
			intro_contents.current.style.transitionDelay = '0s'
			back_element.current.style.transitionDelay = '0s'
			intro.current.style.transitionDelay = '0.1s'
			image.current.style.transitionDelay = '0s, 0.2s'
			image.current.style.transitionProperty = 'top, transform'
			intro_contents.current.style.width = '0%'
			intro_contents.current.style.opacity = '0'
			intro_contents.current.style.visibility = 'hidden'
			back_element.current.style.opacity = '0'
			back_element.current.style.visibility = 'hidden'
			intro.current.style.transform = 'scale(1)';
			intro.current.style.transformOrigin = 'top';
			intro.current.style.borderRadius = '100%'
			intro.current.style.cursor = 'pointer'
			image.current.style.transform = 'scale(1)'
			image.current.style.top = '5%'
		}
	}, [introContents])

return (
			<div 
				ref={intro} 
				onClick={() => {
					if (!introContents) {
						setIntroContents('Info')
					}
				}} 
				className="screen-width mb3 tr-5 center shadow-2 pointer br-100" 
				style={{aspectRatio: '1 / 1', position: 'relative', background: (theme === 'light' ? 'white' : 'black')}}
			>
				<img 
					ref={back_element} 
					alt='Back'
					onClick={() => {
							setIntroContents('');
						}}
					src={back} 
					className='pa-adj hover-orange invisible pointer margin3 br-100' 
					style={{position: 'absolute', top:'0%', left:'0%', width: '5%', height: 'auto'}} 
				/>

				<img 
					ref={image} 
					alt='Logo'
					src={logo} 
					className='tr-5 br-100 w-90'
					style={{position: 'absolute', top: '5%', left: '5%'}}
				/>
				<div ref={intro_contents} className='tr-5 fs5 w-100 invisible h-85' style={{position: 'absolute', top: '15%'}}>
					<h2 className='br-round center w-50 padding2' style={{background: 'rgba(255, 162, 0, 0.5)'}}>{introContents}</h2>
					{introContents === 'Info' ? 
						<Info portfolio={portfolio} theme={theme}/> : 
						(introContents === 'Projects' ? 
							<ProjectList theme={theme} projects={portfolio.projects} /> : 
							(introContents === 'Contact' ? <Contact twilio={twilio} theme={theme} /> : '')
							)}
				</div>
			</div>
		)
}

export default Intro;