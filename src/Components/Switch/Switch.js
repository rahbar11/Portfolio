import {useEffect, useRef} from 'react';

const Switch = ({theme, setTheme, colors}) => {
	const circle = useRef(null)
	const outline = useRef(null)

	useEffect(() => {
		if (theme==='light') {
			circle.current.style.transform = 'translateX(0px)'
		} else {
			circle.current.style.transform = 'translateX(15.8px)'
		}
	}, [theme])


	const applyTheme = () => {
		(theme==='light') ?	setTheme('dark') : setTheme('light')
	}

	return (
		<div onClick={applyTheme} ref={outline} className='animate pointer br4 tc ma1 relative' style={{width:'32px', height: '16px', border: '2px solid white', borderColor: colors.font[theme]}}>
			<div ref={circle} className='animate br-100 absolute bg-white' style={{height:'10px', width: '10px', top:'0.9px', left:'1.1px', background: colors.font[theme]}}>
			</div>
		</div>
	)
}

export default Switch;