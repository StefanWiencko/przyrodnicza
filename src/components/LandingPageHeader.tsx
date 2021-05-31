import { FC } from "react";
import { Link } from "react-router-dom";

export const LandingPageHeader: FC = () => {
  return (
    <header>
      <h1 className="mb-3.5 p-6 text-4xl leading-tight my-4 font-bold">
        Klinika dentystyczna na&nbsp;najwyższym poziomie
      </h1>
      <div className=" flex-col justify-between p-10 bg-pj-pink text-white ">
        <Link to="/" className="flex justify-between font-bold mb-4">
          <span>Nasza Ofetra</span>
          <span>+</span>
        </Link>
        <p className="leading-tight">
          <Link to="/">
            Od nowego roku zmieniają się godziny pracy przychodni.
          </Link>
        </p>
      </div>
    </header>
  );
};
