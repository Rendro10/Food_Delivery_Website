import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>B.TECH Khana Pakana Wala</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @rendrosSite</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://www.youtube.com/channel/UCHOjw2cjDx54enLOBz9R4EA">
          <AiFillYoutube />
        </a>
        <a href="https://instagram.com/__rendro.ark__?igshid=ZDdkNTZiNTM=">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/Rendro1">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
