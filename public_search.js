
import { useState } from "react";
import { menu } from "../data/menu";

export default function FilterMenu() {
  const [query, setQuery] = useState("");

  const items = Object.values(menu).flat().filter(i =>
    i.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Search Menu</h1>
      <input placeholder="Search food..." value={query} onChange={e=>setQuery(e.target.value)} />
      <ul>
        {items.map((i,idx)=>(<li key={idx}>{i.name} – {i.price}</li>))}
      </ul>
    </div>
  );
}
