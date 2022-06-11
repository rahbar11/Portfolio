import {useState} from 'react';
import './Contact.css';

const Contact = ({theme, colors}) => {

	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState("");

	const formatAndSendMsg = () => {
		if (status !== 'sent' && status !== 'pending') {
			if (email && message) {
				setStatus('pending');
				sendMessage(email, message);	
			} else {
				setStatus('fieldIncomplete');
			}
		}
	}

	const sendMessage = (email, message) => {
		const params = {email: email, message: message}
		fetch(`http://localhost:3001/send`, {
		    method: 'POST',
			headers: {'Content-Type': 'application/json'},
		    body: JSON.stringify(params)
		})
		.then(response => response.json())
		.then(response => {
			if (response.statusCode===202) {
				setStatus("sent")
			} else {
				setStatus("failed")
			}
		})
		.catch((error) => setStatus("failed"))
	}

	return (
		<>
			<input 
				className='animate br-round margin3' 
				placeholder='E-Mail' 
				onChange={(event) => setEmail(event.target.value)}
				style={{
					height:'7%', 
					width: '80%', 
					border: '0.1em solid rgba(255, 162, 0, 0.5)', 
					color: colors.font[theme], 
					background: 'transparent'}} 
			/>
			<textarea 
				className='animate br-round margin3' 
				placeholder='Message' 
				onChange={(event) => setMessage(event.target.value)}
				style={{
					height:'30%', 
					width:'85%', 
					resize: 'none',
					border: '0.1em solid rgba(255, 162, 0, 0.5)', 
					color: colors.font[theme], 
					background: 'transparent'}} 
			></textarea>
			<p 
				className="absolute"
				style={{
					bottom: '15%',
					right: '7%',
					color: (status === 'sent' ? 'green' : 'red')
				}}
			>{(
				status === 'fieldIncomplete' ?
					"Please write your e-mail and message!" :
					(status === 'pending' ?
						"Sending..." :
						(status === 'sent' ?
							"Message sent!" :
							(status === 'failed' ?
								"Something went wrong!" :
								"Rahbarkhan97@gmail.com"
							)
						) 
					)
				)}
			</p>
			<div 
				className='absolute button-small animate shadow2'
				onClick={formatAndSendMsg} 
				style={{
						bottom: '3%',
						right: '7%',
						color: colors.font[theme],
						background: colors.main[theme]
					  }}
			>Send</div>
		</>
	)
}

export default Contact;