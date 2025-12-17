import React from "react";
import { FiUser } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export default function Sidebar({ isOpen }) {
  const { logoutUser } = useAuth();
  const naviagte = useNavigate();

  const handelLogout = () => {
    logoutUser();
    naviagte("/login");
    toast.success("Logout success");
  };
  return (
    <aside
      className={`fixed md:static inset-y-0 left-0 z-40 w-64 bg-white border-r
      transform transition-transform duration-200
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
      md:translate-x-0`}
    >
      <div className="flex flex-col h-full">
        <div className="px-6 py-4 text-xl font-bold border-b">
          📚 Book Tracker
        </div>

        <nav className="flex-1 px-4 py-4">
          <div className="px-4 py-2 rounded bg-blue-600 text-white">
            My Books
          </div>
        </nav>

        <div className="px-4 py-4 border-t flex  hover:text-black">
          <button
            onClick={handelLogout}
            className="w-full text-left px-4 py-2 text-white bg-red-500 hover:bg-red-400 font-bold rounded-xl"
          >
            Logout
          </button>
          <FiUser
            size={18}
            className="text-white absolute bottom-6.5 left-24"
          />
        </div>
      </div>
    </aside>
  );
}
