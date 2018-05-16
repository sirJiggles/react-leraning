/// <reference types="react" />
/// <reference types="react-redux" />
import * as React from 'react';
import InterfaceShow from './interfaces/Show';
declare const _default: React.ComponentClass<Pick<{
    rating: string;
} & {
    getAPIData(): void;
} & {
    show: InterfaceShow;
    rating: string;
}, never> & {
    show: InterfaceShow;
    rating: string;
}> & {
    WrappedComponent: React.ComponentType<{
        rating: string;
    } & {
        getAPIData(): void;
    } & {
        show: InterfaceShow;
        rating: string;
    }>;
};
export default _default;
