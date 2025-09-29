import React from 'react'
import { useParams } from 'react-router-dom'
import { EPISODES } from '../data/episodes'
import useClock from '../utils/useClock'
import SubtitleOverlay from './SubtitleOverlay'


export default function EpisodePage({ lang }){
const { season, episode } = useParams()
const ep = EPISODES.find((e) => `${e.season}` === season && `${e.episode}` === episode)
const clock = useClock()


if (!ep) return <div className="max-w-6xl mx-auto p-6">Episode not found.</div>


const cues = ep.subtitles[lang] || ep.subtitles['en']


return (
<main className="max-w-5xl mx-auto p-6">
<h2 className="text-2xl font-bold">{ep.title}</h2>
<p className="text-sm text-slate-500 dark:text-slate-300">Season {ep.season} • Episode {ep.episode}</p>


<div className="relative mt-4 bg-black rounded-lg overflow-hidden">
<iframe title={ep.id} src={ep.fbEmbed} width="100%" height="480" frameBorder="0" allowFullScreen></iframe>


<SubtitleOverlay cues={cues} time={clock.t} />


<div className="absolute top-2 right-2 bg-white/80 dark:bg-slate-700/80 rounded-md p-2 flex gap-2">
<button onClick={() => clock.setRunning(!clock.running)} className="px-3 py-1 rounded bg-indigo-600 text-white">
{clock.running ? 'Pause' : 'Play'}
</button>
<button onClick={() => clock.setT(0)} className="px-3 py-1 rounded border">Reset</button>
</div>
</div>


<div className="mt-4">
<h3 className="font-semibold">Episode Details</h3>
<p className="text-sm text-slate-600 dark:text-slate-300">Add descriptions, links, or download options here.</p>
</div>
</main>
)

}
