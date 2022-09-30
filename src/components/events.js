import React, { Component } from "react";
import "../styles/events.css";

const Events = () => {
  return (
    <div class="events">
      <h1 class="eventsTitle">Events</h1>
      <div class="eventList">
        <div class="eventTile">
          <h3 class="eventName">The Green Place magasin</h3>
          <img
            class="eventImage"
            alt="event one"
            src="https://image.isu.pub/220822183847-b4266535bf54430611260eadfffe50c8/jpg/page_1_thumb_large.jpg"
          ></img>
          <p class="eventDescription">Låt dig inspireras av våra magasin</p>
        </div>
        <div class="eventTile">
          <h3 class="eventName">The Green Place magasin</h3>
          <p class="eventDescription">Låt dig inspireras av våra magasin</p>
        </div>
        <div class="eventTile">
          <h3 class="eventName">The Green Place magasin</h3>
          <p class="eventDescription">Låt dig inspireras av våra magasin</p>
        </div>
      </div>
    </div>
  );
};

export default Events;
