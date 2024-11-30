import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Trash2, Settings } from 'lucide-react';

const mockNetworks = [
  {
    id: 'net-1',
    name: 'Private Network 1',
    subnet: '192.168.1.0/24',
    status: 'active',
    type: 'private',
    connected: 5,
  },
  {
    id: 'net-2',
    name: 'Public Network',
    subnet: '10.0.0.0/24',
    status: 'active',
    type: 'public',
    connected: 3,
  },
];

export function NetworkList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Subnet</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Connected Instances</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockNetworks.map((network) => (
          <TableRow key={network.id}>
            <TableCell className="font-medium">{network.name}</TableCell>
            <TableCell>{network.subnet}</TableCell>
            <TableCell>
              <Badge variant="success">{network.status}</Badge>
            </TableCell>
            <TableCell>{network.type}</TableCell>
            <TableCell>{network.connected}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <button className="p-1 hover:text-orange-600 transition-colors">
                  <Settings className="h-4 w-4" />
                </button>
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