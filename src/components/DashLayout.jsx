import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function DashLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const [activeTab, setActiveTab] = useState("notes");
  return (
    <div className="min-h-screen bg-white font-sans pt-20 sm:pt-24 pl-24 sm:pl-80">
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
