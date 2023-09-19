"use client";
import React, { useContext } from "react";
import { useState, createContext } from "react";
import type { SectionName } from "@/lib/types";

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};
type ActiveSectionContextType = {
  activeSection: SectionName;
  setactiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  settimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setactiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, settimeOfLastClick] = useState<number>(0);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setactiveSection,
        timeOfLastClick,
        settimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null)
    throw new Error(
      "useActiveSectionContext must be use within an ActiveSectionContextProvider"
    );
  return context;
}
