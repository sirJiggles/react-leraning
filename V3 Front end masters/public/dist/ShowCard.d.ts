/// <reference types="react" />
import { Component } from 'react';
import InterfaceShow from './interfaces/Show';
declare class ShowCard extends Component {
    props: InterfaceShow;
    shouldComponentUpdate(): boolean;
    render(): JSX.Element;
}
export default ShowCard;
