import React, { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  const isUserPresent = () => {
    const savedUser = localStorage.getItem('user');
    return savedUser != null;
  };

  return (
    <UserContext.Provider value={{ user, setUser, isUserPresent }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a UserProvider');
  }
  return context;
};
