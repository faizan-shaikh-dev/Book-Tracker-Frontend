import React from "react";
import DashboardLayout from "../Layout/DashboardLayout";
import { FiPlus, FiSearch } from "react-icons/fi";
import { HiOutlineBookOpen } from "react-icons/hi";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <HiOutlineBookOpen className="text-blue-600" />
          My Books
        </h1>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer">
          <FiPlus />
          Add Book
        </button>
      </div>

      {/* Search */}
      <div className="mb-6 relative max-w-sm">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search books..."
          className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Book List Placeholder */}
      <div className="bg-white p-4 rounded shadow-sm text-gray-500">
        Book Card Placeholder
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
