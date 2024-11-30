import { Card } from '@/components/ui/card';
import { HardDrive, Database, Archive } from 'lucide-react';

export function StorageOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-500">Total Storage</h3>
          <p className="text-2xl font-semibold mt-1">2.5 TB</p>
          <p className="text-sm text-gray-500 mt-1">Used: 1.8 TB (72%)</p>
        </div>
        <div className="p-3 bg-orange-100 rounded-lg text-orange-600">
          <HardDrive className="h-6 w-6" />
        </div>
      </Card>

      <Card className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-500">Block Storage</h3>
          <p className="text-2xl font-semibold mt-1">1.2 TB</p>
          <p className="text-sm text-gray-500 mt-1">8 Volumes</p>
        </div>
        <div className="p-3 bg-orange-100 rounded-lg text-orange-600">
          <Database className="h-6 w-6" />
        </div>
      </Card>

      <Card className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-500">Object Storage</h3>
          <p className="text-2xl font-semibold mt-1">600 GB</p>
          <p className="text-sm text-gray-500 mt-1">1,245 Objects</p>
        </div>
        <div className="p-3 bg-orange-100 rounded-lg text-orange-600">
          <Archive className="h-6 w-6" />
        </div>
      </Card>
    </div>
  );
}