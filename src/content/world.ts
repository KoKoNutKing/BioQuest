import world from './world.json';

export type Creature = {
  name: string;
  preview: string;
};

export type Area = {
  id: string;
  name: string;
  description: string;
  creature: Creature | null;
};

export const areas: readonly Area[] = world.areas;
