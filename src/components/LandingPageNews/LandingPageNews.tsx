import { FC } from "react";
import { LinkElement } from "../LinkElement/LinkElement";
import { LandingPageNewsElement } from "../LandingPageNewsElement/LandingPageNewsElement";

const url = "../../assets/Rectangle_7.png";

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
        />
      </article>
    </section>
  );
};
