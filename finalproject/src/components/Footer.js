import FooterImg from "../images/logos/littleLemonfooterLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="pd lemon-primary-dark white row">
        <div className="row">
          <div className="col-full col-half col-3rd mb-5 foot-center">
            <img className="footer-logo" src={FooterImg} alt="Little lemon footer pic" />
          </div>
          <div className="col-full col-half col-3rd mb-5 foot-center">
            <h4>SITEMAP</h4>
            <Link className="block" to="/">
              Home
            </Link>
            <Link className="block" to="/about">
              About
            </Link>
            <Link className="block" to="/menu">
              Menu
            </Link>
            <Link className="block" to="/reserve">
              Reserve
            </Link>
            <Link className="block" to="/login">
              Login
            </Link>
            <Link className="block" to="/giftcards">
              Giftcards
            </Link>
          </div>
          <div className="col-full col-half col-3rd mb-5 foot-center">
            <h4>CONTACT US</h4>
            <address>
            523 Silk Road Street
              <br />
              Almaty, Kazakhstan
            </address>
            <a className="footer-block" href="tel:+11234567890">
              523&#41;&nbsp;996&#45;8127
            </a>
            <br />
            <a className="footer-block" href="mailto: CSR@littlelemon.com">
              CSR@littlelemon.com
            </a>
          </div>
        </div>
        <div className="col-full foot-center">
          <p>&copy; 2023 Coursera Meta Front-End Developer.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
