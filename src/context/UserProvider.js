import React, { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [imagePreview, setImagePreview] = useState(null);

  const isUserPresent = () => {
    const savedUser = localStorage.getItem('user');
    return savedUser != null;
  };

  const handlePreviewImage = (e) => {
    console.log(e);
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === 'image') {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, isUserPresent, imagePreview, handlePreviewImage }}>
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
