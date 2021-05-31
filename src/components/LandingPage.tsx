import { FC } from "react";
import { LandingPageNavbar } from "./LandingPageNavbar";
import { LandingPageHeader } from "./LandingPageHeader";
import { LandingPageNews } from "./LandingPageNews";
import { LandingPageOffer } from "./LandingPageOffer";

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
