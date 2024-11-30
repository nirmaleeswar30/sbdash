import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Bell, CheckCircle } from 'lucide-react';

const mockAlerts = [
  {
    id: 'alert-1',
    title: 'High CPU Usage',
    description: 'Instance web-server-1 CPU usage above 90%',
    severity: 'critical',
    timestamp: '2024-02-20T15:30:00Z',
    status: 'active',
  },
  {
    id: 'alert-2',
    title: 'Low Disk Space',
    description: 'Storage volume "Database Storage" usage above 85%',
    severity: 'warning',
    timestamp: '2024-02-20T14:45:00Z',
    status: 'active',
  },
  {
    id: 'alert-3',
    title: 'Network Latency',
    description: 'High network latency detected in Private Network 1',
    severity: 'info',
    timestamp: '2024-02-20T13:15:00Z',
    status: 'resolved',
  },
];

export function AlertList() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-4">
        <h2 className="text-lg font-semibold">Recent Alerts</h2>
        <Bell className="h-5 w-5 text-gray-500" />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Alert</TableHead>
            <TableHead>Severity</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockAlerts.map((alert) => (
            <TableRow key={alert.id}>
              <TableCell>
                <div>
                  <p className="font-medium">{alert.title}</p>
                  <p className="text-sm text-gray-500">{alert.description}</p>
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    alert.severity === 'critical'
                      ? 'error'
                      : alert.severity === 'warning'
                      ? 'warning'
                      : 'default'
                  }
                >
                  {alert.severity}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge
                  variant={alert.status === 'active' ? 'error' : 'success'}
                >
                  {alert.status}
                </Badge>
              </TableCell>
              <TableCell>
                {new Date(alert.timestamp).toLocaleString()}
              </TableCell>
              <TableCell>
                {alert.status === 'active' && (
                  <button className="p-1 hover:text-green-600 transition-colors">
                    <CheckCircle className="h-4 w-4" />
                  </button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}