import { FC } from "react";
import { LinkElement } from "../LinkElement/LinkElement";
import { LandingPageNewsElement } from "../LandingPageNewsElement/LandingPageNewsElement";
import Img7 from "../../assets/Rectangle_7.png";

const url = Img7;

export const LandingPageNews: FC = () => {
  return (
    <section className="landingPageNews">
      <div className="landingPageNewsCaption">
        <h5 className="h5">Aktualności</h5>
        <LinkElement to="/" text="Zobacz wszystkie" />
      </div>
      <article>
        <LandingPageNewsElement
          imageUrl={url}
          span="Godziny pracy"
          date="16.05.2020"
          h5="Zmienione godziny pracy"
          p="Od nowego roku zmieniają się godziny pracy przychodni."
          linkText="Dowiedź się więcej"
          linkToAddress="/"
        />
        <LandingPageNewsElement
          imageUrl={url}
          span="Godziny pracy"
          date="16.05.2020"
          h5="Zmienione godziny pracy"
          p="Od nowego roku zmieniają się godziny pracy przychodni."
          linkText="Dowiedź się więcej"
          linkToAddress="/"
        />
        <LandingPageNewsElement
          imageUrl={url}
          span="Godziny pracy"
          date="16.05.2020"
          h5="Zmienione godziny pracy"
          p="Od nowego roku zmieniają się godziny pracy przychodni."
          linkText="Dowiedź się więcej"
          linkToAddress="/"
        />
      </article>
    </section>
  );
};
