import React, { Component } from 'react';
import project_1 from '../img/project_1.png';
import project_2 from '../img/project_2.png';
import project_3 from '../img/project_3.png';
import project_4 from '../img/project_4.png';
import project_2_file from '../files/GreenBot.pdf';

class Portfolio extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Work</h1>
            <div className="hr_line line2"><div className="inner2 inner3"></div></div>
            <div class="port_out port1"><div class="port_in"><a href="https://public.tableau.com/views/VolcanicActivity2020v3_0/Dashboard1?:language=en-GB&:display_count=y&:origin=viz_share_link" target="_blank" rel="noopener noreferrer"><img src={project_1} className="po1" alt="Tableau Project"></img></a></div></div>
            <div class="port_out port2"><div class="port_in"><a href={project_2_file} target="_blank" rel="noopener noreferrer"><img src={project_2} className="po1" alt="GreenBot"></img></a></div></div>
            <div class="port_out port3"><div class="port_in"><a href="https://github.com/besttodd/EducationalGame" target="_blank" rel="noopener noreferrer"><img src={project_3} className="po1" alt="Educational Android App"></img></a></div></div>
            <div class="port_out port4"><div class="port_in"><a href="https://github.com/besttodd/CP3405" target="_blank" rel="noopener noreferrer"><img src={project_4} className="po1" alt="Accessibility App"></img></a></div></div>
            </div>
            )
        }
    }
    
export default Portfolio
    