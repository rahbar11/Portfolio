import './Info.css'
import Github from './Github';
import LinkedIn from './LinkedIn.js';

const Info = ({theme, portfolio}) => {
	const {name, birthday, skills} = portfolio;
	const birthdate = new Date(birthday);
	const today = new Date();
	const age = Math.floor((today-birthdate)/1000/60/60/24/365.25)
	return (
			<div className='w-100 relative' style={{height: '75%'}}>
				<table className='tr-5 margin3' style={{color: (theme === 'light' ? 'black' : 'white')}}>
					<tbody>
						<tr className='padding2'>
							<th className='tl'>Name</th>
							<th className='w-10 tc'>:</th>
							<th className='tr'>{name}</th>
						</tr>
						<tr>
							<th className='tl'>Age</th>
							<th className='tc'>:</th>
							<th className='tr'>{age}</th>
						</tr>
						<tr>
							<th className='tl'>Skills</th>
							<th className='tc'>:</th>
							<th className='tr'>{skills}</th>
						</tr>
					</tbody>
				</table>
				<div className='absolute padding2 margin3 bottom-0 flex' >
					<a 
						className='flex justify-center items-center br-100 hover-orange' 
						target='_blank' 
						rel="noopener noreferrer"
						href={portfolio.github} 
						style={{width: '13%', aspectRatio: '1 / 1'}}
					>
						<Github fill='rgb(255, 162, 0)' width='70%' />
					</a>
					<a 
						className='button tr-5 shadow2 ma-auto' 
						target='_blank' 
						rel="noopener noreferrer"
						href='#' 
						style={{
						color: (theme === 'light' ? 'black' : 'white'),
						background: (theme === 'light' ? 'rgb(255, 162, 0)' : 'rgb(180, 100, 0)')
					  }}
					>Resume</a>
					<a 
						className='flex justify-center items-center br-100 hover-orange' 
						target='_blank' 
						rel="noopener noreferrer"
						href={portfolio.linkedin} 
						style={{width: '13%', aspectRatio: '1 / 1'}}
					>
						<LinkedIn fill='rgb(255, 162, 0)' width='70%' />
					</a>
				</div>
			</div>
	)
}

export default Info;