/// <reference types="react" />
/// <reference types="react-redux" />
import * as React from 'react';
export declare const Unwrapped: (props: {
    showSearch?: boolean;
    searchTerm: string;
    handleSearchTermChange: (event: any) => void;
}) => JSX.Element;
declare const _default: React.ComponentClass<Pick<{
    showSearch?: boolean;
    searchTerm: string;
    handleSearchTermChange: (event: any) => void;
}, "showSearch">> & {
    WrappedComponent: React.ComponentType<{
        showSearch?: boolean;
        searchTerm: string;
        handleSearchTermChange: (event: any) => void;
    }>;
};
export default _default;
