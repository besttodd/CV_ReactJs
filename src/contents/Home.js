import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <h1>Todd <mark>Best</mark></h1>
            <ReactTypingEffect className="typingeffect" text={['Software Developer','Data Analyst','IT Support Specalist']} speed={100} eraseDelay={900} typingDelay={500}/>
            <div className="hr_line"><div className="hr_inner"></div></div>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    