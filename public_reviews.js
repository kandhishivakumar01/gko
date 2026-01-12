
import { useState } from "react";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setReviews([...reviews, { name, text }]);
    setName(""); setText("");
  };

  return (
    <div>
      <h1>Customer Reviews</h1>

      <form onSubmit={submit}>
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" required />
        <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Your review" required />
        <button type="submit">Submit Review</button>
      </form>

      <ul>
        {reviews.map((r,i)=>(
          <li key={i}><b>{r.name}</b>: {r.text}</li>
        ))}
      </ul>
    </div>
  );
}
