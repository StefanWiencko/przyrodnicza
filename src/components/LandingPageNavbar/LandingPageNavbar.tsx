import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";

export const LandingPageNavbar: FC = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="landingPageNavbar">
      <div className="logo"></div>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <ul
        className="menu"
        style={isOpen ? { display: "flex" } : { display: "none" }}
      >
        <li>
          <Link to="/" className="span">
            Zabiegi i cennik
          </Link>
        </li>
        <li>
          <Link to="/" className="span">
            O nas
          </Link>
        </li>
        <li>
          <Link to="/" className="span">
            Kontakt
          </Link>
        </li>
        <li>
          <Link to="/" className="span">
            Oferty pracy
          </Link>
        </li>
      </ul>
    </nav>
  );
};
