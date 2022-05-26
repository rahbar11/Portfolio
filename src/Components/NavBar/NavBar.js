import Switch from '../Switch/Switch';
import Sun from './Sun';
import Moon from './Moon'

const NavBar = ({setIsIntroOpen, setIntroContents, theme, setTheme, colors}) => {
	return (
		<>
			<nav className='animate' style={{display: 'flex', justifyContent: 'flex-end', color: colors.font[theme]}}>
				<div className='pl3 flex items-center'>
					<Sun setTheme={setTheme} fill={colors.font[theme]} width='20px' />
					<Switch setTheme={setTheme} theme={theme} colors={colors} />
					<Moon setTheme={setTheme} fill={colors.font[theme]} width='17px' />
				</div>
				<p 
					onClick={() => {
						setIntroContents('Profile');
						setIsIntroOpen(true);
					}} 
					className='fw7 underline-hover pl3 pointer' 
					style={{marginRight:'auto'}}
				>Profile</p>
				<p 
					onClick={() => {
						setIntroContents('Projects');
						setIsIntroOpen(true);
					}} 
					className='fw7 underline-hover pl3 pointer'
				>Projects</p>
				<p 
					onClick={() => {
						setIntroContents('Contact');
						setIsIntroOpen(true);
					}} 
					className='fw7 underline-hover pl3 pr3 pointer'
				>Contact</p>
			</nav>
		</>
	)
}

export default NavBar;