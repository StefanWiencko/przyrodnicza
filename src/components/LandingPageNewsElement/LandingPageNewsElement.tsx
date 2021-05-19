import { FC } from "react";
import { LinkElement } from "../LinkElement/LinkElement";
interface NewsElementPropTypes {
  imageUrl: string;
  span: string;
  date: string;
  h5: string;
  p: string;
  linkText: string;
  linkToAddress: string;
}
export const LandingPageNewsElement: FC<NewsElementPropTypes> = ({
  imageUrl,
  span,
  date,
  h5,
  p,
  linkText,
  linkToAddress,
}) => {
  return (
    <div className="landingPageNewsElement">
      <img className="image" src={imageUrl} alt="" />
      <div className="landingPageNewsElementCaption">
        <span className="span">{span}</span>
        <span className="span">{date}</span>
      </div>
      <div className="landingPageNewsElementBody">
        <h5 className="h5">{h5}</h5>
        <p className="p">{p}</p>
        <LinkElement to={linkToAddress} text={linkText} />
      </div>
    </div>
  );
};
