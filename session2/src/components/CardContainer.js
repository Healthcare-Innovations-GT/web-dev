import React from 'react'
import Card from './MyCard'

class CardContainer extends React.Component {
    constructor(props) {
        super(props)
        this.cardData = [
            {
                heading: 'Pandas',
                description: 'Pandas are cute! We love Pandas... <3',
                imageURL: 'https://filmdaily.co/wp-content/uploads/2020/08/cutepanda-lede-1300x869.jpg'
            },
            {
                heading: 'Cats',
                description: 'Cats are the best',
                imageURL: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
            }
        ]
    }

    getCards = () => {
        const cardData = this.cardData;
        let cards = []

        for (let i = 0; i < cardData.length; i++) {
            // create object of card
            const currentCard = (
                <Card 
                    heading={cardData[i].heading}
                    description={cardData[i].description}
                    imageURL={cardData[i].imageURL}
                />);

            // add the current card to the array of cards which will be displayed
            cards.push(currentCard)
        }


        return cards;
    }

    render() {
        return (
            <div>
                { this.getCards() }
            </div>
        )
    }
}

export default CardContainer;