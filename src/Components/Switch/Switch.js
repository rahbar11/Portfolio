import {useEffect, useRef} from 'react';

const Switch = ({theme, setTheme}) => {
	const circle = useRef(null)
	const outline = useRef(null)

	useEffect(() => {
		if (theme==='light') {
			circle.current.style.transform = 'translateX(0px)'
			circle.current.style.background = 'black'
			outline.current.style.borderColor = 'black'
		} else {
			circle.current.style.transform = 'translateX(16px)'
			circle.current.style.background = 'white'
			outline.current.style.borderColor = 'white'
		}
	}, [theme])


	const applyTheme = () => {
		(theme==='light') ?	setTheme('dark') : setTheme('light')
	}

	return (
		<div onClick={applyTheme} ref={outline} className='tr-5 pointer br4 tc ma1 relative' style={{width:'32px', height: '16px', border: '2px solid white'}}>
			<div ref={circle} className='tr-5 br-100 absolute bg-white' style={{height:'10px', width: '10px', top:'1px', left:'1px'}}>
			</div>
		</div>
	)
}

export default Switch;