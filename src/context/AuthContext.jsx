import { useContext, useState } from "react";
import { loginUser, registerUser } from "../utils/authServices";

const AuthContext = useContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("token")) || null
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //Register User
  const chekUserRegiter = async (payload) => {
    try {
      setLoading(true);
      setError(null);

      const res = await registerUser(payload);
      console.log(res);
      return res;
    } catch (error) {
      setError(error?.response?.data?.message || "Register failed");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  //Login user
  const chekUserLogin = async (payload) => {
    try {
      setLoading(true);
      setError(null);

      const res = await loginUser(payload);
      console.log(res);
      const { token, user } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
    } catch (error) {
      setError(error?.response?.data?.message || "Login failed");
      throw error;
    } finally {
      setLoading(false);
    }
  };
  //Logout user

  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, error, registerUser, loginUser, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
