
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";

export default function AdminFirebase() {
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");
  const [msg,setMsg] = useState("");

  const login = async () => {
    try{
      await signInWithEmailAndPassword(auth,email,pass);
      setMsg("Login successful");
    }catch(err){
      setMsg("Login failed");
    }
  }

  return (
    <div>
      <h1>Firebase Admin Login</h1>
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e=>setPass(e.target.value)} />
      <button onClick={login}>Login</button>
      <p>{msg}</p>
    </div>
  );
}
