import { CardsInterface } from '@/types';
import CardsComponent from './CardsComponent'
import data from '@/modules/es.json'

export const generatorCards = () => {

  return data.cards.map((card: CardsInterface) => {
    return {
      key: card.card_id,
      content: (
        <CardsComponent card={card}/>
      )
    }
  })
}