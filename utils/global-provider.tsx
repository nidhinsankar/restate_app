import { createContext, useContext } from "react";
import { useAppwrite } from "./useAppwrite";
import { getCurrentUser } from "./appwrite";

interface IGlobalContext {
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean;
  refetch: () => void;
}

interface User {
  $id: string;
  name: string;
  email: string;
  avatar: string;
}

const GlobalContext = createContext<IGlobalContext | undefined>(undefined);

interface GlobalContextProvider {
  children: React.ReactNode;
}

export const GlobalContextProvider = ({ children }: GlobalContextProvider) => {
  const { data, loading, refetch } = useAppwrite({ fn: getCurrentUser });

  const isLoggedIn = !!data;
  return (
    <GlobalContext.Provider
      value={{ isLoggedIn, user: data, loading, refetch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useglobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useglobalContext must be used within a GlobalContextProvider"
    );
  }
  return context;
};

export default GlobalContextProvider;
