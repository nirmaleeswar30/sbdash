import { Cpu, HardDrive, Network, MonitorSmartphone } from 'lucide-react';
import { ResourceCard } from '@/components/dashboard/resource-card';
import { ResourceChart } from '@/components/dashboard/resource-chart';
import { Card } from '@/components/ui/card';

const cpuData = [45, 52, 49, 60, 55, 48, 52];
const memoryData = [65, 59, 80, 81, 76, 70, 78];
const storageData = [30, 32, 31, 34, 35, 38, 40];
const networkData = [120, 150, 130, 190, 160, 140, 145];

const timeLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ResourceCard
          title="CPU Usage"
          value="52%"
          icon={<Cpu className="h-6 w-6" />}
          trend={2.5}
        />
        <ResourceCard
          title="Memory Usage"
          value="78%"
          icon={<MonitorSmartphone className="h-6 w-6" />}
          trend={5.2}
        />
        <ResourceCard
          title="Storage Used"
          value="40%"
          icon={<HardDrive className="h-6 w-6" />}
          trend={-1.8}
        />
        <ResourceCard
          title="Network Traffic"
          value="145 MB/s"
          icon={<Network className="h-6 w-6" />}
          trend={3.1}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <ResourceChart
            title="CPU Utilization"
            data={cpuData}
            labels={timeLabels}
            color="#f97316"
          />
        </Card>
        <Card>
          <ResourceChart
            title="Memory Usage"
            data={memoryData}
            labels={timeLabels}
            color="#84cc16"
          />
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <ResourceChart
            title="Storage Usage"
            data={storageData}
            labels={timeLabels}
            color="#6366f1"
          />
        </Card>
        <Card>
          <ResourceChart
            title="Network Traffic"
            data={networkData}
            labels={timeLabels}
            color="#ec4899"
          />
        </Card>
      </div>
    </div>
  );
}