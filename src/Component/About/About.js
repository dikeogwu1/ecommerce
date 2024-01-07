import React from "react";
// import about css
import "./about.css";
import { FaHandsHelping } from "react-icons/fa";

const About = () => {
  return (
    <div className='about-container'>
      <section className='about-intro'>
        <div className='about-img-wrapper'>
          <img
            src='https://res.cloudinary.com/dikeogwu1/image/upload/v1636237828/my%20images/4118.jpg_h99kvq.jpg'
            alt='fab store'
          />
        </div>
        <div className='about-desc'>
          <h3>about us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            tenetur beatae animi soluta laudantium consequatur modi dolorum vero
            optio illum nesciunt perspiciatis maxime adipisci rem, a aliquam
            laborum nobis nulla voluptates quam alias eligendi numquam repellat!
            Eos quae molestias laboriosam, explicabo rerum impedit sed ratione
            doloribus vel expedita doloremque saepe recusandae! Obcaecati.
          </p>
        </div>
      </section>

      <section className='about-history'>
        <h3>our history</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          perferendis consequatur explicabo fuga quibusdam ex minima fugiat eos
          architecto tenetur, molestiae repellat in nisi eaque omnis. Fuga optio
          nisi reiciendis corrupti consequuntur possimus minima perferendis
          nesciunt! Impedit nisi vero explicabo dolorum nemo quod dignissimos
          eaque illum aliquam doloribus assumenda libero iste repellat deleniti
          at laborum totam similique facilis fugit error, accusantium minima.
          Quam doloremque, saepe explicabo mollitia pariatur rem suscipit minus
          consectetur cum in veniam recusandae obcaecati blanditiis cupiditate
          quidem? Eius fugiat suscipit, facere accusantium voluptatum quo optio
          culpa quisquam sed incidunt recusandae doloremque excepturi alias
          eveniet fugit totam soluta, commodi aut eum at! Enim, obcaecati sequi.
          Culpa pariatur obcaecati animi non porro, sint ipsam dolorum. Quod
          unde nostrum eum aspernatur dicta optio deserunt expedita, maxime
          dolorem adipisci, odio quae? Inventore unde quam repellendus earum
          ullam, pariatur velit est. Illo architecto quo eveniet aperiam
          corporis quos officiis non rem exercitationem sequi laborum, placeat
          ipsa veniam dolor adipisci saepe, magni consectetur eum dolorum
          tempora? Ex modi esse facere explicabo vel consequatur ipsam. Eaque
          soluta sapiente impedit ad fugit quam, voluptates quasi, nemo ipsum
          molestias fuga culpa ut debitis sunt facere eligendi odio nisi? Alias
          ex sequi debitis veniam quasi. Sed, dolorem.
        </p>
      </section>

      <section className='thanks'>
        <h3>
          our goal @ <span className='f'>f</span>
          <span className='a'>a</span>
          <span className='b'>b</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ea
          veritatis alias eveniet, distinctio dignissimos at facere non nesciunt
          quo asperiores earum nisi tempora quas minus suscipit placeat
          voluptatem amet, doloribus nulla similique aspernatur delectus. Maxime
          cupiditate soluta reiciendis esse minus, veniam labore accusantium
          error voluptates, molestiae inventore alias excepturi assumenda, earum
          est rerum ipsa recusandae officiis beatae iusto molestias. Accusamus
          optio, tempora incidunt ullam velit magni voluptatum laborum nisi
          corporis odio voluptas maxime quod tenetur. Architecto aperiam culpa
          tenetur.
        </p>
        <h4>
          thank for your petronage{" "}
          <span>
            <FaHandsHelping className='helping-hands' />
          </span>
        </h4>
      </section>
    </div>
  );
};

export default About;
