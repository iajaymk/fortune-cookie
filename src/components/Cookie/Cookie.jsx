import "./cookie.css";
import FortuneCookieLeftImg from "../../assets/fortune-cookie-left.png";
import FortuneCookieRightImg from "../../assets/fortune-cookie-right.png";
import getRandomFortune from "../../utils/getRandomFortune";
import { useState } from "react";

const Cookie = () => {
  const [cookieCracked, setCookieCracked] = useState(false);

  const revealFortune = () => {
    setCookieCracked(true);
    const fortune = getRandomFortune();
    alert(fortune);
  };

  return (
    <div className="container min-w-full flex justify-center items-center h-screen">
      <div className="cookie">
        <div className="cookie-content" onClick={revealFortune}>
          <img
            src={FortuneCookieLeftImg}
            alt="Fortune cookie image"
            className={"absolute"}
          />
          <img
            src={FortuneCookieRightImg}
            alt="Fortune cookie image"
            className={
              cookieCracked ? "rotate-300 translate-x-20 translate-y-10" : ""
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Cookie;
