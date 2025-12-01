import { Lightbulb, Bell, Archive, Trash2, PenLine } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ isOpen, activeTab, setActiveTab }) {
  const items = [
    { id: "notes", icon: Lightbulb, label: "Notes", route: "notes" },
    { id: "edit", icon: PenLine, label: "Edit labels", route: "editLabels" },
    { id: "trash", icon: Trash2, label: "Trash", route: "trash" },
  ];
  const navigate = useNavigate();
  const handleClick = (id, path) => {
    navigate(path);
    setActiveTab(id);
    console.log("btn clicked", path);
  };
  return (
    <aside
      className={`fixed left-0 top-16 h-[calc(100vh-64px)] bg-white transition-all duration-300 z-40 ${
        isOpen ? "w-[280px]" : "w-20"
      } overflow-hidden hover:overflow-y-auto`}
    >
      <div className="py-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id, item.route)}
            className={`flex items-center w-full  min-h-12 px-6 pl-8 rounded-r-full my-1 transition-colors ${
              activeTab === item.id
                ? "bg-[#feefc3] text-gray-900"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <item.icon className={`min-w-6 w-6 h-6 `} />
            <span
              className={`ml-5 font-medium tracking-wide text-sm whitespace-nowrap transition-opacity duration-200 ${
                isOpen ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
}
