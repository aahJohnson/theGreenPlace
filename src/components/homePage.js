import React, { Component } from "react";
import "../styles/homePage.css";

const HomePage = () => {
  return (
    <main>
      <div class="products">
        <div class="productLinks">
          <div class="productDiv">
            <h3>Nyhet</h3>
            <img
              class="productImage"
              alt="ProductImage"
              src="https://us.balmain.com/dw/image/v2/BHGX_PRD/on/demandware.static/-/Sites-balmain-mastercatalog/default/dw5628ee63/images/hi-res/YF1R6005KB074AMF.png?sw=375&sh=530"
            ></img>
            <div class="productInformation">
              <p>Rosa kortklänning</p>
              <button>Se mer</button>
            </div>
          </div>
          <div class="productDiv">
            <h3>Nyhet</h3>
            <img
              class="productImage"
              alt="ProductImage"
              src="https://cdn.shopify.com/s/files/1/0563/8989/4284/products/D155WFW22GREEN_600x_crop_center.png?v=1653399590"
            ></img>
            <div class="productInformation">
              <p>Grön långklänning</p>
              <button>Se mer</button>
            </div>
          </div>
          <div class="productDiv">
            <h3>Nyhet</h3>
            <img
              class="productImage"
              alt="ProductImage"
              src="https://cdn.shopify.com/s/files/1/0412/1912/9497/products/dress2_Custom_View_1_9c184a1c-5c7b-4ae4-bf95-92a511086418_500x.png?v=1650880649"
            ></img>
            <div class="productInformation">
              <p>Svart klänning</p>
              <button>Se mer</button>
            </div>
          </div>
        </div>
      </div>
      <div class="about">
        <h1 class="aboutTitle">About Us</h1>
        <div class="aboutText">
          <p class="aboutTextLeft">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia.
          </p>
          <div class="aboutCenter"></div>
          <p class="aboutTextRight">
            Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
            sapiente officiis modi at sunt excepturi expedita sint? Sed
            quibusdam recusandae alias error harum maxime adipisci amet laborum.
            Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates
            a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius
            fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero
            magni deleniti quod quam consequuntur! Commodi minima excepturi
            repudiandae velit hic maxime doloremque.
          </p>
        </div>
      </div>
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
      <div class="products">
        <div class="productLinks">
          <div class="productDiv">
            <h3>Populär</h3>
            <img
              class="productImage"
              alt="ProductImage"
              src="https://images.veromoda.com/10265446/3935091/001/veromoda-normalpassformo-ringningkortklaanning-grey.png?v=a5da0402e8df2a0eb0ce7a4e3bf6a81a&width=1024&quality=90"
            ></img>
            <div class="productInformation">
              <p>Grön kortklänning</p>
              <button>Se mer</button>
            </div>
          </div>
          <div class="productDiv">
            <h3>Populär</h3>
            <img
              class="productImage"
              alt="ProductImage"
              src="https://quickbutik.imgix.net/28209I/products/6242ce1921faa.png"
            ></img>
            <div class="productInformation">
              <p>Svart kortklänning</p>
              <button>Se mer</button>
            </div>
          </div>
          <div class="productDiv">
            <h3>Populär</h3>
            <img
              class="productImage"
              alt="ProductImage"
              src="https://quickbutik.imgix.net/28209I/products/6242cfc558623.png"
            ></img>
            <div class="productInformation">
              <p>Röd kortklänning</p>
              <button>Se mer</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 class="socialsTitle">Socials</h1>
      </div>
    </main>
  );
};

export default HomePage;
