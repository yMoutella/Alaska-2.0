import React from 'react'
import Bt from './Button'
import {Card} from 'react-bootstrap'

import '../stylesheet/Cards.css'

export default props =>
            
    <Card className= {props.cardClasses}>        
            <Card.Body>
                
                <Card.Title>{props.title}</Card.Title>            
                <h6 className={props.h6Classes}>{props.subtitle}</h6>
                <Card.Text>{props.mainText}</Card.Text>                    

                <Bt buttonId={props.buttonId} buttonClasses={props.buttonClasses} buttonText={props.buttonText} />

            </Card.Body>                
    </Card>  