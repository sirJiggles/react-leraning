/// <reference types="react" />
/// <reference types="react-redux" />
import * as React from 'react';
import InterfaceShow from './interfaces/Show';
export declare const Unwrapped: (props: {
    searchTerm: string;
    shows: InterfaceShow[];
}) => JSX.Element;
declare const _default: React.ComponentClass<Pick<{
    searchTerm: string;
    shows: InterfaceShow[];
}, "shows">> & {
    WrappedComponent: React.ComponentType<{
        searchTerm: string;
        shows: InterfaceShow[];
    }>;
};
export default _default;
