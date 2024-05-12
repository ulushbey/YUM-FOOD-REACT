import { Member } from "lib/types/member";
import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type authContextType = {
  token: string | undefined;
  user: Member | null;
};

const AuthContext = createContext<authContextType>({
  token: undefined,
  user: null,
});

export const AuthProvider = ({ children }: any) => {
  const [token, setToken] = useState<string | undefined>();
  const [user, setUser] = useState<Member | null>(null);
  const location = useLocation();
  useEffect(() => {
    const userLocal = localStorage.getItem("memberData");
    const tokenLocal = localStorage.getItem("accessToken");

    if (tokenLocal && userLocal) {
      setToken(tokenLocal);
      setUser(JSON.parse(userLocal));
    }
  }, [location.pathname]);

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
