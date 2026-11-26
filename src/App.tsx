import { lazy, Suspense, useState } from 'react';
import { areas, type Area, type Creature } from './content/world';
import { WorldMap } from './features/world-map/WorldMap';

const CreatureLab = lazy(() => import('./features/creature-lab/CreatureLab'));
const CreatureMap = lazy(() => import('./features/creature-map/CreatureMap'));

type Screen =
  | { name: 'world-map' }
  | { name: 'creature-map' }
  | { name: 'creature-lab'; area: Area; creature: Creature };

export function App() {
  const [screen, setScreen] = useState<Screen>({ name: 'world-map' });
  const goBack = () => setScreen({ name: 'world-map' });

  return (
    <div className="shell">
      <header className="brand">BioQuest</header>
      <main>
        {screen.name === 'creature-lab' && (
          <Suspense fallback={<p role="status">Đang mở Creature Lab…</p>}>
            <CreatureLab area={screen.area} creature={screen.creature} onBack={goBack} />
          </Suspense>
        )}
        {screen.name === 'creature-map' && (
          <Suspense fallback={<p role="status">Đang mở bản đồ 3D…</p>}>
            <CreatureMap onBack={goBack} />
          </Suspense>
        )}
        {screen.name === 'world-map' && (
          <WorldMap
            areas={areas}
            onSelect={(area, creature) => setScreen({ name: 'creature-lab', area, creature })}
            onOpenCreatureMap={() => setScreen({ name: 'creature-map' })}
          />
        )}
      </main>
    </div>
  );
}
