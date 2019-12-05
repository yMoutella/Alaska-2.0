import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import DefaultBanner from './components/DefaultBanner'

function app(){
    return (
        <div>
            <DefaultBanner titleName='Register' leadName='Now you can become one of us, you just have to
            give us some personal data'/>
        </div>
    )
}

export default app;