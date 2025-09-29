jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { EPISODES } from '../data/episodes'


export default function Home(){
return (
<main className="max-w-6xl mx-auto p-6">
<section className="my-6">
<h2 className="text-2xl font-bold">Kuruluş Orhan — Season 1</h2>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Official — Season 1 is out. Click a season to view episodes.</p>
</section>


<section className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
<div className="col-span-1 md:col-span-3 bg-white dark:bg-slate-800 rounded-2xl shadow p-4">
<h3 className="font-semibold text-xl">Trailer</h3>
<div className="mt-3">
<iframe title="trailer" src={EPISODES[0].fbEmbed} width="100%" height="400" frameBorder="0" allowFullScreen></iframe>
</div>
</div>
</section>


<section className="my-6">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
{EPISODES.map((ep) => (
<Link key={ep.id} to={`/season/${ep.season}/episode/${ep.episode}`} className="block bg-white dark:bg-slate-800 rounded-xl shadow hover:shadow-lg p-4">
<div className="h-40 bg-slate-200 dark:bg-slate-700 rounded-md flex items-center justify-center">Video Thumb</div>
<h4 className="mt-3 font-semibold">{ep.title}</h4>
<p className="text-sm text-slate-500 dark:text-slate-300">Season {ep.season} • Episode {ep.episode}</p>
</Link>
))}
</div>
</section>
</main>
)
}