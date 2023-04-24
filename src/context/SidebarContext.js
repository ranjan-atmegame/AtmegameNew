import React, { useState, useEffect, createContext } from "react";
import { useLocation } from "react-router-dom";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // keep the sidebar open on route change
  const location = useLocation();

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location]);

  const value = {
    isSidebarOpen,
    toggleSidebar,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
