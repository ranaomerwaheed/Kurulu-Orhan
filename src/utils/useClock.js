import { useState, useEffect } from 'react'


export default function useClock() {
const [t, setT] = useState(0)
const [running, setRunning] = useState(false)


useEffect(() => {
if (!running) return
const id = setInterval(() => setT((s) => +(s + 0.5).toFixed(2)), 500)
return () => clearInterval(id)
}, [running])


return { t, setT, running, setRunning }

}
