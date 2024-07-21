import { PackingItem } from "./PackingItem";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <PackingItem item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};
