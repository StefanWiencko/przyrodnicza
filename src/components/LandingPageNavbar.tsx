import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";

export const LandingPageNavbar: FC = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav
      className="h-28 flex justify-between
     bg-white shadow-pj"
    >
      <div className="self-center bg-pj-green w-20 h-20 ml-2.5 z-0"></div>
      <Hamburger color="#7a7a7a" toggled={isOpen} toggle={setOpen} />
      <ul
        className="absolute top-0 flex-col align-center justify-evenly h-screen bg-white shadow-pj w-full p-5 pj-span"
        style={isOpen ? { display: "flex" } : { display: "none" }}
      >
        <li className="flex-grow  ">
          <Link
            to="/"
            className="text-lg flex justify-center items-center  h-full "
          >
            Zabiegi i cennik
          </Link>
        </li>
        <li className="flex-grow">
          <Link
            to="/"
            className="text-lg flex justify-center items-center  h-full "
          >
            O nas
          </Link>
        </li>
        <li className="flex-grow">
          <Link
            to="/"
            className="text-lg flex justify-center items-center  h-full "
          >
            Kontakt
          </Link>
        </li>
        <li className="flex-grow">
          <Link
            to="/"
            className="text-lg flex justify-center items-center  h-full "
          >
            Oferty pracy
          </Link>
        </li>
      </ul>
    </nav>
  );
};
