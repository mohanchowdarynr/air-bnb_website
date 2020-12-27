import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
    return (
        <div className='home'>
           <Banner />

           <div className="home__section">
               <Card 
                   src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=320"
                   title="Entire homes"
                   description="Home is where the heart stays"
                   price="1200/night"
               />
               <Card 
                   src="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=320"
                   title="Cabins and cottages"
                   description="Good availability and great rates"
                   price="1500/night"
               />
               <Card
                   src="https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=320"
                   title="Unique stays"
                   description="Discover and book"
                   price="5000/night"
               />
           </div>
           <div className="home__section">
               <Card 
                   src="https://a0.muscache.com/im/pictures/426a8116-0b94-4407-ae87-924126c81d78.jpg?im_w=320"
                   title="Entire house"
                   description="spacious 1bhk "
                   price="2500/night"
               />
               <Card 
                   src="https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg?im_w=320"
                   title="Villa"
                   description="Discover and book"
                   price="3000/night"
               />
               <Card
                   src="https://a0.muscache.com/im/pictures/a84e92bd-68e6-4ce2-9fdf-b2ce1a377f53.jpg?im_w=320"
                   title="Unique building"
                   description="Discover and book"
                   price="3500/night" />
           </div>
        </div>
    )
}

export default Home
