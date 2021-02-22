import React from 'react'
import './SearchPage.css'
import {Button} from "@material-ui/core"
import SearchResult from "./SearchResult"

function SearchPage() {
    return (
        <>
      <div className="searchPage">
        <div className="searchPage__info">
          <p>62 stays - 26 august to 30 august - 2 guests</p>
          <h1>Stays nearby</h1>
          <Button variant="outlined">Cancellation Flexibility</Button>
          <Button variant="outlined">Type of place</Button>
          <Button variant="outlined">Price</Button>
          <Button variant="outlined">Rooms and beds</Button>
          <Button variant="outlined">More filters</Button>
        </div>
        <SearchResult
         img="https://images.pexels.com/photos/4138152/pexels-photo-4138152.jpeg?auto=compress&cs=tinysrgb&dpr=1"
         location="Private room in the center of london" 
         title="Stay at this spacious Edwardian House"
         description="1 guest - 1
         bedroom - 1 bed -  1.5 shared bathroom - Wifi -Kitchen - Free parking - Washing Machine "
         star={4.7}
         price="$60/ night"
         total="$234"/>

        <SearchResult
         img="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb"
         location="Private room in the center of london" 
         title="Stay at this spacious Edwardian House"
         description="1 guest - 1
         bedroom - 1 bed -  1.5 shared bathroom - Wifi -Kitchen - Free parking - Washing Machine "
         star={4.7}
         price="$60/ night"
         total="$234"/>
         <SearchResult
         img="https://images.pexels.com/photos/4138152/pexels-photo-4138152.jpeg?auto=compress&cs=tinysrgb&dpr=1"
         location="Private room in the center of london" 
         title="Stay at this spacious Edwardian House"
         description="1 guest - 1
         bedroom - 1 bed -  1.5 shared bathroom - Wifi -Kitchen - Free parking - Washing Machine "
         star={4.7}
         price="$60/ night"
         total="$234"/>

        <SearchResult
         img="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb"
         location="Private room in the center of london" 
         title="Stay at this spacious Edwardian House"
         description="1 guest - 1
         bedroom - 1 bed -  1.5 shared bathroom - Wifi -Kitchen - Free parking - Washing Machine "
         star={4.7}
         price="$60/ night"
         total="$234"/>
         <SearchResult
         img="https://images.pexels.com/photos/4138152/pexels-photo-4138152.jpeg?auto=compress&cs=tinysrgb&dpr=1"
         location="Private room in the center of london" 
         title="Stay at this spacious Edwardian House"
         description="1 guest - 1
         bedroom - 1 bed -  1.5 shared bathroom - Wifi -Kitchen - Free parking - Washing Machine "
         star={4.7}
         price="$60/ night"
         total="$234"/>

        <SearchResult
         img="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb"
         location="Private room in the center of london" 
         title="Stay at this spacious Edwardian House"
         description="1 guest - 1
         bedroom - 1 bed -  1.5 shared bathroom - Wifi -Kitchen - Free parking - Washing Machine "
         star={4.7}
         price="$60/ night"
         total="$234"/>
         <SearchResult
         img="https://images.pexels.com/photos/4138152/pexels-photo-4138152.jpeg?auto=compress&cs=tinysrgb&dpr=1"
         location="Private room in the center of london" 
         title="Stay at this spacious Edwardian House"
         description="1 guest - 1
         bedroom - 1 bed -  1.5 shared bathroom - Wifi -Kitchen - Free parking - Washing Machine "
         star={4.7}
         price="$60/ night"
         total="$234"/>

        <SearchResult
         img="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb"
         location="Private room in the center of london" 
         title="Stay at this spacious Edwardian House"
         description="1 guest - 1
         bedroom - 1 bed -  1.5 shared bathroom - Wifi -Kitchen - Free parking - Washing Machine "
         star={4.7}
         price="$60/ night"
         total="$234"/>
      </div>
     
      </>
    );
}

export default SearchPage
