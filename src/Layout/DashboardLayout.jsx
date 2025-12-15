import React, { useState } from "react";
import Sidebar  from "../components/Sidebar";
import Topbar from "../components/Topbar";

const DashboardLayout = ({ children }) => {
  const [sidebaropen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar isOpen={sidebaropen} />

      {sidebaropen && (
        <div
          className="fixed inset-0 bg-black/30 md:hidden"
          onClick={() => setSidebarOpen()}
        ></div>
      )}

      <div className="flex-1 flex flex-col">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
