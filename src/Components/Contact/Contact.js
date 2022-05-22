import {useState} from 'react';
import './Contact.css';

const Contact = ({twilio, theme, colors}) => {

	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState("");

	const {phoneNumber, accountSid, authToken, messagingServiceSid} = twilio;

	const formatAndSendSms = () => {
		if (status !== 'sent' && status !== 'pending') {
			if (email && message) {
				const msg = `E-Mail: ${email}\n\nMessage:\n${message}`;
				setStatus('pending');
				sendMessage(phoneNumber, msg);	
			} else {
				setStatus('fieldIncomplete');
			}
		}
	}

	const sendMessage = (number, message) => {
		const params = {To: number, Body: message, MessagingServiceSid: messagingServiceSid}
		const formBody = Object.keys(params).map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(params[key])).join('&')
		fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
		    method: 'POST',
		    headers: {Authorization: "Basic " + btoa(accountSid + ":" + authToken), 'Content-Type': 'application/x-www-form-urlencoded'},
		    body: formBody
		}).then((response) => {
			if (response.status===201) {
				setStatus("sent")
			} else {
				setStatus("failed")
			}
		}).catch((error) => setStatus("failed"))
	}

	return (
		<>
			<input 
				className='tr-5 br-round margin3' 
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
				className='tr-5 br-round margin3' 
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
				className='absolute button-small tr-5 shadow2'
				onClick={formatAndSendSms} 
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