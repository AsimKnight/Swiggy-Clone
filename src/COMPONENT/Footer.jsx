import React, { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faTwitter,
  faPinterest,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const cardBarRef = useRef(null);
  function moveCardBar(e) {
    console.log("button clicked");

    cardBarRef.current.style.transform = "translateX(-200px)";
  }
  return (
    <>
      <div className=" h-[80vh] bg-[#f0f0f5] justify-around 2 black py-10">
        <div className="w-[75%] container mx-auto flex justify-between gap-5">
          <div className="w-[30%] 2 blue-600">
            <img
              className=" h-12 w-40 "
              src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg"
              alt=""
            />
            <p className="font-bold">© 2025 Swiggy Limited</p>
          </div>
          <div className=" w-[70%] flex justify-around 2 green-600 ">
            <div className="w-[25%]   flex flex-col gap-3">
              <h4 className="font-bold text-lg">Company</h4>
              <p>About us</p>
              <p>Swiggy Corporate</p>
              <p>Careers</p>
              <p>Team</p>
              <p>Swiggy One</p>
              <p>Swiggy Smart</p>
            </div>

            <div className="w-[25%]   flex flex-col justify-between gap-15">
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-lg">Contact us</h4>
                <p>Help & Support</p>
                <p>Partner with us</p>
                <p>Ride with us</p>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-lg">Legal</h4>
                <p>Terms & Conditions</p>
                <p>Cookie Policy</p>
                <p>Privacy Policy</p>
                <p></p>
              </div>
            </div>

            <div className="w-[25%]    flex flex-col gap-3">
              <h4 className="font-bold text-lg ">Available in:</h4>
              <p>Banglore</p>
              <p>Gudgaon</p>
              <p>Hydrabad</p>
              <p>Delhi</p>
              <p>Mumbai</p>
              <p>Pune</p>
              <select
                id="cities"
                className=" border border-black px-2 py-1 mt-5 w-[70%] rounded "
              >
                <option value="none">685 Cities</option>
              </select>
            </div>
            <div className="w-[25%]   flex flex-col ">
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-lg">Life at Swiggy</h4>
                <p>Explore with Swiggy</p>
                <p>Swiggy news</p>
                <p>Snackables</p>
              </div>
              <div className="flex flex-col gap-3 mt-10">
                <h4 className="font-bold text-lg">Social Links</h4>
                <div className="flex w-full   justify-around mb-3">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                  <FontAwesomeIcon icon={faPinterest} size="lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-[90%] container mx-auto my-10" />
        <div className="flex gap-3 w-[70%] container mx-auto justify-evenly items-center">
          <h5 className="font-bold text-2xl">
            For better experience, download the Swiggy app now
          </h5>
          <div>
            <img
              className="h-16 w-49"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-16 w-49"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
