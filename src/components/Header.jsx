import React from 'react'
import { Link } from 'react-router-dom'


export default function Header({ lang, setLang, dark, setDark }) {
return (
<header className="w-full shadow-md bg-white dark:bg-slate-900 transition-colors">
<div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
<div className="flex items-center gap-4">
<img src="/images/logo.webp" alt="logo" className="h-12 w-12 object-contain" />
<h1 className="text-xl font-bold">Kuruluş Orhan</h1>
</div>
<div className="flex items-center gap-3">
<select aria-label="language" value={lang} onChange={(e) => setLang(e.target.value)} className="p-2 rounded-md border">
<option value="tr">Türkçe</option>
<option value="en">English</option>
<option value="ur">اردو</option>
<option value="ar">العربية</option>
</select>


<button onClick={() => setDark((d) => !d)} className="p-2 rounded-md border">
{dark ? 'Light' : 'Dark'}
</button>


<Link to="/contact" className="p-2 rounded-md bg-indigo-600 text-white">Contact</Link>
</div>
</div>
</header>
)

}
