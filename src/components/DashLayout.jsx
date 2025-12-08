import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useAppStore } from "../store/useStore";

export default function DashLayout() {
  const isSidebarOpen = useAppStore((state) => state.isSidebarOpen);
  const toggleSidebar = useAppStore((state) => state.toggleSidebar);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("notes");

  return (
    <div
      className={`min-h-screen bg-white font-sans ${
        isSidebarOpen ? "pt-24 pl-80" : "pt-20  pl-24 "
      }  transition-all duration-300`}
    >
      <Header
        toggleSidebar={toggleSidebar}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <Sidebar
        isOpen={isSidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Outlet />
    </div>
  );
}
