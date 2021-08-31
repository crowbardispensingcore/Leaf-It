import React, { useState, useEffect, FC } from "react";
import { ItemCardCollectionType } from "../interface";
import { ItemCard } from "./ItemCard";
import { Button } from '@material-ui/core';


export const LeafItModal = ( {collection}: any ) => {
  const [option, setOption] = useState(1);
  

  const OptionsCollection = collection as ItemCardCollectionType;
  // console.log(OptionsCollection.product_collection.product_list_1);
  // console.log(OptionsCollection);
  

  const cards = [];
  for (let i = 0; i < 5; i++) {
    // console.log(RankedItemsCollection.product_list_1[i]);
    cards.push(<ItemCard {...collection.product_collection.product_list_1[i]} />);
  }

  const [cardsState, refreshCards] = useState(cards);


  useEffect( () => {
    console.log(option);
    const newCards = [];
    if (option === 1) {
      for (let i = 0; i < 5; i++) {
        newCards.push(<ItemCard {...collection.product_collection.product_list_1[i]} />);
      }
    }
    else if (option === 2) {
      for (let i = 0; i < 5; i++) {
        newCards.push(<ItemCard {...collection.product_collection.product_list_2[i]} />);
      }
    }
    else if (option === 3) {
      for (let i = 0; i < 5; i++) {
        newCards.push(<ItemCard {...collection.product_collection.product_list_3[i]} />);
      }
    }
    refreshCards(newCards);
  }, [option] )


  const handleChangeOption = (e: any) => {
    e.preventDefault();
    console.log(e.target.value);
    if (e.target.value === 1) {
      for (let i = 0; i < 5; i++) {
        const newCards = [];
        newCards.push(<ItemCard {...collection.product_collection.product_list_1[i]} />);
        console.log("optin1: ", newCards);
        refreshCards(newCards);
      }
    }
    else if (e.target.value === 2) {
      for (let i = 0; i < 5; i++) {
        const newCards = [];
        newCards.push(<ItemCard {...collection.product_collection.product_list_2[i]} />);
        console.log("optin2: ", newCards);
        refreshCards(newCards);
      }
    }
    else if (e.target.value === 3) {
      for (let i = 0; i < 5; i++) {
        const newCards = [];
        newCards.push(<ItemCard {...collection.product_collection.product_list_3[i]} />);
        console.log("optin3: ", newCards);
        refreshCards(newCards);
      }
    }
  }

  

  return(
    <div className="mainContainer">
      <div className="optionsContainer">
        <div className="sortOptions">
          <select onChange={ (e) => setOption(parseInt(e.target.value)) }>
            <option value={1}>Sort By: Recommended &#8595;</option>
            <option value={2}>Sort By: Leaf It Rating &#8595;</option>
            <option value={3}>Sort By: Price &#8593;</option>
          </select>
        </div>
      </div>
      <div className="itemsContainer">
        { cardsState }
      </div>
      <div className="footerContainer">
        <Button variant="outlined" className="footerBtn" color="primary" style={{ fontSize: '10px' }}>
          Visit Leaf-It.com For Deatiled Info & Energy Saving Tips
        </Button>
      </div>
    </div>
  );
}