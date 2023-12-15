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
          <h1 className="text-xl p-4 font-bold text-center border-2  w-full shadow rounded-b-lg fixed z-10  bg-white ">Dashboard</h1>
        <div className="flex flex-col gap-2 py-12 px-10 w-full  min-h-screen pt-20 bg-[#f5f5f5]">
          <Routes>
            <Route path="/" element={<DashboardView />} />
            <Route path="profile" element={<DashboardView />} />
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
