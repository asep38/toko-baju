import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="top">
          <div className="item">
            <h1>Categories</h1>
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
          </div>

          <div className="item">
            <h1>Link</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>

          <div className="item">
            <h1>About</h1>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
              quis. Molestiae dicta animi dignissimos nostrum quibusdam. Quae
              vero a reiciendis quod fuga mollitia animi dolorem?
            </span>
          </div>

          <div className="item">
            <h1>Contact</h1>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
              quis. Molestiae dicta animi dignissimos nostrum quibusdam. Quae
              vero a reiciendis quod fuga mollitia animi dolorem?
            </span>
          </div>
        </div>

        <div className="bottom">
          <div className="left">
            <span className="logo">AsepStore</span>
            <span className="copyright">
              &copy; Copyright 2023. All Rights Reserved
            </span>
          </div>

          <div className="right"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
