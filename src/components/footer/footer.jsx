import React from "react";
import "./footer.css"

function Footer() {
    return ( <>
    <footer className="footer">
     <div className="container">
      <div className="row">
        <div className="footer-col">
          <h4>My Number</h4>
          <ul>
            <li><a href="#">+37499497776</a></li>
            <li><a href="#">+37441497776</a></li>
            {/* <li><a href="#">privacy policy</a></li>
            <li><a href="#">affiliate program</a></li> */}
          </ul>
        </div>
        <div className="footer-col">
          <h4>My Instagram</h4>
          <ul>
            <li><a href="#">edbaghdasariann</a></li>
            {/* <li><a href="#">shipping</a></li>
            <li><a href="#">returns</a></li>
            <li><a href="#">order status</a></li>
            <li><a href="#">payment options</a></li> */}
          </ul>
        </div>
        <div className="footer-col">
          <h4>My Address</h4>
          <ul>
            <li><a href="#">Aram Manukyan 8</a></li>
            {/* <li><a href="#">bag</a></li>
            <li><a href="#">shoes</a></li>
            <li><a href="#">dress</a></li> */}
          </ul>
        </div>
        <div className="footer-col">
          <h4>follow Me</h4>
          <div class="social-links">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
     </div>
  </footer>
    </> );
}

export default Footer;