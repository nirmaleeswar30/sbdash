import { Card } from '@/components/ui/card';
import { SettingsForm } from '@/components/settings/settings-form';

export function SettingsPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">System Settings</h1>

      <Card>
        <SettingsForm />
      </Card>
    </div>
  );
}