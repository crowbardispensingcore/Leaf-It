import React, { useState, useEffect, FC } from "react";
import { Button } from '@material-ui/core';

import { ItemCardType } from "../interface";

export const ItemCard  = ({
    source,
    img_url,
    product_link,
    price,
    name,
    kwh_per_year,
    certified,
    cost_per_year
  }: ItemCardType) => {
    
  return(
    <div className="itemCard">
      <div className="itemCardHeader">
        <div className="itemImgContainer">
          <img src={ img_url } alt="" />
        </div>
        <div className="itemNameContainer">
          <span>{ name }</span>
          <div className="vendorLogoContainer">
            <img src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="" />
          </div>
        </div>         
      </div>
      <div className="scatterGraphContainer">
      </div>
      <div className="statsContainer">
        <div className="statCard" id="kWh">
          Energy Use:&nbsp;{kwh_per_year}kWh/yr
        </div>
        <div className="statCard" id="certified">
          Energy Star Certified: Yes
        </div>
        <div className="statCard" id="cost">
          Cost to Run:&nbsp;${cost_per_year}/yr
        </div>
      </div>
      <div className="detailBtn">
        <Button variant="outlined" color="secondary">
          More Details
        </Button>
      </div>
    </div>
  );
}