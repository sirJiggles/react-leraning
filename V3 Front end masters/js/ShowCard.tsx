import * as React from 'react';
import { Component } from 'react';
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

class ShowCard extends Component {
  public props: InterfaceShow;

  public shouldComponentUpdate() {
    // no not do the diffing, never update as we do not need to!
    return false;
  }

  public render() {
  return (
    <Wrapper to={`/details/${this.props.imdbID}`} className='show-card'>
      <Image src={`/public/img/posters/${this.props.poster}`} alt={`${this.props.title} Show Poster`} />
      <div>
        <h3>{this.props.title}</h3>
        <h4>({this.props.year})</h4>
        <p>{this.props.description}</p>
      </div>
    </Wrapper>
  )}
};

export default ShowCard;
