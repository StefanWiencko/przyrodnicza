import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client";

interface fetchDataType {
  text: string;
  date: Date;
  header: string;
  paragraph: string;
  image: { asset: { url: string; _id: string } };
  linkText: string;
  linkUrl: string;
}
const query = `*[_type == "news"]{
  text,
  date,
  header,
  paragraph,
  image{
    asset->{
      _id,
      url
    },
    alt
  },
  linkText,
  linkUrl

}`;

export const LandingPageNews: FC = () => {
  const [newsElements, setNewsElemets] = useState<fetchDataType[]>();
  useEffect(() => {
    sanityClient
      .fetch(query)
      .then((data) => setNewsElemets(data))
      .catch(console.error);
  }, []);
  return (
    <section className="landingPageNews flex-col items-center p-6">
      <div className="landingPageNewsCaption flex mb-4">
        <h5 className="pj-h5 mr-6 ">AKTUALNOŚCI</h5>
        <Link className="pj-link " to="/">
          Zobacz wszystkie
        </Link>
      </div>
      <article>
        {newsElements?.map((element, index) => {
          return (
            <div className="landingPageNewsElement" key={index}>
              <img className="image" src={element.image.asset.url} alt="" />
              <div className="landingPageNewsElementCaption">
                <span className="span">{element.text}</span>
                <span className="span">{element.date}</span>
              </div>
              <div className="landingPageNewsElementBody">
                <h5 className="h5">{element.header}</h5>
                <p className="p">{element.paragraph}</p>
                <Link className="link" to={element.linkUrl}>
                  {element.linkText}
                </Link>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};
