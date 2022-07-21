import {useState, useEffect} from 'react';

import Intro from './Components/Intro/Intro';
import NavBar from './Components/NavBar/NavBar';
import './App.css';

//Project Images:
import Renin from './Project Images/Renin Chan.jpg';
import Portfolio from './Project Images/Portfolio.png';
import ExamManagement from './Project Images/Exam-Management.jpg';

function App() {
  const [theme, setTheme] = useState('light');
  const [isIntroOpen, setIsIntroOpen] = useState(false);
  const [introContents, setIntroContents] = useState('Profile');

//Portfolio Details:
  const portfolio = {
    name: 'Rahbar Khan',
    birthday: '2000-04-27', //YYYY-MM-DD format (required to calculate age)
    skills: 'Python, JavaScript (React, Node, Express...), HTML, CSS, MS Office (Excel, Word...), Adobe Photoshop',
    email: 'rahbarkhan97@gmail.com',
    github: 'https://github.com/rahbar11',
    linkedin: 'https://linkedin.com/in/rahbar11',
    contact: true,
    projects: [
      {
        title: 'Exam Management',
        description: 'A website for teachers to manage exams and questions.',
        tools: 'Express.JS, MongoDB, Mongoose, HTML (EJS), JWT, Bcrypt',
        link: 'https://github.com/rahbar11/Exam-Management',
        image: ExamManagement
      },
      {
        title: 'Portfolio',
        description: 'This website. It can also be used as a template to create your own portfolio.',
        tools: 'JavaScript (React.JS), HTML, CSS, Photoshop',
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


//Colors Palette:
  const colors = {
    gradient: {
      light: 'rgb(255, 162, 0), rgb(238, 231, 195)',
      dark: 'rgb(180, 100, 0), rgb(20, 18, 0)'
    },
    main: {
      light: 'rgb(255, 162, 0)',
      dark: 'rgb(180, 100, 0)'
    },
    title: {
      light: 'rgba(255, 162, 0, 0.5)',
      dark: 'rgba(255, 162, 0, 0.5)'
    },
    font: {
      light: 'black',
      dark: 'white'
    },
    background: {
      light: 'white',
      dark: 'black'
    }
  }

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    }
  }, [])

  useEffect(() => {
      document.body.style = `background: linear-gradient(to bottom, ${colors.gradient[theme]}) no-repeat fixed center;\ncolor: ${colors.font[theme]}`
      // eslint-disable-next-line
  }, [theme])

  return (
    <div className="App">
      <NavBar 
        theme={theme} 
        colors = {colors}
        contact = {portfolio.contact}
        setTheme={setTheme} 
        setIsIntroOpen={setIsIntroOpen} 
        setIntroContents={setIntroContents} 
      />
      <Intro 
        portfolio={portfolio} 
        isIntroOpen={isIntroOpen} 
        setIsIntroOpen={setIsIntroOpen} 
        introContents={introContents} 
        setIntroContents={setIntroContents} 
        theme={theme} 
        colors = {colors}
      />
    </div>
  );
}

export default App;
