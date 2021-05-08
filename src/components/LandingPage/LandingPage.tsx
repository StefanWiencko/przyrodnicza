import { FC } from "react";
import { LandingPageNavbar } from "../LandingPageNavbar/LandingPageNavbar";
import { LandingPageHeader } from "../LandingPageHeader/LandingPageHeader";
import { LandingPageNews } from "../LandingPageNews/LandingPageNews";

export const LandingPage: FC = () => {
  return (
    <main className="landingPage">
      <LandingPageNavbar />
      <LandingPageHeader />
      <LandingPageNews />
    </main>
  );
};
