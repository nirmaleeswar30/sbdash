// Shared types for the application
export interface Instance {
  id: string;
  name: string;
  status: 'running' | 'stopped' | 'error';
  flavor: string;
  ip: string;
  created: string;
  image: string;
}

export interface Flavor {
  id: string;
  name: string;
  vcpus: number;
  ram: number;
  disk: number;
}

export interface Image {
  id: string;
  name: string;
  type: string;
  size: number;
  status: 'active' | 'pending' | 'error';
  created: string;
}