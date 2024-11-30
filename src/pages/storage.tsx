import { Card } from '@/components/ui/card';
import { VolumeList } from '@/components/storage/volume-list';
import { StorageOverview } from '@/components/storage/storage-overview';
import { Plus } from 'lucide-react';

export function StoragePage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Storage Management</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
          <Plus className="h-4 w-4" />
          Create Volume
        </button>
      </div>

      <StorageOverview />

      <Card>
        <VolumeList />
      </Card>
    </div>
  );
}