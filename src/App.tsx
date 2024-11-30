import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/layout/sidebar';
import { Header } from './components/layout/header';
import { DashboardPage } from './pages/dashboard';
import { ComputePage } from './pages/compute';
import { NetworkPage } from './pages/network';
import { StoragePage } from './pages/storage';
import { MonitoringPage } from './pages/monitoring';
import { SettingsPage } from './pages/settings';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Sidebar />
        <Header />
        <main className="ml-[240px] pt-16">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/compute" element={<ComputePage />} />
            <Route path="/network" element={<NetworkPage />} />
            <Route path="/storage" element={<StoragePage />} />
            <Route path="/monitoring" element={<MonitoringPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;