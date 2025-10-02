"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface LocaleContextType {
  isTransitioning: boolean;
  setIsTransitioning: (value: boolean) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  return (
    <LocaleContext.Provider value={{ isTransitioning, setIsTransitioning }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocaleTransition() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("useLocaleTransition must be used within LocaleProvider");
  }
  return context;
}
