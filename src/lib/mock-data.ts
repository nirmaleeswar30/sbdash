import { Instance, Flavor, Image } from './types';

export const mockInstances: Instance[] = [
  {
    id: 'inst-1',
    name: 'web-server-1',
    status: 'running',
    flavor: 'standard-2x',
    ip: '192.168.1.100',
    created: '2024-02-20T10:00:00Z',
    image: 'ubuntu-22.04',
  },
  {
    id: 'inst-2',
    name: 'db-server-1',
    status: 'running',
    flavor: 'memory-4x',
    ip: '192.168.1.101',
    created: '2024-02-19T15:30:00Z',
    image: 'postgres-14',
  },
];

export const mockFlavors: Flavor[] = [
  {
    id: 'standard-2x',
    name: 'Standard 2x',
    vcpus: 2,
    ram: 8,
    disk: 80,
  },
  {
    id: 'memory-4x',
    name: 'Memory 4x',
    vcpus: 4,
    ram: 32,
    disk: 160,
  },
];

export const mockImages: Image[] = [
  {
    id: 'ubuntu-22.04',
    name: 'Ubuntu 22.04 LTS',
    type: 'Linux',
    size: 2.4,
    status: 'active',
    created: '2024-01-15T00:00:00Z',
  },
  {
    id: 'postgres-14',
    name: 'PostgreSQL 14',
    type: 'Database',
    size: 4.2,
    status: 'active',
    created: '2024-01-20T00:00:00Z',
  },
];