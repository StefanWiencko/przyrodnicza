import { FC } from "react";
import { LandingPageNavbar } from "../LandingPageNavbar/LandingPageNavbar";
import { Link } from "react-router-dom";

export const LandingPage: FC = () => {
  return (
    <main className="landingPage">
      <LandingPageNavbar />
      <header>
        <h1 className="h1">Klinika dentystyczna na&nbsp;najwyższym poziomie</h1>
        <div className="headerElement ">
          <Link to="/" className="headerLink">
            <span className="h5">Nasza Ofetra</span>
            <span className="h5">+</span>
          </Link>
          <p className="p">
            <Link to="/">
              Od nowego roku zmieniają się godziny pracy przychodni.
            </Link>
          </p>
        </div>
      </header>
    </main>
  );
};
