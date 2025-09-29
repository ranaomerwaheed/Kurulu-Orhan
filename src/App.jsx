jsx
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Banner from './components/Banner'
import Home from './components/Home'
import EpisodePage from './components/EpisodePage'
import Footer from './components/Footer'


export default function App(){
const [lang, setLang] = useState('en')
const [dark, setDark] = useState(false)


useEffect(() => {
document.documentElement.classList.toggle('dark', dark)
}, [dark])


return (
<Router>
<div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-all">
<Header lang={lang} setLang={setLang} dark={dark} setDark={setDark} />
<Banner />


<Routes>
<Route path="/" element={<Home />} />
<Route path="/season/:season/episode/:episode" element={<EpisodePage lang={lang} />} />
<Route path="/contact" element={<div className="max-w-4xl mx-auto p-6">Contact page placeholder</div>} />
</Routes>


<Footer />
</div>
</Router>
)
}