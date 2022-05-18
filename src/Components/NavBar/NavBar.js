import Switch from '../Switch/Switch';
import Sun from './Sun';
import Moon from './Moon'

const NavBar = ({introContents, setIntroContents, theme, setTheme}) => {
	return (
		<>
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<div className='pl3 flex items-center'>
					<Sun setTheme={setTheme} fill={(theme === 'light' ? 'black' : 'white')} width='20px' />
					<Switch setTheme={setTheme} theme={theme} />
					<Moon setTheme={setTheme} fill={(theme === 'light' ? 'black' : 'white')} width='17px' />
				</div>
				<p onClick={() => setIntroContents('Info')} className='fw7 underline-hover pl3 pointer' style={{marginRight:'auto'}}>Profile</p>
				<p onClick={() => setIntroContents('Projects')} className='fw7 underline-hover pl3 pointer'>Projects</p>
				<p onClick={() => setIntroContents('Contact')} className='fw7 underline-hover pl3 pr3 pointer'>Contact</p>
			</nav>
		</>
	)
}

export default NavBar;