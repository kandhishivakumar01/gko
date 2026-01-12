
import { useState } from "react";
import { menu } from "../../data/menu";

export default function Admin() {
  const [logged, setLogged] = useState(false);
  const [pass, setPass] = useState("");

  if(!logged){
    return (
      <div>
        <h1>Admin Login</h1>
        <input type="password" placeholder="Password" onChange={e=>setPass(e.target.value)} />
        <button onClick={()=>pass==="admin123" && setLogged(true)}>Login</button>
        <p>Default password: admin123</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Edit menu inside data/menu.js for permanent updates.</p>

      {Object.entries(menu).map(([cat,items])=>(
        <div key={cat}>
          <h3>{cat}</h3>
          <ul>
            {items.map((i,idx)=>(<li key={idx}>{i.name} – {i.price}</li>))}
          </ul>
        </div>
      ))}
    </div>
  );
}
