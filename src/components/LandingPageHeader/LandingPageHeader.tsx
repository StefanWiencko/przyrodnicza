import { FC } from "react";
import { Link } from "react-router-dom";

export const LandingPageHeader: FC = () => {
  return (
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
  );
};
