import React from 'react';
import './Card.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Purely Handcrafted</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.png'
              text='Pure cold pressed coconut oil, organically grown hibiscus flower & leaves, thoongamalli herb, organically grown curry leaves & stems, organically grown amla, organically grown henna leaves.'
              label='BestSeller'
            
            />
            <CardItem
              src='images/img-2.png'
              text='Pure saffron (from Himalayan ranges) red tree barks, organic rose petals, organic hibiscus flowers dried aloe vera, organic lotus petals, badham'
              label='BestSeller'
             
              
            />
            <CardItem
              src='images/img-3.png'
              text='Traditional Wood Pressed Pungam Oil, Soda Crystals ( used for thickening the soap ), essential oil for fragrance.'
              label='BestSeller'
              
            />
          </ul>
          <ul className='cards__items' >
            
            <CardItem
              src='images/img-4.png'
              text='Xanthan Gum, Fresh Aloe Vera extract, Organic Amla extract, Organically grown hibiscus flowers and leaves, Soap nuts, Essential Oil, Food Grade powder colours, Geoguard preservative, indigo, henna leaves.'
              label='BestSeller'
              
            />
            <CardItem
              src='images/img-5.png'
              text='Xanthan Gum, Fresh Aloe Vera extract, Organic Amla extract, Organically grown hibiscus flowers and leaves, Soap nuts, Essential Oil, Food Grade powder colours, Geoguard preservative, organic handpicked avarampoo, dried avaram leaves, fenugreek, vettiver & amla'
              label='BestSeller'
              
            />
            <CardItem
              src='images/img-6.png'
              text='Organically cultivated Kasthuri Manjal, pure orange peel, pure lemon peel, and hand-picked tulsi leaves.'
              label='BestSeller'
              
            />
            
            
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/img-7.png'
              text='Pure Goat’s milk base (manufactured using farm fresh goat’s milk), essential oils, Demineralised Water.'
              label='BestSeller'
              
            />
            <CardItem
              src='images/img-8.png'
              text='Carefully Selected unprocessed (natural) papaya pulp, Traditional Wood Pressed Coconut Oil , Castor Oil, Soda Crystals ( used for thickening the soap ), essential oil for fragrance.'
              label='BestSeller'
            
            />
            <CardItem
              src='images/img-9.png'
              text='Fresh aloe vera pulp, organic cucumber with seeds, vitamin e oil.'
              label='BestSeller'
              
            />
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;