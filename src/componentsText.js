class Texts {

    static headerText () { 
        return {
            homePage: {
                mainText: `This plan was made to survive an apocalypse scenario where
                the global warming is the cause to the melt away the glaciers,
                the level of the oceans rises, all populations fall into dispair, except us.
                We have a plan and we gonna survive this.` 
            },

            registerPage: {

            }
            
        }
    }

    static cardsText(office) {

        if(office === 'Scout') {
            return {
                local: 'cards',
                title: `Become a Scout`,
                subtitle: `We need the best scouters`,
                mainText: `The group need survive and you too,
                become a scout and get some food for us`
            }
        }        
    else if (office === 'Scientist'){
            return {
                local: 'cards',
                title: `Become a Scientist`,
                subtitle: `We need the best mind ever seen`,
                mainText: `This place is reserved to the bright minds,
                responsible for innovations`
            }
        }
    

        else if (office === 'Adm') {
            return {
                local: 'cards',
                title: `Become a Adm`,
                subtitle: `Above all, we need be organized`,
                mainText: `One of the most important functions on the group,
                give missions to the scouters, and support scientists`
            }
        }

        else {
            return 'Office not found'
        }
    }


}

export default Texts