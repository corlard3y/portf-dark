import React,{useState} from 'react';
import '../App.css';
import { AiOutlineMenu,AiOutlineGithub,AiOutlineTwitter} from 'react-icons/ai';
import {Link} from 'react-router-dom';

const userPrefersDark = localStorage.darkMode 
                        ? localStorage.darkMode === "dark" 
                        : window.matchMedia && 
                        window.matchMedia("(prefers-color-scheme:dark)").matches;


function Contact() {
  const [darkMode, setDarkMode] = useState(userPrefersDark);


  const handleToggle = (e) => {
      setDarkMode(e.target.checked);
      localStorage.setItem("darkMode",e.target.checked);
  };

  return (
    <div className={`app ${darkMode ? "dark-theme" : ""}`}>
        <header className='app_header'>
          <div className='app_heading'>
                <div className='app_logo'>
                    {/* <a href='//oyewumi.koladej@gmail.com' target='_blank'  rel='noopener noreferrer'><span><AiOutlineMail size={30}/></span></a> */}
                    <a href='//www.twitter.com/corlard3y' target='_blank' rel='noopener noreferrer'><span><AiOutlineTwitter size={30}/></span></a>
                    <a href='//www.github.com/corlard3y' target='_blank'  rel='noopener noreferrer'><span><AiOutlineGithub size={30}/></span></a>
                </div>
            </div>

            <nav className='app_nav'>
                <ul className='app_nav_listing'>
                  <Link to='/'><li>Home</li></Link>
                  <Link to='/skills'><li>Skills</li></Link>
                  <Link to='/projects'><li>Projects</li></Link>
                  <Link><li>Resume</li></Link>
                </ul>


                <button className='app_menu_btn'>
                   <AiOutlineMenu size={30} />
                </button>

                <label className='switch'>
                    <input type='checkbox'
                      aria-label='toggle dark mode'
                      defaultChecked={darkMode}
                      onChange={handleToggle}
                    />
                    <span className='slider round'></span>
                </label>
            </nav>
        </header>


        <main className='app_body'>

            <div className='app_loading'>
                ...Coming soon
            </div>

        </main>
    </div>
  );
}

export default Contact;
