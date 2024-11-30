import { Bell, Search, User } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 right-0 h-16 bg-white border-b border-gray-200 z-30 flex items-center px-6 ml-[240px] w-[calc(100%-240px)]">
      <div className="flex-1 flex items-center">
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search resources..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-lg hover:bg-gray-100 relative">
          <Bell className="h-5 w-5 text-gray-600" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-orange-500 rounded-full"></span>
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-100">
          <User className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </header>
  );
}