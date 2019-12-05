import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './HomePage.css'

import {CardDeck} from 'react-bootstrap'

import Texts from './componentsText'
import DefaultBanner from './components/DefaultBanner'
import Cards from './components/Cards'
import Footer from './components/Footer'
   
function App () {
    return (
        <div>
            <DefaultBanner titleName='PROJECT' leadName= {Texts.headerText().homePage.mainText}/>
            
            <CardDeck>
                <Cards
                    cardClasses='noRadius align-itens' h6Classes= 'card-subtitle mb-2 text-muted'        

                    title={Texts.cardsText('Scout').title} 
                    subtitle={Texts.cardsText('Scout').subtitle} 
                    mainText={Texts.cardsText('Scout').mainText} 
                    
                    buttonText='Read more'
                    buttonClasses='darkBlue'
                    buttonId='scout'
                />            
                <Cards 
                    cardClasses='noRadius align-itens'

                    h6Classes= 'card-subtitle mb-2 text-muted'

                    title={Texts.cardsText('Scientist').title} 
                    subtitle={Texts.cardsText('Scientist').subtitle} 
                    mainText={Texts.cardsText('Scientist').mainText} 
                    
                    buttonText='Read more'
                    buttonClasses='darkBlue '
                    buttonId='scientist'
                />

                <Cards 
                    cardClasses='noRadius align-itens'
                    
                    h6Classes= 'card-subtitle mb-2 text-muted'

                    title={Texts.cardsText('Adm').title} 
                    subtitle={Texts.cardsText('Adm').subtitle} 
                    mainText={Texts.cardsText('Adm').mainText} 
                    
                    buttonText='Read more'
                    buttonClasses='darkBlue '
                    buttonId='adm'
                />  
            </CardDeck>

            <Footer h1Classes='display-4 text-pattern' text=' Do you want survive ? Join us'
            leadText='REGISTER' leadClasses='lead text-info'
            registerLink=''
            />

        </div>

    )
}

export default App