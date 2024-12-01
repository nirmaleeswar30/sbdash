import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Server,
  Network,
  HardDrive,
  Activity,
  Settings,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Server, label: 'Compute', path: '/compute' },
  { icon: Network, label: 'Network', path: '/network' },
  { icon: HardDrive, label: 'Storage', path: '/storage' },
  { icon: Activity, label: 'Monitoring', path: '/monitoring' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <motion.div
      initial={{ width: 240 }}
      animate={{ width: isCollapsed ? 80 : 240 }}
      className="fixed left-0 top-0 h-screen bg-white border-r border-gray-200 z-40"
    >
      <div className="flex flex-col h-full">
        <div className="p-4 flex items-center justify-between">
          {!isCollapsed && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-semibold text-orange-600"
            >
              SetupBoxs
            </motion.span>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            {isCollapsed ? (
              <ChevronRight className="h-5 w-5" />
            ) : (
              <ChevronLeft className="h-5 w-5" />
            )}
          </button>
        </div>

        <nav className="flex-1 px-2 py-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'flex items-center px-3 py-2 rounded-lg mb-1 transition-colors',
                  'hover:bg-orange-50 hover:text-orange-600',
                  isActive
                    ? 'bg-orange-100 text-orange-600'
                    : 'text-gray-700'
                )
              }
            >
              <item.icon className="h-5 w-5" />
              {!isCollapsed && (
                <span className="ml-3 text-sm font-medium">
                  {item.label}
                </span>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </motion.div>
  );
}