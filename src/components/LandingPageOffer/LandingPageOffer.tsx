import { FC } from "react";
import { Link } from "react-router-dom";

export const LandingPageOffer: FC = () => {
  return (
    <section className="landingPageOffer">
      <h2>Oferta</h2>
      <div className="offerContainer">
        <article className="offerElement">
          <div className="offerElementContent">
            <h3>Chirurgia Szczękowa</h3>
            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu
              felis sed nibh rutrum aliquet. Pellentesque eget molestie mauris.
              Nunc pharetra, mi sodales pharetra laoreet, lectus diam bibendum
              orci, at gravida ex tellus eu nisl. In ornare, sapien vitae
              aliquet euismod, nunc nisi vulputate purus, et varius mauris quam
              vel tellus. Pellentesque nec est ut dui rutrum facilisis.
            </p>
            <div>
              <Link to="/">Umów się na wizytę</Link>
              <Link to="/">Dowiedz się więcej</Link>
            </div>
          </div>
        </article>
        <div className="offerElement">
          <div className="offerElementContent">
            <h3>Ortodoncja</h3>
            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu
              felis sed nibh rutrum aliquet. Pellentesque eget molestie mauris.
              Nunc pharetra, mi sodales pharetra laoreet, lectus diam bibendum
              orci, at gravida ex tellus eu nisl. In ornare, sapien vitae
              aliquet euismod, nunc nisi vulputate purus, et varius mauris quam
              vel tellus. Pellentesque nec est ut dui rutrum facilisis.
            </p>
            <div>
              <Link to="/">Dowiedz się więcej</Link>
            </div>
          </div>
        </div>
        <div className="offerElement">
          <div className="offerElementContent">
            <h3>Higienizacja</h3>
            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu
              felis sed nibh rutrum aliquet. Pellentesque eget molestie mauris.
              Nunc pharetra, mi sodales pharetra laoreet, lectus diam bibendum
              orci, at gravida ex tellus eu nisl. In ornare, sapien vitae
              aliquet euismod, nunc nisi vulputate purus, et varius mauris quam
              vel tellus. Pellentesque nec est ut dui rutrum facilisis.
            </p>
            <div>
              <Link to="/">Dowiedz się więcej</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
