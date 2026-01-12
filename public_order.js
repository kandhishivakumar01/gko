
import { useState } from "react";
import { menu } from "../data/menu";

export default function Order() {
  const items = Object.values(menu).flat();
  const [cart, setCart] = useState([]);

  return (
    <div>
      <h1>Order Online</h1>

      {items.map((i,idx)=>(
        <div key={idx}>
          {i.name} – {i.price}
          <button onClick={()=>setCart([...cart,i])}>Add</button>
        </div>
      ))}

      <h2>Your Order</h2>
      <ul>
        {cart.map((c,i)=>(<li key={i}>{c.name}</li>))}
      </ul>

      <p>Send order via WhatsApp to confirm.</p>
    </div>
  );
}
