import React from "react";
import { BsInstagram, BsGithub, BsFacebook } from "react-icons/bs";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.instagram.com/sugat_sujakhu/">
        <BsInstagram />
      </a>

      <a href="https://github.com/NotSugat">
        <BsGithub />
      </a>
      <a href="https://www.facebook.com/sujalsujakhu/">
        <BsFacebook />
      </a>
    </div>
  );
}

export default HeaderSocials;
