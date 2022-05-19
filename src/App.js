import {useState, useEffect} from 'react';

import Intro from './Components/Intro/Intro';
import NavBar from './Components/NavBar/NavBar';
import './App.css';

//Project Images:
import Renin from './Project Images/Renin Chan.jpg';
import Portfolio from './Project Images/Portfolio.png'

function App() {
  const [theme, setTheme] = useState('light');
  const [introContents, setIntroContents] = useState('');

  const portfolio = {
    name: 'Rahbar Khan',
    birthday: '2000-04-27', //YYYY-MM-DD format (required to calculate age)
    skills: 'Python, JavaScript(React, Node, Express...), HTML, CSS, MS Office(Excel, Word...), Photoshop',
    github: 'https://github.com/rahbar11',
    linkedin: '#',
    projects: [
      {
        title: 'Portfolio',
        description: 'This website',
        tools: 'JavaScript(React.JS), HTML, CSS, Photoshop',
        link: 'https://github.com/rahbar11/Portfolio',
        image: Portfolio
      },
      {
        title: 'Renin Chan',
        description: 'A telegram bot to manage group chats with many unique features',
        tools: 'Python, Telegram Bot API',
        link: 'https://t.me/Miss_renin_bot',
        image: Renin
      }
    ]
  }

  const twilio = {
    phoneNumber: '$YOUR_NUMBER', // '+9198XXXXXXX1'
    accountSid: 'AC913fc1004184679ec92f439b9a2830a6',
    authToken: '$TWILIO_AUTH_TOKEN',
    messagingServiceSid: 'MGdf03208ad653daea144af91447b7edfd'
  }

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    }
  }, [])

  useEffect(() => {
    if (theme === 'light') {
      document.body.style = 'background: linear-gradient(to bottom, rgb(255, 162, 0), rgb(238, 231, 195)) no-repeat fixed center;'
    } else {
      document.body.style = 'background: linear-gradient(to bottom, rgb(200, 128, 0), rgb(10, 9, 0)) no-repeat fixed center;\ncolor: white'
    }
  }, [theme])

  return (
    <div className="App">
      <NavBar theme={theme} setTheme={setTheme} introContents={introContents} setIntroContents={setIntroContents} />
      <Intro portfolio={portfolio} twilio={twilio} introContents={introContents} setIntroContents={setIntroContents} theme={theme} />
    </div>
  );
}

export default App;
