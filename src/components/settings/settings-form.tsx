import { useState } from 'react';

export function SettingsForm() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    autoBackup: true,
    backupFrequency: 'daily',
    quotaWarning: 80,
    theme: 'light',
  });

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Notifications</h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Email Notifications
              </label>
              <input
                type="checkbox"
                checked={settings.emailNotifications}
                onChange={(e) =>
                  setSettings({ ...settings, emailNotifications: e.target.checked })
                }
                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium">Backup Settings</h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">
                Automatic Backup
              </label>
              <input
                type="checkbox"
                checked={settings.autoBackup}
                onChange={(e) =>
                  setSettings({ ...settings, autoBackup: e.target.checked })
                }
                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Backup Frequency
              </label>
              <select
                value={settings.backupFrequency}
                onChange={(e) =>
                  setSettings({ ...settings, backupFrequency: e.target.value })
                }
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
              >
                <option value="hourly">Hourly</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium">Resource Management</h3>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Quota Warning Threshold (%)
            </label>
            <input
              type="number"
              value={settings.quotaWarning}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  quotaWarning: parseInt(e.target.value),
                })
              }
              min="0"
              max="100"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium">Appearance</h3>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">Theme</label>
            <select
              value={settings.theme}
              onChange={(e) =>
                setSettings({ ...settings, theme: e.target.value })
              }
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}