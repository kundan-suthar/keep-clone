import { Menu, Search, RefreshCw, Settings, Grid, User, LogOut } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useAppStore } from "../store/useStore";
import { useNavigate } from "react-router-dom";
export default function Header({ toggleSidebar, searchQuery, setSearchQuery }) {
  const { user, logout } = useAppStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
    navigate("/auth");
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center px-4 justify-between z-50">
      <div className="flex items-center gap-4 w-60">
        <button
          onClick={toggleSidebar}
          className="p-3 hover:bg-gray-100 rounded-full transition-colors"
        >
          <Menu className="w-6 h-6 text-gray-600" />
        </button>
        <div className="flex items-center gap-2">
          <div className="bg-yellow-400 w-8 h-8 rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-lg">K</span>
          </div>
          <span className="text-xl text-gray-600 font-medium hidden sm:block">
            NoteKeeper
          </span>
        </div>
      </div>

      <div className="flex-1 max-w-2xl px-4 lg:px-12">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-500 group-focus-within:text-black" />
          </div>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-12 pr-3 py-3 bg-gray-100 border-transparent text-gray-900 placeholder-gray-500 rounded-lg focus:outline-none focus:bg-white focus:ring-1 focus:ring-transparent focus:shadow-md transition-all sm:text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 w-auto justify-end">
        <button className="p-3 hover:bg-gray-100 rounded-full text-gray-600 hidden sm:block">
          <RefreshCw className="w-5 h-5" />
        </button>

        <div className="relative ml-2" ref={menuRef}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-9 h-9 rounded-full flex items-center justify-center overflow-hidden border border-gray-200 hover:ring-2 hover:ring-gray-200 transition-all focus:outline-none"
          >
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt={user.fullName || "User"}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-purple-600 flex items-center justify-center text-white">
                <User className="w-5 h-5" />
              </div>
            )}
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-1 border border-gray-100 transform origin-top-right transition-all">
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="text-sm text-gray-500">Signed in as</p>
                <p className="text-sm font-medium text-gray-900 truncate">
                  {user?.fullName || user?.username || "User"}
                </p>
                <p className="text-xs text-gray-400 truncate mt-0.5">
                  {user?.email}
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
