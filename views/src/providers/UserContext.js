import React from 'react';

const UserContext = React.createContext({
    user: {}, 
    // setSearch: () => {}
});

export const UserProvider = UserContext.Provider;

export default UserContext;
