import React,{Fragment} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Skills from './views/Skills';
import Project from './views/Project';
import Contact from './views/Contact';
// import {AiOutlineMail, AiOutlineMenu,AiOutlineGithub,AiOutlineTwitter} from 'react-icons/ai';



function App() {

  return (
    <Router>
    <Fragment>
        <section>
                <Route exact path='/' component={Home} />
            <Switch>
                <Route path='/skills' component={Skills}/>
                <Route path='/projects' component={Project} />
                <Route path='/contact' component={Contact} />
            </Switch>
        </section>
    </Fragment>
    </Router>
  );
}

export default App;
