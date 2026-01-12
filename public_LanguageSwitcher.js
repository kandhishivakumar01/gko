
import { useState } from "react";
import { translations } from "../data/lang";

export default function LanguageSwitcher() {
  const [lang, setLang] = useState("en");

  return (
    <div style={{margin:"10px"}}>
      <select onChange={e=>setLang(e.target.value)}>
        <option value="en">English</option>
        <option value="hi">हिंदी</option>
        <option value="te">తెలుగు</option>
      </select>

      <p>
        {translations[lang].home} | 
        {translations[lang].menu} | 
        {translations[lang].contact}
      </p>
    </div>
  );
}
