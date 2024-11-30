import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Trash2, Link, Unlink } from 'lucide-react';
import { formatBytes } from '@/lib/utils';

const mockVolumes = [
  {
    id: 'vol-1',
    name: 'Database Storage',
    size: 100 * 1024 * 1024 * 1024, // 100GB
    status: 'in-use',
    type: 'SSD',
    attachedTo: 'db-server-1',
  },
  {
    id: 'vol-2',
    name: 'Backup Volume',
    size: 500 * 1024 * 1024 * 1024, // 500GB
    status: 'available',
    type: 'HDD',
    attachedTo: null,
  },
];

export function VolumeList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Size</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Attached To</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockVolumes.map((volume) => (
          <TableRow key={volume.id}>
            <TableCell className="font-medium">{volume.name}</TableCell>
            <TableCell>{formatBytes(volume.size)}</TableCell>
            <TableCell>
              <Badge
                variant={volume.status === 'in-use' ? 'success' : 'default'}
              >
                {volume.status}
              </Badge>
            </TableCell>
            <TableCell>{volume.type}</TableCell>
            <TableCell>{volume.attachedTo || '-'}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                {volume.status === 'available' ? (
                  <button className="p-1 hover:text-green-600 transition-colors">
                    <Link className="h-4 w-4" />
                  </button>
                ) : (
                  <button className="p-1 hover:text-orange-600 transition-colors">
                    <Unlink className="h-4 w-4" />
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