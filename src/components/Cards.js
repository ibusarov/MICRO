import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out our EPIC Services!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/fs.jpg"
              text="Explore our professional fire alarm and voice systems"
              label="Fire Systems"
              path="/services"
            />
            <CardItem
              src="images/electricinstallation.jpg"
              text="Explore our professional electric systems"
              label="Electric Power"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/securities.jpg"
              text="Security for you and your premises"
              label="Security"
              path="/services"
            />
            <CardItem
              src="images/voice.jpg"
              text="Voice alarm systems"
              label="Voice system"
              path="/products"
            />
            <CardItem
              src="images/controlhome.jpg"
              text="Manage your home from everywhere"
              label="Safe Home"
              path="/contact-us"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
