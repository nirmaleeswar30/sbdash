import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface ResourceCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: number;
}

export function ResourceCard({ title, value, icon, trend }: ResourceCardProps) {
  return (
    <Card className="flex items-center justify-between">
      <div>
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="text-2xl font-semibold mt-1">{value}</p>
        {trend !== undefined && (
          <div className={`flex items-center mt-1 ${trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            <span className="text-sm">
              {trend >= 0 ? '+' : ''}{trend}%
            </span>
          </div>
        )}
      </div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="p-3 bg-orange-100 rounded-lg text-orange-600"
      >
        {icon}
      </motion.div>
    </Card>
  );
}