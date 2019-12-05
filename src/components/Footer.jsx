import React from 'react'
import { Jumbotron } from 'react-bootstrap'

import '../stylesheet/Footer.css'

export default props => 
        <div className="footerContent">
            <Jumbotron className='jumbotron-fluid height color text-center'>            
                <p className={props.h1Classes}>{props.text}</p>
                <a href={props.registerLink} className={props.leadClasses}> {props.leadText} </a>            
            </Jumbotron>
        </div>
        