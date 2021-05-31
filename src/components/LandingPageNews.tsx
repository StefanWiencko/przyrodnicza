import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";

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
const date: (data: Date) => string = (data) => {
  type DateType = number | string;

  const newDate = new Date(data);

  let year: DateType = newDate.getFullYear();
  let month: DateType = newDate.getMonth() + 1;
  let dt: DateType = newDate.getDate();

  if (dt < 10) {
    dt = "0" + dt;
  }
  if (month < 10) {
    month = "0" + month;
  }

  return `${dt}.${month}.${year}`;
};
export const LandingPageNews: FC = () => {
  const [newsElements, setNewsElemets] = useState<fetchDataType[]>();
  useEffect(() => {
    sanityClient
      .fetch(query)
      .then((data) => setNewsElemets(data))
      .catch(console.error);
  }, []);
  return (
    <section className="flex-col items-center p-6">
      <div className="flex mb-5 relative">
        <h5 className="pj-h5 mr-6 ">AKTUALNOŚCI</h5>
        <Link className="pj-link " to="/">
          Zobacz wszystkie
        </Link>
        <div className="absolute bg-pj-green w-12 h-1 -bottom-1"></div>
      </div>
      <article className="flex-col">
        {newsElements?.map((element, index) => {
          return (
            <div className="w-80 bg-white mx-auto my-6" key={index}>
              <img
                className="w-full h-full"
                src={element.image.asset.url}
                alt=""
              />
              <div className="h-48">
                <div className="flex justify-between px-5 mt-4">
                  <span className="pj-span">{element.text}</span>
                  <span className="pj-span">{date(element.date)}</span>
                </div>
                <div className="px-5 h-full">
                  <h5 className="pj-h5 mt-3.5">{element.header}</h5>
                  <p className="pj-p mt-3.5">{element.paragraph}</p>
                  <Link className="pj-link block mt-8" to={element.linkUrl}>
                    {element.linkText}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};
