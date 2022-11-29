import React, { Component } from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div class="footerColumns">
        <ul class="footerList">
          <p class="footListTitle">Legal</p>
          <p>Privacy Policy</p>
          <p>Terms of sale</p>
        </ul>
        <ul class="footerList">
          <p class="footListTitle">Assistance</p>
          <p>Shipping</p>
          <p>Returns</p>
        </ul>
        <ul class="footerList">
          <p class="footListTitle">Company</p>
          <p>Contact us</p>
          <p>Retailers</p>
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
