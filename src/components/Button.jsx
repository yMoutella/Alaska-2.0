import React from 'react'
import {Button} from 'react-bootstrap'



export default props => {

    const requestPage = e => {
        let idName = e.target.id
        console.log(idName)
    }

    return (
        <div className='text-center'>
            <Button onClick={e => {
                requestPage(e)
            }} id={props.buttonId} className={props.buttonClasses}> {props.buttonText} </Button>        
        </div>
    )
}
    