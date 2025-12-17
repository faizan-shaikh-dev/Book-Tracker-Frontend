import { createContext, useContext, useState } from "react";
import { loginUser, registerUser } from "../utils/authServices";
import toast from "react-hot-toast";

const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // REGISTER
  const handleRegister = async (payload) => {
    try {
      setLoading(true);
      setError(null);

      const res = await registerUser(payload);
      toast.success("Register User Succsessfull");
      return res;
    } catch (err) {
      setError(err?.response?.data?.message || "Register failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // LOGIN
  const handleLogin = async (payload) => {
    try {
      setLoading(true);
      setError(null);

      const res = await loginUser(payload);
      const { token, user } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      toast.success("Login Successfull");
      return res;
    } catch (err) {
      setError(err?.response?.data?.message || "Login failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // LOGOUT
  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
   
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        handleRegister,
        handleLogin,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
