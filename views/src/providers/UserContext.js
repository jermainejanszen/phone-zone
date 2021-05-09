import React from 'react';

const UserContext = React.createContext({ user: null, setUser: null });

export const UserProvider = UserContext.Provider;

export default UserContext;
