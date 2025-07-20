import { Link } from "react-router";
import { darkLogo } from "../assets";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-10 font-dmSans">
      <div className="container flex gap-10 justify-between flex-wrap max-sm:flex-col">
        <div className="flex gap-20 justify-between items-start max-md:w-full max-sm:flex-col max-sm:gap-6 max-sm:items-center">
          <img src={darkLogo} alt="logo" className="w-30 object-contain" />
          <div>
            <h5 className="text-sm font-bold uppercase max-sm:text-center text-gray/90 mb-6 max-sm:mb-3">
              Follow Us
            </h5>
            <div className="flex items-center gap-6 text-gray/70">
              <Link to="/">
                <FaFacebook />
              </Link>
              <Link to="/">
                <FaInstagram />
              </Link>
              <Link to="/">
                <FaLinkedinIn />
              </Link>
              <Link to="/">
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 max-md:items-center">
          <h5 className="text-sm font-bold uppercase text-gray/90 mb-4">
            Company
          </h5>
          <Link to="/" className="text-gray/70 uppercase">
            About
          </Link>
          <Link to="/" className="text-gray/70 uppercase">
            career
          </Link>
          <Link to="/" className="text-gray/70 uppercase">
            Blog
          </Link>
        </div>
        <div className="flex flex-col gap-2 max-md:items-center">
          <h5 className="text-sm font-bold uppercase text-gray/90 mb-4">
            Customer care
          </h5>
          <Link to="/" className="text-gray/70 uppercase">
            About
          </Link>
          <Link to="/" className="text-gray/70 uppercase">
            career
          </Link>
          <Link to="/" className="text-gray/70 uppercase">
            Blog
          </Link>
        </div>
        <div className="flex flex-col gap-2 max-md:items-center">
          <h5 className="text-sm font-bold uppercase text-gray/90 mb-4">
            Legal
          </h5>
          <Link to="/" className="text-gray/70 uppercase">
            About
          </Link>
          <Link to="/" className="text-gray/70 uppercase">
            career
          </Link>
          <Link to="/" className="text-gray/70 uppercase">
            Blog
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
