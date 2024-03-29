import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./help.css";

const NeedHelp = () => {
  return (
    <div className='help-container'>
      <section className='first-section'>
        <h2 className='center'>let serve you better</h2>

        <div className='help-you-wrapper'>
          <h3>how can we be of help?</h3>
          <textarea></textarea>
        </div>
        <div className='help-you-wrapper-2'>
          <div className='reset'>
            <h4>How to reset account informations</h4>
            <Link className='help-link reg-link' to='signin'>
              Reset
            </Link>
          </div>
          <div className='only-watch'>
            <h4>Where to find wristwatches</h4>
            <Link className='help-link' to='popullar/Wrist watch'>
              Find wristwatches{" "}
              <span>
                <FaArrowRight />
              </span>
            </Link>
          </div>
          <div className='only-discount'>
            <h4>I need products with discount</h4>
            <Link className='help-link' to='/discount'>
              Discounted products
              <span>
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className='second-section'>
        <h3>need more help ?</h3>
        <div className='ctn-us-wrapper'>
          <Link id='cnt-us' to='/contact'>
            contact us
          </Link>
        </div>
        <h3>other options for you</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          excepturi illum, minima reprehenderit alias odit?
        </p>
      </section>
    </div>
  );
};

export default NeedHelp;
