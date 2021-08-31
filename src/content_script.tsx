import { Website, ItemCardType, ItemCardCollectionType } from "./interface";
import { Amazon } from "./websites/amazon";
import { Lowes } from "./websites/lowes";

import { LeafItModal } from "./reactComponents/MainModal";
import { LeafItWidget } from "./reactComponents/Widget";
import './content_script.css'

import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";


let RankedItemsCollection: ItemCardCollectionType;

chrome.runtime.sendMessage( { req: "getCurrentURL" }, (response) => {
  let amazonProductPageRegExp = new RegExp('https:\/\/www.amazon\.com\/[-a-zA-Z0-9@:%._\+~#=]{1,256}\/dp\/([-a-zA-Z0-9()@:%_\+.~#?&//=]*)');
  let lowesProductPageRegExp = new RegExp('https:\/\/www.lowes\.com\/pd\/([-a-zA-Z0-9()@:%_\+.~#?&//=]*)');

  let website: Website | undefined;

  if (amazonProductPageRegExp.exec(response.current_url)) {
    website = new Amazon(response.current_url);
  }
  else if (lowesProductPageRegExp.exec(response.current_url)) {
    website = new Lowes(response.current_url)
  }
  else {
    website = undefined;
  }
  
  if (website != undefined) {
      axios.post("https://leaf-it-node-red-1.mybluemix.net/product-list", {
      data: website.productInfo
    }).then(response => {
      RankedItemsCollection = response.data as unknown as ItemCardCollectionType
      console.log(response);
      // console.log(RankedItemsCollection);

      let insertPoint = document.createElement('div');
      
      insertPoint.id = "foreground";
      document.getElementById("desktop_unifiedPrice")?.prepend(insertPoint);
      
      ReactDOM.render(
        <LeafItWidget />,
        insertPoint
      );

      // setTimeout(() => {
      //   ReactDOM.render(
      //     <LeafItModal collection={RankedItemsCollection} />, 
      //     insertPoint
      //   );
      // }, 1000);

      
    });
  }
  
  

  

  
});