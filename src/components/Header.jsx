import { Menu, Search, RefreshCw, Settings, Grid, User } from "lucide-react";

export default function Header({ toggleSidebar, searchQuery, setSearchQuery }) {
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
        <button className="p-3 hover:bg-gray-100 rounded-full text-gray-600 hidden sm:block">
          <Grid className="w-5 h-5" />
        </button>
        <button className="p-3 hover:bg-gray-100 rounded-full text-gray-600">
          <Settings className="w-5 h-5" />
        </button>
        <div className="ml-2">
          <button className="w-9 h-9 bg-purple-600 rounded-full flex items-center justify-center text-white font-medium hover:ring-2 hover:ring-gray-200">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
