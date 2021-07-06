import React,{useState} from 'react';
import '../App.css';
import avatar from '../images/image.png';
import { AiOutlineMenu,AiOutlineGithub,AiOutlineTwitter} from 'react-icons/ai';
import {Link} from 'react-router-dom';

const userPrefersDark = localStorage.darkMode 
                        ? localStorage.darkMode === "dark" 
                        : window.matchMedia && 
                        window.matchMedia("(prefers-color-scheme:dark)").matches;


function Home() {
  const [darkMode, setDarkMode] = useState(userPrefersDark);


  const handleToggle = (e:any) => {
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
                  <Link to='/skills'><li>Skills</li></Link>
                  <Link to='/projects'><li>Projects</li></Link>
                  <a href='#!'><li>Resume</li></a>
                  <Link to='/contact'><li>Contact</li></Link>
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
            <div className='avatar'>
                  <img src={avatar} alt='' className='avatar_img'/>
            </div>

            <h2 className='text_body text_body_greeting' > Hi,I'm Kolade✌🏾</h2>

            <h3 className='text_body text_body_heading'  >
              <span className='first-word'>Full-Stack</span> Software Developer/Engineer.
            </h3>

            <p className='text_body text_body_details' >
            I am a <span className="text_body_bold">Software Engineer </span>with hands on experience developing websites, full-stack web applications and APIs.

            </p>

            <button className='btn'>Connect with me</button>
        </main>
    </div>
  );
}

export default Home;
