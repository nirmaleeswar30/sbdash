import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        'rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}