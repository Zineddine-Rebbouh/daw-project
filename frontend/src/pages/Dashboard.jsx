import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/Dashboard/sidebar/sidebar";
import {
  DashboardView,
  UsersView,
  ActivityView,
  AnalyticsView,
} from "../sections";
const DashBord = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col gap-2 py-12 px-10 w-full h-screen bg-[#f5f5f5]">
          <h1 className="text-xl p-4 font-bold">Dashboard</h1>
          <Routes>
            <Route path="Profile/" element={<DashboardView />} />
            <Route path="Users" element={<UsersView />} />
            <Route path="Activity" element={<ActivityView />} />
            <Route path="Analytics" element={<AnalyticsView />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default DashBord;
