import React from 'react'
import "./Home.css"
import Product from"./Product"

function Home() {
  return (
  <div className="home">
      <div className="home__container">
      <img 
      className="home__image" 
      src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt=""
        />
        <div className="home__row">
            <Product 
            id='1234567890'
            tittle='The lean startup:The Lean Startup method allows organizations to launch new digital products or services in environments with high uncertainty. High uncertainty can be created when potential customers.' 
            price={20.1} 
            image='https://i.pinimg.com/564x/fd/ca/f0/fdcaf0210f692cfca18d13e7ccb52550.jpg'
            rating={5} 
            />
            <Product 
            id='1234567800'
            tittle='PlayStation 4: Discover the games, features and entertainment services waiting for you on PlayStation 4, including PlayStation exclusive games, online play and parental ...' 
            price={299.5} 
            image='https://i5.walmartimages.com/asr/7a9eab85-fa88-4988-b773-44c3f70f8168_1.a2a1b6ae17082644c7c865c610dc3afb.jpeg'
            rating={4} />
 
        </div>
        <div className='home__row'>
        <Product 
            id='1234567000'
            tittle='PlayStation 5:The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4,' 
            price={899.9} 
            image='https://www.nme.com/wp-content/uploads/2020/06/ps5-credit-sie@2000x1270.jpg'
            rating={5} />
        <Product 
            id='1234560000'
            tittle='Nokia G10:CPU, Octa-core (4x2.0 GHz Cortex-A53 & 4x1.5 GHz Cortex-A53) ; GPU, PowerVR GE8320 ; Memory, Card slot ; Internal, 32GB 3GB RAM, 32GB 4GB RAM, 64GB 4GB ' 
            price={199.5} 
            image='https://www.androidauthority.com/wp-content/uploads/2021/04/nokia-g10-2021-phones.jpg'
            rating={3} />
        <Product 
            id='1234500000'
            tittle='Dennim Jacket:Great quality woolen denim jackets., Size m_3xl | 3780' 
            price={39.5} 
            image='https://m.media-amazon.com/images/I/711FyVGaiZL._AC_UL1001_.jpg'
            rating={5} />
        </div>
        <div className='home__row'>
        <Product 
            id='1234000000'
            tittle='Fat-bike: Best fat bikes, ride anywhere and everywhere you like' 
            price={450} 
            image='https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/11/2018/04/1063000_2018_A_2_Farley_5.jpg'
            rating={5}/>
        </div>
      </div>
  </div>
  );
  
}

export default Home
