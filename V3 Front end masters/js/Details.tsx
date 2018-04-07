import * as React from 'react';
import ShowCard from './ShowCard';
import InterfaceShow from './interfaces/Show';

const Detailts = (props: InterfaceShow) => {
  const { title, year, poster, description, trailer } = props;
  return (
    <div className="details">
      <header>
        <h1>svideo</h1>
      </header>
      <section>
        <h1>{title}</h1>
        <h2>({year})</h2>
        <img src={`/public/img/posters/${poster}`} />
        <p>
          {description}
        </p>
      </section>
      <div>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&controls=0&showinfo=0`}
          frameBorder="0"
          allowFullScreen
          title={`Trailer for ${title}`}
        />
      </div>
      {/* <ShowCard {...props} /> */}
    </div>
  );
};
export default Detailts;
