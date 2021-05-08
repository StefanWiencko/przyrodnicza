import { FC } from "react";
interface NewsElementPropTypes {
  imageUrl: string;
  span: string;
  date: string;
}
export const LandingPageNewsElement: FC<NewsElementPropTypes> = ({
  imageUrl,
  span,
  date,
}) => {
  const style = { backgroundImage: `url(${imageUrl})` };

  return (
    <div className="landingPageNewsElement">
      <div className="image" style={style} />
      <div className="landingPageNewsElementCaption">
        <span className="span">{span}</span>
        <span className="span">{date}</span>
      </div>
    </div>
  );
};
