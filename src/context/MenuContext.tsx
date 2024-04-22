import { createContext, Dispatch, PropsWithChildren, SetStateAction, useMemo, useState } from "react";

interface MenuContextType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const initialContextValue = {
  isOpen: false,
  setIsOpen: () => {},
};

export const MenuContext = createContext<MenuContextType>(initialContextValue);

export function MenuContextProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);
  const memoizedContextValue = useMemo(() => ({ isOpen, setIsOpen }), [isOpen]);

  return <MenuContext.Provider value={memoizedContextValue}>{children}</MenuContext.Provider>;
}
