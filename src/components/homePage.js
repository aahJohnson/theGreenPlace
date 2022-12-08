import React, { Component } from "react";
import "../styles/homePage.css";
import instagramIcon from "../media/instagramIcon.png";
import facebookIcon from "../media/facebookIcon.png";
import youtubeIcon from "../media/youtubeIcon.png";

const HomePage = () => {
  return (
    <main>
      <div class="products">
        <div class="productsHead">
          <h2>Nyheter</h2>
          <button>Se mer</button>
        </div>
        <div class="productGrid">
          <img
            class="productImage"
            alt="ProductImage"
            src="https://images.unsplash.com/photo-1597976618063-810eb50c84fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
          <img
            class="productImage"
            alt="ProductImage"
            src="https://images.unsplash.com/photo-1537758948578-4494132f4c19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
          />
          <img
            class="productImage"
            alt="ProductImage"
            src="https://images.unsplash.com/photo-1500259783852-0ca9ce8a64dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          />
        </div>
      </div>
      <div class="about">
        <div class="aboutText">
          <h3>Our goal</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum.
          </p>
          <a href=" ">Learn more</a>
        </div>
        <img
          src="https://images.unsplash.com/photo-1607004468138-e7e23ea26947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YWJvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="About"
          class="aboutImg"
        />
        <img
          src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="About"
          class="aboutImg"
        />
        <div class="aboutText">
          <h3>Enviroment</h3>
          <p>
            Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
            sapiente officiis modi at sunt excepturi expedita sint? Sed
            quibusdam recusandae alias error harum maxime adipisci amet laborum.
            Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates
            a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius
            fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero
            magni deleniti quod quam consequuntur! Commodi minima excepturi
            repudiandae velit hic maxime doloremque.
          </p>
          <a href=" ">Learn more</a>
        </div>
      </div>
      <div class="events">
        <div class="eventGrid">
          {/* Event tile */}
          <div class="eventTile">
            <img
              class="eventImage"
              alt="event"
              src="https://images.unsplash.com/photo-1514679725149-ecaa6013d817?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            <div class="eventImageOverlay">
              <h3 class="eventName">The Green Place magazine</h3>
            </div>
          </div>
          {/* Event tile */}
          <div class="eventTile">
            <img
              class="eventImage"
              alt="event"
              src="https://images.unsplash.com/photo-1574079771556-f09a65db11e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=677&q=80"
            />
            <div class="eventImageOverlay">
              <h3 class="eventName">Up to 30% off</h3>
            </div>
          </div>
          {/* Event tile */}
          <div class="eventTile">
            <img
              class="eventImage"
              alt="event"
              src="https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
            />
            <div class="eventImageOverlay">
              <div class="socialMediaLink">
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  class="socialMediaIcon"
                />
              </div>
              <div class="socialMediaLink">
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  class="socialMediaIcon"
                />
              </div>
              <div class="socialMediaLink">
                <img src={youtubeIcon} alt="Youtube" class="socialMediaIcon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="products">
        <div class="productGrid">
          <a href=" " class="productGridTiles">
            <span class="productTitle">Populärt</span>
            <img
              class="productImage"
              alt="ProductImage"
              src="https://images.unsplash.com/photo-1543311236-a7c3638299ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=626&q=80"
            />
          </a>
          <a href=" " class="productGridTiles">
            <span class="productTitle">Jeans</span>
            <img
              class="productImage"
              alt="ProductImage"
              src="https://images.unsplash.com/photo-1603217040830-34473db521a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"
            />
          </a>
          <a href=" " class="productGridTiles">
            <span class="productTitle">Jackor</span>
            <img
              class="productImage"
              alt="ProductImage"
              src="https://images.unsplash.com/photo-1614251056762-19fca947d703?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
          </a>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
