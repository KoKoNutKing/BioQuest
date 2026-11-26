import type { Area, Creature } from '../../content/world';

type WorldMapProps = {
  areas: readonly Area[];
  onSelect: (area: Area, creature: Creature) => void;
  onOpenCreatureMap: () => void;
};

export function WorldMap({ areas, onSelect, onOpenCreatureMap }: WorldMapProps) {
  return (
    <>
      <h1>Bản đồ khám phá</h1>
      <ul className="area-list">
        {areas.map((area) => {
          const { creature } = area;

          return (
            <li key={area.id}>
              {creature ? (
                <button className="area-card" onClick={() => onSelect(area, creature)}>
                  <strong>{area.name}</strong>
                  <span>{area.description}</span>
                  <span className="area-status">Khám phá {creature.name.toLowerCase()} →</span>
                </button>
              ) : (
                <div className="area-card unavailable">
                  <strong>{area.name}</strong>
                  <span>{area.description}</span>
                  <span className="area-status">Sắp mở</span>
                </div>
              )}
            </li>
          );
        })}
        <li>
          <button className="area-card" onClick={onOpenCreatureMap}>
            <strong>Bản đồ 3D</strong>
            <span>Bọ rùa, bướm và cua trong cùng một cảnh</span>
            <span className="area-status">Mở bản đồ 3D →</span>
          </button>
        </li>
      </ul>
    </>
  );
}
