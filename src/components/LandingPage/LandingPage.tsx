import { FC } from "react";
import { LandingPageNavbar } from "../LandingPageNavbar/LandingPageNavbar";
import { LandingPageHeader } from "../LandingPageHeader/LandingPageHeader";
import { LandingPageNews } from "../LandingPageNews/LandingPageNews";
import { LandingPageOffer } from "../LandingPageOffer/LandingPageOffer";

export const LandingPage: FC = () => {
  return (
    <main>
      <LandingPageNavbar />
      <LandingPageHeader />
      <LandingPageNews />
      <LandingPageOffer />
    </main>
  );
};
