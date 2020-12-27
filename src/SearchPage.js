import React from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from './SearchResult';

function Searchpage() {
    return (
        <div className='searchPage'>
          <div className="searchPage__info">
            <p>300+ stays</p>
            <h1>Places to stay near you</h1>
            <Button variant="outlined">Cancellation flexibility</Button>
            <Button variant="outlined">Type of place</Button>
            <Button variant="outlined">Price</Button>
            <Button variant="outlined">Instant book</Button>
            <Button variant="outlined">More filters</Button>
          </div>
          <SearchResult 
            img ="https://a0.muscache.com/im/pictures/960cbd39-b1a8-4c1f-902c-bb9e8c71439a.jpg?im_w=960"
            location ="Lonavla, Maharashtra, India"
            title ="A luxury villa with beautiful mount view."
            description = "Entire villa hosted by Highfield Villas"
            star = {4.5}
            price = "₹14,000/ night"
            total ="₹40000 total"
          />
          <SearchResult 
            img ="https://a0.muscache.com/im/pictures/fad5d919-cddb-4b8d-a11c-5e3d47e8f551.jpg?im_w=960"
            location ="Entire house in secunderabad"
            title ="The Happy Place"
            description = "Entire house hosted by Hannah 5 guests · 2 bedrooms · 4 beds · 2 bathrooms"
            star = {4.95}
            price = "₹1257/ night"
            total ="₹10000 total"
          />
          <SearchResult 
            img ="https://a0.muscache.com/im/pictures/07a2de98-e71a-4446-a46a-1ffa65d1988a.jpg?im_w=960"
            location ="Alibag, Maharashtra, India"
            title ="Cozy 1 BHK Apartment in Varsoli Alibag Unit 1"
            description = "4 guests · 1 bedroom · 1 bed · 1 bathroom"
            star = {4.80}
            price = "₹2494/ night"
            total ="₹10000 total"
          />
          <SearchResult 
            img ="https://a0.muscache.com/im/pictures/195ad4aa-4db4-4fbf-a598-6d40f5ded54f.jpg?im_w=960"
            location ="Hyderabad, Telangana, India"
            title ="Furnished 1 BHK Flats @ Wipro Circle, Gachibowli"
            description = "2 guests · 1 bedroom · 1 bed · 1 bathroom"
            star = {4.33}
            price = "₹1756/ night"
            total ="₹8000 total"
          />
          <SearchResult 
            img ="https://a0.muscache.com/im/pictures/5b5f4963-665b-4d07-a4a5-1c0908bbf7dc.jpg?im_w=960"
            location ="Panchgani, Maharashtra, India"
            title ="Tranquil Treasure"
            description = "16 guests · 10 bedrooms · 12 beds · 8 bathrooms"
            star = {4.31}
            price = "₹1375/ night"
            total ="₹5600 total"
          />
          <SearchResult 
            img ="https://a0.muscache.com/im/pictures/b55486bb-63af-4491-9eab-020525ca32d9.jpg?im_w=960"
            location ="Hyderabad, Telangana, India"
            title ="Couple Friendly Rooms at Kondapur"
            description = "Entire house hosted by Hannah 5 guests · 2 bedrooms · 4 beds · 2 bathrooms"
            star = {3.82}
            price = "₹1085/ night"
            total ="₹4000 total"
          />
          <SearchResult 
            img ="https://a0.muscache.com/im/pictures/6c0e09d9-2537-4c2a-9180-4f14e22a1996.jpg?im_w=960"
            location ="Damkhind, Maharashtra, India"
            title ="Aamchi Wadi"
            description = "3 guests · 1 bedroom · 2 beds · 1 bathroom"
            star = {4.96}
            price = "₹1200/ night"
            total ="₹4800 total"
          />
        </div>
    )
}

export default Searchpage
