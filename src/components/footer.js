import React, {useState, useEffect} from 'react';

const Footer = () => {
   return(
      <footer>
         <div id="Jimmy">
            <p>© GYMMEWIN</p>
            <a href="https://www.linkedin.com/in/gymmewin/"> <img src="https://cdn-icons-png.flaticon.com/128/124/124011.png" alt="LinkedIn" className="icons"/></a>

            <a href="https://github.com/gymmewin"> <img src="https://cdn-icons-png.flaticon.com/128/270/270798.png" alt="Github" className="icons"/> </a>
         </div>

         <div id="KerryBeth">
            <p>© Kery Beth Richardson </p>
            <a href=""><img src="https://cdn-icons-png.flaticon.com/128/124/124011.png" alt="LinkedIn" className="icons"/></a>

            <a href=""> <img src="https://cdn-icons-png.flaticon.com/128/270/270798.png" alt="Github" className="icons"/> </a>
         </div>

         <div id="Vlad">
            <p>© Vlad Zborovets</p>
            <a href=""> <img src="https://cdn-icons-png.flaticon.com/128/124/124011.png" alt="LinkedIn" className="icons"/></a>

            <a href=""> <img src="https://cdn-icons-png.flaticon.com/128/270/270798.png" alt="Github" className="icons"/> </a>
         </div>
      </footer>
   )
}
export default Footer;
