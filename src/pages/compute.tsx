import { Card } from '@/components/ui/card';
import { InstanceList } from '@/components/compute/instance-list';
import { mockInstances } from '@/lib/mock-data';
import { Plus } from 'lucide-react';

export function ComputePage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Compute Instances</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
          <Plus className="h-4 w-4" />
          Launch Instance
        </button>
      </div>

      <Card>
        <InstanceList instances={mockInstances} />
      </Card>
    </div>
  );
}