import React from 'react'
import {Container, Jumbotron} from 'react-bootstrap'

import '../stylesheet/DefaultBanner.css'

export default props => 
    <div className='headerContent'>
        <Jumbotron className='jumbotron-fluid darkBlue'>
            <Container>
                <h1 className='display-4 text-center'>{props.titleName}</h1>
                <p className='lead text-center'>{props.leadName}</p>
            </Container>
        </Jumbotron>
    </div>
   
