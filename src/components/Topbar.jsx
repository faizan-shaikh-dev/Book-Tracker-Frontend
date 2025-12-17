import React from "react";
import { FiMoon } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
export default function Topbar({ onMenuClick }) {

  const {user} = useAuth();

  return (
    <header className="h-14 bg-white border-b flex items-center justify-between px-4">
      <button
        onClick={onMenuClick}
        className="md:hidden mr-3 p-2 rounded hover:bg-gray-100"
      >
        ☰
      </button>

      <h1 className="font-semibold text-lg">{user ? `👋 Welcome ${user.name}`: "User name"}</h1>

       <button
        className="p-2 rounded hover:bg-gray-100"
        title="Toggle dark mode"
      >
        <FiMoon className="text-lg text-gray-700" />
      </button>
    </header>
  );
}
