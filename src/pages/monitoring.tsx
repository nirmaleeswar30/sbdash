import { Card } from '@/components/ui/card';
import { ResourceChart } from '@/components/dashboard/resource-chart';
import { AlertList } from '@/components/monitoring/alert-list';

const cpuHistory = Array.from({ length: 24 }, () => Math.floor(Math.random() * 100));
const memoryHistory = Array.from({ length: 24 }, () => Math.floor(Math.random() * 100));
const timeLabels = Array.from({ length: 24 }, (_, i) => `${i}:00`);

export function MonitoringPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">System Monitoring</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <ResourceChart
            title="CPU History (24h)"
            data={cpuHistory}
            labels={timeLabels}
            color="#f97316"
          />
        </Card>
        <Card>
          <ResourceChart
            title="Memory History (24h)"
            data={memoryHistory}
            labels={timeLabels}
            color="#84cc16"
          />
        </Card>
      </div>

      <Card>
        <AlertList />
      </Card>
    </div>
  );
}