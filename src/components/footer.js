import React, { Component } from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div class="footerColumns">
        <ul class="footerList">
          <p class="footListTitle">Regler</p>
          <p>Integritetspolicy</p>
          <p>Försäljningsvillkor</p>
        </ul>
        <ul class="footerList">
          <p class="footListTitle">Assistans</p>
          <p>Frakt</p>
          <p>Retur</p>
        </ul>
        <ul class="footerList">
          <p class="footListTitle">Företag</p>
          <p>Kontakta oss</p>
          <p>Partners</p>
        </ul>
        <ul class="footerList">
          <p class="footListTitle">Social Media</p>
          <p>Instagram</p>
          <p>Facebook</p>
        </ul>
      </div>
      <p class="copyright">The Green Place 2022</p>
    </footer>
  );
};

export default Footer;
