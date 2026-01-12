
import { useState } from "react";
import { menu } from "../data/menu";

export default function AIRecommendations() {
  const all = Object.values(menu).flat();
  const [suggestions, setSuggestions] = useState([]);

  const generate = () => {
    const shuffled = all.sort(() => 0.5 - Math.random());
    setSuggestions(shuffled.slice(0,3));
  };

  return (
    <div>
      <h2>🤖 AI Menu Recommendations</h2>
      <button onClick={generate}>Recommend Dishes</button>
      <ul>
        {suggestions.map((s,i)=>(
          <li key={i}>{s.name} – {s.price}</li>
        ))}
      </ul>
    </div>
  );
}
