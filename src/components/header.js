import React, { Component } from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <div>
      <div className="header">
        <h1 class="headerTitle">The Green Place</h1>
        <ul class="headList">
          <li class="headListItem">
            <p class="headListTitle">Handla</p>
            <div class="headListDropdown">
              <ul class="dropdownList">
                <li class="listMain">Dam</li>
                <li>Nyheter</li>
                <li>Jackor</li>
                <li>Överdelar</li>
                <li>Byxor</li>
                <li>Klänningar</li>
                <li>Kjolar</li>
                <li>Väskor & Plånböcker</li>
                <li>Skor</li>
                <li>Accessoarer</li>
              </ul>
              <ul class="dropdownList">
                <li class="listMain">Herr</li>
                <li>Nyheter</li>
                <li>Jackor</li>
                <li>Överdelar</li>
                <li>Byxor</li>
                <li>Väskor & Plånböcker</li>
                <li>Skor</li>
                <li>Accessoarer</li>
              </ul>
              <ul class="dropdownList">
                <li class="listMain">Barn</li>
                <li>Babystorlekar</li>
                <li>Barnstorlekar</li>
                <li>Ungdomstorlekar</li>
                <li>Leksaker</li>
                <li>Gravid & Amning</li>
              </ul>
              <ul class="dropdownList">
                <li class="listMain">Hem</li>
                <li>Kök & Matlagning</li>
                <li>Dukning & Servering</li>
                <li>Sovrum</li>
                <li>Vardagsrum</li>
                <li>Toalett</li>
                <li>Uteplats</li>
                <li>Uteliv</li>
              </ul>
              <ul class="dropdownList">
                <li class="listMain">Skönhet</li>
                <li>Makeup</li>
                <li>Doft</li>
                <li>Hudvård</li>
                <li>Hår</li>
                <li>Sex & Lust</li>
              </ul>
            </div>
          </li>

          <li class="headListItem">
            <p class="headListTitle">Varumärken</p>
            <div class="headListDropdown">
              <ul class="dropdownList">
                <li>Gucci</li>
              </ul>
              <ul class="dropdownList">
                <li>Louis Vuitton</li>
              </ul>
              <ul class="dropdownList">
                <li>Jacquemus</li>
              </ul>
              <ul class="dropdownList">
                <li>Rituals</li>
              </ul>
              <ul class="dropdownList">
                <li>H&M</li>
              </ul>
            </div>
          </li>
          <div class="headListDropdown"></div>

          <li class="headListItem">
            <p class="headListTitle">Lokalt</p>
          </li>

          <li class="headListItem">
            <p class="headListTitle">The Green Place</p>
            <div class="headListDropdown">
              <ul class="dropdownList">
                <li class="listMain"></li>
              </ul>
              <ul class="dropdownList">
                <li class="listMain">Om oss</li>
              </ul>
              <ul class="dropdownList">
                <li class="listMain">Kontakt</li>
              </ul>
              <ul class="dropdownList">
                <li class="listMain">Certifiering</li>
              </ul>
              <ul class="dropdownList">
                <li></li>
              </ul>
            </div>
          </li>

          <li class="headListItem">
            <p class="headListTitle">Blogg</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
