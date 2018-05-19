/// <reference types="react" />
import * as React from 'react';
import { Component } from 'react';
declare class AsyncRoute extends Component {
    state: {
        loaded: boolean;
    };
    props: {
        props: any;
        loadingPromise: Promise<{
            default: React.ComponentClass;
        }>;
    };
    component: React.ComponentClass;
    constructor(props: {
        props: any;
        loadingPromise: Promise<{
            default: React.ComponentClass;
        }>;
    });
    componentDidMount(): void;
    render(): JSX.Element;
}
export default AsyncRoute;
