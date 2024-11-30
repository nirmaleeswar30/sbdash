import { Instance } from '@/lib/types';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Play, Square, Trash2 } from 'lucide-react';

interface InstanceListProps {
  instances: Instance[];
}

export function InstanceList({ instances }: InstanceListProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>IP Address</TableHead>
          <TableHead>Flavor</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Created</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {instances.map((instance) => (
          <TableRow key={instance.id}>
            <TableCell className="font-medium">{instance.name}</TableCell>
            <TableCell>
              <Badge
                variant={
                  instance.status === 'running'
                    ? 'success'
                    : instance.status === 'stopped'
                    ? 'warning'
                    : 'error'
                }
              >
                {instance.status}
              </Badge>
            </TableCell>
            <TableCell>{instance.ip}</TableCell>
            <TableCell>{instance.flavor}</TableCell>
            <TableCell>{instance.image}</TableCell>
            <TableCell>{new Date(instance.created).toLocaleDateString()}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                {instance.status === 'stopped' ? (
                  <button className="p-1 hover:text-green-600 transition-colors">
                    <Play className="h-4 w-4" />
                  </button>
                ) : (
                  <button className="p-1 hover:text-orange-600 transition-colors">
                    <Square className="h-4 w-4" />
                  </button>
                )}
                <button className="p-1 hover:text-red-600 transition-colors">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}