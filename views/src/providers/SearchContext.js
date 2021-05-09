import React from 'react';

const SearchContext = React.createContext({
    search: {}, 
    setSearch: () => {}
});

export const SearchProvider = SearchContext.Provider;

export default SearchContext;
