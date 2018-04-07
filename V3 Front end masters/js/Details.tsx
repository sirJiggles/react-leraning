import * as React from 'react';
import ShowCard from './ShowCard';
import InterfaceShow from './interfaces/Show';

const Detailts = (props: InterfaceShow) => (
  <div className="details">
    <ShowCard {...props} />
  </div>
);

export default Detailts;
