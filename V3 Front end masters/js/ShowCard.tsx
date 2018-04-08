import * as React from 'react';
import styled from 'styled-components';
import InterfaceShow from './interfaces/Show';
import { Link } from 'react-router-dom';

// Tagged template literal
// the styled is a function this func returns a div that
// is styled like this, this is a react component
// http://wesbos.com/tagged-template-literals/
const Wrapper = styled(Link)`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

const ShowCard = (props: InterfaceShow) => (
  <Wrapper to={`/details/${props.imdbID}`}>
    <Image src={`/public/img/posters/${props.poster}`} alt={`${props.title} Show Poster`} />
    <div>
      <h3>{props.title}</h3>
      <h4>({props.year})</h4>
      <p>{props.description}</p>
    </div>
  </Wrapper>
);

export default ShowCard;
