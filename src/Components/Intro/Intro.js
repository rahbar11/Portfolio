import {useEffect, useRef} from 'react';
import Profile from '../Profile/Profile';
import ProjectList from '../ProjectList/ProjectList';
import Contact from '../Contact/Contact';
import logo from './logo.png';
import './Intro.css';

const Intro = ({introContents, setIntroContents, theme, portfolio, twilio}) => {

	const intro = useRef(null)
	const image = useRef(null)
	const back_element = useRef(null)
	const intro_contents = useRef(null)

	useEffect(() => {
		if (introContents) {
			image.current.style.transitionDelay = '0s'
			back_element.current.style.transitionDelay = '0.5s, 0.5s'
			back_element.current.style.transitionProperty = 'visibility, opacity'
			intro_contents.current.style.transitionDelay = '0.5s, 0.5s'
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
			image.current.style.transitionDelay = '0s, 0.1s'
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
						setIntroContents('Profile')
					}
				}} 
				className="screen-width mb3 tr-5 center shadow-2 pointer br-100" 
				style={{aspectRatio: '1 / 1', position: 'relative', background: (theme === 'light' ? 'white' : 'black')}}
			>
				<svg 
					ref={back_element}
					onClick={() => {
							setIntroContents('');
						}}
					className='hover-orange invisible pointer padding2 margin3 br-100' 
					style={{position: 'absolute', top:'0%', left:'0%', width: '5%', enableBackground:'new 0 0 512 512'}}
					xmlns="http://www.w3.org/2000/svg" 
					xmlnsXlink="http://www.w3.org/1999/xlink" 
					xmlnsSvgjs="http://svgjs.com/svgjs" 
					version="1.1" 
					x="0" 
					y="0" 
					viewBox="0 0 24 24" 
					xmlSpace="preserve"
				>
					<g>
						<path 
							style={{transform: "scale(0.87)"}}
							xmlns="http://www.w3.org/2000/svg" 
							d="M17.921,1.505a1.5,1.5,0,0,1-.44,1.06L9.809,10.237a2.5,2.5,0,0,0,0,3.536l7.662,7.662a1.5,1.5,0,0,1-2.121,2.121L7.688,15.9a5.506,5.506,0,0,1,0-7.779L15.36.444a1.5,1.5,0,0,1,2.561,1.061Z" 
							fill="rgb(255, 162, 0)" 
							data-original="#000000"
						/>
					</g>
				</svg>

				<img 
					ref={image} 
					alt='Logo'
					src={logo} 
					className='tr-5 br-100 w-90'
					style={{position: 'absolute', top: '5%', left: '5%'}}
				/>
				<div ref={intro_contents} className='tr-5 fs5 w-100 invisible h-85' style={{position: 'absolute', top: '15%'}}>
					<h2 className='tr-5 br-round center w-50 padding2' style={{background: 'rgba(255, 162, 0, 0.5)', color: (theme === 'light' ? 'black' : 'white')}}>{introContents}</h2>
					{introContents === 'Profile' ? 
						<Profile portfolio={portfolio} theme={theme}/> : 
						(introContents === 'Projects' ? 
							<ProjectList theme={theme} projects={portfolio.projects} /> : 
							(introContents === 'Contact' ? <Contact twilio={twilio} theme={theme} /> : '')
							)}
				</div>
			</div>
		)
}

export default Intro;