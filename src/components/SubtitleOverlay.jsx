jsx
import React from 'react'


export default function SubtitleOverlay({ cues, time }){
if (!cues || cues.length === 0) return null
const cue = cues.find((c) => time >= c.start && time <= c.end)
if (!cue) return null


return (
<div className="absolute left-0 right-0 bottom-10 flex justify-center pointer-events-none px-4">
<div className="max-w-3xl bg-black/60 text-white text-center px-4 py-2 rounded-md text-lg leading-tight subtitle-font">
{cue.text}
</div>
</div>
)
}